import { Profile, UserProps } from "../ contracts/user";

export class User implements UserProps{

  constructor(
    readonly id: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly email: string,
    readonly profile: [Profile]
    ){}



}



