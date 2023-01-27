import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Category } from '../categories/category.entity';
import { Team } from '../teams/team.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  createdAt: Date = new Date();

  @ManyToOne(() => Category, (category) => category.events)
  category: Category;

  @ManyToMany(() => Team, (team) => team.events)
  teams: Team[];
}
