const base64url = require('../help/base64url')
const { TODO } = require('../errors')

module.exports = (jwt, { complete = false } = {}) => {
  if (typeof jwt !== 'string') {
    throw new TypeError('jwt must be a string')
  }

  const parts = jwt.split('.')

  if (parts.length === 5) {
    throw new TODO('jwt appears to be encrypted')
  }

  if (parts.length !== 3) {
    throw new TODO('jwt malformed')
  }

  let [header, payload] = parts

  try {
    header = base64url.JSON.decode(header)
    payload = base64url.JSON.decode(payload)
  } catch (err) {
    throw new TODO('jwt malformed')
  }

  return complete ? { header, payload, signature: parts[2] } : payload
}