let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://i.pinimg.com/originals/50/3a/f4/503af49701fa85b7c938d8e54ffa1549.jpg'
let text = `━━ꕥ〔 *𝚂𝙴𝚆𝙰 & 𝙿𝚁𝙴𝙼𝙸𝚄𝙼* 〕ꕥ━⬣

┏━ꕥ〔 HARGA SEWA 〕
┃
┃✾ 30 ʜᴀʀɪ 10ᴋ / ɢʀᴏᴜᴘ
┃✾ 45 ʜᴀʀɪ 20ᴋ / ɢʀᴏᴜᴘ
┃✾ 60 ʜᴀʀɪ 25ᴋ / ɢʀᴏᴜᴘ
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 100ᴋ / ɢʀᴏᴜᴘ 
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 JADI BOT 〕
┃
┃✾ 30 ʜᴀʀɪ 20ᴋ 
┃✾ 45 ʜᴀʀɪ 35ᴋ 
┃✾ 60 ʜᴀʀɪ 45ᴋ 
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 300ᴋ
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 ꜰɪᴛᴜʀ 450+ 〕
┃
┃✾ ᴡᴇʟᴄᴏᴍᴇ
┃✾ ᴋɪᴄᴋ
┃✾ ᴀɴᴛɪʟɪɴᴋ
┃✾ ꜱᴛɪᴋᴇʀ
┃✾ ꜱᴏᴜɴᴅ
┃✾ ᴀɴɪᴍᴇ
┃✾ ꜱᴇɴᴅ ᴠɪʀᴛᴇx
┃✾ ꜱᴇɴᴅ ʙᴜɢ
┃✾ ɢᴀᴍᴇ ʀᴘɢ
┃✾ ᴅʟʟ
┃
┗━━ꕥ *${author}* ꕥ━⬣
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: `https://wa.me/6285641142178?text=Hallo San, Gwa tertarik Buat menyewa bot ${namebot}`}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(masuk)$/i

export default handler
