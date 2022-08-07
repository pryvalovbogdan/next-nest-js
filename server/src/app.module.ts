import { Module } from '@nestjs/common';
import {
  AppController,
  BooksController,
  CatsController,
} from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [],
  controllers: [AppController, CatsController, BooksController],
  providers: [AppService],
})
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/Stream')],
})
export class AppModule {}
