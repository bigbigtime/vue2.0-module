<template>
    <div>
        <button class="button-ui button-ui-main button-ui-block button-ui-round button-ui-large">
            <span>重置密码</span>
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
   }
}
</script>
<style lang="scss" scoped>
</style>