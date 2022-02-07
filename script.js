const friends = ['Ross','Rachel','Monica','Chandler','Joey','Phoebe','Regina Phalange','Ken Adams','Mike','Crap Bag','Princess Consuela'];
const quotes = [
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

console.log(`Hi, I'm ${friends[Math.floor(Math.random()*friends.length)]}'s detective friend.`);
console.log(`I suspect someone ${quotes[Math.floor(Math.random()*quotes.length)]}.`);
console.log(`Before we investigate, lets ${chat[Math.floor(Math.random()*chat.length)]}.`);