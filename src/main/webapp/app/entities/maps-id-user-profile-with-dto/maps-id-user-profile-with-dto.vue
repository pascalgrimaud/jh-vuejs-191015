<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('jhipsterApp.mapsIdUserProfileWithDTO.home.title')" id="maps-id-user-profile-with-dto-heading">Maps Id User Profile With DTOS</span>
            <router-link :to="{name: 'MapsIdUserProfileWithDTOCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-maps-id-user-profile-with-dto">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('jhipsterApp.mapsIdUserProfileWithDTO.home.createLabel')">
                    Create a new Maps Id User Profile With DTO
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
        <div class="alert alert-warning" v-if="!isFetching && mapsIdUserProfileWithDTOS && mapsIdUserProfileWithDTOS.length === 0">
            <span v-text="$t('jhipsterApp.mapsIdUserProfileWithDTO.home.notFound')">No mapsIdUserProfileWithDTOS found</span>
        </div>
        <div class="table-responsive" v-if="mapsIdUserProfileWithDTOS && mapsIdUserProfileWithDTOS.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span v-text="$t('global.field.id')">ID</span></th>
                    <th><span v-text="$t('jhipsterApp.mapsIdUserProfileWithDTO.dateOfBirth')">Date Of Birth</span></th>
                    <th><span v-text="$t('jhipsterApp.mapsIdUserProfileWithDTO.user')">User</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="mapsIdUserProfileWithDTO in mapsIdUserProfileWithDTOS"
                    :key="mapsIdUserProfileWithDTO.id">
                    <td>
                        <router-link :to="{name: 'MapsIdUserProfileWithDTOView', params: {mapsIdUserProfileWithDTOId: mapsIdUserProfileWithDTO.id}}">{{mapsIdUserProfileWithDTO.id}}</router-link>
                    </td>
                    <td>{{mapsIdUserProfileWithDTO.dateOfBirth | formatDate}}</td>
                    <td>
                        {{mapsIdUserProfileWithDTO.userLogin}}
                    </td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'MapsIdUserProfileWithDTOView', params: {mapsIdUserProfileWithDTOId: mapsIdUserProfileWithDTO.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'MapsIdUserProfileWithDTOEdit', params: {mapsIdUserProfileWithDTOId: mapsIdUserProfileWithDTO.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(mapsIdUserProfileWithDTO)"
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
            <span slot="modal-title"><span id="jhipsterApp.mapsIdUserProfileWithDTO.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-mapsIdUserProfileWithDTO-heading" v-bind:title="$t('jhipsterApp.mapsIdUserProfileWithDTO.delete.question')">Are you sure you want to delete this Maps Id User Profile With DTO?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-mapsIdUserProfileWithDTO" v-text="$t('entity.action.delete')" v-on:click="removeMapsIdUserProfileWithDTO()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./maps-id-user-profile-with-dto.component.ts">
</script>
