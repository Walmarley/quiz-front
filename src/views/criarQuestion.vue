<template>
    <div>
        <div class="container" style="background-color:LightGray">
            <div class="mt-6"> - 

                <b-form-input v-model="quest" placeholder="Digite a Pergunta"></b-form-input>
                <div class="mt-1">- {{ quest }}</div>



                <!-- <b-form-input v-model="correctOption" placeholder="qual letra é a resposta"></b-form-input>
                <div class="mt-1">Resposta Correta: {{ correctOption }}</div> -->

                <b-form-input v-model="optionA" placeholder="option A"></b-form-input>
                <div class="mt-1">- {{ optionA }}</div>

                <b-form-input v-model="optionB" placeholder="option B"></b-form-input>
                <div class="mt-1">-{{ optionB }}</div>

                <b-form-input v-model="optionC" placeholder="option C"></b-form-input>
                <div class="mt-1">- {{ optionC }}</div>

                <b-form-input v-model="optionD" placeholder="option D"></b-form-input>
                <div class="mt-1">- {{ optionD }}</div>

                <b-form-input v-model="optionE" placeholder="option E"></b-form-input>
                <div class="mt-1">- {{ optionE }}</div>


                <div class="mt-6">
                    Selecione a opção correta
                </div>
                    <div>
                        <label>
                            ( A-> 
                        </label>
                        <input class="form-check-input" value="a" v-model="correctOption" type="radio" name="flexRadioDefault" id="flexRadioDefault1">

                        <label class="form-check-label" for="flexRadioDefault1">
                         )( B-> 
                        </label>
                        <input class="form-check-input" value="b" v-model="correctOption" type="radio" name="flexRadioDefault" id="flexRadioDefault2">

                        <label class="form-check-label" for="flexRadioDefault1">
                            )( C-> 
                        </label>
                        <input class="form-check-input" value="c" v-model="correctOption" type="radio" name="flexRadioDefault" id="flexRadioDefault3">

                        <label class="form-check-label" for="flexRadioDefault1">
                            )( D-> 
                        </label>
                        <input class="form-check-input" value="d" v-model="correctOption" type="radio" name="flexRadioDefault" id="flexRadioDefault4">

                        <label class="form-check-label" for="flexRadioDefault1">
                            )( E-> 
                        </label>
                        <input class="form-check-input" value="e" v-model="correctOption" type="radio" name="flexRadioDefault" id="flexRadioDefault5">
                        <label class="form-check-label" for="flexRadioDefault1">
                            ) 
                        </label>
                    </div>

            <div class="mt-6"> - </div>
            </div>
        </div>

        <div class="row mt-4">
                    <div class="col-12">
                        <b-button @click="criarQuestion()" block variant="primary"> Criar Questão </b-button>
                        <div v-if="criar" class="alert alert-success">
                            criando !
                        </div>
                    </div>
        </div>
    </div>
  </template>

<script>
  export default {
    data() {
      return {
        quest:'',
        correctOption:'',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        optionE: '',
        criar: false
      }
    },
    methods:{
        
        criarQuestion(){
            var data = {
                'quest':this.quest,
                'correctOption':this.correctOption,
                'optionA':this.optionA,
                'optionB':this.optionB,
                'optionC':this.optionC,
                'optionD':this.optionD,
                'optionE':this.optionE,
            }

            console.log(data)
            this.$http.post(`questions/store`, data).then((response)=>{
                console.log(response)
                
                if(response.data.success){
                    this.logado = true

                    setTimeout(()=>{
                        this.$router.push('/index')
                    },1000)
                }
            }).catch(e => {
                console.log(e)
            })
            
        }
    }
  }
</script>

<style lang="scss" scoped>

</style>