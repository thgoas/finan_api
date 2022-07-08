import { UserInMemoryRepository } from "../infra/db/user-in-memory-repository"
import { CreateUserUseCase } from "./create-user.use-case"


describe('CreateUserUseCase Tests', ()=>{
    it('should create a new user', async ()=>{
        const repository = new UserInMemoryRepository()
        const createUseCase = new CreateUserUseCase(repository)
        const output = await createUseCase.execute({
            firstName: 'Thiago',
            lastName: 'Andrade',
            email: 'thiago@email.com',
            password: '123456',
            confirmPassword: '123456',
            updatedAt: new Date('2022-01-01'),
            createdAt: new Date('2022-01-01')
        })
        expect(repository.items).toHaveLength(1)

        console.log(repository.items[0].password)
        expect(output).toStrictEqual({
            id: repository.items[0].id,
            firstName: 'Thiago',
            lastName: 'Andrade',
            email: 'thiago@email.com',
            password: repository.items[0].password ,
            confirmPassword: '123456',
            updatedAt: new Date('2022-01-01'),
            createdAt: new Date('2022-01-01')
        })
    })
} )