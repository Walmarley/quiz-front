<template>
    <div>
       <div class="container">

                <div class="col-6" >

                    <h1> editar user {{this.$route.params.id}}</h1>

                    <select v-model="admin" class="form-select" aria-label="Default select example" data-style="btn-info">
                        <option disabled selected>Selecione qual  tipo de User</option>
                        <option value="0">User Comum</option>
                        <option value="1">ADMIN</option>
                    </select>

                    <div class="mt-6"> - </div>
                    
                    <b-form-input v-model="name" placeholder="name"></b-form-input>

                    <div class="mt-6"> - </div>

                    <b-form-input v-model="email" placeholder="email"></b-form-input>

                    <div class="mt-6"> - </div>

                    <b-form-input v-model="password" placeholder="password"></b-form-input>
                </div>

                <div class="row mt-4">
                    <div class="col-12">
                        <b-button @click="update" block variant="primary"> Salvar </b-button>
                        <b-button @click="excluir" block variant="danger"> Excluir </b-button>
                        <div v-if="excluido" class="alert alert-success">
                            Excluido com Sucesso !
                        </div>
                    </div>
                </div>
        </div>
    </div> 
</template>

<script>
    export default {
        data() {
            return {
                admin:'',
                name:'',
                email:'',
                password:'',
                excluido: false,
            }
        },

    methods: {
        getUser() {

            const config = {
                headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` }
            };

            this.$http.get(`users/show/${this.$route.params.id}`, config).then((response)=>{
                console.log(response)
                this.name = response.data[1].name
                this.email = response.data[1].email
            })
        },
        update(){

            const config = {
                headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` }
            };

            if(this.admin != true){
                this.admin = '0'
            }
            
            var data = {
                admin:this.admin,
                name:this.name,
                email:this.email, 
                password:this.password
            }

            this.$http.post(`users/update/${this.$route.params.id}`,data, config).then((response)=>{
                console.log(response)
            }).catch(e => {
                console.log(e)
            })
            setTimeout(()=>{
                        this.$router.push('/index')
                    },800)
        },
        excluir(){

            const config = {
                headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` }
            };
            
            this.$http.delete(`users/destroy/${this.$route.params.id}`, config).then((response)=>{
                if(response.data.success){
                    this.excluido = true

                    setTimeout(()=>{
                        this.$router.push('/index')
                    },500)
                }
            })
        }
    },
    
    created(){
        this.getUser()
    }
}
</script>

<style lang="scss" scoped>
</style>