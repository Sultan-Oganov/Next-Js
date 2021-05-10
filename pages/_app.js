import '../styles/main.scss'
import NextNProgress from 'nextjs-progressbar'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <NextNProgress
                color="yellow"
                startPosition="0.3"
                stopDelayMs="200"
                height="5"
            />
            <Component {...pageProps} />
            {/* <style jsx global>{`
                body{ 
                    font-family: 'Itim', cursive;
                }
            `}</style> */}
        </>
    )
}

export default MyApp