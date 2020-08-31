<template>
    <div class="panel panel-default ">
    <div class="panel-heading">
      <h3 class="panel-title">搜索标签</h3>

    </div>
    <div class="panel-body">
          <a><router-link class="tag" :to="'/tags/'+item.id" v-for="item in tags">{{item.name}}</router-link></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TagList",
    data(){
    	return {
    		tags:[]
        }
    },
    created() {
    	this.$http.get("tags/?page_size=100").then(res =>{
    		this.tags = res.data.results
        })
		}
	}
</script>

<style scoped>

</style>
