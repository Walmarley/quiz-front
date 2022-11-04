<template>
        <div class="center">
            <b-card
                title="Bem Vindo ao Quiz"
                img-src="https://picsum.photos/id/237/200/300"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">

                <b-card-text>
                    Sem tempo pra testo criativo, escolhe uma opção ae                
                </b-card-text>
                
                <div>
                    <b-button router-link squared variant="primary" to="/criarUser">Cadastrar usuario</b-button>
                </div>
                <br>
                <div>
                    <b-button router-link squared variant="primary" to="/criarQuestion">Cadastrar questoes</b-button>
                </div>
                <br>
                <div>
                    <b-button router-link squared variant="primary" to="/listarQuestions">Editar questoes</b-button>
                </div>
                <br>
                <div>
                    <b-button router-link squared variant="primary" to="/quiz">Responder Quiz</b-button>
                </div>
                
                
            </b-card>
        </div>
  </template>

<script>

</script>

<style lang="scss" scoped>

</style>