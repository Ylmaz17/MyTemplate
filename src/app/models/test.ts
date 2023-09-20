import { Image } from "./image";

export interface Test {
    id: number;
    productName: string;
    productCode: string;
    barcode: string;
    unitPrice: number;
    stock: number;
    taxRate: number;
    addedDate: any;
    brand: string;
    status: boolean;
    description: string;
    mainCategory: number;
    categoryId2: number;
    categoryId3: number;
    image:Image[]
  }