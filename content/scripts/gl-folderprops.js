/*
 * TB 78+ (c) by Klaus Buecher/opto 2020-2021
 * License:  MPL2
  
 * Contributors:  see Changes.txt
 */



var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");



Services.scriptloader.loadSubScript("chrome://glodaquilla/content/folderPropsOverlay.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://glodaquilla/content/am-inheritPane.js", window, "UTF-8");


function onLoad(activatedWhileWindowOpen) {
    console.log("glodaquilla-folderPropsOverlay", Services.appinfo.version);
window.glodaquillaFolderProps.onLoad();

}

function onUnload(isAddOnShutDown) {
    console.log("glodaquilla folderprops unload");
        Components.classes["@mozilla.org/xre/app-info;1"].
        getService(Components.interfaces.nsIXULRuntime).invalidateCachesOnRestart();
}
