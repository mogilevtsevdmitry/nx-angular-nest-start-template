import { IBase } from '../base/base.interface'

export interface IUser extends IBase {
  email: string
  password: string
}
