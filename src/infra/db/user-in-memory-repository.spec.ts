import { User, UserProps } from "../../domain/user-entity"
import { UserInMemoryRepository } from "./user-in-memory-repository"

describe('UserInMemoryRepository test', () =>{

    it('should insert a new user', async ()=>{
        const repository = new UserInMemoryRepository()
        const userProps: UserProps = {
            firstName: 'Thiago',
            lastName: 'Andrade',
            email:'thiago@email.com',
            password: '123456',
            profile: [{name: 'Admin', description:'Administrator', createdAt: new Date('2022-01-01')}],
            createdAt: new Date('2022-01-01'),
            updatedAt: new Date('2022-01-01')
          }
        const user = new User(userProps)
        await repository.insert(user)
        expect(repository.items).toHaveLength(1)
        expect(repository.items).toStrictEqual([user])
    })
})