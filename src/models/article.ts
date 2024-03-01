import { Schema, model, models } from "mongoose"
interface Article {
    text?: string
    tags?: string
    userId?: string
}

const ArticleSchema = new Schema({
    text: {
        type: String,
        unique: [true, "Text exists already"],
        required: [true, "Text is required"]
    },
    tags: {
        type: String,
        required: [true, "tags is required"]
    },
    userId: {
        type: String,
        required: [true, "userId is required"]
    }
})

export const ArticleEntity = models.Article || model("Article", ArticleSchema)

export default Article
