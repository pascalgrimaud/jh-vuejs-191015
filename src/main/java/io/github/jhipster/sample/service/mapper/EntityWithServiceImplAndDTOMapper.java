package io.github.jhipster.sample.service.mapper;

import io.github.jhipster.sample.domain.*;
import io.github.jhipster.sample.service.dto.EntityWithServiceImplAndDTODTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link EntityWithServiceImplAndDTO} and its DTO {@link EntityWithServiceImplAndDTODTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface EntityWithServiceImplAndDTOMapper extends EntityMapper<EntityWithServiceImplAndDTODTO, EntityWithServiceImplAndDTO> {



    default EntityWithServiceImplAndDTO fromId(Long id) {
        if (id == null) {
            return null;
        }
        EntityWithServiceImplAndDTO entityWithServiceImplAndDTO = new EntityWithServiceImplAndDTO();
        entityWithServiceImplAndDTO.setId(id);
        return entityWithServiceImplAndDTO;
    }
}
