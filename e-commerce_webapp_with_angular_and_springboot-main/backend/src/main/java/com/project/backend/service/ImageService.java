package com.project.backend.service;

import java.io.File;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageService {

    private static final String UPLOAD_DIR = "uploads/"; // Directory to store uploaded images

    public String saveImage(MultipartFile file) throws IOException {
        // Create the directory if it does not exist
        File dir = new File(UPLOAD_DIR);
        if (!dir.exists()) {
            dir.mkdirs();
        }

        // Generate a unique filename and save the file
        String filename = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        File dest = new File(dir, filename);
        file.transferTo(dest); // Save the file

        return filename; // Return the filename (or URL) for storage in the database
    }
}
