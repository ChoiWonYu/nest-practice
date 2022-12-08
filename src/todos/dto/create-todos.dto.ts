import { IsString } from 'class-validator';
export class CreateTodo {
  @IsString()
  action: string;
}
