const database = 'BD3-ATV4-GABRIEL';

const collection = 'Mensagens';

use(database)

db[collection].find().sort({ data_hora: 1 })
