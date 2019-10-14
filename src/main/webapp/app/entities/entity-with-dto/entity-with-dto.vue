<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('jhipsterApp.entityWithDTO.home.title')" id="entity-with-dto-heading">Entity With DTOS</span>
            <router-link :to="{name: 'EntityWithDTOCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-entity-with-dto">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('jhipsterApp.entityWithDTO.home.createLabel')">
                    Create a new Entity With DTO
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
        <div class="alert alert-warning" v-if="!isFetching && entityWithDTOS && entityWithDTOS.length === 0">
            <span v-text="$t('jhipsterApp.entityWithDTO.home.notFound')">No entityWithDTOS found</span>
        </div>
        <div class="table-responsive" v-if="entityWithDTOS && entityWithDTOS.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span v-text="$t('global.field.id')">ID</span></th>
                    <th><span v-text="$t('jhipsterApp.entityWithDTO.emma')">Emma</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="entityWithDTO in entityWithDTOS"
                    :key="entityWithDTO.id">
                    <td>
                        <router-link :to="{name: 'EntityWithDTOView', params: {entityWithDTOId: entityWithDTO.id}}">{{entityWithDTO.id}}</router-link>
                    </td>
                    <td>{{entityWithDTO.emma}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'EntityWithDTOView', params: {entityWithDTOId: entityWithDTO.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'EntityWithDTOEdit', params: {entityWithDTOId: entityWithDTO.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(entityWithDTO)"
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
            <span slot="modal-title"><span id="jhipsterApp.entityWithDTO.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-entityWithDTO-heading" v-bind:title="$t('jhipsterApp.entityWithDTO.delete.question')">Are you sure you want to delete this Entity With DTO?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-entityWithDTO" v-text="$t('entity.action.delete')" v-on:click="removeEntityWithDTO()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./entity-with-dto.component.ts">
</script>
