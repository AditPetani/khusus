import fetch from 'node-fetch'
import { pickRandom } from '../../lib/others.js'
import { sticker } from '../../lib/sticker.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
		let res = await fetch(`https://raw.githubusercontent.com/AditPetani/khusus/main/nsfwvid.json`)
		let anu = pickRandom(await res.json())
		if (!anu) throw Error('error : no url')
		if (anu.split('.').pop() == 'gif') {
			let buffer = await sticker(false, anu, packname, author)
			await conn.sendFile(m.chat, buffer, 'sticker.webp', '', m)
		} else await conn.sendFile(m.chat, anu, '', `Ini mah favorit Owner 😋`, m, false, { viewOnce: false }) 
	} catch (e) { 
		console.log(e)
		m.reply('scrape failed') 
	}
}

handler.menunsfw = ['nsfwvid']
handler.tagsnsfw = ['randommp4']
handler.command = /^(nsfwvid)$/i

handler.premium = true
handler.limit = false
handler.nsfw = true

export default handler