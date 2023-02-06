const validateBlogs = (blog) => {
    if (blog.title === undefined || typeof(blog.title) !== "string") {
        return {
            isValid: false,
            message: "title is required and must be of type string"
        }
    }
    if (blog.text === undefined || typeof(blog.text) !== "string") {
        return {
            isValid: false,
            message: "blog is required and must be of type string"
        }
    }
    if (blog.author === undefined || typeof(blog.author) !== "string") {
        return {
            isValid: false,
            message: "Author is required and it must be a string"
        }
    }
    if (blog.category === undefined || !Array.isArray(blog.category) || blog.category.length === 0) {
        return {
            isValid: false,
            message: "category is required and must have length"
        }
    }
    const newsampleBlogs = sampleBlogs.category.filter((blogs)=>{
        if (typeof(blogs) !== 'string') {
            return true
        } else {
            return false
        }
    })
    console.log("blogs", newBlogData)
    if (newBlogData.length > 0) {
        return {
            isValid: false,
            message: "category must be an array of strings"
        }
    }
    return {
        isValid: true
    }
}



module.exports = {
    validateBlogs,
}