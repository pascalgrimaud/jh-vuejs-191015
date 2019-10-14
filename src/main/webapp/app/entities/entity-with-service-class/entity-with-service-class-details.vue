<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="entityWithServiceClass">
                <h2 class="jh-entity-heading"><span v-text="$t('jhipsterApp.entityWithServiceClass.detail.title')">EntityWithServiceClass</span> {{entityWithServiceClass.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span v-text="$t('jhipsterApp.entityWithServiceClass.zoe')">Zoe</span>
                    </dt>
                    <dd>
                        <span>{{entityWithServiceClass.zoe}}</span>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>
                <router-link v-if="entityWithServiceClass.id" :to="{name: 'EntityWithServiceClassEdit', params: {entityWithServiceClassId: entityWithServiceClass.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./entity-with-service-class-details.component.ts">
</script>
