const mockUsers = [
  {
    id: 1,
    name: "HILDA DUARTE COTERRERAL",
    email: "HIDC23891@1",
    password: "2345",
    accountType: "Cuenta de Ahorro",
    accountNumber: "678865676567",
    balance: 3520000000.00,
    messages: [
      "Tu cuenta fiduciaria terminada en 6567 se realizó un abono de 35,200,000.00",
      "Estado de cuenta retenido",
      "Impuesto del gobierno 4x1000"
    ]
  },
  {
    id: 2,
    name: "Christia Vele",
    email: "chrodriguez015@gmail.com",
    password: "2345",
    accountType: "Cuenta de Ahorro",
    accountNumber: "778865676567",
    balance: 12800000.00,
    messages: [
      "Tu cuenta fiduciaria terminada en 6567 se realizó un abono de 12,800,000.00",
      "Estado de cuenta retenido",
      "Impuesto del gobierno 4x1000"
    ]
  },
  {
    id: 4,
    name: "Zulma Denise Cabrera",
    email: "kikiyponky@gmail.com",
    password: "2456",
    accountType: "Cuenta Corriente",
    accountNumber: "778865676567",
    balance: 0.00,
    messages: [
      "Se realizó un abono de 0.00 a su cuenta fiduciaria terminada en 6567",
      "Estado de cuenta reembolsado",
      "MS"
    ]
  },
  {
    id: 5,
    name: "Alicia Nava",
    email: "lixinava24@hotmail.com",
    password: "2356",
    accountType: "Cuenta de Ahorro",
    accountNumber: "778-8656765-67",
    balance: 257300000.00,
    messages: [
      "Se realizó un abono de 257,300,000.00 a su cuenta fiduciaria terminada en 6567",
      "Estado de cuenta retenida",
      "Impuesto 19%"
    ]
  },
  {
    id: 6,
    name: "Pedro Jose Delgado",
    email: "pedroj.delgado1989@gmail.com",
    password: "4321",
    accountType: "Cuenta de Ahorro",
    accountNumber: "078-865656765-67",
    balance: 12100000.00,
    messages: [
      "Se realizó un abono de 12,100,000,000.00 a su cuenta fiduciaria terminada en 6567",
      "Estado de cuenta retenido",
      "Impuesto del gobierno 4x1000"
    ]
  },
  {
    id: 7,
    name: "Juan Felipe T",
    email: "juanaz98@icloud.com",
    password: "3654",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-07",
    balance: 769505000.00,
    messages: [
      "Realizó un abono de 769,505,000.00 a su cuenta fiduciaria terminada en 3507",
      "Estado de cuenta retenido",
      "TRM cambio de divisa"
    ]
  },
  {
    id: 8,
    name: "Victos M",
    email: "villatorov339@gmail.com",
    password: "2345",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-08",
    balance: 14721984485.00,
    messages: [
      "Realizó un abono de 14,721,984,485.00 a su cuenta fiduciaria terminada en 3508",
      "Estado de cuenta retenido",
      "Impuesto del gobierno 4x1000"
    ]
  },
  {
    id: 9,
    name: "Francisca Raudal",
    email: "Francisraud2015@gmail.com",
    password: "2121",
    accountType: "Cuenta de Ahorro",
    accountNumber: "778-8656765-67",
    balance: 2759313250.00,
    messages: [
      "Se realizó una transferencia por un valor de 701,813,250.00 al banco TD BANK HA SIDO CANCELADA",
      "MJ",
      "MJ"
    ]
  },
  {
    id: 10,
    name: "Rafael Fuentes",
    email: "cundy7175@gmail.com",
    password: "6789",
    accountType: "Cuenta de Ahorro",
    accountNumber: "678865676567",
    balance: 13300000.00,
    messages: [
      "Tu cuenta fiduciaria terminada en 6567 se realizó un abono de 13,300,000.00",
      "Estado de cuenta retenido",
      "Impuesto del gobierno 4x1000"
    ]
  },
  {
    id: 11,
    name: "Ricardo Gómez",
    email: "ricardo.gomez@example.com",
    password: "ricardo123",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-11",
    balance: 400.00,
    messages: [
      "Tu cuenta fiduciaria terminada en 6567 se realizó un abono de 35,200,000.00",
      "Estado de cuenta retenido",
      "Impuesto del gobierno 4x1000"
    ]
  },
  {
    id: 12,
    name: "Sofía López",
    email: "sofia.lopez@gmail.com",
    password: "sofia456",
    accountType: "Cuenta Corriente",
    accountNumber: "232-879435-12",
    balance: 3100.00,
    messages: [
      "Tu cuenta fiduciaria terminada en 6567 se realizó un abono de 35,200,000.00",
      "Estado de cuenta retenido",
      "Impuesto del gobierno 4x1000"
    ]
  },
  {
    id: 13,
    name: "Benilda Romero",
    email: "romerobenilda67@gmail.com",
    password: "2356",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-13",
    balance: 187211250.00,
    messages: [
      "Tu cuenta fiduciaria terminada en 3513 se realizó un abono de 187,211,250.00",
      "Estado de cuenta retenido",
      "pago pendiente TRM 3%"
    ]
  },
  {
    id: 14,
    name: "Juan Carlos",
    email: "juaneuroparts@gmail.com",
    password: "5473",
    accountType: "Cuenta Corriente",
    accountNumber: "232-879435-14",
    balance: .00,
    messages: [
      "MS",
      "MS",
      "MS"
    ]
  },
  {
    id: 15,
    name: "Danixa",
    email: "danixa_b29@gmail.com",
    password: "9882",
    accountType: "Cuenta de Ahorro",
    accountNumber: "778-8656765-67",
    balance: 3857812500.00,
    messages: [
      "Tu cuenta fiduciaria terminada en 6567 se realizó un abono de 3,857,812,500.00",
      "Estado de cuenta retenido",
      "Impuesto del gobierno 4x1000"
    ]
  },
  {
    id: 16,
    name: "Josefa Ch",
    email: "josefamatzar28@gmail.com",
    password: "4987",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-16",
    balance: 11360000000.00,
    messages: [
      "Tu cuenta fiduciaria terminada en 3516 se realizó un abono de 11,360,000,000.00",
      "Estado de cuenta retenido",
      "Impuesto del gobierno 4x1000"
    ]
  },
  {
    id: 17,
    name: "ELIZABETH PACHECO ",
    email: "Lisagoza08@gmail.com",
    password: "4987",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-17",
    balance: 0.00,
    messages: []
  },
  {
    id: 18,
    name: "YESENIA ORELLANA",
    email: "yesiena.lovo@icloud.com",
    password: "4987",
    accountType: "Cuenta Corriente",
    accountNumber: "232-879435-18",
    balance: 0.00,
    messages: []
  },
  {
    id: 19,
    name: "MIGUEL ANGEL",
    email: "Miguelangellopez1278@gmail.com",
    password: "pedro123",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-19",
    balance: 600.00,
    messages: []
  },
  {
    id: 20,
    name: "Paula López",
    email: "paula.lopez@example.com",
    password: "paula456",
    accountType: "Cuenta Corriente",
    accountNumber: "232-879435-20",
    balance: 1350.00,
    messages: []
  }
];

export default mockUsers;

