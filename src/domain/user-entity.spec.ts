import {User, UserProps} from './user-entity'

describe('User Test', ()=> {
  test('constructor', ()=> {
let userProps: UserProps = {
  firstName: 'Thiago',
  lastName: 'Andrade',
  email:'thiago@email.com',
  password: '123456',
  confirmPassword:'123456',
  createdAt: new Date('2022-01-01'),
  updatedAt: new Date('2022-01-01')
}
let user = new User(userProps)
expect(user.props).toStrictEqual({
  ...userProps,
  password: user.props.password

})

userProps = {
    
  firstName: 'Thiago',
  lastName: 'Andrade',
  email:'thiago@email.com',
  password: '123456',
  confirmPassword: '123454',
  createdAt: new Date('2022-01-01'),
  updatedAt: new Date('2022-01-01')
}
// user = new User(userProps)
expect(() => new User(userProps)).toThrow('Passwords and confirm password are not the same!')
expect(() => user.updatePassword('12345', '123456')).toThrow('Passwords and confirm password are not the same!')
user.updatePassword('123', '123')
expect(user.password).toBe(user.password)
  userProps = {
    
    firstName: 'Thiago',
    lastName: 'Andrade',
    email:'thiago@email.com',
    password: '123456',
    confirmPassword: '123456',
    createdAt: new Date('2022-01-01'),
    updatedAt: new Date('2022-01-01')
  }
  user = new User(userProps)
  expect(user.id).toBeDefined()
  expect(user.props).toStrictEqual({...userProps, password: user.props.password})
  expect(() => user.updateEmail('thiagoemail2.com') ).toThrow('This email is not valid!')


  })

  test('update firstName and lastName', () => {
   const userProps: UserProps = {
      
      firstName: 'Thiago',
      lastName: 'Andrade',
      email:'thiago@email.com',
      password: '123456',
      confirmPassword: '123456',
      createdAt: new Date('2022-01-01'),
      updatedAt: new Date('2022-01-01')
    }
    const user = new User(userProps)
    user.updateFirstName('Thiago 2')
    expect(user.firstName).toBe('Thiago 2')
    user.updateLastName('Andrade 2')
    expect(user.lastName).toBe('Andrade 2')
  })

  test('update email with validated', ()=> {
    const userProps: UserProps = {
      
      firstName: 'Thiago',
      lastName: 'Andrade',
      email:'thiago@email.com',
      password: '123456',
      confirmPassword: '123456',
      createdAt: new Date('2022-01-01'),
      updatedAt: new Date('2022-01-01')
    }
    const user = new User(userProps)

    expect(() => user.updateEmail('thiagoemail2.com') ).toThrow('This email is not valid!')
    user.updateEmail('thiago@email2.com')
    expect(user.email).toBe('thiago@email2.com')

  })

  
})
