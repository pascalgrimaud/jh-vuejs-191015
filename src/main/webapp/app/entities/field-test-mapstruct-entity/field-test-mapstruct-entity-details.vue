<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="fieldTestMapstructEntity">
                <h2 class="jh-entity-heading"><span v-text="$t('jhipsterApp.fieldTestMapstructEntity.detail.title')">FieldTestMapstructEntity</span> {{fieldTestMapstructEntity.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringEva')">String Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.stringEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringRequiredEva')">String Required Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.stringRequiredEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringMinlengthEva')">String Minlength Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.stringMinlengthEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringMaxlengthEva')">String Maxlength Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.stringMaxlengthEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringPatternEva')">String Pattern Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.stringPatternEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.integerEva')">Integer Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.integerEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.integerRequiredEva')">Integer Required Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.integerRequiredEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.integerMinEva')">Integer Min Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.integerMinEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.integerMaxEva')">Integer Max Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.integerMaxEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.longEva')">Long Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.longEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.longRequiredEva')">Long Required Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.longRequiredEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.longMinEva')">Long Min Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.longMinEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.longMaxEva')">Long Max Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.longMaxEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.floatEva')">Float Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.floatEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.floatRequiredEva')">Float Required Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.floatRequiredEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.floatMinEva')">Float Min Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.floatMinEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.floatMaxEva')">Float Max Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.floatMaxEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.doubleRequiredEva')">Double Required Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.doubleRequiredEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.doubleMinEva')">Double Min Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.doubleMinEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.doubleMaxEva')">Double Max Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.doubleMaxEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.bigDecimalRequiredEva')">Big Decimal Required Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.bigDecimalRequiredEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.bigDecimalMinEva')">Big Decimal Min Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.bigDecimalMinEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.bigDecimalMaxEva')">Big Decimal Max Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.bigDecimalMaxEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.localDateEva')">Local Date Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.localDateEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.localDateRequiredEva')">Local Date Required Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.localDateRequiredEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.instantEva')">Instant Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.instantEva | formatDate}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.instanteRequiredEva')">Instante Required Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.instanteRequiredEva | formatDate}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.zonedDateTimeEva')">Zoned Date Time Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.zonedDateTimeEva | formatDate}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.zonedDateTimeRequiredEva')">Zoned Date Time Required Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.zonedDateTimeRequiredEva | formatDate}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.durationEva')">Duration Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.durationEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.durationRequiredEva')">Duration Required Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.durationRequiredEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.booleanEva')">Boolean Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.booleanEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.booleanRequiredEva')">Boolean Required Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.booleanRequiredEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.enumEva')">Enum Eva</span>
                    </dt>
                    <dd>
                        <span v-text="$t('jhipsterApp.EnumFieldClass.' + fieldTestMapstructEntity.enumEva)">{{fieldTestMapstructEntity.enumEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.enumRequiredEva')">Enum Required Eva</span>
                    </dt>
                    <dd>
                        <span v-text="$t('jhipsterApp.EnumRequiredFieldClass.' + fieldTestMapstructEntity.enumRequiredEva)">{{fieldTestMapstructEntity.enumRequiredEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.uuidEva')">Uuid Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.uuidEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.uuidRequiredEva')">Uuid Required Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.uuidRequiredEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteImageEva')">Byte Image Eva</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestMapstructEntity.byteImageEva">
                            <a v-on:click="openFile(fieldTestMapstructEntity.byteImageEvaContentType, fieldTestMapstructEntity.byteImageEva)">
                                <img v-bind:src="'data:' + fieldTestMapstructEntity.byteImageEvaContentType + ';base64,' + fieldTestMapstructEntity.byteImageEva" style="max-width: 100%;" alt="fieldTestMapstructEntity image"/>
                            </a>
                            {{fieldTestMapstructEntity.byteImageEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteImageEva)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteImageRequiredEva')">Byte Image Required Eva</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestMapstructEntity.byteImageRequiredEva">
                            <a v-on:click="openFile(fieldTestMapstructEntity.byteImageRequiredEvaContentType, fieldTestMapstructEntity.byteImageRequiredEva)">
                                <img v-bind:src="'data:' + fieldTestMapstructEntity.byteImageRequiredEvaContentType + ';base64,' + fieldTestMapstructEntity.byteImageRequiredEva" style="max-width: 100%;" alt="fieldTestMapstructEntity image"/>
                            </a>
                            {{fieldTestMapstructEntity.byteImageRequiredEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteImageRequiredEva)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteImageMinbytesEva')">Byte Image Minbytes Eva</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestMapstructEntity.byteImageMinbytesEva">
                            <a v-on:click="openFile(fieldTestMapstructEntity.byteImageMinbytesEvaContentType, fieldTestMapstructEntity.byteImageMinbytesEva)">
                                <img v-bind:src="'data:' + fieldTestMapstructEntity.byteImageMinbytesEvaContentType + ';base64,' + fieldTestMapstructEntity.byteImageMinbytesEva" style="max-width: 100%;" alt="fieldTestMapstructEntity image"/>
                            </a>
                            {{fieldTestMapstructEntity.byteImageMinbytesEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteImageMinbytesEva)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteImageMaxbytesEva')">Byte Image Maxbytes Eva</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestMapstructEntity.byteImageMaxbytesEva">
                            <a v-on:click="openFile(fieldTestMapstructEntity.byteImageMaxbytesEvaContentType, fieldTestMapstructEntity.byteImageMaxbytesEva)">
                                <img v-bind:src="'data:' + fieldTestMapstructEntity.byteImageMaxbytesEvaContentType + ';base64,' + fieldTestMapstructEntity.byteImageMaxbytesEva" style="max-width: 100%;" alt="fieldTestMapstructEntity image"/>
                            </a>
                            {{fieldTestMapstructEntity.byteImageMaxbytesEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteImageMaxbytesEva)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteAnyEva')">Byte Any Eva</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestMapstructEntity.byteAnyEva">
                            <a v-on:click="openFile(fieldTestMapstructEntity.byteAnyEvaContentType, fieldTestMapstructEntity.byteAnyEva)" v-text="$t('entity.action.open')">open</a>
                            {{fieldTestMapstructEntity.byteAnyEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteAnyEva)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteAnyRequiredEva')">Byte Any Required Eva</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestMapstructEntity.byteAnyRequiredEva">
                            <a v-on:click="openFile(fieldTestMapstructEntity.byteAnyRequiredEvaContentType, fieldTestMapstructEntity.byteAnyRequiredEva)" v-text="$t('entity.action.open')">open</a>
                            {{fieldTestMapstructEntity.byteAnyRequiredEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteAnyRequiredEva)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteAnyMinbytesEva')">Byte Any Minbytes Eva</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestMapstructEntity.byteAnyMinbytesEva">
                            <a v-on:click="openFile(fieldTestMapstructEntity.byteAnyMinbytesEvaContentType, fieldTestMapstructEntity.byteAnyMinbytesEva)" v-text="$t('entity.action.open')">open</a>
                            {{fieldTestMapstructEntity.byteAnyMinbytesEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteAnyMinbytesEva)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteAnyMaxbytesEva')">Byte Any Maxbytes Eva</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestMapstructEntity.byteAnyMaxbytesEva">
                            <a v-on:click="openFile(fieldTestMapstructEntity.byteAnyMaxbytesEvaContentType, fieldTestMapstructEntity.byteAnyMaxbytesEva)" v-text="$t('entity.action.open')">open</a>
                            {{fieldTestMapstructEntity.byteAnyMaxbytesEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteAnyMaxbytesEva)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteTextEva')">Byte Text Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.byteTextEva}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteTextRequiredEva')">Byte Text Required Eva</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestMapstructEntity.byteTextRequiredEva}}</span>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>
                <router-link v-if="fieldTestMapstructEntity.id" :to="{name: 'FieldTestMapstructEntityEdit', params: {fieldTestMapstructEntityId: fieldTestMapstructEntity.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./field-test-mapstruct-entity-details.component.ts">
</script>
