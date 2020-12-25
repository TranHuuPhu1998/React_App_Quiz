
import {AppProps} from 'next/app';
import Head from "next/head";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import {Provider} from 'react-redux'
import {createWrapper} from 'next-redux-wrapper';
// import store from '../store/store'

import { useStore } from '../store/store'

import './index.scss'
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
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>
        </Head>
        <Header/>
        <div className="app-main">
            <div className="app-wapper">
                <Component {...pageProps}/>
            </div>
            <Footer/>
        </div>
        </div>
        </Provider>
    )
}


export default CustomApp