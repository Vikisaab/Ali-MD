global.PORT = process.env.PORT || 3000;
global.BotName = "Usama's Bot"
global.Developer = "Usama Dhuddi"
global.Name = "Usama"
global.ownername = "Usama Dhuddi"
global.ytname = "@botswithusama"
global.socialm = "GitHub: 5usama"
global.location = "Pakpattan, Pakistan"
global.url1 = 'https://whatsapp.com/channel/0029VavSK8U8fewp1htKiS21' //
global.url2 = 'https://whatsapp.com/channel/0029VavSK8U8fewp1htKiS21' //
global.linkgc = 'https://whatsapp.com/channel/0029VavSK8U8fewp1htKiS21'
global.delayjpm = 3500
global.ownernumber = '923239601585'  //creator number
global.ownername = '𝚄𝚂𝙰𝙼𝙰' //owner name
global.botname = 'usama\'s Bots' //name of the bot

//sticker details
global.packname = 'Stickers By Usama'
global.author = '𝚄𝚂𝙰𝙼𝙰\n\nContact: +92323960****'

//console view/theme
global.themeemoji = '🕷️'
global.wm = "𝚄𝚂𝙰𝙼𝙰."

//theme link
global.link = 'https://whatsapp.com/channel/0029VavSK8U8fewp1htKiS21'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}
// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Owner !`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Be Used By Premium User Only" Want Premium? Chat Owner`,
}

// Batas Setting
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})