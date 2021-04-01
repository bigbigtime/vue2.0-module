<template>
    <div>
        <button :disabled="disabled" @click="login" class="button-ui button-ui-main button-ui-block button-ui-round button-ui-large">
            <span>登录</span>
        </button>
    </div>
</template>

<script>
export default {
   name: 'Username',
   props: {},
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
           const password = this.$store.state.account.password_status;
           return (username && password) ? false : true;
       }
   },
   methods: {
       login(){ alert(111); }
   }
}
</script>
<style lang="scss" scoped>
</style>