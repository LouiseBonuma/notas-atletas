let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   
   function pontuacao(atletas){
     let i = 0
     let tamanho = atletas.length
   
     while (i < atletas.length){
       console.log(`Atleta: ${atletas[i].nome}
   Notas Obtidas: ${atletas[i].notas.sort((a,b) => a - b)}`)
     let notasComputadas = atletas[i].notas.sort((a,b) => a - b).slice(1,4)
   
     let total = 0
     notasComputadas.forEach(function(nota){
       total = total + nota
     })
     console.log(`Média Válida: ${total/atletas.length}
     `)
     i = i + 1
     }
   }
   
   pontuacao(atletas)
   
/* Na descrição da atividade não foram excluídas a nota mais alta e a mais baixa como orientado, 
exemplo para a atleta Daiane Jelinsky o correto é excluir as notas "7" e "10" que são as mais baixa e a mais alta respectivamente,
porém no exemplo foram excluidas as notas "10" e "9.5". Como realizei estas correções no código obtive resultados diferentes do exemplo passado.*/