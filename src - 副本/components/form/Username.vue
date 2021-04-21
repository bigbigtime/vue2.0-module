<template>
    <div class="form-item">
        <label v-if="label" style="color: #fff;">{{ labelTxt }}</label>
        <div class="form-body" :class="{'active' : active}">
            <van-field :error-message="error" @focus="active = true" @blur="active = false" @input="inputEnter" v-model="value" :placeholder="placeholder" />
        </div>
    </div>
</template>

<script>
// 验证
import { validatePhone, validateEmail } from "@/utils/validate";
export default {
    name: 'Username',
    props: {
        label: {
            type: Boolean,
            default: false
        },
        labelText: {
            type: String,
            default: "请输入手机号"
        }
    },
    computed: {
        accountType(){
            return this.$store.state.account.account_type;
        },
        // 模块化一些东西，尽可能用配置的方式来渲染元素。
        placeholder(){
            const account_type = this.$store.state.account.account_type;
            return this.config_placeholder[account_type];
        },
        labelTxt(){
            const account_type = this.$store.state.account.account_type;
            return this.config_label[account_type];
        }
    },
    data(){
        return {
            config_placeholder: this.$store.state.config.placeholder,
            config_label: this.$store.state.config.label,
            value: "",
            active: false,
            // 提示
            error: ""
        }
    },
    methods: {
        inputEnter(value){
            let flag = false;
            let msg = "";
            if(this.accountType === "phone") {
                const status = validatePhone(value);
                msg = status ? "" : "请输入11位数字手机号";
                flag = status;
            }
            if(this.accountType === "email") {
                const status = validateEmail(value);
                msg = status ? "" : "邮箱格式不正确";
                flag = status;
            }
            // 提示
            this.error = !value ? "" : msg;
            // 更新数据 
            this.$store.commit("account/SET_STATE", {
                username_value: { value: flag ? value : "" },
                username_status: { value: flag },
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
</style>