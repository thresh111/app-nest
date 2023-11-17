import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UUID, randomUUID } from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const data = new User();
    data.id = randomUUID();
    data.name = createUserDto.name;
    data.password = createUserDto.password;
    data.phone = createUserDto.phone;
    return this.user.save(data);
  }

  async findAll(query: { name: string }) {
    const data = await this.user.find({
      where: {
        name: Like(`%${query.name}%`),
      },
    });
    return data;
  }

  update(updateUserDto) {
    return this.user.update(updateUserDto.id, updateUserDto);
  }

  delete(id: UUID) {
    return this.user.delete(id);
  }
}
