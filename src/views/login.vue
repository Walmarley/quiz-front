<template>
    <div>
        <div class="container" style="background-color:blueviolet">
            <div class="mt-6"> - 

                <b-form-input v-model="email" placeholder="Enter your email"></b-form-input>
                <div class="mt-1">email: {{ email }}</div>

                <b-form-input v-model="password" placeholder="Enter your password"></b-form-input>

            <div class="mt-6"> - </div>
            </div>
        </div>

        <div class="row mt-4">
                    <div class="col-12">
                        <b-button @click="logar()" block variant="primary"> Logar </b-button>
                        <div v-if="logado" class="alert alert-success">
                            Bem vindo !
                        </div>
                    </div>
                </div>
    </div>
  </template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        logado: false
      }
    },
    methods:{
        logar(){
            var data = {
                'email':this.email,
                'password':this.password
            }

            console.log(data)
            this.$http.post(`auth/login`, data).then((response)=>{
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