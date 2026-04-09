import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('candidates')
export class Candidate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;
}
