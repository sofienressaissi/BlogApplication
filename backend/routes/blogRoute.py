from fastapi import APIRouter

from models.blog import Blog

from config.database import connection

from schemas.blogSchema import blogEntity, blogsEntity

from bson import ObjectId

blog = APIRouter()

@blog.get("/list-blogs")
async def findAllBlogs():
    return blogsEntity(connection.db.blogs.find())

@blog.post("/add-new-blog")
async def addNewBlog(blog: Blog):
    connection.db.blogs.insert_one(dict(blog))
    return blog

@blog.get("/blog/{blogId}")
async def getBlog(blogId):
    return blogEntity(connection.db.blogs.find_one({"_id": ObjectId(blogId)}))

@blog.put("/blog/vote/{blogId}")
async def upvoteBlog(blogId, blog: Blog):
    connection.db.blogs.find_one_and_update({"_id": ObjectId(blogId)}, {
        "$set": dict(blog)
    })
    return blogEntity(connection.db.blogs.find_one({"_id": ObjectId(blogId)}))