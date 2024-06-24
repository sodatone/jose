# Interface: JWTClaimVerificationOptions

## [💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

JWT Claims Set verification options.

## Properties

### audience?

• `optional` **audience**: `string` \| `string`[]

Expected JWT "aud" (Audience) Claim value(s).

***

### clockTolerance?

• `optional` **clockTolerance**: `string` \| `number`

Expected clock tolerance

- In seconds when number (e.g. 5)
- Parsed as seconds when a string (e.g. "5 seconds", "10 minutes", "2 hours").

***

### currentDate?

• `optional` **currentDate**: [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Date to use when comparing NumericDate claims, defaults to `new Date()`.

***

### issuer?

• `optional` **issuer**: `string` \| `string`[]

Expected JWT "iss" (Issuer) Claim value(s).

***

### maxTokenAge?

• `optional` **maxTokenAge**: `string` \| `number`

Maximum time elapsed (in seconds) from the JWT "iat" (Issued At) Claim value.

- In seconds when number (e.g. 5)
- Parsed as seconds when a string (e.g. "5 seconds", "10 minutes", "2 hours").

***

### requiredClaims?

• `optional` **requiredClaims**: `string`[]

Array of required Claim Names that must be present in the JWT Claims Set. Default is that: if
the [issuer option](JWTClaimVerificationOptions.md#issuer) is set, then "iss" must be present;
if the [audience option](JWTClaimVerificationOptions.md#audience) is set, then "aud" must be
present; if the [subject option](JWTClaimVerificationOptions.md#subject) is set, then "sub"
must be present; if the [maxTokenAge option](JWTClaimVerificationOptions.md#maxtokenage) is
set, then "iat" must be present.

***

### subject?

• `optional` **subject**: `string`

Expected JWT "sub" (Subject) Claim value.

***

### typ?

• `optional` **typ**: `string`

Expected JWT "typ" (Type) Header Parameter value.
