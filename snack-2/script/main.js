// Id  | Name                  | Grades |
// | --- | --------------------- | ------ |
// | 213 | Marco della Rovere    | 78     |
// | 110 | Paola Cortellessa     | 96     |
// | 250 | Andrea Mantegna       | 48     |
// | 145 | Gaia Borromini        | 74     |
// | 196 | Luigi Grimaldello     | 68     |
// | 102 | Piero della Francesca | 50     |
// | 120 | Francesca da Polenta  | 84   




const data = [
   {id:213, name: "Marco Della Rovere", grades: 78},
   {id:213, name: "Marco Della Rovere", grades: 68}, 
   {id:110, name: "Marco Della Rovere", grades: 78} 
]

const uppercase = data.map((studente) => {
    const r = studente
    r.name = r.name.toUpperCase()
    return r
    // return {...studente, name:studente.name.toUpperCase()}
})
console.log(uppercase)

const filterByGrade = data.filter((studente) => {
    return studente.grades > 70;
})
console.log(filterByGrade)

const filterByGradeAndId = data.filter((studente) => {
    return studente.grades > 70 && studente.id > 120;
})
console.log(filterByGradeAndId)