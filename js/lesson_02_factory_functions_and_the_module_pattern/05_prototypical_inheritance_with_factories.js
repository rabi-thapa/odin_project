function createPlayer(name, level){
    const {getReputation, giveReputation}= createUser(name);

    const increaseLevel= ()=> {level++};

    return{name, getReputation, giveReputation, increaseLevel}
}


function createPlayer(name, level) {
    const user = createUser(name);
  
    const increaseLevel = () => { level++; };
    return Object.assign({}, user, { increaseLevel });
  }
  
