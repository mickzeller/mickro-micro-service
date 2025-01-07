'use client'

interface ErrorPageProps {
	error: Error,
	reset: () => void
}

export default function ErrorPage( { error }: ErrorPageProps) {
	return (
		<div className={'mt-4 flex items-center justify-center'}>
			<div className={'bg-black border border-amber-400 text-red-700 px-4 py-3 rounded relative'}>
				<div className={'flex items-center'}>
					{error.message}
				</div>
			</div>
		</div>
	)
}