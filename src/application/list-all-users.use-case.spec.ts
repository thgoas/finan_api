import { UserInMemoryRepository } from "../infra/db/user-in-memory-repository"
import { CreateUserUseCase } from "./create-user.use-case"
import { ListAllUsersUseCase } from "./list-all-users.use-case"

describe('List all users Test', ()=>{
    it('should list all users', async ()=>{
        const repository = new UserInMemoryRepository()
        const listAllUser = new ListAllUsersUseCase(repository)

        const createUseCase = new CreateUserUseCase(repository)
        await createUseCase.execute({
            firstName: 'Thiago',
            lastName: 'Andrade',
            email: 'thiago@email.com',
            password: '123456',
            confirmPassword:'123456',
            updatedAt: new Date('2022-01-01'),
            createdAt: new Date('2022-01-01')
        })
        await createUseCase.execute({
            firstName: 'Thiago 2',
            lastName: 'Andrade 2',
            email: 'thiago2@email.com',
            password: '123456',
            confirmPassword:'123456',
            updatedAt: new Date('2022-01-01'),
            createdAt: new Date('2022-01-01')
        })
        expect(repository.items).toHaveLength(2)
        
        const outputListAllUser = await listAllUser.execute()
        
        expect(outputListAllUser).toStrictEqual([
            {
                id: repository.items[0].id,
                firstName: 'Thiago',
                lastName: 'Andrade',
                email: 'thiago@email.com',
                password: repository.items[0].password,
                confirmPassword: '123456',
                updatedAt: new Date('2022-01-01'),
                createdAt: new Date('2022-01-01')
            },
            {
                id: repository.items[1].id,
                firstName: 'Thiago 2',
                lastName: 'Andrade 2',
                email: 'thiago2@email.com',
                confirmPassword: '123456',
                password: repository.items[1].password,
                updatedAt: new Date('2022-01-01'),
                createdAt: new Date('2022-01-01')
            }
        ])
})
})

