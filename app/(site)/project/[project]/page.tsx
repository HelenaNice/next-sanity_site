// app\project\[project]\page.tsx
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: { project:string };
};

export default async function Project({ params }: Props) {
    const slug = params.project;
    // эти параметры будут в утилитах
    const project = await getProject(slug);


     return (
        <div> 
        <header className="flex items-center justify-between">
            <h1 className="bg-gradient-to-r from-orange-300 via-yellow-300 to-purple-400
        bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
            {project.name}
            </h1>
            <a href={project.url} 
            title="Смотреть проект" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg text-gray-500 font bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover: text-pink-100 transition"
            >
            
                Смотреть проект </a>
        </header>
        {/* сюда поместим  контент */}
        <div className="text-lg text-gray-700 mt-5">
            <PortableText value={project.content}/>            
        </div>

         {/* сюда поместим картинку */}
         <Image
         src={project.image} 
         alt={project.name}
         width={1920}
         height={1080}
         className="mt-10 border-2 border-gray-700 object-cover rounded-xl"/>

        </div>
     )
}