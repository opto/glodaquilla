/*
 * License:  see License.txt
 * Code until Nostalgy 0.3.0/Nostalgy 1.1.15: Zlib
 * Code additions for TB 78 or later: Creative Commons (CC BY-ND 4.0):
 *      Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) 
 
 * Contributors:  see Changes.txt
 */



var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");


//var { manage_emails } = ChromeUtils.import("chrome://nostalgy/content/manage_emails.jsm");

Services.scriptloader.loadSubScript("chrome://glodaquilla/content/folderPropsOverlay.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://glodaquilla/content/am-inheritPane.js", window, "UTF-8");
/*


 <script src="utils.js"/>
  <script src="FolderPaneSwitcher.js"/>
 
Services.scriptloader.loadSubScript("chrome://nostalgy/content/folders.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://nostalgy/content/nostalgy_keys.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://nostalgy/content/sqlite.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://nostalgy/content/nfpredict.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://nostalgy/content/nostalgy.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://nostalgy/content/header_parser.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://nostalgy/content/edit_prefs.js", window, "UTF-8");
*/

function onLoad(activatedWhileWindowOpen) {
    console.log("glodaquilla-folderPropsOverlay", Services.appinfo.version);
    /*
       let layout = WL.injectCSS("chrome://quickfolders/content/quickfolders-layout.css");
       layout.setAttribute("title", "QuickFolderStyles");
       
  

    WL.injectElements(`

    <tree id="threadTree">
    <treecols id="threadCols">
      <splitter class="tree-splitter" />
      <treecol id="colOffline" persist="hidden ordinal"
             tooltiptext="&colOffline.tooltiptext;"
             label="onDisk" fixed="true"
             class="treecol-image" src="chrome://glodaquilla/skin/good.png" />
      <splitter class="tree-splitter" />
      <treecol id="colGlodaId" persist="hidden ordinal width"
             tooltiptext="&colGlodaId.tooltiptext;"
             label="gloda id"
             class="treecol-image" src="chrome://glodaquilla/skin/number.png"/>
      <splitter class="tree-splitter" />
      <treecol id="colGlodaDirty" persist="hidden ordinal width"
             tooltiptext="&colGlodaDirty.tooltiptext;"
             label="gloda dirty"
             class="treecol-image" src="chrome://glodaquilla/skin/questions.png"/>
    </treecols>
  </tree>
  `, ["chrome://glodaquilla/locale/glodaquilla.dtd"]);
  */
 //   console.log("  */-FPS");
    //window.onNostalgyLoad();
//    window.FolderPaneSwitcher.onLoad();
window.glodaquillaFolderProps.onLoad();

//glodaquilla.onLoad();
    //manage_emails.WL = WL;
    /*   
    */
}

function onUnload(isAddOnShutDown) {
    console.log("glodaquilla unload");
    //    window.onNostalgyUnload();
//    window.glodaquilla.onUnload();
        Components.classes["@mozilla.org/xre/app-info;1"].
        getService(Components.interfaces.nsIXULRuntime).invalidateCachesOnRestart();
}
