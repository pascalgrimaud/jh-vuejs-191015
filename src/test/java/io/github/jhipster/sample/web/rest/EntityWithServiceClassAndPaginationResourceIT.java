package io.github.jhipster.sample.web.rest;

import io.github.jhipster.sample.JhipsterApp;
import io.github.jhipster.sample.domain.EntityWithServiceClassAndPagination;
import io.github.jhipster.sample.repository.EntityWithServiceClassAndPaginationRepository;
import io.github.jhipster.sample.service.EntityWithServiceClassAndPaginationService;
import io.github.jhipster.sample.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.List;

import static io.github.jhipster.sample.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link EntityWithServiceClassAndPaginationResource} REST controller.
 */
@SpringBootTest(classes = JhipsterApp.class)
public class EntityWithServiceClassAndPaginationResourceIT {

    private static final String DEFAULT_ENZO = "AAAAAAAAAA";
    private static final String UPDATED_ENZO = "BBBBBBBBBB";

    @Autowired
    private EntityWithServiceClassAndPaginationRepository entityWithServiceClassAndPaginationRepository;

    @Autowired
    private EntityWithServiceClassAndPaginationService entityWithServiceClassAndPaginationService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restEntityWithServiceClassAndPaginationMockMvc;

    private EntityWithServiceClassAndPagination entityWithServiceClassAndPagination;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final EntityWithServiceClassAndPaginationResource entityWithServiceClassAndPaginationResource = new EntityWithServiceClassAndPaginationResource(entityWithServiceClassAndPaginationService);
        this.restEntityWithServiceClassAndPaginationMockMvc = MockMvcBuilders.standaloneSetup(entityWithServiceClassAndPaginationResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceClassAndPagination createEntity(EntityManager em) {
        EntityWithServiceClassAndPagination entityWithServiceClassAndPagination = new EntityWithServiceClassAndPagination()
            .enzo(DEFAULT_ENZO);
        return entityWithServiceClassAndPagination;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceClassAndPagination createUpdatedEntity(EntityManager em) {
        EntityWithServiceClassAndPagination entityWithServiceClassAndPagination = new EntityWithServiceClassAndPagination()
            .enzo(UPDATED_ENZO);
        return entityWithServiceClassAndPagination;
    }

    @BeforeEach
    public void initTest() {
        entityWithServiceClassAndPagination = createEntity(em);
    }

    @Test
    @Transactional
    public void createEntityWithServiceClassAndPagination() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceClassAndPaginationRepository.findAll().size();

        // Create the EntityWithServiceClassAndPagination
        restEntityWithServiceClassAndPaginationMockMvc.perform(post("/api/entity-with-service-class-and-paginations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceClassAndPagination)))
            .andExpect(status().isCreated());

        // Validate the EntityWithServiceClassAndPagination in the database
        List<EntityWithServiceClassAndPagination> entityWithServiceClassAndPaginationList = entityWithServiceClassAndPaginationRepository.findAll();
        assertThat(entityWithServiceClassAndPaginationList).hasSize(databaseSizeBeforeCreate + 1);
        EntityWithServiceClassAndPagination testEntityWithServiceClassAndPagination = entityWithServiceClassAndPaginationList.get(entityWithServiceClassAndPaginationList.size() - 1);
        assertThat(testEntityWithServiceClassAndPagination.getEnzo()).isEqualTo(DEFAULT_ENZO);
    }

    @Test
    @Transactional
    public void createEntityWithServiceClassAndPaginationWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceClassAndPaginationRepository.findAll().size();

        // Create the EntityWithServiceClassAndPagination with an existing ID
        entityWithServiceClassAndPagination.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restEntityWithServiceClassAndPaginationMockMvc.perform(post("/api/entity-with-service-class-and-paginations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceClassAndPagination)))
            .andExpect(status().isBadRequest());

        // Validate the EntityWithServiceClassAndPagination in the database
        List<EntityWithServiceClassAndPagination> entityWithServiceClassAndPaginationList = entityWithServiceClassAndPaginationRepository.findAll();
        assertThat(entityWithServiceClassAndPaginationList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllEntityWithServiceClassAndPaginations() throws Exception {
        // Initialize the database
        entityWithServiceClassAndPaginationRepository.saveAndFlush(entityWithServiceClassAndPagination);

        // Get all the entityWithServiceClassAndPaginationList
        restEntityWithServiceClassAndPaginationMockMvc.perform(get("/api/entity-with-service-class-and-paginations?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(entityWithServiceClassAndPagination.getId().intValue())))
            .andExpect(jsonPath("$.[*].enzo").value(hasItem(DEFAULT_ENZO)));
    }
    
    @Test
    @Transactional
    public void getEntityWithServiceClassAndPagination() throws Exception {
        // Initialize the database
        entityWithServiceClassAndPaginationRepository.saveAndFlush(entityWithServiceClassAndPagination);

        // Get the entityWithServiceClassAndPagination
        restEntityWithServiceClassAndPaginationMockMvc.perform(get("/api/entity-with-service-class-and-paginations/{id}", entityWithServiceClassAndPagination.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(entityWithServiceClassAndPagination.getId().intValue()))
            .andExpect(jsonPath("$.enzo").value(DEFAULT_ENZO));
    }

    @Test
    @Transactional
    public void getNonExistingEntityWithServiceClassAndPagination() throws Exception {
        // Get the entityWithServiceClassAndPagination
        restEntityWithServiceClassAndPaginationMockMvc.perform(get("/api/entity-with-service-class-and-paginations/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateEntityWithServiceClassAndPagination() throws Exception {
        // Initialize the database
        entityWithServiceClassAndPaginationService.save(entityWithServiceClassAndPagination);

        int databaseSizeBeforeUpdate = entityWithServiceClassAndPaginationRepository.findAll().size();

        // Update the entityWithServiceClassAndPagination
        EntityWithServiceClassAndPagination updatedEntityWithServiceClassAndPagination = entityWithServiceClassAndPaginationRepository.findById(entityWithServiceClassAndPagination.getId()).get();
        // Disconnect from session so that the updates on updatedEntityWithServiceClassAndPagination are not directly saved in db
        em.detach(updatedEntityWithServiceClassAndPagination);
        updatedEntityWithServiceClassAndPagination
            .enzo(UPDATED_ENZO);

        restEntityWithServiceClassAndPaginationMockMvc.perform(put("/api/entity-with-service-class-and-paginations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedEntityWithServiceClassAndPagination)))
            .andExpect(status().isOk());

        // Validate the EntityWithServiceClassAndPagination in the database
        List<EntityWithServiceClassAndPagination> entityWithServiceClassAndPaginationList = entityWithServiceClassAndPaginationRepository.findAll();
        assertThat(entityWithServiceClassAndPaginationList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceClassAndPagination testEntityWithServiceClassAndPagination = entityWithServiceClassAndPaginationList.get(entityWithServiceClassAndPaginationList.size() - 1);
        assertThat(testEntityWithServiceClassAndPagination.getEnzo()).isEqualTo(UPDATED_ENZO);
    }

    @Test
    @Transactional
    public void updateNonExistingEntityWithServiceClassAndPagination() throws Exception {
        int databaseSizeBeforeUpdate = entityWithServiceClassAndPaginationRepository.findAll().size();

        // Create the EntityWithServiceClassAndPagination

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restEntityWithServiceClassAndPaginationMockMvc.perform(put("/api/entity-with-service-class-and-paginations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entityWithServiceClassAndPagination)))
            .andExpect(status().isBadRequest());

        // Validate the EntityWithServiceClassAndPagination in the database
        List<EntityWithServiceClassAndPagination> entityWithServiceClassAndPaginationList = entityWithServiceClassAndPaginationRepository.findAll();
        assertThat(entityWithServiceClassAndPaginationList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteEntityWithServiceClassAndPagination() throws Exception {
        // Initialize the database
        entityWithServiceClassAndPaginationService.save(entityWithServiceClassAndPagination);

        int databaseSizeBeforeDelete = entityWithServiceClassAndPaginationRepository.findAll().size();

        // Delete the entityWithServiceClassAndPagination
        restEntityWithServiceClassAndPaginationMockMvc.perform(delete("/api/entity-with-service-class-and-paginations/{id}", entityWithServiceClassAndPagination.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<EntityWithServiceClassAndPagination> entityWithServiceClassAndPaginationList = entityWithServiceClassAndPaginationRepository.findAll();
        assertThat(entityWithServiceClassAndPaginationList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntityWithServiceClassAndPagination.class);
        EntityWithServiceClassAndPagination entityWithServiceClassAndPagination1 = new EntityWithServiceClassAndPagination();
        entityWithServiceClassAndPagination1.setId(1L);
        EntityWithServiceClassAndPagination entityWithServiceClassAndPagination2 = new EntityWithServiceClassAndPagination();
        entityWithServiceClassAndPagination2.setId(entityWithServiceClassAndPagination1.getId());
        assertThat(entityWithServiceClassAndPagination1).isEqualTo(entityWithServiceClassAndPagination2);
        entityWithServiceClassAndPagination2.setId(2L);
        assertThat(entityWithServiceClassAndPagination1).isNotEqualTo(entityWithServiceClassAndPagination2);
        entityWithServiceClassAndPagination1.setId(null);
        assertThat(entityWithServiceClassAndPagination1).isNotEqualTo(entityWithServiceClassAndPagination2);
    }
}
