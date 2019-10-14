<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="entityWithPagination">
                <h2 class="jh-entity-heading"><span v-text="$t('jhipsterApp.entityWithPagination.detail.title')">EntityWithPagination</span> {{entityWithPagination.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span v-text="$t('jhipsterApp.entityWithPagination.nathan')">Nathan</span>
                    </dt>
                    <dd>
                        <span>{{entityWithPagination.nathan}}</span>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>
                <router-link v-if="entityWithPagination.id" :to="{name: 'EntityWithPaginationEdit', params: {entityWithPaginationId: entityWithPagination.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./entity-with-pagination-details.component.ts">
</script>
