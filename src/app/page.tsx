import { db } from '@/db'


export default async function Home() {
    const snippets = await db.snippet.findMany()

    return (
        <>
            <div>Home Page</div>
            <div>
                {snippets.map(snippet => {
                    return (
                        <div key={snippet.id}>
                            <h3>{snippet.title}</h3>
                            <pre>{snippet.code}</pre>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
