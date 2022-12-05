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

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }
  @Get('search')
  getYear(@Query('year') year: string) {
    return `${year}`;
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `Movie id : ${id}`;
  }

  @Post()
  create(@Body() bodyObj) {
    return {
      id: 11,
      ...bodyObj,
    };
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie ${movieId}`;
  }
}
