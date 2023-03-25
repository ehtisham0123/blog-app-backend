import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
export declare class BlogsService {
    create(createBlogInput: CreateBlogInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBlogInput: UpdateBlogInput): string;
    remove(id: number): string;
}
