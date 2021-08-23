import { Contact, Prisma } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';
export declare class ContactsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Contact[]>;
    get(id: any): Promise<Contact>;
    create(contactCreateInput: Prisma.ContactCreateInput): Promise<Contact>;
    update(id: number, contactUpdateInput: Prisma.ContactUpdateInput): Promise<Contact>;
    delete(id: number): Promise<Contact>;
}
