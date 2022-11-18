// en este archivo inicializamos el servidor 

import app from './expressConfig.js'
import './database/database.js'


// para ejecutarlo uso listen y le asigno un puerto
app.listen(app.get('port'))
// para saber que está ejecutando el servidor podemos hacer un console log así..
console.log('Server on port', app.get('port'))