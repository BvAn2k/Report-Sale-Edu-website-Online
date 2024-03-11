package vn.vti.moneypig.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import vn.vti.moneypig.models.CategoryGroup;

import java.util.List;

@Repository
public interface CategoryGroupRepository extends MongoRepository<CategoryGroup, Long> {

   List<CategoryGroup> findAllByUserID(Long userID);

}
