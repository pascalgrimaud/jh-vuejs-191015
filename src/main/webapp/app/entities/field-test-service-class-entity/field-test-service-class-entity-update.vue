<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="jhipsterApp.fieldTestServiceClassEntity.home.createOrEditLabel" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.home.createOrEditLabel')">Create or edit a FieldTestServiceClassEntity</h2>
                <div>
                    <div class="form-group" v-if="fieldTestServiceClassEntity.id">
                        <label for="id" v-text="$t('global.field.id')">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="fieldTestServiceClassEntity.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringBob')" for="field-test-service-class-entity-stringBob">String Bob</label>
                        <input type="text" class="form-control" name="stringBob" id="field-test-service-class-entity-stringBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.stringBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.stringBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.stringBob.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringRequiredBob')" for="field-test-service-class-entity-stringRequiredBob">String Required Bob</label>
                        <input type="text" class="form-control" name="stringRequiredBob" id="field-test-service-class-entity-stringRequiredBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.stringRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.stringRequiredBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.stringRequiredBob.$model"  required/>
                        <div v-if="$v.fieldTestServiceClassEntity.stringRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.stringRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.stringRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringMinlengthBob')" for="field-test-service-class-entity-stringMinlengthBob">String Minlength Bob</label>
                        <input type="text" class="form-control" name="stringMinlengthBob" id="field-test-service-class-entity-stringMinlengthBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.stringMinlengthBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.stringMinlengthBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.stringMinlengthBob.$model" />
                        <div v-if="$v.fieldTestServiceClassEntity.stringMinlengthBob.$anyDirty && $v.fieldTestServiceClassEntity.stringMinlengthBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.stringMinlengthBob.minLength" v-bind:value="$t('entity.validation.minlength')">
                                This field is required to be at least 0 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringMaxlengthBob')" for="field-test-service-class-entity-stringMaxlengthBob">String Maxlength Bob</label>
                        <input type="text" class="form-control" name="stringMaxlengthBob" id="field-test-service-class-entity-stringMaxlengthBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.stringMaxlengthBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.stringMaxlengthBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.stringMaxlengthBob.$model" />
                        <div v-if="$v.fieldTestServiceClassEntity.stringMaxlengthBob.$anyDirty && $v.fieldTestServiceClassEntity.stringMaxlengthBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.stringMaxlengthBob.maxLength" v-bind:value="$t('entity.validation.maxlength')">
                                This field cannot be longer than 20 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.stringPatternBob')" for="field-test-service-class-entity-stringPatternBob">String Pattern Bob</label>
                        <input type="text" class="form-control" name="stringPatternBob" id="field-test-service-class-entity-stringPatternBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.stringPatternBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.stringPatternBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.stringPatternBob.$model" />
                        <div v-if="$v.fieldTestServiceClassEntity.stringPatternBob.$anyDirty && $v.fieldTestServiceClassEntity.stringPatternBob.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.integerBob')" for="field-test-service-class-entity-integerBob">Integer Bob</label>
                        <input type="number" class="form-control" name="integerBob" id="field-test-service-class-entity-integerBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.integerBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.integerBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.integerBob.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.integerRequiredBob')" for="field-test-service-class-entity-integerRequiredBob">Integer Required Bob</label>
                        <input type="number" class="form-control" name="integerRequiredBob" id="field-test-service-class-entity-integerRequiredBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.integerRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.integerRequiredBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.integerRequiredBob.$model"  required/>
                        <div v-if="$v.fieldTestServiceClassEntity.integerRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.integerRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.integerRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.integerRequiredBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.integerMinBob')" for="field-test-service-class-entity-integerMinBob">Integer Min Bob</label>
                        <input type="number" class="form-control" name="integerMinBob" id="field-test-service-class-entity-integerMinBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.integerMinBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.integerMinBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.integerMinBob.$model" />
                        <div v-if="$v.fieldTestServiceClassEntity.integerMinBob.$anyDirty && $v.fieldTestServiceClassEntity.integerMinBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.integerMinBob.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.integerMinBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.integerMaxBob')" for="field-test-service-class-entity-integerMaxBob">Integer Max Bob</label>
                        <input type="number" class="form-control" name="integerMaxBob" id="field-test-service-class-entity-integerMaxBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.integerMaxBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.integerMaxBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.integerMaxBob.$model" />
                        <div v-if="$v.fieldTestServiceClassEntity.integerMaxBob.$anyDirty && $v.fieldTestServiceClassEntity.integerMaxBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.integerMaxBob.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.integerMaxBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.longBob')" for="field-test-service-class-entity-longBob">Long Bob</label>
                        <input type="number" class="form-control" name="longBob" id="field-test-service-class-entity-longBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.longBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.longBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.longBob.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.longRequiredBob')" for="field-test-service-class-entity-longRequiredBob">Long Required Bob</label>
                        <input type="number" class="form-control" name="longRequiredBob" id="field-test-service-class-entity-longRequiredBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.longRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.longRequiredBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.longRequiredBob.$model"  required/>
                        <div v-if="$v.fieldTestServiceClassEntity.longRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.longRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.longRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.longRequiredBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.longMinBob')" for="field-test-service-class-entity-longMinBob">Long Min Bob</label>
                        <input type="number" class="form-control" name="longMinBob" id="field-test-service-class-entity-longMinBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.longMinBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.longMinBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.longMinBob.$model" />
                        <div v-if="$v.fieldTestServiceClassEntity.longMinBob.$anyDirty && $v.fieldTestServiceClassEntity.longMinBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.longMinBob.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.longMinBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.longMaxBob')" for="field-test-service-class-entity-longMaxBob">Long Max Bob</label>
                        <input type="number" class="form-control" name="longMaxBob" id="field-test-service-class-entity-longMaxBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.longMaxBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.longMaxBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.longMaxBob.$model" />
                        <div v-if="$v.fieldTestServiceClassEntity.longMaxBob.$anyDirty && $v.fieldTestServiceClassEntity.longMaxBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.longMaxBob.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.longMaxBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.floatBob')" for="field-test-service-class-entity-floatBob">Float Bob</label>
                        <input type="number" class="form-control" name="floatBob" id="field-test-service-class-entity-floatBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.floatBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.floatBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.floatBob.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.floatRequiredBob')" for="field-test-service-class-entity-floatRequiredBob">Float Required Bob</label>
                        <input type="number" class="form-control" name="floatRequiredBob" id="field-test-service-class-entity-floatRequiredBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.floatRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.floatRequiredBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.floatRequiredBob.$model"  required/>
                        <div v-if="$v.fieldTestServiceClassEntity.floatRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.floatRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.floatRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.floatRequiredBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.floatMinBob')" for="field-test-service-class-entity-floatMinBob">Float Min Bob</label>
                        <input type="number" class="form-control" name="floatMinBob" id="field-test-service-class-entity-floatMinBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.floatMinBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.floatMinBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.floatMinBob.$model" />
                        <div v-if="$v.fieldTestServiceClassEntity.floatMinBob.$anyDirty && $v.fieldTestServiceClassEntity.floatMinBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.floatMinBob.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.floatMinBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.floatMaxBob')" for="field-test-service-class-entity-floatMaxBob">Float Max Bob</label>
                        <input type="number" class="form-control" name="floatMaxBob" id="field-test-service-class-entity-floatMaxBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.floatMaxBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.floatMaxBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.floatMaxBob.$model" />
                        <div v-if="$v.fieldTestServiceClassEntity.floatMaxBob.$anyDirty && $v.fieldTestServiceClassEntity.floatMaxBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.floatMaxBob.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.floatMaxBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.doubleRequiredBob')" for="field-test-service-class-entity-doubleRequiredBob">Double Required Bob</label>
                        <input type="number" class="form-control" name="doubleRequiredBob" id="field-test-service-class-entity-doubleRequiredBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.doubleRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.doubleRequiredBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.doubleRequiredBob.$model"  required/>
                        <div v-if="$v.fieldTestServiceClassEntity.doubleRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.doubleRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.doubleRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.doubleRequiredBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.doubleMinBob')" for="field-test-service-class-entity-doubleMinBob">Double Min Bob</label>
                        <input type="number" class="form-control" name="doubleMinBob" id="field-test-service-class-entity-doubleMinBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.doubleMinBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.doubleMinBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.doubleMinBob.$model" />
                        <div v-if="$v.fieldTestServiceClassEntity.doubleMinBob.$anyDirty && $v.fieldTestServiceClassEntity.doubleMinBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.doubleMinBob.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.doubleMinBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.doubleMaxBob')" for="field-test-service-class-entity-doubleMaxBob">Double Max Bob</label>
                        <input type="number" class="form-control" name="doubleMaxBob" id="field-test-service-class-entity-doubleMaxBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.doubleMaxBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.doubleMaxBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.doubleMaxBob.$model" />
                        <div v-if="$v.fieldTestServiceClassEntity.doubleMaxBob.$anyDirty && $v.fieldTestServiceClassEntity.doubleMaxBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.doubleMaxBob.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.doubleMaxBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.bigDecimalRequiredBob')" for="field-test-service-class-entity-bigDecimalRequiredBob">Big Decimal Required Bob</label>
                        <input type="number" class="form-control" name="bigDecimalRequiredBob" id="field-test-service-class-entity-bigDecimalRequiredBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.bigDecimalRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.bigDecimalRequiredBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.bigDecimalRequiredBob.$model"  required/>
                        <div v-if="$v.fieldTestServiceClassEntity.bigDecimalRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.bigDecimalRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.bigDecimalRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.bigDecimalRequiredBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.bigDecimalMinBob')" for="field-test-service-class-entity-bigDecimalMinBob">Big Decimal Min Bob</label>
                        <input type="number" class="form-control" name="bigDecimalMinBob" id="field-test-service-class-entity-bigDecimalMinBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.bigDecimalMinBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.bigDecimalMinBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.bigDecimalMinBob.$model" />
                        <div v-if="$v.fieldTestServiceClassEntity.bigDecimalMinBob.$anyDirty && $v.fieldTestServiceClassEntity.bigDecimalMinBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.bigDecimalMinBob.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.bigDecimalMinBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.bigDecimalMaxBob')" for="field-test-service-class-entity-bigDecimalMaxBob">Big Decimal Max Bob</label>
                        <input type="number" class="form-control" name="bigDecimalMaxBob" id="field-test-service-class-entity-bigDecimalMaxBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.bigDecimalMaxBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.bigDecimalMaxBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.bigDecimalMaxBob.$model" />
                        <div v-if="$v.fieldTestServiceClassEntity.bigDecimalMaxBob.$anyDirty && $v.fieldTestServiceClassEntity.bigDecimalMaxBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.bigDecimalMaxBob.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.bigDecimalMaxBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.localDateBob')" for="field-test-service-class-entity-localDateBob">Local Date Bob</label>
                        <div class="input-group">
                            <input id="field-test-service-class-entity-localDateBob" type="date" class="form-control" name="localDateBob"  :class="{'valid': !$v.fieldTestServiceClassEntity.localDateBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.localDateBob.$invalid }"
                            v-model="$v.fieldTestServiceClassEntity.localDateBob.$model"  />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.localDateRequiredBob')" for="field-test-service-class-entity-localDateRequiredBob">Local Date Required Bob</label>
                        <div class="input-group">
                            <input id="field-test-service-class-entity-localDateRequiredBob" type="date" class="form-control" name="localDateRequiredBob"  :class="{'valid': !$v.fieldTestServiceClassEntity.localDateRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.localDateRequiredBob.$invalid }"
                            v-model="$v.fieldTestServiceClassEntity.localDateRequiredBob.$model"  required />
                        </div>
                        <div v-if="$v.fieldTestServiceClassEntity.localDateRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.localDateRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.localDateRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.instantBob')" for="field-test-service-class-entity-instantBob">Instant Bob</label>
                        <div class="d-flex">
                            <input id="field-test-service-class-entity-instantBob" type="datetime-local" class="form-control" name="instantBob" :class="{'valid': !$v.fieldTestServiceClassEntity.instantBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.instantBob.$invalid }"
                            
                            :value="convertDateTimeFromServer($v.fieldTestServiceClassEntity.instantBob.$model)"
                            @change="updateInstantField('instantBob', $event)"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.instanteRequiredBob')" for="field-test-service-class-entity-instanteRequiredBob">Instante Required Bob</label>
                        <div class="d-flex">
                            <input id="field-test-service-class-entity-instanteRequiredBob" type="datetime-local" class="form-control" name="instanteRequiredBob" :class="{'valid': !$v.fieldTestServiceClassEntity.instanteRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.instanteRequiredBob.$invalid }"
                             required
                            :value="convertDateTimeFromServer($v.fieldTestServiceClassEntity.instanteRequiredBob.$model)"
                            @change="updateInstantField('instanteRequiredBob', $event)"/>
                        </div>
                        <div v-if="$v.fieldTestServiceClassEntity.instanteRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.instanteRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.instanteRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.instanteRequiredBob.ZonedDateTimelocal" v-text="$t('entity.validation.ZonedDateTimelocal')">
                                This field should be a date and time.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.zonedDateTimeBob')" for="field-test-service-class-entity-zonedDateTimeBob">Zoned Date Time Bob</label>
                        <div class="d-flex">
                            <input id="field-test-service-class-entity-zonedDateTimeBob" type="datetime-local" class="form-control" name="zonedDateTimeBob" :class="{'valid': !$v.fieldTestServiceClassEntity.zonedDateTimeBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.zonedDateTimeBob.$invalid }"
                            
                            :value="convertDateTimeFromServer($v.fieldTestServiceClassEntity.zonedDateTimeBob.$model)"
                            @change="updateZonedDateTimeField('zonedDateTimeBob', $event)"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.zonedDateTimeRequiredBob')" for="field-test-service-class-entity-zonedDateTimeRequiredBob">Zoned Date Time Required Bob</label>
                        <div class="d-flex">
                            <input id="field-test-service-class-entity-zonedDateTimeRequiredBob" type="datetime-local" class="form-control" name="zonedDateTimeRequiredBob" :class="{'valid': !$v.fieldTestServiceClassEntity.zonedDateTimeRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.zonedDateTimeRequiredBob.$invalid }"
                             required
                            :value="convertDateTimeFromServer($v.fieldTestServiceClassEntity.zonedDateTimeRequiredBob.$model)"
                            @change="updateZonedDateTimeField('zonedDateTimeRequiredBob', $event)"/>
                        </div>
                        <div v-if="$v.fieldTestServiceClassEntity.zonedDateTimeRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.zonedDateTimeRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.zonedDateTimeRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.zonedDateTimeRequiredBob.ZonedDateTimelocal" v-text="$t('entity.validation.ZonedDateTimelocal')">
                                This field should be a date and time.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.durationBob')" for="field-test-service-class-entity-durationBob">Duration Bob</label>
                        <input type="number" class="form-control" name="durationBob" id="field-test-service-class-entity-durationBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.durationBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.durationBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.durationBob.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.durationRequiredBob')" for="field-test-service-class-entity-durationRequiredBob">Duration Required Bob</label>
                        <input type="number" class="form-control" name="durationRequiredBob" id="field-test-service-class-entity-durationRequiredBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.durationRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.durationRequiredBob.$invalid }" v-model.number="$v.fieldTestServiceClassEntity.durationRequiredBob.$model"  required/>
                        <div v-if="$v.fieldTestServiceClassEntity.durationRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.durationRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.durationRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.durationRequiredBob.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.booleanBob')" for="field-test-service-class-entity-booleanBob">Boolean Bob</label>
                        <input type="checkbox" class="form-check" name="booleanBob" id="field-test-service-class-entity-booleanBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.booleanBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.booleanBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.booleanBob.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.booleanRequiredBob')" for="field-test-service-class-entity-booleanRequiredBob">Boolean Required Bob</label>
                        <input type="checkbox" class="form-check" name="booleanRequiredBob" id="field-test-service-class-entity-booleanRequiredBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.booleanRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.booleanRequiredBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.booleanRequiredBob.$model"  required/>
                        <div v-if="$v.fieldTestServiceClassEntity.booleanRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.booleanRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.booleanRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.enumBob')" for="field-test-service-class-entity-enumBob">Enum Bob</label>
                        <select class="form-control" name="enumBob" :class="{'valid': !$v.fieldTestServiceClassEntity.enumBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.enumBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.enumBob.$model" id="field-test-service-class-entity-enumBob" >
                            <option value="ENUM_VALUE_1" v-bind:label="$t('jhipsterApp.EnumFieldClass.ENUM_VALUE_1')">ENUM_VALUE_1</option>
                            <option value="ENUM_VALUE_2" v-bind:label="$t('jhipsterApp.EnumFieldClass.ENUM_VALUE_2')">ENUM_VALUE_2</option>
                            <option value="ENUM_VALUE_3" v-bind:label="$t('jhipsterApp.EnumFieldClass.ENUM_VALUE_3')">ENUM_VALUE_3</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.enumRequiredBob')" for="field-test-service-class-entity-enumRequiredBob">Enum Required Bob</label>
                        <select class="form-control" name="enumRequiredBob" :class="{'valid': !$v.fieldTestServiceClassEntity.enumRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.enumRequiredBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.enumRequiredBob.$model" id="field-test-service-class-entity-enumRequiredBob"  required>
                            <option value="ENUM_VALUE_1" v-bind:label="$t('jhipsterApp.EnumRequiredFieldClass.ENUM_VALUE_1')">ENUM_VALUE_1</option>
                            <option value="ENUM_VALUE_2" v-bind:label="$t('jhipsterApp.EnumRequiredFieldClass.ENUM_VALUE_2')">ENUM_VALUE_2</option>
                            <option value="ENUM_VALUE_3" v-bind:label="$t('jhipsterApp.EnumRequiredFieldClass.ENUM_VALUE_3')">ENUM_VALUE_3</option>
                        </select>
                        <div v-if="$v.fieldTestServiceClassEntity.enumRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.enumRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.enumRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.uuidBob')" for="field-test-service-class-entity-uuidBob">Uuid Bob</label>
                        <input type="text" class="form-control" name="uuidBob" id="field-test-service-class-entity-uuidBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.uuidBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.uuidBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.uuidBob.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.uuidRequiredBob')" for="field-test-service-class-entity-uuidRequiredBob">Uuid Required Bob</label>
                        <input type="text" class="form-control" name="uuidRequiredBob" id="field-test-service-class-entity-uuidRequiredBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.uuidRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.uuidRequiredBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.uuidRequiredBob.$model"  required/>
                        <div v-if="$v.fieldTestServiceClassEntity.uuidRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.uuidRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.uuidRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteImageBob')" for="field-test-service-class-entity-byteImageBob">Byte Image Bob</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestServiceClassEntity.byteImageBobContentType + ';base64,' + fieldTestServiceClassEntity.byteImageBob" style="max-height: 100px;" v-if="fieldTestServiceClassEntity.byteImageBob" alt="fieldTestServiceClassEntity image"/>
                            <div v-if="fieldTestServiceClassEntity.byteImageBob" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestServiceClassEntity.byteImageBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteImageBob)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageBob', 'byteImageBobContentType', 'file_byteImageBob')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageBob" id="file_byteImageBob" v-on:change="setFileData($event, fieldTestServiceClassEntity, 'byteImageBob', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageBob" id="field-test-service-class-entity-byteImageBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.byteImageBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.byteImageBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.byteImageBob.$model" />
                        <input type="hidden" class="form-control" name="byteImageBobContentType" id="field-test-service-class-entity-byteImageBobContentType"
                            v-model="fieldTestServiceClassEntity.byteImageBobContentType" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteImageRequiredBob')" for="field-test-service-class-entity-byteImageRequiredBob">Byte Image Required Bob</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestServiceClassEntity.byteImageRequiredBobContentType + ';base64,' + fieldTestServiceClassEntity.byteImageRequiredBob" style="max-height: 100px;" v-if="fieldTestServiceClassEntity.byteImageRequiredBob" alt="fieldTestServiceClassEntity image"/>
                            <div v-if="fieldTestServiceClassEntity.byteImageRequiredBob" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestServiceClassEntity.byteImageRequiredBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteImageRequiredBob)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageRequiredBob', 'byteImageRequiredBobContentType', 'file_byteImageRequiredBob')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageRequiredBob" id="file_byteImageRequiredBob" v-on:change="setFileData($event, fieldTestServiceClassEntity, 'byteImageRequiredBob', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageRequiredBob" id="field-test-service-class-entity-byteImageRequiredBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.byteImageRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.byteImageRequiredBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.byteImageRequiredBob.$model"  required/>
                        <input type="hidden" class="form-control" name="byteImageRequiredBobContentType" id="field-test-service-class-entity-byteImageRequiredBobContentType"
                            v-model="fieldTestServiceClassEntity.byteImageRequiredBobContentType" />
                        <div v-if="$v.fieldTestServiceClassEntity.byteImageRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.byteImageRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.byteImageRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteImageMinbytesBob')" for="field-test-service-class-entity-byteImageMinbytesBob">Byte Image Minbytes Bob</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestServiceClassEntity.byteImageMinbytesBobContentType + ';base64,' + fieldTestServiceClassEntity.byteImageMinbytesBob" style="max-height: 100px;" v-if="fieldTestServiceClassEntity.byteImageMinbytesBob" alt="fieldTestServiceClassEntity image"/>
                            <div v-if="fieldTestServiceClassEntity.byteImageMinbytesBob" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestServiceClassEntity.byteImageMinbytesBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteImageMinbytesBob)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageMinbytesBob', 'byteImageMinbytesBobContentType', 'file_byteImageMinbytesBob')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageMinbytesBob" id="file_byteImageMinbytesBob" v-on:change="setFileData($event, fieldTestServiceClassEntity, 'byteImageMinbytesBob', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageMinbytesBob" id="field-test-service-class-entity-byteImageMinbytesBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.byteImageMinbytesBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.byteImageMinbytesBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.byteImageMinbytesBob.$model" />
                        <input type="hidden" class="form-control" name="byteImageMinbytesBobContentType" id="field-test-service-class-entity-byteImageMinbytesBobContentType"
                            v-model="fieldTestServiceClassEntity.byteImageMinbytesBobContentType" />
                        <div v-if="$v.fieldTestServiceClassEntity.byteImageMinbytesBob.$anyDirty && $v.fieldTestServiceClassEntity.byteImageMinbytesBob.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteImageMaxbytesBob')" for="field-test-service-class-entity-byteImageMaxbytesBob">Byte Image Maxbytes Bob</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestServiceClassEntity.byteImageMaxbytesBobContentType + ';base64,' + fieldTestServiceClassEntity.byteImageMaxbytesBob" style="max-height: 100px;" v-if="fieldTestServiceClassEntity.byteImageMaxbytesBob" alt="fieldTestServiceClassEntity image"/>
                            <div v-if="fieldTestServiceClassEntity.byteImageMaxbytesBob" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestServiceClassEntity.byteImageMaxbytesBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteImageMaxbytesBob)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageMaxbytesBob', 'byteImageMaxbytesBobContentType', 'file_byteImageMaxbytesBob')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageMaxbytesBob" id="file_byteImageMaxbytesBob" v-on:change="setFileData($event, fieldTestServiceClassEntity, 'byteImageMaxbytesBob', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageMaxbytesBob" id="field-test-service-class-entity-byteImageMaxbytesBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.byteImageMaxbytesBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.byteImageMaxbytesBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.byteImageMaxbytesBob.$model" />
                        <input type="hidden" class="form-control" name="byteImageMaxbytesBobContentType" id="field-test-service-class-entity-byteImageMaxbytesBobContentType"
                            v-model="fieldTestServiceClassEntity.byteImageMaxbytesBobContentType" />
                        <div v-if="$v.fieldTestServiceClassEntity.byteImageMaxbytesBob.$anyDirty && $v.fieldTestServiceClassEntity.byteImageMaxbytesBob.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteAnyBob')" for="field-test-service-class-entity-byteAnyBob">Byte Any Bob</label>
                        <div>
                            <div v-if="fieldTestServiceClassEntity.byteAnyBob" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestServiceClassEntity.byteAnyBobContentType, fieldTestServiceClassEntity.byteAnyBob)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestServiceClassEntity.byteAnyBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteAnyBob)}}</span>
                                <button type="button" v-on:click="fieldTestServiceClassEntity.byteAnyBob=null;fieldTestServiceClassEntity.byteAnyBobContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyBob" id="file_byteAnyBob" v-on:change="setFileData($event, fieldTestServiceClassEntity, 'byteAnyBob', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyBob" id="field-test-service-class-entity-byteAnyBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.byteAnyBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.byteAnyBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.byteAnyBob.$model" />
                        <input type="hidden" class="form-control" name="byteAnyBobContentType" id="field-test-service-class-entity-byteAnyBobContentType"
                            v-model="fieldTestServiceClassEntity.byteAnyBobContentType" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteAnyRequiredBob')" for="field-test-service-class-entity-byteAnyRequiredBob">Byte Any Required Bob</label>
                        <div>
                            <div v-if="fieldTestServiceClassEntity.byteAnyRequiredBob" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestServiceClassEntity.byteAnyRequiredBobContentType, fieldTestServiceClassEntity.byteAnyRequiredBob)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestServiceClassEntity.byteAnyRequiredBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteAnyRequiredBob)}}</span>
                                <button type="button" v-on:click="fieldTestServiceClassEntity.byteAnyRequiredBob=null;fieldTestServiceClassEntity.byteAnyRequiredBobContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyRequiredBob" id="file_byteAnyRequiredBob" v-on:change="setFileData($event, fieldTestServiceClassEntity, 'byteAnyRequiredBob', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyRequiredBob" id="field-test-service-class-entity-byteAnyRequiredBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.byteAnyRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.byteAnyRequiredBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.byteAnyRequiredBob.$model"  required/>
                        <input type="hidden" class="form-control" name="byteAnyRequiredBobContentType" id="field-test-service-class-entity-byteAnyRequiredBobContentType"
                            v-model="fieldTestServiceClassEntity.byteAnyRequiredBobContentType" />
                        <div v-if="$v.fieldTestServiceClassEntity.byteAnyRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.byteAnyRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.byteAnyRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteAnyMinbytesBob')" for="field-test-service-class-entity-byteAnyMinbytesBob">Byte Any Minbytes Bob</label>
                        <div>
                            <div v-if="fieldTestServiceClassEntity.byteAnyMinbytesBob" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestServiceClassEntity.byteAnyMinbytesBobContentType, fieldTestServiceClassEntity.byteAnyMinbytesBob)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestServiceClassEntity.byteAnyMinbytesBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteAnyMinbytesBob)}}</span>
                                <button type="button" v-on:click="fieldTestServiceClassEntity.byteAnyMinbytesBob=null;fieldTestServiceClassEntity.byteAnyMinbytesBobContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyMinbytesBob" id="file_byteAnyMinbytesBob" v-on:change="setFileData($event, fieldTestServiceClassEntity, 'byteAnyMinbytesBob', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyMinbytesBob" id="field-test-service-class-entity-byteAnyMinbytesBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.byteAnyMinbytesBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.byteAnyMinbytesBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.byteAnyMinbytesBob.$model" />
                        <input type="hidden" class="form-control" name="byteAnyMinbytesBobContentType" id="field-test-service-class-entity-byteAnyMinbytesBobContentType"
                            v-model="fieldTestServiceClassEntity.byteAnyMinbytesBobContentType" />
                        <div v-if="$v.fieldTestServiceClassEntity.byteAnyMinbytesBob.$anyDirty && $v.fieldTestServiceClassEntity.byteAnyMinbytesBob.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteAnyMaxbytesBob')" for="field-test-service-class-entity-byteAnyMaxbytesBob">Byte Any Maxbytes Bob</label>
                        <div>
                            <div v-if="fieldTestServiceClassEntity.byteAnyMaxbytesBob" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestServiceClassEntity.byteAnyMaxbytesBobContentType, fieldTestServiceClassEntity.byteAnyMaxbytesBob)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestServiceClassEntity.byteAnyMaxbytesBobContentType}}, {{byteSize(fieldTestServiceClassEntity.byteAnyMaxbytesBob)}}</span>
                                <button type="button" v-on:click="fieldTestServiceClassEntity.byteAnyMaxbytesBob=null;fieldTestServiceClassEntity.byteAnyMaxbytesBobContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyMaxbytesBob" id="file_byteAnyMaxbytesBob" v-on:change="setFileData($event, fieldTestServiceClassEntity, 'byteAnyMaxbytesBob', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyMaxbytesBob" id="field-test-service-class-entity-byteAnyMaxbytesBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.byteAnyMaxbytesBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.byteAnyMaxbytesBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.byteAnyMaxbytesBob.$model" />
                        <input type="hidden" class="form-control" name="byteAnyMaxbytesBobContentType" id="field-test-service-class-entity-byteAnyMaxbytesBobContentType"
                            v-model="fieldTestServiceClassEntity.byteAnyMaxbytesBobContentType" />
                        <div v-if="$v.fieldTestServiceClassEntity.byteAnyMaxbytesBob.$anyDirty && $v.fieldTestServiceClassEntity.byteAnyMaxbytesBob.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteTextBob')" for="field-test-service-class-entity-byteTextBob">Byte Text Bob</label>
                        <textarea class="form-control" name="byteTextBob" id="field-test-service-class-entity-byteTextBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.byteTextBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.byteTextBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.byteTextBob.$model" ></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestServiceClassEntity.byteTextRequiredBob')" for="field-test-service-class-entity-byteTextRequiredBob">Byte Text Required Bob</label>
                        <textarea class="form-control" name="byteTextRequiredBob" id="field-test-service-class-entity-byteTextRequiredBob"
                            :class="{'valid': !$v.fieldTestServiceClassEntity.byteTextRequiredBob.$invalid, 'invalid': $v.fieldTestServiceClassEntity.byteTextRequiredBob.$invalid }" v-model="$v.fieldTestServiceClassEntity.byteTextRequiredBob.$model"  required></textarea>
                        <div v-if="$v.fieldTestServiceClassEntity.byteTextRequiredBob.$anyDirty && $v.fieldTestServiceClassEntity.byteTextRequiredBob.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestServiceClassEntity.byteTextRequiredBob.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.cancel')">Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.fieldTestServiceClassEntity.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./field-test-service-class-entity-update.component.ts">
</script>
