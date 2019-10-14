<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="jhipsterApp.fieldTestMapstructEntity.home.createOrEditLabel" v-text="$t('jhipsterApp.fieldTestMapstructEntity.home.createOrEditLabel')">Create or edit a FieldTestMapstructEntity</h2>
                <div>
                    <div class="form-group" v-if="fieldTestMapstructEntity.id">
                        <label for="id" v-text="$t('global.field.id')">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="fieldTestMapstructEntity.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringEva')" for="field-test-mapstruct-entity-stringEva">String Eva</label>
                        <input type="text" class="form-control" name="stringEva" id="field-test-mapstruct-entity-stringEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.stringEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.stringEva.$invalid }" v-model="$v.fieldTestMapstructEntity.stringEva.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringRequiredEva')" for="field-test-mapstruct-entity-stringRequiredEva">String Required Eva</label>
                        <input type="text" class="form-control" name="stringRequiredEva" id="field-test-mapstruct-entity-stringRequiredEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.stringRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.stringRequiredEva.$invalid }" v-model="$v.fieldTestMapstructEntity.stringRequiredEva.$model"  required/>
                        <div v-if="$v.fieldTestMapstructEntity.stringRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.stringRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.stringRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringMinlengthEva')" for="field-test-mapstruct-entity-stringMinlengthEva">String Minlength Eva</label>
                        <input type="text" class="form-control" name="stringMinlengthEva" id="field-test-mapstruct-entity-stringMinlengthEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.stringMinlengthEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.stringMinlengthEva.$invalid }" v-model="$v.fieldTestMapstructEntity.stringMinlengthEva.$model" />
                        <div v-if="$v.fieldTestMapstructEntity.stringMinlengthEva.$anyDirty && $v.fieldTestMapstructEntity.stringMinlengthEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.stringMinlengthEva.minLength" v-bind:value="$t('entity.validation.minlength')">
                                This field is required to be at least 0 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringMaxlengthEva')" for="field-test-mapstruct-entity-stringMaxlengthEva">String Maxlength Eva</label>
                        <input type="text" class="form-control" name="stringMaxlengthEva" id="field-test-mapstruct-entity-stringMaxlengthEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.stringMaxlengthEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.stringMaxlengthEva.$invalid }" v-model="$v.fieldTestMapstructEntity.stringMaxlengthEva.$model" />
                        <div v-if="$v.fieldTestMapstructEntity.stringMaxlengthEva.$anyDirty && $v.fieldTestMapstructEntity.stringMaxlengthEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.stringMaxlengthEva.maxLength" v-bind:value="$t('entity.validation.maxlength')">
                                This field cannot be longer than 20 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.stringPatternEva')" for="field-test-mapstruct-entity-stringPatternEva">String Pattern Eva</label>
                        <input type="text" class="form-control" name="stringPatternEva" id="field-test-mapstruct-entity-stringPatternEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.stringPatternEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.stringPatternEva.$invalid }" v-model="$v.fieldTestMapstructEntity.stringPatternEva.$model" />
                        <div v-if="$v.fieldTestMapstructEntity.stringPatternEva.$anyDirty && $v.fieldTestMapstructEntity.stringPatternEva.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.integerEva')" for="field-test-mapstruct-entity-integerEva">Integer Eva</label>
                        <input type="number" class="form-control" name="integerEva" id="field-test-mapstruct-entity-integerEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.integerEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.integerEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.integerEva.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.integerRequiredEva')" for="field-test-mapstruct-entity-integerRequiredEva">Integer Required Eva</label>
                        <input type="number" class="form-control" name="integerRequiredEva" id="field-test-mapstruct-entity-integerRequiredEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.integerRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.integerRequiredEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.integerRequiredEva.$model"  required/>
                        <div v-if="$v.fieldTestMapstructEntity.integerRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.integerRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.integerRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.integerRequiredEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.integerMinEva')" for="field-test-mapstruct-entity-integerMinEva">Integer Min Eva</label>
                        <input type="number" class="form-control" name="integerMinEva" id="field-test-mapstruct-entity-integerMinEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.integerMinEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.integerMinEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.integerMinEva.$model" />
                        <div v-if="$v.fieldTestMapstructEntity.integerMinEva.$anyDirty && $v.fieldTestMapstructEntity.integerMinEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.integerMinEva.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.integerMinEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.integerMaxEva')" for="field-test-mapstruct-entity-integerMaxEva">Integer Max Eva</label>
                        <input type="number" class="form-control" name="integerMaxEva" id="field-test-mapstruct-entity-integerMaxEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.integerMaxEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.integerMaxEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.integerMaxEva.$model" />
                        <div v-if="$v.fieldTestMapstructEntity.integerMaxEva.$anyDirty && $v.fieldTestMapstructEntity.integerMaxEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.integerMaxEva.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.integerMaxEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.longEva')" for="field-test-mapstruct-entity-longEva">Long Eva</label>
                        <input type="number" class="form-control" name="longEva" id="field-test-mapstruct-entity-longEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.longEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.longEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.longEva.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.longRequiredEva')" for="field-test-mapstruct-entity-longRequiredEva">Long Required Eva</label>
                        <input type="number" class="form-control" name="longRequiredEva" id="field-test-mapstruct-entity-longRequiredEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.longRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.longRequiredEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.longRequiredEva.$model"  required/>
                        <div v-if="$v.fieldTestMapstructEntity.longRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.longRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.longRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.longRequiredEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.longMinEva')" for="field-test-mapstruct-entity-longMinEva">Long Min Eva</label>
                        <input type="number" class="form-control" name="longMinEva" id="field-test-mapstruct-entity-longMinEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.longMinEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.longMinEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.longMinEva.$model" />
                        <div v-if="$v.fieldTestMapstructEntity.longMinEva.$anyDirty && $v.fieldTestMapstructEntity.longMinEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.longMinEva.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.longMinEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.longMaxEva')" for="field-test-mapstruct-entity-longMaxEva">Long Max Eva</label>
                        <input type="number" class="form-control" name="longMaxEva" id="field-test-mapstruct-entity-longMaxEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.longMaxEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.longMaxEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.longMaxEva.$model" />
                        <div v-if="$v.fieldTestMapstructEntity.longMaxEva.$anyDirty && $v.fieldTestMapstructEntity.longMaxEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.longMaxEva.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.longMaxEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.floatEva')" for="field-test-mapstruct-entity-floatEva">Float Eva</label>
                        <input type="number" class="form-control" name="floatEva" id="field-test-mapstruct-entity-floatEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.floatEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.floatEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.floatEva.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.floatRequiredEva')" for="field-test-mapstruct-entity-floatRequiredEva">Float Required Eva</label>
                        <input type="number" class="form-control" name="floatRequiredEva" id="field-test-mapstruct-entity-floatRequiredEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.floatRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.floatRequiredEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.floatRequiredEva.$model"  required/>
                        <div v-if="$v.fieldTestMapstructEntity.floatRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.floatRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.floatRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.floatRequiredEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.floatMinEva')" for="field-test-mapstruct-entity-floatMinEva">Float Min Eva</label>
                        <input type="number" class="form-control" name="floatMinEva" id="field-test-mapstruct-entity-floatMinEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.floatMinEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.floatMinEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.floatMinEva.$model" />
                        <div v-if="$v.fieldTestMapstructEntity.floatMinEva.$anyDirty && $v.fieldTestMapstructEntity.floatMinEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.floatMinEva.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.floatMinEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.floatMaxEva')" for="field-test-mapstruct-entity-floatMaxEva">Float Max Eva</label>
                        <input type="number" class="form-control" name="floatMaxEva" id="field-test-mapstruct-entity-floatMaxEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.floatMaxEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.floatMaxEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.floatMaxEva.$model" />
                        <div v-if="$v.fieldTestMapstructEntity.floatMaxEva.$anyDirty && $v.fieldTestMapstructEntity.floatMaxEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.floatMaxEva.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.floatMaxEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.doubleRequiredEva')" for="field-test-mapstruct-entity-doubleRequiredEva">Double Required Eva</label>
                        <input type="number" class="form-control" name="doubleRequiredEva" id="field-test-mapstruct-entity-doubleRequiredEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.doubleRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.doubleRequiredEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.doubleRequiredEva.$model"  required/>
                        <div v-if="$v.fieldTestMapstructEntity.doubleRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.doubleRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.doubleRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.doubleRequiredEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.doubleMinEva')" for="field-test-mapstruct-entity-doubleMinEva">Double Min Eva</label>
                        <input type="number" class="form-control" name="doubleMinEva" id="field-test-mapstruct-entity-doubleMinEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.doubleMinEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.doubleMinEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.doubleMinEva.$model" />
                        <div v-if="$v.fieldTestMapstructEntity.doubleMinEva.$anyDirty && $v.fieldTestMapstructEntity.doubleMinEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.doubleMinEva.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.doubleMinEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.doubleMaxEva')" for="field-test-mapstruct-entity-doubleMaxEva">Double Max Eva</label>
                        <input type="number" class="form-control" name="doubleMaxEva" id="field-test-mapstruct-entity-doubleMaxEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.doubleMaxEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.doubleMaxEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.doubleMaxEva.$model" />
                        <div v-if="$v.fieldTestMapstructEntity.doubleMaxEva.$anyDirty && $v.fieldTestMapstructEntity.doubleMaxEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.doubleMaxEva.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.doubleMaxEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.bigDecimalRequiredEva')" for="field-test-mapstruct-entity-bigDecimalRequiredEva">Big Decimal Required Eva</label>
                        <input type="number" class="form-control" name="bigDecimalRequiredEva" id="field-test-mapstruct-entity-bigDecimalRequiredEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.bigDecimalRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.bigDecimalRequiredEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.bigDecimalRequiredEva.$model"  required/>
                        <div v-if="$v.fieldTestMapstructEntity.bigDecimalRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.bigDecimalRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.bigDecimalRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.bigDecimalRequiredEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.bigDecimalMinEva')" for="field-test-mapstruct-entity-bigDecimalMinEva">Big Decimal Min Eva</label>
                        <input type="number" class="form-control" name="bigDecimalMinEva" id="field-test-mapstruct-entity-bigDecimalMinEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.bigDecimalMinEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.bigDecimalMinEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.bigDecimalMinEva.$model" />
                        <div v-if="$v.fieldTestMapstructEntity.bigDecimalMinEva.$anyDirty && $v.fieldTestMapstructEntity.bigDecimalMinEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.bigDecimalMinEva.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.bigDecimalMinEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.bigDecimalMaxEva')" for="field-test-mapstruct-entity-bigDecimalMaxEva">Big Decimal Max Eva</label>
                        <input type="number" class="form-control" name="bigDecimalMaxEva" id="field-test-mapstruct-entity-bigDecimalMaxEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.bigDecimalMaxEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.bigDecimalMaxEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.bigDecimalMaxEva.$model" />
                        <div v-if="$v.fieldTestMapstructEntity.bigDecimalMaxEva.$anyDirty && $v.fieldTestMapstructEntity.bigDecimalMaxEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.bigDecimalMaxEva.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.bigDecimalMaxEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.localDateEva')" for="field-test-mapstruct-entity-localDateEva">Local Date Eva</label>
                        <div class="input-group">
                            <input id="field-test-mapstruct-entity-localDateEva" type="date" class="form-control" name="localDateEva"  :class="{'valid': !$v.fieldTestMapstructEntity.localDateEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.localDateEva.$invalid }"
                            v-model="$v.fieldTestMapstructEntity.localDateEva.$model"  />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.localDateRequiredEva')" for="field-test-mapstruct-entity-localDateRequiredEva">Local Date Required Eva</label>
                        <div class="input-group">
                            <input id="field-test-mapstruct-entity-localDateRequiredEva" type="date" class="form-control" name="localDateRequiredEva"  :class="{'valid': !$v.fieldTestMapstructEntity.localDateRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.localDateRequiredEva.$invalid }"
                            v-model="$v.fieldTestMapstructEntity.localDateRequiredEva.$model"  required />
                        </div>
                        <div v-if="$v.fieldTestMapstructEntity.localDateRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.localDateRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.localDateRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.instantEva')" for="field-test-mapstruct-entity-instantEva">Instant Eva</label>
                        <div class="d-flex">
                            <input id="field-test-mapstruct-entity-instantEva" type="datetime-local" class="form-control" name="instantEva" :class="{'valid': !$v.fieldTestMapstructEntity.instantEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.instantEva.$invalid }"
                            
                            :value="convertDateTimeFromServer($v.fieldTestMapstructEntity.instantEva.$model)"
                            @change="updateInstantField('instantEva', $event)"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.instanteRequiredEva')" for="field-test-mapstruct-entity-instanteRequiredEva">Instante Required Eva</label>
                        <div class="d-flex">
                            <input id="field-test-mapstruct-entity-instanteRequiredEva" type="datetime-local" class="form-control" name="instanteRequiredEva" :class="{'valid': !$v.fieldTestMapstructEntity.instanteRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.instanteRequiredEva.$invalid }"
                             required
                            :value="convertDateTimeFromServer($v.fieldTestMapstructEntity.instanteRequiredEva.$model)"
                            @change="updateInstantField('instanteRequiredEva', $event)"/>
                        </div>
                        <div v-if="$v.fieldTestMapstructEntity.instanteRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.instanteRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.instanteRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.instanteRequiredEva.ZonedDateTimelocal" v-text="$t('entity.validation.ZonedDateTimelocal')">
                                This field should be a date and time.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.zonedDateTimeEva')" for="field-test-mapstruct-entity-zonedDateTimeEva">Zoned Date Time Eva</label>
                        <div class="d-flex">
                            <input id="field-test-mapstruct-entity-zonedDateTimeEva" type="datetime-local" class="form-control" name="zonedDateTimeEva" :class="{'valid': !$v.fieldTestMapstructEntity.zonedDateTimeEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.zonedDateTimeEva.$invalid }"
                            
                            :value="convertDateTimeFromServer($v.fieldTestMapstructEntity.zonedDateTimeEva.$model)"
                            @change="updateZonedDateTimeField('zonedDateTimeEva', $event)"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.zonedDateTimeRequiredEva')" for="field-test-mapstruct-entity-zonedDateTimeRequiredEva">Zoned Date Time Required Eva</label>
                        <div class="d-flex">
                            <input id="field-test-mapstruct-entity-zonedDateTimeRequiredEva" type="datetime-local" class="form-control" name="zonedDateTimeRequiredEva" :class="{'valid': !$v.fieldTestMapstructEntity.zonedDateTimeRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.zonedDateTimeRequiredEva.$invalid }"
                             required
                            :value="convertDateTimeFromServer($v.fieldTestMapstructEntity.zonedDateTimeRequiredEva.$model)"
                            @change="updateZonedDateTimeField('zonedDateTimeRequiredEva', $event)"/>
                        </div>
                        <div v-if="$v.fieldTestMapstructEntity.zonedDateTimeRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.zonedDateTimeRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.zonedDateTimeRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.zonedDateTimeRequiredEva.ZonedDateTimelocal" v-text="$t('entity.validation.ZonedDateTimelocal')">
                                This field should be a date and time.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.durationEva')" for="field-test-mapstruct-entity-durationEva">Duration Eva</label>
                        <input type="number" class="form-control" name="durationEva" id="field-test-mapstruct-entity-durationEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.durationEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.durationEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.durationEva.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.durationRequiredEva')" for="field-test-mapstruct-entity-durationRequiredEva">Duration Required Eva</label>
                        <input type="number" class="form-control" name="durationRequiredEva" id="field-test-mapstruct-entity-durationRequiredEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.durationRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.durationRequiredEva.$invalid }" v-model.number="$v.fieldTestMapstructEntity.durationRequiredEva.$model"  required/>
                        <div v-if="$v.fieldTestMapstructEntity.durationRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.durationRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.durationRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.durationRequiredEva.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.booleanEva')" for="field-test-mapstruct-entity-booleanEva">Boolean Eva</label>
                        <input type="checkbox" class="form-check" name="booleanEva" id="field-test-mapstruct-entity-booleanEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.booleanEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.booleanEva.$invalid }" v-model="$v.fieldTestMapstructEntity.booleanEva.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.booleanRequiredEva')" for="field-test-mapstruct-entity-booleanRequiredEva">Boolean Required Eva</label>
                        <input type="checkbox" class="form-check" name="booleanRequiredEva" id="field-test-mapstruct-entity-booleanRequiredEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.booleanRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.booleanRequiredEva.$invalid }" v-model="$v.fieldTestMapstructEntity.booleanRequiredEva.$model"  required/>
                        <div v-if="$v.fieldTestMapstructEntity.booleanRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.booleanRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.booleanRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.enumEva')" for="field-test-mapstruct-entity-enumEva">Enum Eva</label>
                        <select class="form-control" name="enumEva" :class="{'valid': !$v.fieldTestMapstructEntity.enumEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.enumEva.$invalid }" v-model="$v.fieldTestMapstructEntity.enumEva.$model" id="field-test-mapstruct-entity-enumEva" >
                            <option value="ENUM_VALUE_1" v-bind:label="$t('jhipsterApp.EnumFieldClass.ENUM_VALUE_1')">ENUM_VALUE_1</option>
                            <option value="ENUM_VALUE_2" v-bind:label="$t('jhipsterApp.EnumFieldClass.ENUM_VALUE_2')">ENUM_VALUE_2</option>
                            <option value="ENUM_VALUE_3" v-bind:label="$t('jhipsterApp.EnumFieldClass.ENUM_VALUE_3')">ENUM_VALUE_3</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.enumRequiredEva')" for="field-test-mapstruct-entity-enumRequiredEva">Enum Required Eva</label>
                        <select class="form-control" name="enumRequiredEva" :class="{'valid': !$v.fieldTestMapstructEntity.enumRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.enumRequiredEva.$invalid }" v-model="$v.fieldTestMapstructEntity.enumRequiredEva.$model" id="field-test-mapstruct-entity-enumRequiredEva"  required>
                            <option value="ENUM_VALUE_1" v-bind:label="$t('jhipsterApp.EnumRequiredFieldClass.ENUM_VALUE_1')">ENUM_VALUE_1</option>
                            <option value="ENUM_VALUE_2" v-bind:label="$t('jhipsterApp.EnumRequiredFieldClass.ENUM_VALUE_2')">ENUM_VALUE_2</option>
                            <option value="ENUM_VALUE_3" v-bind:label="$t('jhipsterApp.EnumRequiredFieldClass.ENUM_VALUE_3')">ENUM_VALUE_3</option>
                        </select>
                        <div v-if="$v.fieldTestMapstructEntity.enumRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.enumRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.enumRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.uuidEva')" for="field-test-mapstruct-entity-uuidEva">Uuid Eva</label>
                        <input type="text" class="form-control" name="uuidEva" id="field-test-mapstruct-entity-uuidEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.uuidEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.uuidEva.$invalid }" v-model="$v.fieldTestMapstructEntity.uuidEva.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.uuidRequiredEva')" for="field-test-mapstruct-entity-uuidRequiredEva">Uuid Required Eva</label>
                        <input type="text" class="form-control" name="uuidRequiredEva" id="field-test-mapstruct-entity-uuidRequiredEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.uuidRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.uuidRequiredEva.$invalid }" v-model="$v.fieldTestMapstructEntity.uuidRequiredEva.$model"  required/>
                        <div v-if="$v.fieldTestMapstructEntity.uuidRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.uuidRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.uuidRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteImageEva')" for="field-test-mapstruct-entity-byteImageEva">Byte Image Eva</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestMapstructEntity.byteImageEvaContentType + ';base64,' + fieldTestMapstructEntity.byteImageEva" style="max-height: 100px;" v-if="fieldTestMapstructEntity.byteImageEva" alt="fieldTestMapstructEntity image"/>
                            <div v-if="fieldTestMapstructEntity.byteImageEva" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestMapstructEntity.byteImageEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteImageEva)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageEva', 'byteImageEvaContentType', 'file_byteImageEva')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageEva" id="file_byteImageEva" v-on:change="setFileData($event, fieldTestMapstructEntity, 'byteImageEva', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageEva" id="field-test-mapstruct-entity-byteImageEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.byteImageEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.byteImageEva.$invalid }" v-model="$v.fieldTestMapstructEntity.byteImageEva.$model" />
                        <input type="hidden" class="form-control" name="byteImageEvaContentType" id="field-test-mapstruct-entity-byteImageEvaContentType"
                            v-model="fieldTestMapstructEntity.byteImageEvaContentType" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteImageRequiredEva')" for="field-test-mapstruct-entity-byteImageRequiredEva">Byte Image Required Eva</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestMapstructEntity.byteImageRequiredEvaContentType + ';base64,' + fieldTestMapstructEntity.byteImageRequiredEva" style="max-height: 100px;" v-if="fieldTestMapstructEntity.byteImageRequiredEva" alt="fieldTestMapstructEntity image"/>
                            <div v-if="fieldTestMapstructEntity.byteImageRequiredEva" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestMapstructEntity.byteImageRequiredEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteImageRequiredEva)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageRequiredEva', 'byteImageRequiredEvaContentType', 'file_byteImageRequiredEva')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageRequiredEva" id="file_byteImageRequiredEva" v-on:change="setFileData($event, fieldTestMapstructEntity, 'byteImageRequiredEva', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageRequiredEva" id="field-test-mapstruct-entity-byteImageRequiredEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.byteImageRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.byteImageRequiredEva.$invalid }" v-model="$v.fieldTestMapstructEntity.byteImageRequiredEva.$model"  required/>
                        <input type="hidden" class="form-control" name="byteImageRequiredEvaContentType" id="field-test-mapstruct-entity-byteImageRequiredEvaContentType"
                            v-model="fieldTestMapstructEntity.byteImageRequiredEvaContentType" />
                        <div v-if="$v.fieldTestMapstructEntity.byteImageRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.byteImageRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.byteImageRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteImageMinbytesEva')" for="field-test-mapstruct-entity-byteImageMinbytesEva">Byte Image Minbytes Eva</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestMapstructEntity.byteImageMinbytesEvaContentType + ';base64,' + fieldTestMapstructEntity.byteImageMinbytesEva" style="max-height: 100px;" v-if="fieldTestMapstructEntity.byteImageMinbytesEva" alt="fieldTestMapstructEntity image"/>
                            <div v-if="fieldTestMapstructEntity.byteImageMinbytesEva" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestMapstructEntity.byteImageMinbytesEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteImageMinbytesEva)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageMinbytesEva', 'byteImageMinbytesEvaContentType', 'file_byteImageMinbytesEva')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageMinbytesEva" id="file_byteImageMinbytesEva" v-on:change="setFileData($event, fieldTestMapstructEntity, 'byteImageMinbytesEva', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageMinbytesEva" id="field-test-mapstruct-entity-byteImageMinbytesEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.byteImageMinbytesEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.byteImageMinbytesEva.$invalid }" v-model="$v.fieldTestMapstructEntity.byteImageMinbytesEva.$model" />
                        <input type="hidden" class="form-control" name="byteImageMinbytesEvaContentType" id="field-test-mapstruct-entity-byteImageMinbytesEvaContentType"
                            v-model="fieldTestMapstructEntity.byteImageMinbytesEvaContentType" />
                        <div v-if="$v.fieldTestMapstructEntity.byteImageMinbytesEva.$anyDirty && $v.fieldTestMapstructEntity.byteImageMinbytesEva.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteImageMaxbytesEva')" for="field-test-mapstruct-entity-byteImageMaxbytesEva">Byte Image Maxbytes Eva</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestMapstructEntity.byteImageMaxbytesEvaContentType + ';base64,' + fieldTestMapstructEntity.byteImageMaxbytesEva" style="max-height: 100px;" v-if="fieldTestMapstructEntity.byteImageMaxbytesEva" alt="fieldTestMapstructEntity image"/>
                            <div v-if="fieldTestMapstructEntity.byteImageMaxbytesEva" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestMapstructEntity.byteImageMaxbytesEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteImageMaxbytesEva)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageMaxbytesEva', 'byteImageMaxbytesEvaContentType', 'file_byteImageMaxbytesEva')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageMaxbytesEva" id="file_byteImageMaxbytesEva" v-on:change="setFileData($event, fieldTestMapstructEntity, 'byteImageMaxbytesEva', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageMaxbytesEva" id="field-test-mapstruct-entity-byteImageMaxbytesEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.byteImageMaxbytesEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.byteImageMaxbytesEva.$invalid }" v-model="$v.fieldTestMapstructEntity.byteImageMaxbytesEva.$model" />
                        <input type="hidden" class="form-control" name="byteImageMaxbytesEvaContentType" id="field-test-mapstruct-entity-byteImageMaxbytesEvaContentType"
                            v-model="fieldTestMapstructEntity.byteImageMaxbytesEvaContentType" />
                        <div v-if="$v.fieldTestMapstructEntity.byteImageMaxbytesEva.$anyDirty && $v.fieldTestMapstructEntity.byteImageMaxbytesEva.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteAnyEva')" for="field-test-mapstruct-entity-byteAnyEva">Byte Any Eva</label>
                        <div>
                            <div v-if="fieldTestMapstructEntity.byteAnyEva" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestMapstructEntity.byteAnyEvaContentType, fieldTestMapstructEntity.byteAnyEva)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestMapstructEntity.byteAnyEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteAnyEva)}}</span>
                                <button type="button" v-on:click="fieldTestMapstructEntity.byteAnyEva=null;fieldTestMapstructEntity.byteAnyEvaContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyEva" id="file_byteAnyEva" v-on:change="setFileData($event, fieldTestMapstructEntity, 'byteAnyEva', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyEva" id="field-test-mapstruct-entity-byteAnyEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.byteAnyEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.byteAnyEva.$invalid }" v-model="$v.fieldTestMapstructEntity.byteAnyEva.$model" />
                        <input type="hidden" class="form-control" name="byteAnyEvaContentType" id="field-test-mapstruct-entity-byteAnyEvaContentType"
                            v-model="fieldTestMapstructEntity.byteAnyEvaContentType" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteAnyRequiredEva')" for="field-test-mapstruct-entity-byteAnyRequiredEva">Byte Any Required Eva</label>
                        <div>
                            <div v-if="fieldTestMapstructEntity.byteAnyRequiredEva" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestMapstructEntity.byteAnyRequiredEvaContentType, fieldTestMapstructEntity.byteAnyRequiredEva)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestMapstructEntity.byteAnyRequiredEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteAnyRequiredEva)}}</span>
                                <button type="button" v-on:click="fieldTestMapstructEntity.byteAnyRequiredEva=null;fieldTestMapstructEntity.byteAnyRequiredEvaContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyRequiredEva" id="file_byteAnyRequiredEva" v-on:change="setFileData($event, fieldTestMapstructEntity, 'byteAnyRequiredEva', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyRequiredEva" id="field-test-mapstruct-entity-byteAnyRequiredEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.byteAnyRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.byteAnyRequiredEva.$invalid }" v-model="$v.fieldTestMapstructEntity.byteAnyRequiredEva.$model"  required/>
                        <input type="hidden" class="form-control" name="byteAnyRequiredEvaContentType" id="field-test-mapstruct-entity-byteAnyRequiredEvaContentType"
                            v-model="fieldTestMapstructEntity.byteAnyRequiredEvaContentType" />
                        <div v-if="$v.fieldTestMapstructEntity.byteAnyRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.byteAnyRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.byteAnyRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteAnyMinbytesEva')" for="field-test-mapstruct-entity-byteAnyMinbytesEva">Byte Any Minbytes Eva</label>
                        <div>
                            <div v-if="fieldTestMapstructEntity.byteAnyMinbytesEva" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestMapstructEntity.byteAnyMinbytesEvaContentType, fieldTestMapstructEntity.byteAnyMinbytesEva)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestMapstructEntity.byteAnyMinbytesEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteAnyMinbytesEva)}}</span>
                                <button type="button" v-on:click="fieldTestMapstructEntity.byteAnyMinbytesEva=null;fieldTestMapstructEntity.byteAnyMinbytesEvaContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyMinbytesEva" id="file_byteAnyMinbytesEva" v-on:change="setFileData($event, fieldTestMapstructEntity, 'byteAnyMinbytesEva', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyMinbytesEva" id="field-test-mapstruct-entity-byteAnyMinbytesEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.byteAnyMinbytesEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.byteAnyMinbytesEva.$invalid }" v-model="$v.fieldTestMapstructEntity.byteAnyMinbytesEva.$model" />
                        <input type="hidden" class="form-control" name="byteAnyMinbytesEvaContentType" id="field-test-mapstruct-entity-byteAnyMinbytesEvaContentType"
                            v-model="fieldTestMapstructEntity.byteAnyMinbytesEvaContentType" />
                        <div v-if="$v.fieldTestMapstructEntity.byteAnyMinbytesEva.$anyDirty && $v.fieldTestMapstructEntity.byteAnyMinbytesEva.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteAnyMaxbytesEva')" for="field-test-mapstruct-entity-byteAnyMaxbytesEva">Byte Any Maxbytes Eva</label>
                        <div>
                            <div v-if="fieldTestMapstructEntity.byteAnyMaxbytesEva" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestMapstructEntity.byteAnyMaxbytesEvaContentType, fieldTestMapstructEntity.byteAnyMaxbytesEva)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestMapstructEntity.byteAnyMaxbytesEvaContentType}}, {{byteSize(fieldTestMapstructEntity.byteAnyMaxbytesEva)}}</span>
                                <button type="button" v-on:click="fieldTestMapstructEntity.byteAnyMaxbytesEva=null;fieldTestMapstructEntity.byteAnyMaxbytesEvaContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyMaxbytesEva" id="file_byteAnyMaxbytesEva" v-on:change="setFileData($event, fieldTestMapstructEntity, 'byteAnyMaxbytesEva', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyMaxbytesEva" id="field-test-mapstruct-entity-byteAnyMaxbytesEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.byteAnyMaxbytesEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.byteAnyMaxbytesEva.$invalid }" v-model="$v.fieldTestMapstructEntity.byteAnyMaxbytesEva.$model" />
                        <input type="hidden" class="form-control" name="byteAnyMaxbytesEvaContentType" id="field-test-mapstruct-entity-byteAnyMaxbytesEvaContentType"
                            v-model="fieldTestMapstructEntity.byteAnyMaxbytesEvaContentType" />
                        <div v-if="$v.fieldTestMapstructEntity.byteAnyMaxbytesEva.$anyDirty && $v.fieldTestMapstructEntity.byteAnyMaxbytesEva.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteTextEva')" for="field-test-mapstruct-entity-byteTextEva">Byte Text Eva</label>
                        <textarea class="form-control" name="byteTextEva" id="field-test-mapstruct-entity-byteTextEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.byteTextEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.byteTextEva.$invalid }" v-model="$v.fieldTestMapstructEntity.byteTextEva.$model" ></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestMapstructEntity.byteTextRequiredEva')" for="field-test-mapstruct-entity-byteTextRequiredEva">Byte Text Required Eva</label>
                        <textarea class="form-control" name="byteTextRequiredEva" id="field-test-mapstruct-entity-byteTextRequiredEva"
                            :class="{'valid': !$v.fieldTestMapstructEntity.byteTextRequiredEva.$invalid, 'invalid': $v.fieldTestMapstructEntity.byteTextRequiredEva.$invalid }" v-model="$v.fieldTestMapstructEntity.byteTextRequiredEva.$model"  required></textarea>
                        <div v-if="$v.fieldTestMapstructEntity.byteTextRequiredEva.$anyDirty && $v.fieldTestMapstructEntity.byteTextRequiredEva.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestMapstructEntity.byteTextRequiredEva.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.cancel')">Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.fieldTestMapstructEntity.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./field-test-mapstruct-entity-update.component.ts">
</script>
