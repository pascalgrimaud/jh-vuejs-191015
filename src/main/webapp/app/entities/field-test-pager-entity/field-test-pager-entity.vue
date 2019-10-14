<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('jhipsterApp.fieldTestPagerEntity.home.title')" id="field-test-pager-entity-heading">Field Test Pager Entities</span>
            <router-link :to="{name: 'FieldTestPagerEntityCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-field-test-pager-entity">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('jhipsterApp.fieldTestPagerEntity.home.createLabel')">
                    Create a new Field Test Pager Entity
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
        <div class="alert alert-warning" v-if="!isFetching && fieldTestPagerEntities && fieldTestPagerEntities.length === 0">
            <span v-text="$t('jhipsterApp.fieldTestPagerEntity.home.notFound')">No fieldTestPagerEntities found</span>
        </div>
        <div class="table-responsive" v-if="fieldTestPagerEntities && fieldTestPagerEntities.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th v-on:click="changeOrder('id')"><span v-text="$t('global.field.id')">ID</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('stringJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.stringJade')">String Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('stringRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.stringRequiredJade')">String Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('stringMinlengthJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.stringMinlengthJade')">String Minlength Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('stringMaxlengthJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.stringMaxlengthJade')">String Maxlength Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('stringPatternJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.stringPatternJade')">String Pattern Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('integerJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.integerJade')">Integer Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('integerRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.integerRequiredJade')">Integer Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('integerMinJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.integerMinJade')">Integer Min Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('integerMaxJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.integerMaxJade')">Integer Max Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('longJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.longJade')">Long Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('longRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.longRequiredJade')">Long Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('longMinJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.longMinJade')">Long Min Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('longMaxJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.longMaxJade')">Long Max Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('floatJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.floatJade')">Float Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('floatRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.floatRequiredJade')">Float Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('floatMinJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.floatMinJade')">Float Min Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('floatMaxJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.floatMaxJade')">Float Max Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('doubleRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.doubleRequiredJade')">Double Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('doubleMinJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.doubleMinJade')">Double Min Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('doubleMaxJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.doubleMaxJade')">Double Max Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('bigDecimalRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.bigDecimalRequiredJade')">Big Decimal Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('bigDecimalMinJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.bigDecimalMinJade')">Big Decimal Min Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('bigDecimalMaxJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.bigDecimalMaxJade')">Big Decimal Max Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('localDateJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.localDateJade')">Local Date Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('localDateRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.localDateRequiredJade')">Local Date Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('instantJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.instantJade')">Instant Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('instanteRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.instanteRequiredJade')">Instante Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('zonedDateTimeJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.zonedDateTimeJade')">Zoned Date Time Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('zonedDateTimeRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.zonedDateTimeRequiredJade')">Zoned Date Time Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('durationJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.durationJade')">Duration Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('durationRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.durationRequiredJade')">Duration Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('booleanJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.booleanJade')">Boolean Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('booleanRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.booleanRequiredJade')">Boolean Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('enumJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.enumJade')">Enum Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('enumRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.enumRequiredJade')">Enum Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('uuidJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.uuidJade')">Uuid Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('uuidRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.uuidRequiredJade')">Uuid Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteImageJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteImageJade')">Byte Image Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteImageRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteImageRequiredJade')">Byte Image Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteImageMinbytesJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteImageMinbytesJade')">Byte Image Minbytes Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteImageMaxbytesJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteImageMaxbytesJade')">Byte Image Maxbytes Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteAnyJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteAnyJade')">Byte Any Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteAnyRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteAnyRequiredJade')">Byte Any Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteAnyMinbytesJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteAnyMinbytesJade')">Byte Any Minbytes Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteAnyMaxbytesJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteAnyMaxbytesJade')">Byte Any Maxbytes Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteTextJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteTextJade')">Byte Text Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('byteTextRequiredJade')"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteTextRequiredJade')">Byte Text Required Jade</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="fieldTestPagerEntity in fieldTestPagerEntities"
                    :key="fieldTestPagerEntity.id">
                    <td>
                        <router-link :to="{name: 'FieldTestPagerEntityView', params: {fieldTestPagerEntityId: fieldTestPagerEntity.id}}">{{fieldTestPagerEntity.id}}</router-link>
                    </td>
                    <td>{{fieldTestPagerEntity.stringJade}}</td>
                    <td>{{fieldTestPagerEntity.stringRequiredJade}}</td>
                    <td>{{fieldTestPagerEntity.stringMinlengthJade}}</td>
                    <td>{{fieldTestPagerEntity.stringMaxlengthJade}}</td>
                    <td>{{fieldTestPagerEntity.stringPatternJade}}</td>
                    <td>{{fieldTestPagerEntity.integerJade}}</td>
                    <td>{{fieldTestPagerEntity.integerRequiredJade}}</td>
                    <td>{{fieldTestPagerEntity.integerMinJade}}</td>
                    <td>{{fieldTestPagerEntity.integerMaxJade}}</td>
                    <td>{{fieldTestPagerEntity.longJade}}</td>
                    <td>{{fieldTestPagerEntity.longRequiredJade}}</td>
                    <td>{{fieldTestPagerEntity.longMinJade}}</td>
                    <td>{{fieldTestPagerEntity.longMaxJade}}</td>
                    <td>{{fieldTestPagerEntity.floatJade}}</td>
                    <td>{{fieldTestPagerEntity.floatRequiredJade}}</td>
                    <td>{{fieldTestPagerEntity.floatMinJade}}</td>
                    <td>{{fieldTestPagerEntity.floatMaxJade}}</td>
                    <td>{{fieldTestPagerEntity.doubleRequiredJade}}</td>
                    <td>{{fieldTestPagerEntity.doubleMinJade}}</td>
                    <td>{{fieldTestPagerEntity.doubleMaxJade}}</td>
                    <td>{{fieldTestPagerEntity.bigDecimalRequiredJade}}</td>
                    <td>{{fieldTestPagerEntity.bigDecimalMinJade}}</td>
                    <td>{{fieldTestPagerEntity.bigDecimalMaxJade}}</td>
                    <td>{{fieldTestPagerEntity.localDateJade}}</td>
                    <td>{{fieldTestPagerEntity.localDateRequiredJade}}</td>
                    <td>{{fieldTestPagerEntity.instantJade | formatDate}}</td>
                    <td>{{fieldTestPagerEntity.instanteRequiredJade | formatDate}}</td>
                    <td>{{fieldTestPagerEntity.zonedDateTimeJade | formatDate}}</td>
                    <td>{{fieldTestPagerEntity.zonedDateTimeRequiredJade | formatDate}}</td>
                    <td>{{fieldTestPagerEntity.durationJade}}</td>
                    <td>{{fieldTestPagerEntity.durationRequiredJade}}</td>
                    <td>{{fieldTestPagerEntity.booleanJade}}</td>
                    <td>{{fieldTestPagerEntity.booleanRequiredJade}}</td>
                    <td v-text="$t('jhipsterApp.EnumFieldClass.' + fieldTestPagerEntity.enumJade)">{{fieldTestPagerEntity.enumJade}}</td>
                    <td v-text="$t('jhipsterApp.EnumRequiredFieldClass.' + fieldTestPagerEntity.enumRequiredJade)">{{fieldTestPagerEntity.enumRequiredJade}}</td>
                    <td>{{fieldTestPagerEntity.uuidJade}}</td>
                    <td>{{fieldTestPagerEntity.uuidRequiredJade}}</td>
                    <td>
                        <a v-if="fieldTestPagerEntity.byteImageJade" v-on:click="openFile(fieldTestPagerEntity.byteImageJadeContentType, fieldTestPagerEntity.byteImageJade)">
                            <img v-bind:src="'data:' + fieldTestPagerEntity.byteImageJadeContentType + ';base64,' + fieldTestPagerEntity.byteImageJade" style="max-height: 30px;" alt="fieldTestPagerEntity image"/>
                        </a>
                        <span v-if="fieldTestPagerEntity.byteImageJade">{{fieldTestPagerEntity.byteImageJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteImageJade)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestPagerEntity.byteImageRequiredJade" v-on:click="openFile(fieldTestPagerEntity.byteImageRequiredJadeContentType, fieldTestPagerEntity.byteImageRequiredJade)">
                            <img v-bind:src="'data:' + fieldTestPagerEntity.byteImageRequiredJadeContentType + ';base64,' + fieldTestPagerEntity.byteImageRequiredJade" style="max-height: 30px;" alt="fieldTestPagerEntity image"/>
                        </a>
                        <span v-if="fieldTestPagerEntity.byteImageRequiredJade">{{fieldTestPagerEntity.byteImageRequiredJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteImageRequiredJade)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestPagerEntity.byteImageMinbytesJade" v-on:click="openFile(fieldTestPagerEntity.byteImageMinbytesJadeContentType, fieldTestPagerEntity.byteImageMinbytesJade)">
                            <img v-bind:src="'data:' + fieldTestPagerEntity.byteImageMinbytesJadeContentType + ';base64,' + fieldTestPagerEntity.byteImageMinbytesJade" style="max-height: 30px;" alt="fieldTestPagerEntity image"/>
                        </a>
                        <span v-if="fieldTestPagerEntity.byteImageMinbytesJade">{{fieldTestPagerEntity.byteImageMinbytesJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteImageMinbytesJade)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestPagerEntity.byteImageMaxbytesJade" v-on:click="openFile(fieldTestPagerEntity.byteImageMaxbytesJadeContentType, fieldTestPagerEntity.byteImageMaxbytesJade)">
                            <img v-bind:src="'data:' + fieldTestPagerEntity.byteImageMaxbytesJadeContentType + ';base64,' + fieldTestPagerEntity.byteImageMaxbytesJade" style="max-height: 30px;" alt="fieldTestPagerEntity image"/>
                        </a>
                        <span v-if="fieldTestPagerEntity.byteImageMaxbytesJade">{{fieldTestPagerEntity.byteImageMaxbytesJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteImageMaxbytesJade)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestPagerEntity.byteAnyJade" v-on:click="openFile(fieldTestPagerEntity.byteAnyJadeContentType, fieldTestPagerEntity.byteAnyJade)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestPagerEntity.byteAnyJade">{{fieldTestPagerEntity.byteAnyJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteAnyJade)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestPagerEntity.byteAnyRequiredJade" v-on:click="openFile(fieldTestPagerEntity.byteAnyRequiredJadeContentType, fieldTestPagerEntity.byteAnyRequiredJade)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestPagerEntity.byteAnyRequiredJade">{{fieldTestPagerEntity.byteAnyRequiredJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteAnyRequiredJade)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestPagerEntity.byteAnyMinbytesJade" v-on:click="openFile(fieldTestPagerEntity.byteAnyMinbytesJadeContentType, fieldTestPagerEntity.byteAnyMinbytesJade)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestPagerEntity.byteAnyMinbytesJade">{{fieldTestPagerEntity.byteAnyMinbytesJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteAnyMinbytesJade)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestPagerEntity.byteAnyMaxbytesJade" v-on:click="openFile(fieldTestPagerEntity.byteAnyMaxbytesJadeContentType, fieldTestPagerEntity.byteAnyMaxbytesJade)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestPagerEntity.byteAnyMaxbytesJade">{{fieldTestPagerEntity.byteAnyMaxbytesJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteAnyMaxbytesJade)}}</span>
                    </td>
                    <td>{{fieldTestPagerEntity.byteTextJade}}</td>
                    <td>{{fieldTestPagerEntity.byteTextRequiredJade}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'FieldTestPagerEntityView', params: {fieldTestPagerEntityId: fieldTestPagerEntity.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'FieldTestPagerEntityEdit', params: {fieldTestPagerEntityId: fieldTestPagerEntity.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(fieldTestPagerEntity)"
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
            <span slot="modal-title"><span id="jhipsterApp.fieldTestPagerEntity.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-fieldTestPagerEntity-heading" v-bind:title="$t('jhipsterApp.fieldTestPagerEntity.delete.question')">Are you sure you want to delete this Field Test Pager Entity?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-fieldTestPagerEntity" v-text="$t('entity.action.delete')" v-on:click="removeFieldTestPagerEntity()">Delete</button>
            </div>
        </b-modal>
        <!-- Pager is not implemented yet, so this is normal pagination instead -->
        <div v-show="fieldTestPagerEntities && fieldTestPagerEntities.length > 0">
            <div class="row justify-content-center">
                <jhi-item-count :page="page" :total="queryCount" :itemsPerPage="itemsPerPage"></jhi-item-count>
            </div>
            <div class="row justify-content-center">
                <b-pagination size="md" :total-rows="totalItems" v-model="page" :per-page="itemsPerPage" :change="loadPage(page)"></b-pagination>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./field-test-pager-entity.component.ts">
</script>
