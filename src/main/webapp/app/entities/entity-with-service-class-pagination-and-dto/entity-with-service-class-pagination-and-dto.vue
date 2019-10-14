<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('jhipsterApp.entityWithServiceClassPaginationAndDTO.home.title')" id="entity-with-service-class-pagination-and-dto-heading">Entity With Service Class Pagination And DTOS</span>
            <router-link :to="{name: 'EntityWithServiceClassPaginationAndDTOCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-entity-with-service-class-pagination-and-dto">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('jhipsterApp.entityWithServiceClassPaginationAndDTO.home.createLabel')">
                    Create a new Entity With Service Class Pagination And DTO
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
        <div class="alert alert-warning" v-if="!isFetching && entityWithServiceClassPaginationAndDTOS && entityWithServiceClassPaginationAndDTOS.length === 0">
            <span v-text="$t('jhipsterApp.entityWithServiceClassPaginationAndDTO.home.notFound')">No entityWithServiceClassPaginationAndDTOS found</span>
        </div>
        <div class="table-responsive" v-if="entityWithServiceClassPaginationAndDTOS && entityWithServiceClassPaginationAndDTOS.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th v-on:click="changeOrder('id')"><span v-text="$t('global.field.id')">ID</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('lena')"><span v-text="$t('jhipsterApp.entityWithServiceClassPaginationAndDTO.lena')">Lena</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="entityWithServiceClassPaginationAndDTO in entityWithServiceClassPaginationAndDTOS"
                    :key="entityWithServiceClassPaginationAndDTO.id">
                    <td>
                        <router-link :to="{name: 'EntityWithServiceClassPaginationAndDTOView', params: {entityWithServiceClassPaginationAndDTOId: entityWithServiceClassPaginationAndDTO.id}}">{{entityWithServiceClassPaginationAndDTO.id}}</router-link>
                    </td>
                    <td>{{entityWithServiceClassPaginationAndDTO.lena}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'EntityWithServiceClassPaginationAndDTOView', params: {entityWithServiceClassPaginationAndDTOId: entityWithServiceClassPaginationAndDTO.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'EntityWithServiceClassPaginationAndDTOEdit', params: {entityWithServiceClassPaginationAndDTOId: entityWithServiceClassPaginationAndDTO.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(entityWithServiceClassPaginationAndDTO)"
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
            <span slot="modal-title"><span id="jhipsterApp.entityWithServiceClassPaginationAndDTO.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-entityWithServiceClassPaginationAndDTO-heading" v-bind:title="$t('jhipsterApp.entityWithServiceClassPaginationAndDTO.delete.question')">Are you sure you want to delete this Entity With Service Class Pagination And DTO?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-entityWithServiceClassPaginationAndDTO" v-text="$t('entity.action.delete')" v-on:click="removeEntityWithServiceClassPaginationAndDTO()">Delete</button>
            </div>
        </b-modal>
        <div v-show="entityWithServiceClassPaginationAndDTOS && entityWithServiceClassPaginationAndDTOS.length > 0">
            <div class="row justify-content-center">
                <jhi-item-count :page="page" :total="queryCount" :itemsPerPage="itemsPerPage"></jhi-item-count>
            </div>
            <div class="row justify-content-center">
                <b-pagination size="md" :total-rows="totalItems" v-model="page" :per-page="itemsPerPage" :change="loadPage(page)"></b-pagination>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./entity-with-service-class-pagination-and-dto.component.ts">
</script>
