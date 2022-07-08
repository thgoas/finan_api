import { UserInMemoryRepository } from "../infra/db/user-in-memory-repository"
import { CreateUserUseCase } from "./create-user.use-case"
import { ListIdUsersUseCase } from "./list-id-user.use-case"

describe('List id user Test', ()=>{
    it('should list id user', async ()=>{
        const repository = new UserInMemoryRepository()
        const listIdUser = new ListIdUsersUseCase(repository)

        const createUseCase = new CreateUserUseCase(repository)
        await createUseCase.execute({
            firstName: 'Thiago',
            lastName: 'Andrade',
            email: 'thiago@email.com',
            password: '123456',
            confirmPassword: '123456',
            updatedAt: new Date('2022-01-01'),
            createdAt: new Date('2022-01-01')
        })
        await createUseCase.execute({
            firstName: 'Thiago 2',
            lastName: 'Andrade 2',
            email: 'thiago2@email.com',
            password: '123456',
            confirmPassword: '123456',
            updatedAt: new Date('2022-01-01'),
            createdAt: new Date('2022-01-01')
        })
        expect(repository.items).toHaveLength(2)
        
        const output = await listIdUser.execute(repository.items[0].id)
        
        expect(output).toStrictEqual(
            {
                id: repository.items[0].id,
                firstName: 'Thiago',
                lastName: 'Andrade',
                email: 'thiago@email.com',
                password: repository.items[0].password,
                confirmPassword: '123456',
                updatedAt: new Date('2022-01-01'),
                createdAt: new Date('2022-01-01')
            }
            
        )
})
})

