import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*Loading . . .*`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(), fileName: global.wm2, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🎗️ Customer Service',
                        url: 'wa.me/6283805685278',
                    }
                },
                {
                    urlButton: {
                        displayText: '👤 Owner',
                        url: 'https://wa.me/6285641142178',

                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'OKEH👍',
                        id: 'Ok'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Cht Owner Xia Yang bener yah ^0^', sourceUrl: snh, thumbnail: await (await fetch(`https://i.ibb.co/jfZVKmC/babi2.jpg`)).buffer()  }}})
}
handler.help = ['complaint']
handler.tags = ['group','info']
handler.command = /^(complaint)$/i

handler.register = true
handler.exp = 3

export default handler
