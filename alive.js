const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `*╭━━〔 𝐍𝐄𝐗𝐔𝐒 𝐁𝐄𝐀𝐓𝐒 𝐗𝐌𝐃 〕━━┈⊷*
*┃*◈╭─────────────·๏
*┃*◈┃• *⏳Uptime*:  *${runtime(process.uptime())}*
*┃*◈┃• *📟 Ram usage*: *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB*
*┃*◈┃• *⚙️ HostName*: *${os.hostname()}*
*┃*◈┃• *👨‍💻 Owner*: *ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ*
*┃*◈┃• *🧬 Version*: *1.0.0 BETA*
*┃*◈└──────────────┈⊷
*╰────────────────────┈⊷*

> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Nᴇxᴜꜱ Bᴇᴀᴛꜱ Xᴍᴅ❗*`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/k2ssvbbT/SulaMd.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363395467876104@newsletter',
                    newsletterName: '𝐍𝐄𝐗𝐔𝐒 𝐁𝐄𝐀𝐓𝐒 𝐗𝐌𝐃',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });
        
        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/8olg10.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});