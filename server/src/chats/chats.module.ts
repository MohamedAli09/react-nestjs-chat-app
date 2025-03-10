import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsResolver } from './chats.resolver';
import { DatabaseModule } from 'src/common/database/database.module';
import { ChatSchema } from './entities/chat.entity';
import { ChatsRepository } from './chats.repository';

@Module({
  imports: [DatabaseModule.forFeature([{ name: 'Chat', schema: ChatSchema }])],
  providers: [ChatsResolver, ChatsService, ChatsRepository],
})
export class ChatsModule {}
