var Grammars : {
nouns:{
  weapons:[
    {name:"Fist",
      stats:{
        attack:{impact:20}, speed:40, accuracy:75, critChance:10, critMult:0.25}
      },
    {name:"Knife",
      stats:{
        attack:{piercing:40}, speed:40, accuracy:75, critChance:10, critMult:0.75}
      },
    {name:"Blade",
      stats:{
        attack:{cutting:50}, speed:45, accuracy:80, critChance:5, critMult:1}
      },
    {name:"Sword",
      stats:{
        attack:{cutting:100}, speed:75, accuracy:85, critChance:5, critMult:0.25}
      },
    {name:"Spear",
      stats:{
        attack:{pierce:115}, speed:75, accuracy:75, critChance:5, critMult:0.5}
      },
    {name:"Saw",
      stats:{
        attack:{cutting:150}, speed:60, accuracy:60, critChance:20, critMult:0.5}
      },
    {name:"Hammer",
      stats:{
        attack:{impact:200}, speed:80, accuracy:80, critChance:25, critMult:0.25}
      },
    {name:"Pistol",
      stats:{
        attack:{pierce:50}, speed:50, accuracy:60, critChance:5, critMult:0.25}
      },
    {name:"Shotgun",
      stats:{
        attack:{impact:25,cutting:25}, speed:90, accuracy:90, critChance:50, critMult:2.25}
      },
    {name:"Rifle",
      stats:{
        attack:{pierce:100}, speed:80, accuracy:90, critChance:10, critMult:0.5}
      },
    {name:"Cannon",
      stats:{
        attack:{impact:300}, speed:100, accuracy:80, critChance:5, critMult:1}
      },
    {name:"Flame Thrower",
      stats:{
        attack:{heat:100}, speed:95, accuracy:80, critChance:25, critMult:1.5}
      },
    {name:"Launcher",
      stats:{
        attack:{impact:350}, speed:125, accuracy:80, critChance:5, critMult:0.75}
      },
    {name:"Mortar",
      stats:{
        attack:{impact:500}, speed:150, accuracy:500, critChance:1, critMult:2}
      },
    {name:"Beam",
      stats:{
        attack:{alpha:160}, speed:65, accuracy:65, critChance:5, critMult:0.6}
      },
    {name:"Ray",
      stats:{
        attack:{energy:160}, speed:65, accuracy:65, critChance:5, critMult:0.6}
      },
    {name:"Lazer",
      stats:{
        attack:{heat:160}, speed:65, accuracy:65, critChance:5, critMult:0.6}
      },
    {name:"Discombobulator",
      stats:{
        attack:{alpha:1000}, speed:300, accuracy:80, critChance:25, critMult:1}
      },
  ],
  augments:[
    {name:"Padding", stats:{defense:{resist:damageType.impact}, hp:25, dodge:-5}},
    {name:"Sync", stats:{defense:{resist:damageType.heat}, hp:50, dodge:-10}},
    {name:"Shield", stats:{defense:{vulnerable:damageType.energy}, hp:150, dodge:-20}},
    {name:"Plating", stats:{defense:{resist:damageType.cut}, hp:100, dodge:-20}},
    {name:"Armor", stats:{hp:50, dodge:-10}},
    {name:"Carapace", stats:{hp:75, dodge:-15}},
    {name:"Mesh", stats:{hp:25, dodge:-5}},
    {name:"Weave", stats:{defense:{resist:damageType.pierce}, hp:25, dodge:-5}},
    {name:"Rig", stats:{hp:50, dodge:-10}},
    {name:"Crank", stats:{power:50, dodge:-5}},
    {name:"Capacitor", stats:{power:110, dodge:-10}},
    {name:"Inductor", stats:{power:155, dodge:-15}},
    {name:"Battery", stats:{power:220, dodge:-20}},
    {name:"Panel", stats:{power:330, dodge:-30}},
    {name:"Generator", stats:{power:440, dodge:-40}},
    {name:"Reactor", stats:{power:550, dodge:-50}},

    {name:"Spring", stats:{accuracy:5, power:-25}},
    {name:"Sight", stats:{accuracy:10, power:-50}},
    {name:"Pointer", stats:{accuracy:15, power:-75}},
    {name:"Scope", stats:{accuracy:20, power:-100}},
    {name:"Grip", stats:{accuracy:25, power:-125}},
    {name:"Bipod", stats:{accuracy:30, power:-150}},
    {name:"Tripod", stats:{accuracy:40, power:-200}},
    {name:"Gimbal", stats:{accuracy:30, power:-150}},
    {name:"Gyroscope", stats:{accuracy:40, power:-200}},
    {name:"Hydraulics", stats:{accuracy:45, power:-245}},
    {name:"Stabilizer", stats:{accuracy:50, power:-250}},

    {name:"Overclocker", stats:{speed:-15, power:-30}},
    {name:"Exhaust", stats:{speed:-10, -20}},

    {name:"Jet", stats:{dodge:5, power:-25}},
    {name:"Tread", stats:{dodge:10, power:-50}},
    {name:"Wheel", stats:{dodge:20, power:-100}},
    {name:"Foot", stats:{dodge:30, power:-150}},
    {name:"Podomere", stats:{dodge:40, power:-200}},
    {name:"Thruster", stats:{dodge:50, power:-250}},
    {name:"Maglev", stats:{dodge:50, power:-250}},


    {name:"Computer", stats:{accuracy:10, dodge:10, power:-10}},

    {name:"Spray", stats:{multiplier:1.1}},
    {name:"Paint", stats:{multiplier:1.2}},
    {name:"Decal", stats:{multiplier:1.3}},
  ],
  appendages:[
    {name:"Arm", size:2}
    {name:"Leg", size:2}
    {name:"Pack", size:3}
    {name:"Wing", size:2}
    {name:"Strut", size:2}
    {name:"Tail", size:2}
    {name:"Mandible", size:1}
    {name:"Array", size:6}
    {name:"Bank", size:6}
    {name:"Turret", size:3}
    {name:"Pole", size:1}
    {name:"Head", size:2}
    {name:"Segment", size:3}
    {name:"Limb", size:2}
    {name:"Frame", size:4}
    {name:"Support", size:4}
  ],
},
adjectives:[
  {name:"Flaming", stats:{damage{fire:10}, defense:{resist:damageType.heat}}},
  {name:"Burning", stats:{upgrade:damageType.heat, defense:{resist:damageType.heat}}},
  {name:"Melting", stats:{damage:{plasma:10}, hp:-100}},
  {name:"Rapid", stats:{speed:-10},
  {name:"Electro", stats:{multiplier:{energy:1}, defense:{resist:damageType.energy}}},
  {name:"Electric", stats:{upgrade:damageType.energy, defense:{resist:damageType.energy}}},
  {name:"Rending", stats:{upgrade:damageType.cut}},
  {name:"Advanced", stats:{power:50, powermod:-0.1},
  {name:"Plated", stats:{hp:100, vulnerable:damageType.acid}},
  {name:"Nano", stats:{upgrade:damageType.cut}},
  {name:"Super", stats:{multiplier:0.1}},
  {name:"Gauss", stats:{damage:{impact:10}}},
  {name:"Rail", stats:{multiplier:{impact:1}}},
  {name:"Acid", stats:{damage:{acid:10}}},
  {name:"Corrosive", stats:{damage:{corrosive:10}}},
  {name:"Impact", stats:{damage:{impact:10}}},
  {name:"Concussive", stats:{upgrade:damageType.impact}},
  {name:"power", stats:{multiplier:{damage:1}}},
  {name:"Defensive", stats:{hp:100}},
  {name:"Heavy", stats:{hp:25, dodge:-5, accuracy:-5, multiplier:{damage:0.5}}},
  {name:"Impaling", stats:{damage:{pierce:10}}},
  {name:"Penetrating", stats:{upgrade:damageType.pierce}},
  {name:"Shock", stats:{upgrade:damageType.energy}},
  {name:"Stun", stats:{damage:{energy:10}}},
  {name:"Chemical", stats:{upgrade:damageType.acid}},
  {name:"Plasma", stats:{damage:{plasma:5}}},
  {name:"Sticky", stats:{speed:10}},
  {name:"Jet", stats:{speed:-10}},
  {name:"Laser", stats:{damage:{energy:10}}},
  {name:"Badass", stats:{damage:{slash:20}}},
  {name:"Savage", stats:{damage:{serrate:15}}},
  {name:"Problematic", stats:{vulnerable:damageType.energy}},
  {name:"DIY", stats:{speed:-5, vulnerable:damageType.heat}},
  {name:"Shadow", stats:{speed:-10}},
  {name:"Lead", stats:{resist:damageType.rad, speed:5}},
  {name:"Sharp", stats:{damage{slash:10}}},
  {name:"Crazy", stats:{multiplier:{speed:-0.5}, accuracy:-10}},
  {name:"Rocket", stats:{damage:{explosive:10}}},
  {name:"Non_Euclidean", stats:{damage:{beta:10}, vulnerable:damageType.rad}},
  {name:"Cute", stats:{multiplier:-0.05}},
  {name:"Eco_Friendly", stats:{powermod:-0.2}},
  {name:"Ergonomic", stats:{speed:-3}},
  {name:"Spikey", stats:{damage:{puncture:5}}},
  {name:"Shiny", stats:{resist:damageType.rad}},
  {name:"Sleek", stats:{resist:damageType.pierce}},
  {name:"Manly", stats:{resist:damageType.impact}},
  {name:"Stained", stats:{resist:damageType.heat}},
  {name:"Clunky", stats:{speed:5}},
  {name:"Golden", stats:{vulnerable:damageType.energy}},
  {name:"Small", stats:{speed:-5}},
  {name:"Large", stats:{multiplier:0.25, speed:5, hp:100}},
  {name:"Medium", stats:{speed:2}},
  {name:"Colossal", stats:{multiplier:0.5, speed:7, hp:200}},
  {name:"Tiny", stats:{speed:-7}},
  {name:"Angry", stats:{multiplier:{damage:0.5, speed:-0.5}}},
  {name:"Chain", stats:{multiplier:-0.1, speed:-30}},
  {name:"Machine", stats:{multiplier:{speed:-0.5}, vulnerable:damageType.energy}},
  {name:"Square", stats:{}},
  {name:"Hyper", stats:{damage:{magnetic:20}}},
  {name:"Radioactive", stats:{damage:{gamma:15}}},
  {name:"Interdimensional", stats:{damage:{alpha:23}}},
  {name:"Shrimp", stats:{hp:-10, speed:-1}},
  /*
  {name:"Pulse", stats:{}},
  {name:"Neat", stats:{}},
  {name:"Floral", stats:{}},
  {name:"Vintage", stats:{}},
  {name:"Tactical", stats:{}},
  {name:"Repeating", stats:{}},
  {name:"Dependable", stats:{}},
  {name:"Elegant", stats:{}},
  {name:"Intense", stats:{}},
  {name:"Redundant Redundant", stats:{}},
  {name:"Tricky", stats:{}},
  {name:"Gritty", stats:{}},
  {name:"Ruthless", stats:{}},
  {name:"Assault", stats:{}},
  {name:"Swiss", stats:{}},
  {name:"Army", stats:{}},
  {name:"Great", stats:{}},
  {name:"Surgical", stats:{}},
  {name:"Serrated", stats:{}},
  {name:"Operational", stats:{}},
  {name:"Royal", stats:{}},
  {name:"Steady", stats:{}},
  {name:"Gatling", stats:{}},
  {name:"New", stats:{}},
  {name:"Improved", stats:{}},
  {name:"Casual", stats:{}},
  {name:"Magnetic", stats:{}},
  {name:"Greasy", stats:{}},
  {name:"Fancy", stats:{}},
  {name:"Ringed", stats:{}},
  {name:"Enhanced", stats:{}},
  {name:"Concerning", stats:{}},
  {name:"Grim", stats:{}},
  {name:"Dark", stats:{}},
  {name:"Edgy", stats:{}},
  {name:"Handy", stats:{}},
  {name:"Dandy", stats:{}},
  {name:"Practical", stats:{}},
  {name:"Ordinary", stats:{}},
  {name:"Ornery", stats:{}},
  {name:"Ornate", stats:{}},
  {name:"Miserable", stats:{}},
  {name:"Happy", stats:{}},
  {name:"Gay", stats:{}},
  {name:"Focused", stats:{}},
  {name:"Concrete", stats:{}},
  {name:"Demanding", stats:{}},
  {name:"Graphic", stats:{}},
  {name:"Explicit", stats:{}},
  {name:"M_Rated", stats:{}},
  {name:"G_Rated", stats:{}},
  {name:"Forgiving", stats:{}},
  {name:"Consistent", stats:{}},
  {name:"Compassionate", stats:{}},
  {name:"Thoughtful", stats:{}},
  {name:"Cheerful", stats:{}},
  {name:"Diplomatic", stats:{}},
  {name:"Bilateral", stats:{}},
  {name:"Trilateral", stats:{}},
  {name:"Quadrilateral", stats:{}},
  {name:"Metal", stats:{}},
  {name:"Carbon_Fiber", stats:{}},
  {name:"Glass", stats:{}},
  {name:"Anti_Material", stats:{}},
  {name:"Harmonic", stats:{}},
  {name:"Thunderous", stats:{}},
  {name:"Tumultuous", stats:{}},
  {name:"Explosive", stats:{}},
  {name:"Blasting", stats:{}},
  {name:"Unstable", stats:{}},
  {name:"Reactive", stats:{}},
  {name:"Polymer", stats:{}},
  {name:"Volatile", stats:{}},
  {name:"Combustive", stats:{}},
  {name:"Incendiary", stats:{}},
  {name:"Carcinigenic", stats:{}},
  {name:"Paroxysmal", stats:{}},
  {name:"Dense", stats:{}},
  */
  {name:"Loud", stats:{damage:{sonic:10}}},
  {name:"Tesla", stats:{damage:{electric:10}}},
  {name:"Atomic", stats:{damage:{gamma:6}}},
  /*
  {name:"Iron", stats:{}},
  {name:"Copper", stats:{}},
  {name:"Tin", stats:{}},
  {name:"Silvered", stats:{}},
  {name:"Platinum", stats:{}},
  {name:"Aluminum", stats:{}},
  {name:"Titanium", stats:{}},
  {name:"Adamantine", stats:{}},
  */
  {name:"Plastic", stats:{resist:damageType.energy, vulnerable:damageType.heat}},
  {name:"3d_Printed", stats:{speed:3, vulnerable:damageType.impact}},
  {name:"Steel", stats:{hp:100, vulnerable:damageType.energy}},
  {name:"Weighted", stats:{multiplier:1, speed:30}},
  {name:"Cumbersome", stats:{speed:5}},
  {name:"Thick", stats:{speed:10}, hp:100},
  {name:"Nasty", stats:{damage:{cut:10}, speed:10}},
  {name:"Broken", stats:{multiplier:-0.25}},
  {name:"Wooden", stats:{vulnerable:damageType.fire, vulnerable:damageType.acid, immune:damageType.energy}},
  {name:"Worn", stats:{speed: 10, vulnerable:damageType.rad}},
  {name:"Rusty", stats:{multiplier:-0.1, vulnerable:damageType.energy}},
  {name:"Trash", stats:{multiplier:-0.5}},
],
],
suffixes:{
  {name:'X',    tier:1, multiplier:2},
  {name:'XX',   tier:2, multiplier:2},
  {name:'XXX',  tier:3, multiplier:2},
  {name:'Mk1',  tier:1, multiplier:1.75},
  {name:'Mk2',  tier:2, multiplier:1.75},
  {name:'Mk3',  tier:3, multiplier:1.75},
  {name:'+1',   tier:1, multiplier:1.5},
  {name:'+2',   tier:2, multiplier:1.5},
  {name:'+3',   tier:3, multiplier:1.5},
  {name:'1000', tier:1, multiplier:1.25},
  {name:'2000', tier:2, multiplier:1.25},
  {name:'3000', tier:3, multiplier:1.25},
  {name:'V1',   tier:1, multiplier:1},
  {name:'V2',   tier:2, multiplier:1},
  {name:'V3',   tier:3, multiplier:1},
},
}
