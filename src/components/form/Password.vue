<template>
    <div>
        <!-- 输入密码  password -->
        <div class="form-item">
            <label v-if="label" style="color: #fff;">{{ labelText }}</label>
            <div class="form-body" :class="{'active' : password.active}">
                <div class="pr">
                    <van-field v-model="password.value"  :error-message="password.error" :type="password.value_type" @focus="highlight('password', true)" @blur="highlight('password', false)" @input="inputEnter('password')" placeholder="输入密码" />
                    <div class="field-right-inner">
                        <i class="icon" @click="toggleType('password')">
                            <svg-icon :icon-class="iconStatus('password')" class-name="svg-icon-24 svg-icon-password"></svg-icon>
                        </i>
                    </div>
                </div>
            </div>
        </div>
        <!-- 确认密码 passwords-->
        <div class="form-item" v-if="passwords_show">
            <label v-if="label" style="color: #fff;">{{ labelText }}</label>
            <div class="form-body" :class="{'active' : passwords.active}">
                <div class="pr">
                    <van-field v-model="passwords.value"  :error-message="passwords.error" :type="passwords.value_type" @focus="highlight('passwords', true)" @blur="highlight('passwords', false)" @input="inputEnter('passwords')" placeholder="确认密码" />
                    <div class="field-right-inner">
                        <i class="icon" @click="toggleType('passwords')">
                            <svg-icon :icon-class="iconStatus('passwords')" class-name="svg-icon-24 svg-icon-password"></svg-icon>
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
    name: 'Password',
    props: {
        label: {
            type: Boolean,
            default: false
        },
        labelText: {
            type: String,
            default: "请输入密码"
        },
        passwords_show: {
            type: Boolean,
            default: true
        }
    },
    computed:{
        iconStatus(){
            return (data) => {
                const type = this[data].value_type;
                return type === 'password' ? 'eyeOff' : 'eye'
            }
        }
    },
   data(){
        return {
            // 密码
            password: {
                value: "",
                active: false,
                value_type: "password",
                error: "",
                store_value: "passwords_value"
            },
            // 确认密码
            passwords: {
                value: "",
                active: false,
                value_type: "password",
                error: "",
                store_value: "password_value"
            }
        }
   },
   methods: {
        toggleType(data){
            this[data].value_type = this[data].value_type === 'password' ? 'text' : 'password';
        },
        highlight(data, status){ 
            this[data].active = status;
        },
        inputEnter(data){  // password、 passwords
            // 密码
            const value = this[data].value; 
            const store_value = this.$store.state.account[this[data].store_value];
            // 检验
            let flag = validatePass(value);
            // 错误提示
            let msg = flag ? "" : "请输入6~20位的字母+数字";
            
            if(flag) {
                /**
                 * 1、另一个密码不存在值 
                 * 2、都存在值，两次值不一致
                 * 3、都存在值，两次值一致
                 */
                if(store_value && store_value != value) {  // 2
                    msg = "两次密码不一致";
                    flag = false;
                }else if(store_value && store_value == value){  //3
                    msg = ""; flag = true;
                    this.passwords.error = "";
                    this.password.error = "";
                    this.$store.commit("account/SET_STATE", {
                        passwords_status: { value: flag },
                        password_status: { value: flag },
                    })
                }else{  //1
                    msg = "";
                    flag = true;
                }
            }
            // 提示
            this[data].error = !value ? "" : msg;
            // 更新数据 
            this.$store.commit("account/SET_STATE", {
                [`${data}_value`]: { value },
                [`${data}_status`]: { value: flag }
                // password_value: { value },
                // password_status: { value: flag },
            })
        },
        clear(){
            this.password.value = "";
            this.password.error = "";
            this.passwords.value = "";
            this.passwords.error = "";
            this.$store.commit("account/CLEAR");
        }
   },
   watch: {
       "$store.state.account.account_type": {
           handler(newValue){
               this.clear();
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