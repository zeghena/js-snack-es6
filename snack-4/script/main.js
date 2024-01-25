const teams = [
    {
      name: 'Team Turtle',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Frog',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Penguin',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Hippopotamus',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Seal',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Crocodile',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Dolphin',
      score: 0,
      foul: 0,
    },
  ];

  teams.forEach((team) =>{
    team.score = getRandomNumber(1, 100)
    team.foul = getRandomNumber(1, 80)

    console.log(team)

  })