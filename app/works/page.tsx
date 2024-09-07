import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { works } from "@/data/works";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
    return (
        <div className="md:mx-32">
            <h1 className="font-bold text-5xl gradient-tex m-5">My Works</h1>
            <div className="flex flex-grow flex-col p-5 gap-y-8">
                {works.map(project => (
                    <div key={project.name} className="flex md:flex-row flex-col dark:bg-gray-900 bg-gray-50 rounded-lg shadow-md">
                        <Image src='/works/nike-lookalike-thumbnail.png' 
                            className="md:rounded-l-lg rounded-t-lg" 
                            alt="project thumbnail" width={700} height={300} />
                        <div className="flex flex-col m-5 gap-y-4">
                            <p className="font-bold text-3xl gradient-tex">{project.name}</p>
                            {/* Badge */}
                            {
                                project.technologies.map(technology => (
                                    <Badge variant={"secondary"}>{technology}</Badge>
                                ))
                            }
                            <p>{project.description}</p>
                            {
                                project.liveUrl &&
                                <Link
                                    // className="rounded-lg dark:bg-gray-700 bg-gray-200" 
                                    target="_blank" 
                                    href={project.liveUrl}>
                                    <Button>
                                    <ExternalLink className="mr-2" /> Check it out
                                    </Button>
                                </Link>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}