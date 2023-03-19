import { PostsService } from './posts.service';
import { Post as PostEntity } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<PostEntity>;
    findAll(): Promise<PostEntity[]>;
    findOne(id: string): Promise<PostEntity>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<PostEntity>;
    remove(id: string): Promise<PostEntity>;
}
