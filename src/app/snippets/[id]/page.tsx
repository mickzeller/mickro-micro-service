import { notFound } from 'next/navigation'
import { db } from '@/db'

interface SnippetShowPageProps {
	params: {
		id: string
	}
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const snippet = await db.snippet.findFirst({
		where: { id: Number(props.params.id) },
	})

	if (!snippet) {
		return notFound()
	}
	return (
		<div>
			<div className="flex m-4 justify-between items-center">
				<h1 className="text-xl font-bold">{snippet.title}</h1>
				<div className="flex gap-4">
					<button className="border rounded p-2">Edit</button>
					<button className="border rounded p-2">Delete</button>
				</div>
			</div>
			<pre className="p-3 bg-gray-200 border-gray-200 border rounded">
				<code>{snippet.code}</code>
			</pre>
		</div>
	)
}
