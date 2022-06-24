import { User } from "../entities/user"

export class CreateUser {
  execute(input: CreateUserInput): CreateUserOutput{
    const user = new User(input)
    return user.toJSON()
  }
}

type CreateUserInput ={
  id?: string
  firstName: string
  lastName: string
  email: string
  profile: [Profile]
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

type CreateUserOutput ={
  id?: string
  firstName: string
  lastName: string
  email: string
  profile: [Profile]
  createdAt?: Date
  updatedAt?: Date
}
