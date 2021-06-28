import { inject, injectable } from "tsyringe";
import { Tag } from "../../entities/Tag";
import { ITagRepository } from "../../repositories/ITagsRepository";
import {classToPlain} from "class-transformer"




@injectable()
class ListTagsUseCase{
  constructor(
    @inject("TagRepositories")
    private tagRepositories:ITagRepository
  ){}

  async execute():Promise<Tag[]>{
    const tags = await this.tagRepositories.list();
    return classToPlain(tags) as Tag[]
  }

}

export {ListTagsUseCase}