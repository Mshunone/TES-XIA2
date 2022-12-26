let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*Nyari SC ya banh?*
    

📮 Cari Sono di YT
Mendingan join grub official :
https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz

• Jika ada eror di sc hub Owner

--------| Thanks to |---------
- Allah SWT
- My parents
- All Friends
- All Contributors
- All Creator Bot
- Adiwajshing
- Nurutomo
- BochilGaming`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Script di sini', url: 'https://wa.me/6285641142178'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc'] 
 handler.tags = ['info'] 
 handler.command = /^(s(ourcode|c))$/i 
  
 export default handler
