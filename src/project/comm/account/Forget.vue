<template>
    <div id="login">
        <Navbar />
        <Pagename txt="忘记密码" />
        <UsernameTypeTag />
        <div class="blank-10-5"></div>
        <Username />
        <Password />
        <!-- <Passwords /> -->
        <div class="blank-102"></div>
        <SubmitButton />
    </div>
</template>
<script>
import Navbar from "@c/comm/Navbar";
import Username from "@c/form/Username";
import Password from "@c/form/Password";
import Passwords from "@c/form/Passwords";
import SubmitButton from "@c/form/SubmitLogin";
import Code from "@c/form/Code";
import Pagename from "./components/PageTitle";
import UsernameTypeTag from "@c/form/UsernameType";

export default {
    name: "Login",
    components: { Navbar, Pagename, UsernameTypeTag, Username, Code, Password, Passwords, SubmitButton }
}
</script>
<style lang="scss">

</style>