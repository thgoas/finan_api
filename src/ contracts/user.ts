export interface UserProps {
    id?: string
    firstName: string
    lastName: string
    email: string
    profile: [Profile]
}

export interface Profile {
  id?: string
  name: string
  description: String
}
