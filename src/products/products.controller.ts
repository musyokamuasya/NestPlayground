import { Controller, Get, Post, Param } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('products')
export class ProductsController {
  @Post()
  createProducts(): string {
    return 'This route creates products';
  }
  //   Observable used to return a stream of data using rxjs
  @Get()
  findAllProducts(): Observable<any[]> {
    return of([]);
  }
  //   promises uses to return one shot data
  @Get(':id')
  async findProductById(@Param() params): Promise<any[]> {
    console.log(params.id);
    return [];
  }
}
