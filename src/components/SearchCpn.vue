<template>
    <div>
        <div v-if="res">
            <article-item v-if="res" v-for="item in searchList" :key="item.id">
                <router-link :to="'/articles/'+item.id" slot="title">{{item.name}}</router-link>
                <a href="#" class="tag" v-for="tag in item.tag" :key="tag.id" slot="tag">{{tag.name}}</a>
                <span slot="content" v-pre="item.content"></span>
                <span slot="author">{{item.author.nick_name}}</span>
                <span slot="read">{{item.read}}</span>
                <span slot="chat">0</span>
                <span slot="publish">{{item.publish}}</span>
            </article-item>
        </div>
        <div v-else>抱歉，未找到相关信息！！</div>
    </div>
</template>

<script>
	import ArticleItem from "./ArticleItem";

	export default {
		name: "SearchCpn",
		components: {
			ArticleItem
		},
		data() {
			return {
				searchList: [],
				res: true
			}
		},
		created() {
			const keyword = this.$route.params.keyword
			this.$http.get('articles/?content=' + keyword).then(res => {
				// console.log(res.data);
				this.searchList = res.data.results
				if (this.searchList.length == 0) {
					this.res = false
				}
			})
		}
	}
</script>

<style scoped>

</style>