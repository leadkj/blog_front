<template>
  <div>
    <div class="articleTitle">{{ article.name }}</div>
    <div class="articleAttr">
      <p>
              <span class="count">
                <i class="el-icon-user-solid"></i>
                <a>{{ author }}</a>
              </span>
        <span class="count">
                <i class="el-icon-view"></i>
                <a>{{ article.read }}</a>
              </span>
        <span class="count">
                <i class="el-icon-star-on" @click="likeClick"></i>
                <a>{{like}}</a>
              </span>
        <span class="count">
                <i class="el-icon-date"></i>
                <a>{{ article.publish }}</a>
              </span>
      </p>

    </div>
    <el-divider><i class="el-icon-bottom"></i></el-divider>
    <div class="articleContent" v-html="content" style="white-space: pre-wrap;">
    </div>

    <div class="articleTag">
      <router-link :to="'/articles/?tag='+tag.id" class="tag" v-for="tag in article.tag" :key="tag.name">
        {{ tag.name }}
      </router-link>
    </div>

    <el-divider content-position="left">头上一片晴天，心中一个想念</el-divider>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      article: {},
      author: '',
      content: '',
      like: null,
      id:this.$route.params.id
    }
  },
  filters: {
    reattr(value) {

      return result = value.replace('src="/media', 'src="http://127.0.0.1:8000/media')
    }
  },
  methods: {
    likeClick() {
      this.$http.put('articles/' + this.id + '/updateLike/', {"like": "1"}).then(res => {
        this.like = res.data.like
        console.log(res.data);
      })
    }

  },
  created() {
    // const id = this.$route.params.id
    this.$http.get('articles/' + this.id).then(res => {
      this.article = res.data
      this.author = res.data.author.nick_name
      this.like = res.data.like
      // this.content = res.data.content.replace('src="/media', 'src="http://127.0.0.1:8080/media')
      // console.log(res.data);
      this.content = res.data.content

    })
    // const data = JSON.stringify({"read":"1"})
    this.$http.put('articles/' + this.id + '/updateRead/', {"read": "1"}).then(res => {
      // console.log(res.data);
    })
  }
}
</script>

<style lang="less" scoped>
.el-icon-star-on{
  cursor: pointer;
}

.articleTitle {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}

.articleAttr {
  padding-left: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
  background-color: #F7F7FC;
  height: 25px;
  /*margin-top: 10px;*/
}


.articleContent {
  width: 710px;
  margin-bottom: 10px;
  /*background-color: #F7F7FC;*/
  padding: 10px 30px 50px 30px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

}


.articleTag {
  padding-left: 40px;


}
</style>