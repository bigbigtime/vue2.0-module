<template>
    <div class="page-name">{{ txt }}</div>
</template>

<script>
export default {
   name: "PageName",
   components: {},
   props: {
       txt: {
           type: String,
           default: ""
       }
   },
}
</script>
<style lang="scss" scoped>
.page-name {
    padding: 20px 0 13px;
    font-size: 24px;
}
</style>