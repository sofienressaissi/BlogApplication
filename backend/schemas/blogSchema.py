def blogEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "blogTitle": item["blogTitle"],
        "blogAuthor": item["blogAuthor"],
        "blogContent": item["blogContent"],
        "numberUpvotes": item["numberUpvotes"],
        "numberDownvotes": item["numberDownvotes"]
    }

def blogsEntity(entity) -> list:
    return [blogEntity(item) for item in entity]