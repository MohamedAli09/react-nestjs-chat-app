import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserInput: CreateUserInput) {
    const hashedPassword = await this.hashPassword(createUserInput.password);
    try {
      const result = await this.usersRepository.create({
        ...createUserInput,
        password: hashedPassword,
      });
      return result;
    } catch (err) {
      if (err.message.includes('E11000')) {
        throw new UnprocessableEntityException('email already exists');
      } else {
        throw err;
      }
    }
  }

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
  async findAll() {
    return this.usersRepository.find({});
  }

  async findOne(_id: string) {
    return this.usersRepository.findOne({ _id });
  }

  async update(_id: string, updateUserInput: UpdateUserInput) {
    if (updateUserInput.password) {
      updateUserInput.password = await this.hashPassword(
        updateUserInput.password,
      );
    }
    return this.usersRepository.findOneAndUpdate(
      { _id },
      {
        $set: {
          ...updateUserInput,
        },
      },
    );
  }

  async remove(_id: string) {
    return this.usersRepository.findOneAndDelete({ _id });
  }
  async verifyUser(email: string, password: string) {
    const user = await this.usersRepository.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('credentials are not valid');
    }
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      throw new UnauthorizedException('credentials are not valid');
    }
    return user;
  }
}
