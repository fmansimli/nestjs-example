import { IsString, IsOptional, MinLength } from 'class-validator';

export class UpdateEventDto {
  @IsOptional()
  @MinLength(9)
  @IsString()
  title: string;

  @IsOptional()
  @MinLength(15)
  @IsString()
  description: string;
}
