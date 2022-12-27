let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '10'
let ss = '20'
let sp = '35'
let sv = '100'
//premium
let ph = '5'
let pn = '20'
let pp = '25'
let pv = '35'
let ppm = '150'
//jasa run
let ri = '15'
let pk = '30'
let info = `
╭━━━━「 *SEWA* 」
┊*Hemat:* _${sh}k/Minggu
┊*Normal:* _${sn}k/Bulan                                       
┊*permanen:* = _${sv}k/Permanen (unlimited)
╰═┅═━––––––あ

╭━━━━「 *PREMIUM* 」
┊*Hemat:* _${ph}k (7 Hari)_
┊*Normal:* _${pn}k (1 bulan)_                                       
┊*Permanent:* = _${ppm}k (Unlimited)_
╰═┅═━––––––あ

╭━━━━「 *JADI BOT* 」
┊*Hemat:* _${ri}k (7 Hari)_
┊*Normal:* _${pk}k (1 bulan)_                                       
╰═┅═━––––––あ
༅ _*FITUR BOT*

✧ *Virtex Menu✅*
✧ *Menu Keren✅*
✧ *Anti Link✅* (Delete)
✧ *Button Menu✅*
✧ *Anti Sticker✅*
✧ *Anti Toxic↗️*
✧ *Anti Virus↗️*
✧ *DLL*

_Total Fitur:_ 570++

*⫹⫺ PAYMENT:*
• *QRIS*
• *ALL PAYMENT*
–––––– *🐾 Keuntungan* ––––––
- Antilink delete+kick
- Antivirus
- Jaga Gc
- Dll

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* Sewa Bot', description: 'PRICE: ' + sh + 'k (7 Hari)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* Sewa Bot', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 Permanen", rowId: '.order *Paket:* Sewa Bot', description: 'PRICE: ' + sv + 'k (Permanen)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "ꕥ HEMAT", rowId: '.order *Paket:* Premium', description: 'PRICE: ' + ph + 'k (7 Hari)' },
	    {title: "ꕥ NORMAL", rowId: '.order *Paket:* Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "ꕥ PERMANENT", rowId: '.order *Paket:* Premium', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    }, {
        title: `${htjava} JADI BOT ✦-------`,
	rows: [
	    {title: "ꕥ HEMAT", rowId: '.order *Paket:* Jadi Bot', description: 'PRICE: ' + ri + 'k (25 Hari)' },
	    {title: "ꕥ NORMAL", rowId: '.order *Paket:* Jadi Bot', description: 'PRICE: ' + pk + 'k (1 bulan)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
