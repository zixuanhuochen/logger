<!--  -->
<template>
  <div>
    <ul class="newsList">
      <li
        v-for="item in newslist"
        :key="item.colid"
        @click="getNewsMain(item.colid)"
      >
        {{ item.name }}
      </li>
    </ul>
    <NewsMain :newsMain="newsMain" ></NewsMain>
  </div>
</template>

<script>
import NewsMain from '@/components/Home/NewsMain.vue'
import request from '@/network/news'
export default {
  name: "News",
  data() {
    return {
      newslist: [],  
      newsInfo: {
        key: "78a5df97493d9f5000a6b67867c92367",
        num: 10,
        col:''
      },
      newsMain:[]
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.getNewsList();
    
  },
  methods: {
    async getNewsList() {
      const { data: result } = await request({
        url: "channellist/index",
        params: { key: "78a5df97493d9f5000a6b67867c92367" },
        method: "get",
      });
      this.newslist = result.newslist;
      this.getNewsMain(this.newslist[0].colid)
    },
    async getNewsMain(id) {
      this.newsInfo.col = id
      const {data: result} = await request({
        url: "allnews/index",
        params: this.newsInfo,
        method:'get'
      });
      this.newsMain = result.newslist
      console.log(this.newsMain);
    },
   
  },
  components:{
    NewsMain
  }
  
};
</script>
<style scoped lang='less'>
/* @import url(); 引入css类 */
div {
  // background-color: rgba(152, 230, 204, 0.2);
  display: flex;
}
.newsList {
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 100%;
  padding: 10px 20px;
  border: 1px solid turquoise;

  li {
    padding: 10px;
    text-align: center;
  }
  li:hover {
    background-color: rgba(91, 214, 214, 1);
    border-radius: 15px;
    cursor: pointer;
    // border: 1px solid red;
  }
}
</style>