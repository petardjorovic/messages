import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async listMessages(): Promise<string> {
    const content = await readFile('./messages.json', 'utf-8');

    const messages = JSON.stringify(content);

    return messages;
  }
}
