import { UUID } from 'crypto';
export class CreateUserDto {
  id: UUID;
  name: string;
  phone: string;
  password: string;
}
