<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="jhipsterApp.entityWithServiceClassAndDTO.home.createOrEditLabel" v-text="$t('jhipsterApp.entityWithServiceClassAndDTO.home.createOrEditLabel')">Create or edit a EntityWithServiceClassAndDTO</h2>
                <div>
                    <div class="form-group" v-if="entityWithServiceClassAndDTO.id">
                        <label for="id" v-text="$t('global.field.id')">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="entityWithServiceClassAndDTO.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.entityWithServiceClassAndDTO.lucas')" for="entity-with-service-class-and-dto-lucas">Lucas</label>
                        <input type="text" class="form-control" name="lucas" id="entity-with-service-class-and-dto-lucas"
                            :class="{'valid': !$v.entityWithServiceClassAndDTO.lucas.$invalid, 'invalid': $v.entityWithServiceClassAndDTO.lucas.$invalid }" v-model="$v.entityWithServiceClassAndDTO.lucas.$model" />
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.cancel')">Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.entityWithServiceClassAndDTO.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./entity-with-service-class-and-dto-update.component.ts">
</script>
