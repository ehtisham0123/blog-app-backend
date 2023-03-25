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
exports.UpdateBlogInput = void 0;
const create_blog_input_1 = require("./create-blog.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateBlogInput = class UpdateBlogInput extends (0, graphql_1.PartialType)(create_blog_input_1.CreateBlogInput) {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateBlogInput.prototype, "id", void 0);
UpdateBlogInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateBlogInput);
exports.UpdateBlogInput = UpdateBlogInput;
//# sourceMappingURL=update-blog.input.js.map