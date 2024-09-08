export interface Product {
    id?: number;
    name: string;
    brand: string;
    stockQuantity: number;
    available: boolean;
    notAvailable: boolean;
    date: string;
    time: string;
    description: string;
    category: 'Tshirt' | 'shoes';
    image: string;
    price: number;
    color: string;
  }
  