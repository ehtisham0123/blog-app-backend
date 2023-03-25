import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { UsersModule } from "./users/users.module";
import { PostsModule } from "./posts/posts.module";

async function bootstrap() {
    dotenv.config();
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // Create Swagger options object
  const config = new DocumentBuilder()
    .setTitle('Socail App API')
    .setDescription('API for creating, reading, updating, and deleting posts')
    .setVersion('1.0')
    .build();

  // Create Swagger document
  const document = SwaggerModule.createDocument(app, config,{
    include: [UsersModule,PostsModule],
  });

  // Set Swagger UI options
  const options = {
    explorer: true,
    swaggerOptions: {
      filter: true,
      displayRequestDuration: true,
      
    },
  };

  // Set up Swagger UI
  SwaggerModule.setup('api-docs', app, document, options);
  
  await app.listen(process.env.PORT);
}
bootstrap();