<template>
    <ul class="username-type-tag">
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
   props: {},
    
}
</script>
<style lang="scss" scoped>
.username-type-tag {
    text-align: right;
    li {
        display: inline-block;
        margin-left: 15px;
        padding: 7px 15px 6px 13px;
        border-radius: 100px;
        background-color: #fff;
        font-size: 14px;
        line-height: 18px;
        color: #ccc;
        &.current {
            background-color: $color-main;
            color: #fff;
        }
    }
}
</style>