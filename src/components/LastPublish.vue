<template>
    <div class="panel panel-default ">
    <div class="panel-heading">
      <h3 class="panel-title">热门文章</h3>

    </div>
    <div class="panel-body">
      <ul class="list-unstyled sidebar">
        <li v-for="item in articles">
          <router-link :to="'/articles/'+item.id"><el-link>{{item.name}}</el-link></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LastPublish",
    data(){
    	return {
    		articles:[]
        }
    },
    created() {
    	this.$http.get("articles/?page_size=7&ordering=-read").then(res =>{
    		this.articles = res.data.results
        })
		}
	}
</script>

<style scoped>

</style>
