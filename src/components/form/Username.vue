<template>
    <div class="form-item">
        <div class="form-body" :class="{'active' : active}">
            <van-field @focus="active = true" @blur="active = false" v-model="value" :error="error" placeholder="请输入用户名" />
        </div>
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