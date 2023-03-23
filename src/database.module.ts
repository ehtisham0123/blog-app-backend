import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// console.log(`${process.env.PORT}vdsadasdad${process.env.DB_PROTOCOL}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true`);
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ehtishamjadoon1234:jKq62uFx2z7Am4ZB@cluster0.s4w6zqw.mongodb.net/?retryWrites=true', {
    // MongooseModule.forRoot(`${process.env.DB_PROTOCOL}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true`, {
       useNewUrlParser: true,
       useUnifiedTopology: true
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}