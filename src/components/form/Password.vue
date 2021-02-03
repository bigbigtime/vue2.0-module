<template>
    <div class="form-item">
        <label v-if="label" style="color: #fff;">{{ labelText }}</label>
        <div class="form-body" :class="{'active' : active}">
            <div class="pr">
                <van-field :type="value_type" @focus="active = true" @blur="active = false" v-model="value" :error="error" placeholder="获取验证码" />
                <div class="field-right-inner">
                    <i class="icon" @click="toggleType">
                        <svg-icon :icon-class="value_type === 'password' ? 'eyeOff' : 'eye'" class-name="svg-icon-24 svg-icon-password"></svg-icon>
                    </i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: 'Username',
   props: {
       label: {
           type: Boolean,
           default: false
       },
       labelText: {
           type: String,
           default: "请输入密码"
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