import { Cone } from "@/components/custom/Cone";

export default function Home() {
    return (
        <>
            {/* Main context */}
            <main className="flex flex-col flex-grow sm:px-20 px-5 justify-center">
                {/* Background grid */}
                <div className="bg-grid">
                </div>
                <div className="flex sm:flex-row flex-col-reverse justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-7xl gradient-text">Juan Marcano</h1>
                        <p>Flutter & Next.js Developer</p>
                    </div>
                    <Cone />
                </div>
            </main> 
        </>
    )
}