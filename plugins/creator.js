let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `https://wa.me/${nomorown.split`@`[0]}`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ https://wa.me/${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
•> Owner berhak block.!
•> Berbicaralah yang sopan & tidak spam
•> Owner Hanya merespon yang berkaitan dengan BOT
•> No Telp.!
•> Owner tidak menerima save contact`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *❖ Nama* : Kaꭙࣼan
${htjava} *❖ Gender* : Laki laki
${htjava} *❖ Agama* : Islam
${htjava} *❖ Kelas* : Private
${htjava} *❖ Tinggal* : Private
${htjava} *𖤍 Nama* : Marꭙࣼࣼell
${htjava} *𖤍 Gender* : Pria
${htjava} *𖤍 Agama* : Private.
${htjava} *𖤍 Kelas* : XI
${htjava} *𖤍 Tinggal* : Ytta.
${htjava} *𖤍 Status* : Dev/Team

${htjava} *📷 Website* : ${sig}
•·––––––––––––––––––––––––––·•
`
  let teks = 'Pilih dibawah ini seperlunya dan jangan spam !!'
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	    {title: "👻 • Nomor", rowId: ".owner nomor"},
	{title: "👻 • Biodata", rowId: ".owner bio"},
	{title: "👻 • Menu", rowId: ".menu"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "👑 • Donasi", rowId: ".owner nomor"},
	{title: "👑 • Sewa", rowId: ".sewa"},
	{title: "👑 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Website", nomorown, '👤 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
