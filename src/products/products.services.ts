import { Injectable } from '@nestjs/common';
import {} from './products.interface';

@Injectable
export class ProductService {
  private readonly product: Product;
}
