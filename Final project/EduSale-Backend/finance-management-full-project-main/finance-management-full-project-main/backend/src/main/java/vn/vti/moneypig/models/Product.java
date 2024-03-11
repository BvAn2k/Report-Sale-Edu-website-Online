package vn.vti.moneypig.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "product")
public class Product {
    @Id
    private long productId;
    @Transient
    public static final String SEQUENCE_NAME = "product_sequence";
    private String productName;
    private boolean isActive;


    private String description;

    public Product(long productId, String productName, boolean isActive, String description) {
        this.productId = productId;
        this.productName = productName;
        this.isActive = isActive;
        this.description = description;
    }





    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
