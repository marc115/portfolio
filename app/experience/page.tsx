import {experience} from '@/data/experience'
export default function Experience() {
    return (
        <div className="m-5">
            <h1 className="font-bold text-5xl gradient-tex mb-4">My Experience</h1>
            <ol className="relative border-s border-gray-400 dark:border-gray-700">
                {
                    experience.reverse().map(experiece => (
                        <li key={experiece.company} className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{experiece.time}</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experiece.company}</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{experiece.description}</p>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}