import * as yup from 'yup';

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*~()-+])[A-Za-z\d!@#$%^&*~()-+]{8,16}$/;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validRegex = /^\d+$/;

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, '請輸入正確的email，如：example@example.com')
    .required('必填'),
  validCode: yup
    .string()
    .test('is-number', '請輸入6位數字', (value) => {
      if (!value) return true; // 如果值是空的，則跳過驗證，交由後續的 `required` 驗證處理
      return /^\d+$/.test(value); // 檢查字符串是否只包含數字字符
    })
    .min(6, '請輸入6位數字')
    .max(6, '請輸入6位數字')
    .required('必填'),
  name: yup.string().required('必填'),
  password: yup
    .string()
    .min(8, '請輸入8個字元以上')
    .matches(passwordRules, { message: '請輸入符合需求的密碼' })
    .required('必填'),
  confirmPassword: yup
    .string()
    .min(8, '請輸入8個字元以上')
    .oneOf([yup.ref('password'), null], '與密碼不符')
    .required('必填'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().matches(emailRegex, '請輸入正確的email').required('必填'),
  password: yup
    .string()
    .min(8, '請輸入8個字元以上')
    .matches(passwordRules, { message: '請輸入符合需求的密碼' })
    .required('必填'),
});

export const editSchema = yup.object().shape({
  username: yup.string().required('必填'),
  gender: yup.string().oneOf(['男', '女'], '請選擇性別').required('請選擇'),
  birthday: yup
    .date()
    .min(new Date(1900, 0, 1), '日期錯誤')
    .max(new Date(), '日期錯誤')
    .required('必填'),
  fav1: yup.string().notOneOf(['請選擇'], '請選擇喜好').required('請選擇'),
  fav2: yup.string().notOneOf(['請選擇'], '請選擇喜好').required('請選擇'),
});

export const changePasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, '請輸入8個字元以上')
    .matches(passwordRules, { message: '請輸入符合需求的密碼' })
    .required('必填'),
  newPassword: yup
    .string()
    .min(8, '請輸入8個字元以上')
    .matches(passwordRules, { message: '請輸入符合需求的密碼' })
    .required('必填'),
  confirmNewPassword: yup
    .string()
    .min(8, '請輸入8個字元以上')
    .oneOf([yup.ref('newPassword'), null], '與密碼不符')
    .required('必填'),
});

export const forgetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, '請輸入正確的email，如：example@example.com')
    .required('必填'),
  validCode: yup
    .string()
    .test('is-number', '請輸入6位數字', (value) => {
      if (!value) return true; // 如果值是空的，則跳過驗證，交由後續的 `required` 驗證處理
      return /^\d+$/.test(value); // 檢查字符串是否只包含數字字符
    })
    .min(6, '請輸入6位數字')
    .max(6, '請輸入6位數字')
    .required('必填'),
  password: yup
    .string()
    .min(8, '請輸入8個字元以上')
    .matches(passwordRules, { message: '請輸入符合需求的密碼' })
    .required('必填'),
  confirmPassword: yup
    .string()
    .min(8, '請輸入8個字元以上')
    .oneOf([yup.ref('password'), null], '與密碼不符')
    .required('必填'),
});
