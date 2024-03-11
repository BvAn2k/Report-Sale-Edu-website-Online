package vn.vti.moneypig.controllers;

import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.vti.moneypig.dto.ResponseObject;
import vn.vti.moneypig.jwt.JwtInterceptor;
import vn.vti.moneypig.models.Order;
import vn.vti.moneypig.models.Product;
import vn.vti.moneypig.models.User;
import vn.vti.moneypig.services.OrderService;
import vn.vti.moneypig.services.ProductService;
import vn.vti.moneypig.services.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    private final OrderService orderService;
    private final UserService userService;
    private final ProductService productService;


    @Autowired
    public OrderController(OrderService orderService , UserService userService , ProductService productService){
this.orderService = orderService;

this.userService = userService;
this.productService = productService;
    }

@PostMapping ("/getAllOrder")
public  ResponseEntity<?> getAllOrder (@RequestParam String token){
        if (token.isBlank()) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201,null,"token is not exist"));
        }
        token = "Bearer "+token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if (isAuthenticated){
            List<Order> reponorder = orderService.findAllOrder();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200,reponorder,"sucess"));
        } else {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201,null,"isauthenticated is not exist"));
        }


}



    @PostMapping("/createOrder")
    public ResponseEntity<?> createOrder (@RequestParam String token , @RequestBody Order order , @RequestParam Long id){
        if (token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201,null, "token is not exist"));
        }
        token = "Bearer " + token ;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            User userFound = userService.findUserByToken(token);
//            User userFound =  userService.findById(id);
            Product FoundProduct = productService.findProductById(id);
            order.setNameUser(userFound.getUsername());
            order.setNamePro(FoundProduct.getProductName());
            order.setUseremail(userFound.getEmail());
            Order repon = orderService.createOrder(order);


return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200,repon,"success"));
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201,null , "isAuthenticated is failed "));
        }

    }


    @PostMapping("/uppdetOrder")
    public ResponseEntity<?> uppdetOrder (@RequestParam String token , @RequestBody Order order){

        if (token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201,null , "token is not exist"));
        }
        token = "Bearer " + token ;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if (isAuthenticated){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200,orderService.updetOrder(order),"success"));
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201,null,"isAuthenticated is faile"));
        }

    }
    @PostMapping("/deleteOrder")
    public ResponseEntity<?> deleteOrder (@RequestParam String token , @RequestParam Long id ){
        if (token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201,null, "token is not exist "));

        }
        token = "Bearer "+token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if (isAuthenticated){
//            Order order = orderService.findByOrderId(id);
//            order.setActive(false);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200,orderService.delete(id),"success"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null , "isauthenticated is failed "));
    }

}
