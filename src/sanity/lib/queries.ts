import {groq} from "next-sanity"; 
export const allProducts = groq `*[_type == "product"]`;
export const eight = groq `*[type="product"] [0..7]`;