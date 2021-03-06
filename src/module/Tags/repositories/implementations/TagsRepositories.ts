import { getRepository, Repository } from "typeorm";
import { Tag } from "../../entities/Tag";
import { ITagRepository } from "../ITagsRepository";


class TagRepositories implements ITagRepository {
      repository: Repository<Tag>
  constructor()
  { this.repository=getRepository(Tag)} 

  async create(name: string,id:string): Promise<Tag> {
   const tag =  this.repository.create({name,id});
    const tagName =await this.repository.save(tag)
    return tagName  
  }
 async list(): Promise<Tag[]> {
   const tags = await this.repository.find();
   return tags

  }
  async findByName(name: string): Promise<Tag> {
     const tag= await this.repository.findOne({name})
    return tag
   
  }
  
}

export {TagRepositories}