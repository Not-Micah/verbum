import connectMongoDB from "../../../../libs/mongodb";
import Book from "../../../../models/books";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const books = await Book.find();
    return NextResponse.json({ books });
}

export async function POST(request) {
    const { book, author, summary, whenToRead, topics } = await request.json();
    await connectMongoDB();

    const existingBooks = await Book.find();
    for (const existingBook of existingBooks) {
        if (existingBook.book.includes(book)) {
            return NextResponse.json({ message: "Book already exists", status: 400 });
        }
    }

    await Book.create({ book, author, summary, whenToRead, topics });
    return NextResponse.json({ message: "Book Created", status: 201 });
}