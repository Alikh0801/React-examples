import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Blogs() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/posts")
            .then(res => setBlogs(res.data.posts))
    }, [])

    return (
        <div>
            <h1>Blogs</h1>
            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <Link to={"/blog/" + blog.id}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blogs
