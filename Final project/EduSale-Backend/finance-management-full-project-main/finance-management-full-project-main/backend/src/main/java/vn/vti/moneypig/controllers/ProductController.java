package vn.vti.moneypig.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.vti.moneypig.dto.ResponseObject;
import vn.vti.moneypig.jwt.JwtInterceptor;
import vn.vti.moneypig.jwt.JwtTokenStore;
import vn.vti.moneypig.models.Product;
import vn.vti.moneypig.repositories.ProductRepository;
import vn.vti.moneypig.services.ProductService;
import vn.vti.moneypig.services.UserService;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private   ProductService productService;



    @PostMapping("/create-product")
    public ResponseEntity<?> insert (@RequestParam String token,  @RequestBody Product product){
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201,null,"token is not exist"));
        }
        token = "Bearer " + token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if (isAuthenticated){

            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200,productService.insert(product),"success"));

        }else {

            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(202,null,"token is not valid"));

        }

    }
    @PostMapping("/updet-product")
    public ResponseEntity<?> uppdet (@RequestParam String token , @RequestBody Product product){
        if (token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"token ís not exist"));

        }
        token = "Bearer "+token;
        boolean isauthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if (isauthenticated){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200,productService.uppdetProduct(product),"scusse"));
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201,null,"isauthenticated is not exist"));

        }


    }

    @PostMapping("/getAllProduct")
    public ResponseEntity<?> getAllProduct (@RequestParam String token){
       if (token.isBlank()){
           return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201,null,"token is not exist "));
       }
       token = "Bearer " + token;
       boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
       if (isAuthenticated){
           return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, productService.findAllProduct(),"seccess "));

       }else {
           return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201,null,"isauthenticated is not exist"));
       }

    }


    @PostMapping("/delete-product")
    public ResponseEntity<?> deleteProduct (@RequestParam String token , @RequestParam Long id ){


        if (token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201,null,"token is not exist "));
        }
        token = "Bearer "+token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if (isAuthenticated){
            Product foundProduct = productService.findProductById(id);
            foundProduct.setActive(false);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200,productService.dellet(id),"seccess"));
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201,null, "lost"));
        }


    }


}
