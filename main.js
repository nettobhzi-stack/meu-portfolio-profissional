function carregarImagem() {
    const caminhoImagem = 'imagens/exemplo.jpg';
    const imgElemento = document.createElement('img');
    imgElemento.src = caminhoImagem;
    imgElemento.width = 300;
    imgElemento.height = 200;
    document.body.appendChild(imgElemento);
    imgElemento.onload = function() {
        console.log('Imagem carregada com sucesso!');
    };
    imgElemento.onerror = function() {
        console.error('Erro ao carregar a imagem.');
    };
}

document.addEventListener('DOMContentLoaded', carregarImagem);