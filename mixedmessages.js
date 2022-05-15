function ranNum() {
    return (Math.floor(Math.random() * 5));
}

let part1 = ['I love ', 'I adore ', 'I despise ', `I'm proud of `, 'I am terrified of '];
let part2 = ['playing mid lane ', 'playing top lane ', 'playing jungle ', 'playing adc ', 'playing support '];
let part3 = ['against albert tank', 'against tigre chen', 'against trap', 'against hashinshin', 'against faker'];

let finalMessage = part1[ranNum()] + part2[ranNum()] + part3[ranNum()];

console.log(finalMessage);