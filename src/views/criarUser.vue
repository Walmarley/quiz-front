<template>
    <div>
        <div class="container" style="background-color:LightGray">
            <div class="mt-6"> - </div>

                    <!-- <select v-model="sele" class="form-select" aria-label="Default select example" data-style="btn-info">
                        <option selected>Selecione a permissão</option>
                        <option value="0">Admin</option>
                        <option value="1">User</option>
                    </select>

                    <div class="mt-6"> - </div> -->
                
                    <!-- <div>
                        <input class="form-check-input" v-model="admin" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                             -Admin
                        </label>
                    </div> -->

                    <select v-model="admin" class="form-select" aria-label="Default select example" data-style="btn-info">
                        <option disabled selected>Selecione qual  tipo de User</option>
                        <option value="0">User Comum</option>
                        <option value="1">ADMIN</option>
                    </select>

                    <div class="mt-6"> - </div>

                    <!-- <div>
                        <input class="form-check-input" v-model="user" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                              -Usuario
                        </label>
                    </div> -->
               
                <!-- <b-form-input v-model="admin" placeholder="0 para admin e 1 para normal"></b-form-input>
                <div class="mt-1">admin: {{ admin }}</div> -->

                <b-form-input v-model="name" placeholder="Enter your name"></b-form-input>
                <div class="mt-1">name: {{ name }}</div>

                <b-form-input v-model="email" placeholder="Enter your email"></b-form-input>
                <div class="mt-1">email: {{ email }}</div>

                <b-form-input v-model="password" placeholder="Enter your password"></b-form-input>

            <div class="mt-6"> - </div>
            
        </div>

        <div class="row mt-4">
                    <div class="col-12">
                        <b-button @click="criarUser()" block variant="primary"> Criar usuario </b-button>
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
        admin:null,
        name:'',
        email: '',
        password: '',
        criar: false
      }
    },
    methods:{
        criarUser(){
            const config = {
                headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` }
            };
            
            console.log(this.admin)
            if(this.admin != true){
                this.admin = '0'
            }
            
            var data = {

                'admin':this.admin,
                'name':this.name,
                'email':this.email,
                'password':this.password

            }

            console.log(data)
            this.$http.post(`users/store`, data, config).then((response)=>{

                if(response.data.success){
                    this.criar = true

                    setTimeout(()=>{
                        this.$router.push('/login')
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