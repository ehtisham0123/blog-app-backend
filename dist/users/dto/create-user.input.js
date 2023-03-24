"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
let CreateUserInput = class CreateUserInput {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The user email address',
        example: 'john.doe@example.com',
    }),
    (0, graphql_1.Field)(() => String, { description: 'The user email address' }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The user password',
        example: 'password123',
    }),
    (0, graphql_1.Field)(() => String, { description: 'The user password' }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Example field (placeholder)',
        example: 123,
    }),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Example field (placeholder)' }),
    __metadata("design:type", Number)
], CreateUserInput.prototype, "exampleField", void 0);
CreateUserInput = __decorate([
    (0, graphql_1.InputType)()
], CreateUserInput);
exports.CreateUserInput = CreateUserInput;
//# sourceMappingURL=create-user.input.js.map