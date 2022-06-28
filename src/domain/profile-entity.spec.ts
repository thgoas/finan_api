import { Profile, ProfileProps } from './profile-entity'

describe('Profile Test', ()=> {
  test('constructor', ()=> {
let profileProps: ProfileProps = {
  name: 'Admin',
  description: 'Administrator',
  createdAt: new Date('2022-01-01'),
  updatedAt: new Date('2022-01-01')
}
let user = new Profile(profileProps)
expect(user.props).toStrictEqual({...profileProps})

  profileProps = {
    
  name: 'Admin',
  description: 'Administrator',
  createdAt: new Date('2022-01-01'),
  updatedAt: new Date('2022-01-01')
  }
  user = new Profile(profileProps)
  expect(user.id).toBeDefined()
  expect(user.props).toStrictEqual({...profileProps})
  
  })

  test('update firstName and lastName', () => {
   const profileProps: ProfileProps = {
    name: 'Admin',
    description: 'Administrator',
    createdAt: new Date('2022-01-01'),
    updatedAt: new Date('2022-01-01')
    }
    const profile = new Profile(profileProps)
    profile.updateName('Admin 2')
    expect(profile.name).toBe('Admin 2')
    profile.updateDescription('Administrator 2')
    expect(profile.description).toBe('Administrator 2')
  })

  


})
