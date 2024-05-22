import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// 這裡貼上從firebase專案設定中，網頁應用程式整合的設定值
// 將 APIKEY 移除，請自行申請
const firebaseConfig = {};

export { firebaseConfig };

const app = initializeApp(firebaseConfig);

export const getAuthGoogle = getAuth();
