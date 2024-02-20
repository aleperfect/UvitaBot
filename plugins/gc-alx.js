let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `*⺀🐷Vamos, llenen kchud@s⺀*\n\n❄️ ${oi}\n\n❄️ *@𝔸𝕝𝕖𝕩_𝕕𝕫𝕟𝟙:*\n`
for (let mem of participants) {
teks += `💸 @${mem.id.split('@')[0]}\n`}
teks += `➤ ~𝐮𝐯𝐢𝐭𝐚𝐛𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['alx <mesaje>','etiqueta <mesaje>']
handler.tags = ['group']
handler.command = /^(alx|etiqueta)$/i
handler.admin = true
handler.group = true
export default handler