<template>
    <div id="login">
        <Navbar />
        <Pagename />
        <UsernameTypeTag />
    </div>
</template>
<script>
import Navbar from "@c/comm/Navbar";
import Pagename from "./components/PageTitle";
import UsernameTypeTag from "./components/UsernameType";
export default {
    name: "Login",
    components: { Navbar, Pagename, UsernameTypeTag }
}
</script>
<style lang="scss">

</style>