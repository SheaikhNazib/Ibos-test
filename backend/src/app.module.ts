import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ExamsModule } from './exams/exams.module';
import { QuestionsModule } from './questions/questions.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { CandidatesModule } from './candidates/candidates.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseUrl = configService.get<string>('DATABASE_URL');
        const dbSsl = configService.get<string>('DB_SSL', 'true') === 'true';
        const synchronize = configService.get<string>('DB_SYNC', 'false') === 'true';

        return {
          type: 'postgres',
          ...(databaseUrl
            ? { url: databaseUrl }
            : {
                host: configService.get<string>('DB_HOST', 'localhost'),
                port: parseInt(configService.get<string>('DB_PORT', '5432'), 10),
                username: configService.get<string>('DB_USERNAME', 'postgres'),
                password: configService.get<string>('DB_PASSWORD', 'postgres'),
                database: configService.get<string>('DB_NAME', 'nest_app'),
              }),
          ssl: dbSsl ? { rejectUnauthorized: false } : false,
          autoLoadEntities: true,
          synchronize,
        };
      },
    }),
    AuthModule,
    UsersModule,
    ExamsModule,
    QuestionsModule,
    SubmissionsModule,
    CandidatesModule,
  ],
})
export class AppModule {}
