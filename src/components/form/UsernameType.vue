<template>
    <ul class="username-type-tag" :style="{'text-align': align}">
        <li class="current">
            <i class="icon icon-mb--4">
                <svg-icon icon-class="phone" class-name="svg-icon-18"></svg-icon>
            </i>
            手机
        </li>
        <li>
            <i class="icon icon-mb--4">
                <svg-icon icon-class="email" class-name="svg-icon-18"></svg-icon>
            </i>
            邮箱
        </li>
    </ul>
</template>

<script>
export default {
    name: "UsernameType",
    components: {},
    props: {
        align: {
            type: String,
            default: "right"
        }
    }
}
</script>
<style lang="scss" scoped>

</style>