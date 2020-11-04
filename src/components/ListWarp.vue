<template>
  <div class="list_style">
    <ul>
      <li v-for="(item, index) in newsData" :key="index">
        <h2>{{ item.title }}</h2>
        <p>{{ item.content }}</p>
        <div>
          <van-row>
            <van-col span="4"><van-icon name="star-o" />收藏</van-col>
            <van-col span="4"><van-icon name="browsing-history-o" />浏览</van-col>
            <van-col span="12" offset="4">{{ item.from }}</van-col>
          </van-row>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ListWarp',
  data() {
    return {
      newsData: [
        {
          id: 1,
          title: '《今日说法》20201025"女友"的戏码（下）',
          from: '转载来自与新闻联播今日说法',
          content:
            '本期节目主要内容:2020年四月，42岁的程伟到江苏盐城的一个警务站报警说自己可能在一款叫"陌友"的软件上被骗了...',
          synopsis:
            '本期节目主要内容:2020年四月，42岁的程伟到江苏盐城的一个警务站报警说自己可能在一款叫"陌友"的软件上被骗了...'
        },
        {
          id: 2,
          title: '《今日说法》20201025"女友"的戏码（上）',
          from: '转载来自与新闻联播今日说法',
          content:
            '本期节目主要内容:2020年四月，42岁的程伟到江苏盐城的一个警务站报警说自己可能在一款叫"陌友"的软件上被骗了...',
          synopsis:
            '本期节目主要内容:2020年四月，42岁的程伟到江苏盐城的一个警务站报警说自己可能在一款叫"陌友"的软件上被骗了...'
        },
        {
          id: 3,
          title: '《今日说法》2020101017苦涩的婚姻（下）',
          from: '转载来自与新闻联播今日说法',
          content:
            '本期节目主要内容:2020年四月，42岁的程伟到江苏盐城的一个警务站报警说自己可能在一款叫"陌友"的软件上被骗了...',
          synopsis:
            '本期节目主要内容:2020年四月，42岁的程伟到江苏盐城的一个警务站报警说自己可能在一款叫"陌友"的软件上被骗了...'
        },
        {
          id: 4,
          title: '《今日说法》2020101017苦涩的婚姻（下）',
          from: '转载来自与新闻联播今日说法',
          content:
            '本期节目主要内容:2020年四月，42岁的程伟到江苏盐城的一个警务站报警说自己可能在一款叫"陌友"的软件上被骗了...',
          synopsis:
            '本期节目主要内容:2020年四月，42岁的程伟到江苏盐城的一个警务站报警说自己可能在一款叫"陌友"的软件上被骗了...'
        },
        {
          id: 5,
          title: '《今日说法》20201025"女友"的戏码（上）',
          from: '转载来自与新闻联播今日说法',
          content:
            '本期节目主要内容:2020年四月，42岁的程伟到江苏盐城的一个警务站报警说自己可能在一款叫"陌友"的软件上被骗了...',
          synopsis:
            '本期节目主要内容:2020年四月，42岁的程伟到江苏盐城的一个警务站报警说自己可能在一款叫"陌友"的软件上被骗了...'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.list_style {
  width: 100%;
  li {
    border-bottom: 1px solid #e2e2e2;
    h2 {
      font-size: 0.4rem;
      //   font-weight: normal;
      margin: 0.2rem 0 0 0;
    }
    p {
      margin: 0 0.2rem 0.2rem 0.1rem;
      font-size: 0.34rem;
      color: rgba($color: #12171705, $alpha: 0.25);
      font-weight: bold;
    }
    div {
      margin-bottom: 0.1rem;
      text-align: center;
      .van-col .van-col--12 .van-col--offset-4 :last-child {
        text-align: end;
        padding-right: 0.3rem;
        font-size: 0.1rem;
      }
      .van-icon {
        margin: 0 auto;
      }
    }
  }
}
</style>
