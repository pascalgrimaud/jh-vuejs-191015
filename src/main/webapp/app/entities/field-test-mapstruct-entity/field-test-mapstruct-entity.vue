<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.home.title')" id="field-test-mapstruct-entity-heading">Field Test Mapstruct Entities</span>
            <router-link :to="{name: 'FieldTestMapstructEntityCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-field-test-mapstruct-entity">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('jhipsterApp.fieldTestMapstructEntity.home.createLabel')">
                    Create a new Field Test Mapstruct Entity
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
        <div class="alert alert-warning" v-if="!isFetching && fieldTestMapstructEntities && fieldTestMapstructEntities.length === 0">
            <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.home.notFound')">No fieldTestMapstructEntities found</span>
        </div>
        <div class="table-responsive" v-if="fieldTestMapstructEntities && fieldTestMapstructEntities.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span v-text="$t('global.field.id')">ID</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringEva')">String Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringRequiredEva')">String Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringMinlengthEva')">String Minlength Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringMaxlengthEva')">String Maxlength Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringPatternEva')">String Pattern Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.integerEva')">Integer Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.integerRequiredEva')">Integer Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.integerMinEva')">Integer Min Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.integerMaxEva')">Integer Max Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.longEva')">Long Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.longRequiredEva')">Long Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.longMinEva')">Long Min Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.longMaxEva')">Long Max Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.floatEva')">Float Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.floatRequiredEva')">Float Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.floatMinEva')">Float Min Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.floatMaxEva')">Float Max Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.doubleRequiredEva')">Double Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.doubleMinEva')">Double Min Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.doubleMaxEva')">Double Max Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.bigDecimalRequiredEva')">Big Decimal Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.bigDecimalMinEva')">Big Decimal Min Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.bigDecimalMaxEva')">Big Decimal Max Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.localDateEva')">Local Date Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.localDateRequiredEva')">Local Date Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.instantEva')">Instant Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.instanteRequiredEva')">Instante Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.zonedDateTimeEva')">Zoned Date Time Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.zonedDateTimeRequiredEva')">Zoned Date Time Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.durationEva')">Duration Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.durationRequiredEva')">Duration Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.booleanEva')">Boolean Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.booleanRequiredEva')">Boolean Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.enumEva')">Enum Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.enumRequiredEva')">Enum Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.uuidEva')">Uuid Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.uuidRequiredEva')">Uuid Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteImageEva')">Byte Image Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteImageRequiredEva')">Byte Image Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteImageMinbytesEva')">Byte Image Minbytes Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteImageMaxbytesEva')">Byte Image Maxbytes Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteAnyEva')">Byte Any Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteAnyRequiredEva')">Byte Any Required Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteAnyMinbytesEva')">Byte Any Minbytes Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteAnyMaxbytesEva')">Byte Any Maxbytes Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteTextEva')">Byte Text Eva</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteTextRequiredEva')">Byte Text Required Eva</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="fieldTestMapstructEntity in fieldTestMapstructEntities"
                    :key="fieldTestMapstructEntity.id">
                    <td>
                        <router-link :to="{name: 'FieldTestMapstructEntityView', params: {fieldTestMapstructEntityId: fieldTestMapstructEntity.id}}">{{fieldTestMapstructEntity.id}}</router-link>
                    </td>
                    <td>{{fieldTestMapstructEntity.stringEva}}</td>
                    <td>{{fieldTestMapstructEntity.stringRequiredEva}}</td>
                    <td>{{fieldTestMapstructEntity.stringMinlengthEva}}</td>
                    <td>{{fieldTestMapstructEntity.stringMaxlengthEva}}</td>
                    <td>{{fieldTestMapstructEntity.stringPatternEva}}</td>
                    <td>{{fieldTestMapstructEntity.integerEva}}</td>
                    <td>{{fieldTestMapstructEntity.integerRequiredEva}}</td>
                    <td>{{fieldTestMapstructEntity.integerMinEva}}</td>
                    <td>{{fieldTestMapstructEntity.integerMaxEva}}</td>
                    <td>{{fieldTestMapstructEntity.longEva}}</td>
                    <td>{{fieldTestMapstructEntity.longRequiredEva}}</td>
                    <td>{{fieldTestMapstructEntity.longMinEva}}</td>
                    <td>{{fieldTestMapstructEntity.longMaxEva}}</td>
                    <td>{{fieldTestMapstructEntity.floatEva}}</td>
                    <td>{{fieldTestMapstructEntity.floatRequiredEva}}</td>
                    <td>{{fieldTestMapstructEntity.floatMinEva}}</td>
                    <td>{{fieldTestMapstructEntity.floatMaxEva}}</td>
                    <td>{{fieldTestMapstructEntity.doubleRequiredEva}}</td>
                    <td>{{fieldTestMapstructEntity.doubleMinEva}}</td>
                    <td>{{fieldTestMapstructEntity.doubleMaxEva}}</td>
                    <td>{{fieldTestMapstructEntity.bigDecimalRequiredEva}}</td>
                    <td>{{fieldTestMapstructEntity.bigDecimalMinEva}}</td>
                    <td>{{fieldTestMapstructEntity.bigDecimalMaxEva}}</td>
                    <td>{{fieldTestMapstructEntity.localDateEva}}</td>
                    <td>{{fieldTestMapstructEntity.localDateRequiredEva}}</td>
                    <td>{{fieldTestMapstructEntity.instantEva | formatDate}}</td>
                    <td>{{fieldTestMapstructEntity.instanteRequiredEva | formatDate}}</td>
                    <td>{{fieldTestMapstructEntity.zonedDateTimeEva | formatDate}}</td>
                    <td>{{fieldTestMapstructEntity.zonedDateTimeRequiredEva | formatDate}}</td>
                    <td>{{fieldTestMapstructEntity.durationEva}}</td>
                    <td>{{fieldTestMapstructEntity.durationRequiredEva}}</td>
                    <td>{{fieldTestMapstructEntity.booleanEva}}</td>
                    <td>{{fieldTestMapstructEntity.booleanRequiredEva}}</td>
                    <td v-text="$t('jhipsterApp.EnumFieldClass.' + fieldTestMapstructEntity.enumEva)">{{fieldTestMapstructEntity.enumEva}}</td>
                    <td v-text="$t('jhipsterApp.EnumRequiredFieldClass.' + fieldTestMapstructEntity.enumRequiredEva)">{{fieldTestMapstructEntity.enumRequiredEva}}</td>
                    <td>{{fieldTestMapstructEntity.uuidEva}}</td>
                    <td>{{fieldTestMapstructEntity.uuidRequiredEva}}</td>
                    <td>
                        <a v-if="fieldTestMapstructEntity.byteImageEva" v-on:click="openFile(fieldTestMapstructEntity.byteImageEvaContentType, fieldTestMapstructEntity.byteImageEva)">
                            <img v-bind:src="'data:' + fieldTestMapstructEntity.byteImageEvaContentType + ';base64,' + fieldTestMapstructEntity.byteImageEva" style="max-height: 30px;" alt="fieldTestMapstructEntity image"/>
                        </a>
                        <span v-if="fieldTestMapstructEntity.byteImageEva">{{fieldTestMapstructEntity.byteImageEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteImageEva)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestMapstructEntity.byteImageRequiredEva" v-on:click="openFile(fieldTestMapstructEntity.byteImageRequiredEvaContentType, fieldTestMapstructEntity.byteImageRequiredEva)">
                            <img v-bind:src="'data:' + fieldTestMapstructEntity.byteImageRequiredEvaContentType + ';base64,' + fieldTestMapstructEntity.byteImageRequiredEva" style="max-height: 30px;" alt="fieldTestMapstructEntity image"/>
                        </a>
                        <span v-if="fieldTestMapstructEntity.byteImageRequiredEva">{{fieldTestMapstructEntity.byteImageRequiredEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteImageRequiredEva)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestMapstructEntity.byteImageMinbytesEva" v-on:click="openFile(fieldTestMapstructEntity.byteImageMinbytesEvaContentType, fieldTestMapstructEntity.byteImageMinbytesEva)">
                            <img v-bind:src="'data:' + fieldTestMapstructEntity.byteImageMinbytesEvaContentType + ';base64,' + fieldTestMapstructEntity.byteImageMinbytesEva" style="max-height: 30px;" alt="fieldTestMapstructEntity image"/>
                        </a>
                        <span v-if="fieldTestMapstructEntity.byteImageMinbytesEva">{{fieldTestMapstructEntity.byteImageMinbytesEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteImageMinbytesEva)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestMapstructEntity.byteImageMaxbytesEva" v-on:click="openFile(fieldTestMapstructEntity.byteImageMaxbytesEvaContentType, fieldTestMapstructEntity.byteImageMaxbytesEva)">
                            <img v-bind:src="'data:' + fieldTestMapstructEntity.byteImageMaxbytesEvaContentType + ';base64,' + fieldTestMapstructEntity.byteImageMaxbytesEva" style="max-height: 30px;" alt="fieldTestMapstructEntity image"/>
                        </a>
                        <span v-if="fieldTestMapstructEntity.byteImageMaxbytesEva">{{fieldTestMapstructEntity.byteImageMaxbytesEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteImageMaxbytesEva)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestMapstructEntity.byteAnyEva" v-on:click="openFile(fieldTestMapstructEntity.byteAnyEvaContentType, fieldTestMapstructEntity.byteAnyEva)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestMapstructEntity.byteAnyEva">{{fieldTestMapstructEntity.byteAnyEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteAnyEva)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestMapstructEntity.byteAnyRequiredEva" v-on:click="openFile(fieldTestMapstructEntity.byteAnyRequiredEvaContentType, fieldTestMapstructEntity.byteAnyRequiredEva)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestMapstructEntity.byteAnyRequiredEva">{{fieldTestMapstructEntity.byteAnyRequiredEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteAnyRequiredEva)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestMapstructEntity.byteAnyMinbytesEva" v-on:click="openFile(fieldTestMapstructEntity.byteAnyMinbytesEvaContentType, fieldTestMapstructEntity.byteAnyMinbytesEva)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestMapstructEntity.byteAnyMinbytesEva">{{fieldTestMapstructEntity.byteAnyMinbytesEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteAnyMinbytesEva)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestMapstructEntity.byteAnyMaxbytesEva" v-on:click="openFile(fieldTestMapstructEntity.byteAnyMaxbytesEvaContentType, fieldTestMapstructEntity.byteAnyMaxbytesEva)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestMapstructEntity.byteAnyMaxbytesEva">{{fieldTestMapstructEntity.byteAnyMaxbytesEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteAnyMaxbytesEva)}}</span>
                    </td>
                    <td>{{fieldTestMapstructEntity.byteTextEva}}</td>
                    <td>{{fieldTestMapstructEntity.byteTextRequiredEva}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'FieldTestMapstructEntityView', params: {fieldTestMapstructEntityId: fieldTestMapstructEntity.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'FieldTestMapstructEntityEdit', params: {fieldTestMapstructEntityId: fieldTestMapstructEntity.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(fieldTestMapstructEntity)"
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
            <span slot="modal-title"><span id="jhipsterApp.fieldTestMapstructEntity.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-fieldTestMapstructEntity-heading" v-bind:title="$t('jhipsterApp.fieldTestMapstructEntity.delete.question')">Are you sure you want to delete this Field Test Mapstruct Entity?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-fieldTestMapstructEntity" v-text="$t('entity.action.delete')" v-on:click="removeFieldTestMapstructEntity()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./field-test-mapstruct-entity.component.ts">
</script>
