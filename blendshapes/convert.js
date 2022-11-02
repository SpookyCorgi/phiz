let fs = require('fs')

let files = fs.readdirSync('./obj')
let blendshapes = []
files.forEach(d => {
    let file = fs.readFileSync('./obj/' + d, 'utf8')
    // reading data
    let vertices = []
    let char = file.split(/\s+/)
    for (let i = 0; i < char.length; i++) {
        if (char[i] == "v") {
            vertices.push([parseFloat(char[i + 1]), parseFloat(char[i + 2]), parseFloat(char[i + 3])]);
            i += 3;
        }
    }
    blendshapes.push(vertices)
})

let strBlendShapes = JSON.stringify(blendshapes);
let out = "let blendshapes=" + strBlendShapes + "\nexport { data,names }"
fs.writeFileSync('../blendshapes.js', out);