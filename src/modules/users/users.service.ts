import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(): string[] {
    return ['User A', 'User B'];
  }
}
