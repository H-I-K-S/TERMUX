const kerang = (prefix, botName, ownerName) => {
	return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}
  ❏ Version: 0.0.4
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *MAKER*
  │
  ├─ ❏ ${prefix}apakah
  ├─ ❏ ${prefix}kapankah
  ├─ ❏ ${prefix}rate
  └─ ❏ ${prefix}bisakah`
}
exports.kerang = kerang
