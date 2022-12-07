import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    service.create({
      title: 'Test Movie',
      genres: ['test'],
      year: 2000,
    });
  });
  describe('Get All', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });
  describe('Get One', () => {
    it('should return a movie', () => {
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });
    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });
  describe('delete One', () => {
    it('should delete One', () => {
      const beforeDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforeDelete);
    });
    it('should reurn a 404', () => {
      try {
        service.deleteOne(999);
      } catch (e) {
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });
  describe('create movie', () => {
    it('should create movie', () => {
      service.create({
        title: 'test',
        genres: ['test'],
        year: 2000,
      });
      const createdMovie = service.getOne(2);
      expect(createdMovie.id).toEqual(2);
    });
    it('should return a 404', () => {
      try {
        service.deleteOne(999);
      } catch (e) {
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });
  describe('update movie', () => {
    it('should update movie', () => {
      service.update(1, {
        title: 'update',
      });
      const updatedMovie = service.getOne(1);
      expect(updatedMovie.title).toEqual('update');
    });
    it('should return a 404', () => {
      try {
        service.deleteOne(999);
      } catch (e) {
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });
});
