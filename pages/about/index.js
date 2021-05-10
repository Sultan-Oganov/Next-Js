import Router from 'next/router'
import { MainLayout } from '../../components/MainLayout'

const About = ({ title }) => {
    const linkClickHandlerHome = () => {
        Router.push('/')
    }

    const linkClickHandlerPosts = () => {
        Router.push('/posts')
    }

    return (
        <MainLayout title={'About Page'}>
            <h1>{title}</h1>

            <button onClick={linkClickHandlerHome}>Go back to Home</button>
            <button onClick={linkClickHandlerPosts}>Go to Posts</button>

        </MainLayout>
    )
}

About.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/about')
    const data = await response.json()
    return {
        title: data.title
    }
}

export default About