**Instruções**
Back-End <br>
1.Passo: Clonar  repositório:  

  ```git clone https://github.com/robertosouzajr7/desafio-fullstack-robertojr```

2.Passo: Atualizar e instalar os pacotes.
 ```yarn ```
3.Passo: Configurar o banco de dados.
 É necessário criar  um banco de dados, e configurar as credenciais de acesso, nas variáveis de ambiente, recomendamos o uso do gerênciador DBEAVER, para criar um novo do banco de dados. você pode baixar neste Link:https://dbeaver.io/download/
 utilizamos o postgreSQL como solução para o banco de dados. Após instalado o Dbeaver, neste link você tem acesso a documentação para criar um novo banco de dados.https://github.com/dbeaver/dbeaver/wiki/Create-Connection


4. Editando Variáveis de Ambiente.
este procedimento tem como pré-requisito ter os dados do novo banco de dados criados. Acesse o arquivo no diretorio Raíz, .env.example, e renomeie para .env, após isso será necessáio
redefinir os dados de acesso. 
```
DATABASE_URL="postgresql://nome_do_usuario:senha@localhost:_nº_da_porta/nome_do_banco_de_dados?schema=public"
SECRET_KEY="senha"
NODE_ENV=""
```

5.Conectado ao Banco de dados.
Após confirmar que os dados inseridos no .env estão corretos, agora é o momento de connectar ao banco de dados, fazendo a importação das migrações,
execute o seguinte commando:
```json
npm run typeorm migration:run -- -d ./src/data-source
```

6.Inciando a Aplicação.
```yarn dev```

7.Servidor ativado.
Se você conseguiu fazer as configurações inciais esse será o resultado
```
$ yarn dev
yarn run v1.22.19
$ ts-node-dev --ignore-watch node_modules src/server.ts
[INFO] 16:07:43 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.1, typescript ver. 4.9.4)
query: SELECT * FROM current_schema()
query: CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
query: SELECT version();
Database Connected
App is running on http://localhost:3002
```


**FRONT-END**

Para inciar aplicação localmente no front-end, você deve primeiro ter iniciado a aplicação no back-end seguindo os passos acima. Considerando que 
você já tenha realizado esse procedimento, segue os próximos passos.

1. Configure a URL de acesso a APi.
Acessa a pasta src/services/api.ts
``const Api = axios.create({
  baseURL: "Insira a URL do servidor no back-end aqui",
  timeout: 5000,
});

export default Api;``  

após salvar, abra o terminal.

2. Instale os pacotes.
```yarn```

3. Incie a aplicação.
```yarn start```.
Será aberto uma nova aba no seu navegador, carregando a pagina inicial da aplicação.

para acessar os endpoints 
use esta rota.
http://localhost:porta/api-docs  
*obs: substitua a palavra porta pelo numero da porta que está rodando seu back-end.
ex: localhost:3002/api-docs  
