const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

/*
{
    tableName:"tableVips",
    vipName:"vipName",
    position: 1,
}
*/

const vipsNames = vips.map((vip, key) => {
  
  return {
    tableName: "tableVips",
    vipName: vip,
    position: key + 1,
  };
});

console.log(vipsNames);
