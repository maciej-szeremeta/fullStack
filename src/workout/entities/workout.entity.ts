import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';

@Entity()
export class Workout extends BaseEntity{

@PrimaryGeneratedColumn('uuid')
  id: string;

@Column()
  title: string;

@Column()
  reps: number;

@Column()
  load: number;
  
@Column({ length:36, nullable:true, default: null, })
  createdBy: string | null;

@CreateDateColumn()
  createdAt: Date;
   
@UpdateDateColumn()
  updateAt: Date;

}