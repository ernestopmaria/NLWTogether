import { IUsersDTO } from "../dtos/IUsersDTO";
import { User } from "../entities/User";

interface IUsersRepository{
   create(data:IUsersDTO):Promise<void>
   list():Promise<User[]>
   findByEmail(email:string):Promise<User>
   findById(id:string):Promise<User>
}

export {IUsersRepository}