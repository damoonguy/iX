import React from "react";
import PropTypes from "prop-types";

import "./index.css";

import BlogItem from "../BlogItem";

const data = require("../../dummy-data.json");
let blogPosts = data.blogPosts;
const categories = data.categories;

export default function BlogGrid({ blogPosts }) {
  if (!blogPosts || !blogPosts.length) {
    return null;
  }

  return (
    <>
      <div className="blog-grid-container">
        <div className="item-1 w-50">
          {blogPosts.length > 0 && (
            <BlogItem
              imageOrientation={"top"}
              index={0}
              blogPost={blogPosts[0]}
            />
          )}
        </div>

        <div className="right-block">
          {blogPosts.length > 1 && (
            <div className="item-2 h-50">
              <BlogItem
                imageOrientation={"left"}
                index={1}
                blogPost={blogPosts[1]}
              />
            </div>
          )}

          {blogPosts.length > 2 && (
            <div className="item-3 h-50">
              <BlogItem index={2} blogPost={blogPosts[2]} />
            </div>
          )}
        </div>
      </div>
      {blogPosts.length > 3 && (
        <div className="item-4">
          <BlogItem index={3} blogPost={blogPosts[3]} />
        </div>
      )}
    </>
  );
}

BlogGrid.propTypes = {
  blogPosts: PropTypes.array.isRequired
}