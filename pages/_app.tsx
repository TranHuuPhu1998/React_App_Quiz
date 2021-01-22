
import {AppProps} from 'next/app';
import Head from "next/head";

import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import React from 'react';
import NavQuiz from '../components/NavQuiz';
import Nav from '../components/Nav';
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import classes from  './index.scss'
import '../assets/style.scss';
const CustomApp: React.FC<AppProps> = ({Component , pageProps}) => {
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
            <Nav/>
            <NavQuiz/>
            <div className={classes.app_wapper}>
                <Component {...pageProps}/>
                <Footer/>
            </div> 
        </div>
        </div>
        </Provider>
    )
}


export default CustomApp