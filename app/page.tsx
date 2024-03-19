export default function Home() {
    return (
        <>
            {/* Main context */}
            <main className="flex flex-col flex-grow sm:px-20 px-5 justify-center">
                {/* Background grid */}
                <div className="bg-grid">
                </div>
                <h1 className="font-bold text-7xl">Juan Marcano</h1>
                <p>Flutter & Next.js developer</p>
            </main>
{/* 
            <footer className="flex bg-green-400 h-14 justify-center items-center">
                <p>Check out the code on
                    <Link target="_blank" className="text-blue-500" href='https://github.com/marc115/portfolio'> GitHub</Link>
                </p>
            </footer> */}
        </>
    )
}