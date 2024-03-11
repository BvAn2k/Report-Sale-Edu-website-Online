package vn.vti.moneypig.services;

import jakarta.persistence.SequenceGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import vn.vti.moneypig.database.SequenceGeneratorService;
import vn.vti.moneypig.models.Product;
import vn.vti.moneypig.repositories.ProductRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;
    public List<Product> findAllProduct(){
        return productRepository.findAll();
    }
    public Product findProductById (Long id){

        return productRepository.findByProductId(id).orElse(null);

    }
    public Product insert (Product product){
        long id = sequenceGeneratorService.generateSequence(Product.SEQUENCE_NAME);
        product.setProductId(id);
//        product.setDescription(product.getDescription());
       product.setActive(true);
    return productRepository.insert(product);
    }
    public Product uppdetProduct (Product product){
        Optional<Product> optionalProduct = productRepository.findById(product.getProductId());
        if (optionalProduct.isPresent()){
            Product upddet = optionalProduct.get();
            upddet.setProductName(product.getProductName());
            upddet.setActive(true);
            upddet.setDescription(product.getDescription());
            return productRepository.save(upddet);
        }
        return null;
    }
    public Product dellet (Long id){
        Optional<Product>delletProduct = productRepository.findById(id);
        if (delletProduct.isPresent()){
            Product delete = delletProduct.get();
            delete.setActive(false);
           return productRepository.save(delete);

        }
        return null;

    }
}
