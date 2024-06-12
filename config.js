const fs = require("fs");
const chalk = require("chalk");
//const fs = require('fs-extra')
//if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


//
/*global.Owner = process.env.OWNER || "2349068398988";// Owner number
global.OwnerNumber = process.env.OWNER_NUMBER || "2349068398988" ;// Also owner number
global.ownertag = process.env.OWNER_TAG || "2349068398988";// Also owner number
global.sessID = process.env.sessID || ""; //Session ID here.
global.OwnerName = process.env.OWNER_NAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";// Owner Name
global.BotName = "🐦Makino-md-v2";//Do not change 🥵
global.packname = process.env.PACKNAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";//Sticker pack name.
global.author = "🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";//Do not change                            //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change or bot will not function.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
*/
global.Owner = ["2349068398988"];
global.OwnerNumber = ["2349068398988"];
global.ownertag = ["2349068398988"]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "saints rage";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.sessID = process.env.sessID || ""; //Session ID here.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2349068398988"; //Bot creator WhatsApp link,don't change or bot will not work.
//
global.sessionName = "session";                          //Do not change.


//
global.prefa = ["/"];
//process.env.PREFIX || "/";// Prefix                                 //Default prefix here.
global.openAiAPI = "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";


//
global.location = "Lagos, Nigeria";                   
global.reactmoji = "🐦";
global.themeemoji = "😏";
global.vidmenu = { url: 'https://tenor.com/view/jujutsu-kaisen0-yuta-okkotsu-gif-26767662' };
global.websitex = "https://github.com/anonphoenix007";
global.lolhuman = "KaysaS";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
{"noiseKey":{"private":{"type":"Buffer","data":"yKAQufiIZ/Y7RbqTvO2NeCPfVA16eCEr5dX76BUBymg="},"public":{"type":"Buffer","data":"rElwGzgmSSBcrdDdfT+oIEyVEmtS4tDSrtDPdAvm7Qw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"cLL2Klyfc1qo08V/aTbkLWjF5V7dQSxUYhwSVyWW0lI="},"public":{"type":"Buffer","data":"SnYa4eAZdR19e7aMaZSA8EWbK2XdRoDOV8Kbb76VG34="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"IGQHqQzzO9X/zEFscGupRCyXevzyEL448mfXPoRms0c="},"public":{"type":"Buffer","data":"glRBVzolKsJNB1C2r/rnMkVWNQCELfr7nYukYpCQfwk="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"WLn4nkONUaIlz4fDD9JC0hWnVJWdqksN0uo+/hRVoXA="},"public":{"type":"Buffer","data":"CsgSOE3BG7F5szo5Qdl0pWYlZdIlbyT+18OjO7LtBWk="}},"signature":{"type":"Buffer","data":"eJzXNfoln5tFlvraqrtuBJafe3VNeJN5OdUIvceioUdtjYQ4YuF6fJfQtR2LpqvKFS0SACgGcHzQaIBXhxE7Ag=="},"keyId":1},"registrationId":136,"advSecretKey":"2/S5OM6Wm3NV0eAoOld5TyI2AtlrUN1GA4JQCF1dES8=","processedHistoryMessages":[{"key":{"remoteJid":"2349068398988@s.whatsapp.net","fromMe":true,"id":"93C166407D3BF4FAE5D8657A0C68EE90"},"messageTimestamp":1718234648}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"yQTcygjyTUWs1FwLcaJBZg","phoneId":"371fb58e-b2d8-4ab5-985d-a0d86fbe442f","identityId":{"type":"Buffer","data":"7F1K9eNqE1rRDprHTkSRs/gb9Wk="},"registered":true,"backupToken":{"type":"Buffer","data":"qVYZ0oV4Vw0ePcHw0w31qRdIbWw="},"registration":{},"pairingCode":"QGGB3LAJ","me":{"id":"2349068398988:17@s.whatsapp.net","name":"joy"},"account":{"details":"CLSDudsFEIjcqLMGGAEgACgA","accountSignatureKey":"hoCRzjnzd2iNsjiqNwcaf5Ac5gjGbE++6kJjWYBLqV4=","accountSignature":"t22GWepIXAEFGHg6wXTzkMOzulTgdsACDAHddIKmoCQ+ElcstvI4C75BndXgwCIqQFs2z4h0N51jMJ5b63FMCQ==","deviceSignature":"8BrFVtzWSVcAJccI6mzqxp1P0SNPlyNIA/SilR5zCawLfJhwhvdMo4mx7z4bMytdrRxf2tutL8/i315TinhGBA=="},"signalIdentities":[{"identifier":{"name":"2349068398988:17@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BYaAkc4583dojbI4qjcHGn+QHOYIxmxPvupCY1mAS6le"}}],"platform":"smba","lastAccountSyncTimestamp":1718234644,"myAppStateKeyId":"AAAAACCo"}
