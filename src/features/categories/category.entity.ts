import { Column, PrimaryGeneratedColumn, OneToMany, Entity } from 'typeorm';
import { Event } from '../events/event.entity';
import { Project } from '../projects/project.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  createdAt: Date = new Date();

  @OneToMany(() => Project, (project) => project.category)
  projects: Project[];

  @OneToMany(() => Event, (event) => event.category)
  events: Event[];
}
