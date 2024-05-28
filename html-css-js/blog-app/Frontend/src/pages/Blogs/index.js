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
import categoriesService from "../../services/categoriesService";
import blogService from "../../services/blogService";


// Week 1: Import the blogPosts and categories from the dummy-data.json file


export default function BlogsPage() {

  const nav = useNavigate();

  let { categoryIdPassed } = useParams();
  const [ blogs, setBlogs] = useState();
  const [ categories, setCategories] = useState(null);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const cats = await categoriesService.getCategories();
        setCategories(cats);
      } catch (err) {
        throw new Error(err);
      }
    }

    const fetchBlogsByCategoryId = async (categoryIdPassed) => {
      try {
        const blogsRes = await blogService.getBlogsByCategoryId(categoryIdPassed);
        setBlogs(blogsRes);
      } catch (err) {
        throw new Error(err);
      }
    }
    fetchBlogsByCategoryId(categoryIdPassed);
    fetchCategories();
  }, [categoryIdPassed]);

  console.log(blogs);

  // useEffect(() => {
  //   const catBlogs = blogs.filter((x) =>
  //     categoryIdPassed !== undefined
  //       ? x.categories.find((y) => y.id.toString() === categoryIdPassed.toString())
  //       : allBlogs
  //   );
  //   setBlogs(() => catBlogs);
  // }, [categoryIdPassed])

  const CategoriesList = ({categoryId}) => {
    if (!categories) {
      return null;
    }

    return categories.map((category) => {
      return categoryId === category.id.toString() ? (
        <button
          key={category.id}
          onClick={() => {nav("/blogs/" + category.id)}}
          style={{ color: "blue" }}
        >
          <p key={category.id}>{category.title}</p>
        </button>
      ) : (
        <button
          key={category.id}
          onClick={() => {nav("/blogs/" + category.id)}}
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
              categoriesData={categories} 
              categoryId={categoryIdPassed}
              >
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