import { Contact } from '.prisma/client';
import { ContactsService } from './contacts.service';
import { Prisma } from '@prisma/client';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    getAll(): Promise<Contact[]>;
    get(id: any): Promise<Contact>;
    create(createContactInput: Prisma.ContactCreateInput): Promise<Contact>;
    update(id: any, updateContactInput: Prisma.ContactUpdateInput): Promise<Contact>;
    delete(id: any): Promise<Contact>;
}
