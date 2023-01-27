import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Event } from '../events/event.entity';
import { Project } from '../projects/project.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  about: string;

  @Column({ nullable: true })
  createdAt: Date = new Date();

  @ManyToMany(() => Project, (project) => project.teams)
  projects: Project[];

  @ManyToMany(() => Event, (event) => event.teams)
  events: Event[];
}
