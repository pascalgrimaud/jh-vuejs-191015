<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('jhipsterApp.entityWithServiceClassAndDTO.home.title')" id="entity-with-service-class-and-dto-heading">Entity With Service Class And DTOS</span>
            <router-link :to="{name: 'EntityWithServiceClassAndDTOCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-entity-with-service-class-and-dto">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('jhipsterApp.entityWithServiceClassAndDTO.home.createLabel')">
                    Create a new Entity With Service Class And DTO
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
        <div class="alert alert-warning" v-if="!isFetching && entityWithServiceClassAndDTOS && entityWithServiceClassAndDTOS.length === 0">
            <span v-text="$t('jhipsterApp.entityWithServiceClassAndDTO.home.notFound')">No entityWithServiceClassAndDTOS found</span>
        </div>
        <div class="table-responsive" v-if="entityWithServiceClassAndDTOS && entityWithServiceClassAndDTOS.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span v-text="$t('global.field.id')">ID</span></th>
                    <th><span v-text="$t('jhipsterApp.entityWithServiceClassAndDTO.lucas')">Lucas</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="entityWithServiceClassAndDTO in entityWithServiceClassAndDTOS"
                    :key="entityWithServiceClassAndDTO.id">
                    <td>
                        <router-link :to="{name: 'EntityWithServiceClassAndDTOView', params: {entityWithServiceClassAndDTOId: entityWithServiceClassAndDTO.id}}">{{entityWithServiceClassAndDTO.id}}</router-link>
                    </td>
                    <td>{{entityWithServiceClassAndDTO.lucas}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'EntityWithServiceClassAndDTOView', params: {entityWithServiceClassAndDTOId: entityWithServiceClassAndDTO.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'EntityWithServiceClassAndDTOEdit', params: {entityWithServiceClassAndDTOId: entityWithServiceClassAndDTO.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(entityWithServiceClassAndDTO)"
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
            <span slot="modal-title"><span id="jhipsterApp.entityWithServiceClassAndDTO.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-entityWithServiceClassAndDTO-heading" v-bind:title="$t('jhipsterApp.entityWithServiceClassAndDTO.delete.question')">Are you sure you want to delete this Entity With Service Class And DTO?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-entityWithServiceClassAndDTO" v-text="$t('entity.action.delete')" v-on:click="removeEntityWithServiceClassAndDTO()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./entity-with-service-class-and-dto.component.ts">
</script>
