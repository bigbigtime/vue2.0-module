<template>
    <div class="form-item">
        <label v-if="label" style="color: #fff;">{{ labelText }}</label>
        <div class="form-body" :class="{'active' : active}">
            <div class="pr">
                <van-field :error-message="error" :type="value_type" @focus="active = true" @blur="active = false" @input="inputEnter" v-model="value" placeholder="确认输入密码" />
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
// 验证
import { validatePass } from "@/utils/validate";
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
            value: "",
            active: false,
            value_type: "password",
            error: ""
       }
   },
   methods: {
       toggleType(){
           this.value_type = this.value_type === 'password' ? 'text' : 'password';
       },
       inputEnter(value){
           // 获取密码的值
           const password = this.$store.state.account.password_value;
           let flag = validatePass(value);
           let msg = flag ? "" : "请输入6~20位的字母+数字";
           if(flag) {
               if(password && password != value) {
                   msg = "两次密码不一致";
                   flag = false;
               }
           }
           // 提示
           this.error = !value ? "" : msg;
           // 更新数据 
            this.$store.commit("account/SET_STATE", {
                passwords_value: { value: flag ? value : "" },
                passwords_status: { value: flag },
            })
       }
   },
   watch: {
       "$store.state.account.account_type": {
           handler(newValue){
               this.value = "";
               this.inputEnter();
           }
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