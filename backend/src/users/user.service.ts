import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async view(id: number): Promise<User>{
    return this.userRepository.findOneBy({id});
  }

  async delete(id: number): Promise<{affected?: number }>{
    return this.userRepository.delete(id);
  }
  async updateById(id: number, updatedData: Partial<User>): Promise<void> {
    const user = this.userRepository.findOneBy({id});

     this.userRepository.update(id, updatedData);

}
}
