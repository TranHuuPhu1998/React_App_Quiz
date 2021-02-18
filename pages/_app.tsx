import React from 'react';
import {AppProps} from 'next/app';
import Head from "next/head";
import { Provider } from 'react-redux'
import { useStore } from '../store/store'

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Admin from '../components/Admin'
import classes from  './index.scss'
import '../assets/style.scss';
import {useRouter} from 'next/router'
const CustomApp: React.FC<AppProps> = ({Component , pageProps}) => {

    const router = useRouter()
    const store = useStore(pageProps.initialReduxState)
  
    return (
        <Provider store={store}>
        <div className="root-app">
        <Head>
            <title>Create Next App Edit</title>
            <link rel="icon" href="/favicon.ico"></link>
            <link rel="stylesheet" href="/css/globals.css"/>
            <link rel="stylesheet" href="/css/boostrap.min.css"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>

        </Head>
        <Header/>
        <div className={classes.app_main}>
            {router.pathname.indexOf('/admin') !== -1 ? <Admin/> : ""}
            <div className={classes.app_wapper}>
                <Component {...pageProps}/>
            </div> 
        </div>
        <Footer/>
        </div>
        </Provider>
    )
}


export default CustomApp