<template>
    <div>
        <button :disabled="disabled" @click="submit" class="button-ui button-ui-main button-ui-block button-ui-round button-ui-large">
            <span>{{ label }}</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Username',
    props: {
        label: {
            type: String,
            default: "登录"
        },
        type: {
            type: String,
            default: "login"
        }
    },
    data(){
        return {
                value: "",
                active: false,
                error: false
        }
    },
    computed: {
        disabled(){
            const username = this.$store.state.account.username_status;
            // 登录
            if(this.type === "login") {
                const password = this.$store.state.account.password_status;
                return (username && password) ? false : true;
            }
            // 注册、忘记密码
            if(this.type === "register" || this.type === "forget") {
                const password = this.$store.state.account.password_status;
                const passwords = this.$store.state.account.passwords_status;
                return (username && password && passwords) ? false : true;
            }
        }
    },
    methods: {
        submit(){
            if(this.type === "login") { this.login(); }
            if(this.type === "register") { this.register(); }
            if(this.type === "forget") { this.forget(); }
        },
        login(){},
        register(){},
        forget(){},
    }
}
</script>
<style lang="scss" scoped>
</style>