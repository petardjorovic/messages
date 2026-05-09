import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private readonly messagesRepository: MessagesRepository) {}
  listMessages(): Promise<string> {
    return this.messagesRepository.listMessages();
  }
}
