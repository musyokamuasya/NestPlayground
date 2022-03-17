import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateProductsDto } from './products.dto';
import { Product } from './products.interface';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}
  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createProducts(@Body() createProductsDto: CreateProductsDto) {
    this.productService.createProducts(createProductsDto);
  }
  //   Observable used to return a stream of data using rxjs
  @Get()
  findAllProducts(): Observable<any[]> {
    return of(this.productService.findAllProducts());
  }
  //   promises uses to return one shot data
  @Get(':id')
  async findProductById(@Param() params): Promise<any[]> {
    console.log(params.id);
    return [];
  }
}
