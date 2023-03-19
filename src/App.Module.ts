import { Module } from "@nestjs/common";

import { AppController } from "./App.Controller";
import { AppService } from "./App.Service";
import { UsersModule } from "./users/users.module";
import { DatabaseModule } from './database.module';
import { PostsModule } from "./posts/posts.module";

@Module({
    imports: [DatabaseModule,UsersModule, PostsModule],
    controllers: [AppController],
    providers:[AppService]
})

export class AppModule{}