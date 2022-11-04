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
                        {{ question.quest }}
                    </td>

                    <td>
                        {{ question.optionA }}
                    </td>

                    <td>
                        {{ question.optionB }}
                    </td>

                    <td>
                        {{ question.optionC }}
                    </td>

                    <td>
                        {{ question.optionD }}
                    </td>

                    <td>
                        {{ question.optionE }}
                    </td>

                    <td>
                        <select v-model="resposta[question.id]" class="form-select" aria-label="Default select example"
                            data-style="btn-info">
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

        <!-- <div class="row mt-4">
            <div class="col-12">
                <b-button @click="verificaRespostas()" block variant="primary"> Responder </b-button>
                <div v-if="criar" class="alert alert-success">
                    Respondendo
                </div>
            </div>
        </div> -->

        <div>
            <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Abrir Modal</b-button>

            <b-modal id="bv-modal-example" hide-footer>
                <!-- <template #modal-title>
                Using <code>$bvModal</code> Methods
                </template> -->
                <div class="d-block text-center">
                <h3>Seu Score acumulativo é de {{answeres}}!</h3> 
                    <div>
                        <b-button @click="verificaRespostas" block variant="primary"> Ver Score </b-button>
                    </div>
                </div>
                <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Fechar tabela</b-button>
                
            </b-modal>
        </div>

    </div>
</template>



<script>
export default {
    data() {
        return {
            listagem: [],
            quest: '',
            correctOption: '',
            optionA: '',
            optionB: '',
            optionC: '',
            optionD: '',
            optionE: '',
            resposta: [],
            answeres: null
        };
    },
    methods: {

        getListagem() {

            const config = {
                headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` }
            };

            this.$http.get('questions/listadez', config).then((response) => {

                this.listagem = response.data
            })
        },


        verificaRespostas() {

            const config = {
                headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` }
            };


            this.resposta.map((element, index, array) => {
                this.$http.get(`questions/validaQuest/${index}/${element}`, config).then((response) => {
                    // console.log(response.data)

                    if(response.status == 200){
                            this.answeres = response.data
                            console.log(answeres)
                    }
                })
            })
        },

    },

    created() {
        this.getListagem()
    }


};
</script>

<style lang="scss" scoped>

</style>