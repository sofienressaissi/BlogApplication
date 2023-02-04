from pydantic import BaseModel

class Blog(BaseModel):
    blogTitle: str
    blogAuthor: str
    blogContent: str
    numberUpvotes: int
    numberDownvotes: int