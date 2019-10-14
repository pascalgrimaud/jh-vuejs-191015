<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="jhipsterApp.fieldTestInfiniteScrollEntity.home.createOrEditLabel" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.home.createOrEditLabel')">Create or edit a FieldTestInfiniteScrollEntity</h2>
                <div>
                    <div class="form-group" v-if="fieldTestInfiniteScrollEntity.id">
                        <label for="id" v-text="$t('global.field.id')">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="fieldTestInfiniteScrollEntity.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.stringHugo')" for="field-test-infinite-scroll-entity-stringHugo">String Hugo</label>
                        <input type="text" class="form-control" name="stringHugo" id="field-test-infinite-scroll-entity-stringHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.stringHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.stringHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.stringHugo.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.stringRequiredHugo')" for="field-test-infinite-scroll-entity-stringRequiredHugo">String Required Hugo</label>
                        <input type="text" class="form-control" name="stringRequiredHugo" id="field-test-infinite-scroll-entity-stringRequiredHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.stringRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.stringRequiredHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.stringRequiredHugo.$model"  required/>
                        <div v-if="$v.fieldTestInfiniteScrollEntity.stringRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.stringRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.stringRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.stringMinlengthHugo')" for="field-test-infinite-scroll-entity-stringMinlengthHugo">String Minlength Hugo</label>
                        <input type="text" class="form-control" name="stringMinlengthHugo" id="field-test-infinite-scroll-entity-stringMinlengthHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.stringMinlengthHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.stringMinlengthHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.stringMinlengthHugo.$model" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.stringMinlengthHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.stringMinlengthHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.stringMinlengthHugo.minLength" v-bind:value="$t('entity.validation.minlength')">
                                This field is required to be at least 0 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.stringMaxlengthHugo')" for="field-test-infinite-scroll-entity-stringMaxlengthHugo">String Maxlength Hugo</label>
                        <input type="text" class="form-control" name="stringMaxlengthHugo" id="field-test-infinite-scroll-entity-stringMaxlengthHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.stringMaxlengthHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.stringMaxlengthHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.stringMaxlengthHugo.$model" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.stringMaxlengthHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.stringMaxlengthHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.stringMaxlengthHugo.maxLength" v-bind:value="$t('entity.validation.maxlength')">
                                This field cannot be longer than 20 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.stringPatternHugo')" for="field-test-infinite-scroll-entity-stringPatternHugo">String Pattern Hugo</label>
                        <input type="text" class="form-control" name="stringPatternHugo" id="field-test-infinite-scroll-entity-stringPatternHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.stringPatternHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.stringPatternHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.stringPatternHugo.$model" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.stringPatternHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.stringPatternHugo.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.integerHugo')" for="field-test-infinite-scroll-entity-integerHugo">Integer Hugo</label>
                        <input type="number" class="form-control" name="integerHugo" id="field-test-infinite-scroll-entity-integerHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.integerHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.integerHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.integerHugo.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.integerRequiredHugo')" for="field-test-infinite-scroll-entity-integerRequiredHugo">Integer Required Hugo</label>
                        <input type="number" class="form-control" name="integerRequiredHugo" id="field-test-infinite-scroll-entity-integerRequiredHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.integerRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.integerRequiredHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.integerRequiredHugo.$model"  required/>
                        <div v-if="$v.fieldTestInfiniteScrollEntity.integerRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.integerRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.integerRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.integerRequiredHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.integerMinHugo')" for="field-test-infinite-scroll-entity-integerMinHugo">Integer Min Hugo</label>
                        <input type="number" class="form-control" name="integerMinHugo" id="field-test-infinite-scroll-entity-integerMinHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.integerMinHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.integerMinHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.integerMinHugo.$model" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.integerMinHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.integerMinHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.integerMinHugo.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.integerMinHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.integerMaxHugo')" for="field-test-infinite-scroll-entity-integerMaxHugo">Integer Max Hugo</label>
                        <input type="number" class="form-control" name="integerMaxHugo" id="field-test-infinite-scroll-entity-integerMaxHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.integerMaxHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.integerMaxHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.integerMaxHugo.$model" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.integerMaxHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.integerMaxHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.integerMaxHugo.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.integerMaxHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.longHugo')" for="field-test-infinite-scroll-entity-longHugo">Long Hugo</label>
                        <input type="number" class="form-control" name="longHugo" id="field-test-infinite-scroll-entity-longHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.longHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.longHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.longHugo.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.longRequiredHugo')" for="field-test-infinite-scroll-entity-longRequiredHugo">Long Required Hugo</label>
                        <input type="number" class="form-control" name="longRequiredHugo" id="field-test-infinite-scroll-entity-longRequiredHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.longRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.longRequiredHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.longRequiredHugo.$model"  required/>
                        <div v-if="$v.fieldTestInfiniteScrollEntity.longRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.longRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.longRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.longRequiredHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.longMinHugo')" for="field-test-infinite-scroll-entity-longMinHugo">Long Min Hugo</label>
                        <input type="number" class="form-control" name="longMinHugo" id="field-test-infinite-scroll-entity-longMinHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.longMinHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.longMinHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.longMinHugo.$model" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.longMinHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.longMinHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.longMinHugo.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.longMinHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.longMaxHugo')" for="field-test-infinite-scroll-entity-longMaxHugo">Long Max Hugo</label>
                        <input type="number" class="form-control" name="longMaxHugo" id="field-test-infinite-scroll-entity-longMaxHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.longMaxHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.longMaxHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.longMaxHugo.$model" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.longMaxHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.longMaxHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.longMaxHugo.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.longMaxHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.floatHugo')" for="field-test-infinite-scroll-entity-floatHugo">Float Hugo</label>
                        <input type="number" class="form-control" name="floatHugo" id="field-test-infinite-scroll-entity-floatHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.floatHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.floatHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.floatHugo.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.floatRequiredHugo')" for="field-test-infinite-scroll-entity-floatRequiredHugo">Float Required Hugo</label>
                        <input type="number" class="form-control" name="floatRequiredHugo" id="field-test-infinite-scroll-entity-floatRequiredHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.floatRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.floatRequiredHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.floatRequiredHugo.$model"  required/>
                        <div v-if="$v.fieldTestInfiniteScrollEntity.floatRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.floatRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.floatRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.floatRequiredHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.floatMinHugo')" for="field-test-infinite-scroll-entity-floatMinHugo">Float Min Hugo</label>
                        <input type="number" class="form-control" name="floatMinHugo" id="field-test-infinite-scroll-entity-floatMinHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.floatMinHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.floatMinHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.floatMinHugo.$model" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.floatMinHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.floatMinHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.floatMinHugo.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.floatMinHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.floatMaxHugo')" for="field-test-infinite-scroll-entity-floatMaxHugo">Float Max Hugo</label>
                        <input type="number" class="form-control" name="floatMaxHugo" id="field-test-infinite-scroll-entity-floatMaxHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.floatMaxHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.floatMaxHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.floatMaxHugo.$model" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.floatMaxHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.floatMaxHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.floatMaxHugo.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.floatMaxHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.doubleRequiredHugo')" for="field-test-infinite-scroll-entity-doubleRequiredHugo">Double Required Hugo</label>
                        <input type="number" class="form-control" name="doubleRequiredHugo" id="field-test-infinite-scroll-entity-doubleRequiredHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.doubleRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.doubleRequiredHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.doubleRequiredHugo.$model"  required/>
                        <div v-if="$v.fieldTestInfiniteScrollEntity.doubleRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.doubleRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.doubleRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.doubleRequiredHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.doubleMinHugo')" for="field-test-infinite-scroll-entity-doubleMinHugo">Double Min Hugo</label>
                        <input type="number" class="form-control" name="doubleMinHugo" id="field-test-infinite-scroll-entity-doubleMinHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.doubleMinHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.doubleMinHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.doubleMinHugo.$model" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.doubleMinHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.doubleMinHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.doubleMinHugo.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.doubleMinHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.doubleMaxHugo')" for="field-test-infinite-scroll-entity-doubleMaxHugo">Double Max Hugo</label>
                        <input type="number" class="form-control" name="doubleMaxHugo" id="field-test-infinite-scroll-entity-doubleMaxHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.doubleMaxHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.doubleMaxHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.doubleMaxHugo.$model" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.doubleMaxHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.doubleMaxHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.doubleMaxHugo.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.doubleMaxHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo')" for="field-test-infinite-scroll-entity-bigDecimalRequiredHugo">Big Decimal Required Hugo</label>
                        <input type="number" class="form-control" name="bigDecimalRequiredHugo" id="field-test-infinite-scroll-entity-bigDecimalRequiredHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo.$model"  required/>
                        <div v-if="$v.fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.bigDecimalMinHugo')" for="field-test-infinite-scroll-entity-bigDecimalMinHugo">Big Decimal Min Hugo</label>
                        <input type="number" class="form-control" name="bigDecimalMinHugo" id="field-test-infinite-scroll-entity-bigDecimalMinHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.bigDecimalMinHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.bigDecimalMinHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.bigDecimalMinHugo.$model" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.bigDecimalMinHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.bigDecimalMinHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.bigDecimalMinHugo.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.bigDecimalMinHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.bigDecimalMaxHugo')" for="field-test-infinite-scroll-entity-bigDecimalMaxHugo">Big Decimal Max Hugo</label>
                        <input type="number" class="form-control" name="bigDecimalMaxHugo" id="field-test-infinite-scroll-entity-bigDecimalMaxHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.bigDecimalMaxHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.bigDecimalMaxHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.bigDecimalMaxHugo.$model" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.bigDecimalMaxHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.bigDecimalMaxHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.bigDecimalMaxHugo.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.bigDecimalMaxHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.localDateHugo')" for="field-test-infinite-scroll-entity-localDateHugo">Local Date Hugo</label>
                        <div class="input-group">
                            <input id="field-test-infinite-scroll-entity-localDateHugo" type="date" class="form-control" name="localDateHugo"  :class="{'valid': !$v.fieldTestInfiniteScrollEntity.localDateHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.localDateHugo.$invalid }"
                            v-model="$v.fieldTestInfiniteScrollEntity.localDateHugo.$model"  />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.localDateRequiredHugo')" for="field-test-infinite-scroll-entity-localDateRequiredHugo">Local Date Required Hugo</label>
                        <div class="input-group">
                            <input id="field-test-infinite-scroll-entity-localDateRequiredHugo" type="date" class="form-control" name="localDateRequiredHugo"  :class="{'valid': !$v.fieldTestInfiniteScrollEntity.localDateRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.localDateRequiredHugo.$invalid }"
                            v-model="$v.fieldTestInfiniteScrollEntity.localDateRequiredHugo.$model"  required />
                        </div>
                        <div v-if="$v.fieldTestInfiniteScrollEntity.localDateRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.localDateRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.localDateRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.instantHugo')" for="field-test-infinite-scroll-entity-instantHugo">Instant Hugo</label>
                        <div class="d-flex">
                            <input id="field-test-infinite-scroll-entity-instantHugo" type="datetime-local" class="form-control" name="instantHugo" :class="{'valid': !$v.fieldTestInfiniteScrollEntity.instantHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.instantHugo.$invalid }"
                            
                            :value="convertDateTimeFromServer($v.fieldTestInfiniteScrollEntity.instantHugo.$model)"
                            @change="updateInstantField('instantHugo', $event)"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.instanteRequiredHugo')" for="field-test-infinite-scroll-entity-instanteRequiredHugo">Instante Required Hugo</label>
                        <div class="d-flex">
                            <input id="field-test-infinite-scroll-entity-instanteRequiredHugo" type="datetime-local" class="form-control" name="instanteRequiredHugo" :class="{'valid': !$v.fieldTestInfiniteScrollEntity.instanteRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.instanteRequiredHugo.$invalid }"
                             required
                            :value="convertDateTimeFromServer($v.fieldTestInfiniteScrollEntity.instanteRequiredHugo.$model)"
                            @change="updateInstantField('instanteRequiredHugo', $event)"/>
                        </div>
                        <div v-if="$v.fieldTestInfiniteScrollEntity.instanteRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.instanteRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.instanteRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.instanteRequiredHugo.ZonedDateTimelocal" v-text="$t('entity.validation.ZonedDateTimelocal')">
                                This field should be a date and time.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.zonedDateTimeHugo')" for="field-test-infinite-scroll-entity-zonedDateTimeHugo">Zoned Date Time Hugo</label>
                        <div class="d-flex">
                            <input id="field-test-infinite-scroll-entity-zonedDateTimeHugo" type="datetime-local" class="form-control" name="zonedDateTimeHugo" :class="{'valid': !$v.fieldTestInfiniteScrollEntity.zonedDateTimeHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.zonedDateTimeHugo.$invalid }"
                            
                            :value="convertDateTimeFromServer($v.fieldTestInfiniteScrollEntity.zonedDateTimeHugo.$model)"
                            @change="updateZonedDateTimeField('zonedDateTimeHugo', $event)"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo')" for="field-test-infinite-scroll-entity-zonedDateTimeRequiredHugo">Zoned Date Time Required Hugo</label>
                        <div class="d-flex">
                            <input id="field-test-infinite-scroll-entity-zonedDateTimeRequiredHugo" type="datetime-local" class="form-control" name="zonedDateTimeRequiredHugo" :class="{'valid': !$v.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo.$invalid }"
                             required
                            :value="convertDateTimeFromServer($v.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo.$model)"
                            @change="updateZonedDateTimeField('zonedDateTimeRequiredHugo', $event)"/>
                        </div>
                        <div v-if="$v.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo.ZonedDateTimelocal" v-text="$t('entity.validation.ZonedDateTimelocal')">
                                This field should be a date and time.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.durationHugo')" for="field-test-infinite-scroll-entity-durationHugo">Duration Hugo</label>
                        <input type="number" class="form-control" name="durationHugo" id="field-test-infinite-scroll-entity-durationHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.durationHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.durationHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.durationHugo.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.durationRequiredHugo')" for="field-test-infinite-scroll-entity-durationRequiredHugo">Duration Required Hugo</label>
                        <input type="number" class="form-control" name="durationRequiredHugo" id="field-test-infinite-scroll-entity-durationRequiredHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.durationRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.durationRequiredHugo.$invalid }" v-model.number="$v.fieldTestInfiniteScrollEntity.durationRequiredHugo.$model"  required/>
                        <div v-if="$v.fieldTestInfiniteScrollEntity.durationRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.durationRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.durationRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.durationRequiredHugo.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.booleanHugo')" for="field-test-infinite-scroll-entity-booleanHugo">Boolean Hugo</label>
                        <input type="checkbox" class="form-check" name="booleanHugo" id="field-test-infinite-scroll-entity-booleanHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.booleanHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.booleanHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.booleanHugo.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.booleanRequiredHugo')" for="field-test-infinite-scroll-entity-booleanRequiredHugo">Boolean Required Hugo</label>
                        <input type="checkbox" class="form-check" name="booleanRequiredHugo" id="field-test-infinite-scroll-entity-booleanRequiredHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.booleanRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.booleanRequiredHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.booleanRequiredHugo.$model"  required/>
                        <div v-if="$v.fieldTestInfiniteScrollEntity.booleanRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.booleanRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.booleanRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.enumHugo')" for="field-test-infinite-scroll-entity-enumHugo">Enum Hugo</label>
                        <select class="form-control" name="enumHugo" :class="{'valid': !$v.fieldTestInfiniteScrollEntity.enumHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.enumHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.enumHugo.$model" id="field-test-infinite-scroll-entity-enumHugo" >
                            <option value="ENUM_VALUE_1" v-bind:label="$t('jhipsterApp.EnumFieldClass.ENUM_VALUE_1')">ENUM_VALUE_1</option>
                            <option value="ENUM_VALUE_2" v-bind:label="$t('jhipsterApp.EnumFieldClass.ENUM_VALUE_2')">ENUM_VALUE_2</option>
                            <option value="ENUM_VALUE_3" v-bind:label="$t('jhipsterApp.EnumFieldClass.ENUM_VALUE_3')">ENUM_VALUE_3</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.enumRequiredHugo')" for="field-test-infinite-scroll-entity-enumRequiredHugo">Enum Required Hugo</label>
                        <select class="form-control" name="enumRequiredHugo" :class="{'valid': !$v.fieldTestInfiniteScrollEntity.enumRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.enumRequiredHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.enumRequiredHugo.$model" id="field-test-infinite-scroll-entity-enumRequiredHugo"  required>
                            <option value="ENUM_VALUE_1" v-bind:label="$t('jhipsterApp.EnumRequiredFieldClass.ENUM_VALUE_1')">ENUM_VALUE_1</option>
                            <option value="ENUM_VALUE_2" v-bind:label="$t('jhipsterApp.EnumRequiredFieldClass.ENUM_VALUE_2')">ENUM_VALUE_2</option>
                            <option value="ENUM_VALUE_3" v-bind:label="$t('jhipsterApp.EnumRequiredFieldClass.ENUM_VALUE_3')">ENUM_VALUE_3</option>
                        </select>
                        <div v-if="$v.fieldTestInfiniteScrollEntity.enumRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.enumRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.enumRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.uuidHugo')" for="field-test-infinite-scroll-entity-uuidHugo">Uuid Hugo</label>
                        <input type="text" class="form-control" name="uuidHugo" id="field-test-infinite-scroll-entity-uuidHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.uuidHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.uuidHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.uuidHugo.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.uuidRequiredHugo')" for="field-test-infinite-scroll-entity-uuidRequiredHugo">Uuid Required Hugo</label>
                        <input type="text" class="form-control" name="uuidRequiredHugo" id="field-test-infinite-scroll-entity-uuidRequiredHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.uuidRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.uuidRequiredHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.uuidRequiredHugo.$model"  required/>
                        <div v-if="$v.fieldTestInfiniteScrollEntity.uuidRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.uuidRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.uuidRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.byteImageHugo')" for="field-test-infinite-scroll-entity-byteImageHugo">Byte Image Hugo</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestInfiniteScrollEntity.byteImageHugoContentType + ';base64,' + fieldTestInfiniteScrollEntity.byteImageHugo" style="max-height: 100px;" v-if="fieldTestInfiniteScrollEntity.byteImageHugo" alt="fieldTestInfiniteScrollEntity image"/>
                            <div v-if="fieldTestInfiniteScrollEntity.byteImageHugo" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestInfiniteScrollEntity.byteImageHugoContentType}}, {{byteSize(fieldTestInfiniteScrollEntity.byteImageHugo)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageHugo', 'byteImageHugoContentType', 'file_byteImageHugo')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageHugo" id="file_byteImageHugo" v-on:change="setFileData($event, fieldTestInfiniteScrollEntity, 'byteImageHugo', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageHugo" id="field-test-infinite-scroll-entity-byteImageHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.byteImageHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.byteImageHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.byteImageHugo.$model" />
                        <input type="hidden" class="form-control" name="byteImageHugoContentType" id="field-test-infinite-scroll-entity-byteImageHugoContentType"
                            v-model="fieldTestInfiniteScrollEntity.byteImageHugoContentType" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.byteImageRequiredHugo')" for="field-test-infinite-scroll-entity-byteImageRequiredHugo">Byte Image Required Hugo</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestInfiniteScrollEntity.byteImageRequiredHugoContentType + ';base64,' + fieldTestInfiniteScrollEntity.byteImageRequiredHugo" style="max-height: 100px;" v-if="fieldTestInfiniteScrollEntity.byteImageRequiredHugo" alt="fieldTestInfiniteScrollEntity image"/>
                            <div v-if="fieldTestInfiniteScrollEntity.byteImageRequiredHugo" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestInfiniteScrollEntity.byteImageRequiredHugoContentType}}, {{byteSize(fieldTestInfiniteScrollEntity.byteImageRequiredHugo)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageRequiredHugo', 'byteImageRequiredHugoContentType', 'file_byteImageRequiredHugo')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageRequiredHugo" id="file_byteImageRequiredHugo" v-on:change="setFileData($event, fieldTestInfiniteScrollEntity, 'byteImageRequiredHugo', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageRequiredHugo" id="field-test-infinite-scroll-entity-byteImageRequiredHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.byteImageRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.byteImageRequiredHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.byteImageRequiredHugo.$model"  required/>
                        <input type="hidden" class="form-control" name="byteImageRequiredHugoContentType" id="field-test-infinite-scroll-entity-byteImageRequiredHugoContentType"
                            v-model="fieldTestInfiniteScrollEntity.byteImageRequiredHugoContentType" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.byteImageRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.byteImageRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.byteImageRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.byteImageMinbytesHugo')" for="field-test-infinite-scroll-entity-byteImageMinbytesHugo">Byte Image Minbytes Hugo</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestInfiniteScrollEntity.byteImageMinbytesHugoContentType + ';base64,' + fieldTestInfiniteScrollEntity.byteImageMinbytesHugo" style="max-height: 100px;" v-if="fieldTestInfiniteScrollEntity.byteImageMinbytesHugo" alt="fieldTestInfiniteScrollEntity image"/>
                            <div v-if="fieldTestInfiniteScrollEntity.byteImageMinbytesHugo" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestInfiniteScrollEntity.byteImageMinbytesHugoContentType}}, {{byteSize(fieldTestInfiniteScrollEntity.byteImageMinbytesHugo)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageMinbytesHugo', 'byteImageMinbytesHugoContentType', 'file_byteImageMinbytesHugo')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageMinbytesHugo" id="file_byteImageMinbytesHugo" v-on:change="setFileData($event, fieldTestInfiniteScrollEntity, 'byteImageMinbytesHugo', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageMinbytesHugo" id="field-test-infinite-scroll-entity-byteImageMinbytesHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.byteImageMinbytesHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.byteImageMinbytesHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.byteImageMinbytesHugo.$model" />
                        <input type="hidden" class="form-control" name="byteImageMinbytesHugoContentType" id="field-test-infinite-scroll-entity-byteImageMinbytesHugoContentType"
                            v-model="fieldTestInfiniteScrollEntity.byteImageMinbytesHugoContentType" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.byteImageMinbytesHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.byteImageMinbytesHugo.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo')" for="field-test-infinite-scroll-entity-byteImageMaxbytesHugo">Byte Image Maxbytes Hugo</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestInfiniteScrollEntity.byteImageMaxbytesHugoContentType + ';base64,' + fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo" style="max-height: 100px;" v-if="fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo" alt="fieldTestInfiniteScrollEntity image"/>
                            <div v-if="fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestInfiniteScrollEntity.byteImageMaxbytesHugoContentType}}, {{byteSize(fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageMaxbytesHugo', 'byteImageMaxbytesHugoContentType', 'file_byteImageMaxbytesHugo')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageMaxbytesHugo" id="file_byteImageMaxbytesHugo" v-on:change="setFileData($event, fieldTestInfiniteScrollEntity, 'byteImageMaxbytesHugo', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageMaxbytesHugo" id="field-test-infinite-scroll-entity-byteImageMaxbytesHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo.$model" />
                        <input type="hidden" class="form-control" name="byteImageMaxbytesHugoContentType" id="field-test-infinite-scroll-entity-byteImageMaxbytesHugoContentType"
                            v-model="fieldTestInfiniteScrollEntity.byteImageMaxbytesHugoContentType" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.byteAnyHugo')" for="field-test-infinite-scroll-entity-byteAnyHugo">Byte Any Hugo</label>
                        <div>
                            <div v-if="fieldTestInfiniteScrollEntity.byteAnyHugo" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestInfiniteScrollEntity.byteAnyHugoContentType, fieldTestInfiniteScrollEntity.byteAnyHugo)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestInfiniteScrollEntity.byteAnyHugoContentType}}, {{byteSize(fieldTestInfiniteScrollEntity.byteAnyHugo)}}</span>
                                <button type="button" v-on:click="fieldTestInfiniteScrollEntity.byteAnyHugo=null;fieldTestInfiniteScrollEntity.byteAnyHugoContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyHugo" id="file_byteAnyHugo" v-on:change="setFileData($event, fieldTestInfiniteScrollEntity, 'byteAnyHugo', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyHugo" id="field-test-infinite-scroll-entity-byteAnyHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.byteAnyHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.byteAnyHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.byteAnyHugo.$model" />
                        <input type="hidden" class="form-control" name="byteAnyHugoContentType" id="field-test-infinite-scroll-entity-byteAnyHugoContentType"
                            v-model="fieldTestInfiniteScrollEntity.byteAnyHugoContentType" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.byteAnyRequiredHugo')" for="field-test-infinite-scroll-entity-byteAnyRequiredHugo">Byte Any Required Hugo</label>
                        <div>
                            <div v-if="fieldTestInfiniteScrollEntity.byteAnyRequiredHugo" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestInfiniteScrollEntity.byteAnyRequiredHugoContentType, fieldTestInfiniteScrollEntity.byteAnyRequiredHugo)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestInfiniteScrollEntity.byteAnyRequiredHugoContentType}}, {{byteSize(fieldTestInfiniteScrollEntity.byteAnyRequiredHugo)}}</span>
                                <button type="button" v-on:click="fieldTestInfiniteScrollEntity.byteAnyRequiredHugo=null;fieldTestInfiniteScrollEntity.byteAnyRequiredHugoContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyRequiredHugo" id="file_byteAnyRequiredHugo" v-on:change="setFileData($event, fieldTestInfiniteScrollEntity, 'byteAnyRequiredHugo', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyRequiredHugo" id="field-test-infinite-scroll-entity-byteAnyRequiredHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.byteAnyRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.byteAnyRequiredHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.byteAnyRequiredHugo.$model"  required/>
                        <input type="hidden" class="form-control" name="byteAnyRequiredHugoContentType" id="field-test-infinite-scroll-entity-byteAnyRequiredHugoContentType"
                            v-model="fieldTestInfiniteScrollEntity.byteAnyRequiredHugoContentType" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.byteAnyRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.byteAnyRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.byteAnyRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo')" for="field-test-infinite-scroll-entity-byteAnyMinbytesHugo">Byte Any Minbytes Hugo</label>
                        <div>
                            <div v-if="fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestInfiniteScrollEntity.byteAnyMinbytesHugoContentType, fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestInfiniteScrollEntity.byteAnyMinbytesHugoContentType}}, {{byteSize(fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo)}}</span>
                                <button type="button" v-on:click="fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo=null;fieldTestInfiniteScrollEntity.byteAnyMinbytesHugoContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyMinbytesHugo" id="file_byteAnyMinbytesHugo" v-on:change="setFileData($event, fieldTestInfiniteScrollEntity, 'byteAnyMinbytesHugo', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyMinbytesHugo" id="field-test-infinite-scroll-entity-byteAnyMinbytesHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo.$model" />
                        <input type="hidden" class="form-control" name="byteAnyMinbytesHugoContentType" id="field-test-infinite-scroll-entity-byteAnyMinbytesHugoContentType"
                            v-model="fieldTestInfiniteScrollEntity.byteAnyMinbytesHugoContentType" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo')" for="field-test-infinite-scroll-entity-byteAnyMaxbytesHugo">Byte Any Maxbytes Hugo</label>
                        <div>
                            <div v-if="fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugoContentType, fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugoContentType}}, {{byteSize(fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo)}}</span>
                                <button type="button" v-on:click="fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo=null;fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugoContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyMaxbytesHugo" id="file_byteAnyMaxbytesHugo" v-on:change="setFileData($event, fieldTestInfiniteScrollEntity, 'byteAnyMaxbytesHugo', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyMaxbytesHugo" id="field-test-infinite-scroll-entity-byteAnyMaxbytesHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo.$model" />
                        <input type="hidden" class="form-control" name="byteAnyMaxbytesHugoContentType" id="field-test-infinite-scroll-entity-byteAnyMaxbytesHugoContentType"
                            v-model="fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugoContentType" />
                        <div v-if="$v.fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.byteTextHugo')" for="field-test-infinite-scroll-entity-byteTextHugo">Byte Text Hugo</label>
                        <textarea class="form-control" name="byteTextHugo" id="field-test-infinite-scroll-entity-byteTextHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.byteTextHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.byteTextHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.byteTextHugo.$model" ></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestInfiniteScrollEntity.byteTextRequiredHugo')" for="field-test-infinite-scroll-entity-byteTextRequiredHugo">Byte Text Required Hugo</label>
                        <textarea class="form-control" name="byteTextRequiredHugo" id="field-test-infinite-scroll-entity-byteTextRequiredHugo"
                            :class="{'valid': !$v.fieldTestInfiniteScrollEntity.byteTextRequiredHugo.$invalid, 'invalid': $v.fieldTestInfiniteScrollEntity.byteTextRequiredHugo.$invalid }" v-model="$v.fieldTestInfiniteScrollEntity.byteTextRequiredHugo.$model"  required></textarea>
                        <div v-if="$v.fieldTestInfiniteScrollEntity.byteTextRequiredHugo.$anyDirty && $v.fieldTestInfiniteScrollEntity.byteTextRequiredHugo.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestInfiniteScrollEntity.byteTextRequiredHugo.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.cancel')">Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.fieldTestInfiniteScrollEntity.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./field-test-infinite-scroll-entity-update.component.ts">
</script>
