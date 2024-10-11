export class Product {
  id: number;
  nom: string;
  description: string;
  categorie: string;
  prix: number;
  image: string; // Add this to match your API response
  url_image: string; // Keep this for URL construction
  stock: number;
  disponible: boolean;
  createdAt: string;

  constructor(
      id: number = 0,
      nom: string = '',
      description: string = '',
      categorie: string = '',
      prix: number = 0,
      image: string = '', // Add this parameter
      url_image: string = '',
      stock: number = 0,
      disponible: boolean = true,
      createdAt: string = ''
  ) {
      this.id = id;
      this.nom = nom;
      this.prix = prix;
      this.description = description;
      this.categorie = categorie;
      this.image = image; // Initialize image
      this.url_image = url_image;
      this.stock = stock;
      this.disponible = disponible;
      this.createdAt = createdAt;
  }
}
