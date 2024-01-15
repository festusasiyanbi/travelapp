export interface DataProp {
  id: number;
  name: string;
  address: string;
  description: string;
  image: any;
  price: number;
  category: string;
  popular: boolean;
  star: number;
  review: number;
}

export const data: DataProp[] = [
  {
    id: 1,
    name: 'Albuquerque New Temple',
    address: 'Hogan Ave Unit 12',
    description:
      'The exterior of the Albuquerque New Mexico Temple and grounds are lit up at night.',
    image: require('../assets/temple.png'),
    price: 90,
    category: 'temple',
    popular: true,
    star: 9.65,
    review: 213,
  },
  {
    id: 2,
    name: 'Abidjan Ivory Coast Temple',
    address: 'Markham Rd unit 27',
    description:
      'The exterior of the Albuquerque New Mexico Temple and grounds are lit up at night.',
    image: require('../assets/temple1.png'),
    price: 108,
    category: 'temple',
    popular: false,
    star: 9.54,
    review: 230,
  },
  {
    id: 3,
    name: 'Vietnam’s Coastline Beach',
    address: 'Nelson Rd unit 12',
    description:
      'Vietnam’s coastline stretches more than 3000 kilometers north to' +
      'south, a long thin country with mountain ranges running down its central spine.' +
      'The ocean forms the entire eastern border of Vietnam, so beaches and islands are' +
      'scattered through every region and climate zone.',
    image: require('../assets/beach1.png'),
    price: 43,
    category: 'beach',
    popular: true,
    star: 9.43,
    review: 223,
  },
  {
    id: 4,
    name: 'Phu Quoc Island Beach',
    address: 'Kingston Rd unit 10',
    description:
      'Called the “Pearl Island” for its dazzling white sand beaches, more' +
      'than half of the island and its surrounding ocean is a protected' +
      'biosphere reserve. The 10,000 hectares of the Phu Quoc National Park’s' +
      'landmass are home to nearly a thousand plant species, many of which are' +
      'endangered, and the marine biosphere teems with hundreds of species of coral' +
      'reef, tropical fish, and other aquatic species.',
    image: require('../assets/beach.jpg'),
    price: 45,
    category: 'beach',
    popular: true,
    star: 9.2,
    review: 143,
  },
  {
    id: 5,
    name: 'Ramla Bay',
    address: 'Morningside Ave Unit 17',
    description:
      'Thanks to a high iron content in its sands, Ramla Bay on the Maltese island' +
      'of Gozo hosts dreamy orange sands along its coast. Plus, you can also explore' +
      'Roman ruins in the nearby Calypso Cave.',
    image: require('../assets/nature1.jpg'),
    price: 75,
    category: 'nature',
    popular: true,
    star: 9.45,
    review: 137,
  },
  {
    id: 6,
    name: 'Porto Ferro',
    address: 'Ellesmere Rd unit 10',
    description:
      'Porto Ferro in Sardinia, Italy, hosts bright orange-colored sand that is a' +
      'result of the area’s orange limestone, crushed shells, and volcanic deposits.' +
      'While you’re there, head to the 65-foot high sand dunes behind the beach.',
    image: require('../assets/nature.png'),
    price: 82,
    category: 'nature',
    popular: false,
    star: 9.1,
    review: 124,
  },
];
