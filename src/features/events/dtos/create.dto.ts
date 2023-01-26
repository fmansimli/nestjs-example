import { IsString, MinLength } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @MinLength(5)
  title: string;

  @IsString()
  @MinLength(10)
  description: string;
}
