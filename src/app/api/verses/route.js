import connectMongoDB from "../../../../libs/mongodb";
import Verse from "../../../../models/verses";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const verses = await Verse.find();
    return NextResponse.json({ verses });
}

export async function POST(request) {
    const { location, verse, section, book, topic, context, character, author } = await request.json();
    await connectMongoDB();

    // Check if the new verse is a substring of any existing verses
    const existingVerses = await Verse.find();
    for (const existingVerse of existingVerses) {
        if (existingVerse.verse.includes(verse) || verse.includes(existingVerse.verse)) {
            return NextResponse.json({ message: "Verse already exists", status: 400 });
        }
    }

    await Verse.create({ location, verse, section, book, topic, context, character, author });
    return NextResponse.json({ message: "Verse Created", status: 201 });
}

// export async function DELETE(request) {
//     const id = request.nextUrl.searchParams.get('id');
//     await connectMongoDB();
//     await Topic.findByIdAndDelete(id);
//     return NextResponse.json({message: "Topic deleted"}, {status: 200})
// }