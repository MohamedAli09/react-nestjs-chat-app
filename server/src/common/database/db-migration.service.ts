import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { config, database, up } from 'migrate-mongo';

@Injectable()
export class DbMigrationService implements OnModuleInit {
  private readonly dbmigrateConfig: Partial<config.Config> = {
    mongodb: {
      databaseName: this.configService.getOrThrow('DB_NAME'),
      url: this.configService.getOrThrow('MONGODB_URI'),
    },
    migrationsDir: `${__dirname}/../../migrations`,
    changelogCollectionName: 'changelog',
    migrationFileExtension: '.js',
  };
  constructor(private readonly configService: ConfigService) {}
  async onModuleInit() {
    config.set(this.dbmigrateConfig);
    const { db, client } = await database.connect();
    await up(db, client);
  }
}
