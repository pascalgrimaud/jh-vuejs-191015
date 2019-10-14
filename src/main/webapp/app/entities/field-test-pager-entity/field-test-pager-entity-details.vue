<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="fieldTestPagerEntity">
                <h2 class="jh-entity-heading"><span v-text="$t('jhipsterApp.fieldTestPagerEntity.detail.title')">FieldTestPagerEntity</span> {{fieldTestPagerEntity.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.stringJade')">String Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.stringJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.stringRequiredJade')">String Required Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.stringRequiredJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.stringMinlengthJade')">String Minlength Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.stringMinlengthJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.stringMaxlengthJade')">String Maxlength Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.stringMaxlengthJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.stringPatternJade')">String Pattern Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.stringPatternJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.integerJade')">Integer Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.integerJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.integerRequiredJade')">Integer Required Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.integerRequiredJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.integerMinJade')">Integer Min Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.integerMinJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.integerMaxJade')">Integer Max Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.integerMaxJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.longJade')">Long Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.longJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.longRequiredJade')">Long Required Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.longRequiredJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.longMinJade')">Long Min Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.longMinJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.longMaxJade')">Long Max Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.longMaxJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.floatJade')">Float Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.floatJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.floatRequiredJade')">Float Required Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.floatRequiredJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.floatMinJade')">Float Min Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.floatMinJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.floatMaxJade')">Float Max Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.floatMaxJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.doubleRequiredJade')">Double Required Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.doubleRequiredJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.doubleMinJade')">Double Min Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.doubleMinJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.doubleMaxJade')">Double Max Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.doubleMaxJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.bigDecimalRequiredJade')">Big Decimal Required Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.bigDecimalRequiredJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.bigDecimalMinJade')">Big Decimal Min Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.bigDecimalMinJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.bigDecimalMaxJade')">Big Decimal Max Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.bigDecimalMaxJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.localDateJade')">Local Date Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.localDateJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.localDateRequiredJade')">Local Date Required Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.localDateRequiredJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.instantJade')">Instant Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.instantJade | formatDate}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.instanteRequiredJade')">Instante Required Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.instanteRequiredJade | formatDate}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.zonedDateTimeJade')">Zoned Date Time Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.zonedDateTimeJade | formatDate}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.zonedDateTimeRequiredJade')">Zoned Date Time Required Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.zonedDateTimeRequiredJade | formatDate}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.durationJade')">Duration Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.durationJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.durationRequiredJade')">Duration Required Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.durationRequiredJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.booleanJade')">Boolean Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.booleanJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.booleanRequiredJade')">Boolean Required Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.booleanRequiredJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.enumJade')">Enum Jade</span>
                    </dt>
                    <dd>
                        <span v-text="$t('jhipsterApp.EnumFieldClass.' + fieldTestPagerEntity.enumJade)">{{fieldTestPagerEntity.enumJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.enumRequiredJade')">Enum Required Jade</span>
                    </dt>
                    <dd>
                        <span v-text="$t('jhipsterApp.EnumRequiredFieldClass.' + fieldTestPagerEntity.enumRequiredJade)">{{fieldTestPagerEntity.enumRequiredJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.uuidJade')">Uuid Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.uuidJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.uuidRequiredJade')">Uuid Required Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.uuidRequiredJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteImageJade')">Byte Image Jade</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestPagerEntity.byteImageJade">
                            <a v-on:click="openFile(fieldTestPagerEntity.byteImageJadeContentType, fieldTestPagerEntity.byteImageJade)">
                                <img v-bind:src="'data:' + fieldTestPagerEntity.byteImageJadeContentType + ';base64,' + fieldTestPagerEntity.byteImageJade" style="max-width: 100%;" alt="fieldTestPagerEntity image"/>
                            </a>
                            {{fieldTestPagerEntity.byteImageJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteImageJade)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteImageRequiredJade')">Byte Image Required Jade</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestPagerEntity.byteImageRequiredJade">
                            <a v-on:click="openFile(fieldTestPagerEntity.byteImageRequiredJadeContentType, fieldTestPagerEntity.byteImageRequiredJade)">
                                <img v-bind:src="'data:' + fieldTestPagerEntity.byteImageRequiredJadeContentType + ';base64,' + fieldTestPagerEntity.byteImageRequiredJade" style="max-width: 100%;" alt="fieldTestPagerEntity image"/>
                            </a>
                            {{fieldTestPagerEntity.byteImageRequiredJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteImageRequiredJade)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteImageMinbytesJade')">Byte Image Minbytes Jade</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestPagerEntity.byteImageMinbytesJade">
                            <a v-on:click="openFile(fieldTestPagerEntity.byteImageMinbytesJadeContentType, fieldTestPagerEntity.byteImageMinbytesJade)">
                                <img v-bind:src="'data:' + fieldTestPagerEntity.byteImageMinbytesJadeContentType + ';base64,' + fieldTestPagerEntity.byteImageMinbytesJade" style="max-width: 100%;" alt="fieldTestPagerEntity image"/>
                            </a>
                            {{fieldTestPagerEntity.byteImageMinbytesJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteImageMinbytesJade)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteImageMaxbytesJade')">Byte Image Maxbytes Jade</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestPagerEntity.byteImageMaxbytesJade">
                            <a v-on:click="openFile(fieldTestPagerEntity.byteImageMaxbytesJadeContentType, fieldTestPagerEntity.byteImageMaxbytesJade)">
                                <img v-bind:src="'data:' + fieldTestPagerEntity.byteImageMaxbytesJadeContentType + ';base64,' + fieldTestPagerEntity.byteImageMaxbytesJade" style="max-width: 100%;" alt="fieldTestPagerEntity image"/>
                            </a>
                            {{fieldTestPagerEntity.byteImageMaxbytesJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteImageMaxbytesJade)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteAnyJade')">Byte Any Jade</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestPagerEntity.byteAnyJade">
                            <a v-on:click="openFile(fieldTestPagerEntity.byteAnyJadeContentType, fieldTestPagerEntity.byteAnyJade)" v-text="$t('entity.action.open')">open</a>
                            {{fieldTestPagerEntity.byteAnyJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteAnyJade)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteAnyRequiredJade')">Byte Any Required Jade</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestPagerEntity.byteAnyRequiredJade">
                            <a v-on:click="openFile(fieldTestPagerEntity.byteAnyRequiredJadeContentType, fieldTestPagerEntity.byteAnyRequiredJade)" v-text="$t('entity.action.open')">open</a>
                            {{fieldTestPagerEntity.byteAnyRequiredJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteAnyRequiredJade)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteAnyMinbytesJade')">Byte Any Minbytes Jade</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestPagerEntity.byteAnyMinbytesJade">
                            <a v-on:click="openFile(fieldTestPagerEntity.byteAnyMinbytesJadeContentType, fieldTestPagerEntity.byteAnyMinbytesJade)" v-text="$t('entity.action.open')">open</a>
                            {{fieldTestPagerEntity.byteAnyMinbytesJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteAnyMinbytesJade)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteAnyMaxbytesJade')">Byte Any Maxbytes Jade</span>
                    </dt>
                    <dd>
                        <div v-if="fieldTestPagerEntity.byteAnyMaxbytesJade">
                            <a v-on:click="openFile(fieldTestPagerEntity.byteAnyMaxbytesJadeContentType, fieldTestPagerEntity.byteAnyMaxbytesJade)" v-text="$t('entity.action.open')">open</a>
                            {{fieldTestPagerEntity.byteAnyMaxbytesJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteAnyMaxbytesJade)}}
                        </div>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteTextJade')">Byte Text Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.byteTextJade}}</span>
                    </dd>
                    <dt>
                        <span v-text="$t('jhipsterApp.fieldTestPagerEntity.byteTextRequiredJade')">Byte Text Required Jade</span>
                    </dt>
                    <dd>
                        <span>{{fieldTestPagerEntity.byteTextRequiredJade}}</span>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>
                <router-link v-if="fieldTestPagerEntity.id" :to="{name: 'FieldTestPagerEntityEdit', params: {fieldTestPagerEntityId: fieldTestPagerEntity.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./field-test-pager-entity-details.component.ts">
</script>
