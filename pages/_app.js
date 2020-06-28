import App from 'next/app';
import 'antd/dist/antd.css';
import '../css/g.css';

export default function MyApp({Component,pageProps}){
    return <Component {...pageProps} />
}