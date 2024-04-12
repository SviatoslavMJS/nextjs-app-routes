import Head from "next/head";
import { AppProps } from "next/app";
// import { firebaseConfig } from "@/config";
// import { initializeApp } from "firebase/app";

import Layout from "../components/layout/layout";
import "../styles/globals.css";

// if (firebaseConfig) {
//   try {
//     const fireApp = initializeApp(firebaseConfig);
//     console.log("FIREBASE_INIT");
//   } catch (error) {
//     console.log("FIREBASE_ERROR", error);
//   }
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="NextJS Events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
