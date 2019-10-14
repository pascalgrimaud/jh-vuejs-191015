import Vue from 'vue';
import Component from 'vue-class-component';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
]);
import Router from 'vue-router';
const Home = () => import('../core/home/home.vue');
const Error = () => import('../core/error/error.vue');
const Register = () => import('../account/register/register.vue');
const Activate = () => import('../account/activate/activate.vue');
const ResetPasswordInit = () => import('../account/reset-password/init/reset-password-init.vue');
const ResetPasswordFinish = () => import('../account/reset-password/finish/reset-password-finish.vue');
const ChangePassword = () => import('../account/change-password/change-password.vue');
const Settings = () => import('../account/settings/settings.vue');
const JhiUserManagementComponent = () => import('../admin/user-management/user-management.vue');
const JhiUserManagementViewComponent = () => import('../admin/user-management/user-management-view.vue');
const JhiUserManagementEditComponent = () => import('../admin/user-management/user-management-edit.vue');
const JhiConfigurationComponent = () => import('../admin/configuration/configuration.vue');
const JhiDocsComponent = () => import('../admin/docs/docs.vue');
const JhiHealthComponent = () => import('../admin/health/health.vue');
const JhiLogsComponent = () => import('../admin/logs/logs.vue');
const JhiAuditsComponent = () => import('../admin/audits/audits.vue');
const JhiMetricsComponent = () => import('../admin/metrics/metrics.vue');
/* tslint:disable */
// prettier-ignore
const BankAccountMySuffix = () => import('../entities/test-root/bank-account-my-suffix/bank-account-my-suffix.vue');
// prettier-ignore
const BankAccountMySuffixUpdate = () => import('../entities/test-root/bank-account-my-suffix/bank-account-my-suffix-update.vue');
// prettier-ignore
const BankAccountMySuffixDetails = () => import('../entities/test-root/bank-account-my-suffix/bank-account-my-suffix-details.vue');
// prettier-ignore
const Label = () => import('../entities/test-root/label/label.vue');
// prettier-ignore
const LabelUpdate = () => import('../entities/test-root/label/label-update.vue');
// prettier-ignore
const LabelDetails = () => import('../entities/test-root/label/label-details.vue');
// prettier-ignore
const Operation = () => import('../entities/test-root/operation/operation.vue');
// prettier-ignore
const OperationUpdate = () => import('../entities/test-root/operation/operation-update.vue');
// prettier-ignore
const OperationDetails = () => import('../entities/test-root/operation/operation-details.vue');
// prettier-ignore
const FieldTestEntity = () => import('../entities/field-test-entity/field-test-entity.vue');
// prettier-ignore
const FieldTestEntityUpdate = () => import('../entities/field-test-entity/field-test-entity-update.vue');
// prettier-ignore
const FieldTestEntityDetails = () => import('../entities/field-test-entity/field-test-entity-details.vue');
// prettier-ignore
const FieldTestServiceImplEntity = () => import('../entities/field-test-service-impl-entity/field-test-service-impl-entity.vue');
// prettier-ignore
const FieldTestServiceImplEntityUpdate = () => import('../entities/field-test-service-impl-entity/field-test-service-impl-entity-update.vue');
// prettier-ignore
const FieldTestServiceImplEntityDetails = () => import('../entities/field-test-service-impl-entity/field-test-service-impl-entity-details.vue');
// prettier-ignore
const FieldTestServiceClassEntity = () => import('../entities/field-test-service-class-entity/field-test-service-class-entity.vue');
// prettier-ignore
const FieldTestServiceClassEntityUpdate = () => import('../entities/field-test-service-class-entity/field-test-service-class-entity-update.vue');
// prettier-ignore
const FieldTestServiceClassEntityDetails = () => import('../entities/field-test-service-class-entity/field-test-service-class-entity-details.vue');
// prettier-ignore
const FieldTestPaginationEntity = () => import('../entities/field-test-pagination-entity/field-test-pagination-entity.vue');
// prettier-ignore
const FieldTestPaginationEntityUpdate = () => import('../entities/field-test-pagination-entity/field-test-pagination-entity-update.vue');
// prettier-ignore
const FieldTestPaginationEntityDetails = () => import('../entities/field-test-pagination-entity/field-test-pagination-entity-details.vue');
// prettier-ignore
const FieldTestPagerEntity = () => import('../entities/field-test-pager-entity/field-test-pager-entity.vue');
// prettier-ignore
const FieldTestPagerEntityUpdate = () => import('../entities/field-test-pager-entity/field-test-pager-entity-update.vue');
// prettier-ignore
const FieldTestPagerEntityDetails = () => import('../entities/field-test-pager-entity/field-test-pager-entity-details.vue');
// prettier-ignore
const FieldTestMapstructEntity = () => import('../entities/field-test-mapstruct-entity/field-test-mapstruct-entity.vue');
// prettier-ignore
const FieldTestMapstructEntityUpdate = () => import('../entities/field-test-mapstruct-entity/field-test-mapstruct-entity-update.vue');
// prettier-ignore
const FieldTestMapstructEntityDetails = () => import('../entities/field-test-mapstruct-entity/field-test-mapstruct-entity-details.vue');
// prettier-ignore
const FieldTestInfiniteScrollEntity = () => import('../entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity.vue');
// prettier-ignore
const FieldTestInfiniteScrollEntityUpdate = () => import('../entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity-update.vue');
// prettier-ignore
const FieldTestInfiniteScrollEntityDetails = () => import('../entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity-details.vue');
// prettier-ignore
const EntityWithDTO = () => import('../entities/entity-with-dto/entity-with-dto.vue');
// prettier-ignore
const EntityWithDTOUpdate = () => import('../entities/entity-with-dto/entity-with-dto-update.vue');
// prettier-ignore
const EntityWithDTODetails = () => import('../entities/entity-with-dto/entity-with-dto-details.vue');
// prettier-ignore
const EntityWithServiceClass = () => import('../entities/entity-with-service-class/entity-with-service-class.vue');
// prettier-ignore
const EntityWithServiceClassUpdate = () => import('../entities/entity-with-service-class/entity-with-service-class-update.vue');
// prettier-ignore
const EntityWithServiceClassDetails = () => import('../entities/entity-with-service-class/entity-with-service-class-details.vue');
// prettier-ignore
const EntityWithServiceImpl = () => import('../entities/entity-with-service-impl/entity-with-service-impl.vue');
// prettier-ignore
const EntityWithServiceImplUpdate = () => import('../entities/entity-with-service-impl/entity-with-service-impl-update.vue');
// prettier-ignore
const EntityWithServiceImplDetails = () => import('../entities/entity-with-service-impl/entity-with-service-impl-details.vue');
// prettier-ignore
const EntityWithPagination = () => import('../entities/entity-with-pagination/entity-with-pagination.vue');
// prettier-ignore
const EntityWithPaginationUpdate = () => import('../entities/entity-with-pagination/entity-with-pagination-update.vue');
// prettier-ignore
const EntityWithPaginationDetails = () => import('../entities/entity-with-pagination/entity-with-pagination-details.vue');
// prettier-ignore
const EntityWithServiceClassAndPagination = () => import('../entities/entity-with-service-class-and-pagination/entity-with-service-class-and-pagination.vue');
// prettier-ignore
const EntityWithServiceClassAndPaginationUpdate = () => import('../entities/entity-with-service-class-and-pagination/entity-with-service-class-and-pagination-update.vue');
// prettier-ignore
const EntityWithServiceClassAndPaginationDetails = () => import('../entities/entity-with-service-class-and-pagination/entity-with-service-class-and-pagination-details.vue');
// prettier-ignore
const EntityWithServiceImplAndPagination = () => import('../entities/entity-with-service-impl-and-pagination/entity-with-service-impl-and-pagination.vue');
// prettier-ignore
const EntityWithServiceImplAndPaginationUpdate = () => import('../entities/entity-with-service-impl-and-pagination/entity-with-service-impl-and-pagination-update.vue');
// prettier-ignore
const EntityWithServiceImplAndPaginationDetails = () => import('../entities/entity-with-service-impl-and-pagination/entity-with-service-impl-and-pagination-details.vue');
// prettier-ignore
const EntityWithServiceClassAndDTO = () => import('../entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto.vue');
// prettier-ignore
const EntityWithServiceClassAndDTOUpdate = () => import('../entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto-update.vue');
// prettier-ignore
const EntityWithServiceClassAndDTODetails = () => import('../entities/entity-with-service-class-and-dto/entity-with-service-class-and-dto-details.vue');
// prettier-ignore
const EntityWithServiceImplAndDTO = () => import('../entities/entity-with-service-impl-and-dto/entity-with-service-impl-and-dto.vue');
// prettier-ignore
const EntityWithServiceImplAndDTOUpdate = () => import('../entities/entity-with-service-impl-and-dto/entity-with-service-impl-and-dto-update.vue');
// prettier-ignore
const EntityWithServiceImplAndDTODetails = () => import('../entities/entity-with-service-impl-and-dto/entity-with-service-impl-and-dto-details.vue');
// prettier-ignore
const EntityWithPaginationAndDTO = () => import('../entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto.vue');
// prettier-ignore
const EntityWithPaginationAndDTOUpdate = () => import('../entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto-update.vue');
// prettier-ignore
const EntityWithPaginationAndDTODetails = () => import('../entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto-details.vue');
// prettier-ignore
const EntityWithServiceClassPaginationAndDTO = () => import('../entities/entity-with-service-class-pagination-and-dto/entity-with-service-class-pagination-and-dto.vue');
// prettier-ignore
const EntityWithServiceClassPaginationAndDTOUpdate = () => import('../entities/entity-with-service-class-pagination-and-dto/entity-with-service-class-pagination-and-dto-update.vue');
// prettier-ignore
const EntityWithServiceClassPaginationAndDTODetails = () => import('../entities/entity-with-service-class-pagination-and-dto/entity-with-service-class-pagination-and-dto-details.vue');
// prettier-ignore
const EntityWithServiceImplPaginationAndDTO = () => import('../entities/entity-with-service-impl-pagination-and-dto/entity-with-service-impl-pagination-and-dto.vue');
// prettier-ignore
const EntityWithServiceImplPaginationAndDTOUpdate = () => import('../entities/entity-with-service-impl-pagination-and-dto/entity-with-service-impl-pagination-and-dto-update.vue');
// prettier-ignore
const EntityWithServiceImplPaginationAndDTODetails = () => import('../entities/entity-with-service-impl-pagination-and-dto/entity-with-service-impl-pagination-and-dto-details.vue');
// prettier-ignore
const MapsIdUserProfileWithDTO = () => import('../entities/maps-id-user-profile-with-dto/maps-id-user-profile-with-dto.vue');
// prettier-ignore
const MapsIdUserProfileWithDTOUpdate = () => import('../entities/maps-id-user-profile-with-dto/maps-id-user-profile-with-dto-update.vue');
// prettier-ignore
const MapsIdUserProfileWithDTODetails = () => import('../entities/maps-id-user-profile-with-dto/maps-id-user-profile-with-dto-details.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

Vue.use(Router);

// prettier-ignore
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: Error,
      meta: { error403: true }
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: Error,
      meta: { error404: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/activate',
      name: 'Activate',
      component: Activate
    },
    {
      path: '/reset/request',
      name: 'ResetPasswordInit',
      component: ResetPasswordInit
    },
    {
      path: '/reset/finish',
      name: 'ResetPasswordFinish',
      component: ResetPasswordFinish
    },
    {
      path: '/account/password',
      name: 'ChangePassword',
      component: ChangePassword,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/account/settings',
      name: 'Settings',
      component: Settings,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/admin/user-management',
      name: 'JhiUser',
      component: JhiUserManagementComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/new',
      name: 'JhiUserCreate',
      component: JhiUserManagementEditComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/:userId/edit',
      name: 'JhiUserEdit',
      component: JhiUserManagementEditComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/:userId/view',
      name: 'JhiUserView',
      component: JhiUserManagementViewComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/docs',
      name: 'JhiDocsComponent',
      component: JhiDocsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/audits',
      name: 'JhiAuditsComponent',
      component: JhiAuditsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-health',
      name: 'JhiHealthComponent',
      component: JhiHealthComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/logs',
      name: 'JhiLogsComponent',
      component: JhiLogsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-metrics',
      name: 'JhiMetricsComponent',
      component: JhiMetricsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-configuration',
      name: 'JhiConfigurationComponent',
      component: JhiConfigurationComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    }
    ,
    {
      path: '/entity/bank-account-my-suffix',
      name: 'BankAccountMySuffix',
      component: BankAccountMySuffix,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/bank-account-my-suffix/new',
      name: 'BankAccountMySuffixCreate',
      component: BankAccountMySuffixUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/bank-account-my-suffix/:bankAccountId/edit',
      name: 'BankAccountMySuffixEdit',
      component: BankAccountMySuffixUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/bank-account-my-suffix/:bankAccountId/view',
      name: 'BankAccountMySuffixView',
      component: BankAccountMySuffixDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/label',
      name: 'Label',
      component: Label,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/label/new',
      name: 'LabelCreate',
      component: LabelUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/label/:labelId/edit',
      name: 'LabelEdit',
      component: LabelUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/label/:labelId/view',
      name: 'LabelView',
      component: LabelDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/operation',
      name: 'Operation',
      component: Operation,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/operation/new',
      name: 'OperationCreate',
      component: OperationUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/operation/:operationId/edit',
      name: 'OperationEdit',
      component: OperationUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/operation/:operationId/view',
      name: 'OperationView',
      component: OperationDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/field-test-entity',
      name: 'FieldTestEntity',
      component: FieldTestEntity,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-entity/new',
      name: 'FieldTestEntityCreate',
      component: FieldTestEntityUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-entity/:fieldTestEntityId/edit',
      name: 'FieldTestEntityEdit',
      component: FieldTestEntityUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-entity/:fieldTestEntityId/view',
      name: 'FieldTestEntityView',
      component: FieldTestEntityDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/field-test-service-impl-entity',
      name: 'FieldTestServiceImplEntity',
      component: FieldTestServiceImplEntity,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-service-impl-entity/new',
      name: 'FieldTestServiceImplEntityCreate',
      component: FieldTestServiceImplEntityUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-service-impl-entity/:fieldTestServiceImplEntityId/edit',
      name: 'FieldTestServiceImplEntityEdit',
      component: FieldTestServiceImplEntityUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-service-impl-entity/:fieldTestServiceImplEntityId/view',
      name: 'FieldTestServiceImplEntityView',
      component: FieldTestServiceImplEntityDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/field-test-service-class-entity',
      name: 'FieldTestServiceClassEntity',
      component: FieldTestServiceClassEntity,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-service-class-entity/new',
      name: 'FieldTestServiceClassEntityCreate',
      component: FieldTestServiceClassEntityUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-service-class-entity/:fieldTestServiceClassEntityId/edit',
      name: 'FieldTestServiceClassEntityEdit',
      component: FieldTestServiceClassEntityUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-service-class-entity/:fieldTestServiceClassEntityId/view',
      name: 'FieldTestServiceClassEntityView',
      component: FieldTestServiceClassEntityDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/field-test-pagination-entity',
      name: 'FieldTestPaginationEntity',
      component: FieldTestPaginationEntity,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-pagination-entity/new',
      name: 'FieldTestPaginationEntityCreate',
      component: FieldTestPaginationEntityUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-pagination-entity/:fieldTestPaginationEntityId/edit',
      name: 'FieldTestPaginationEntityEdit',
      component: FieldTestPaginationEntityUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-pagination-entity/:fieldTestPaginationEntityId/view',
      name: 'FieldTestPaginationEntityView',
      component: FieldTestPaginationEntityDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/field-test-pager-entity',
      name: 'FieldTestPagerEntity',
      component: FieldTestPagerEntity,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-pager-entity/new',
      name: 'FieldTestPagerEntityCreate',
      component: FieldTestPagerEntityUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-pager-entity/:fieldTestPagerEntityId/edit',
      name: 'FieldTestPagerEntityEdit',
      component: FieldTestPagerEntityUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-pager-entity/:fieldTestPagerEntityId/view',
      name: 'FieldTestPagerEntityView',
      component: FieldTestPagerEntityDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/field-test-mapstruct-entity',
      name: 'FieldTestMapstructEntity',
      component: FieldTestMapstructEntity,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-mapstruct-entity/new',
      name: 'FieldTestMapstructEntityCreate',
      component: FieldTestMapstructEntityUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-mapstruct-entity/:fieldTestMapstructEntityId/edit',
      name: 'FieldTestMapstructEntityEdit',
      component: FieldTestMapstructEntityUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-mapstruct-entity/:fieldTestMapstructEntityId/view',
      name: 'FieldTestMapstructEntityView',
      component: FieldTestMapstructEntityDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/field-test-infinite-scroll-entity',
      name: 'FieldTestInfiniteScrollEntity',
      component: FieldTestInfiniteScrollEntity,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-infinite-scroll-entity/new',
      name: 'FieldTestInfiniteScrollEntityCreate',
      component: FieldTestInfiniteScrollEntityUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-infinite-scroll-entity/:fieldTestInfiniteScrollEntityId/edit',
      name: 'FieldTestInfiniteScrollEntityEdit',
      component: FieldTestInfiniteScrollEntityUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/field-test-infinite-scroll-entity/:fieldTestInfiniteScrollEntityId/view',
      name: 'FieldTestInfiniteScrollEntityView',
      component: FieldTestInfiniteScrollEntityDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/entity-with-dto',
      name: 'EntityWithDTO',
      component: EntityWithDTO,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-dto/new',
      name: 'EntityWithDTOCreate',
      component: EntityWithDTOUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-dto/:entityWithDTOId/edit',
      name: 'EntityWithDTOEdit',
      component: EntityWithDTOUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-dto/:entityWithDTOId/view',
      name: 'EntityWithDTOView',
      component: EntityWithDTODetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/entity-with-service-class',
      name: 'EntityWithServiceClass',
      component: EntityWithServiceClass,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-class/new',
      name: 'EntityWithServiceClassCreate',
      component: EntityWithServiceClassUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-class/:entityWithServiceClassId/edit',
      name: 'EntityWithServiceClassEdit',
      component: EntityWithServiceClassUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-class/:entityWithServiceClassId/view',
      name: 'EntityWithServiceClassView',
      component: EntityWithServiceClassDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/entity-with-service-impl',
      name: 'EntityWithServiceImpl',
      component: EntityWithServiceImpl,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-impl/new',
      name: 'EntityWithServiceImplCreate',
      component: EntityWithServiceImplUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-impl/:entityWithServiceImplId/edit',
      name: 'EntityWithServiceImplEdit',
      component: EntityWithServiceImplUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-impl/:entityWithServiceImplId/view',
      name: 'EntityWithServiceImplView',
      component: EntityWithServiceImplDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/entity-with-pagination',
      name: 'EntityWithPagination',
      component: EntityWithPagination,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-pagination/new',
      name: 'EntityWithPaginationCreate',
      component: EntityWithPaginationUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-pagination/:entityWithPaginationId/edit',
      name: 'EntityWithPaginationEdit',
      component: EntityWithPaginationUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-pagination/:entityWithPaginationId/view',
      name: 'EntityWithPaginationView',
      component: EntityWithPaginationDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/entity-with-service-class-and-pagination',
      name: 'EntityWithServiceClassAndPagination',
      component: EntityWithServiceClassAndPagination,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-class-and-pagination/new',
      name: 'EntityWithServiceClassAndPaginationCreate',
      component: EntityWithServiceClassAndPaginationUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-class-and-pagination/:entityWithServiceClassAndPaginationId/edit',
      name: 'EntityWithServiceClassAndPaginationEdit',
      component: EntityWithServiceClassAndPaginationUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-class-and-pagination/:entityWithServiceClassAndPaginationId/view',
      name: 'EntityWithServiceClassAndPaginationView',
      component: EntityWithServiceClassAndPaginationDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/entity-with-service-impl-and-pagination',
      name: 'EntityWithServiceImplAndPagination',
      component: EntityWithServiceImplAndPagination,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-impl-and-pagination/new',
      name: 'EntityWithServiceImplAndPaginationCreate',
      component: EntityWithServiceImplAndPaginationUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-impl-and-pagination/:entityWithServiceImplAndPaginationId/edit',
      name: 'EntityWithServiceImplAndPaginationEdit',
      component: EntityWithServiceImplAndPaginationUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-impl-and-pagination/:entityWithServiceImplAndPaginationId/view',
      name: 'EntityWithServiceImplAndPaginationView',
      component: EntityWithServiceImplAndPaginationDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/entity-with-service-class-and-dto',
      name: 'EntityWithServiceClassAndDTO',
      component: EntityWithServiceClassAndDTO,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-class-and-dto/new',
      name: 'EntityWithServiceClassAndDTOCreate',
      component: EntityWithServiceClassAndDTOUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-class-and-dto/:entityWithServiceClassAndDTOId/edit',
      name: 'EntityWithServiceClassAndDTOEdit',
      component: EntityWithServiceClassAndDTOUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-class-and-dto/:entityWithServiceClassAndDTOId/view',
      name: 'EntityWithServiceClassAndDTOView',
      component: EntityWithServiceClassAndDTODetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/entity-with-service-impl-and-dto',
      name: 'EntityWithServiceImplAndDTO',
      component: EntityWithServiceImplAndDTO,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-impl-and-dto/new',
      name: 'EntityWithServiceImplAndDTOCreate',
      component: EntityWithServiceImplAndDTOUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-impl-and-dto/:entityWithServiceImplAndDTOId/edit',
      name: 'EntityWithServiceImplAndDTOEdit',
      component: EntityWithServiceImplAndDTOUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-impl-and-dto/:entityWithServiceImplAndDTOId/view',
      name: 'EntityWithServiceImplAndDTOView',
      component: EntityWithServiceImplAndDTODetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/entity-with-pagination-and-dto',
      name: 'EntityWithPaginationAndDTO',
      component: EntityWithPaginationAndDTO,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-pagination-and-dto/new',
      name: 'EntityWithPaginationAndDTOCreate',
      component: EntityWithPaginationAndDTOUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-pagination-and-dto/:entityWithPaginationAndDTOId/edit',
      name: 'EntityWithPaginationAndDTOEdit',
      component: EntityWithPaginationAndDTOUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-pagination-and-dto/:entityWithPaginationAndDTOId/view',
      name: 'EntityWithPaginationAndDTOView',
      component: EntityWithPaginationAndDTODetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/entity-with-service-class-pagination-and-dto',
      name: 'EntityWithServiceClassPaginationAndDTO',
      component: EntityWithServiceClassPaginationAndDTO,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-class-pagination-and-dto/new',
      name: 'EntityWithServiceClassPaginationAndDTOCreate',
      component: EntityWithServiceClassPaginationAndDTOUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-class-pagination-and-dto/:entityWithServiceClassPaginationAndDTOId/edit',
      name: 'EntityWithServiceClassPaginationAndDTOEdit',
      component: EntityWithServiceClassPaginationAndDTOUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-class-pagination-and-dto/:entityWithServiceClassPaginationAndDTOId/view',
      name: 'EntityWithServiceClassPaginationAndDTOView',
      component: EntityWithServiceClassPaginationAndDTODetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/entity-with-service-impl-pagination-and-dto',
      name: 'EntityWithServiceImplPaginationAndDTO',
      component: EntityWithServiceImplPaginationAndDTO,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-impl-pagination-and-dto/new',
      name: 'EntityWithServiceImplPaginationAndDTOCreate',
      component: EntityWithServiceImplPaginationAndDTOUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-impl-pagination-and-dto/:entityWithServiceImplPaginationAndDTOId/edit',
      name: 'EntityWithServiceImplPaginationAndDTOEdit',
      component: EntityWithServiceImplPaginationAndDTOUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/entity-with-service-impl-pagination-and-dto/:entityWithServiceImplPaginationAndDTOId/view',
      name: 'EntityWithServiceImplPaginationAndDTOView',
      component: EntityWithServiceImplPaginationAndDTODetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/maps-id-user-profile-with-dto',
      name: 'MapsIdUserProfileWithDTO',
      component: MapsIdUserProfileWithDTO,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/maps-id-user-profile-with-dto/new',
      name: 'MapsIdUserProfileWithDTOCreate',
      component: MapsIdUserProfileWithDTOUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/maps-id-user-profile-with-dto/:mapsIdUserProfileWithDTOId/edit',
      name: 'MapsIdUserProfileWithDTOEdit',
      component: MapsIdUserProfileWithDTOUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/maps-id-user-profile-with-dto/:mapsIdUserProfileWithDTOId/view',
      name: 'MapsIdUserProfileWithDTOView',
      component: MapsIdUserProfileWithDTODetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
  ]
});
