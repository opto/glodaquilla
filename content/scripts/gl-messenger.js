/*
 * TB 78+ (c) by Klaus Buecher/opto 2020-2021
 * License:  MPL2
  
 * Contributors:  see Changes.txt
 */



var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");


Services.scriptloader.loadSubScript("chrome://glodaquilla/content/glodaquillaOverlay.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://glodaquilla/content/inheritPane-service.js", window, "UTF-8");


function onLoad(activatedWhileWindowOpen) {
    console.log("glodaquilla", Services.appinfo.version);

    WL.injectElements(`

    <tree id="threadTree">
    <treecols id="threadCols">
      <splitter class="tree-splitter" />
      <treecol id="colOffline" persist="hidden ordinal"
             tooltiptext="&colOffline.tooltiptext;"
             label="onDisk" fixed="true"
             class="treecol-image" src="chrome://glodaquilla/content/skin/good.png" />
      <splitter class="tree-splitter" />
      <treecol id="colGlodaId" persist="hidden ordinal width"
             tooltiptext="&colGlodaId.tooltiptext;"
             label="gloda id"
             class="treecol-image" src="chrome://glodaquilla/content/skin/number.png"/>
      <splitter class="tree-splitter" />
      <treecol id="colGlodaDirty" persist="hidden ordinal width"
             tooltiptext="&colGlodaDirty.tooltiptext;"
             label="gloda dirty"
             class="treecol-image" src="chrome://glodaquilla/content/skin/questions.png"/>
    </treecols>
  </tree>
  `, ["chrome://glodaquilla/locale/glodaquilla.dtd"]);

    console.log("messenger-FPS");
 window.glodaquilla.onLoad();
}

function onUnload(isAddOnShutDown) {
    console.log("glodaquilla unload");
    window.glodaquilla.onUnload();
        Components.classes["@mozilla.org/xre/app-info;1"].
        getService(Components.interfaces.nsIXULRuntime).invalidateCachesOnRestart();
}
