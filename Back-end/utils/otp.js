import * as OTPAuth from 'otpauth';
import dotenv from 'dotenv';
// 指定要加載的 dotenv 檔案名稱
dotenv.config({ path: 'dev.env' });
const { OTP_SECRET } = process.env;

let totp = null;

// Generate a token (returns the current token as a string).
// each user use email+sharedSecret for shared secret
const generateToken = (email = '') => {
    // 建立新的 TOTP 物件
    // 註: issuer和label是當需要整合Google Authenticator使用的
    totp = new OTPAuth.TOTP({
        issuer: 'Taipei-date-auth',
        label: email,
        algorithm: 'SHA1',
        digits: 6,
        period: 30,
        secret: OTPAuth.Secret.fromLatin1(email + OTP_SECRET),
    });

    return totp.generate();
};

// Validate a token (returns the token delta or null if it is not found in the search window, in which case it should be considered invalid).
// 驗証totp在step window期間產生的token一致用的(預設30s)
const verifyToken = (token) => {
    const delta = totp.validate({ token, window: 1 });
    return delta === null ? false : true;
};

export { generateToken, verifyToken };
