import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesServices } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(public messagesService: MessagesServices) {
    }

    @Get()
    listMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto){
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string){
        const message = await this.messagesService.fineOne(id);

        if(!message) {
            throw new NotFoundException('message not found');
        }

        return message;
    }
}
