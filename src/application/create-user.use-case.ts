import { UserRepositoryInterface } from "../domain/user-repository"
import { User } from "../domain/user-entity"

export class CreateUserUseCase {
  constructor(private userRepo: UserRepositoryInterface){}
  async execute(input: CreateUserInput): Promise<CreateUserOutput>{
    const user = new User(input)
    await this.userRepo.insert(user)
    return user.toJSON()
  }
}

export type CreateUserInput ={
  
  firstName: string
  lastName: string
  email: string
  profile: [Profile]
  password: string
  createdAt?: Date
  updatedAt?: Date
}

type Profile = {
  id?: string
  name: string
  description: string
  createdAt?: Date
  updatedAt?: Date
}

export type CreateUserOutput ={
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  profile: [Profile]
  createdAt?: Date
  updatedAt?: Date
}
