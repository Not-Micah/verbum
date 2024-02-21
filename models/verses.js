import mongoose, { Schema } from "mongoose";

const verseSchema = new Schema(
    {
        location: String,
        verse: String,
        section: String,
        book: String,
        topic: {
            type: [String], 
            default: [],   
          },
        context: String,
        character: String,
        author: String
    }
);

const Verse = mongoose.models.Verse || mongoose.model("Verse", verseSchema);

export default Verse;