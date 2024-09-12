export interface Product {
    id?: number;
    nom: string;
   description: string;
    stock: number;
    disponible: boolean;

    date: string;
    time: string;
    
    categorie: 'Tshirt' | 'shoes';
    url_image: string;
    prix: number;
   
  }
  