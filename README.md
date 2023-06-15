## Estudo de testes realizados com Vitest/Node

### **Objetivo**

Alguns testes realizados sobre a temática de compromissos:
1. Em regras aplicadas em entidade/modelo do negócio: validações de datas do compromisso;
2. Em regras na camada de persistência de dados: não deve haver congruência de agendamento, ou seja, não deve ser agendado um compromisso com período entrelaçado/sobreposto, em que já exista outro compromisso.

### **Demais infos**

- Projeto feito acompanhando instruções do [Diego Fernandes](https://github.com/diego3g), da [Rocketseat](https://www.rocketseat.com.br/).
- Executar comando `npm install` para a instalação das dependências.
- Construção do projeto feito com:
  - `npm init -y`
  - `npm i eslint -D`
  - `npm init @eslint/config`
  - `npm install -D vitest`

### **Execução de teste**
Na pasta do projeto, digitar comando:

`npm test`

Para verificação de cobertura, informar `--coverage` no arquivo package.json, em scripts \ tests, informando `"vitest --coverage"`

