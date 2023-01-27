import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from 'typeorm';
import { Category } from '../categories/category.entity';
import { Team } from '../teams/team.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  createdAt: Date = new Date();

  @ManyToOne(() => Category, (category) => category.projects)
  category: Category;

  @ManyToMany(() => Team, (team) => team.projects)
  teams: Team[];
}
