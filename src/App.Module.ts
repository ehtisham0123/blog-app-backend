import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { DatabaseModule } from './database.module';
import { PostsModule } from "./posts/posts.module";

@Module({
    imports: [DatabaseModule,UsersModule, PostsModule],
    controllers: [AppController],
    providers:[AppService]
})

export class AppModule{}