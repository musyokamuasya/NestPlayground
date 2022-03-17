import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductService } from './products.service';

@Module({
  controllers: [ProductsController],
  services: [ProductService],
})
export class ProductsModule {}
