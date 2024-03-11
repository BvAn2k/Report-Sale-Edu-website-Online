package vn.vti.moneypig.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import vn.vti.moneypig.models.Order;
import vn.vti.moneypig.models.Product;
import vn.vti.moneypig.models.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends MongoRepository<Order,Long> {
//    List<Order> findByUser(User user);
//    List<Order> findByProducts(Product product);
//    Optional<Order> findById(Long id);
//    List<User> findAllByUserId (Long userId);
//    List<Product> findAllByProductId (Long productId);
}
