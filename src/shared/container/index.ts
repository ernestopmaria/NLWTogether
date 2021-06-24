import {container} from 'tsyringe'
import { UsersRepository } from '../../module/account/repositories/implementations/UsersRepositories'
import { IUsersRepository } from '../../module/account/repositories/IUsersRepository'
import { TagRepositories } from '../../module/Tags/repositories/implementations/TagsRepositories'
import { ITagRepository } from '../../module/Tags/repositories/ITagsRepository'

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository)
container.registerSingleton<ITagRepository>("TagRepositories", TagRepositories)