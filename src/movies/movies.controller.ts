import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Query,
  Body,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovie } from './dto/create-movie.dto';
import { updateMovie } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll() {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovie) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() movieData: updateMovie) {
    console.log(typeof movieId);
    return this.moviesService.update(movieId, movieData);
  }
}
