import { UserRepositoryInterface } from "../domain/user-repository"

export class ListIdUsersUseCase {
  constructor(private userRepo: UserRepositoryInterface){}
  async execute(id: string): Promise<ListIdUsersOutput | undefined>{
    const user = await this.userRepo.findId(id)
    return user ? user.toJSON() : undefined
  }
}

export type ListIdUsersOutput ={
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  createdAt?: Date
  updatedAt?: Date
}
