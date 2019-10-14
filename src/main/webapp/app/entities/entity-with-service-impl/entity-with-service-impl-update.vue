<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="jhipsterApp.entityWithServiceImpl.home.createOrEditLabel" v-text="$t('jhipsterApp.entityWithServiceImpl.home.createOrEditLabel')">Create or edit a EntityWithServiceImpl</h2>
                <div>
                    <div class="form-group" v-if="entityWithServiceImpl.id">
                        <label for="id" v-text="$t('global.field.id')">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="entityWithServiceImpl.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.entityWithServiceImpl.clara')" for="entity-with-service-impl-clara">Clara</label>
                        <input type="text" class="form-control" name="clara" id="entity-with-service-impl-clara"
                            :class="{'valid': !$v.entityWithServiceImpl.clara.$invalid, 'invalid': $v.entityWithServiceImpl.clara.$invalid }" v-model="$v.entityWithServiceImpl.clara.$model" />
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.cancel')">Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.entityWithServiceImpl.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./entity-with-service-impl-update.component.ts">
</script>
