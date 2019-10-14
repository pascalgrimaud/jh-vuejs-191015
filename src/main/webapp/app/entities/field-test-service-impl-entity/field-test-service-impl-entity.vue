<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.home.title')" id="field-test-service-impl-entity-heading">Field Test Service Impl Entities</span>
            <router-link :to="{name: 'FieldTestServiceImplEntityCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-field-test-service-impl-entity">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('jhipsterApp.fieldTestServiceImplEntity.home.createLabel')">
                    Create a new Field Test Service Impl Entity
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
        <div class="alert alert-warning" v-if="!isFetching && fieldTestServiceImplEntities && fieldTestServiceImplEntities.length === 0">
            <span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.home.notFound')">No fieldTestServiceImplEntities found</span>
        </div>
        <div class="table-responsive" v-if="fieldTestServiceImplEntities && fieldTestServiceImplEntities.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span v-text="$t('global.field.id')">ID</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.stringMika')">String Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.stringRequiredMika')">String Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.stringMinlengthMika')">String Minlength Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.stringMaxlengthMika')">String Maxlength Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.stringPatternMika')">String Pattern Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.integerMika')">Integer Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.integerRequiredMika')">Integer Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.integerMinMika')">Integer Min Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.integerMaxMika')">Integer Max Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.longMika')">Long Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.longRequiredMika')">Long Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.longMinMika')">Long Min Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.longMaxMika')">Long Max Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.floatMika')">Float Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.floatRequiredMika')">Float Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.floatMinMika')">Float Min Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.floatMaxMika')">Float Max Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.doubleRequiredMika')">Double Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.doubleMinMika')">Double Min Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.doubleMaxMika')">Double Max Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.bigDecimalRequiredMika')">Big Decimal Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.bigDecimalMinMika')">Big Decimal Min Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.bigDecimalMaxMika')">Big Decimal Max Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.localDateMika')">Local Date Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.localDateRequiredMika')">Local Date Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.instantMika')">Instant Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.instanteRequiredMika')">Instante Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.zonedDateTimeMika')">Zoned Date Time Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.zonedDateTimeRequiredMika')">Zoned Date Time Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.durationMika')">Duration Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.durationRequiredMika')">Duration Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.booleanMika')">Boolean Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.booleanRequiredMika')">Boolean Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.enumMika')">Enum Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.enumRequiredMika')">Enum Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.uuidMika')">Uuid Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.uuidRequiredMika')">Uuid Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.byteImageMika')">Byte Image Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.byteImageRequiredMika')">Byte Image Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.byteImageMinbytesMika')">Byte Image Minbytes Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.byteImageMaxbytesMika')">Byte Image Maxbytes Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.byteAnyMika')">Byte Any Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.byteAnyRequiredMika')">Byte Any Required Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.byteAnyMinbytesMika')">Byte Any Minbytes Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.byteAnyMaxbytesMika')">Byte Any Maxbytes Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.byteTextMika')">Byte Text Mika</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceImplEntity.byteTextRequiredMika')">Byte Text Required Mika</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="fieldTestServiceImplEntity in fieldTestServiceImplEntities"
                    :key="fieldTestServiceImplEntity.id">
                    <td>
                        <router-link :to="{name: 'FieldTestServiceImplEntityView', params: {fieldTestServiceImplEntityId: fieldTestServiceImplEntity.id}}">{{fieldTestServiceImplEntity.id}}</router-link>
                    </td>
                    <td>{{fieldTestServiceImplEntity.stringMika}}</td>
                    <td>{{fieldTestServiceImplEntity.stringRequiredMika}}</td>
                    <td>{{fieldTestServiceImplEntity.stringMinlengthMika}}</td>
                    <td>{{fieldTestServiceImplEntity.stringMaxlengthMika}}</td>
                    <td>{{fieldTestServiceImplEntity.stringPatternMika}}</td>
                    <td>{{fieldTestServiceImplEntity.integerMika}}</td>
                    <td>{{fieldTestServiceImplEntity.integerRequiredMika}}</td>
                    <td>{{fieldTestServiceImplEntity.integerMinMika}}</td>
                    <td>{{fieldTestServiceImplEntity.integerMaxMika}}</td>
                    <td>{{fieldTestServiceImplEntity.longMika}}</td>
                    <td>{{fieldTestServiceImplEntity.longRequiredMika}}</td>
                    <td>{{fieldTestServiceImplEntity.longMinMika}}</td>
                    <td>{{fieldTestServiceImplEntity.longMaxMika}}</td>
                    <td>{{fieldTestServiceImplEntity.floatMika}}</td>
                    <td>{{fieldTestServiceImplEntity.floatRequiredMika}}</td>
                    <td>{{fieldTestServiceImplEntity.floatMinMika}}</td>
                    <td>{{fieldTestServiceImplEntity.floatMaxMika}}</td>
                    <td>{{fieldTestServiceImplEntity.doubleRequiredMika}}</td>
                    <td>{{fieldTestServiceImplEntity.doubleMinMika}}</td>
                    <td>{{fieldTestServiceImplEntity.doubleMaxMika}}</td>
                    <td>{{fieldTestServiceImplEntity.bigDecimalRequiredMika}}</td>
                    <td>{{fieldTestServiceImplEntity.bigDecimalMinMika}}</td>
                    <td>{{fieldTestServiceImplEntity.bigDecimalMaxMika}}</td>
                    <td>{{fieldTestServiceImplEntity.localDateMika}}</td>
                    <td>{{fieldTestServiceImplEntity.localDateRequiredMika}}</td>
                    <td>{{fieldTestServiceImplEntity.instantMika | formatDate}}</td>
                    <td>{{fieldTestServiceImplEntity.instanteRequiredMika | formatDate}}</td>
                    <td>{{fieldTestServiceImplEntity.zonedDateTimeMika | formatDate}}</td>
                    <td>{{fieldTestServiceImplEntity.zonedDateTimeRequiredMika | formatDate}}</td>
                    <td>{{fieldTestServiceImplEntity.durationMika}}</td>
                    <td>{{fieldTestServiceImplEntity.durationRequiredMika}}</td>
                    <td>{{fieldTestServiceImplEntity.booleanMika}}</td>
                    <td>{{fieldTestServiceImplEntity.booleanRequiredMika}}</td>
                    <td v-text="$t('jhipsterApp.EnumFieldClass.' + fieldTestServiceImplEntity.enumMika)">{{fieldTestServiceImplEntity.enumMika}}</td>
                    <td v-text="$t('jhipsterApp.EnumRequiredFieldClass.' + fieldTestServiceImplEntity.enumRequiredMika)">{{fieldTestServiceImplEntity.enumRequiredMika}}</td>
                    <td>{{fieldTestServiceImplEntity.uuidMika}}</td>
                    <td>{{fieldTestServiceImplEntity.uuidRequiredMika}}</td>
                    <td>
                        <a v-if="fieldTestServiceImplEntity.byteImageMika" v-on:click="openFile(fieldTestServiceImplEntity.byteImageMikaContentType, fieldTestServiceImplEntity.byteImageMika)">
                            <img v-bind:src="'data:' + fieldTestServiceImplEntity.byteImageMikaContentType + ';base64,' + fieldTestServiceImplEntity.byteImageMika" style="max-height: 30px;" alt="fieldTestServiceImplEntity image"/>
                        </a>
                        <span v-if="fieldTestServiceImplEntity.byteImageMika">{{fieldTestServiceImplEntity.byteImageMikaContentType}}, {{byteSize(fieldTestServiceImplEntity.byteImageMika)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestServiceImplEntity.byteImageRequiredMika" v-on:click="openFile(fieldTestServiceImplEntity.byteImageRequiredMikaContentType, fieldTestServiceImplEntity.byteImageRequiredMika)">
                            <img v-bind:src="'data:' + fieldTestServiceImplEntity.byteImageRequiredMikaContentType + ';base64,' + fieldTestServiceImplEntity.byteImageRequiredMika" style="max-height: 30px;" alt="fieldTestServiceImplEntity image"/>
                        </a>
                        <span v-if="fieldTestServiceImplEntity.byteImageRequiredMika">{{fieldTestServiceImplEntity.byteImageRequiredMikaContentType}}, {{byteSize(fieldTestServiceImplEntity.byteImageRequiredMika)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestServiceImplEntity.byteImageMinbytesMika" v-on:click="openFile(fieldTestServiceImplEntity.byteImageMinbytesMikaContentType, fieldTestServiceImplEntity.byteImageMinbytesMika)">
                            <img v-bind:src="'data:' + fieldTestServiceImplEntity.byteImageMinbytesMikaContentType + ';base64,' + fieldTestServiceImplEntity.byteImageMinbytesMika" style="max-height: 30px;" alt="fieldTestServiceImplEntity image"/>
                        </a>
                        <span v-if="fieldTestServiceImplEntity.byteImageMinbytesMika">{{fieldTestServiceImplEntity.byteImageMinbytesMikaContentType}}, {{byteSize(fieldTestServiceImplEntity.byteImageMinbytesMika)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestServiceImplEntity.byteImageMaxbytesMika" v-on:click="openFile(fieldTestServiceImplEntity.byteImageMaxbytesMikaContentType, fieldTestServiceImplEntity.byteImageMaxbytesMika)">
                            <img v-bind:src="'data:' + fieldTestServiceImplEntity.byteImageMaxbytesMikaContentType + ';base64,' + fieldTestServiceImplEntity.byteImageMaxbytesMika" style="max-height: 30px;" alt="fieldTestServiceImplEntity image"/>
                        </a>
                        <span v-if="fieldTestServiceImplEntity.byteImageMaxbytesMika">{{fieldTestServiceImplEntity.byteImageMaxbytesMikaContentType}}, {{byteSize(fieldTestServiceImplEntity.byteImageMaxbytesMika)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestServiceImplEntity.byteAnyMika" v-on:click="openFile(fieldTestServiceImplEntity.byteAnyMikaContentType, fieldTestServiceImplEntity.byteAnyMika)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestServiceImplEntity.byteAnyMika">{{fieldTestServiceImplEntity.byteAnyMikaContentType}}, {{byteSize(fieldTestServiceImplEntity.byteAnyMika)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestServiceImplEntity.byteAnyRequiredMika" v-on:click="openFile(fieldTestServiceImplEntity.byteAnyRequiredMikaContentType, fieldTestServiceImplEntity.byteAnyRequiredMika)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestServiceImplEntity.byteAnyRequiredMika">{{fieldTestServiceImplEntity.byteAnyRequiredMikaContentType}}, {{byteSize(fieldTestServiceImplEntity.byteAnyRequiredMika)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestServiceImplEntity.byteAnyMinbytesMika" v-on:click="openFile(fieldTestServiceImplEntity.byteAnyMinbytesMikaContentType, fieldTestServiceImplEntity.byteAnyMinbytesMika)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestServiceImplEntity.byteAnyMinbytesMika">{{fieldTestServiceImplEntity.byteAnyMinbytesMikaContentType}}, {{byteSize(fieldTestServiceImplEntity.byteAnyMinbytesMika)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestServiceImplEntity.byteAnyMaxbytesMika" v-on:click="openFile(fieldTestServiceImplEntity.byteAnyMaxbytesMikaContentType, fieldTestServiceImplEntity.byteAnyMaxbytesMika)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestServiceImplEntity.byteAnyMaxbytesMika">{{fieldTestServiceImplEntity.byteAnyMaxbytesMikaContentType}}, {{byteSize(fieldTestServiceImplEntity.byteAnyMaxbytesMika)}}</span>
                    </td>
                    <td>{{fieldTestServiceImplEntity.byteTextMika}}</td>
                    <td>{{fieldTestServiceImplEntity.byteTextRequiredMika}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'FieldTestServiceImplEntityView', params: {fieldTestServiceImplEntityId: fieldTestServiceImplEntity.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'FieldTestServiceImplEntityEdit', params: {fieldTestServiceImplEntityId: fieldTestServiceImplEntity.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(fieldTestServiceImplEntity)"
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
            <span slot="modal-title"><span id="jhipsterApp.fieldTestServiceImplEntity.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-fieldTestServiceImplEntity-heading" v-bind:title="$t('jhipsterApp.fieldTestServiceImplEntity.delete.question')">Are you sure you want to delete this Field Test Service Impl Entity?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-fieldTestServiceImplEntity" v-text="$t('entity.action.delete')" v-on:click="removeFieldTestServiceImplEntity()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./field-test-service-impl-entity.component.ts">
</script>
