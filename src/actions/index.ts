'use server'

import { redirect } from 'next/navigation'
import { db } from '@/db'

export async function editSnippet(id: number, code: string) {
	await db.snippet.update({
		where: { id },
		data: { code },
	})
	redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {
	await db.snippet.delete({
		where: { id },
	})
	redirect('/')
}

export async function createSnippet(
	formState: { message: string },
	formData: FormData,
) {
	try {

		const title = formData.get('title')
		const code = formData.get('code')

		if (typeof title !== 'string' || title.length < 3) {
			return {
				message: 'Title must be longer than 3 characters',
			}
		}

		if (typeof code !== 'string' || code.length < 10) {
			return {
				message: 'Code must be longer than 10 characters',
			}
		}

		await db.snippet.create({
			data: {
				title,
				code,
			},
		})
	} catch (error: unknown) {
		if (error instanceof Error) {
			return {
				message: error.message,
			}
		} else {
			return {
				message: 'Something went wrong. Please try again later.',
			}
		}

	}
	redirect('/')
}