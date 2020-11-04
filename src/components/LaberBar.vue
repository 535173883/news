<template>
  <div class="label_bar">
    <van-tabs color="#33B1FF" ellipsis title-active-color="#33B1FF" @click="handle">
      <van-tab v-for="index in navdate" :title="index.name" :key="index.id"></van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: 'LaberBar',
  props: {
    navdate: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    handle(value) {
      this.$emit('handle', value)
    }
  }
}
</script>
<style lang="scss" scoped>
.label_bar {
  border-bottom: 1px solid #e2e2e2;
  margin-top: 0.3rem;
}
</style>
