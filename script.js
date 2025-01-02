let imagensMelancia = ["img/melancia.jpg", "img/melancia2.jpg"];
let imgAtual=0;
setInterval(() => {
    imgAtual++;
    if(imgAtual >= imagensMelancia.length){
        imgAtual=0;
    }

    document.querySelector('.imgMelancia').src=imagensMelancia[imgAtual]
}, 2000);


let imagemMorango =["img/morango.jpg", "img/morango2.jpg"];
let imagemAtual = 0;
setInterval(() => {
   imagemAtual++;

    if(imagemAtual >= imagemMorango.length){
    imagemAtual=0;
   } 
   
   document.querySelector('.imgMorango').src=imagemMorango[imagemAtual]
}, 2000);


let imagensUva = ["img/uva.jpg", "img/uva2.jpg"];
let imgNova = 0;
setInterval(() => {
    imgNova++;
    if(imgNova >= imagensUva.length){
        imgNova=0;
    }
    document.querySelector('.imgUva').src=imagensUva[imgNova]
}, 2000);

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
