import { Contact } from '.prisma/client';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Prisma } from '@prisma/client';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  async getAll(): Promise<Contact[]> {
    return await this.contactsService.getAll();
  }

  @Get('/:id')
  async get(@Param('id') id): Promise<Contact> {
    return await this.contactsService.get(Number(id));
  }

  @Post()
  async create(
    @Body() createContactInput: Prisma.ContactCreateInput,
  ): Promise<Contact> {
    return await this.contactsService.create(createContactInput);
  }

  @Put('/:id')
  async update(
    @Param('id') id,
    @Body() updateContactInput: Prisma.ContactUpdateInput,
  ): Promise<Contact> {
    return await this.contactsService.update(Number(id), updateContactInput);
  }

  @Delete('/:id')
  async delete(@Param('id') id): Promise<Contact> {
    return await this.contactsService.delete(Number(id));
  }
}
