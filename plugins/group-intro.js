let handler = async (m, { conn }) => {


let krtu = `๐๐๐๐๐โนโขโโโโโโโโโโโโโโ
โ       *ใ Kartu Intro ใ*
โ *Nama     :* 
โ *Gender   :* 
โ *Umur      :* 
โ *Kelas      :* 
โ *Asal         :* 
โฐโโโโโ WELCOME. โโโโโ
http://bฤซt.ly/แฏค
`
conn.fakeReply(m.chat, krtu, '0@s.whatsapp.net', wm)
}
handler.command = /^(intro)$/i
handler.group = true

export default handler
