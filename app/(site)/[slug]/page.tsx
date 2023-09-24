import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
type Props = {
    params: { slug: string }
}

// app\(site)\[slug]\page.tsx
export default async function Page({ params }: Props) {
    const page = await  getPage(params.slug);
console.log('Pages:', page);
    return (
    <div>
        <h1 className="bg-gradient-to-r from-orange-300 via-yellow-300 to-purple-400
        bg-clip-text text-transparent text-5xl drop-shadow font-extrabold"> 
        {page.title}
        </h1>

        <div className="text-lg text-gray-700 mt-10">
            <PortableText value={page.content}/>
        </div>
     
    </div>)  

    
}