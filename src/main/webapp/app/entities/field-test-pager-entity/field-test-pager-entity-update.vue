<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="jhipsterApp.fieldTestPagerEntity.home.createOrEditLabel" v-text="$t('jhipsterApp.fieldTestPagerEntity.home.createOrEditLabel')">Create or edit a FieldTestPagerEntity</h2>
                <div>
                    <div class="form-group" v-if="fieldTestPagerEntity.id">
                        <label for="id" v-text="$t('global.field.id')">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="fieldTestPagerEntity.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.stringJade')" for="field-test-pager-entity-stringJade">String Jade</label>
                        <input type="text" class="form-control" name="stringJade" id="field-test-pager-entity-stringJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.stringJade.$invalid, 'invalid': $v.fieldTestPagerEntity.stringJade.$invalid }" v-model="$v.fieldTestPagerEntity.stringJade.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.stringRequiredJade')" for="field-test-pager-entity-stringRequiredJade">String Required Jade</label>
                        <input type="text" class="form-control" name="stringRequiredJade" id="field-test-pager-entity-stringRequiredJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.stringRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.stringRequiredJade.$invalid }" v-model="$v.fieldTestPagerEntity.stringRequiredJade.$model"  required/>
                        <div v-if="$v.fieldTestPagerEntity.stringRequiredJade.$anyDirty && $v.fieldTestPagerEntity.stringRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.stringRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.stringMinlengthJade')" for="field-test-pager-entity-stringMinlengthJade">String Minlength Jade</label>
                        <input type="text" class="form-control" name="stringMinlengthJade" id="field-test-pager-entity-stringMinlengthJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.stringMinlengthJade.$invalid, 'invalid': $v.fieldTestPagerEntity.stringMinlengthJade.$invalid }" v-model="$v.fieldTestPagerEntity.stringMinlengthJade.$model" />
                        <div v-if="$v.fieldTestPagerEntity.stringMinlengthJade.$anyDirty && $v.fieldTestPagerEntity.stringMinlengthJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.stringMinlengthJade.minLength" v-bind:value="$t('entity.validation.minlength')">
                                This field is required to be at least 0 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.stringMaxlengthJade')" for="field-test-pager-entity-stringMaxlengthJade">String Maxlength Jade</label>
                        <input type="text" class="form-control" name="stringMaxlengthJade" id="field-test-pager-entity-stringMaxlengthJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.stringMaxlengthJade.$invalid, 'invalid': $v.fieldTestPagerEntity.stringMaxlengthJade.$invalid }" v-model="$v.fieldTestPagerEntity.stringMaxlengthJade.$model" />
                        <div v-if="$v.fieldTestPagerEntity.stringMaxlengthJade.$anyDirty && $v.fieldTestPagerEntity.stringMaxlengthJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.stringMaxlengthJade.maxLength" v-bind:value="$t('entity.validation.maxlength')">
                                This field cannot be longer than 20 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.stringPatternJade')" for="field-test-pager-entity-stringPatternJade">String Pattern Jade</label>
                        <input type="text" class="form-control" name="stringPatternJade" id="field-test-pager-entity-stringPatternJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.stringPatternJade.$invalid, 'invalid': $v.fieldTestPagerEntity.stringPatternJade.$invalid }" v-model="$v.fieldTestPagerEntity.stringPatternJade.$model" />
                        <div v-if="$v.fieldTestPagerEntity.stringPatternJade.$anyDirty && $v.fieldTestPagerEntity.stringPatternJade.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.integerJade')" for="field-test-pager-entity-integerJade">Integer Jade</label>
                        <input type="number" class="form-control" name="integerJade" id="field-test-pager-entity-integerJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.integerJade.$invalid, 'invalid': $v.fieldTestPagerEntity.integerJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.integerJade.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.integerRequiredJade')" for="field-test-pager-entity-integerRequiredJade">Integer Required Jade</label>
                        <input type="number" class="form-control" name="integerRequiredJade" id="field-test-pager-entity-integerRequiredJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.integerRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.integerRequiredJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.integerRequiredJade.$model"  required/>
                        <div v-if="$v.fieldTestPagerEntity.integerRequiredJade.$anyDirty && $v.fieldTestPagerEntity.integerRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.integerRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.integerRequiredJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.integerMinJade')" for="field-test-pager-entity-integerMinJade">Integer Min Jade</label>
                        <input type="number" class="form-control" name="integerMinJade" id="field-test-pager-entity-integerMinJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.integerMinJade.$invalid, 'invalid': $v.fieldTestPagerEntity.integerMinJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.integerMinJade.$model" />
                        <div v-if="$v.fieldTestPagerEntity.integerMinJade.$anyDirty && $v.fieldTestPagerEntity.integerMinJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.integerMinJade.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.integerMinJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.integerMaxJade')" for="field-test-pager-entity-integerMaxJade">Integer Max Jade</label>
                        <input type="number" class="form-control" name="integerMaxJade" id="field-test-pager-entity-integerMaxJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.integerMaxJade.$invalid, 'invalid': $v.fieldTestPagerEntity.integerMaxJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.integerMaxJade.$model" />
                        <div v-if="$v.fieldTestPagerEntity.integerMaxJade.$anyDirty && $v.fieldTestPagerEntity.integerMaxJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.integerMaxJade.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.integerMaxJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.longJade')" for="field-test-pager-entity-longJade">Long Jade</label>
                        <input type="number" class="form-control" name="longJade" id="field-test-pager-entity-longJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.longJade.$invalid, 'invalid': $v.fieldTestPagerEntity.longJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.longJade.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.longRequiredJade')" for="field-test-pager-entity-longRequiredJade">Long Required Jade</label>
                        <input type="number" class="form-control" name="longRequiredJade" id="field-test-pager-entity-longRequiredJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.longRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.longRequiredJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.longRequiredJade.$model"  required/>
                        <div v-if="$v.fieldTestPagerEntity.longRequiredJade.$anyDirty && $v.fieldTestPagerEntity.longRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.longRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.longRequiredJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.longMinJade')" for="field-test-pager-entity-longMinJade">Long Min Jade</label>
                        <input type="number" class="form-control" name="longMinJade" id="field-test-pager-entity-longMinJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.longMinJade.$invalid, 'invalid': $v.fieldTestPagerEntity.longMinJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.longMinJade.$model" />
                        <div v-if="$v.fieldTestPagerEntity.longMinJade.$anyDirty && $v.fieldTestPagerEntity.longMinJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.longMinJade.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.longMinJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.longMaxJade')" for="field-test-pager-entity-longMaxJade">Long Max Jade</label>
                        <input type="number" class="form-control" name="longMaxJade" id="field-test-pager-entity-longMaxJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.longMaxJade.$invalid, 'invalid': $v.fieldTestPagerEntity.longMaxJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.longMaxJade.$model" />
                        <div v-if="$v.fieldTestPagerEntity.longMaxJade.$anyDirty && $v.fieldTestPagerEntity.longMaxJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.longMaxJade.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.longMaxJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.floatJade')" for="field-test-pager-entity-floatJade">Float Jade</label>
                        <input type="number" class="form-control" name="floatJade" id="field-test-pager-entity-floatJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.floatJade.$invalid, 'invalid': $v.fieldTestPagerEntity.floatJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.floatJade.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.floatRequiredJade')" for="field-test-pager-entity-floatRequiredJade">Float Required Jade</label>
                        <input type="number" class="form-control" name="floatRequiredJade" id="field-test-pager-entity-floatRequiredJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.floatRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.floatRequiredJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.floatRequiredJade.$model"  required/>
                        <div v-if="$v.fieldTestPagerEntity.floatRequiredJade.$anyDirty && $v.fieldTestPagerEntity.floatRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.floatRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.floatRequiredJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.floatMinJade')" for="field-test-pager-entity-floatMinJade">Float Min Jade</label>
                        <input type="number" class="form-control" name="floatMinJade" id="field-test-pager-entity-floatMinJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.floatMinJade.$invalid, 'invalid': $v.fieldTestPagerEntity.floatMinJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.floatMinJade.$model" />
                        <div v-if="$v.fieldTestPagerEntity.floatMinJade.$anyDirty && $v.fieldTestPagerEntity.floatMinJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.floatMinJade.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.floatMinJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.floatMaxJade')" for="field-test-pager-entity-floatMaxJade">Float Max Jade</label>
                        <input type="number" class="form-control" name="floatMaxJade" id="field-test-pager-entity-floatMaxJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.floatMaxJade.$invalid, 'invalid': $v.fieldTestPagerEntity.floatMaxJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.floatMaxJade.$model" />
                        <div v-if="$v.fieldTestPagerEntity.floatMaxJade.$anyDirty && $v.fieldTestPagerEntity.floatMaxJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.floatMaxJade.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.floatMaxJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.doubleRequiredJade')" for="field-test-pager-entity-doubleRequiredJade">Double Required Jade</label>
                        <input type="number" class="form-control" name="doubleRequiredJade" id="field-test-pager-entity-doubleRequiredJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.doubleRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.doubleRequiredJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.doubleRequiredJade.$model"  required/>
                        <div v-if="$v.fieldTestPagerEntity.doubleRequiredJade.$anyDirty && $v.fieldTestPagerEntity.doubleRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.doubleRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.doubleRequiredJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.doubleMinJade')" for="field-test-pager-entity-doubleMinJade">Double Min Jade</label>
                        <input type="number" class="form-control" name="doubleMinJade" id="field-test-pager-entity-doubleMinJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.doubleMinJade.$invalid, 'invalid': $v.fieldTestPagerEntity.doubleMinJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.doubleMinJade.$model" />
                        <div v-if="$v.fieldTestPagerEntity.doubleMinJade.$anyDirty && $v.fieldTestPagerEntity.doubleMinJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.doubleMinJade.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.doubleMinJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.doubleMaxJade')" for="field-test-pager-entity-doubleMaxJade">Double Max Jade</label>
                        <input type="number" class="form-control" name="doubleMaxJade" id="field-test-pager-entity-doubleMaxJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.doubleMaxJade.$invalid, 'invalid': $v.fieldTestPagerEntity.doubleMaxJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.doubleMaxJade.$model" />
                        <div v-if="$v.fieldTestPagerEntity.doubleMaxJade.$anyDirty && $v.fieldTestPagerEntity.doubleMaxJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.doubleMaxJade.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.doubleMaxJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.bigDecimalRequiredJade')" for="field-test-pager-entity-bigDecimalRequiredJade">Big Decimal Required Jade</label>
                        <input type="number" class="form-control" name="bigDecimalRequiredJade" id="field-test-pager-entity-bigDecimalRequiredJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.bigDecimalRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.bigDecimalRequiredJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.bigDecimalRequiredJade.$model"  required/>
                        <div v-if="$v.fieldTestPagerEntity.bigDecimalRequiredJade.$anyDirty && $v.fieldTestPagerEntity.bigDecimalRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.bigDecimalRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.bigDecimalRequiredJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.bigDecimalMinJade')" for="field-test-pager-entity-bigDecimalMinJade">Big Decimal Min Jade</label>
                        <input type="number" class="form-control" name="bigDecimalMinJade" id="field-test-pager-entity-bigDecimalMinJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.bigDecimalMinJade.$invalid, 'invalid': $v.fieldTestPagerEntity.bigDecimalMinJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.bigDecimalMinJade.$model" />
                        <div v-if="$v.fieldTestPagerEntity.bigDecimalMinJade.$anyDirty && $v.fieldTestPagerEntity.bigDecimalMinJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.bigDecimalMinJade.minLength" v-bind:value="$t('entity.validation.min')">
                                This field should be at least 0 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.bigDecimalMinJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.bigDecimalMaxJade')" for="field-test-pager-entity-bigDecimalMaxJade">Big Decimal Max Jade</label>
                        <input type="number" class="form-control" name="bigDecimalMaxJade" id="field-test-pager-entity-bigDecimalMaxJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.bigDecimalMaxJade.$invalid, 'invalid': $v.fieldTestPagerEntity.bigDecimalMaxJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.bigDecimalMaxJade.$model" />
                        <div v-if="$v.fieldTestPagerEntity.bigDecimalMaxJade.$anyDirty && $v.fieldTestPagerEntity.bigDecimalMaxJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.bigDecimalMaxJade.maxLength" v-bind:value="$t('entity.validation.max')">
                                This field cannot be longer than 100 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.bigDecimalMaxJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.localDateJade')" for="field-test-pager-entity-localDateJade">Local Date Jade</label>
                        <div class="input-group">
                            <input id="field-test-pager-entity-localDateJade" type="date" class="form-control" name="localDateJade"  :class="{'valid': !$v.fieldTestPagerEntity.localDateJade.$invalid, 'invalid': $v.fieldTestPagerEntity.localDateJade.$invalid }"
                            v-model="$v.fieldTestPagerEntity.localDateJade.$model"  />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.localDateRequiredJade')" for="field-test-pager-entity-localDateRequiredJade">Local Date Required Jade</label>
                        <div class="input-group">
                            <input id="field-test-pager-entity-localDateRequiredJade" type="date" class="form-control" name="localDateRequiredJade"  :class="{'valid': !$v.fieldTestPagerEntity.localDateRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.localDateRequiredJade.$invalid }"
                            v-model="$v.fieldTestPagerEntity.localDateRequiredJade.$model"  required />
                        </div>
                        <div v-if="$v.fieldTestPagerEntity.localDateRequiredJade.$anyDirty && $v.fieldTestPagerEntity.localDateRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.localDateRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.instantJade')" for="field-test-pager-entity-instantJade">Instant Jade</label>
                        <div class="d-flex">
                            <input id="field-test-pager-entity-instantJade" type="datetime-local" class="form-control" name="instantJade" :class="{'valid': !$v.fieldTestPagerEntity.instantJade.$invalid, 'invalid': $v.fieldTestPagerEntity.instantJade.$invalid }"
                            
                            :value="convertDateTimeFromServer($v.fieldTestPagerEntity.instantJade.$model)"
                            @change="updateInstantField('instantJade', $event)"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.instanteRequiredJade')" for="field-test-pager-entity-instanteRequiredJade">Instante Required Jade</label>
                        <div class="d-flex">
                            <input id="field-test-pager-entity-instanteRequiredJade" type="datetime-local" class="form-control" name="instanteRequiredJade" :class="{'valid': !$v.fieldTestPagerEntity.instanteRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.instanteRequiredJade.$invalid }"
                             required
                            :value="convertDateTimeFromServer($v.fieldTestPagerEntity.instanteRequiredJade.$model)"
                            @change="updateInstantField('instanteRequiredJade', $event)"/>
                        </div>
                        <div v-if="$v.fieldTestPagerEntity.instanteRequiredJade.$anyDirty && $v.fieldTestPagerEntity.instanteRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.instanteRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.instanteRequiredJade.ZonedDateTimelocal" v-text="$t('entity.validation.ZonedDateTimelocal')">
                                This field should be a date and time.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.zonedDateTimeJade')" for="field-test-pager-entity-zonedDateTimeJade">Zoned Date Time Jade</label>
                        <div class="d-flex">
                            <input id="field-test-pager-entity-zonedDateTimeJade" type="datetime-local" class="form-control" name="zonedDateTimeJade" :class="{'valid': !$v.fieldTestPagerEntity.zonedDateTimeJade.$invalid, 'invalid': $v.fieldTestPagerEntity.zonedDateTimeJade.$invalid }"
                            
                            :value="convertDateTimeFromServer($v.fieldTestPagerEntity.zonedDateTimeJade.$model)"
                            @change="updateZonedDateTimeField('zonedDateTimeJade', $event)"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.zonedDateTimeRequiredJade')" for="field-test-pager-entity-zonedDateTimeRequiredJade">Zoned Date Time Required Jade</label>
                        <div class="d-flex">
                            <input id="field-test-pager-entity-zonedDateTimeRequiredJade" type="datetime-local" class="form-control" name="zonedDateTimeRequiredJade" :class="{'valid': !$v.fieldTestPagerEntity.zonedDateTimeRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.zonedDateTimeRequiredJade.$invalid }"
                             required
                            :value="convertDateTimeFromServer($v.fieldTestPagerEntity.zonedDateTimeRequiredJade.$model)"
                            @change="updateZonedDateTimeField('zonedDateTimeRequiredJade', $event)"/>
                        </div>
                        <div v-if="$v.fieldTestPagerEntity.zonedDateTimeRequiredJade.$anyDirty && $v.fieldTestPagerEntity.zonedDateTimeRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.zonedDateTimeRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.zonedDateTimeRequiredJade.ZonedDateTimelocal" v-text="$t('entity.validation.ZonedDateTimelocal')">
                                This field should be a date and time.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.durationJade')" for="field-test-pager-entity-durationJade">Duration Jade</label>
                        <input type="number" class="form-control" name="durationJade" id="field-test-pager-entity-durationJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.durationJade.$invalid, 'invalid': $v.fieldTestPagerEntity.durationJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.durationJade.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.durationRequiredJade')" for="field-test-pager-entity-durationRequiredJade">Duration Required Jade</label>
                        <input type="number" class="form-control" name="durationRequiredJade" id="field-test-pager-entity-durationRequiredJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.durationRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.durationRequiredJade.$invalid }" v-model.number="$v.fieldTestPagerEntity.durationRequiredJade.$model"  required/>
                        <div v-if="$v.fieldTestPagerEntity.durationRequiredJade.$anyDirty && $v.fieldTestPagerEntity.durationRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.durationRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.durationRequiredJade.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.booleanJade')" for="field-test-pager-entity-booleanJade">Boolean Jade</label>
                        <input type="checkbox" class="form-check" name="booleanJade" id="field-test-pager-entity-booleanJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.booleanJade.$invalid, 'invalid': $v.fieldTestPagerEntity.booleanJade.$invalid }" v-model="$v.fieldTestPagerEntity.booleanJade.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.booleanRequiredJade')" for="field-test-pager-entity-booleanRequiredJade">Boolean Required Jade</label>
                        <input type="checkbox" class="form-check" name="booleanRequiredJade" id="field-test-pager-entity-booleanRequiredJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.booleanRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.booleanRequiredJade.$invalid }" v-model="$v.fieldTestPagerEntity.booleanRequiredJade.$model"  required/>
                        <div v-if="$v.fieldTestPagerEntity.booleanRequiredJade.$anyDirty && $v.fieldTestPagerEntity.booleanRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.booleanRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.enumJade')" for="field-test-pager-entity-enumJade">Enum Jade</label>
                        <select class="form-control" name="enumJade" :class="{'valid': !$v.fieldTestPagerEntity.enumJade.$invalid, 'invalid': $v.fieldTestPagerEntity.enumJade.$invalid }" v-model="$v.fieldTestPagerEntity.enumJade.$model" id="field-test-pager-entity-enumJade" >
                            <option value="ENUM_VALUE_1" v-bind:label="$t('jhipsterApp.EnumFieldClass.ENUM_VALUE_1')">ENUM_VALUE_1</option>
                            <option value="ENUM_VALUE_2" v-bind:label="$t('jhipsterApp.EnumFieldClass.ENUM_VALUE_2')">ENUM_VALUE_2</option>
                            <option value="ENUM_VALUE_3" v-bind:label="$t('jhipsterApp.EnumFieldClass.ENUM_VALUE_3')">ENUM_VALUE_3</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.enumRequiredJade')" for="field-test-pager-entity-enumRequiredJade">Enum Required Jade</label>
                        <select class="form-control" name="enumRequiredJade" :class="{'valid': !$v.fieldTestPagerEntity.enumRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.enumRequiredJade.$invalid }" v-model="$v.fieldTestPagerEntity.enumRequiredJade.$model" id="field-test-pager-entity-enumRequiredJade"  required>
                            <option value="ENUM_VALUE_1" v-bind:label="$t('jhipsterApp.EnumRequiredFieldClass.ENUM_VALUE_1')">ENUM_VALUE_1</option>
                            <option value="ENUM_VALUE_2" v-bind:label="$t('jhipsterApp.EnumRequiredFieldClass.ENUM_VALUE_2')">ENUM_VALUE_2</option>
                            <option value="ENUM_VALUE_3" v-bind:label="$t('jhipsterApp.EnumRequiredFieldClass.ENUM_VALUE_3')">ENUM_VALUE_3</option>
                        </select>
                        <div v-if="$v.fieldTestPagerEntity.enumRequiredJade.$anyDirty && $v.fieldTestPagerEntity.enumRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.enumRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.uuidJade')" for="field-test-pager-entity-uuidJade">Uuid Jade</label>
                        <input type="text" class="form-control" name="uuidJade" id="field-test-pager-entity-uuidJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.uuidJade.$invalid, 'invalid': $v.fieldTestPagerEntity.uuidJade.$invalid }" v-model="$v.fieldTestPagerEntity.uuidJade.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.uuidRequiredJade')" for="field-test-pager-entity-uuidRequiredJade">Uuid Required Jade</label>
                        <input type="text" class="form-control" name="uuidRequiredJade" id="field-test-pager-entity-uuidRequiredJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.uuidRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.uuidRequiredJade.$invalid }" v-model="$v.fieldTestPagerEntity.uuidRequiredJade.$model"  required/>
                        <div v-if="$v.fieldTestPagerEntity.uuidRequiredJade.$anyDirty && $v.fieldTestPagerEntity.uuidRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.uuidRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.byteImageJade')" for="field-test-pager-entity-byteImageJade">Byte Image Jade</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestPagerEntity.byteImageJadeContentType + ';base64,' + fieldTestPagerEntity.byteImageJade" style="max-height: 100px;" v-if="fieldTestPagerEntity.byteImageJade" alt="fieldTestPagerEntity image"/>
                            <div v-if="fieldTestPagerEntity.byteImageJade" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestPagerEntity.byteImageJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteImageJade)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageJade', 'byteImageJadeContentType', 'file_byteImageJade')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageJade" id="file_byteImageJade" v-on:change="setFileData($event, fieldTestPagerEntity, 'byteImageJade', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageJade" id="field-test-pager-entity-byteImageJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.byteImageJade.$invalid, 'invalid': $v.fieldTestPagerEntity.byteImageJade.$invalid }" v-model="$v.fieldTestPagerEntity.byteImageJade.$model" />
                        <input type="hidden" class="form-control" name="byteImageJadeContentType" id="field-test-pager-entity-byteImageJadeContentType"
                            v-model="fieldTestPagerEntity.byteImageJadeContentType" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.byteImageRequiredJade')" for="field-test-pager-entity-byteImageRequiredJade">Byte Image Required Jade</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestPagerEntity.byteImageRequiredJadeContentType + ';base64,' + fieldTestPagerEntity.byteImageRequiredJade" style="max-height: 100px;" v-if="fieldTestPagerEntity.byteImageRequiredJade" alt="fieldTestPagerEntity image"/>
                            <div v-if="fieldTestPagerEntity.byteImageRequiredJade" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestPagerEntity.byteImageRequiredJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteImageRequiredJade)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageRequiredJade', 'byteImageRequiredJadeContentType', 'file_byteImageRequiredJade')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageRequiredJade" id="file_byteImageRequiredJade" v-on:change="setFileData($event, fieldTestPagerEntity, 'byteImageRequiredJade', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageRequiredJade" id="field-test-pager-entity-byteImageRequiredJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.byteImageRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.byteImageRequiredJade.$invalid }" v-model="$v.fieldTestPagerEntity.byteImageRequiredJade.$model"  required/>
                        <input type="hidden" class="form-control" name="byteImageRequiredJadeContentType" id="field-test-pager-entity-byteImageRequiredJadeContentType"
                            v-model="fieldTestPagerEntity.byteImageRequiredJadeContentType" />
                        <div v-if="$v.fieldTestPagerEntity.byteImageRequiredJade.$anyDirty && $v.fieldTestPagerEntity.byteImageRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.byteImageRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.byteImageMinbytesJade')" for="field-test-pager-entity-byteImageMinbytesJade">Byte Image Minbytes Jade</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestPagerEntity.byteImageMinbytesJadeContentType + ';base64,' + fieldTestPagerEntity.byteImageMinbytesJade" style="max-height: 100px;" v-if="fieldTestPagerEntity.byteImageMinbytesJade" alt="fieldTestPagerEntity image"/>
                            <div v-if="fieldTestPagerEntity.byteImageMinbytesJade" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestPagerEntity.byteImageMinbytesJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteImageMinbytesJade)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageMinbytesJade', 'byteImageMinbytesJadeContentType', 'file_byteImageMinbytesJade')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageMinbytesJade" id="file_byteImageMinbytesJade" v-on:change="setFileData($event, fieldTestPagerEntity, 'byteImageMinbytesJade', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageMinbytesJade" id="field-test-pager-entity-byteImageMinbytesJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.byteImageMinbytesJade.$invalid, 'invalid': $v.fieldTestPagerEntity.byteImageMinbytesJade.$invalid }" v-model="$v.fieldTestPagerEntity.byteImageMinbytesJade.$model" />
                        <input type="hidden" class="form-control" name="byteImageMinbytesJadeContentType" id="field-test-pager-entity-byteImageMinbytesJadeContentType"
                            v-model="fieldTestPagerEntity.byteImageMinbytesJadeContentType" />
                        <div v-if="$v.fieldTestPagerEntity.byteImageMinbytesJade.$anyDirty && $v.fieldTestPagerEntity.byteImageMinbytesJade.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.byteImageMaxbytesJade')" for="field-test-pager-entity-byteImageMaxbytesJade">Byte Image Maxbytes Jade</label>
                        <div>
                            <img v-bind:src="'data:' + fieldTestPagerEntity.byteImageMaxbytesJadeContentType + ';base64,' + fieldTestPagerEntity.byteImageMaxbytesJade" style="max-height: 100px;" v-if="fieldTestPagerEntity.byteImageMaxbytesJade" alt="fieldTestPagerEntity image"/>
                            <div v-if="fieldTestPagerEntity.byteImageMaxbytesJade" class="form-text text-danger clearfix">
                                <span class="pull-left">{{fieldTestPagerEntity.byteImageMaxbytesJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteImageMaxbytesJade)}}</span>
                                <button type="button" v-on:click="clearInputImage('byteImageMaxbytesJade', 'byteImageMaxbytesJadeContentType', 'file_byteImageMaxbytesJade')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteImageMaxbytesJade" id="file_byteImageMaxbytesJade" v-on:change="setFileData($event, fieldTestPagerEntity, 'byteImageMaxbytesJade', true)" accept="image/*" v-text="$t('entity.action.addimage')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteImageMaxbytesJade" id="field-test-pager-entity-byteImageMaxbytesJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.byteImageMaxbytesJade.$invalid, 'invalid': $v.fieldTestPagerEntity.byteImageMaxbytesJade.$invalid }" v-model="$v.fieldTestPagerEntity.byteImageMaxbytesJade.$model" />
                        <input type="hidden" class="form-control" name="byteImageMaxbytesJadeContentType" id="field-test-pager-entity-byteImageMaxbytesJadeContentType"
                            v-model="fieldTestPagerEntity.byteImageMaxbytesJadeContentType" />
                        <div v-if="$v.fieldTestPagerEntity.byteImageMaxbytesJade.$anyDirty && $v.fieldTestPagerEntity.byteImageMaxbytesJade.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.byteAnyJade')" for="field-test-pager-entity-byteAnyJade">Byte Any Jade</label>
                        <div>
                            <div v-if="fieldTestPagerEntity.byteAnyJade" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestPagerEntity.byteAnyJadeContentType, fieldTestPagerEntity.byteAnyJade)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestPagerEntity.byteAnyJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteAnyJade)}}</span>
                                <button type="button" v-on:click="fieldTestPagerEntity.byteAnyJade=null;fieldTestPagerEntity.byteAnyJadeContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyJade" id="file_byteAnyJade" v-on:change="setFileData($event, fieldTestPagerEntity, 'byteAnyJade', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyJade" id="field-test-pager-entity-byteAnyJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.byteAnyJade.$invalid, 'invalid': $v.fieldTestPagerEntity.byteAnyJade.$invalid }" v-model="$v.fieldTestPagerEntity.byteAnyJade.$model" />
                        <input type="hidden" class="form-control" name="byteAnyJadeContentType" id="field-test-pager-entity-byteAnyJadeContentType"
                            v-model="fieldTestPagerEntity.byteAnyJadeContentType" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.byteAnyRequiredJade')" for="field-test-pager-entity-byteAnyRequiredJade">Byte Any Required Jade</label>
                        <div>
                            <div v-if="fieldTestPagerEntity.byteAnyRequiredJade" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestPagerEntity.byteAnyRequiredJadeContentType, fieldTestPagerEntity.byteAnyRequiredJade)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestPagerEntity.byteAnyRequiredJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteAnyRequiredJade)}}</span>
                                <button type="button" v-on:click="fieldTestPagerEntity.byteAnyRequiredJade=null;fieldTestPagerEntity.byteAnyRequiredJadeContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyRequiredJade" id="file_byteAnyRequiredJade" v-on:change="setFileData($event, fieldTestPagerEntity, 'byteAnyRequiredJade', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyRequiredJade" id="field-test-pager-entity-byteAnyRequiredJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.byteAnyRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.byteAnyRequiredJade.$invalid }" v-model="$v.fieldTestPagerEntity.byteAnyRequiredJade.$model"  required/>
                        <input type="hidden" class="form-control" name="byteAnyRequiredJadeContentType" id="field-test-pager-entity-byteAnyRequiredJadeContentType"
                            v-model="fieldTestPagerEntity.byteAnyRequiredJadeContentType" />
                        <div v-if="$v.fieldTestPagerEntity.byteAnyRequiredJade.$anyDirty && $v.fieldTestPagerEntity.byteAnyRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.byteAnyRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.byteAnyMinbytesJade')" for="field-test-pager-entity-byteAnyMinbytesJade">Byte Any Minbytes Jade</label>
                        <div>
                            <div v-if="fieldTestPagerEntity.byteAnyMinbytesJade" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestPagerEntity.byteAnyMinbytesJadeContentType, fieldTestPagerEntity.byteAnyMinbytesJade)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestPagerEntity.byteAnyMinbytesJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteAnyMinbytesJade)}}</span>
                                <button type="button" v-on:click="fieldTestPagerEntity.byteAnyMinbytesJade=null;fieldTestPagerEntity.byteAnyMinbytesJadeContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyMinbytesJade" id="file_byteAnyMinbytesJade" v-on:change="setFileData($event, fieldTestPagerEntity, 'byteAnyMinbytesJade', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyMinbytesJade" id="field-test-pager-entity-byteAnyMinbytesJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.byteAnyMinbytesJade.$invalid, 'invalid': $v.fieldTestPagerEntity.byteAnyMinbytesJade.$invalid }" v-model="$v.fieldTestPagerEntity.byteAnyMinbytesJade.$model" />
                        <input type="hidden" class="form-control" name="byteAnyMinbytesJadeContentType" id="field-test-pager-entity-byteAnyMinbytesJadeContentType"
                            v-model="fieldTestPagerEntity.byteAnyMinbytesJadeContentType" />
                        <div v-if="$v.fieldTestPagerEntity.byteAnyMinbytesJade.$anyDirty && $v.fieldTestPagerEntity.byteAnyMinbytesJade.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.byteAnyMaxbytesJade')" for="field-test-pager-entity-byteAnyMaxbytesJade">Byte Any Maxbytes Jade</label>
                        <div>
                            <div v-if="fieldTestPagerEntity.byteAnyMaxbytesJade" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(fieldTestPagerEntity.byteAnyMaxbytesJadeContentType, fieldTestPagerEntity.byteAnyMaxbytesJade)" v-text="$t('entity.action.open')">open</a><br>
                                <span class="pull-left">{{fieldTestPagerEntity.byteAnyMaxbytesJadeContentType}}, {{byteSize(fieldTestPagerEntity.byteAnyMaxbytesJade)}}</span>
                                <button type="button" v-on:click="fieldTestPagerEntity.byteAnyMaxbytesJade=null;fieldTestPagerEntity.byteAnyMaxbytesJadeContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_byteAnyMaxbytesJade" id="file_byteAnyMaxbytesJade" v-on:change="setFileData($event, fieldTestPagerEntity, 'byteAnyMaxbytesJade', false)" v-text="$t('entity.action.addblob')"/>
                        </div>
                        <input type="hidden" class="form-control" name="byteAnyMaxbytesJade" id="field-test-pager-entity-byteAnyMaxbytesJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.byteAnyMaxbytesJade.$invalid, 'invalid': $v.fieldTestPagerEntity.byteAnyMaxbytesJade.$invalid }" v-model="$v.fieldTestPagerEntity.byteAnyMaxbytesJade.$model" />
                        <input type="hidden" class="form-control" name="byteAnyMaxbytesJadeContentType" id="field-test-pager-entity-byteAnyMaxbytesJadeContentType"
                            v-model="fieldTestPagerEntity.byteAnyMaxbytesJadeContentType" />
                        <div v-if="$v.fieldTestPagerEntity.byteAnyMaxbytesJade.$anyDirty && $v.fieldTestPagerEntity.byteAnyMaxbytesJade.$invalid">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.byteTextJade')" for="field-test-pager-entity-byteTextJade">Byte Text Jade</label>
                        <textarea class="form-control" name="byteTextJade" id="field-test-pager-entity-byteTextJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.byteTextJade.$invalid, 'invalid': $v.fieldTestPagerEntity.byteTextJade.$invalid }" v-model="$v.fieldTestPagerEntity.byteTextJade.$model" ></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.fieldTestPagerEntity.byteTextRequiredJade')" for="field-test-pager-entity-byteTextRequiredJade">Byte Text Required Jade</label>
                        <textarea class="form-control" name="byteTextRequiredJade" id="field-test-pager-entity-byteTextRequiredJade"
                            :class="{'valid': !$v.fieldTestPagerEntity.byteTextRequiredJade.$invalid, 'invalid': $v.fieldTestPagerEntity.byteTextRequiredJade.$invalid }" v-model="$v.fieldTestPagerEntity.byteTextRequiredJade.$model"  required></textarea>
                        <div v-if="$v.fieldTestPagerEntity.byteTextRequiredJade.$anyDirty && $v.fieldTestPagerEntity.byteTextRequiredJade.$invalid">
                            <small class="form-text text-danger" v-if="!$v.fieldTestPagerEntity.byteTextRequiredJade.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.cancel')">Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.fieldTestPagerEntity.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./field-test-pager-entity-update.component.ts">
</script>
