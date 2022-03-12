import { Controller, Get, Post, Param } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('products')
export class ProductsController {
  @Post()
  createProducts(): string {
    return 'This route creates products';
  }
  @Get()
  findAllProducts(): Observable<any[]> {
    return of([]);
  }
  @Get(':id')
  async findProductById(@Param() params): Promise<any[]> {
    console.log(params.id);
    return [];
  }
}
