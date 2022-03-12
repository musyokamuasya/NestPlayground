import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Post()
  createProducts(): string {
    return 'This route creates products';
  }
  @Get()
  findAllProducts(): string {
    return 'This class returns all products';
  }
  @Get(':id')
  findProductById(@Param() params): string {
    return `This method returns a product of id #${params.id} by id`;
  }
}
