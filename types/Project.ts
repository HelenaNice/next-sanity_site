// types\Project.ts
import { PortableTextBlock } from "sanity";

export type Project = {
   _id: string;
   _createdAt: Date;
   name: string;
   slug: string;
   image: string;
   url: string;
//    переносимый текстовый блок, и это будет массив
// блоков, и именно так sanity хранит богатый контент
   content: PortableTextBlock[];
}