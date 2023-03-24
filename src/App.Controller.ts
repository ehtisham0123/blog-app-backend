import { Controller } from "@nestjs/common/decorators";
import { ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";

@ApiTags()
@Controller()
export class AppController{
 constructor(private readonly AppService : AppService){}
  getHello(): string {
      return this.AppService.getHello();
    }
}