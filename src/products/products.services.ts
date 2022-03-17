import { Injectable } from '@nestjs/common';
import { Product } from './products.interface';

@Injectable()
export class ProductService {
  private readonly product: Product[] = [];
  createProducts(product: Product) {
    this.product.push(product);
  }
  findAllProducts(): Product[] {
    return this.product;
  }
}
