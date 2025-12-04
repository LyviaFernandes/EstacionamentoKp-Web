# 🚗 Estacionamento Web  
**Aplicação Web responsiva para gerenciamento de entradas, saídas e controle de veículos em estacionamento.**  
Projeto desenvolvido como continuidade do app mobile em React Native, agora adaptado para ambiente desktop/web utilizando ReactJS.

---

## 📌 **🌟 Objetivo do Projeto**
Transformar o aplicativo mobile do Estacionamento KP em uma aplicação web completa, responsiva e funcional, mantendo o estilo visual original do Figma e todas as funcionalidades principais:

- 🔐 Login e Cadastro de usuários  
- 🚘 Registro de entrada de veículos  
- 🚙 Registro de saída com valor pago  
- 📋 Listagem de veículos ativos  
- 📄 Histórico completo de movimentações  
- 🎨 Interface totalmente adaptada para Web  

---

## 📸 **Layout (Figma)**
> Interface desenvolvida fielmente ao design original  
👉 *Insira aqui o link do seu Figma, se tiver*

---

## 🧰 **Tecnologias Utilizadas**

### **Frontend**
- ReactJS (Vite)
- React Router DOM
- Styled Components
- Axios
- Context API

### **Ferramentas**
- Git e GitHub
- Node.js + npm
- Vercel (opcional para deploy)
- Figma (design)

---

## 🗂️ **Estrutura de Pastas**
src/
├─ assets/
│ └─ images/
├─ components/
│ ├─ Header/
│ ├─ Input/
│ ├─ Button/
│ ├─ CardAtivo/
│ └─ CardHistorico/
├─ pages/
│ ├─ Login/
│ ├─ Cadastro/
│ ├─ Menu/
│ ├─ RegistrarEntrada/
│ ├─ RegistrarSaida/
│ ├─ VeiculosAtivos/
│ └─ Historico/
├─ services/
│ ├─ api.js
│ ├─ authService.js
│ ├─ entradaService.js
│ ├─ saidaService.js
│ ├─ ativosService.js
│ └─ historicoService.js
├─ theme/
│ └─ index.js
├─ App.jsx
└─ main.jsx


---

## 💾 **Como rodar o projeto**

### 1️⃣ **Clone o repositório**
```sh
git clone https://github.com/LyviaFernandes/EstacionamentoKp-Web
cd estacionamento-web
````
2️⃣ Instale as dependências
npm install

3️⃣ Execute o projeto
npm run dev

🎨 Padrões Visuais Definidos no Figma
🎨 Cores

Roxo escuro: #3E043D

Roxo médio: #A96ABE

Rosa: #E3A7DE

Cinza: #D9D9D9

Branco puro: #FFFFFF

Branco amarelado: #FFF4F4

##✍️ **Tipografia**

Gideon Roman — títulos e botões principais

Inter — inputs, textos, botões secundários

Nunito SemiBold — botão "Registrar saída" nos cards

📏 Medidas das telas

Barra superior: 1440×202 px

Cards: 305×125 px

Formulários: 635×456 px

Inputs: 535×70 px

Botões principais: 250×50 px

Botões de card: 130×25 px

##🔥 **Funcionalidades**
✔ Login e Cadastro de usuários

Validações completas e integração com a API.

✔ Registro de Entrada

Salvar placa, modelo e data/hora de entrada.

✔ Registro de Saída

Finalização de estacionamento com valor pago.

✔ Veículos Ativos

Listagem em tempo real de todos os veículos dentro do estacionamento.

✔ Histórico de Movimentações

Tabela completa com dados de entrada e saída.

✔ Componentização completa

Reutilização de:

Header

Input

Button

Cards (Ativos e Histórico)

## 🧑‍💻 **Autora**

Lyvia Fernandes Borges

Desenvolvedora Front-End

##📄 **Licença**

Este projeto é apenas para fins educacionais.
