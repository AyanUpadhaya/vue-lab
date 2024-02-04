<template>
    <div>
        <div v-if="isLoading">
            <progress class="progress w-56"></progress>
        </div>
        <div v-else>
            <h2 class="text-2xl font-semibold mb-3">
                Title: {{ post?.title }}</h2>
            <p class="mb-3 text-sm font-semibold text-grey-300">
                {{ post?.body }}
            </p>
            <router-link to="/">
                <button class="btn btn-primary">Go back</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isLoading:false,
                post:{}
            }
        },
        methods:{
            async getPost(id){
                this.isLoading = true
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                const data = await res.json()
                this.post = data
                this.isLoading = false
            }
        },
        mounted(){
            this.getPost(this.$route.params.id)
        }
        
    }
</script>

<style scoped>

</style>