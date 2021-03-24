<template>
    <div class="account-layout">
        <div class="wrap-right">
            <div class="accont-wrap">
                <UsernameTypeTag align="center" />
                <Username :label="true" />
                <Password :label="true" label-text="请再次输入密码" />
                <div class="blank-50"></div>
                <SubmitButton />
            </div>
        </div>
        <div class="wrap-left">
            <div class="account-banner"></div>
        </div>
    </div>
</template>

<script>
import Username from "@c/form/Username";
import Password from "@c/form/Password";
import SubmitButton from "@c/form/Submit";
import UsernameTypeTag from "@c/form/UsernameType";
export default {
   name: "Login",
   components: { Username, Password, SubmitButton, UsernameTypeTag},
   props: {},
   
}
</script>
<style lang='scss' scoped>
</style>