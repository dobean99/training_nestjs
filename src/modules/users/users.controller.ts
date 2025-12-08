import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { userId: id };
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return dto;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return { message: 'Updated', id, body };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { message: 'Deleted', id };
  }
}
