<template>
    <div class="center">
        <b-card
            title="Bem Vindo ao Quiz"
            img-src="https://picsum.photos/200/300?grayscale"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">

            <b-card-text>
                Sem tempo pra testo criativo, escolhe uma opção ae                
            </b-card-text>
            
            <div>
                <b-button router-link squared variant="primary" to="/quiz">Responder Quiz</b-button>
            </div>
            <br>
            <div>
                <b-button @click="deslogar" squared block variant="danger"> Deslogar </b-button>
            </div>

            <div v-if="deslogar" class="alert alert-success">
                            Deslogando !
            </div>
            
        </b-card>
    </div>
</template>

<script>
export default {
    data() {
      return {
        logado: false
      }
    },
    methods:{
        deslogar(){

            const config = {
                headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` }
            };


            this.$http.get(`auth/logout`, config).then((response)=>{
                console.log(config)
                    this.logado = true
                        setTimeout(()=>{
                            this.$router.push('/login')
                        },1000)                        
            })
            
        }
    }
  }
</script>

<style lang="scss" scoped>

</style>