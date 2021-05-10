import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'
import classes from '../styles/error.module.scss'

const ErrorPage = () => {
    return (
        <MainLayout>
            <div className={classes.error}>
                <h1 className={classes.error__text}>Error 404</h1>
                <p className={classes.error__link}>Please<Link href={"/"}><a> go back</a></Link> to safety</p>
            </div>
        </MainLayout>
    )
}

export default ErrorPage