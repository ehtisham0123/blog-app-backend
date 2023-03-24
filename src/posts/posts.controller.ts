import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: 'Create a new post' })
  @ApiBody({ type: CreatePostDto })
  @Post()
  create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postsService.create(createPostDto);
  }

  @ApiOperation({ summary: 'Get all posts' })
  @Get()
  findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @ApiOperation({ summary: 'Get a post by ID' })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<PostEntity> {
    return this.postsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a post by ID' })
  @ApiBody({ type: UpdatePostDto })
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto): Promise<PostEntity> {
    return this.postsService.update(id, updatePostDto);
  }

  @ApiOperation({ summary: 'Delete a post by ID' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<PostEntity> {
    return this.postsService.remove(id);
  }
}