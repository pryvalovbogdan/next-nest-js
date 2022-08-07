import Next from 'next';
import { RenderModule } from 'nest-next';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NODE_ENV } from '../shared/constants/env';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: NODE_ENV === 'development' }),
      /* null means that nest-next 
            should look for pages in root dir */
      { viewsDir: null },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
