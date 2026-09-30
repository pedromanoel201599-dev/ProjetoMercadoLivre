// Cria uma constante chamada html que seleciona e armazena a tag <html> raiz do seu documento HTML.
//Precisamos dela para poder adicionar ou remover a classe que altera as cores de toda a página.
const html = document.querySelector("html");
//Cria uma constante chamada checkbox que busca no documento o elemento com o ID dark (que é o nosso botão/input invisível do modo escuro/claro).
//Permite que o JavaScript monitore as ações feitas nesse botão (como cliques ou mudanças de estado)
const checkbox = document.querySelector("#dark");
//Adiciona um "ouvinte de eventos" (event listener) ao checkbox. Ele fica vigiando o evento do tipo 'change' 
// (ou seja, toda vez que o estado do checkbox muda, como quando o usuário clica nele). Quando isso acontece, ele executa a função de flecha
checkbox.addEventListener('change', () => {
//É a linha principal da lógica. A propriedade classList.toggle verifica se a tag <html> (armazenada na constante html) já possui a classe CSS chamada "light-theme".
 html.classList.toggle("light-theme");
});