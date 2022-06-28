import crypto from 'crypto'

export type ProfileProps = {
  name: string
  description: string
  createdAt?: Date
  updatedAt?: Date
}

export class Profile {
  public readonly id: string 
  public props: Required<ProfileProps>

  constructor(props: ProfileProps, id?: string){
    this.id = id || crypto.randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),

    }

    
  }

  updateName(name: string) {
    this.name = name
    this.updatedAt = new Date()
  }
  updateDescription(description: string) {
    this.description = description
    this.updatedAt = new Date()
  }

  get name (){
    return this.props.name
  }

  get description () {
    return this.props.description
  }

  private set name(value: string) {
   this.props.name = value
  }
  private set description(value: string) {
   this.props.description = value
  }

  private set updatedAt (value: Date) {
    this.props.updatedAt = value
  }
}
