const music = (prefix, botName, ownerName) => {
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
◪ *MUSIC*
  │
  ├─ ❏ ${prefix}play
  ├─ ❏ ${prefix}joox
  ├─ ❏ ${prefix}lirik
  └─ ❏ ${prefix}chord`
}
exports.music = music
