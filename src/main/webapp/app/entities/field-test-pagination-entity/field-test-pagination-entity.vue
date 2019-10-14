<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('jhipsterApp.fieldTestPaginationEntity.home.title')" id="field-test-pagination-entity-heading">Field Test Pagination Entities</span>
            <router-link :to="{name: 'FieldTestPaginationEntityCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-field-test-pagination-entity">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('jhipsterApp.fieldTestPaginationEntity.home.createLabel')">
                    Create a new Field Test Pagination Entity
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
        <div class="alert alert-warning" v-if="!isFetching && fieldTestPaginationEntities && fieldTestPaginationEntities.length === 0">
            <span v-text="$t('jhipsterApp.fieldTestPaginationEntity.home.notFound')">No fieldTestPaginationEntities found</span>
        </div>
        <div class="table-responsive" v-if="fieldTestPaginationEntities && fieldTestPaginationEntities.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th v-on:click="changeOrder('id')"><span v-text="$t('global.field.id')">ID</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('stringAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.stringAlice')">String Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('stringRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.stringRequiredAlice')">String Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('stringMinlengthAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.stringMinlengthAlice')">String Minlength Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('stringMaxlengthAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.stringMaxlengthAlice')">String Maxlength Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('stringPatternAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.stringPatternAlice')">String Pattern Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('integerAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.integerAlice')">Integer Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('integerRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.integerRequiredAlice')">Integer Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('integerMinAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.integerMinAlice')">Integer Min Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('integerMaxAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.integerMaxAlice')">Integer Max Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('longAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.longAlice')">Long Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('longRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.longRequiredAlice')">Long Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('longMinAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.longMinAlice')">Long Min Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('longMaxAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.longMaxAlice')">Long Max Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('floatAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.floatAlice')">Float Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('floatRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.floatRequiredAlice')">Float Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('floatMinAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.floatMinAlice')">Float Min Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('floatMaxAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.floatMaxAlice')">Float Max Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('doubleRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.doubleRequiredAlice')">Double Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('doubleMinAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.doubleMinAlice')">Double Min Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('doubleMaxAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.doubleMaxAlice')">Double Max Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('bigDecimalRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.bigDecimalRequiredAlice')">Big Decimal Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('bigDecimalMinAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.bigDecimalMinAlice')">Big Decimal Min Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('bigDecimalMaxAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.bigDecimalMaxAlice')">Big Decimal Max Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('localDateAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.localDateAlice')">Local Date Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('localDateRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.localDateRequiredAlice')">Local Date Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('instantAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.instantAlice')">Instant Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('instanteRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.instanteRequiredAlice')">Instante Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('zonedDateTimeAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.zonedDateTimeAlice')">Zoned Date Time Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('zonedDateTimeRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.zonedDateTimeRequiredAlice')">Zoned Date Time Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('durationAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.durationAlice')">Duration Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('durationRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.durationRequiredAlice')">Duration Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('booleanAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.booleanAlice')">Boolean Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('booleanRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.booleanRequiredAlice')">Boolean Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('enumAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.enumAlice')">Enum Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('enumRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.enumRequiredAlice')">Enum Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('uuidAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.uuidAlice')">Uuid Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('uuidRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.uuidRequiredAlice')">Uuid Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteImageAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.byteImageAlice')">Byte Image Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteImageRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.byteImageRequiredAlice')">Byte Image Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteImageMinbytesAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.byteImageMinbytesAlice')">Byte Image Minbytes Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteImageMaxbytesAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.byteImageMaxbytesAlice')">Byte Image Maxbytes Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteAnyAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.byteAnyAlice')">Byte Any Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteAnyRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.byteAnyRequiredAlice')">Byte Any Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteAnyMinbytesAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.byteAnyMinbytesAlice')">Byte Any Minbytes Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteAnyMaxbytesAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.byteAnyMaxbytesAlice')">Byte Any Maxbytes Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteTextAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.byteTextAlice')">Byte Text Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteTextRequiredAlice')"><span v-text="$t('jhipsterApp.fieldTestPaginationEntity.byteTextRequiredAlice')">Byte Text Required Alice</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="fieldTestPaginationEntity in fieldTestPaginationEntities"
                    :key="fieldTestPaginationEntity.id">
                    <td>
                        <router-link :to="{name: 'FieldTestPaginationEntityView', params: {fieldTestPaginationEntityId: fieldTestPaginationEntity.id}}">{{fieldTestPaginationEntity.id}}</router-link>
                    </td>
                    <td>{{fieldTestPaginationEntity.stringAlice}}</td>
                    <td>{{fieldTestPaginationEntity.stringRequiredAlice}}</td>
                    <td>{{fieldTestPaginationEntity.stringMinlengthAlice}}</td>
                    <td>{{fieldTestPaginationEntity.stringMaxlengthAlice}}</td>
                    <td>{{fieldTestPaginationEntity.stringPatternAlice}}</td>
                    <td>{{fieldTestPaginationEntity.integerAlice}}</td>
                    <td>{{fieldTestPaginationEntity.integerRequiredAlice}}</td>
                    <td>{{fieldTestPaginationEntity.integerMinAlice}}</td>
                    <td>{{fieldTestPaginationEntity.integerMaxAlice}}</td>
                    <td>{{fieldTestPaginationEntity.longAlice}}</td>
                    <td>{{fieldTestPaginationEntity.longRequiredAlice}}</td>
                    <td>{{fieldTestPaginationEntity.longMinAlice}}</td>
                    <td>{{fieldTestPaginationEntity.longMaxAlice}}</td>
                    <td>{{fieldTestPaginationEntity.floatAlice}}</td>
                    <td>{{fieldTestPaginationEntity.floatRequiredAlice}}</td>
                    <td>{{fieldTestPaginationEntity.floatMinAlice}}</td>
                    <td>{{fieldTestPaginationEntity.floatMaxAlice}}</td>
                    <td>{{fieldTestPaginationEntity.doubleRequiredAlice}}</td>
                    <td>{{fieldTestPaginationEntity.doubleMinAlice}}</td>
                    <td>{{fieldTestPaginationEntity.doubleMaxAlice}}</td>
                    <td>{{fieldTestPaginationEntity.bigDecimalRequiredAlice}}</td>
                    <td>{{fieldTestPaginationEntity.bigDecimalMinAlice}}</td>
                    <td>{{fieldTestPaginationEntity.bigDecimalMaxAlice}}</td>
                    <td>{{fieldTestPaginationEntity.localDateAlice}}</td>
                    <td>{{fieldTestPaginationEntity.localDateRequiredAlice}}</td>
                    <td>{{fieldTestPaginationEntity.instantAlice | formatDate}}</td>
                    <td>{{fieldTestPaginationEntity.instanteRequiredAlice | formatDate}}</td>
                    <td>{{fieldTestPaginationEntity.zonedDateTimeAlice | formatDate}}</td>
                    <td>{{fieldTestPaginationEntity.zonedDateTimeRequiredAlice | formatDate}}</td>
                    <td>{{fieldTestPaginationEntity.durationAlice}}</td>
                    <td>{{fieldTestPaginationEntity.durationRequiredAlice}}</td>
                    <td>{{fieldTestPaginationEntity.booleanAlice}}</td>
                    <td>{{fieldTestPaginationEntity.booleanRequiredAlice}}</td>
                    <td v-text="$t('jhipsterApp.EnumFieldClass.' + fieldTestPaginationEntity.enumAlice)">{{fieldTestPaginationEntity.enumAlice}}</td>
                    <td v-text="$t('jhipsterApp.EnumRequiredFieldClass.' + fieldTestPaginationEntity.enumRequiredAlice)">{{fieldTestPaginationEntity.enumRequiredAlice}}</td>
                    <td>{{fieldTestPaginationEntity.uuidAlice}}</td>
                    <td>{{fieldTestPaginationEntity.uuidRequiredAlice}}</td>
                    <td>
                        <a v-if="fieldTestPaginationEntity.byteImageAlice" v-on:click="openFile(fieldTestPaginationEntity.byteImageAliceContentType, fieldTestPaginationEntity.byteImageAlice)">
                            <img v-bind:src="'data:' + fieldTestPaginationEntity.byteImageAliceContentType + ';base64,' + fieldTestPaginationEntity.byteImageAlice" style="max-height: 30px;" alt="fieldTestPaginationEntity image"/>
                        </a>
                        <span v-if="fieldTestPaginationEntity.byteImageAlice">{{fieldTestPaginationEntity.byteImageAliceContentType}}, {{byteSize(fieldTestPaginationEntity.byteImageAlice)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestPaginationEntity.byteImageRequiredAlice" v-on:click="openFile(fieldTestPaginationEntity.byteImageRequiredAliceContentType, fieldTestPaginationEntity.byteImageRequiredAlice)">
                            <img v-bind:src="'data:' + fieldTestPaginationEntity.byteImageRequiredAliceContentType + ';base64,' + fieldTestPaginationEntity.byteImageRequiredAlice" style="max-height: 30px;" alt="fieldTestPaginationEntity image"/>
                        </a>
                        <span v-if="fieldTestPaginationEntity.byteImageRequiredAlice">{{fieldTestPaginationEntity.byteImageRequiredAliceContentType}}, {{byteSize(fieldTestPaginationEntity.byteImageRequiredAlice)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestPaginationEntity.byteImageMinbytesAlice" v-on:click="openFile(fieldTestPaginationEntity.byteImageMinbytesAliceContentType, fieldTestPaginationEntity.byteImageMinbytesAlice)">
                            <img v-bind:src="'data:' + fieldTestPaginationEntity.byteImageMinbytesAliceContentType + ';base64,' + fieldTestPaginationEntity.byteImageMinbytesAlice" style="max-height: 30px;" alt="fieldTestPaginationEntity image"/>
                        </a>
                        <span v-if="fieldTestPaginationEntity.byteImageMinbytesAlice">{{fieldTestPaginationEntity.byteImageMinbytesAliceContentType}}, {{byteSize(fieldTestPaginationEntity.byteImageMinbytesAlice)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestPaginationEntity.byteImageMaxbytesAlice" v-on:click="openFile(fieldTestPaginationEntity.byteImageMaxbytesAliceContentType, fieldTestPaginationEntity.byteImageMaxbytesAlice)">
                            <img v-bind:src="'data:' + fieldTestPaginationEntity.byteImageMaxbytesAliceContentType + ';base64,' + fieldTestPaginationEntity.byteImageMaxbytesAlice" style="max-height: 30px;" alt="fieldTestPaginationEntity image"/>
                        </a>
                        <span v-if="fieldTestPaginationEntity.byteImageMaxbytesAlice">{{fieldTestPaginationEntity.byteImageMaxbytesAliceContentType}}, {{byteSize(fieldTestPaginationEntity.byteImageMaxbytesAlice)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestPaginationEntity.byteAnyAlice" v-on:click="openFile(fieldTestPaginationEntity.byteAnyAliceContentType, fieldTestPaginationEntity.byteAnyAlice)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestPaginationEntity.byteAnyAlice">{{fieldTestPaginationEntity.byteAnyAliceContentType}}, {{byteSize(fieldTestPaginationEntity.byteAnyAlice)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestPaginationEntity.byteAnyRequiredAlice" v-on:click="openFile(fieldTestPaginationEntity.byteAnyRequiredAliceContentType, fieldTestPaginationEntity.byteAnyRequiredAlice)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestPaginationEntity.byteAnyRequiredAlice">{{fieldTestPaginationEntity.byteAnyRequiredAliceContentType}}, {{byteSize(fieldTestPaginationEntity.byteAnyRequiredAlice)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestPaginationEntity.byteAnyMinbytesAlice" v-on:click="openFile(fieldTestPaginationEntity.byteAnyMinbytesAliceContentType, fieldTestPaginationEntity.byteAnyMinbytesAlice)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestPaginationEntity.byteAnyMinbytesAlice">{{fieldTestPaginationEntity.byteAnyMinbytesAliceContentType}}, {{byteSize(fieldTestPaginationEntity.byteAnyMinbytesAlice)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestPaginationEntity.byteAnyMaxbytesAlice" v-on:click="openFile(fieldTestPaginationEntity.byteAnyMaxbytesAliceContentType, fieldTestPaginationEntity.byteAnyMaxbytesAlice)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestPaginationEntity.byteAnyMaxbytesAlice">{{fieldTestPaginationEntity.byteAnyMaxbytesAliceContentType}}, {{byteSize(fieldTestPaginationEntity.byteAnyMaxbytesAlice)}}</span>
                    </td>
                    <td>{{fieldTestPaginationEntity.byteTextAlice}}</td>
                    <td>{{fieldTestPaginationEntity.byteTextRequiredAlice}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'FieldTestPaginationEntityView', params: {fieldTestPaginationEntityId: fieldTestPaginationEntity.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'FieldTestPaginationEntityEdit', params: {fieldTestPaginationEntityId: fieldTestPaginationEntity.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(fieldTestPaginationEntity)"
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
            <span slot="modal-title"><span id="jhipsterApp.fieldTestPaginationEntity.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-fieldTestPaginationEntity-heading" v-bind:title="$t('jhipsterApp.fieldTestPaginationEntity.delete.question')">Are you sure you want to delete this Field Test Pagination Entity?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-fieldTestPaginationEntity" v-text="$t('entity.action.delete')" v-on:click="removeFieldTestPaginationEntity()">Delete</button>
            </div>
        </b-modal>
        <div v-show="fieldTestPaginationEntities && fieldTestPaginationEntities.length > 0">
            <div class="row justify-content-center">
                <jhi-item-count :page="page" :total="queryCount" :itemsPerPage="itemsPerPage"></jhi-item-count>
            </div>
            <div class="row justify-content-center">
                <b-pagination size="md" :total-rows="totalItems" v-model="page" :per-page="itemsPerPage" :change="loadPage(page)"></b-pagination>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./field-test-pagination-entity.component.ts">
</script>
