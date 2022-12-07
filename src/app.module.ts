import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TodosModule } from './todos/todos.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule, TodosModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
