import { ISignAuthPayload } from '@mda/shared/data-access/interfaces'
import { NotFoundException } from '@nestjs/common'
import { Injectable } from '@angular/core'
import { JwtService } from '@nestjs/jwt'

import { environment } from '../../environments/environment'
import { UserService } from '../users/user.service'
import { UserEntity } from '../users/user.entity'
import { AuthHelper } from './auth.helper'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {
  }

  async login(signInPayload: ISignAuthPayload) {
    const candidate = await this.userService.getByEmail(signInPayload.email)
    if (!candidate) {
      throw new NotFoundException(`Пользователь с email ${signInPayload.email} не найден!`)
    }
    const isMath = AuthHelper.validate(signInPayload.password, candidate.password)
    if (!isMath) {
      throw new Error('Пароли не совпадают!')
    }
    const payload: { email: string, userId: number } = { email: candidate.email, userId: candidate.id }
    const token = `Bearer ${this.jwtService.sign(payload)}`
    return {
      access_token: token,
      id: payload.userId,
      expiresIn: new Date(environment.jwt.expiresIn).getDate(),
    }
  }

  async validateUser(payload: ISignAuthPayload) {
    return this.userService.getByEmail(payload.email)
  }

  async register(user: Partial<UserEntity>): Promise<UserEntity> {
    return this.userService.create(user)
  }

}
