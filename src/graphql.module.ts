import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
        playground: true,
        installSubscriptionHandlers: true,
        context: ({ req, res }) => ({ req, res }),
        path: '/graphql',
        driver:ApolloDriver,
        introspection: true
      })
  ],
})
export class GraphqLModule {}