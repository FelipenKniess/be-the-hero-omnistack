const express = require('express');
const cors = require('cors');
const routes  = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Bucar informaçao do back-end
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação do back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de paraâmetros:
   * 
   * Query Params: Parametros nomeados na rota após "?" (Filtros, Paginação)
   * Route Params: Parametros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: Myslq, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query builder: table('users').select('*').where('')
     */
app.listen(3333);