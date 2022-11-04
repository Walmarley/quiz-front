<template>
    <div>
      <b-card-text>
          Sem tempo pra testo criativo, 
          <b-button @click="deslogar()" block variant="danger"> Clique aqui </b-button>  
          para Deslogar             
      </b-card-text>
    </div>
  </template>

<script>
  export default {
    // data() {
    //   return {
    //     logado: false
    //   }
    // },
    methods:{
        deslogar(){

            const config = {
                headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` }
            };
            // console.log(config)

            // console.log(data)
            this.$http.get(`auth/logout`, config).then((response)=>{
                console.log(response)

                            this.$router.push('/login')
                       
            })
            
        }
    }
  }
</script>

<style lang="scss" scoped>

</style>