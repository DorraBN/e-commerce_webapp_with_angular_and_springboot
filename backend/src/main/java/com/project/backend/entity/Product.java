package com.project.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nom;
    
    private String description;
    
    private String categorie;
    
    private Double prix;
    
    private String url_image;
    
    private int stock;
    
    private boolean disponible;
    
    private LocalDateTime createdAt = LocalDateTime.now();

    // Getters
    public Long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getDescription() {
        return description;
    }

    public String getCategorie() {
        return categorie;
    }

    public Double getPrix() {
        return prix;
    }

    public String getUrlImage() {
        return url_image;
    }

    public int getStock() {
        return stock;
    }

    public boolean isDisponible() {
        return disponible;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    // Setters
    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public void setPrix(Double prix) {
        this.prix = prix;
    }

    public void setUrlImage(String url_image) {
        this.url_image = url_image;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public void setDisponible(boolean disponible) {
        this.disponible = disponible;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    // Optional: A method to update stock
    public void updateStock(int quantity) {
        this.stock = quantity;
    }
}
