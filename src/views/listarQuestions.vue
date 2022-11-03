<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Pergunta</th>
                    <th scope="col">Resposta A</th>
                    <th scope="col">Resposta B</th>
                    <th scope="col">Resposta C</th>
                    <th scope="col">Resposta D</th>
                    <th scope="col">Resposta E</th>
                    <th scope="col">Excluir</th>
                </tr>
            </thead>
    <tbody>
        <tr v-for="question in listagem" :key="question.id">
        <td>{{question.quest}}</td>
        <td>{{question.optionA}}</td>
        <td>{{question.optionB}}</td>
        <td>{{question.optionC}}</td>
        <td>{{question.optionD}}</td>
        <td>{{question.optionE}}</td>
        <td>
            <b-button @click="excluir(question.id)" block variant="danger"> Excluir </b-button>
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
                quest:'',
                correctOption:'',
                optionA:'',
                optionB:'',
                optionC:'',
                optionD:'',
                optionE:'',

            };
        },
    methods: {

        getListagem(){
            this.$http.get('/questions/index').then((response)=>{
                console.log(response)
                this.listagem = response.data
            })
        },

        excluir(id){
            this.$http.delete(`questions/destroy/${id}`).then((response)=>{
                if(response.status == 200){

                    window.location.reload();
                }
            })
        }
        
    },

    created(){
        this.getListagem()
    }

    
};
</script>

<style lang="scss" scoped>

</style>