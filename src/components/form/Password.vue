<template>
    <div>
        <!-- 输入密码 -->
        <div class="form-item">
            <label v-if="label" style="color: #fff;">{{ labelText }}</label>
            <div class="form-body" :class="{'active' : active1}">
                <div class="pr">
                    <van-field :error-message="error1" :type="value_type1" @focus="active1 = true" @blur="active1 = false" @input="inputEnter1" v-model="value1" placeholder="输入密码" />
                    <div class="field-right-inner">
                        <i class="icon" @click="toggleType('value_type1')">
                            <svg-icon :icon-class="value_type1 === 'password' ? 'eyeOff' : 'eye'" class-name="svg-icon-24 svg-icon-password"></svg-icon>
                        </i>
                    </div>
                </div>
            </div>
        </div>
        <!-- 确认密码 -->
        <div class="form-item">
            <label v-if="label" style="color: #fff;">{{ labelText }}</label>
            <div class="form-body" :class="{'active' : active2}">
                <div class="pr">
                    <van-field :error-message="error2" :type="value_type2" @focus="active2 = true" @blur="active2 = false" @input="inputEnter2" v-model="value2" placeholder="确认密码" />
                    <div class="field-right-inner">
                        <i class="icon" @click="toggleType('value_type2')">
                            <svg-icon :icon-class="value_type2 === 'password' ? 'eyeOff' : 'eye'" class-name="svg-icon-24 svg-icon-password"></svg-icon>
                        </i>
                    </div>
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
            // 密码
            value1: "",
            active1: false,
            value_type1: "password",
            error1: "",
            // 确认密码
            value2: "",
            active2: false,
            value_type2: "password",
            error2: ""
                
        }
   },
   methods: {
       toggleType(data){
           this[data] = this[data] === 'password' ? 'text' : 'password';
       },
       inputEnter1(value){
            const value1 = this.value1;  // 密码
            const value2 = this.value2;  // 确认密码
            
            let flag = validatePass(value);
            let msg = flag ? "" : "请输入6~20位的字母+数字";
            
            if(flag) {
                if(value2 && value2 != value) {
                    msg = "两次密码不一致";
                    flag = false;
                }else if(value2 && value2 == value) {
                    msg = "";
                    flag = true;
                    this.error2 = "";
                    this.$store.commit("account/SET_STATE", {
                        password_value: { value: flag ? value2 : "" },
                        password_status: { value: flag },
                    })
                }
            }
            // 提示
            this.error1 = !value ? "" : msg;
            // 更新数据 
            this.$store.commit("account/SET_STATE", {
                password_value: { value: flag ? value : "" },
                password_status: { value: flag },
            })
       },
       inputEnter2(value){
            const value1 = this.value1;  // 密码
            const value2 = this.value2;  // 确认密码
            
            let flag = validatePass(value);
            let msg = flag ? "" : "请输入6~20位的字母+数字";
            
            if(flag) {
                if(value1 && value1 != value) {
                    msg = "两次密码不一致";
                    flag = false;
                }else if(value1 && value1 == value) {
                    msg = "";
                    flag = true;
                    this.error1 = "";
                    this.$store.commit("account/SET_STATE", {
                        passwords_value: { value: flag ? value1 : "" },
                        passwords_status: { value: flag },
                    })
                }
            }
            // 提示
            this.error2 = !value ? "" : msg;
           // 更新数据 
            this.$store.commit("account/SET_STATE", {
                password_value: { value: flag ? value : "" },
                password_status: { value: flag },
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