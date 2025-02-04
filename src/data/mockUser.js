const mockUsers = [
  {
    id: 1,
    name: "HILDA DUARTE COTERRERAL",
    email: "HIDC23891@1",
    password: "2345",
    accountType: "Cuenta de Ahorro",
    accountNumber: "678865676567",
    balance: 3520000000.00,
    messages: ["tu cuenta fiduciaria terminda 6567 se realizo un abono 35.200.000.00", "estado de cuenta retenido", "impuesto del gobierno 4x1000"]
  },
  {
    id: 2,
    name: "christia vele",
    email: "chrodriguez015@gmail.com",
    password: "2345",
    accountType: "Cuenta ahorros",
    accountNumber: "778865676567",
    balance: 12800000.00,
    messages: ["tu cuenta fiduciaria terminda 6567 se realizo un abono 12.800.000.00", "estado de cuenta retenido", "impuesto del gobierno 4x1000"]
  },
  {
    id: 4,
    name: "zulma denise cabrera",
    email: "kikiyponky@gmail.com",
    password: "2456",
    accountType: "Cuenta Corriente",
    accountNumber: "778865676567",
    balance: 3580050000,
    messages: ["se realizo una abono a su cuenta fiduciaria terminda 6567 por un valo 358,005,000", "estado de cuenta retenida", "impuesto del gobierno 4x1000"]
    
  },
  {
    id: 5,
    name: "alicia nava",
    email: "lixinava24@hotmail.com",
    password: "2356",
    accountType: "Cuenta de Ahorro",
    accountNumber: "778-8656765-67",
    balance: 257300000.00,
    messages: ["se realizo una abono a su cuenta fiduciaria terminda 6567 por un valo 257,300,000", "estado de cuenta retenida", "impuesto 19%"]
  },
  {
    id: 6,
    name: "pedro jose delgado",
    email: "pedroj.delgado1989@gmail.com",
    password: "4321",
    accountType: "Cuenta ahorros",
    accountNumber: "078-865656765-67",
    balance: 12100000.00,
    messages: ["se realizo una abono a su cuenta fiduciaria terminda 6567 por un valo 12,100,000,000", "estado de cuenta retenida", "impuesto del gobierno 4x1000"]
  },
  {
    id: 7,
    name: "Juan Felipe T",
    email: "juanaz98@icloud.com",
    password: "3654",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-07",
    balance: 769505000.00,
    messages: ["realizo una abono a su cuenta fiduciaria terminda 3507 por un valo 769,505,000,00 ", "estado de cuenta retenida", "impuesto del gobierno 4x1000"]
    
  },
  {
    id: 8,
    name: "Victos M",
    email: "villatorov339@gmail.com",
    password: "2345",
    accountType: "Cuenta ahorros",
    accountNumber: "232-879435-08",
    balance: 14721984485,
    messages: ["realizo una abono a su cuenta fiduciaria terminda 3508 por un valo 14,721,984,485", "estado de cuenta retenida", "impuesto del gobierno 4x1000"]
  },
  {
    id: 9,
    name: "Francisca raudal",
    email: "Francisraud2015@gmail.com",
    password: "2121",
    accountType: "Cuenta ahorro",
    accountNumber: "778-8656765-67",
    balance: 2759313250,
    messages: ["realizo una abono a su cuenta fiduciaria terminda 6567 por un valo 2,759,313,250 ", "estado de cuenta retenida", "pendiente por TRM 3%"] 
  },
  {
    id: 10,
    name: "Rafael fuentes",
    email: "cundy7175@gmail.com",
    password: "6789",
    accountType: "Cuenta ahorros",
    accountNumber: "678865676567",
    balance: 13300000.00,
    messages: ["tu cuenta fiduciaria terminda 6567 se realizo un abono 13.300.000.00", "estado de cuenta retenido", "impuesto del gobierno 4x1000"]
  },
  {
    id: 11,
    name: "Ricardo Gómez",
    email: "ricardo.gomez@example.com",
    password: "ricardo123",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-11",
    balance: 400.00,
    messages: ["tu cuenta fiduciaria terminda 6567 se realizo un abono 35.200.000.00", "estado de cuenta retenido", "impuesto del gobierno 4x1000"]
  },
  {
    id: 12,
    name: "Sofía López",
    email: "sofia.lopez@example.com",
    password: "sofia456",
    accountType: "Cuenta Corriente",
    accountNumber: "232-879435-12",
    balance: 3100.00,
    messages: ["tu cuenta fiduciaria terminda 6567 se realizo un abono 35.200.000.00", "estado de cuenta retenido", "impuesto del gobierno 4x1000"]
  },
  {
    id: 13,
    name: "Juancarlos",
    email: "Juaneuroparts@gmail.com",
    password: "juanel789",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-13",
    balance: 0.00,
    messages: ["ms", "ms", "ms"] 
  },
  {
    id: 14,
    name: "Lucía Fernández",
    email: "lucia.fernandez@example.com",
    password: "lucia321",
    accountType: "Cuenta Corriente",
    accountNumber: "232-879435-14",
    balance: 2200.00,
    messages: [] // Mensajes vacíos
  },
  {
    id: 15,
    name: "Tomás Ramírez",
    email: "tomas.ramirez@example.com",
    password: "tomas654",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-15",
    balance: 350.00,
    messages: [] // Mensajes vacíos
  },
  {
    id: 16,
    name: "Andrea Vargas",
    email: "andrea.vargas@example.com",
    password: "andrea987",
    accountType: "Cuenta Corriente",
    accountNumber: "232-879435-16",
    balance: 1450.00,
    messages: [] // Mensajes vacíos
  },
  {
    id: 17,
    name: "Jorge Castro",
    email: "jorge.castro@example.com",
    password: "jorge456",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-17",
    balance: 750.00,
    messages: [] // Mensajes vacíos
  },
  {
    id: 18,
    name: "Isabel Mendoza",
    email: "isabel.mendoza@example.com",
    password: "isabel789",
    accountType: "Cuenta Corriente",
    accountNumber: "232-879435-18",
    balance: 2700.00,
    messages: [] // Mensajes vacíos
  },
  {
    id: 19,
    name: "Pedro Gómez",
    email: "pedro.gomez@example.com",
    password: "pedro123",
    accountType: "Cuenta de Ahorro",
    accountNumber: "232-879435-19",
    balance: 600.00,
    messages: [] // Mensajes vacíos
  },
  {
    id: 20,
    name: "Paula López",
    email: "paula.lopez@example.com",
    password: "paula456",
    accountType: "Cuenta Corriente",
    accountNumber: "232-879435-20",
    balance: 1350.00,
    messages: [] // Mensajes vacíos
  }
];

export default mockUsers;

