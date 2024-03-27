import { useEffect, useState } from "react";
import { getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    },[])
    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Bookmarks;