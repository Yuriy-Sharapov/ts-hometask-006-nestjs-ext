import { Book } from "../interfaces/book.interface";

export class CreateBookDto implements Book{
    title: string
    description: string
    author: string
}