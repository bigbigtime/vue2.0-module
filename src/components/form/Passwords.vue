<template>
    <div class="form-item" :style="inlineStyle">
        <div class="form-body" :class="{'active' : active}">
            <div class="pr">
                <van-field :type="value_type" @focus="active = true" @blur="active = false" v-model="value" :error="error" placeholder="获取验证码" />
                <div class="field-right-inner">
                    <i class="icon icon-size-27" :class="value_type === 'password' ? 'icon-eye-off' : 'icon-eye-on'" @click="toggleType"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: 'Username',
   props: {
       inlineStyle: {
           type: Object,
           default: () => ({})
       }
   },
   data(){
       return {
            value: "123456",
            active: false,
            value_type: "password",
            error: false
       }
   },
   methods: {
       toggleType(){
           this.value_type = this.value_type === 'password' ? 'text' : 'password';
       }
   }
}
</script>
<style lang="scss" scoped>
.field-right-inner {
    position: absolute;
    right: 0;
    top: 0;
}
</style>