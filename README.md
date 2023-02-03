# 8 mandamentos do front

* Não commitar o código com funções sem uso 
* Não commmitar código com erro
* Usar apenas styled-components, não usar ClassName
* Usar apeans extensão .jsx
* Seguir o padrão Folder/index.jsx styles.jsx
* Commitar o código diariamente e sempre ao final do dia
* Codar em inglês
* Proibido CHAT GPT

# Como subir de forma manual no GIT

Pelo terminal, dentro da pasta geral do projeto, insira o comando
```
git add .
```

Após adicionar o arquivo, insira o commit
```
git commit -m "{Insira aqui o commit conforme o que foi alterado}
```

Para finalizar, utilize o comando abaixo para subir o código
```
git push
```

Após o processo, abra um PULL RESQUEST e aguarde a aprovação ou aviso para efetuar mudanças

# Como atualizar o código do form

Para atualizar, clique em sync fork no canto superior direito, acima das pastas que contém o código, logo após isso, digite o código abaixo no terminal do VsCode / Bash
```
git pull
```

# Libs utilizadas
### Utilizamos as seguintes libs no projeto, é essêncial que instalem as mesmas no projeto local de vocês para evitar alguns bugs que possam ocorrer.

## [styled-components](styled-components.com)
```
npm install --save styled-components
```
```
yarn add styled-components
```
