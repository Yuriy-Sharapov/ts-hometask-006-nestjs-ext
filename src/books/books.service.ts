import { Get, Injectable, Post } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './classes/create.book.dto.class';

@Injectable()
export class BooksService {

    private readonly books: Book[] = []

    @Get()
    GetBooks(): Book[] {
        return this.books
    }

    @Post()
    createBook(createBookDto: CreateBookDto) {
        this.books.push(createBookDto)
    }
}
