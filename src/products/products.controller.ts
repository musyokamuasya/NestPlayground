import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  findAll(): string {
    return 'This class returns all products';
  }
}
