import { emailValidate } from "../utils/emailValidate"

export class Email {
    private readonly email: string

    private constructor(email: string){
        this.email = email
        Object.freeze(this)
    }

    static create (email: string): Email | Error {
        if(!emailValidate(email)){
            return new Error('This email is not valid!')
        }
        return new Email(email)
    }

    get value (): string {
        return this.email
    }
}