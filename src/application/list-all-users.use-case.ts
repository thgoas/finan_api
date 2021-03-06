import { UserRepositoryInterface } from "../domain/user-repository"

export class ListAllUsersUseCase {
  constructor(private userRepo: UserRepositoryInterface){}
  async execute(): Promise<ListAllUsersOutput>{
    const users = await this.userRepo.findAll()
    return users.map(r => r.toJSON())
  }
}

export type ListAllUsersOutput ={
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  createdAt?: Date
  updatedAt?: Date
}[]
