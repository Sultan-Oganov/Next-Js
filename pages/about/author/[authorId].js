import { useRouter } from "next/router"

const Author = () => {
    const router = useRouter()
    return (
        <div>
            <h1>Author {router.query.authorId}</h1>
        </div>
    )
}

export default Author