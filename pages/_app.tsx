import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import firebase from "firebase";
import {createContext} from "react";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQqWNemxI2srYB7arTYhfxCRpZDWNw85Y",
    authDomain: "testmyproject-35977.firebaseapp.com",
    projectId: "testmyproject-35977",
    storageBucket: "testmyproject-35977.appspot.com",
    messagingSenderId: "753864526331",
    appId: "1:753864526331:web:f719d2ad66a2eb6170635e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const Context = createContext(null);


const auth = firebase.auth()
const firestore = firebase.firestore()

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <Context.Provider value={{
          firebase,
          firestore,
          auth
      }}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </Context.Provider>

  );
}
export default MyApp
