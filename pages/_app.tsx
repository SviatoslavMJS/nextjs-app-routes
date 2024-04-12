import dayjs from "dayjs";
import LocaleData from "dayjs/plugin/localeData";

import "../styles/globals.css";

dayjs.extend(LocaleData);

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
