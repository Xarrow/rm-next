import App from 'next/app';
import 'antd/dist/antd.css';
import '../static/css/google_fonts_family.css'
// import '../static/css/noto_serif.css'
import '../css/g.css';

export default function MyApp({Component,pageProps}){
    return <Component {...pageProps} />
}