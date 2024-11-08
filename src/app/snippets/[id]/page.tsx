import { notFound } from 'next/navigation'
import { db } from '@/db'

interface SnippetShowPageProps {
	params: {
		id: string
	}
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
	const snippet = await db.snippet.findFirst({
		where: { id: Number(props.params.id) },
	})

	if (!snippet) {
		return notFound()
	}
	return (
		<div>
			<div>Show a snippet</div>
			<div>
				<h3>{snippet.title}</h3>
				<pre>{snippet.code}</pre>
			</div>
		</div>
	)
}
