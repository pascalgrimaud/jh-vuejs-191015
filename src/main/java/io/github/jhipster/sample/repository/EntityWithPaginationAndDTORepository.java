package io.github.jhipster.sample.repository;
import io.github.jhipster.sample.domain.EntityWithPaginationAndDTO;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EntityWithPaginationAndDTO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntityWithPaginationAndDTORepository extends JpaRepository<EntityWithPaginationAndDTO, Long> {

}
