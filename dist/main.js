"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Posts API')
        .setDescription('API for creating, reading, updating, and deleting posts')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    const options = {
        explorer: true,
        swaggerOptions: {
            filter: true,
            displayRequestDuration: true,
        },
    };
    swagger_1.SwaggerModule.setup('api-docs', app, document, options);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map