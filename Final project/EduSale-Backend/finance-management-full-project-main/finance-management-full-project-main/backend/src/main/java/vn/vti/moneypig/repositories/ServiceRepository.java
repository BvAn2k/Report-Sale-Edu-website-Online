package vn.vti.moneypig.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import vn.vti.moneypig.models.Service;
import vn.vti.moneypig.models.User;

@Repository
public interface ServiceRepository extends MongoRepository<Service, Long>
{
}
