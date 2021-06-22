import {container} from 'tsyringe'
import { UsersRepository } from '../module/account/repositories/implementations/UsersRepositories'
import { IUsersRepository } from '../module/account/repositories/IUsersRepository'

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository)