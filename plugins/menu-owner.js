import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const url = global.md
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━━━━━━━━━━━━━━
┃ ⏤͟͟͞͞𝗟𝗢𝗕𝗢𝗕𝗢𝗧𝗗
┗━━━━━━━━━━━
┣⟣☯︎ ᴏᴡɴᴇʀ ᴇɴᴢɪᴛᴏ-ᴏғᴄ
┣⟣☯︎ ɴᴜᴍᴇʀᴏ: +54 9 11 6875-8497
┣⟣☯︎ ғᴇᴄʜᴀ: 22 de septiembre de 2023
┣⟣☯︎ ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ: 00:11:06
┣⟣☯︎ ᴜsᴜᴀʀɪᴏs: 6
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃⏤͟͟͞͞ ᴏᴡɴᴇʀ ʏ ᴍᴏᴏᴅ
┗━━━━━━━━━━━━
    ✪ ⃟🍭𝙊𝙒𝙉𝙀𝙍𝙎 - 𝙈𝙊𝘿 
┣🗂  > ғᴜɴᴄɪᴏɴ
┣🗂  => ғᴜɴᴄɪᴏɴ
┣🗂  $ ғᴜɴᴄɪᴏɴ
┣🗂  sᴇᴛᴘʀᴇғɪx ᴘʀᴇғɪᴊᴏ
┣🗂  ᴅᴇsᴀᴄᴛɪᴠᴀʀᴡᴀ ɴᴜᴍᴇʀᴏ
┣🗂  ʀᴇsᴇᴛᴘʀᴇғx
┣🗂  ᴀᴜᴛᴏᴀᴅᴍɪɴ
┣🗂  ᴄʜᴇᴛᴀʀ
┣🗂  ʟᴇᴀᴠᴇɢᴄ
┣🗂  ᴄᴀᴊᴀғᴜᴇʀᴛᴇ
┣🗂  ʙʟᴏᴄᴋʟɪsᴛ
┣🗂  𝐛𝐥𝐨𝐜𝐤 @ᴛᴀɢ / ɴᴜᴍᴇʀᴏ
┣🗂  ᴜɴʙʟᴏᴄᴋ @ᴛᴀɢ / ɴᴜᴍᴇʀᴏ
     ✪ ⃟🍧 𝙊𝙒𝙉𝙀𝙍𝙎-𝙈𝙊𝘿-𝘽𝙊𝙏
┣✅  ᴇɴᴀʙʟᴇ 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝
┣❌  ᴅɪsᴀʙʟᴇ 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝
┣✅  ᴇɴᴀʙʟᴇ 𝚊𝚞𝚝𝚘𝚛𝚎𝚊𝚍
┣❌  𝐝𝐢𝐬𝐚𝐛𝐥𝐞 𝚊𝚞𝚝𝚘𝚛𝚎𝚊𝚍
┣✅  ᴇɴᴀʙʟᴇ 𝚙𝚞𝚋𝚕𝚒𝚌
┣❌  ᴅɪsᴀʙʟᴇ 𝚙𝚞𝚋𝚕𝚒𝚌
┣✅  ᴇɴᴀʙʟᴇ 𝚙𝚌𝚘𝚗𝚕𝚢
┣❌  ᴅɪsᴀʙʟᴇ 𝚙𝚌𝚘𝚗𝚕𝚢
┣✅  ᴇɴᴀʙʟᴇ 𝚐𝚌𝚘𝚗𝚕𝚢
┣❌  ᴅɪsᴀʙʟᴇ 𝚐𝚌𝚘𝚗𝚕𝚢
┣✅  ᴇɴᴀʙʟᴇ 𝚊𝚗𝚝𝚒𝚌𝚊𝚕𝚔
┣❌  ᴅɪsᴀʙʟᴇ 𝚊𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┣✅  ᴇɴᴀʙʟᴇ 𝚊𝚗𝚝𝚒𝚙𝚛𝚒𝚟𝚊𝚍𝚘
┣❌  ᴅɪsᴀʙʟᴇ 𝚊𝚗𝚝𝚒𝚙𝚛𝚒𝚟𝚊𝚍𝚘
┣✅  ᴇɴᴀʙʟᴇ 𝚖𝚘𝚍𝚎𝚓𝚊𝚍𝚒𝚋𝚘𝚝
┣❌  ᴅɪsᴀʙʟᴇ 𝚖𝚘𝚍𝚎𝚓𝚊𝚍𝚒𝚋𝚘𝚝
┣✅  ᴇɴᴀʙʟᴇ 𝚊𝚞𝚍𝚒𝚘𝚜_𝚋𝚘𝚝
┣❌  ᴅɪsᴀʙʟᴇ 𝚊𝚞𝚍𝚒𝚘𝚜_𝚋𝚘𝚝
┣✅  ᴇɴᴀʙʟᴇ 𝚊𝚗𝚝𝚒𝚜𝚙𝚊𝚖
┣❌  ᴅɪsᴀʙʟᴇ 𝙸𝚗𝚌𝚕𝚞𝚢𝚎
     ✪ ⃟🍭𝙊𝙒𝙉𝙀𝙍𝙎-𝙈𝙊𝘿-𝙂𝙍𝙐𝙋𝙊𝙎
