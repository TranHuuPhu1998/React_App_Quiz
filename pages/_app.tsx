import Head from "next/head";
import {AppProps} from 'next/app';
import '../assets/style.scss';
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
const CustomApp: React.FC<AppProps> = ({Component , pageProps}) => {
    return (
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
        <Component/>
        <Footer/>
        </div>
    )
}

export default CustomApp