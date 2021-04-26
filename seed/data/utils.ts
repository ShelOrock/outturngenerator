import { CaskAttributes } from '../../server/types/models/index';

const generateCaskInformation = (): CaskAttributes => {
  
  const flavourProfileData = [
    'Young & spritely',
    'Sweet, fruity & mellow',
    'Spicy & sweet',
    'Spicy & dry',
    'Deep, rich & dried fruits',
    'Old & dignified',
    'Light & delicate',
    'Juicy, oak & vanilla',
    'Oily & coastal',
    'Lightly peated',
    'Peated',
    'Heavily peated',
    'Rum',
    'Armagnac',
    'Cognac',
    'Bourbon',
    'Gin',
  ];

  const ageData = Math.ceil(Math.random() * (40 - 3) + 3);

  const monthData = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
    
  const regionData = [
    'Speyside',
    'Highland',
    'Lowland',
    'Campbeltown',
    'Islay'
  ];

  const caskTypeData = [
    'First-fill barrel',
    'Refill barrel',
    'Second-fill barrel',
    'First-fill hogshead',
    'Refill hoghsead',
    'Second-fill hogshead',
    'First-fill Pedro Ximenez hogshead',
    'First-fill barrel heavy toast/medium char'
  ]

  const bottleOutturnData = Math.ceil(Math.random() * 600);

  const generatedData = {
    caskNumber: `${ (Math.random() * 150.000).toFixed(Math.ceil(Math.random() * 3)) }`,
    price: `${ Math.ceil(Math.random() * (2000 - 150) + 150) }`,
    flavourProfile: `${ flavourProfileData[Math.floor(Math.random() * flavourProfileData.length)] }`,
    age: `${ ageData }`,
    date: `${ monthData[Math.floor(Math.random() * monthData.length)] } ${ 2020 - ageData }`,
    region: `${ regionData[Math.floor(Math.random() * regionData.length)] }`,
    caskType: `${ caskTypeData[Math.floor(Math.random() * caskTypeData.length )] }`,
    abv: (Math.random() * (60 - 40) + 40).toFixed(1),
    bottleOutturn: `${ bottleOutturnData }`,
    allocation: `${ Math.ceil(Math.random() * (bottleOutturnData - 30) + 30) }`
  }

  return generatedData;
}

export default generateCaskInformation;