import { Controller, Get, Param } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  getAll(): string {
    return this.contactsService.getAll();
  }

  @Get('/:id')
  get(@Param('id') id): string {
    return this.contactsService.get(id);
  }

  update(): string {
    return 'update';
  }
}
