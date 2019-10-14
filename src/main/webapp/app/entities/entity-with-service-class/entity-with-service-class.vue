<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('jhipsterApp.entityWithServiceClass.home.title')" id="entity-with-service-class-heading">Entity With Service Classes</span>
            <router-link :to="{name: 'EntityWithServiceClassCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-entity-with-service-class">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('jhipsterApp.entityWithServiceClass.home.createLabel')">
                    Create a new Entity With Service Class
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
        <div class="alert alert-warning" v-if="!isFetching && entityWithServiceClasses && entityWithServiceClasses.length === 0">
            <span v-text="$t('jhipsterApp.entityWithServiceClass.home.notFound')">No entityWithServiceClasses found</span>
        </div>
        <div class="table-responsive" v-if="entityWithServiceClasses && entityWithServiceClasses.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span v-text="$t('global.field.id')">ID</span></th>
                    <th><span v-text="$t('jhipsterApp.entityWithServiceClass.zoe')">Zoe</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="entityWithServiceClass in entityWithServiceClasses"
                    :key="entityWithServiceClass.id">
                    <td>
                        <router-link :to="{name: 'EntityWithServiceClassView', params: {entityWithServiceClassId: entityWithServiceClass.id}}">{{entityWithServiceClass.id}}</router-link>
                    </td>
                    <td>{{entityWithServiceClass.zoe}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'EntityWithServiceClassView', params: {entityWithServiceClassId: entityWithServiceClass.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'EntityWithServiceClassEdit', params: {entityWithServiceClassId: entityWithServiceClass.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(entityWithServiceClass)"
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
            <span slot="modal-title"><span id="jhipsterApp.entityWithServiceClass.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-entityWithServiceClass-heading" v-bind:title="$t('jhipsterApp.entityWithServiceClass.delete.question')">Are you sure you want to delete this Entity With Service Class?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-entityWithServiceClass" v-text="$t('entity.action.delete')" v-on:click="removeEntityWithServiceClass()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./entity-with-service-class.component.ts">
</script>
