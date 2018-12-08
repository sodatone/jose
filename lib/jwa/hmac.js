const { timingSafeEqual, createHmac } = require('crypto')
const { strict: assert } = require('assert')

const resolveHmacAlg = (alg) => {
  switch (alg) {
    case 'HS256':
      return 'sha256'
    case 'HS384':
      return 'sha384'
    case 'HS512':
      return 'sha512'
  }
}

const verify = (jwaAlg, hmacAlg, { keyObject }, payload, signature) => {
  const hmac = createHmac(hmacAlg, keyObject)
  hmac.update(payload)
  const expected = hmac.digest()
  const actual = signature

  if (expected.length !== actual.length) {
    return timingSafeEqual(actual, Buffer.allocUnsafe(actual.length))
  }

  return timingSafeEqual(actual, expected)
}

const sign = (jwaAlg, hmacAlg, { keyObject }, payload) => {
  const hmac = createHmac(hmacAlg, keyObject)
  hmac.update(payload)
  return hmac.digest()
}

module.exports = (JWA) => {
  ['HS256', 'HS384', 'HS512'].forEach((jwaAlg) => {
    const hmacAlg = resolveHmacAlg(jwaAlg)

    assert(!JWA.sign.has(jwaAlg), `sign alg ${jwaAlg} already registered`)
    assert(!JWA.verify.has(jwaAlg), `verify alg ${jwaAlg} already registered`)

    JWA.sign.set(jwaAlg, sign.bind(undefined, jwaAlg, hmacAlg))
    JWA.verify.set(jwaAlg, verify.bind(undefined, jwaAlg, hmacAlg))
  })
}