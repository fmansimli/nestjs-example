import { IsString, MinLength } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @MinLength(7)
  title: string;

  @IsString()
  @MinLength(15)
  description: string;
}
