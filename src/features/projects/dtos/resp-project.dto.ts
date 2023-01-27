import { Expose } from 'class-transformer';

export class RespProjectDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  createdAt: string;
}
