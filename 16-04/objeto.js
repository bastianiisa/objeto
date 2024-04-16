const professor = {
    nome: 'Vitor',
    idade: 27,
    tarefas: ['Dar aula','Responder dúvidas'],
    contarPiada: function(){
        console.log('É pa vê ou pa comê?')
    }
}

//notaçao de ponto
const professor = {
    nome: 'Vitor',
    idade: 27,
    email: 'vitor@gmail.com'
}
console.log(professor.idade)

//notaçao de colchetes
const professor = {
    nome: 'Vitor',
    idade: 27,
    email: 'vitor@gmail.com'
}
console.log(professor["email"])

//alterar valor
const professor = {
    nome: 'Vitor',
    idade: 27,
    email: 'vitor@gmail.com'
}
professor.nome = 'Mika'
professor['email'] = 'profmika@gmail.com'

//objeto dentro de outro
const donoDoPet = {
    nome: "Isabela",
    pet: {
        nomeDoPet: "Kaminari",
        raca: "SRD",
        idade: 3
    }
}
console.log(donoDoPet.pet.nomeDoPet)