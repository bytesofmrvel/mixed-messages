const friends = ['Ross','Rachel','Monica','Chandler','Joey','Phoebe','Regina Phalange','Ken Adams','Mike','Crap Bag','Princess Consuela'];
const crime = [
    'was on a break',
    'doesn\'t share food',
    'wished they could help but didn\'t want to',
    'makes jokes when they\'re uncomfortable',
    'bought an expensive pair of boots',
    'got off the plane',
    'was backpacking across Western Europe',
    'don\'t even have a pla'
];
const chat = [
    'get a good massage',
    'visit the Natural History museum',
    'check the offers at Bloomingdale\'s',
    'watch Die Hard I again',
    'put the furnitures back in place',
    'wish for a million dollars',
    'order 2 pizzas',
    'pivot'
]

const giveIntro = () => {
    return `Hi, I'm ${friends[Math.floor(Math.random()*friends.length)]}'s detective friend.`;
}

const crimeCommitted = () => {
    return `I suspect someone ${crime[Math.floor(Math.random()*crime.length)]}.`;
}

const chatBeforeInv = () => {
    return `Before we investigate, lets ${chat[Math.floor(Math.random()*chat.length)]}.`
}