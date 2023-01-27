import { IsString, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @MinLength(5)
  name: string;

  @IsString()
  @MinLength(10)
  description: string;
}

export class UpdateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
