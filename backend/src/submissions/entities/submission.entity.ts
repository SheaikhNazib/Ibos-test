import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Candidate } from '../../candidates/entities/candidate.entity';
import { Exam } from '../../exams/entities/exam.entity';

@Entity('submissions')
export class Submission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Candidate, { eager: true, onDelete: 'CASCADE' })
  candidate: Candidate;

  @ManyToOne(() => Exam, { eager: true, onDelete: 'CASCADE' })
  exam: Exam;

  @Column({ type: 'jsonb', default: {} })
  answers: Record<string, string>;

  @Column({ type: 'int', nullable: true })
  score?: number;
}
