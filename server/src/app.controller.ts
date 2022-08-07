import {
  Controller,
  Get,
  Post,
  Req,
  HttpCode,
  Res,
  Header,
  Redirect,
  Param,
} from '@nestjs/common';
import { Request, Response, response } from 'express';
import axios from 'axios';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hey')
  getHi(): string {
    return 'hi';
  }
}

@Controller('cats')
export class CatsController {
  @Get()
  getCats(): string {
    return 'fluffy';
  }

  @Get('all')
  @Header('Cache-Control', 'none')
  @HttpCode(201)
  @Redirect('https://nestjs.com', 301)
  findAll(@Req() @Res() request: Request, response): any {
    console.log('id', request, response);
    if (true) {
      // To change dynamicly url or status code of redirect
      return { url: 'https://docs.nestjs.com/v5/', statusCode: 302 };
    }
    return request.body.id + 'This action returns all cats';
  }

  // http://localhost:3000/cats/3
  @Get(':id')
  findParam(@Param() params): string {
    console.log('params', params);
    return params.id + 'found';
  }

  // http://localhost:3000/cats/all/3
  @Get('all/:id')
  findParams(@Param('id') id): string {
    console.log('id', id);
    return id + 'found';
  }
}

// https://developer.nytimes.com/docs/books-product/1/overview
// Get all books for all the Best Sellers lists for specified date. /lists/full-overview.json
// Get top 5 books for all the Best Sellers lists for specified date. /lists/overview.json
// reviews.json?author=Michelle+Obama
// reviews.json?isbn=9781524763138
// reviews.json?title=Becoming
@Controller('books')
export class BooksController {
  @Get()
  async getBooks() {
    return await axios
      .get(
        'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=5TQ5uyFZvGnSADVYJ8FI6JhY0RbVAZVH',
      )
      .then((result) => {
        console.log('result', result.data.results.lists);
        return (
          '<div>' +
          result.data.results.lists.map((item) => {
            return (
              '<div>' +
              '<span>' +
              item.list_name +
              '</span>' +
              item.books.map((book) => {
                return (
                  '<div>' +
                  'author ' +
                  book.author +
                  ' title ' +
                  book.title +
                  '</div>'
                );
              }) +
              '</div>'
            );
          })
        );
      });
  }
}
