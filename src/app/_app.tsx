import "./globals.css";

function MyApp({ Component, pageProps }) {
    console.log('_app.tsx');

    return <Component {...pageProps} />;
}

export default MyApp;