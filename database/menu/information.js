const information = (prefix, botName, ownerName) => {
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
◪ *INFORMATION*
  │
  ├─ ❏ ${prefix}bahasa
  ├─ ❏ ${prefix}kodenegara
  ├─ ❏ ${prefix}kbbi
  ├─ ❏ ${prefix}fakta
  ├─ ❏ ${prefix}infocuaca
  ├─ ❏ ${prefix}infogempa
  ├─ ❏ ${prefix}jadwaltvnow
  └─ ❏ ${prefix}covidcountry`
}
exports.information = information
