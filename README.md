# Mobiauto 🚀

**Mobiauto** é uma aplicação construída com **Next.js 15** que exibe tabela fipe de carros, utilizando **Server-Side Rendering (SSR)** para otimizar a experiência de carregamento e renderização das páginas.

A aplicação utiliza várias bibliotecas e tecnologias modernas, incluindo **react-hook-forms**, **Next.js 15**, **TypeScript** e **Material Ui**.

## 📦 Tecnologias Utilizadas

- **Next.js 15** – Framework React para renderização do lado do servidor e construção de páginas dinâmicas.
- **React Hook Form** – Biblioteca para gerenciamento eficiente de formulários no React.
- **TypeScript** – Para garantir segurança de tipos durante o desenvolvimento.
- **Material UI**  – Conjunto de componentes React para construção de interfaces modernas e acessíveis.

## Páginas

### 1. **Página de Tabela Fipe**

A primeira página da aplicação exibe a lista de **Tabela de dados do veículo** obtidos de uma API externa. A API utilizada para essa funcionalidade é a seguinte:

- ## 🌐 API de Tabela Fipe:
  - Endpoint: [API - Tabela Fipe](https://parallelum.com.br/fipe/api/v1/carros/marcas)
  - Esta API retorna uma lista de automóveis disponíveis.

### 2. **Página Automóvel e Preço**

Quando uma Marca, modelo e ano do automóvel é selecionado na página inicial, o usuário é redirecionado para uma página que exibe o veículo. A API usada para essa funcionalidade é a seguinte:

- ## 🌐 API de Veículos, Marca, Modelo e Ano:
  - Endpoint: [NYT API - Tabela Fipe](https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3)
  - Esta API retorna a Marca, modelo, ano e valor do veículo.

  - **Gerenciamento de Estado**:
   - Utilização do Server Side Rendering (SSR) e Server Actions do Next.js para buscar e processar dados diretamente no servidor, garantindo melhor desempenho e SEO.

- **Responsividade**:
   - O layout é totalmente responsivo, adaptando-se a diferentes tamanhos de tela usando **Material UI**.


## ⚙️ Como Rodar o Projeto

1. Clone este repositório:

```bash
https://github.com/MarcelloFreitasMoraes/mobi-auto.git
```

2. Acesse o diretório do projeto:

```bash
cd mobi-auto
```

3. Instale as dependências:

```bash
npm install
```

4. Rode o projeto localmente: 

```bash
npm run dev
```

5.  Abra o navegador e acesse:  

```bash
http://localhost:3000/
```
