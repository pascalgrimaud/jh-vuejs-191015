// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.common with an alias.
import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './app.vue';
import Vue2Filters from 'vue2-filters';
import router from './router';
import * as config from './shared/config/config';
import * as bootstrapVueConfig from './shared/config/config-bootstrap-vue';
import JhiItemCountComponent from './shared/jhi-item-count.vue';
import AuditsService from './admin/audits/audits.service';

import HealthService from './admin/health/health.service';
import MetricsService from './admin/metrics/metrics.service';
import LogsService from './admin/logs/logs.service';
import ActivateService from './account/activate/activate.service';
import RegisterService from './account/register/register.service';
import UserManagementService from '@/admin/user-management/user-management.service';

import LoginService from './account/login.service';
import AccountService from './account/account.service';

import '../content/scss/vendor.scss';
import AlertService from '@/shared/alert/alert.service';
import TranslationService from '@/locale/translation.service';
import ConfigurationService from '@/admin/configuration/configuration.service';

import BankAccountService from '@/entities/test-root/bank-account-my-suffix/bank-account-my-suffix.service';
import LabelService from '@/entities/test-root/label/label.service';
import OperationService from '@/entities/test-root/operation/operation.service';
import FieldTestEntityService from '@/entities/field-test-entity/field-test-entity.service';
import FieldTestServiceImplEntityService from '@/entities/field-test-service-impl-entity/field-test-service-impl-entity.service';
import FieldTestServiceClassEntityService from '@/entities/field-test-service-class-entity/field-test-service-class-entity.service';
import FieldTestPaginationEntityService from '@/entities/field-test-pagination-entity/field-test-pagination-entity.service';
import FieldTestPagerEntityService from '@/entities/field-test-pager-entity/field-test-pager-entity.service';
import FieldTestMapstructEntityService from '@/entities/field-test-mapstruct-entity/field-test-mapstruct-entity.service';
import FieldTestInfiniteScrollEntityService from '@/entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity.service';
import EntityWithDTOService from '@/entities/entity-with-dto/entity-with-dto.service';
import EntityWithServiceClassService from '@/entities/entity-with-service-class/entity-with-service-class.service';
import EntityWithServiceImplService from '@/entities/entity-with-service-impl/entity-with-service-impl.service';
import EntityWithPaginationService from '@/entities/entity-with-pagination/entity-with-pagination.service';
import EntityWithServiceClassAndPaginationService from '@/entities/entity-with-service-class-and-pagination/entity-with-service-class-and-pagination.service';
import EntityWithServiceImplAndPaginationService from '@/entities/entity-with-service-impl-and-pagination/entity-with-service-impl-and-pagination.service';
import EntityWithServiceClassAndDTOService from '@/entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto.service';
import EntityWithServiceImplAndDTOService from '@/entities/entity-with-service-impl-and-dto/entity-with-service-impl-and-dto.service';
import EntityWithPaginationAndDTOService from '@/entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto.service';
import EntityWithServiceClassPaginationAndDTOService from '@/entities/entity-with-service-class-pagination-and-dto/entity-with-service-class-pagination-and-dto.service';
import EntityWithServiceImplPaginationAndDTOService from '@/entities/entity-with-service-impl-pagination-and-dto/entity-with-service-impl-pagination-and-dto.service';
import MapsIdUserProfileWithDTOService from '@/entities/maps-id-user-profile-with-dto/maps-id-user-profile-with-dto.service';
// jhipster-needle-add-entity-service-to-main-import - JHipster will import entities services here

Vue.config.productionTip = false;
config.initVueApp(Vue);
config.initFortAwesome(Vue);
bootstrapVueConfig.initBootstrapVue(Vue);
Vue.use(Vue2Filters);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('jhi-item-count', JhiItemCountComponent);

const i18n = config.initI18N(Vue);
const store = config.initVueXStore(Vue);

const alertService = new AlertService(store);
const translationService = new TranslationService(store, i18n);
const loginService = new LoginService();
const accountService = new AccountService(store, translationService, router);

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/not-found');
  }

  if (to.meta && to.meta.authorities && to.meta.authorities.length > 0) {
    if (!accountService.hasAnyAuthority(to.meta.authorities)) {
      sessionStorage.setItem('requested-url', to.fullPath);
      next('/forbidden');
    } else {
      next();
    }
  } else {
    // no authorities, so just proceed
    next();
  }
});

/* tslint:disable */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  provide: {
    loginService: () => loginService,
    activateService: () => new ActivateService(),
    registerService: () => new RegisterService(),
    userService: () => new UserManagementService(),

    auditsService: () => new AuditsService(),

    healthService: () => new HealthService(),

    configurationService: () => new ConfigurationService(),
    logsService: () => new LogsService(),
    metricsService: () => new MetricsService(),
    alertService: () => alertService,
    translationService: () => translationService,
    bankAccountService: () => new BankAccountService(),
    labelService: () => new LabelService(),
    operationService: () => new OperationService(),
    fieldTestEntityService: () => new FieldTestEntityService(),
    fieldTestServiceImplEntityService: () => new FieldTestServiceImplEntityService(),
    fieldTestServiceClassEntityService: () => new FieldTestServiceClassEntityService(),
    fieldTestPaginationEntityService: () => new FieldTestPaginationEntityService(),
    fieldTestPagerEntityService: () => new FieldTestPagerEntityService(),
    fieldTestMapstructEntityService: () => new FieldTestMapstructEntityService(),
    fieldTestInfiniteScrollEntityService: () => new FieldTestInfiniteScrollEntityService(),
    entityWithDTOService: () => new EntityWithDTOService(),
    entityWithServiceClassService: () => new EntityWithServiceClassService(),
    entityWithServiceImplService: () => new EntityWithServiceImplService(),
    entityWithPaginationService: () => new EntityWithPaginationService(),
    entityWithServiceClassAndPaginationService: () => new EntityWithServiceClassAndPaginationService(),
    entityWithServiceImplAndPaginationService: () => new EntityWithServiceImplAndPaginationService(),
    entityWithServiceClassAndDTOService: () => new EntityWithServiceClassAndDTOService(),
    entityWithServiceImplAndDTOService: () => new EntityWithServiceImplAndDTOService(),
    entityWithPaginationAndDTOService: () => new EntityWithPaginationAndDTOService(),
    entityWithServiceClassPaginationAndDTOService: () => new EntityWithServiceClassPaginationAndDTOService(),
    entityWithServiceImplPaginationAndDTOService: () => new EntityWithServiceImplPaginationAndDTOService(),
    mapsIdUserProfileWithDTOService: () => new MapsIdUserProfileWithDTOService(),
    // jhipster-needle-add-entity-service-to-main - JHipster will import entities services here
    accountService: () => accountService
  },
  i18n,
  store
});
