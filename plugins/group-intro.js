let handler = async (m, { conn }) => {


let krtu = `𝐈𝐍𝐓𝐑𝐎‹•═════════════❏
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Kelas      :* 
│ *Asal         :* 
╰═════ WELCOME. ━━━━❏
http://bīt.ly/ᯤ
`
conn.fakeReply(m.chat, krtu, '0@s.whatsapp.net', wm)
}
handler.command = /^(intro)$/i
handler.group = true

export default handler
