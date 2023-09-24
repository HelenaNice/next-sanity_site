import { defineConfig } from "sanity";
import {visionTool} from '@sanity/vision'
import { deskTool } from "sanity/desk";

import schemas from "./sanity/schemas";


const config = defineConfig({
    projectId:"vk9uefqk",
    dataset: "production", 
    title: "My Personal Website", 
    apiVersion: "2023-09-23",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    // refactoring code
    schema: { types: schemas },
});

export default config;