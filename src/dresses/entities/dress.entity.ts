// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  wearer: string;

  @Column()
  gender: string;

  @Column()
  votes: number;

  @Column()
  imageUrl: string;
}
