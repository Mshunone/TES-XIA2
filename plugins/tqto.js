import { createHash } from 'crypto'
import fetch from 'node-fetch'

let handler = async function (m, { text, usedPrefix, command }) {
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let cap = `*BIG THANKS TO*
    
Terutama Terimakasih Teruntuk:
➸ @${'6283805685278'.split('@')[0]}

Terimakasih Juga Untuk Kang Banned:
➸ 0@s.whatsapp.net

─────────────────────
• God
• My ortu
• Team Saxia
• Saxia Botz ( Me )
• King Of Bear
• Nurutomo
• Adiwajshing
• Atenabot
• Baka Botz  
• Krizynofc
• Jarot
• Penyedia Layanan API
• Orang-orang yang Berdonasi
─────────────────────`
  let buttonMessage= {
'document':{'url':'https://bit.ly/SaxiaShop'},
'mimetype':global.ddocx,
'fileName':'Bot Whatsapp ┊↬ Saxia˘MD',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz',
'mediaType':2,
'previewType':'pdf',
'title':`「 ©Saxia˘Botz 」`,
'body':`By NexEp`,
'thumbnail':await(await fetch('https://i.pinimg.com/originals/50/3a/f4/503af49701fa85b7c938d8e54ffa1549.jpg')).buffer(),
'sourceUrl':'https://bit.ly/SaxiaShop'}},
'caption':cap,
'footer':`Ini Ucapan Terima Kasih Untuk Orang Yang Mau Membantu

${botdate}`,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Mҽɳυ'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'Hαʅʅσ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.tags = ['xp']

handler.command = /^(tqto)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
