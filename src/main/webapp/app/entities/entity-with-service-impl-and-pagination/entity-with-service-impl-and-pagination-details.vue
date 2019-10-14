<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="entityWithServiceImplAndPagination">
                <h2 class="jh-entity-heading"><span v-text="$t('jhipsterApp.entityWithServiceImplAndPagination.detail.title')">EntityWithServiceImplAndPagination</span> {{entityWithServiceImplAndPagination.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span v-text="$t('jhipsterApp.entityWithServiceImplAndPagination.hugo')">Hugo</span>
                    </dt>
                    <dd>
                        <span>{{entityWithServiceImplAndPagination.hugo}}</span>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>
                <router-link v-if="entityWithServiceImplAndPagination.id" :to="{name: 'EntityWithServiceImplAndPaginationEdit', params: {entityWithServiceImplAndPaginationId: entityWithServiceImplAndPagination.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./entity-with-service-impl-and-pagination-details.component.ts">
</script>
