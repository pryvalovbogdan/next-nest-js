import { Controller, Get, Param, ParseIntPipe, Render, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ParamsInterceptor } from './params.interseptors';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  // @UseInterceptors(ParamsInterceptor)
  home() {
    return {};
  }

  @Get(':id')
  @Render('[id]')
  // @UseInterceptors(ParamsInterceptor)
  public blogPost(@Param('id') id: string) {
    return {};
  }

  @Get('/api/books/')
  public listBlogPosts() {
    console.log('this.appService.getBooks()', this.appService.getBooks());
    return this.appService.getBooks();
  }

  @Get('/api/books/:id')
  public getBlogPostById(@Param('id', new ParseIntPipe()) id: number) {
    return this.appService.getBook(id);
  }
}
