package io.github.jhipster.sample.repository;
import io.github.jhipster.sample.domain.MapsIdUserProfileWithDTO;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the MapsIdUserProfileWithDTO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MapsIdUserProfileWithDTORepository extends JpaRepository<MapsIdUserProfileWithDTO, Long> {

}
