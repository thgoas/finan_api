import { emailValidate } from "../../utils/emailValidate"
import { Profile } from "./profile"

export type UserProps  = {
  id?: string
  firstName: string
  lastName: string
  email: string
  profile: [Profile]
  createdAt?: Date
  updatedAt?: Date
}


export class User {
  public props: Required<UserProps>

  constructor(props: UserProps){
    this.props = {
      ...props,
      id: props.id || '',
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),

    }
  }

  updateFirstName (firstName: string) {
    this.firstName = firstName
    this.updatedAt = new Date()
  }
  updateLastName (lastName: string) {
    this.lastName = lastName
    this.updatedAt = new Date()

  }

  updateEmail (email: string){
    if(emailValidate(email)){

      this.email = email
    this.updatedAt = new Date()

    } else {
      throw new Error('This email is not valid!')
    }
  }


  get firstName(){
    return this.props.firstName
  }
  get lastName(){
    return this.props.lastName
  }

  get email () {
    return this.props.email
  }

  private set firstName (value: string){
    this.props.firstName = value
  }
  private set lastName (value: string){
    this.props.lastName = value
  }

  private set email (value: string) {
    this.props.email = value
  }

  private set updatedAt (value: Date) {
    this.props.updatedAt = value
  }

  toJSON() {
    return this.props
  }
}



