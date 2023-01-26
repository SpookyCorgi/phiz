const windowStateManager = require('electron-window-state');
const contextMenu = require('electron-context-menu');
const { app, BrowserWindow, ipcMain } = require('electron');
const serve = require('electron-serve');
const path = require('path');
const OSC = require('osc-js');

try {
	require('electron-reloader')(module);
} catch (e) {
	console.error(e);
}

const serveURL = serve({ directory: '.' });
const port = process.env.PORT || 5000;
const dev = !app.isPackaged;
let mainWindow;
let oscServer = null;

function createWindow () {
	let windowState = windowStateManager({
		defaultWidth: 480,
		defaultHeight: 640,
	});

	const mainWindow = new BrowserWindow({
		backgroundColor: 'whitesmoke',

		autoHideMenuBar: true,
		trafficLightPosition: {
			x: 17,
			y: 32,
		},
		minHeight: 640,
		minWidth: 480,
		webPreferences: {
			enableRemoteModule: true,
			contextIsolation: true,
			nodeIntegration: true,
			spellcheck: false,
			devTools: dev,
			preload: path.join(__dirname, 'preload.cjs'),
		},
		x: windowState.x,
		y: windowState.y,
		width: windowState.width,
		height: windowState.height,
	});

	windowState.manage(mainWindow);

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
		mainWindow.focus();
	});

	mainWindow.on('close', () => {
		windowState.saveState(mainWindow);
	});

	return mainWindow;
}

contextMenu({
	showLookUpSelection: false,
	showSearchWithGoogle: false,
	showCopyImage: false,
	prepend: (defaultActions, params, browserWindow) => [
		{
			label: 'Make App 💻',
		},
	],
});

function loadVite (port) {
	mainWindow.loadURL(`http://localhost:${port}`).catch((e) => {
		console.log('Error loading URL, retrying', e);
		setTimeout(() => {
			loadVite(port);
		}, 200);
	});
}

function createMainWindow () {
	mainWindow = createWindow();
	mainWindow.once('close', () => {
		mainWindow = null;
	});

	if (dev) loadVite(port);
	else serveURL(mainWindow);

}



app.once('ready', createMainWindow);
app.on('activate', () => {
	if (!mainWindow) {
		createMainWindow();
	}
});
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('to-main', (event, count) => {
	return mainWindow.webContents.send('from-main', `next count is ${count + 1}`);
});

ipcMain.on('set-blendshapes', (event, content) => {
	let [names, values] = content;
	// names.forEach((name, i) => {
	// 	let message = new OSC.Message(`/facecap/${name}`, values[i]);
	// 	oscServer.send(message);

	// });
	let message = new OSC.Message('/phiz/blendshapes');
	for (let i = 0; i < values.length; i++) {
		message.add(values[i]);
	}
	oscServer.send(message);
})

ipcMain.on('set-eye-rotation', (event, content) => {
	let [[leftX, leftY, leftZ, leftW], [rightX, rightY, rightZ, rightW]] = content;
	let message = new OSC.Message('/phiz/leftEyeRotation', leftX, leftY, leftZ, leftW);
	oscServer.send(message);

	message = new OSC.Message('/phiz/rightEyeRotation', rightX, rightY, rightZ, rightW);
	oscServer.send(message);
});

ipcMain.on('set-quaternion', (event, content) => {
	let [x, y, z, w] = content;
	let message = new OSC.Message('/phiz/headRotation', x, y, z, w);
	oscServer.send(message);
});

ipcMain.on('open-osc-server', (event, title) => {
	oscServer = new OSC({
		plugin: new OSC.DatagramPlugin({
			send: {
				port: 41235,
			}
		})
	});
	oscServer.open();
});

ipcMain.on('change-port', (event, port) => {
	if (oscServer) {
		oscServer.close();
	}
	oscServer = new OSC({
		plugin: new OSC.DatagramPlugin({
			send: {
				port: port,
			}
		})
	});
	oscServer.open(); // connect by default to ws://localhost:8080
})