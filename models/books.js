import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
    {
    book: String,
    author: String,
    summary: String,
    whenToRead: {
        type: [String],
        default: [],
    },
    topics: {
        type: [String],
        default: [],
    }
    }
);

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;
