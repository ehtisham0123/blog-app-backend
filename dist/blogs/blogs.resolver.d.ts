import { BlogsService } from './blogs.service';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
export declare class BlogsResolver {
    private readonly blogsService;
    constructor(blogsService: BlogsService);
    createBlog(createBlogInput: CreateBlogInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateBlog(updateBlogInput: UpdateBlogInput): string;
    removeBlog(id: number): string;
}
