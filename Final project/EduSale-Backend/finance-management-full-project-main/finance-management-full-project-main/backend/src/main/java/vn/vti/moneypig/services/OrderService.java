package vn.vti.moneypig.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vti.moneypig.database.SequenceGeneratorService;

import vn.vti.moneypig.models.Order;

import vn.vti.moneypig.repositories.OrderRepository;



import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;


//
//    @Autowired
//    public OrderService (OrderRepository orderRepository,SequenceGeneratorService sequenceGeneratorService,UserRepository userRepository , ProductRepository productRepository){
//this.orderRepository= orderRepository;
//this.productRepository = productRepository;
//this.userRepository = userRepository;
//this.sequenceGeneratorService= sequenceGeneratorService;
//    }



    public List<Order> findAllOrder (){

        return orderRepository.findAll();
    }
    public Order findByOrderId (Long id){

        if (orderRepository.findById(id).isPresent()){
            return orderRepository.findById(id).get();
        }else {

        return null;
        }

    }
    public Order createOrder (Order order  ){
        Long _id = sequenceGeneratorService.generateSequence(Order.SEQUENCE_NAME);
//        Optional<Product> proId = productRepository.findByProductId(prodouctId);
     order.setId(_id);
////        Optional<User> foundUserById = userRepository.findById(_id);
//        order.setOrderId(_id);
//        order.setProduct(proId.get());
//        order.setUser(uId.get());
        order.setActive(true);


        return orderRepository.insert(order);
    }
    public Order updetOrder (Order order){
//        Long id = order.getOrderId();
//        Optional<Order> getOrderId = orderRepository.findById(id);
//        if (getOrderId.isPresent()){
//            Order order1 = getOrderId.get();
//            order1.setUser(order.getUser());
//            order1.setProduct(order.getProduct());
//            return orderRepository.save(order1);
//        } else {
//            throw new IllegalArgumentException("User not found with id: " + id);
//        }


        return null;

    }
    public Order delete (Long id ){
        Optional<Order> getOrderId = orderRepository.findById(id);
        if (getOrderId.isPresent()){
            Order order = getOrderId.get();
            order.setActive(false);
            return orderRepository.save(order);
        }else {
            return null;
        }

    }
//    public List <Order> findOrderByUsername (String username){
//        Optional<User> foundUsername = userRepository.findByUsername(username);
//
//       if (foundUsername.isPresent()){
//           User user = foundUsername.get();
//           return orderRepository.findByUser(user);
//       }
//       return null;
//    }
//    public List <Order> findByProductname (String name ){
//
//        Optional<Product> productOption = productRepository.findByProductname(name);
//        if (productOption.isPresent()){
//            Product product = productOption.get();
//            return orderRepository.findByProduct(product);
//        }
//
//        return null ;
//
//    }
}
