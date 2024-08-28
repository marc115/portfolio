import { Cone } from "@/components/custom/Cone";

export default function Home() {
    return (
        <>
            {/* Main context */}
            <main className="flex flex-col flex-grow sm:px-20 px-5 justify-center">
                <div className="flex sm:flex-row flex-col-reverse justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-7xl gradient-text bg-gradient-to-r 
                        from-slate-900 to-sky-700 dark:from-slate-50 dark:to-sky-200 bg-clip-text text-transparent">
                            Juan Marcano
                        </h1>
                        <p>Flutter & Next.js Developer</p>
                    </div>
                    <Cone />
                </div>
            </main> 
        </>
    )
}