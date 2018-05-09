var Grammars : {
nouns:{
  weapons:{
    {
      name:"Fist"
      stats:[
        pierceAttack:0,
        serrateAttack:0,
        impactAttack:10,
        attackSpeed:10,
        accuracy:75,
        critChance:10,
        critMult:2,
        energy:-10,
      ]
    },
    {
      name:"Gauntlet"
      stats:[
        pierceAttack:0,
        serrateAttack:0,
        impactAttack:25,
        attackSpeed:20,
        accuracy:70,
        critChance:10,
        critMult:2,
        energy:-15,
      ]
    },
    {
      name:"Knife"
      stats:[
        pierceAttack:40,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:30,
        accuracy:1,
        critChance:1,
        critMult:1,
        energy:-1,
      ]
    }
    {
      name:"Dagger"
      stats:[
        pierceAttack:45,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:40,
        accuracy:1,
        critChance:1,
        critMult:1,
        energy:-1,
      ]
    },
    {
      name:"Blade"
      stats:[
        pierceAttack:1,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:50,
        accuracy:1,
        critChance:1,
        critMult:1,
        energy:-1,
      ]
    },
    {
      name:"Katana"
      stats:[
        pierceAttack:1,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:60,
        accuracy:1,
        critChance:1,
        critMult:1,
        energy:-1,
      ]
    },
    {
      name:"Sword"
      stats:[
        pierceAttack:1,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:70,
        accuracy:1,
        critChance:1,
        critMult:1,
        energy:-1,
      ]
    },
    {
      name:"Saw"
      stats:[
        pierceAttack:1,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:80,
        accuracy:1,
        critChance:1,
        critMult:1,
        energy:-1,
      ]
    },

    {
      name:"Pistol"
      stats:[
        pierceAttack:0.9,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:90,
        accuracy:0.8,
        critChance:0.5,
        critMult:1.25,
        energy:-0.9,
      ]
    },
    {
      name:"Gun"
      stats:[
        pierceAttack:1,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:100,
        accuracy:0.8,
        critChance:0.5,
        critMult:1.5,
        energy:-1,
      ]
    },
    {
      name:"Shotgun"
      stats:[
        pierceAttack:1,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:110,
        accuracy:0.6,
        critChance:1,
        critMult:1,
        energy:-1,
      ]
    },
    {
      name:"Rifle"
      stats:[
        pierceAttack:1,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:120,
        accuracy:1,
        critChance:1,
        critMult:1,
        energy:-1,
      ]
    },
    {
      name:"Cannon"
      stats:[
        pierceAttack:1,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:130,
        accuracy:1,
        critChance:1,
        critMult:1,
        energy:-1,
      ]
    },
    {
      name:"Thrower"
      stats:[
        pierceAttack:1,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:140,
        accuracy:1,
        critChance:1,
        critMult:1,
        energy:-1,
      ]
    },
    {
      name:"Launcher"
      stats:[
        pierceAttack:1,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:150,
        accuracy:1,
        critChance:1,
        critMult:1,
        energy:-1,
      ]
    },
    {
      name:"Mortar"
      stats:[
        pierceAttack:1,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:160,
        accuracy:1,
        critChance:1,
        critMult:1,
        energy:-1,
      ]
    },
    {
      name:"Beam"
      stats:[
        pierceAttack:1,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:170,
        accuracy:1,
        critChance:1,
        critMult:1,
        energy:-1,
      ]
    },
    {
      name:"Discombobulator"
      stats:[
        pierceAttack:1,
        serrateAttack:0,
        impactAttack:0,
        attackSpeed:180,
        accuracy:1,
        critChance:1,
        critMult:1,
        energy:-1,
      ]
    },
  },
  augments:{
    Shield
    Plating
    Armor
    Carapace
    Mesh
    Weave
    Rig

    Capacitor
    Coil
    Battery
    Panel
    Crank
    Mill
    Boiler
    Generator

    Stabilizer
    Spring
    Hydraulics
    Scope
    Grip
    Tripod
    Bipod
    Sight
    Pointer

    Overclocker
    Exhaust
    Gimbal
    Gyroscope


    Foot
    Tread
    Wheel
    Podomere
    Fin

    //Acts like suffix?
    Computer
    Spray
    Paint
    Decal
  },
  appendages:{
    Arm
    Leg
    Pack
    Wing
    Strut
    Tail
    Mandible
    Array
    Bank
    Turret
    Pole
    Head
    Segment
    Limb
    Frame
    Support
  },
},
adjectives:{
  Flame
  Burning
  Melting
  Rapid
  Electro
  Electric
  Rending
  Advanced
  Plated
  Nano
  Super
  Gauss
  Rail
  Acid
  Impact
  Concussive
  Energy
  Defensive
  Heavy
  Impaling
  Penetrating
  Shock
  Stun
  Chemical
  Plasma
  Sticky
  Jet
  Laser
  Badass
  Savage
  Problematic
  DIY
  Lead
  Sharp
  Crazy
  Rocket
  Non_Euclidean
  Cute
  Eco_Friendly
  Ergonomic
  Spikey
  Shiny
  Sleek
  Manly
  Stained
  Clunky
  Golden
  Small
  Large
  Medium
  Colossal
  Tiny
  Angry
  Chain
  Machine
  Square
  Hyper
  Radioactive
  Interdimensional
  Shrimp
  Pulse
  Neat
  Floral
  Vintage
  Tactical
  Repeating
  Dependable
  Elegant
  Intense
  Redundant
  Tricky
  Gritty
  Ruthless
  Assault
  Swiss
  Army
  Great
  Surgical
  Serrated
  Operational
  Royal
  Steady
  Gatling
  New
  Improved
  Casual
  Magnetic
  Greasy
  Fancy
  Ringed
  Enhanced
  Concerning
  Grim
  Dark
  Edgy
  Handy
  Dandy
  Practical
  Ordinary
  Ornery
  Ornate
  Miserable
  Happy
  Gay
  Focused
  Concrete
  Demanding
  Graphic
  Explicit
  M_Rated
  G_Rated
  Forgiving
  Consistent
  Compassionate
  Thoughtful
  Cheerful
  Diplomatic
  Bilateral
  Trilateral
  Quadrilateral
  Metal
  Carbon_Fiber
  Glass
  Anti_Material
  Harmonic
  Thunderous
  Tumultuous
  Explosive
  Blasting
  Exploding
  Unstable
  Reactive
  Polymer
  Volatile
  Combustive
  Incendiary
  Carcinigenic
  Paroxysmal
  Dense
  Loud
  Atomic
  Iron
  Copper
  Tin
  Silvered
  Platinum
  Aluminum
  Titanium
  Adamantine
  Plastic
  3d_Printed
  Steel
  Weighted
  Lofty
  Cumbersome
  Thick
  Nasty
  Broken
  Wooden
  Worn
  Rusty
  Trash
  },
},
suffixes:{
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
},
}
