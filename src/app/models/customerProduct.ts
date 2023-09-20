export interface CustomerProduct {
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
    subcategoryOne: number;
    subcategoryTwo: number;
    imagePath:string;
  }