┣📕  ᴍsɢ ᴛᴇxᴛᴏ
┣📕  ʙᴀɴᴄʜᴀᴛ
┣📕 ᴜɴʙᴀɴᴄʜᴀᴛ
┣📕  ʀᴇsᴇᴛᴜsᴇʀ @ᴛᴀɢ
┣📕  ʙᴀɴᴜsᴇ @ᴛᴀɢ
┣📕  ᴜɴʙᴀɴᴜsᴇʀ @ᴛᴀɢ
┣📕  ᴅᴀʀᴅɪᴀᴍᴀɴᴛᴇs @ᴛᴀɢ ᴄᴀɴᴛɪᴅᴀᴅ
┣📕  𝐚𝐧̃ᴀᴅɪʀxᴘ @ᴛᴀɢ ᴄᴀɴᴛɪᴅᴀᴅ
┣📕  ʙᴀɴᴜsᴇʀ @ᴛᴀɢ
┣📕  ʙᴄ ᴛᴇxᴛᴏ
┣📕  ʙᴄᴄʜᴀᴛs ᴛᴇxᴛᴏ
┣📕  ʙᴄɢᴄ ᴛᴇxᴛᴏ
┣📕  ʙᴄɢᴄ𝟐 ᴀᴜᴅɪᴏ
┣📕  ʙᴄɢᴄ𝟐 ᴠɪᴅᴇᴏ
┣📕  ʙᴄɢᴄ𝟐 ɪᴍᴀɢᴇɴ
┣📕  ʙᴄʙᴏᴛ ᴛᴇxᴛᴏ
┣📕  ᴄʟᴇᴀʀᴛᴘᴘ
┣📕  ʀᴇsᴛᴀʀᴛ
┣📕  ᴜᴘᴅᴀᴛᴇ
┣📕  ʙᴀɴʟɪsᴛ
┣📕  ᴀᴅᴅᴘʀᴇᴍ @𝚝𝚊𝚐𝚝𝚒𝚎𝚖𝚙𝚘
┣📕  ᴀᴅᴅᴘʀᴇᴍ𝟐 @𝚝𝚊𝚐 𝚝𝚒𝚎𝚖𝚙𝚘
┣📕  ᴀᴅᴅᴘʀᴇᴍ𝟑 @𝚝𝚊𝚐 𝚝𝚒𝚎𝚖𝚙𝚘
┣📕  ᴀᴅᴅᴘʀᴇᴍ𝟒 @𝚝𝚊𝚐 𝚝𝚒𝚎𝚖𝚙𝚘
┣📕  ᴅᴇʟᴘʀᴇᴍ @𝚝𝚊𝚐
┣📕  ʟɪsᴛᴄᴍᴅ
┣📕  sᴇᴛᴘᴘʙᴏᴛ 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗
┣📕  ᴀᴅᴅᴄᴍᴅ 𝚝𝚎𝚡𝚝𝚘 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚜𝚝𝚒𝚌𝚔𝚎𝚛/𝚒𝚖𝚊𝚐𝚎𝚗
┣📕  ᴅᴇʟᴄᴍᴅ 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 /𝚒𝚖𝚊𝚐𝚎𝚗 𝚌𝚘𝚗 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚘 𝚝𝚎𝚡𝚝𝚘 𝚊𝚜𝚒𝚐𝚗𝚊𝚍𝚘
┣📕  sᴀᴠᴇɪᴍᴀɢᴇ
┣📕  ᴠɪᴇᴡɪᴍᴀɢᴇ
┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menuowner|ownermenu|menupropietario)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
