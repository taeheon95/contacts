import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
  getAll(): string {
    return 'contacts getAll';
  }
  get(id): string {
    return `contacts get ${id}`;
  }
}
