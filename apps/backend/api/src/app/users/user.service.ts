import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@angular/core'
import { Repository } from 'typeorm'

import { AuthHelper } from '../auth/auth.helper'
import { UserEntity } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {
  }

  async get(): Promise<UserEntity[]> {
    return await this.userRepo.find()
  }

  async getById(id: number): Promise<UserEntity> {
    return await this.userRepo.findOne({ id }) || null
  }

  async getByEmail(email: string): Promise<UserEntity> {
    return await this.userRepo.findOne({ email }) || null
  }

  async create(user: Partial<UserEntity>): Promise<UserEntity> {
    const email = user.email.toLocaleLowerCase().trim()
    const password = await AuthHelper.hash(user.password)
    const newUser = await this.userRepo.create({ ...user, email, password })
    return await this.userRepo.save(newUser)
  }


}
