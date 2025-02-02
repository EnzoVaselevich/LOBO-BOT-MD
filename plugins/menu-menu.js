import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  let txt = `┏━━━━━━━━━━━━━━━━━━┓
┣⟣☯︎ *ᴏᴡɴᴇʀ:* ᴇɴɪᴛᴏ-ᴏғᴄ
┣⟣☯︎ *ɴᴜᴍᴇʀᴏ:* +54 9 11 6875-8497
┣⟣☯︎ ғᴇᴄʜᴀ: ${date}
┗━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ɪɴғᴏ  ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ *🏁 ɴɪᴠᴇʟ:* ${level}
┣⟣❥ *🛠️ ᴇxᴘᴇʀɪᴇɴᴄɪᴀ:* ${exp}
┣⟣❥ *🌟 ʀᴀɴɢᴏ:* ${role}
┣⟣❥ *💎 ᴅɪᴀᴍᴀɴᴛᴇs:* ${limit}
┣⟣❥ *💰 ɴᴀɢɪsᴀᴄᴏɪɴs:* ${money}
┣⟣❥ *🛡️ ᴛᴏᴋᴇɴs:* ${joincount}
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ʙᴏᴛ ᴏғᴄ ᴏ sᴜʙ ʙᴏᴛ ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*ᴇsᴛᴇ ᴇs ᴇʟ ʙᴏᴛ ᴏғɪᴄɪᴀʟ*'}
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ sᴏʟᴜᴄɪᴏɴ ᴀ ᴇʀʀᴏʀᴇs ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣➤ Mensajes en espera
┣⟣❥ _${usedPrefix}fixmsgespera_
┣➤ Mensajes en espera (owner)
┣⟣❥ _${usedPrefix}dsowner_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ɪɴғᴏ ʙᴏᴛ ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}tyc_
┣⟣❥ _${usedPrefix}grupos_
┣⟣❥ _${usedPrefix}estado_
┣⟣❥ _${usedPrefix}infobot_
┣⟣❥ _${usedPrefix}speedtest_
┣⟣❥ _${usedPrefix}donar_
┣⟣❥ _${usedPrefix}owner_
┣⟣❥ _${usedPrefix}script_
┣⟣❥ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ɪɴsᴛᴀʟᴀʀ ᴇʟ ʙᴏᴛ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}descargarbot_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃ ᴜɴᴇ ᴜɴ ʙᴏᴛ ᴀ ᴛᴜ ɢʀᴜᴘᴏ ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}join *<enlace / link / url>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ sᴇʀʙᴏᴛ - ᴊᴀᴅɪʙᴏᴛ ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}serbot_
┣⟣❥ _${usedPrefix}stop_
┣⟣❥ _${usedPrefix}bots_
┗━━━━━━━━━━━━━━━━┛  

┏━━━━━━━━━━━━━━━━┓
*┃❍ ᴊᴜᴇɢᴏs ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}menujuegos_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ᴀᴄᴛɪᴠᴀʀ ᴏ ᴅᴇsᴀᴄᴛɪᴠᴀʀ ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}enable *welcome*_
┣⟣❥ _${usedPrefix}disable *welcome*_
┣⟣❥ _${usedPrefix}enable *modohorny*_
┣⟣❥ _${usedPrefix}disable *modohorny*_
┣⟣❥ _${usedPrefix}enable *antilink*_
┣⟣❥ _${usedPrefix}disable *antilink*_
┣⟣❥ _${usedPrefix}enable *antilink2*_
┣⟣❥ _${usedPrefix}disable *antilink2*_
┣⟣❥ _${usedPrefix}enable *detect*_
┣⟣❥ _${usedPrefix}disable *detect*_
┣⟣❥ _${usedPrefix}enable *audios*_
┣⟣❥ _${usedPrefix}disable *audios*_
┣⟣❥ _${usedPrefix}enable *autosticker*_
┣⟣❥ _${usedPrefix}disable *autosticker*_
┣⟣❥ _${usedPrefix}enable *antiviewonce*_
┣⟣❥ _${usedPrefix}disable *antiviewonce*_
┣⟣❥ _${usedPrefix}enable *antitoxic*_
┣⟣❥ _${usedPrefix}disable *antitoxic*_
┣⟣❥ _${usedPrefix}enable *antitraba*_
┣⟣❥ _${usedPrefix}disable *antitraba*_
┣⟣❥ _${usedPrefix}enable *antiarabes*_
┣⟣❥ _${usedPrefix}disable *antiarabes*_
┣⟣❥ _${usedPrefix}enable *modoadmin*_
┣⟣❥ _${usedPrefix}disable *modoadmin*_
┣⟣❥ _${usedPrefix}enable *antidelete*_
┣⟣❥ _${usedPrefix}disable *antidelete*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┣❍ ʀᴇᴘᴏʀᴛᴀʀ ᴇʀʀᴏʀᴇs ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⟣❥ _${usedPrefix}reporte *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ᴅᴇsᴄᴀʀɢᴀs ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}instagram *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}mediafire *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}gitclone *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}gdrive *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}tiktok *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}tiktokimg *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}xnxxdl *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}xvideosdl *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}twitter *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}fb *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}ytshort *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}videodoc *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}dapk2 *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}stickerpack *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}play *<texto>*_
┣⟣❥ _${usedPrefix}play2 *<texto>*_
┣⟣❥ _${usedPrefix}play.1 *<texto>*_
┣⟣❥ _${usedPrefix}play.2 *<texto>*_
┣⟣❥ _${usedPrefix}playdoc *<texto>*_
┣⟣❥ _${usedPrefix}playdoc2 *<texto>*_
┣⟣❥ _${usedPrefix}playlist *<texto>*_
┣⟣❥ _${usedPrefix}spotify *<texto>*_
┣⟣❥ _${usedPrefix}ringtone *<texto>*_
┣⟣❥ _${usedPrefix}soundcloud *<texto>*_
┣⟣❥ _${usedPrefix}imagen *<texto>*_
┣⟣❥ _${usedPrefix}pinterest *<texto>*_
┣⟣❥ _${usedPrefix}wallpaper *<texto>*_
┣⟣❥ _${usedPrefix}pptiktok *<nombre de usuario>*_
┣ ⟣❥ _${usedPrefix}igstalk *<nombre de usuario>*_
┣⟣❥ _${usedPrefix}igstory *<nombre de usuario>*_
┣⟣❥ _${usedPrefix}tiktokstalk *<username>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ʙᴜsᴄᴀᴅᴏʀᴇs ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}githubsearch *<texto>*_
┣⟣❥ _${usedPrefix}pelisplus *<texto>*_
┣⟣❥ _${usedPrefix}modapk *<texto>*_
┣⟣❥ _${usedPrefix}stickersearch *<texto>*_
┣⟣❥ _${usedPrefix}stickersearch2 *<texto>*_
┣⟣❥ _${usedPrefix}xnxxsearch *<texto>*_
┣⟣❥ _${usedPrefix}animeinfo *<texto>*_
┣⟣❥ _${usedPrefix}google *<texto>*_
┣⟣❥ _${usedPrefix}letra *<texto>*_
┣⟣❥ _${usedPrefix}wikipedia *<texto>*_
┣⟣❥ _${usedPrefix}ytsearch *<texto>*_
┣⟣❥ _${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ɢʀᴜᴘᴏs ᴀᴊᴜsᴛᴇs ❍* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}add *<numero>*_
┣⟣❥ _${usedPrefix}kick *<@tag>*_
┣⟣❥ _${usedPrefix}kick2 *<@tag>*_
┣⟣❥ _${usedPrefix}listanum *<texto>*_
┣⟣❥ _${usedPrefix}kicknum *<texto>*_
┣⟣❥ _${usedPrefix}grupo *<abrir / cerrar>*_
┣⟣❥ _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣⟣❥ _${usedPrefix}promote *<@tag>*_
┣⟣❥ _${usedPrefix}demote *<@tag>*_
┣⟣❥ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣⟣❥ _${usedPrefix}demote *<@tag>*_
┣⟣❥ _${usedPrefix}infogroup_
┣⟣❥ _${usedPrefix}resetlink_
┣⟣❥ _${usedPrefix}link_
┣⟣❥ _${usedPrefix}setname *<texto>*_
┣⟣❥ _${usedPrefix}setdesc *<texto>*_
┣⟣❥ _${usedPrefix}invocar *<texto>*_
┣⟣❥ _${usedPrefix}setwelcome *<texto>*_
┣⟣❥ _${usedPrefix}setbye *<texto>*_
┣⟣❥ _${usedPrefix}hidetag *<texto>*_
┣⟣❥ _${usedPrefix}hidetag *<audio>*_
┣⟣❥ _${usedPrefix}hidetag *<video>*_
┣⟣❥ _${usedPrefix}hidetag *<imagen>*_
┣⟣❥ _${usedPrefix}warn *<@tag>*_
┣⟣❥ _${usedPrefix}unwarn *<@tag>*_
┣⟣❥ _${usedPrefix}listwarn_
┣⟣❥ _${usedPrefix}fantasmas_
┣⟣❥ _${usedPrefix}destraba_
┣⟣❥ _${usedPrefix}setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}toanime *<imagen>*_
┣⟣❥ _${usedPrefix}togifaud *<video>*_
┣⟣❥ _${usedPrefix}toimg *<sticker>*_
┣⟣❥ _${usedPrefix}tomp3 *<video>*_
┣⟣❥ _${usedPrefix}tomp3 *<nota de voz>*_
┣⟣❥ _${usedPrefix}toptt *<video / audio>*_
┣⟣❥ _${usedPrefix}tovideo *<sticker>*_
┣⟣❥ _${usedPrefix}tourl *<video / imagen / audio>*_
┣⟣❥ _${usedPrefix}tts *<idioma> <texto>*_
┣⟣❥ _${usedPrefix}tts *<efecto> <texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ᴇғᴇᴄᴛᴏs ʏ ʟᴏɢᴏs ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}logos *<efecto> <texto>*_
┣⟣❥ _${usedPrefix}logochristmas *<texto>*_
┣⟣❥ _${usedPrefix}logocorazon *<texto>*_
┣⟣❥ _${usedPrefix}ytcomment *<texto>*_
┣⟣❥ _${usedPrefix}hornycard *<@tag>*_
┣⟣❥ _${usedPrefix}simpcard *<@tag>*_
┣⟣❥ _${usedPrefix}lolice *<@tag>*_
┣⟣❥ _${usedPrefix}itssostupid_
┣⟣❥ _${usedPrefix}pixelar_
┣⟣❥ _${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ғʀᴀsᴇs ʏ ᴛᴇxᴛᴏs ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}piropo_
┣⟣❥ _${usedPrefix}consejo_
┣⟣❥ _${usedPrefix}fraseromantica_
┣⟣❥ _${usedPrefix}historiaromantica_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ʀᴀɴᴅᴀɴɪᴍᴇs ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}menuanimes_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ʀᴀɴᴅᴏᴍ ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥  _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣⟣❥ _${usedPrefix}cristianoronaldo_
┣⟣❥ _${usedPrefix}messi_
┣⟣❥ _${usedPrefix}cat_
┣⟣❥ _${usedPrefix}dog_
┣⟣❥ _${usedPrefix}meme_
┣⟣❥ _${usedPrefix}itzy_
┣⟣❥ _${usedPrefix}blackpink_
┣⟣❥ _${usedPrefix}navidad_
┣⟣❥ _${usedPrefix}wpmontaña_
┣⟣❥ _${usedPrefix}pubg_
┣⟣❥ _${usedPrefix}wpgaming_
┣⟣❥ _${usedPrefix}wpaesthetic_
┣⟣❥ _${usedPrefix}wpaesthetic2_
┣⟣❥ _${usedPrefix}wprandom_
┣⟣❥ _${usedPrefix}wallhp_
┣⟣❥ _${usedPrefix}wpvehiculo_
┣⟣❥ _${usedPrefix}wpmoto_
┣⟣❥ _${usedPrefix}coffee_
┣⟣❥ _${usedPrefix}pentol_
┣⟣❥ _${usedPrefix}caricatura_
┣⟣❥ _${usedPrefix}ciberespacio_
┣⟣❥ _${usedPrefix}technology_
┣⟣❥ _${usedPrefix}doraemon_
┣⟣❥ _${usedPrefix}hacker_
┣⟣❥ _${usedPrefix}planeta_
┣⟣❥ _${usedPrefix}randomprofile_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ᴄᴏᴍᴀɴᴅᴏs +18 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}labiblia_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ᴇғᴇᴄᴛᴏs ᴅᴇ ᴀᴜᴅɪᴏ𝐒 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃- *𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣⟣❥ _${usedPrefix}bass_
┣⟣❥ _${usedPrefix}blown_
┣⟣❥ _${usedPrefix}deep_
┣⟣❥ _${usedPrefix}earrape_
┣⟣❥ _${usedPrefix}fast_
┣⟣❥ _${usedPrefix}fat_
┣⟣❥ _${usedPrefix}nightcore_
┣⟣❥ _${usedPrefix}reverse_
┣⟣❥ _${usedPrefix}robot_
┣⟣❥ _${usedPrefix}slow_
┣⟣❥ _${usedPrefix}smooth_
┣⟣❥ _${usedPrefix}tupai_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ᴄʜᴀᴛ ᴀɴᴏɴɪᴍᴏ ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}start_
┣⟣❥ _${usedPrefix}next_
┣⟣❥ _${usedPrefix}leave_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ᴀᴜᴅɪᴏs ❍*   
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}menuaudios_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ʜᴇʀʀᴀᴍɪᴇɴᴛᴀs ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}chatgpt *<texto>*_
┣⟣❥ _${usedPrefix}delchatgpt
┣⟣❥ _${usedPrefix}gptvoz *<texto>*_
┣⟣❥ _${usedPrefix}dall-e *<texto>*_
┣⟣❥ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣⟣❥ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣⟣❥ _${usedPrefix}readviewonce *<imagen / video>*_
┣⟣❥ _${usedPrefix}clima *<país> <ciudad>*_
┣⟣❥ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣⟣❥ _${usedPrefix}afk *<motivo>*_
┣⟣❥ _${usedPrefix}ocr *<responde a imagen>*_
┣⟣❥ _${usedPrefix}hd *<responde a imagen>*_
┣⟣❥ _${usedPrefix}acortar *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}calc *<operacion math>*_
┣⟣❥ _${usedPrefix}del *<mensaje>*_
┣⟣❥ _${usedPrefix}whatmusic *<audio>*_
┣⟣❥ _${usedPrefix}readqr *<imagen (QR)>*_
┣⟣❥ _${usedPrefix}qrcode *<texto>*_
┣⟣❥ _${usedPrefix}readmore *<texto1| texto2>*_
┣⟣❥ _${usedPrefix}styletext *<texto>*_
┣⟣❥ _${usedPrefix}traducir *<texto>*_
┣⟣❥ _${usedPrefix}nowa *<numero>*_
┣⟣❥ _${usedPrefix}covid *<pais>*_
┣⟣❥ _${usedPrefix}horario_
┣⟣❥ _${usedPrefix}dropmail_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ʀᴘɢ - ʟɪᴍɪᴛᴇs - ᴇᴄᴏɴᴏᴍɪᴀ ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}adventure_
┣⟣❥ _${usedPrefix}cazar_
┣⟣❥ _${usedPrefix}cofre_
┣⟣❥ _${usedPrefix}balance_
┣⟣❥ _${usedPrefix}claim_
┣⟣❥ _${usedPrefix}heal_
┣⟣❥ _${usedPrefix}lb_
┣⟣❥ _${usedPrefix}levelup_
┣⟣❥ _${usedPrefix}myns_
┣⟣❥ _${usedPrefix}perfil_
┣⟣❥ _${usedPrefix}work_
┣⟣❥ _${usedPrefix}minar_
┣⟣❥ _${usedPrefix}minar2_
┣⟣❥ _${usedPrefix}buy_
┣⟣❥ _${usedPrefix}buyall_
┣⟣❥ _${usedPrefix}verificar_
┣⟣❥ _${usedPrefix}robar *<cantidad> <@tag>*_
┣⟣❥ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┣⟣❥ _${usedPrefix}unreg *<numero de serie>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ sᴛɪᴄᴋᴇʀs ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⟣❥ _${usedPrefix}sticker *<responder a imagen o video>*_
┣ ⟣❥ _${usedPrefix}sticker *<enlace / link / url>*_
┣⟣❥  _${usedPrefix}sticker2 *<responder a imagen o video>*_
┣⟣❥  _${usedPrefix}sticker2 *<enlace / link / url>*_
┣⟣❥  _${usedPrefix}s *<responder a imagen o video>*_
┣⟣❥ _${usedPrefix}s *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}s2 *<responder a imagen o video>*_
┣⟣❥ _${usedPrefix}s2 *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣⟣❥ _${usedPrefix}scircle *<imagen>*_
┣⟣❥ _${usedPrefix}sremovebg *<imagen>*_
┣⟣❥ _${usedPrefix}semoji *<tipo> <emoji>*_
┣⟣❥ _${usedPrefix}qc *<texto>*_
┣⟣❥ _${usedPrefix}attp *<texto>*_
┣⟣❥ _${usedPrefix}attp2 *<texto>*_
┣⟣❥ _${usedPrefix}attp3 *<texto>*_
┣⟣❥ _${usedPrefix}ttp *<texto>*_
┣⟣❥ _${usedPrefix}ttp2 *<texto>*_
┣⟣❥ _${usedPrefix}ttp3 *<texto>*_
┣⟣❥ _${usedPrefix}ttp4 *<texto>*_
┣⟣❥ _${usedPrefix}ttp5 *<texto>*_
┣⟣❥ _${usedPrefix}pat *<@tag>*_
┣⟣❥ _${usedPrefix}slap *<@tag>*_
┣⟣❥ _${usedPrefix}kiss *<@tag>*_
┣⟣❥ _${usedPrefix}dado_
┣⟣❥ _${usedPrefix}wm *<packname> <author>*_
┣⟣❥ _${usedPrefix}stickermarker *<efecto> <imagen>*_
┣⟣❥ _${usedPrefix}stickerfilter *<efecto> <imagen>*_
┣⟣❥ _${usedPrefix}cartoon *<responder a imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ ᴏᴡɴᴇʀs ʏ ᴍᴏᴅᴇʀᴀᴛᴏʀs ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}menuowner_
┗━━━━━━━━━━━━━━━━┛`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen4, "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: m});
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|comandos|menú|help|cmd)$/i;
export default handler;
