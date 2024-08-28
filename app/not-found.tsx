//not-found.js
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col gap-y-3 flex-grow justify-center items-center'>
            <p>404</p>
            <h1 className="font-bold text-7xl gradient-text">Page Was Not Found</h1>
            <Link href='/' className='underline'>Go back</Link>
        </div>
    )
}