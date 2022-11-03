<template>
    <div>
        <h1> editar user {{this.$route.params.id}}</h1>
       
       <div class="container"><div class="row">

                <div class="col-6" >
                    <b-form-input v-model="admin"  placeholder="admin"></b-form-input>
                </div>
            
                <div class="col-6">
                    <b-form-input v-model="name" placeholder="name"></b-form-input>
                </div>

                <div class="col-6">
                    <b-form-input v-model="email" placeholder="email"></b-form-input>
                </div>

                <div class="col-6">
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
            this.$http.get(`users/show/${this.$route.params.id}`).then((response)=>{
                console.log(response)
                this.name = response.data[1].name
                this.email = response.data[1].email
            })
        },
        update(){
            var data = {
                admin:this.admin,
                name:this.name,
                email:this.email, 
                password:this.password
            }

            this.$http.post(`users/update/${this.$route.params.id}`,data).then((response)=>{
                console.log(response)
            }).catch(e => {
                console.log(e)
            })
            setTimeout(()=>{
                        this.$router.push('/index')
                    },800)
        },
        excluir(){
            this.$http.delete(`users/destroy/${this.$route.params.id}`).then((response)=>{
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