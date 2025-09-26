const mockUsers = [
  {
    id: 1,
    name: "Juana Jovel",
    email: "franciscajovel1@gmail.com",
    password: "2345",
    accountType: "Cuenta de Ahorro",
    accountNumber: "678865676567",
    balance: .00,
    messages: [
      "MS",
      "MS",
      "MS"
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
    name: "Froilan Giron",
    email: "F82235550@gmail.com",
    password: "2456",
    accountType: "Cuenta Corriente",
    accountNumber: "778865676567",
    balance: 0.00,
    messages: [ ]
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
    name: "MARIO23I",
    email: "Mhernan1609@gmail.com",
    password: "3654",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-07",
    balance: 12066000y.00,
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
    id: 17,
    name: "MARCELINO GONZALES ",
    email: "gloriav2003@icloud.com",
    password: "4887",
    accountType: "Cuenta de Ahorro",
    accountNumber: "67-886-567-656-7",
    balance: 16200000000.00,
    messages: ["Marcelino gonzales","ms","ms","MS"]
  },
  {
    id: 18,
    name: "DAVID ESCOBAR",
    email: "esco3468@gmail.com",
    password: "4987",
    accountType: "Cuenta Corriente",
    accountNumber: "67-886-567-656-7",
    balance: 16102000000.00,
    messages: ["Davida escobar","se registra un abono en la cuenta terminda 6567 por un valor 16.102.000.000","estado de cuenta retenido ","impuesto del gobierno de 4x1000"]
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
    name: "Julio cesar",
    email: "Davidbro2000@icloud.com",
    password: "2456",
    accountType: "Cuenta Corriente",
    accountNumber: "202-879435-17",
    balance: 133097805760.00,
    messages: ["Julio Cesar","se registra un abono ala cuenta terminada 3517 por un valo 1.330.978.760","estado de cuenta retenido","impuesto del gobierno 4x100"]
  }
];

export default mockUsers;

