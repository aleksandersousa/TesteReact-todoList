# Como rodar

1. git clone a url: https://github.com/aleksandersousa/TesteReact-todoList.git ou baixe e estraia o arquivo
2. no diretório do projeto, digite yarn para instalar as dependências
3. para rodar o servidor, digite yarn start-server
4. para rodar o app, digite yarn dev

## Descrição

Foi utilizado o localStorage por ser mais simples o state management.

O backend foi feito com o json-server e json-server-auth.

Existem 3 páginas, a home, a de perfil e outra para listar todos os perfis cadastrados.

É possível adicionar, editar, remover e filtrar tarefas.

A filtragem é feita por status(nova ou concluída) ou visibilidade(pública ou privada).

Um usuário logado não consegue ver as tarefas privadas de outro usuário.

Um usuário logado não consegue editar e nem criar novas tarefas de outro usuário.

Um usuário logado não consegue filtrar as tarefas de outro usuário por visibilidade.
