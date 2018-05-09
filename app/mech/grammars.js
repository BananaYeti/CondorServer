const Grammars = {
nouns:[
  {
    name:"Fist",
    stats:{
      pierceAttack:10,
      serrateAttack:0,
      impactAttack:0,
      attackSpeed:10,
      accuracy:75,
      critChance:10,
      critMult:2,
      energy:-10,
    }
  },
  {
    name:"Gun",
    stats:{
      pierceAttack:1,
      serrateAttack:0,
      impactAttack:0,
      attackSpeed:100,
      accuracy:0.8,
      critChance:0.5,
      critMult:1.5,
      energy:-1,
    }
  },
],

adjectives:[
  {
    name:"Penetrating",
    stats:{
      pierceAttack:10,
    }
  },
  {
    name:"Impacting",
    stats:{
      impactAttack:10,
    }
  },
],
suffixes:[
  {name:'Mk1',  multiplier:1.3},
  {name:'Mk2',  multiplier:2.3},
  {name:'Mk3',  multiplier:3.3},
  {name:'Mk4',  multiplier:4.3},
  {name:'X',    multiplier:1.2},
  {name:'XX',   multiplier:2.2},
  {name:'XXX',  multiplier:3.2},
  {name:'XL',   multiplier:4.2},
  {name:'+1',   multiplier:2.5},
  {name:'+2',   multiplier:2.6},
  {name:'+3',   multiplier:2.7},
  {name:'+4',   multiplier:2.8},
  {name:'1000', multiplier:1.1},
  {name:'2000', multiplier:2.1},
  {name:'3000', multiplier:3.1},
  {name:'4000', multiplier:4.1},
  {name:'V1',   multiplier:1.05},
  {name:'V2',   multiplier:2},
  {name:'V3',   multiplier:3},
  {name:'V4',   multiplier:4},
]
}



module.exports = Grammars;
