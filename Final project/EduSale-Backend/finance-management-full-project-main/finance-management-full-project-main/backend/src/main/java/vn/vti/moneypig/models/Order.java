package vn.vti.moneypig.models;

import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@NoArgsConstructor
@Document("order")
public class Order {

    @Id
    private Long  id;
    @Transient
    public static final String SEQUENCE_NAME = "order-sequence";
    private String namePro;
    private boolean isActive;
    private String nameUser;
    private String useremail;




    public Order(Long id, String namePro, boolean isActive, String nameUser, String useremail) {
        this.id = id;
        this.namePro = namePro;
        this.isActive = isActive;
        this.nameUser = nameUser;
        this.useremail = useremail;
    }

    public Order(String useremail) {
        this.useremail = useremail;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNamePro() {
        return namePro;
    }

    public void setNamePro(String namePro) {
        this.namePro = namePro;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }
}
