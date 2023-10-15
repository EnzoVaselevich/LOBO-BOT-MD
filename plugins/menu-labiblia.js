import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `*[❗] Los comandos +18 están desactivados en este grupo, si es admin y desea activarlos use ${usedPrefix}enable modohorny*`; 
  try {
    const pp =  imagen4;
    const vn = './media/La biblia.mp3';
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
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━━━━━━━━━━━━━━━━━━┓
┃ ◉— иαgιѕα🤖⃞⃟⃠ —◉
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣⟣☯︎ ᴏᴡɴᴇʀ ᴇɴᴢɪᴛᴏ-ᴏғᴄ
┣⟣☯︎ ɴᴜᴍᴇʀᴏ: +54 9 11 6875-8497
┣⟣☯︎ ғᴇᴄʜᴀ𝙰: ${date}
┣⟣☯︎ ᴛɪᴇᴍᴘᴏ𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
┣⟣☯︎ ᴜsᴜᴀʀɪᴏs: ${rtotalreg}
┗━━━━━━━━━━━━━━━━━━━━┛
[❗𝗘𝗦𝗧𝗘 𝗖𝗢𝗡𝗧𝗘𝗡𝗜𝗗𝗢 𝗣𝗨𝗘𝗗𝗘 𝗦𝗘𝗥 𝗗𝗔𝗡̃𝗜𝗡𝗢
  𝗣𝗔𝗥𝗔 𝗟𝗔 𝗦𝗔𝗟𝗨𝗗 𝗠𝗘𝗡𝗧𝗔𝗟❗]
┏━━━━━━━━━━━━━━━━┓
┃ < ᴄᴏɴᴛᴇɴɪᴅᴏ +18 />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣❥😈  _${usedPrefix}pack_
┣❥😈  _${usedPrefix}pack2_
┣❥😈  _${usedPrefix}pack3_
┣❥😈  _${usedPrefix}videoxxx_
┣❥😈  _${usedPrefix}videolesbixxx_
┣❥😈  _${usedPrefix}tetas_
┣❥😈  _${usedPrefix}booty_
┣❥😈  _${usedPrefix}ecchi_
┣❥😈  _${usedPrefix}furro_
┣❥😈  _${usedPrefix}imagenlesbians_
┣❥😈  _${usedPrefix}panties_
┣❥😈  _${usedPrefix}pene_
┣❥😈  _${usedPrefix}porno_
┣❥😈  _${usedPrefix}randomxxx_
┣❥😈  _${usedPrefix}pechos_
┣❥😈  _${usedPrefix}yaoi_
┣❥😈  _${usedPrefix}yaoi2_
┣❥😈  _${usedPrefix}yuri_
┣❥😈  _${usedPrefix}yuri2_
┣❥😈  _${usedPrefix}trapito_
┣❥😈  _${usedPrefix}hentai_
┣❥😈  _${usedPrefix}nsfwloli_
┣❥😈  _${usedPrefix}nsfworgy_
┣❥😈  _${usedPrefix}nsfwfoot_
┣❥😈  _${usedPrefix}nsfwass_
┣❥😈  _${usedPrefix}nsfwbdsm_
┣❥😈  _${usedPrefix}nsfwcum_
┣❥😈  _${usedPrefix}nsfwero_
┣❥😈  _${usedPrefix}nsfwfemdom_
┣❥😈  _${usedPrefix}nsfwglass_
┣❥😈  _${usedPrefix}hentaipdf *<texto>*_
┣❥😈  _${usedPrefix}hentaisearch *<texto>*_
┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
      await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
      await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    }
  } catch {
    conn.reply(m.chat, '[❗] 𝗠𝗲𝗻𝘂 𝗲𝗻𝘃𝗶𝗮𝗱𝗼 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗮𝗺𝗲𝗻𝘁𝗲, 𝘀𝗶 𝗻𝗼 𝘀𝗲 𝗲𝗻𝘃𝗶𝗼 𝗿𝗲𝗽𝗼𝗿𝘁𝗲𝗹𝗼', m);
  }
};
handler.command = /^(menulabiblia|labiblia|Labiblia)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
