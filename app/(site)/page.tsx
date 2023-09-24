// C:\Users\Asus\Developer\next-sanity\app\page.tsx
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  // project может быть массивом объектов или массивом проектов, Тип определяем в утилитах
  const projects = await getProjects();

// console.log('Projects:', projects);



  // тут прописываем классы в наших тегах
  return (
    <div> 

        <h1 className="text-5xl font-extrabold">Привет, я <span className="bg-gradient-to-r from-orange-300 via-yellow-300 to-purple-400
        bg-clip-text text-transparent"> Алена!</span></h1>

        <p className="mt-3 text-l text-gray-600">Привет, всем! 
        Спасибо, что посетили этот сайт<span className="text-red-500">♥</span>!<br></br>
        Посмотрите мои проекты!</p>

        <h2 className="mt-24 mb-6  font-bold text-gray-700 text-3xl">Мои проекты</h2>

    {/* разделим наши заголовки и поместим их в отдельные див создадим сетку*/}
	<div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       
		{projects.map((project) => (
			<div key={project._id} className="p-3 my-5 border border-gray-500 rounded-lg">

										
				{project.image &&  (
					<Image
						src={project.image}
						alt={project.name}
						width={250}
						height={100}
						className="object-cover rounded-lg border border-gray-500"
					/>
				)}
				
					<Link key={project._id}
					href={`/${project.slug}`}
					className="font-extrabold text-transparent bg-gradient-to-l from-orange-300 via-yellow-300 to-purple-400 bg-clip-text hover:underline">
							{project.name}
							</Link>
		</div>					
      ))} 
    </div>
	</div>
  );
}


 