import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { DatabaseModule } from './database.module';
import { PostsModule } from "./posts/posts.module";
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [ConfigModule.forRoot({isGlobal:true}),DatabaseModule,UsersModule, PostsModule, AuthModule],
    controllers: [AppController],
    providers:[AppService]
})

export class AppModule{}