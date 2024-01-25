// ### Creare un array di oggetti
//  ### Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const biciclette = [
    {
      nome: "bicicletta A",
      pesoKg: getRandomNumber(3 , 12),
    },
    {
        nome: "bicicletta B",
        pesoKg: getRandomNumber(3 , 12),
      },
      {
        nome: "bicicletta C",
        pesoKg: getRandomNumber(3 , 12),
      },
      {
        nome: "bicicletta D",
        pesoKg: getRandomNumber(3 , 12),
      },
      {
        nome: "bicicletta E",
        pesoKg: getRandomNumber(3 , 12),
      },
      {
        nome: "bicicletta F",
        pesoKg: getRandomNumber(3 , 12),
      },
];

console.log(biciclette);

let minorPeso = biciclette[0].pesoKg;

console.log(minorPeso)

for(i = 0; i < 3; i ++){
  if (i <= minorPeso){
    console.log(minorPeso)
  }
  
};



