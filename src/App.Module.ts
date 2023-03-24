import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';

import { AppController } from "./App.Controller";
import { AppService } from "./app.service";

import { DatabaseModule } from './database.module';
import { PostsModule } from "./posts/posts.module";
import { UsersModule } from './users/users.module';
import { GraphqLModule } from "./graphql.module";

@Module({
    imports: [ConfigModule.forRoot({isGlobal:true}),GraphqLModule,DatabaseModule, PostsModule, UsersModule],
    controllers: [AppController],
    providers:[AppService]
})

export class AppModule{}