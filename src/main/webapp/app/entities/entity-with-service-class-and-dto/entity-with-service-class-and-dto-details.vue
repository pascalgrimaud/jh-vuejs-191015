<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="entityWithServiceClassAndDTO">
                <h2 class="jh-entity-heading"><span v-text="$t('jhipsterApp.entityWithServiceClassAndDTO.detail.title')">EntityWithServiceClassAndDTO</span> {{entityWithServiceClassAndDTO.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span v-text="$t('jhipsterApp.entityWithServiceClassAndDTO.lucas')">Lucas</span>
                    </dt>
                    <dd>
                        <span>{{entityWithServiceClassAndDTO.lucas}}</span>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>
                <router-link v-if="entityWithServiceClassAndDTO.id" :to="{name: 'EntityWithServiceClassAndDTOEdit', params: {entityWithServiceClassAndDTOId: entityWithServiceClassAndDTO.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./entity-with-service-class-and-dto-details.component.ts">
</script>
