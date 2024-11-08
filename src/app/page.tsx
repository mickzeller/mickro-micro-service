
import { db } from '@/db'
import Link from 'next/link'


export default async function Home() {
    const snippets = await db.snippet.findMany()

    return (
        <div>
                <div className="flex justify-between items-center p-2 my-2">
                    <h1 className="text-xl font-bold">Snippets</h1>
                    <Link className="border rounded p-2" href="/snippets/new">New</Link>
                </div>
                {snippets.map(snippet => {
                    return (
                        <Link
                            key={snippet.id}
                            className="flex justify-between items-center p-2 border rounded my-2"
                            href={`/snippets/${snippet.id}`}
                        >
                            <div>{snippet.title}</div>
                            <div>View</div>
                        </Link>
                    )
                })}
        </div>
    )
}
