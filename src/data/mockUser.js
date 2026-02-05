const mockUsers = [
  {
    id: 1,
    name: "Marcelino gonzales",
    email: "gloriav2003@icloud.com",
    password: "4987",
    accountType: "Cuenta de Ahorro",
    accountNumber: "678865676567",
    balance: 15200000000,
    messages: [
      "Tu cuenta fiduciaria terminada en 6567 se realizó un abono de 15,200,000.000",
      "Estado de cuenta retenido",
      "pendinte  de que la agencia brinks retire el dinero en nuestras istalaciones "
    ]
  },
  {
    id: 2,
    name: "Saul garcia zamorategui",
    email: "saulgarciazam2026@gmail.com",
    password: "5473",
    accountType: "Cuenta de Ahorro",
    accountNumber: "778865676567",
    balance: 41200000000,
    messages: [
      "Tu cuenta fiduciaria terminada en 6567 se realizó un abono de 412,000,000.00",
      "Estado de cuenta retenido",
      "por pago del iva 19%" ]
    
  },
  {
    id: 4,
    name: "ALEIDA DELIA IZQUIERDO",
    email: "aleidadelia@gmail.com",
    password: "5473",
    accountType: "Cuenta Corriente",
    accountNumber: "778865676567",
    balance: 2887900.00,
    messages: ["Tu cuenta fiduciaria terminada en 6567 se realizó un abono de 2,887,900.00",
      "Estado de cuenta retenido",
      "Impuesto gubernamental" ]
  },
  {
    id: 5,
    name: "Nicolas Rubio Solorio",
    email: "nicolasrubio@hotmail.com",
    password: "5473",
    accountType: "Cuenta de Ahorro",
    accountNumber: "778-8656765-67",
    balance: 1287887.00,
    messages: [
      "Se realizó un abono de 1,287,887.00 a su cuenta fiduciaria terminada en 6567",
      "Estado de cuenta retenida",
      "Impuesto 19%"
    ]
  },
  {
    id: 6,
    name: "Julian leyes agustin",
    email: "agustinjleyes73@gmail.comhy",
    password: "5473",
    accountType: "Cuenta de Ahorro",
    accountNumber: "078-865656765",
    balance: 0.00,
    messages: [
      "mj",
      "mj",
      "mj"
    ]
  },
  {
    id: 7,
    name: "MARIO23I",
    email: "Mhernan1609@gmail.com",
    password: "3654",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-07",
    balance: 12066000.00,
    messages: [
      "Realizó un abono de 12,066,000.00 a su cuenta fiduciaria terminada en 3507",
      "Estado de cuenta retenido",
      "4x1000 impuesto del gobierno"
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
    name: "Saul arreola",
    email: "Saularreolq@gmail.com",
    password: "2121",
    accountType: "Cuenta de Ahorro",
    accountNumber: "778-8656765-67",
    balance: 0.00,
    messages: [
      "mj",
      "MJ",
      "MJ"
    ]
  },
  {
    id: 10,
    name: "Benjamin Jimenez",
    email: "benjaminagilera80@gmail.com",
    password: "6789",
    accountType: "Cuenta de Ahorro",
    accountNumber: "678865676567",
    balance: 13600000.00,
    messages: [
      "BENJAMIN JIMENEZ Tu cuenta fiduciaria terminada en 6567 se realizó un abono de 13,600,000.00",
      "Estado de cuenta retenido",
      "Estado de cuenta retenido"
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
      "Estado de cuenta retenido"
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
    name: "SandraMelendez",
    email: "sandra.melendez1207@gmail.com",
    password: "9882",
    accountType: "Cuenta de Ahorro",
    accountNumber: "778-8656765-67",
    balance: 64298850.00,
    messages: [
      "Tu cuenta fiduciaria terminada en 6567 se realizó un abono de 64,298,850,00",
      "estado de cuenta retenido",
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
    id: 18,
    name: "Marcelino gonzalez",
    email: "Gloriav2003@icloud.com",
    password: "9999",
    accountType: "Cuenta Corriente",
    accountNumber: "67-886-567-656-7",
    balance: 16102000000.00,
    messages: ["se registra un abono en la cuenta terminda 6567 por un valor 16,102,000.000",
               "estado de cuenta retenido ",
               "impuesto del gobierno de 4x1000"]
  },
  {
    id: 19,
    name: "MIGUEL ANGEL",
    email: "Miguelangellopez1278@gmail.com",
    password: "pedro123",
    accountType: "Cuenta de Ahorro",
    accountNumber: "67-886-567-656-7",
    balance: 5440000000.00,
    messages: ["MIGUEL FUENTES","se registra un abono ala cuenta terminada 6567 por un valo 5.440.000.000","estado de cuenta retenido","impuesto del gobierno 4x100"]
  },
  {
    id: 20,
    name: "MELINDA SAENZ",
    email: "melinda.saenz@yahoo.com",
    password: "2456",
    accountType: "Cuenta Corriente",
    accountNumber: "202-879435-17",
    balance: 2008000000.00,
    messages: ["melinda saenz","se registra un abono ala cuenta terminada 3517 por un valo 200.080.000.000","estado de cuenta retenido","impuesto del gobierno 195% iva"]
  },
  {
    id: 20,
    name: "Cristina Trejo Lora",
    email: "cristinatrejo@gmail.com",
    password: "5473",
    accountType: "Cuenta de Ahorro",
    accountNumber: "778865676567",
    balance: 43000.00,
    messages: [
      "Tu cuenta fiduciaria terminada en 6567 se realizó un abono de 43,000.00",
      "Estado de cuenta retenido",
      "Impuesto gubernamental"
    ]
  },
  {
    id: 21,
    name: "Gloribel Hernandez Vega",
    email: "gloribelhernanedzvega@gmail.com",
    password: "5473",
    accountType: "Cuenta de Ahorro",
    accountNumber: "778865676567",
    balance: 345887.00,
    messages: [
      "Tu cuenta fiduciaria terminada en 6567 se realizó un abono de 345,887.00",
      "Estado de cuenta retenido",
      "Impuesto gubernamental"
    ]
  }
];

export default mockUsers;

