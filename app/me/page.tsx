import me from '@/public/me/IMG_0010.jpg'
import Image from 'next/image'

export default function Me() {
    return (
        <div className="m-5 md:mx-32">
            <div className='flex flex-col md:flex-row gap-3 items-center'>
                <Image src={me} width={300} height={1200} alt='me' className='rounded-lg shadow-md1' />

                <div className='text-lg gap-y-2 flex flex-col'>
                    <h1 className="font-bold text-5xl">I&apos;m
                        <span className="gradient-text bg-gradient-to-r from-slate-900 to-sky-800 dark:from-slate-50 dark:to-sky-300 bg-clip-text text-transparent"> Juan</span>,
                        a software developer aiming to build practical software.</h1>
                    <p>A professional that learned to code both from a school and on my own, I don&apos;t shy away from searching online when the need calls for it.</p>
                    <p>I graduated as a software developer in Peru at the end of 2023, and have started to work shortly since then. </p>
                    <p>My interests involve web development, and I&apos;m familiar with both front and back end programming. I also plan to learn about systems programming languages such a Rust.</p>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}