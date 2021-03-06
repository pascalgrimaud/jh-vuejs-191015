package io.github.jhipster.sample.repository;
import io.github.jhipster.sample.domain.FieldTestInfiniteScrollEntity;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the FieldTestInfiniteScrollEntity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FieldTestInfiniteScrollEntityRepository extends JpaRepository<FieldTestInfiniteScrollEntity, Long> {

}
