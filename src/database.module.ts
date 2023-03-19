import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ehtishamjadoon1234:jKq62uFx2z7Am4ZB@cluster0.s4w6zqw.mongodb.net/?retryWrites=true', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}


// ehtishamjadoon1234
// jKq62uFx2z7Am4ZB

// mongodb+srv://ehtishamjadoon1234:<password>@cluster0.s4w6zqw.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://ehtishamjadoon1234:<password>@cluster0.s4w6zqw.mongodb.net/test

