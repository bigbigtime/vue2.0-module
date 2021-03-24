<template>
    <div class="form-item">
        <label v-if="label" style="color: #fff;">{{ label }}</label>
        <div class="form-body" :class="{'active' : active}">
            <van-field @focus="active = true" @blur="active = false" v-model="value" :error="error" :placeholder="placeholder" />
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
            default: "请输入手机号"
        }
    },
    computed: {
        // 模块化一些东西，尽可能用配置的方式来渲染元素。
        placeholder(){
            const account_type = this.$store.state.account.account_type;
            return this.config_placeholder[account_type];
        },
        label(){
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
            error: false
        }
    }
}
</script>
<style lang="scss" scoped>
</style>