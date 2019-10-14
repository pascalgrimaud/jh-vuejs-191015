<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.home.title')" id="field-test-service-class-entity-heading">Field Test Service Class Entities</span>
            <router-link :to="{name: 'FieldTestServiceClassEntityCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-field-test-service-class-entity">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('jhipsterApp.fieldTestServiceClassEntity.home.createLabel')">
                    Create a new Field Test Service Class Entity
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
        <div class="alert alert-warning" v-if="!isFetching && fieldTestServiceClassEntities && fieldTestServiceClassEntities.length === 0">
            <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.home.notFound')">No fieldTestServiceClassEntities found</span>
        </div>
        <div class="table-responsive" v-if="fieldTestServiceClassEntities && fieldTestServiceClassEntities.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span v-text="$t('global.field.id')">ID</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringBob')">String Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringRequiredBob')">String Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringMinlengthBob')">String Minlength Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringMaxlengthBob')">String Maxlength Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringPatternBob')">String Pattern Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.integerBob')">Integer Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.integerRequiredBob')">Integer Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.integerMinBob')">Integer Min Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.integerMaxBob')">Integer Max Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.longBob')">Long Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.longRequiredBob')">Long Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.longMinBob')">Long Min Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.longMaxBob')">Long Max Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.floatBob')">Float Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.floatRequiredBob')">Float Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.floatMinBob')">Float Min Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.floatMaxBob')">Float Max Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.doubleRequiredBob')">Double Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.doubleMinBob')">Double Min Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.doubleMaxBob')">Double Max Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.bigDecimalRequiredBob')">Big Decimal Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.bigDecimalMinBob')">Big Decimal Min Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.bigDecimalMaxBob')">Big Decimal Max Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.localDateBob')">Local Date Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.localDateRequiredBob')">Local Date Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.instantBob')">Instant Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.instanteRequiredBob')">Instante Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.zonedDateTimeBob')">Zoned Date Time Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.zonedDateTimeRequiredBob')">Zoned Date Time Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.durationBob')">Duration Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.durationRequiredBob')">Duration Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.booleanBob')">Boolean Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.booleanRequiredBob')">Boolean Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.enumBob')">Enum Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.enumRequiredBob')">Enum Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.uuidBob')">Uuid Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.uuidRequiredBob')">Uuid Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteImageBob')">Byte Image Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteImageRequiredBob')">Byte Image Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteImageMinbytesBob')">Byte Image Minbytes Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteImageMaxbytesBob')">Byte Image Maxbytes Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteAnyBob')">Byte Any Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteAnyRequiredBob')">Byte Any Required Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteAnyMinbytesBob')">Byte Any Minbytes Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteAnyMaxbytesBob')">Byte Any Maxbytes Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteTextBob')">Byte Text Bob</span></th>
                    <th><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteTextRequiredBob')">Byte Text Required Bob</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="fieldTestServiceClassEntity in fieldTestServiceClassEntities"
                    :key="fieldTestServiceClassEntity.id">
                    <td>
                        <router-link :to="{name: 'FieldTestServiceClassEntityView', params: {fieldTestServiceClassEntityId: fieldTestServiceClassEntity.id}}">{{fieldTestServiceClassEntity.id}}</router-link>
                    </td>
                    <td>{{fieldTestServiceClassEntity.stringBob}}</td>
                    <td>{{fieldTestServiceClassEntity.stringRequiredBob}}</td>
                    <td>{{fieldTestServiceClassEntity.stringMinlengthBob}}</td>
                    <td>{{fieldTestServiceClassEntity.stringMaxlengthBob}}</td>
                    <td>{{fieldTestServiceClassEntity.stringPatternBob}}</td>
                    <td>{{fieldTestServiceClassEntity.integerBob}}</td>
                    <td>{{fieldTestServiceClassEntity.integerRequiredBob}}</td>
                    <td>{{fieldTestServiceClassEntity.integerMinBob}}</td>
                    <td>{{fieldTestServiceClassEntity.integerMaxBob}}</td>
                    <td>{{fieldTestServiceClassEntity.longBob}}</td>
                    <td>{{fieldTestServiceClassEntity.longRequiredBob}}</td>
                    <td>{{fieldTestServiceClassEntity.longMinBob}}</td>
                    <td>{{fieldTestServiceClassEntity.longMaxBob}}</td>
                    <td>{{fieldTestServiceClassEntity.floatBob}}</td>
                    <td>{{fieldTestServiceClassEntity.floatRequiredBob}}</td>
                    <td>{{fieldTestServiceClassEntity.floatMinBob}}</td>
                    <td>{{fieldTestServiceClassEntity.floatMaxBob}}</td>
                    <td>{{fieldTestServiceClassEntity.doubleRequiredBob}}</td>
                    <td>{{fieldTestServiceClassEntity.doubleMinBob}}</td>
                    <td>{{fieldTestServiceClassEntity.doubleMaxBob}}</td>
                    <td>{{fieldTestServiceClassEntity.bigDecimalRequiredBob}}</td>
                    <td>{{fieldTestServiceClassEntity.bigDecimalMinBob}}</td>
                    <td>{{fieldTestServiceClassEntity.bigDecimalMaxBob}}</td>
                    <td>{{fieldTestServiceClassEntity.localDateBob}}</td>
                    <td>{{fieldTestServiceClassEntity.localDateRequiredBob}}</td>
                    <td>{{fieldTestServiceClassEntity.instantBob | formatDate}}</td>
                    <td>{{fieldTestServiceClassEntity.instanteRequiredBob | formatDate}}</td>
                    <td>{{fieldTestServiceClassEntity.zonedDateTimeBob | formatDate}}</td>
                    <td>{{fieldTestServiceClassEntity.zonedDateTimeRequiredBob | formatDate}}</td>
                    <td>{{fieldTestServiceClassEntity.durationBob}}</td>
                    <td>{{fieldTestServiceClassEntity.durationRequiredBob}}</td>
                    <td>{{fieldTestServiceClassEntity.booleanBob}}</td>
                    <td>{{fieldTestServiceClassEntity.booleanRequiredBob}}</td>
                    <td v-text="$t('jhipsterApp.EnumFieldClass.' + fieldTestServiceClassEntity.enumBob)">{{fieldTestServiceClassEntity.enumBob}}</td>
                    <td v-text="$t('jhipsterApp.EnumRequiredFieldClass.' + fieldTestServiceClassEntity.enumRequiredBob)">{{fieldTestServiceClassEntity.enumRequiredBob}}</td>
                    <td>{{fieldTestServiceClassEntity.uuidBob}}</td>
                    <td>{{fieldTestServiceClassEntity.uuidRequiredBob}}</td>
                    <td>
                        <a v-if="fieldTestServiceClassEntity.byteImageBob" v-on:click="openFile(fieldTestServiceClassEntity.byteImageBobContentType, fieldTestServiceClassEntity.byteImageBob)">
                            <img v-bind:src="'data:' + fieldTestServiceClassEntity.byteImageBobContentType + ';base64,' + fieldTestServiceClassEntity.byteImageBob" style="max-height: 30px;" alt="fieldTestServiceClassEntity image"/>
                        </a>
                        <span v-if="fieldTestServiceClassEntity.byteImageBob">{{fieldTestServiceClassEntity.byteImageBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteImageBob)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestServiceClassEntity.byteImageRequiredBob" v-on:click="openFile(fieldTestServiceClassEntity.byteImageRequiredBobContentType, fieldTestServiceClassEntity.byteImageRequiredBob)">
                            <img v-bind:src="'data:' + fieldTestServiceClassEntity.byteImageRequiredBobContentType + ';base64,' + fieldTestServiceClassEntity.byteImageRequiredBob" style="max-height: 30px;" alt="fieldTestServiceClassEntity image"/>
                        </a>
                        <span v-if="fieldTestServiceClassEntity.byteImageRequiredBob">{{fieldTestServiceClassEntity.byteImageRequiredBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteImageRequiredBob)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestServiceClassEntity.byteImageMinbytesBob" v-on:click="openFile(fieldTestServiceClassEntity.byteImageMinbytesBobContentType, fieldTestServiceClassEntity.byteImageMinbytesBob)">
                            <img v-bind:src="'data:' + fieldTestServiceClassEntity.byteImageMinbytesBobContentType + ';base64,' + fieldTestServiceClassEntity.byteImageMinbytesBob" style="max-height: 30px;" alt="fieldTestServiceClassEntity image"/>
                        </a>
                        <span v-if="fieldTestServiceClassEntity.byteImageMinbytesBob">{{fieldTestServiceClassEntity.byteImageMinbytesBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteImageMinbytesBob)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestServiceClassEntity.byteImageMaxbytesBob" v-on:click="openFile(fieldTestServiceClassEntity.byteImageMaxbytesBobContentType, fieldTestServiceClassEntity.byteImageMaxbytesBob)">
                            <img v-bind:src="'data:' + fieldTestServiceClassEntity.byteImageMaxbytesBobContentType + ';base64,' + fieldTestServiceClassEntity.byteImageMaxbytesBob" style="max-height: 30px;" alt="fieldTestServiceClassEntity image"/>
                        </a>
                        <span v-if="fieldTestServiceClassEntity.byteImageMaxbytesBob">{{fieldTestServiceClassEntity.byteImageMaxbytesBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteImageMaxbytesBob)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestServiceClassEntity.byteAnyBob" v-on:click="openFile(fieldTestServiceClassEntity.byteAnyBobContentType, fieldTestServiceClassEntity.byteAnyBob)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestServiceClassEntity.byteAnyBob">{{fieldTestServiceClassEntity.byteAnyBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteAnyBob)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestServiceClassEntity.byteAnyRequiredBob" v-on:click="openFile(fieldTestServiceClassEntity.byteAnyRequiredBobContentType, fieldTestServiceClassEntity.byteAnyRequiredBob)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestServiceClassEntity.byteAnyRequiredBob">{{fieldTestServiceClassEntity.byteAnyRequiredBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteAnyRequiredBob)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestServiceClassEntity.byteAnyMinbytesBob" v-on:click="openFile(fieldTestServiceClassEntity.byteAnyMinbytesBobContentType, fieldTestServiceClassEntity.byteAnyMinbytesBob)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestServiceClassEntity.byteAnyMinbytesBob">{{fieldTestServiceClassEntity.byteAnyMinbytesBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteAnyMinbytesBob)}}</span>
                    </td>
                    <td>
                        <a v-if="fieldTestServiceClassEntity.byteAnyMaxbytesBob" v-on:click="openFile(fieldTestServiceClassEntity.byteAnyMaxbytesBobContentType, fieldTestServiceClassEntity.byteAnyMaxbytesBob)" v-text="$t('entity.action.open')">open</a>
                        <span v-if="fieldTestServiceClassEntity.byteAnyMaxbytesBob">{{fieldTestServiceClassEntity.byteAnyMaxbytesBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteAnyMaxbytesBob)}}</span>
                    </td>
                    <td>{{fieldTestServiceClassEntity.byteTextBob}}</td>
                    <td>{{fieldTestServiceClassEntity.byteTextRequiredBob}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'FieldTestServiceClassEntityView', params: {fieldTestServiceClassEntityId: fieldTestServiceClassEntity.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'FieldTestServiceClassEntityEdit', params: {fieldTestServiceClassEntityId: fieldTestServiceClassEntity.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(fieldTestServiceClassEntity)"
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
            <span slot="modal-title"><span id="jhipsterApp.fieldTestServiceClassEntity.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-fieldTestServiceClassEntity-heading" v-bind:title="$t('jhipsterApp.fieldTestServiceClassEntity.delete.question')">Are you sure you want to delete this Field Test Service Class Entity?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-fieldTestServiceClassEntity" v-text="$t('entity.action.delete')" v-on:click="removeFieldTestServiceClassEntity()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./field-test-service-class-entity.component.ts">
</script>
