import { Injectable } from '@nestjs/common';
import { db, Product } from './../db';

@Injectable()
export class ProductsService {
  public getAll(): Product[] {
    return db.products;
  }

  public getById(id: Product['id']): Product | null {
    const selectedProduct: Product = db.products.find(
      (product) => product.id === id,
    );
    return selectedProduct;
  }

  public deleteById(id: Product['id']): void {
    db.products = db.products.filter((product) => product.id !== id);
  }

}
