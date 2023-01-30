import { IsNumber, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class QueryProjectDto {
  @IsString()
  @MinLength(7)
  title: string;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  year: number;

  @IsString()
  @MinLength(15)
  description: string;
}
