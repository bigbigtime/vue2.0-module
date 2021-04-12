<template>
    <div id="login">
        <Navbar />
        <Pagename txt="登录" />
        <UsernameTypeTag />
        <div class="blank-10-5"></div>
        <Username />
        <Password />
        <div class="blank-102"></div>
        <SubmitButton />
        <div class="link">
            <router-link to="/register">注册</router-link>
            <router-link to="/forget">忘记密码</router-link>
        </div>
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
.link {
    padding: 20px 0;
    text-align: center;
    font-size: 12px;
    a { margin: 0 10px; }
}
</style>