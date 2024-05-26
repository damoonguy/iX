import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";

import "../../App.css";
import "./index.css";


// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
let blogPostsData = data.blogPosts;
const allBlogs = data.blogPosts;
const categoriesData = data.categories;

export default function BlogsPage() {

  const nav = useNavigate();

  let { categoryIdPassed } = useParams();
  const [categoryId, setCategoryId] = useState(categoryIdPassed);
  const [blogs, setBlogs] = useState(blogPostsData);
  

  useEffect(() => {
    const catBlogs = blogPostsData.filter((x) =>
      categoryIdPassed !== undefined
        ? x.categories.find((y) => y.id.toString() === categoryIdPassed.toString())
        : allBlogs
    );
    setBlogs(() => catBlogs);
  }, [categoryId, categoryIdPassed])

  const CategoriesList = ({categoryId}) => {
    return categoriesData.map((category) => {
      return categoryId === category.id.toString() ? (
        <button
          key={category.id}
          onClick={() => {setCategoryId(category.id)}}
          style={{ color: "blue" }}
        >
          <p key={category.id}>{category.title}</p>
        </button>
      ) : (
        <button
          key={category.id}
          onClick={() => {setCategoryId(category.id); nav("/blogs/" + category.id)}}
          style={{ color: "black" }}
        >
          <p key={category.id}>{category.title}</p>
        </button>
      );
    });
  }



  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList 
              categoriesData={categoriesData} 
              categoryId={categoryIdPassed}
              setCategoryId={setCategoryId}>
          </CategoriesList>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <BlogList blogPosts={blogs} />
      </div>
      <Footer />
    </>
  );
}