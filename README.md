🎬 CineFlix - Explorador de Filmes
Uma aplicação web para explorar filmes populares e filtrar por gênero, construída com React e consumindo a API do The Movie Database (TMDb).
![alt text](./screenshot.png)
Dica: Tire um print da tela principal do seu projeto, salve na raiz da pasta com o nome screenshot.png e envie para o GitHub para que a imagem apareça aqui!


🚀 Sobre o Projeto
Este é um projeto de estudo desenvolvido para praticar conceitos fundamentais de React, como componentização, gerenciamento de estado com Hooks (useState, useEffect), consumo de APIs e roteamento com React Router. A aplicação permite que o usuário visualize filmes populares, filtre por diferentes categorias e veja detalhes específicos de cada filme.
O objetivo foi criar uma interface limpa e funcional, seguindo boas práticas de organização de código e estilização moderna.


✨ Funcionalidades
Visualização de Filmes: Exibição dos filmes mais populares na página inicial.
Filtro por Gênero: Filtro dinâmico que permite ao usuário listar filmes por categorias como Ação, Comédia, Drama, etc.
Página de Detalhes: Rota dedicada para cada filme, mostrando informações detalhadas como sinopse, data de lançamento, gêneros e pôster.
Layout Responsivo: Interface adaptável a diferentes tamanhos de tela, estilizada com TailwindCSS.
Estrutura Organizada: Código separado em componentes, páginas e serviços para facilitar a manutenção e escalabilidade.
🛠️ Tecnologias Utilizadas
Este projeto foi construído com as seguintes tecnologias:
React: Biblioteca principal para a construção da interface.
JavaScript: Linguagem de programação base.
TailwindCSS: Framework de CSS para estilização rápida e moderna.
React Router: Para gerenciamento das rotas da aplicação.
Heroicons: Biblioteca de ícones SVG.
The Movie Database (TMDb) API: Fonte dos dados de filmes.
🔧 Como Executar o Projeto Localmente
Para rodar este projeto na sua máquina, siga os passos abaixo:
Clone o repositório:
Generated bash
git clone https://github.com/Bellapy/Cineflix-react.git
Use code with caution.
Bash
Navegue até a pasta do projeto:
Generated bash
cd Cineflix-react
Use code with caution.
Bash
Instale as dependências:
Generated bash
npm install
Use code with caution.
Bash
Crie o arquivo de ambiente:
Crie um arquivo chamado .env.local na raiz do projeto. Ele guardará sua chave da API.
Generated code


# Exemplo de criação no terminal (Linux/macOS)
touch .env.local
Use code with caution.
Adicione sua chave da API:
Dentro do arquivo .env.local, adicione a seguinte linha, substituindo SUA_CHAVE_DA_API_AQUI pela sua chave real do TMDb:
Generated code
REACT_APP_KEY=SUA_CHAVE_DA_API_AQUI
Use code with caution.
Inicie a aplicação:
Generated bash
npm start
Use code with caution.
Bash
A aplicação estará disponível em http://localhost:3000.