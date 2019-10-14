<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('jhipsterApp.entityWithServiceImplAndDTO.home.title')" id="entity-with-service-impl-and-dto-heading">Entity With Service Impl And DTOS</span>
            <router-link :to="{name: 'EntityWithServiceImplAndDTOCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-entity-with-service-impl-and-dto">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('jhipsterApp.entityWithServiceImplAndDTO.home.createLabel')">
                    Create a new Entity With Service Impl And DTO
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
        <div class="alert alert-warning" v-if="!isFetching && entityWithServiceImplAndDTOS && entityWithServiceImplAndDTOS.length === 0">
            <span v-text="$t('jhipsterApp.entityWithServiceImplAndDTO.home.notFound')">No entityWithServiceImplAndDTOS found</span>
        </div>
        <div class="table-responsive" v-if="entityWithServiceImplAndDTOS && entityWithServiceImplAndDTOS.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span v-text="$t('global.field.id')">ID</span></th>
                    <th><span v-text="$t('jhipsterApp.entityWithServiceImplAndDTO.louis')">Louis</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="entityWithServiceImplAndDTO in entityWithServiceImplAndDTOS"
                    :key="entityWithServiceImplAndDTO.id">
                    <td>
                        <router-link :to="{name: 'EntityWithServiceImplAndDTOView', params: {entityWithServiceImplAndDTOId: entityWithServiceImplAndDTO.id}}">{{entityWithServiceImplAndDTO.id}}</router-link>
                    </td>
                    <td>{{entityWithServiceImplAndDTO.louis}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'EntityWithServiceImplAndDTOView', params: {entityWithServiceImplAndDTOId: entityWithServiceImplAndDTO.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'EntityWithServiceImplAndDTOEdit', params: {entityWithServiceImplAndDTOId: entityWithServiceImplAndDTO.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(entityWithServiceImplAndDTO)"
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
            <span slot="modal-title"><span id="jhipsterApp.entityWithServiceImplAndDTO.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-entityWithServiceImplAndDTO-heading" v-bind:title="$t('jhipsterApp.entityWithServiceImplAndDTO.delete.question')">Are you sure you want to delete this Entity With Service Impl And DTO?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-entityWithServiceImplAndDTO" v-text="$t('entity.action.delete')" v-on:click="removeEntityWithServiceImplAndDTO()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./entity-with-service-impl-and-dto.component.ts">
</script>
