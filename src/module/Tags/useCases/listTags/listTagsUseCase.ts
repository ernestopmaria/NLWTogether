import { inject, injectable } from "tsyringe";
import { Tag } from "../../entities/Tag";
import { ITagRepository } from "../../repositories/ITagsRepository";




@injectable()
class ListTagsUseCase{
  constructor(
    @inject("TagRepositories")
    private tagRepositories:ITagRepository
  ){}

  async execute():Promise<Tag[]>{
    const list = await this.tagRepositories.list()
    return list
  }

}

export {ListTagsUseCase}