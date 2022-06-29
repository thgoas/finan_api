import { CreateUserInput, CreateUserOutput, CreateUserUseCase } from "../../../../application/create-user.use-case"
import { ListAllUsersOutput, ListAllUsersUseCase } from "../../../../application/list-all-users.use-case"
import { ListIdUsersOutput, ListIdUsersUseCase } from "../../../../application/list-id-user.use-case"
import { UserInMemoryRepository } from "../../../db/user-in-memory-repository"

const userRepo = new UserInMemoryRepository()

interface CreateUserInterface {
  data: CreateUserInput
  filter: UserFilterInterface
}

interface UserFilterInterface {
  id: string
  email: string
}

export const userResolvers = {
  Query: {
    users: async (_:any): Promise<ListAllUsersOutput> => {
      const listUseCase = new ListAllUsersUseCase(userRepo)
      const output =  await listUseCase.execute()
      return output
    },
    user: async (_:any, {filter}: CreateUserInterface): Promise<ListIdUsersOutput | undefined> => {
     const ListIdUseCase = new ListIdUsersUseCase(userRepo)
     const output = await ListIdUseCase.execute(filter.id)
     return output ? output : undefined
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
