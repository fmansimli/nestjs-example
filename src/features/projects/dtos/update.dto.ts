import { IsString, MinLength, IsOptional } from 'class-validator';

export class UpdateProjectDto {
  @IsString()
  @MinLength(7)
  @IsOptional()
  title: string;

  @IsString()
  @MinLength(15)
  @IsOptional()
  description: string;
}
