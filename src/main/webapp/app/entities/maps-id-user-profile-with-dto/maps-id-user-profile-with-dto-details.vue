<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="mapsIdUserProfileWithDTO">
                <h2 class="jh-entity-heading"><span v-text="$t('jhipsterApp.mapsIdUserProfileWithDTO.detail.title')">MapsIdUserProfileWithDTO</span> {{mapsIdUserProfileWithDTO.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span v-text="$t('jhipsterApp.mapsIdUserProfileWithDTO.dateOfBirth')">Date Of Birth</span>
                    </dt>
                    <dd>
                        <span>{{mapsIdUserProfileWithDTO.dateOfBirth | formatDate}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.mapsIdUserProfileWithDTO.user')">User</span>
                    </dt>
                    <dd>
                        {{mapsIdUserProfileWithDTO.userLogin}}
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>
                <router-link v-if="mapsIdUserProfileWithDTO.id" :to="{name: 'MapsIdUserProfileWithDTOEdit', params: {mapsIdUserProfileWithDTOId: mapsIdUserProfileWithDTO.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./maps-id-user-profile-with-dto-details.component.ts">
</script>
