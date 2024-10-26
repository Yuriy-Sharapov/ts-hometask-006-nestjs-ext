import { Body, Controller, Get, Post } from '@nestjs/common'
import { BooksService } from './books.service'
import { Book } from './interfaces/book.interface'
import { CreateBookDto } from './classes/create.book.dto.class'

@Controller('books')
export class BooksController {
  constructor(private readonly BooksService: BooksService) {}

  @Get()
  getBooks(): Book[] {
    return this.BooksService.GetBooks()
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto): void {
    this.BooksService.createBook(createBookDto)
  }
}
