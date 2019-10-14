package io.github.jhipster.sample.service;

import io.github.jhipster.sample.domain.EntityWithServiceImplAndPagination;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link EntityWithServiceImplAndPagination}.
 */
public interface EntityWithServiceImplAndPaginationService {

    /**
     * Save a entityWithServiceImplAndPagination.
     *
     * @param entityWithServiceImplAndPagination the entity to save.
     * @return the persisted entity.
     */
    EntityWithServiceImplAndPagination save(EntityWithServiceImplAndPagination entityWithServiceImplAndPagination);

    /**
     * Get all the entityWithServiceImplAndPaginations.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<EntityWithServiceImplAndPagination> findAll(Pageable pageable);


    /**
     * Get the "id" entityWithServiceImplAndPagination.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<EntityWithServiceImplAndPagination> findOne(Long id);

    /**
     * Delete the "id" entityWithServiceImplAndPagination.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
