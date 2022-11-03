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
                    <th scope="col">selecione a opção correta</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="question in listagem" :key="question.id">
                    <td>
                        {{question.quest}}
                    </td>

                    <td>
                        {{question.optionA}}
                    </td>

                    <td>
                        {{question.optionB}}
                    </td>

                    <td>
                        {{question.optionC}}
                    </td>
                    
                    <td>
                        {{question.optionD}}
                    </td>

                    <td>
                        {{question.optionE}}
                    </td>

                    <td>
                        <select v-model="resposta[question.id]" class="form-select" aria-label="Default select example" data-style="btn-info">
                            <option disabled selected>Selecione a Resposta Correta</option>
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="c">C</option>
                            <option value="d">D</option>
                            <option value="e">E</option>
                        </select>

                    <div class="mt-6"> - </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="row mt-4">
                    <div class="col-12">
                        <b-button @click="responder()" block variant="primary"> Responder </b-button>
                        <div v-if="criar" class="alert alert-success">
                            Respondendo
                        </div>
                    </div>
        </div>
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
                resposta: {},
            };
        },
    methods: {

        getListagem(){
            this.$http.get('questions/listadez').then((response)=>{
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