package com.project.backend.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.backend.entity.Product;
import com.project.backend.service.ProductService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200")  // Adjust the port if needed
public class ProductController {
    private static final String IMAGE_DIRECTORY = "src/main/resources/static/images/";
    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Optional<Product> product = productService.getProductById(id);
        return product.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Map<String, String>> addProduct(
            @RequestParam("nom") String nom,
            @RequestParam("description") String description,
            @RequestParam("categorie") String categorie,
            @RequestParam("prix") Double prix,
            @RequestParam("stock") Integer stock,
            @RequestParam("disponible") Boolean disponible,
            @RequestParam("image") MultipartFile image) {
    
        try {
            // Create a product object
            Product product = new Product();
            product.setNom(nom);
            product.setDescription(description);
            product.setCategorie(categorie);
            product.setPrix(prix);
            product.setStock(stock);
            product.setDisponible(disponible);
    
            // Save the image and generate the image URL
            if (!image.isEmpty()) {
                String imageName = image.getOriginalFilename();  // Get the original file name
                Path imagePath = Paths.get(IMAGE_DIRECTORY + imageName); // Use imageName here
                Files.write(imagePath, image.getBytes());
    
                // Generate the image URL (adjust according to your server structure)
                String imageUrl = "/images/" + imageName; // Use imageName for the URL
                product.setImageUrl(imageUrl); // Ensure this matches your Product entity
            }
    
            // Save the product via the service
            productService.saveProduct(product);
    
            // JSON response
            Map<String, String> response = new HashMap<>();
            response.put("message", "Product added successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Handle the error
            Map<String, String> error = new HashMap<>();
            error.put("message", "An error occurred while saving the product");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        if (productService.getProductById(id).isPresent()) {
            productService.deleteProduct(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
