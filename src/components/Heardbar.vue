<template>
  <div class="heard_top">
    <div class="newsheard"><span>新闻</span></div>
    <div class="picturebar">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in listObj" :key="item.id">{{ item.name }}</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Heardbar',
  data() {
    return {
      data: '',
      listObj: [
        { id: 1, name: '渔船螃蟹船满载归来' },
        { id: 2, name: '渔船螃蟹船满载归来' },
        { id: 3, name: '渔船螃蟹船满载归来' },
        { id: 4, name: '渔船螃蟹船满载归来' }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.newsheard {
  width: 100%;
  background-color: rgb(0, 204, 255);
  height: 1.1rem;
  text-align: center;
  padding-top: 0.3rem;
  color: rgb(255, 255, 255);
  font-size: 0.5rem;
}
.picturebar {
  width: 100%;
  height: 4rem;
  /* background-color: rgb(85, 138, 228); */
  background: linear-gradient(to right, rgb(85, 138, 228) 0%, rgb(61, 194, 222) 100%);
  border-top-left-radius: 0px 2rem;

  /* border-top-right-radius: 100px 20px; */

  /* border-bottom-left-radius: 50px 0px;画弧线 */

  border-bottom-right-radius: 3rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: rgba($color: #000000, $alpha: 0.2);
}
</style>
