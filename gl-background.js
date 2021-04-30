/*
 * TB 78+ (c) by Klaus Buecher/opto 2020-2021
 * License:  MPL2
  
 * Contributors:  see Changes.txt
 */


/*

TODO
x license blocks
x  popup installed, 
x  popup updated
options page
x  donation id
layout accountmanager overlay
wofür service?
*/

/*
 * Documentation:
 * https://github.com/thundernest/addon-developer-support/wiki/Using-the-WindowListener-API-to-convert-a-Legacy-Overlay-WebExtension-into-a-MailExtension-for-Thunderbird-78
 */

var lastTab = 0, lastWindow = 0;



messenger.runtime.onInstalled.addListener(async ({ reason, temporary }) => {
 // if (temporary) return; // skip during development
  switch (reason) {
    case "install":
      {
        const url = messenger.runtime.getURL("popup/installed.html");
//        const url = messenger.runtime.getURL("popup/about_content.html");
        //await browser.tabs.create({ url });
        await messenger.windows.create({ url, type: "popup", height: 780, width: 990, });
      }
      break;
      case "update":
        {
          const url = messenger.runtime.getURL("popup/update.html");
          //await browser.tabs.create({ url });
          await messenger.windows.create({ url, type: "popup", height: 780, width: 990, });
        }
        break;
      // see below
  }
});
/**/


async function main() {
messenger.WindowListener.registerDefaultPrefs("defaults/preferences/glodaquilla.js");


  messenger.WindowListener.registerChromeUrl([
    ["content", "glodaquilla", "content/"],
    ["locale", "glodaquilla", "en-US", "locale/en-US/"],
    ["locale", "glodaquilla", "de", "locale/de/"],
          ["resource", "glodaquilla", "content/"]
 ]);


 // messenger.WindowListener.registerOptionsPage("chrome://FolderPaneSwitcher/content/options.xhtml");
  messenger.WindowListener.registerWindow("chrome://messenger/content/messenger.xhtml", "content/scripts/gl-messenger.js");

    messenger.WindowListener.registerWindow("chrome://messenger/content/folderProps.xhtml", "content/scripts/gl-folderprops.js");

 
  /* 
   
     messenger.WindowListener.registerStartupScript("chrome/content/scripts/qf-startup.js");
     messenger.WindowListener.registerShutdownScript("chrome/content/scripts/qf-shutdown.js");
 */
  /*
   * Start listening for opened windows. Whenever a window is opened, the registered
   * JS file is loaded. To prevent namespace collisions, the files are loaded into
   * an object inside the global window. The name of that object can be specified via
   * the parameter of startListening(). This object also contains an extension member.
   */


  messenger.WindowListener.startListening();
}

main();
