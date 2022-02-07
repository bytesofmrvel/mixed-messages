const messageData = {
    friends : [
        'Ross','Rachel','Monica','Chandler','Joey','Phoebe','Mike',
        'Regina Phalange','Ken Adams','Crap Bag','Princess Consuela'
    ],
    crime : [
        'was on a break',
        'doesn\'t share food',
        'wished they could help but didn\'t want to',
        'makes jokes when they\'re uncomfortable',
        'bought an expensive pair of boots',
        'got off the plane',
        'was backpacking across Western Europe',
        'don\'t even have a pla'
    ],
    chat : [
        'get a good massage',
        'visit the Natural History museum',
        'check the offers at Bloomingdale\'s',
        'watch Die Hard I again',
        'put the furnitures back in place',
        'wish for a million dollars',
        'order 2 pizzas',
        'pivot'
    ],
    random(arrayLength){
        return Math.floor(Math.random()*arrayLength);
    },
    giveIntro(){
        return `Hi, I'm ${this.friends[this.random(this.friends.length)]}'s detective friend.`;
    },
    crimeCommitted(){
        return `I suspect someone ${this.crime[this.random(this.crime.length)]}.`;
    },
    chatBeforeInv(){
        return `Before we investigate, lets ${this.chat[this.random(this.chat.length)]}.`;
    },
    displayMessage(){
        document.getElementById("message").innerHTML = this.giveIntro() +'</br>'+ this.crimeCommitted() +'</br>'+ this.chatBeforeInv();
    }
}