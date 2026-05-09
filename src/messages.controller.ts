import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Get()
  getMessages() {
    return this.messagesService.listMessages();
  }

  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto) {
    console.log(createMessageDto);
  }

  @Get(':id')
  getMessage(@Param() id: string) {
    console.log(id);
  }
}
