/* 
ᴄʀᴇᴀᴛᴇᴅ ʙʏ :  𝙲𝚈𝙱𝙴𝚁 𝙰𝚂𝙷𝚄𝚄 𝙾𝙵𝙲
contact me 94760091093
ᴘʟᴇᴀꜱᴇ ᴅᴏɴᴛ ʀᴇᴍᴏᴠᴇ ᴏᴡɴᴇʀ ᴄʀᴇᴅɪᴛꜱ 💀📍
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({

    pattern: "menu",

    react: "❗",

    alias: ["allmenu","bot","commands"],

    desc: "Get bot command list.",

    category: "main",

    use: '.menu3',

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `*╭════〘〘 NEXUS-BEATS-XMD 〙〙*
*┃❍ ᴜsᴇʀɴᴀᴍᴇ* : *👋 ${pushname}*
*┃❍ ᴍᴏᴅᴇ* : *${config.MODE}*
*┃❍ ᴘʀᴇғɪx* : *${config.PREFIX}*
*┃❍ ʀᴀᴍ* : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*┃❍ ᴄʀᴇᴀᴛᴏʀ* : *${config.OWNER_NAME}*
*┃❍ ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ* : *${config.ALWAYS_ONLINE}*
*┃❍ ᴠᴇʀsɪᴏɴs* : *v.1.0.0*
*╰════════════════════⊷*
 *♡•━━━━━━━━━ ☻︎ ━━━━━━━━━•♡︎*
*╭════〘 OWNER-CMD 〙════┈⊷*
*┃◈╭───────────────·๏*
*┃◈┃• ᴏᴡɴᴇʀ*
*┃◈┃• ʀᴇꜱᴛᴀʀᴛ*
*┃◈┃• ᴘɪɴɢ*
*┃◈┃• ᴘɪɴɢ2*
*┃◈┃• ᴀʟɪᴠᴇ*
*┃◈┃• ᴍᴇɴᴜ*
*┃◈┃• ʀᴇᴘᴏ*
*┃◈┃• ꜱʏꜱᴛᴇᴍ*
*┃◈┃• ᴊɪᴅ*
*┃◈┃• ɢᴊɪᴅ*
*┃◈┃• ꜱᴇᴛᴛɪɴɢ*
*┃◈┃• ᴍʏ*
*┃◈└──────────────┈⊷*
*┕──────────────────────❍*

*╭══〘 DOWNLOADER-CMD 〙══┈⊷* 
*┃◈╭────────────────·๏*
*┃◈┃• sᴏɴɢ*
*┃◈┃• sᴏɴɢ2*
*┃◈┃• sᴏɴɢ3*
*┃◈┃• ᴠᴏɪᴄᴇ*
*┃◈┃• ᴠɪᴅᴇᴏ*
*┃◈┃• ᴠɪᴅᴇᴏ2*
*┃◈┃• ꜰᴀᴄᴋʙᴏᴏᴋ*
*┃◈┃• ᴛɪᴋᴛᴏᴋ*
*┃◈└───────────────┈⊷*
*┕──────────────────────❍*

*╭══〘 ENABLE SETTINGS 〙══┈⊷* 
*┃◈╭────────────────·๏*
*┃◈┃• ᴀᴜᴛᴏ-sᴇᴇɴ*
*┃◈┃• ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ*
*┃◈┃• ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ*
*┃◈┃• ᴀʟᴡᴀʏs-ᴏɴʟɪɴᴇ*
*┃◈┃• ᴏᴡɴᴇʀ-ʀᴇᴀᴄᴛ*
*┃◈┃• ᴀᴜᴛᴏ-ʀᴇᴀᴄᴛ*
*┃◈┃• ᴍᴏᴅᴇ*
*┃◈└───────────────┈⊷*
*┕──────────────────────❍*
> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Nᴇxᴜꜱ Bᴇᴀᴛꜱ Xᴍᴅ❗*`

await conn.sendMessage(from,{image:{url: config.ALIVE_IMG},caption:madeMenu,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363395467876104@newsletter',
      newsletterName: '𝐍𝐄𝐗𝐔𝐒 𝐁𝐄𝐀𝐓𝐒 𝐗𝐌𝐃 𝚩❍𝐓 𝐌𝛆፝֟፝֟ƞ̽ʊྀི̊𓆪͛',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
