<!-- home -->
<template>
  <div class="index-container">
    <!-- 头部新闻及图片 -->
    <Heardbar></Heardbar>
    <!--新闻标签栏 -->
    <LaberBar :navdate="navdate" @handle="handle" />
    <!-- 新闻详情列表 -->
    <ListWarp></ListWarp>
  </div>
</template>

<script>
import DB from '../../utils/DB.js'
import Heardbar from '@/components/Heardbar'
import LaberBar from '@/components/LaberBar'
import ListWarp from '@/components/ListWarp'
export default {
  components: {
    Heardbar,
    LaberBar,
    ListWarp
  },
  data() {
    return {
      navdate: [
        {
          name: '今日说法',
          id: 1
        },
        {
          name: '焦点访谈',
          id: 2
        },
        {
          name: '新闻1 + 1',
          id: 3
        },
        {
          name: '新闻联播文字档',
          id: 4
        },
        {
          name: '杨天宇',
          id: 5
        },
        {
          name: '张文划算',
          id: 6
        },
        {
          name: '杨天宇',
          id: 7
        }
      ],
      message: {
        id: 2,
        title: '王as大声道',
        from: 24,
        content: 'wangkuo@examp阿萨德le.com',
        synopsis: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      }
    }
  },
  methods: {
    handle(value) {
      console.log(value)
      DB.update('jinrishuofa', this.message)
    }
  },
  computed: {},
  mounted() {},
  beforeMount() {
    DB.openIndexedDB('news', 1)
    DB.read('jinrishuofa', 1)
  }
}
</script>
<style lang="scss" scoped>
</style>
