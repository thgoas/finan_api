import { UserRepositoryInterface } from "../domain/user-repository"
import { User } from "../domain/user-entity"

export class ListAllUsersUseCase {
  constructor(private userRepo: UserRepositoryInterface){}
  async execute(): Promise<ListAllUsersOutput>{
    const users = await this.userRepo.findAll()
    return users.map(r => r.toJSON())
  }
}


type Profile = {
  id?: string
  name: string
  description: string
  createdAt?: Date
  updatedAt?: Date
}

export type ListAllUsersOutput ={
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  profile: [Profile]
  createdAt?: Date
  updatedAt?: Date
}[]
