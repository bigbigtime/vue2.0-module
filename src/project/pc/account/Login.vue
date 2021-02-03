<template>
    <div class="account-layout">
        <div class="wrap-left">
            <div class="account-banner"></div>
        </div>
        <div class="wrap-right">
            <div class="accont-wrap">
                <Username :label="true" />
                <Password :label="true" label-text="请再次输入密码" />
                <SubmitButton />
            </div>
        </div>
    </div>
</template>

<script>
import Username from "@c/form/Username";
import Password from "@c/form/Password";
import SubmitButton from "@c/form/Submit";

export default {
   name: "Login",
   components: { Username, Password, SubmitButton},
   props: {},
   
}
</script>
<style lang='scss' scoped>
</style>