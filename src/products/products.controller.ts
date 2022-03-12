import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateProductsDto } from './products.dto';

@Controller('products')
export class ProductsController {
  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createProducts(@Body() createProductsDto: CreateProductsDto) {
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
