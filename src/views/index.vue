<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Nome</th>
                <th scope="col">e-mail</th>
                <th scope="col">Ultima Pontuação</th>
                <th scope="col">Record</th>
                </tr>
            </thead>
    <tbody>
        <tr v-for="user in listagem" :key="user.id">
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>{{user.lastPunctuation}}</td>
        <td>{{user.record}}</td>
        <td>
            <router-link :to="{name:'editar', params: {
                id: user.id
            }}">
                <b-button variant="outline-primary">Editar</b-button>

            </router-link>
        </td>
        </tr>
    </tbody>
</table>
    </div>
</template>



<script>
    export default {
        data(){
            return {
                listagem: [],
                name:'',
                email:'',
                lastPunctuation:'',
                record:'',

            };
        },
    methods: {

        getListagem(){
            this.$http.get('/users/index').then((response)=>{
                console.log(response)
                this.listagem = response.data
            })
        },

        
    },

    created(){
        this.getListagem()
    }
};
</script>

<style lang="scss" scoped>

</style>