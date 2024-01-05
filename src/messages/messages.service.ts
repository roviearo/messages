import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesServices {
    constructor(public messagesRepo: MessagesRepository) {
    }

    async fineOne(id: string) {
        return this.messagesRepo.fineOne(id);
    }

    async findAll() {
        return this.messagesRepo.findAll();
    }

    async create(content: string) {
        return this.messagesRepo.create(content);
    }
}