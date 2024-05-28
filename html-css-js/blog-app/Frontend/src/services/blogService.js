
const getBlogs = async () => {

    try {
        const data = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs", 
            { 
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const blogsApiData = await data.json();
        return blogsApiData.data;
    } catch (err) {
        throw new Error(err);
    }
};

const getBlogById = async (blogId) => {

    try {
        const data = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs", 
            { 
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const blogsApiData = await data.json();
        const result = blogsApiData.data.find((x) => x.id == blogId ? x : null);
        return result;
    } catch (err) {
        throw new Error(err);
    }
};


const getBlogsByCategoryId = async (categoryId) => {

    if (!categoryId) {
        return getBlogs();
    }

    try {
        const data = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs", 
            { 
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        let blogsApiData = await data.json();
        return (
            blogsApiData.data.filter((x) => 
                categoryId !== undefined ?
                x.categories.find((y) => y.id.toString() === categoryId.toString()) 
                : x
            )
        );
    } catch (err) {
        throw new Error(err);
    }
};


const blogService = {
    getBlogs, getBlogsByCategoryId, getBlogById
}

export default blogService;