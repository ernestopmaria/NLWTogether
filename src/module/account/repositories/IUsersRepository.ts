import { IUsersDTO } from "../dtos/IUsersDTO";
import { User } from "../entities/User";

interface IUsersRepository{
   create(data:IUsersDTO):Promise<void>
   list():Promise<User[]>
}

export {IUsersRepository}