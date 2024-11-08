import { redirect } from 'next/navigation'
import { db } from '@/db'

export default function SnippetCreatePage() {
    async function createSnippet(formData: FormData) {
        //     make server action
        'use server'
        //     validate user input
        const title = formData.get('title') as string
        const code = formData.get('code') as string
        //     create record in index

        await db.snippet.create({
            data: {
                title,
                code
            }
        })
        // redirect the user to home page
        redirect('/')
    }

    return (
        <form action={createSnippet}>
            <h3 className="font-bold m-3">Create a Snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">
                        Title
                    </label>
                    <input
                        name="title"
                        className="border rounded p-2 w-full"
                        type="text"
                        id="title"
                    />
                </div>
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">
                        Code
                    </label>
                    <textarea
                        name="code"
                        className="border rounded p-2 w-full"
                        id="code"
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create
                </button>
            </div>
        </form>
    )
}
