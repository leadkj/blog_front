<template>
    <div>
        <article-item v-for="item in ArticleTagList" :key="item.id">
            <router-link :to="'/articles/'+item.id" slot="title">{{item.name}}</router-link>
            <a href="#" class="tag" v-for="tag in item.tag" :key="tag.id" slot="tag">{{tag.name}}</a>
            <span slot="content" v-html="item.content"></span>
            <span slot="author">{{item.author.nick_name}}</span>
            <span slot="read">{{item.read}}</span>
            <span slot="chat">0</span>
            <span slot="publish">{{item.publish}}</span>
        </article-item>
    </div>
</template>

<script>
	import ArticleItem from "./ArticleItem";

	export default {
		name: "ArticleTag",
		data() {
			return {
				ArticleTagList: []
			}
		},
		components: {
			ArticleItem
		},
		created() {
			const tagid = this.$route.params.id
			this.$http.get('articles/?tag=' + tagid).then(res => {
				console.log(res.data);
				this.ArticleTagList = res.data.results
			})
		}
	}
</script>

<style scoped>

</style>