# Projeto TCC Menu

Site React criado com Vite e React Router, desenvolvido como projeto de TCC para apresentar informações sobre lançamento, equipamentos, objetivo, público e bibliografia.

## Visão Geral

O projeto oferece um site com navegação entre páginas internas e componentes reutilizáveis. Ele inclui:
- Roteamento com `react-router-dom`
- Barra de navegação fixa para todo o site
- Páginas de conteúdo separadas para Home, Lançamento, Equipamentos, Objetivo, Público e Bibliografia
- Componentes de layout e estrutura que melhoram a manutenção do projeto

## Estrutura do Projeto

- `index.html` - ponto de entrada do aplicativo
- `package.json` - dependências e scripts do projeto
- `vite.config.js` - configuração do Vite para React
- `src/main.jsx` - inicializa o React e o roteador
- `src/Components/` - componentes reutilizáveis de interface e layout
- `src/Routes/` - páginas do aplicativo renderizadas pelo roteador
- `src/Styles/` - arquivos CSS usados pelo projeto
- `src/Imagens/` - imagens do site

## Principais Funcionalidades

- Navegação entre páginas sem recarregar
- Layout compartilhado com `Navbar` e `Outlet`
- Scroll automático para o topo a cada troca de rota
- Estrutura React modularizada para facilitar alterações
- Build de produção gerada com Vite

## Como Executar

1. Instale as dependências:
   - `npm install`
2. Inicie o servidor de desenvolvimento:
   - `npm run dev`

## Observações

- O projeto utiliza React 18 e Vite 4
- O arquivo `README.md` foi atualizado para refletir a estrutura atual do projeto
- Caso queira gerar a versão de produção, use `npm run build`

## Ferramentas Utilizadas

- React
- Vite
- React Router DOM
- JavaScript
- CSS
