const BtnMore = document.querySelectorAll('.btn-more');
//let conteudoProduto = document.querySelectorAll('.conteudo-produto');
let cards = document.querySelectorAll('.card');


BtnMore.forEach((clicou, index) =>{
    clicou.addEventListener('click', ()=>{

        const conteudo = cards[index].querySelector('.conteudo-produto');

         conteudo.classList.toggle('mostrar');

        if(conteudo.classList.contains('mostrar')){
            clicou.textContent='mostrar menos'
        }else{
            clicou.textContent='saiba mais';
        }
    })
})