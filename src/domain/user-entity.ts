import { emailValidate } from "../utils/emailValidate"
import crypto from 'crypto'
import bcrypt from 'bcryptjs'

export type UserProps  = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  createdAt?: Date
  updatedAt?: Date
}


export class User {
  public readonly id: string 
  public props: Required<UserProps>

  constructor(props: UserProps, id?: string){
    this.id = id || crypto.randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),

    }
    if(!emailValidate(this.props.email)){
      throw new Error('This email is not valid!')
    }
    if(this.props.password !== this.props.confirmPassword){
      throw new Error('Passwords and confirm password are not the same!')

    }else {
      const salt = bcrypt.genSaltSync()
      this.props.password = bcrypt.hashSync(this.props.password, salt)
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
  updatePassword (password: string, confirmPassword: string) {
    if(password === confirmPassword){
      const salt = bcrypt.genSaltSync()
      this.password = bcrypt.hashSync(this.password, salt)
      
      this.updatedAt = new Date()
    }else{
      throw new Error('Passwords and confirm password are not the same!')
    }


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

  get password () {
    return this.props.password
  }

  private set firstName (value: string){
    this.props.firstName = value
  }
  private set lastName (value: string){
    this.props.lastName = value
  }
  private set password (value: string){
    this.props.password = value
  }
  private set confirmPassword (value: string){
    this.props.confirmPassword = value
  }

  private set email (value: string) {
    this.props.email = value
  }

  private set updatedAt (value: Date) {
    this.props.updatedAt = value
  }

  toJSON() {
    return {
      id:this.id, 
      ...this.props
    }
  }
}



