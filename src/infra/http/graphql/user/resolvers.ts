import { CreateUserInput, CreateUserOutput, CreateUserUseCase } from "../../../../application/create-user.use-case"
import { ListAllUsersOutput, ListAllUsersUseCase } from "../../../../application/list-all-users.use-case"
import { UserInMemoryRepository } from "../../../db/user-in-memory-repository"

const userRepo = new UserInMemoryRepository()

interface CreateUserInterface {
  data: CreateUserInput
}

export const userResolvers = {
  Query: {
    users: async (_:any): Promise<ListAllUsersOutput> => {
      const listUseCase = new ListAllUsersUseCase(userRepo)
      const output =  await listUseCase.execute()
      return output
    }
  },
  Mutation:{
    createUser: async (_:any,{data}:CreateUserInterface):Promise<CreateUserOutput> => {
      const createUseCase = new CreateUserUseCase(userRepo)
      const output =  await createUseCase.execute(data)
      console.log(output,  'outṕut')
      return output
  }
}
}
