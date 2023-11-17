import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Delete,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UUID } from 'crypto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Query() query: { name: string }) {
    return this.userService.findAll(query);
  }

  @Patch()
  update(@Body() updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);

    return this.userService.update(updateUserDto);
  }

  @Delete()
  delete(@Query('id') id: UUID) {
    return this.userService.delete(id);
  }
}
