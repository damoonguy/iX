import React from "react";
import BlogItem from "../../components/BlogItem";
import BlogItemText from "../../components/BlogItemText";


import { useParams } from "react-router-dom";

const data = require("../../dummy-data.json");
let blog = data.blogPosts;


export default function BlogPage() {
    const { blogId } = useParams();


    console.log(blogId);

    

    return (
        <div> 
            <h1>This is blog { blogId }</h1>
        </div>
    );
}