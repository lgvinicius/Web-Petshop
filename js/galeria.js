function trocaDog(elemento){
    var dogao = document.querySelectorAll('#dogao')[0];
    var nomeDogao = document.querySelectorAll('#nomeDogao')[0];
    dogao.src = elemento.src;
    nomeDogao.innerHTML = elemento.alt;
//primeiro remove a borada pontilhada da miniatura atual
document.querySelectorAll('.selecionado')[0].classList.remove('selecionado')

//aplica a borda pontilhada
elemento.classList.add('selecionado');
}
  
    //versão antiga da função - precisava passar tudo separado
    // function trocaDog(mini, raca){
    //     var dogao = document.querySelectorAll('#dogao')[0];
    //     var nomeDogao = document.querySelectorAll('#nomeDogao')[0];
    //     dogao.src = mini;
    //     nomeDogao.innerHTML = raca;
    //     dogao.innerSCR=mini;

