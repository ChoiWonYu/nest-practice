import { PartialType } from '@nestjs/mapped-types';
import { CreateMovie } from './create-movie.dto';

export class updateMovie extends PartialType(CreateMovie) {}
