import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(localeData);

export const globalMonths: string[] = dayjs.months();

export const FirebaseConfig = process.env.FIREBASE_APP_CONFIG;

export const firebaseConfig = FirebaseConfig && JSON.parse(FirebaseConfig);
