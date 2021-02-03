<template>
    <div class="form-item">
        <label v-if="label" style="color: #fff;">{{ labelText }}</label>
        <div class="form-body" :class="{'active' : active}">
            <van-field @focus="active = true" @blur="active = false" v-model="value" :error="error" placeholder="请输入用户名" />
        </div>
    </div>
</template>

<script>
export default {
   name: 'Username',
   props: {
       label: {
           type: Boolean,
           default: false
       },
       labelText: {
           type: String,
           default: "请输入手机号"
       }
   },
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