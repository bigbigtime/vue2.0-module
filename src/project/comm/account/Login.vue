<template>
    <div id="login">
        <Navbar />
        <Pagename />
        <UsernameTypeTag />
        <div class="blank-10-5"></div>
        <Username />
        <Code />
        <Password />
        <Passwords :inlineStyle="{marginBottom: 0}" />
        <div class="blank-102"></div>
        <SubmitButton />
    </div>
</template>
<script>
import Navbar from "@c/comm/Navbar";
import Username from "@c/form/Username";
import Password from "@c/form/Password";
import Passwords from "@c/form/Passwords";
import SubmitButton from "@c/form/Submit";
import Code from "@c/form/Code";
import Pagename from "./components/PageTitle";
import UsernameTypeTag from "./components/UsernameType";

export default {
    name: "Login",
    components: { Navbar, Pagename, UsernameTypeTag, Username, Code, Password, Passwords, SubmitButton }
}
</script>
<style lang="scss">

</style>