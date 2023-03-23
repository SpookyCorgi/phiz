// Lightswitch Service
import { get } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
// Stores ---
// TRUE: light, FALSE: dark
/** Store: OS Preference Mode */
export const modeOsPrefers = localStorageStore('modeOsPrefers', false);
/** Store: User Preference Mode */
export const modeUserPrefers = localStorageStore('modeUserPrefers', undefined);
/** Store: Current Mode State */
export const modeCurrent = localStorageStore('modeCurrent', false);
// Get ---
/** Get the OS Preference for light/dark mode */
export function getModeOsPrefers () {
    const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    modeOsPrefers.set(prefersLightMode);
    return prefersLightMode;
}
/** Get the User for light/dark mode */
export function getModeUserPrefers () {
    return get(modeUserPrefers);
}
/** Get the Automatic Preference light/dark mode */
export function getModeAutoPrefers () {
    const os = getModeOsPrefers();
    const user = getModeUserPrefers();
    const modeValue = user !== undefined ? user : os;
    return modeValue;
}
// Set ---
/** Set the User Preference for light/dark mode */
export function setModeUserPrefers (value) {
    modeUserPrefers.set(value);
}
/** Set the the current light/dark mode */
export function setModeCurrent (value) {
    const elemHtmlClasses = document.documentElement.classList;
    const classDark = `dark`;
    value === true ? elemHtmlClasses.remove(classDark) : elemHtmlClasses.add(classDark);
    modeCurrent.set(value);
}
// Lightswitch Utility
/** Set the visible light/dark mode on page load. */
export function setInitialClassState () {

    const elemHtmlClasses = document.documentElement.classList;
    // Conditions
    //modified to default to dark mode if no user preference is set or it's undefined
    const condLocalStorageUserPrefsExists = ('modeUserPrefers' in localStorage);
    if (!condLocalStorageUserPrefsExists) {
        localStorage.setItem('modeUserPrefers', false);
    } else if (condLocalStorageUserPrefsExists && localStorage.getItem('modeUserPrefers') === undefined) {
        localStorage.setItem('modeUserPrefers', false);
    }
    const condLocalStroageUserPrefs = localStorage.getItem('modeUserPrefers') === 'false';
    const condMatchMedia = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Add/remove `.dark` class to HTML element
    if (condLocalStroageUserPrefs || (!condLocalStorageUserPrefsExists && condMatchMedia)) {
        elemHtmlClasses.add('dark');
    }
    else {
        elemHtmlClasses.remove('dark');
    }
}
// Auto-Switch Utility
/** Automatically set the visible light/dark, updates on change. */
export function autoModeWatcher () {
    const mql = window.matchMedia('(prefers-color-scheme: light)');
    function setMode (value) {
        const elemHtmlClasses = document.documentElement.classList;
        const classDark = `dark`;
        value === true ? elemHtmlClasses.remove(classDark) : elemHtmlClasses.add(classDark);
    }
    setMode(mql.matches);
    mql.onchange = () => {
        setMode(mql.matches);
    };
}
