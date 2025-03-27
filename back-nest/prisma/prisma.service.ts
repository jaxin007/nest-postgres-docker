import {Injectable, OnModuleInit, OnModuleDestroy, Logger} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);


  async onModuleInit() {
    const dbUrl = process.env.DATABASE_URL;
    await this.$connect();
    this.logger.log(`Connected to the database ${dbUrl} `);
  }

  async onModuleDestroy() {
    await this.$disconnect();
    this.logger.log('Disconnected from the database');
  }
}
