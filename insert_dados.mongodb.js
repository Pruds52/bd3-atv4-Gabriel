const database = "BD3-ATV4-GABRIEL";

const collection = "Mensagens";

use(database);

db[collection].insertMany([
  {
    usuario: "Fernando",
    dataEnviada: "2024-11-04T09:00:00Z",
    mensagem: "Boa tarde, tudo bom?",
  },
  {
    usuario: "Gabriel",
    dataEnviada: "2024-11-04T09:02:00Z",
    mensagem: "Boa tarde, estou bem e você?",
  },
  {
    usuario: "Fernando",
    dataEnviada: "2024-11-04T09:03:00Z",
    mensagem: "Que legal, você irá trabalhar hoje que horas?",
  },
  {
    usuario: "Gabriel",
    dataEnviada: "2024-11-04T09:03:00Z",
    mensagem: "Irei às 09:30.",
  },
  {
    usuario: "Fernando",
    dataEnviada: "2024-11-04T09:05:00Z",
    mensagem: "Quando chegar, você consegue priorizar o card 10006?",
  },
  {
    usuario: "Gabriel",
    dataEnviada: "2024-11-04T09:05:00Z",
    mensagem: "Consigo sim, assim que eu chegar eu inicio ele.",
  },
  {
    usuario: "Fernando",
    dataEnviada: "2024-11-04T09:07:00Z",
    mensagem: "O banco precisa deste ajuste rápido.",
  },
  {
    usuario: "Gabriel",
    dataEnviada: "2024-11-04T09:08:00Z",
    mensagem: "Certo, irei faze-lo.",
  },
  {
    usuario: "Fernando",
    dataEnviada: "2024-11-04T09:08:00Z",
    mensagem: "Obrigado!",
  },
  {
    usuario: "Gabriel",
    dataEnviada: "2024-11-04T09:09:00Z",
    mensagem: "Eu que agradeço!",
  },
]);
