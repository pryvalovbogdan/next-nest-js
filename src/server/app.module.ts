import Next from 'next';
import { RenderModule } from 'nest-next';

import { Module, DynamicModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NODE_ENV } from '../shared/constants/env';

declare const module: any;

@Module({})
export class AppModule {
  public static initialize(): DynamicModule {
    /* during initialization attempt pulling cached RenderModule
        from persisted data */
    const renderModule =
      module.hot?.data?.renderModule ??
      RenderModule.forRootAsync(Next({ dev: NODE_ENV === 'development' }), {
        viewsDir: null,
      });

    if (module.hot) {
      /* add a handler to cache RenderModule
          before disposing existing module */
      module.hot.dispose((data: any) => {
        data.renderModule = renderModule;
      });
    }

    return {
      module: AppModule,
      imports: [renderModule],
      controllers: [AppController],
      providers: [AppService],
    };
  }
}
