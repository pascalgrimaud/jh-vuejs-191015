<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="jhipsterApp.entityWithPagination.home.createOrEditLabel" v-text="$t('jhipsterApp.entityWithPagination.home.createOrEditLabel')">Create or edit a EntityWithPagination</h2>
                <div>
                    <div class="form-group" v-if="entityWithPagination.id">
                        <label for="id" v-text="$t('global.field.id')">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="entityWithPagination.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.entityWithPagination.nathan')" for="entity-with-pagination-nathan">Nathan</label>
                        <input type="text" class="form-control" name="nathan" id="entity-with-pagination-nathan"
                            :class="{'valid': !$v.entityWithPagination.nathan.$invalid, 'invalid': $v.entityWithPagination.nathan.$invalid }" v-model="$v.entityWithPagination.nathan.$model" />
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.cancel')">Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.entityWithPagination.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./entity-with-pagination-update.component.ts">
</script>
