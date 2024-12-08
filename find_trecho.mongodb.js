const database = "BD3-ATV4-GABRIEL";

const collection = "Mensagens";

use(database);

db[collection].find({ mensagem: { $regex: "banco", $options: "i" } });