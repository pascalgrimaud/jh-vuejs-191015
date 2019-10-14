<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="entityWithServiceImpl">
                <h2 class="jh-entity-heading"><span v-text="$t('jhipsterApp.entityWithServiceImpl.detail.title')">EntityWithServiceImpl</span> {{entityWithServiceImpl.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span v-text="$t('jhipsterApp.entityWithServiceImpl.clara')">Clara</span>
                    </dt>
                    <dd>
                        <span>{{entityWithServiceImpl.clara}}</span>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>
                <router-link v-if="entityWithServiceImpl.id" :to="{name: 'EntityWithServiceImplEdit', params: {entityWithServiceImplId: entityWithServiceImpl.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./entity-with-service-impl-details.component.ts">
</script>
