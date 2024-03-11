package vn.vti.moneypig.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import vn.vti.moneypig.models.Product;

import java.util.Optional;

@Repository
public interface ProductRepository extends MongoRepository<Product,Long> {
Optional<Product> findByProductId (Long id);
Optional<Product> findByProductName(String productname);


}
