<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('jhipsterApp.entityWithServiceImplAndPagination.home.title')" id="entity-with-service-impl-and-pagination-heading">Entity With Service Impl And Paginations</span>
            <router-link :to="{name: 'EntityWithServiceImplAndPaginationCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-entity-with-service-impl-and-pagination">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('jhipsterApp.entityWithServiceImplAndPagination.home.createLabel')">
                    Create a new Entity With Service Impl And Pagination
                </span>
            </router-link>
        </h2>
        <b-alert :show="dismissCountDown"
            dismissible
            :variant="alertType"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
            {{alertMessage}}
        </b-alert>
        <br/>
        <div class="alert alert-warning" v-if="!isFetching && entityWithServiceImplAndPaginations && entityWithServiceImplAndPaginations.length === 0">
            <span v-text="$t('jhipsterApp.entityWithServiceImplAndPagination.home.notFound')">No entityWithServiceImplAndPaginations found</span>
        </div>
        <div class="table-responsive" v-if="entityWithServiceImplAndPaginations && entityWithServiceImplAndPaginations.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th v-on:click="changeOrder('id')"><span v-text="$t('global.field.id')">ID</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('hugo')"><span v-text="$t('jhipsterApp.entityWithServiceImplAndPagination.hugo')">Hugo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="entityWithServiceImplAndPagination in entityWithServiceImplAndPaginations"
                    :key="entityWithServiceImplAndPagination.id">
                    <td>
                        <router-link :to="{name: 'EntityWithServiceImplAndPaginationView', params: {entityWithServiceImplAndPaginationId: entityWithServiceImplAndPagination.id}}">{{entityWithServiceImplAndPagination.id}}</router-link>
                    </td>
                    <td>{{entityWithServiceImplAndPagination.hugo}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'EntityWithServiceImplAndPaginationView', params: {entityWithServiceImplAndPaginationId: entityWithServiceImplAndPagination.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'EntityWithServiceImplAndPaginationEdit', params: {entityWithServiceImplAndPaginationId: entityWithServiceImplAndPagination.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(entityWithServiceImplAndPagination)"
                                   variant="danger"
                                   class="btn btn-sm"
                                   v-b-modal.removeEntity>
                                <font-awesome-icon icon="times"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.delete')">Delete</span>
                            </b-button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <b-modal ref="removeEntity" id="removeEntity" >
            <span slot="modal-title"><span id="jhipsterApp.entityWithServiceImplAndPagination.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-entityWithServiceImplAndPagination-heading" v-bind:title="$t('jhipsterApp.entityWithServiceImplAndPagination.delete.question')">Are you sure you want to delete this Entity With Service Impl And Pagination?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-entityWithServiceImplAndPagination" v-text="$t('entity.action.delete')" v-on:click="removeEntityWithServiceImplAndPagination()">Delete</button>
            </div>
        </b-modal>
        <div v-show="entityWithServiceImplAndPaginations && entityWithServiceImplAndPaginations.length > 0">
            <div class="row justify-content-center">
                <jhi-item-count :page="page" :total="queryCount" :itemsPerPage="itemsPerPage"></jhi-item-count>
            </div>
            <div class="row justify-content-center">
                <b-pagination size="md" :total-rows="totalItems" v-model="page" :per-page="itemsPerPage" :change="loadPage(page)"></b-pagination>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./entity-with-service-impl-and-pagination.component.ts">
</script>
