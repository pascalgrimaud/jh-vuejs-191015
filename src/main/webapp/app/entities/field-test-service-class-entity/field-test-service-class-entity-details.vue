<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="fieldTestServiceClassEntity">
                <h2 class="jh-entity-heading"><span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.detail.title')">FieldTestServiceClassEntity</span> {{fieldTestServiceClassEntity.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringBob')">String Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.stringBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringRequiredBob')">String Required Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.stringRequiredBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringMinlengthBob')">String Minlength Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.stringMinlengthBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringMaxlengthBob')">String Maxlength Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.stringMaxlengthBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringPatternBob')">String Pattern Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.stringPatternBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.integerBob')">Integer Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.integerBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.integerRequiredBob')">Integer Required Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.integerRequiredBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.integerMinBob')">Integer Min Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.integerMinBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.integerMaxBob')">Integer Max Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.integerMaxBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.longBob')">Long Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.longBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.longRequiredBob')">Long Required Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.longRequiredBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.longMinBob')">Long Min Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.longMinBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.longMaxBob')">Long Max Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.longMaxBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.floatBob')">Float Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.floatBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.floatRequiredBob')">Float Required Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.floatRequiredBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.floatMinBob')">Float Min Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.floatMinBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.floatMaxBob')">Float Max Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.floatMaxBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.doubleRequiredBob')">Double Required Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.doubleRequiredBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.doubleMinBob')">Double Min Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.doubleMinBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.doubleMaxBob')">Double Max Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.doubleMaxBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.bigDecimalRequiredBob')">Big Decimal Required Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.bigDecimalRequiredBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.bigDecimalMinBob')">Big Decimal Min Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.bigDecimalMinBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.bigDecimalMaxBob')">Big Decimal Max Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.bigDecimalMaxBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.localDateBob')">Local Date Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.localDateBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.localDateRequiredBob')">Local Date Required Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.localDateRequiredBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.instantBob')">Instant Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.instantBob | formatDate}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.instanteRequiredBob')">Instante Required Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.instanteRequiredBob | formatDate}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.zonedDateTimeBob')">Zoned Date Time Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.zonedDateTimeBob | formatDate}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.zonedDateTimeRequiredBob')">Zoned Date Time Required Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.zonedDateTimeRequiredBob | formatDate}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.durationBob')">Duration Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.durationBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.durationRequiredBob')">Duration Required Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.durationRequiredBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.booleanBob')">Boolean Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.booleanBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.booleanRequiredBob')">Boolean Required Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.booleanRequiredBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.enumBob')">Enum Bob</span>
                    </dt>
                    <dd>
                        <span v-text="$t('jhipsterApp.EnumFieldClass.' + fieldTestServiceClassEntity.enumBob)">{{fieldTestServiceClassEntity.enumBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.enumRequiredBob')">Enum Required Bob</span>
                    </dt>
                    <dd>
                        <span v-text="$t('jhipsterApp.EnumRequiredFieldClass.' + fieldTestServiceClassEntity.enumRequiredBob)">{{fieldTestServiceClassEntity.enumRequiredBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.uuidBob')">Uuid Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.uuidBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.uuidRequiredBob')">Uuid Required Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.uuidRequiredBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteImageBob')">Byte Image Bob</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestServiceClassEntity.byteImageBob">
                            <a v-on:click="openFile(fieldTestServiceClassEntity.byteImageBobContentType, fieldTestServiceClassEntity.byteImageBob)">
                                <img v-bind:src="'data:' + fieldTestServiceClassEntity.byteImageBobContentType + ';base64,' + fieldTestServiceClassEntity.byteImageBob" style="max-width: 100%;" alt="fieldTestServiceClassEntity image"/>
                            </a>
                            {{fieldTestServiceClassEntity.byteImageBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteImageBob)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteImageRequiredBob')">Byte Image Required Bob</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestServiceClassEntity.byteImageRequiredBob">
                            <a v-on:click="openFile(fieldTestServiceClassEntity.byteImageRequiredBobContentType, fieldTestServiceClassEntity.byteImageRequiredBob)">
                                <img v-bind:src="'data:' + fieldTestServiceClassEntity.byteImageRequiredBobContentType + ';base64,' + fieldTestServiceClassEntity.byteImageRequiredBob" style="max-width: 100%;" alt="fieldTestServiceClassEntity image"/>
                            </a>
                            {{fieldTestServiceClassEntity.byteImageRequiredBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteImageRequiredBob)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteImageMinbytesBob')">Byte Image Minbytes Bob</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestServiceClassEntity.byteImageMinbytesBob">
                            <a v-on:click="openFile(fieldTestServiceClassEntity.byteImageMinbytesBobContentType, fieldTestServiceClassEntity.byteImageMinbytesBob)">
                                <img v-bind:src="'data:' + fieldTestServiceClassEntity.byteImageMinbytesBobContentType + ';base64,' + fieldTestServiceClassEntity.byteImageMinbytesBob" style="max-width: 100%;" alt="fieldTestServiceClassEntity image"/>
                            </a>
                            {{fieldTestServiceClassEntity.byteImageMinbytesBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteImageMinbytesBob)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteImageMaxbytesBob')">Byte Image Maxbytes Bob</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestServiceClassEntity.byteImageMaxbytesBob">
                            <a v-on:click="openFile(fieldTestServiceClassEntity.byteImageMaxbytesBobContentType, fieldTestServiceClassEntity.byteImageMaxbytesBob)">
                                <img v-bind:src="'data:' + fieldTestServiceClassEntity.byteImageMaxbytesBobContentType + ';base64,' + fieldTestServiceClassEntity.byteImageMaxbytesBob" style="max-width: 100%;" alt="fieldTestServiceClassEntity image"/>
                            </a>
                            {{fieldTestServiceClassEntity.byteImageMaxbytesBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteImageMaxbytesBob)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteAnyBob')">Byte Any Bob</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestServiceClassEntity.byteAnyBob">
                            <a v-on:click="openFile(fieldTestServiceClassEntity.byteAnyBobContentType, fieldTestServiceClassEntity.byteAnyBob)" v-text="$t('entity.action.open')">open</a>
                            {{fieldTestServiceClassEntity.byteAnyBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteAnyBob)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteAnyRequiredBob')">Byte Any Required Bob</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestServiceClassEntity.byteAnyRequiredBob">
                            <a v-on:click="openFile(fieldTestServiceClassEntity.byteAnyRequiredBobContentType, fieldTestServiceClassEntity.byteAnyRequiredBob)" v-text="$t('entity.action.open')">open</a>
                            {{fieldTestServiceClassEntity.byteAnyRequiredBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteAnyRequiredBob)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteAnyMinbytesBob')">Byte Any Minbytes Bob</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestServiceClassEntity.byteAnyMinbytesBob">
                            <a v-on:click="openFile(fieldTestServiceClassEntity.byteAnyMinbytesBobContentType, fieldTestServiceClassEntity.byteAnyMinbytesBob)" v-text="$t('entity.action.open')">open</a>
                            {{fieldTestServiceClassEntity.byteAnyMinbytesBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteAnyMinbytesBob)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteAnyMaxbytesBob')">Byte Any Maxbytes Bob</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestServiceClassEntity.byteAnyMaxbytesBob">
                            <a v-on:click="openFile(fieldTestServiceClassEntity.byteAnyMaxbytesBobContentType, fieldTestServiceClassEntity.byteAnyMaxbytesBob)" v-text="$t('entity.action.open')">open</a>
                            {{fieldTestServiceClassEntity.byteAnyMaxbytesBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteAnyMaxbytesBob)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteTextBob')">Byte Text Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.byteTextBob}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteTextRequiredBob')">Byte Text Required Bob</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestServiceClassEntity.byteTextRequiredBob}}</span>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>
                <router-link v-if="fieldTestServiceClassEntity.id" :to="{name: 'FieldTestServiceClassEntityEdit', params: {fieldTestServiceClassEntityId: fieldTestServiceClassEntity.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./field-test-service-class-entity-details.component.ts">
</script>
