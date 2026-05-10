import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf-8');

    const messages = JSON.parse(content);

    return messages[id];
  }

  async findAll() {
    const content = await readFile('messages.json', 'utf-8');

    const messages = JSON.parse(content);

    return messages;
  }

  async create(content: string) {
    const oldMessages = await readFile('messages.json', 'utf-8');

    const messages = JSON.parse(oldMessages);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { content, id };

    await writeFile('messages.json', JSON.stringify(messages));

    return `Message with id ${id} created`;
  }
}
