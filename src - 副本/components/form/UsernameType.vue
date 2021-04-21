<template>
    <ul class="username-type-tag" :style="{'text-align': align}">
        <li :class="{'current': item.value === current}" v-for="item in tag_menu" :key="item.value" @click="handlerTab(item)">
            <i class="icon icon-mb--4">
                <svg-icon :icon-class="item.icon" class-name="svg-icon-18"></svg-icon>
            </i>
            {{ item.label }}
        </li>
    </ul>
</template>

<script>
export default {
    name: "UsernameType",
    components: {},
    data(){
        return {
            tag_menu: [
                { label: "手机", value: "phone", icon: "phone" },
                { label: "邮箱", value: "email", icon: "email" },
            ],
            current: "phone"
        }
    },
    props: {
        align: {
            type: String,
            default: "right"
        }
    },
    methods: {
        handlerTab(data){
            this.current = data.value;
            this.$store.commit("account/SET_STATE", {
                account_type: {
                    value: data.value
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>

</style>