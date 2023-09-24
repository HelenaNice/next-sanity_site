// C:\Users\Asus\Developer\next-sanity\sanity\sanity-utils.ts

// **сохраняете все свои типы и утилиты Sanity, а затем ваши React компоненты будут типизировані
import { Project } from "@/types/Project";
import { createClient,  groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";

// Утилиты sanity получают проекты прямо здесь,
//  мы собираемся сказать, что возврат будет обещанием и  он вернет проект
// поскольку мы делаем это внутри нашего вызова, где мы говорим «получить проекты сейчас»
// везде, где используются проекты «получить» он вернет обещание, которое дает массив
// проектов, поэтому теперь, если мы пройдемся по этому, он знает, что это
// массив проектов, а затем в page.tsx  везде где есть project,прога  знает, что это один проект
// 
export async function getProjects(): Promise<Project[]> {
     return createClient(clientConfig).fetch(  
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
       );
}

export async function getProject(slug: string): Promise<Project> {
     return createClient(clientConfig).fetch(  
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        { slug }
       );

}

// создадим ф для наших доп страниц
export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
         groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
           }`
    );
 }

export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
           }`,
           { slug }
    )
    
}

// ==========проверка

   

    
