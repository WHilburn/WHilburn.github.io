const races = [
  {
    "id": 0,
    "enabled": true,
    "name": "Lapine",
    "animal": "Rabbit / hare",
    "icons": ["🐰"],
    "size": "Small or Medium",
    "speed": 35,
    "traits": [
      {
        "n": "Keen Senses",
        "d": "You have proficiency in the Perception skill."
      },
      {
        "n": "Lucky Foot",
        "d": "When you roll a 1 on a d20 Test, you can reroll the die and must use the new roll. You can use this trait a number of times equal to your Proficiency Bonus, and you regain all uses when you finish a Long Rest."
      },
      {
        "n": "Leaping Lunge",
        "d": "Your long jump and high jump distance is doubled."
      },
      {
        "n": "Darkvision",
        "d": "You have Darkvision with a range of 60 feet."
      },
      {
        "n": "Startled Sprint",
        "d": "As a Bonus Action, you can move up to your Speed without provoking Opportunity Attacks. Once you use this trait, you can't use it again until you finish a Short or Long Rest."
      }
    ],
    "feat": "Alert or Speedy",
    "lore": "Lapines are quick-witted, quick-footed folk who have built close-knit warrens across rolling meadowlands. Their long ears pick up the subtlest sounds, and their instinct to bolt at danger serves them as well in diplomacy as in battle. Many lapines are wanderers by nature, and their natural luck has saved more than a few from the teeth of fate."
  },
  {
    "id": 1,
    "enabled": true,
    "name": "Murinae",
    "animal": "Mouse / rat / squirrel",
    "icons": ["🐭","🐿️"],
    "size": "Small (Mouse) or Medium (Rat and Squirrel)",
    "speed": 30,
    "traits": [
      {
        "n": "Keen Senses",
        "d": "You have proficiency in the Perception skill."
      },
      {
        "n": "Nimble Escape",
        "d": "You can take the Disengage or Hide action as a Bonus Action."
      },
      {
        "n": "Hoarding Instinct",
        "d": "You can always determine the shortest path to a hidden or stored object you personally concealed."
      },
      {
        "n": "Whisker Sense(Mouse, Rat) OR Scamper",
        "d": "Mouse/Rat: You have Blindsight with a range of 10 feet, allowing you to detect creatures by vibration and scent even in darkness. Squirrel: You have a climb speed equal to your walk speed."
      },
      {
        "n": "Scurry",
        "d": "You can move through the space of any creature Large or bigger without it counting as Difficult Terrain. Opportunity Attacks against you are made with disadvantage while you are moving through another creature's space."
      }
    ],
    "feat": "Skulker or Magic Initiate",
    "lore": "The Murinae are the most numerous folk in the known lands, found in every city, burrow, and forgotten cellar. Their size is no weakness: generations of survival have made them resourceful, observant, and extraordinarily hard to catch. Rat-kind Murinae often carry a reputation for cunning and commerce; mouse-kind for warmth and community. Squirrels are well liked by all kinds for their chipper demeanors."
  },
  {
    "id": 2,
    "enabled": true,
    "name": "Vulpine",
    "animal": "Fox / wolf",
    "icons": ["🦊","🐺"],
    "size": "Medium",
    "speed": 30,
    "traits": [
      {
        "n": "Cunning Mind",
        "d": "You have proficiency in the Deception or Persuasion skill (your choice)."
      },
      {
        "n": "Pack Sense",
        "d": "You have advantage on Perception checks that rely on smell. You always know the direction of creatures you have previously scented within the past hour, as long as they are within 1 mile."
      },
      {
        "n": "Chase",
        "d": "Once per turn, when you move at least 20 feet toward a creature, your next attack roll against it gains advantage."
      },
      {
        "n": "Foxfire Cunning (Fox) OR Pack Tactics (Wolf)",
        "d": "Fox: When you roll Deception or Persuasion, you can add your Proficiency Bonus to the roll a second time. You can't use this feature again until you complete a long or short rest. Wolf: You have advantage on attack rolls against a creature if at least one of your allies is within 5 feet of that creature and isn't Incapacitated."
      },
      {
        "n": "Darkvision",
        "d": "You have Darkvision with a range of 60 feet."
      }
    ],
    "feat": "Actor (fox) or Inspiring Leader (wolf)",
    "lore": "Vulpines split loosely into two cultures: solitary foxkind, who prize cleverness and self-reliance, and wolfkind, who build fierce, loyal packs. Both share sharp senses and a magnetic confidence that makes them natural leaders... or dangerous schemers."
  },
  {
    "id": 3,
    "enabled": true,
    "name": "Musteline",
    "animal": "Badger / mole / otter / weasel",
    "icons": ["🦡","🦦"],
    "size": "Small or Medium",
    "speed": 30,
    "traits": [
      {
        "n": "Tenacious",
        "d": "When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead. You can't use this trait again until you finish a Long Rest."
      },
      {
        "n": "Darkvision",
        "d": "You have Darkvision with a range of 60 feet."
      },
      {
        "n": "Burrower (Badger/Mole) OR Swimmer (Otter) OR Slippery (Weasel)",
        "d": "Badger/Mole: You have a Burrow speed of 15 feet. Otter: You have a Swim speed equal to your Speed and can hold your breath for up to 15 minutes. Weasel: Ability checks made to escape a Grapple or shackles are made with advantage, and you can squeeze through spaces a creature one size smaller than you could occupy."
      },
      {
        "n": "Scrappy",
        "d": "When a creature misses you with a melee attack, you can use your reaction to move 5 feet without provoking Opportunity Attacks."
      },
      {
        "n": "Musk",
        "d": "As a Reaction when you are hit by a melee attack, you can release a noxious spray. The attacker must succeed on a Constitution saving throw (DC = 8 + your Proficiency Bonus + your Constitution modifier) or be Poisoned until the end of their next turn."
      }
    ],
    "feat": "Tough or Tavern Brawler",
    "lore": "The Mustelinae are as varied as the streams and burrows they inhabit, but all share a fierce, tenacious quality that makes them formidable regardless of size. Badger-folk are stolid and territorial; otter-folk are jovial wanderers who follow the rivers; weasel-folk are slender, fast, and considerably more devious than their otter cousins care to admit."
  },
  {
    "id": 4,
    "enabled": true,
    "name": "Avian",
    "animal": "Crow / owl / sparrow / peacock",
    "icons": ["🐦‍⬛","🦉","🐦","🦚"],
    "size": "Small or Medium",
    "speed": 30,
    "traits": [
      {
        "n": "Flight",
        "d": "As a bonus action, you can launch yourself 10 ft into the air and gain a fly speed equal to your walk speed for 30 seconds. Your hands must remain empty during this time or your flight will end. After this flight ends, you may glide while descending to the ground at a rate of 10 ft per second / 60 ft per round, and take no fall damage. You can't use this ability again until you complete a short rest."
      },
      {
        "n": "Sharp Eyes",
        "d": "You have proficiency in the Perception skill. If you already have this proficiency, you gain Expertise in it instead."
      },
      {
        "n": "Corvid Cunning (Crow) OR Owl's Wisdom (Owl) OR Flock Instinct (Sparrow) OR Distracting Plumage (Peacock)",
        "d": "Crow: You can mimic the voice of any creature you have heard within the past day, and you have advantage on History checks to recall information. Owl: You have advantage on Wisdom (Insight) checks and can cast Detect Magic once per Long Rest without a spell slot (Wisdom is your spellcasting modifier). Sparrow: When you use the Help action, the target gains a bonus to their d20 roll equal to your Proficiency Bonus. Peacock: When an ally you can see is being attacked, as a reaction you can unfurl your peacock plumage, imposing disadvantage on the attack. You can do this only once during an encounter."
      },
      {
        "n": "Skywise",
        "d": "You always know which direction is north, the current time of day, and roughly how far you've traveled within the past 24 hours."
      },
      {
        "n": "Hollow Bones",
        "d": "You have resistance to falling damage. However, your carrying capacity is halved."
      }
    ],
    "feat": "Observant (owl/crow) or Healer (sparrow)",
    "lore": "Avian-kind soar above the concerns of ground-bound folk, sometimes literally. Crow-folk are treasure-hunters and talespinners, fascinated by shiny objects and secret lore. Owl-folk are scholars and seers, moving through the night with uncanny silence. Sparrow-folk are the most sociable, building vast communal roosts and renowned for their generosity. Peacocks are known for their bright, colorful performances and parades, as well as their irresistible charms. None of them, however, enjoy the nigh-unlimited flight of their silent counterparts."
  },
  {
    "id": 5,
    "enabled": true,
    "name": "Ranine",
    "animal": "Frog / toad",
    "icons": ["🐸"],
    "size": "Small or Medium",
    "speed": 30,
    "traits": [
      {
        "n": "Amphibious",
        "d": "You can breathe air and water. You have a swim speed equal to your walk speed."
      },
      {
        "n": "Leaping Lunge",
        "d": "Your long jump and high jump distance is tripled."
      },
      {
        "n": "Sticky Tongue",
        "d": "As a Bonus Action, you can make a ranged attack (range 15 feet) using your tongue against an object or a creature of your size or smaller that is not being held. On a hit, the target is pulled up to 10 feet toward you, and if it is an object weighing 10 lbs. or less, it lands in your free hand."
      },
      {
        "n": "Slick Skin",
        "d": "You have advantage on saving throws and ability checks to avoid or escape being Grappled or Restrained."
      },
      {
        "n": "Darkvision",
        "d": "You have Darkvision with a range of 60 feet."
      }
    ],
    "feat": "Athlete or War Caster",
    "lore": "The Ranine are a patient, meditative people who strike with sudden explosive speed when provoked. Frog-folk tend to be lithe and impulsive; toad-folk are broader, slower to anger, and deeply philosophical. Both cultures center on oral tradition; their songs and stories are among the oldest in the known world."
  },
  {
    "id": 6,
    "enabled": true,
    "name": "Lacertine",
    "animal": "Lizard / gecko / skink",
    "icons": ["🦎"],
    "size": "Medium",
    "speed": 30,
    "traits": [
      {
        "n": "Natural Armor",
        "d": "You have tough, scaly skin. When you aren't wearing any armor, your base Armor Class equals 12 plus your Dexterity modifier. You can use a Shield and still gain this benefit (this does not stack with unarmored defense skills from classes like barbarian and monk)."
      },
      {
        "n": "Wall Crawler",
        "d": "You have a Climb speed equal to your walking speed, and you can climb on difficult surfaces including upside-down on ceilings without needing to make an ability check."
      },
      {
        "n": "Regenerate Tail",
        "d": "If you are Grappled or Restrained, you can use your Reaction to drop your tail, immediately ending those conditions. Your tail regrows at the end of your next Long Rest."
      },
      {
        "n": "Darkvision",
        "d": "You have Darkvision with a range of 60 feet."
      },
      {
        "n": "Hold Breath",
        "d": "You can hold your breath for up to 15 minutes."
      }
    ],
    "feat": "Athlete or Sentinel",
    "lore": "Lacertines are among the most adaptable of the animalfolk, as comfortable on a sunbaked wall as in a dripping cave. Their calm, cold-blooded temperament reads as indifference to warmer-blooded folk, but Lacertines simply process the world at their own pace. They are renowned stoneworkers, acrobats, and scouts."
  },
  {
    "id": 7,
    "enabled": true,
    "name": "Ursine",
    "animal": "Bear",
    "icons": ["🐻"],
    "size": "Medium (tall)",
    "speed": 30,
    "traits": [
      {
        "n": "Powerful Build",
        "d": "You count as one size larger when determining carrying capacity and the weight you can push, drag, or lift. You also have advantage on saving throws against being knocked Prone."
      },
      {
        "n": "Bear's Endurance",
        "d": "Your Hit Point maximum increases by 1, and it increases by 1 again whenever you gain a level."
      },
      {
        "n": "Claws",
        "d": "Your claws are natural weapons. You can make one Claw attack as an action or bonus action (1d6 + Strength modifier slashing). This is not a Light weapon."
      },
      {
        "n": "Intimidating Presence",
        "d": "You have proficiency in the Intimidation skill. You can attempt to Frighten a creature as an Action (Wisdom saving throw, DC = 8 + Proficiency Bonus + Charisma modifier). On a failed save, the creature is Frightened of you until the end of your next turn. Once you use this Bonus Action feature, you can't do so again until you finish a Short or Long Rest."
      },
      {
        "n": "Ursine Resilience",
        "d": "You have advantage on saving throws against being Poisoned, and you have resistance to poison damage."
      }
    ],
    "feat": "Tough or Great Weapon Master",
    "lore": "Ursine-folk are the great pillars of the animalfolk world: massive, deliberate, and possessed of a deep patience that can, when finally exhausted, become terrifying. They are storytellers and memory-keepers as much as warriors, and an ursine elder's word carries the weight of history. Younger ursines are often found wandering far from their home territories, driven by a restlessness that fades only with age."
  },
  {
    "id": 8,
    "enabled": true,
    "name": "Equine",
    "animal": "Horse",
    "icons": ["🐴"],
    "size": "Medium (tall)",
    "speed": 35,
    "traits": [
      {
        "n": "Fleet-Footed",
        "d": "When you take the Dash action, you can move an additional number of feet equal to 5 times your Proficiency Bonus."
      },
      {
        "n": "Powerful Build",
        "d": "You count as one size larger when determining carrying capacity and the weight you can push, drag, or lift."
      },
      {
        "n": "Open Stride",
        "d": "Moving through nonmagical Difficult Terrain costs you no extra movement while Dashing."
      },
      {
        "n": "Surefooted",
        "d": "You have advantage on saving throws and ability checks against effects that would knock you Prone or move you against your will. Difficult terrain does not slow your Dash action."
      },
      {
        "n": "Enduring March",
        "d": "You require only 4 hours of sleep to gain the benefits of a Long Rest (you spend the other hours in light activity). You have advantage on Constitution saving throws against Exhaustion from forced marching or strenuous travel."
      }
    ],
    "feat": "Charger or Athlete",
    "lore": "Equine-folk are the great travellers and traders of the animalfolk lands, their roads and caravans stitching distant communities together. They are proud of their freedom above all else, and an equine pressed into servitude is a dangerous creature. They're known for an easy sociability and an instinct for reading people that makes them natural diplomats and merchants. Whatever you do, never ask to ride upon their backs."
  },
  {
    "id": 9,
    "enabled": true,
    "name": "Cervine",
    "animal": "Deer / boar",
    "icons": ["🦌","🐗"],
    "size": "Medium",
    "speed": 30,
    "traits": [
      {
        "n": "Bounding Charge",
        "d": "Opportunity attacks against you are made with disadvantage"
      },
      {
        "n": "Powerful Build",
        "d": "You count as one size larger when determining carrying capacity and the weight you can push, drag, or lift."
      },
      {
        "n": "Fleet of Hoof",
        "d": "Difficult terrain costs you no extra movement when you Dash."
      },
      {
        "n": "Stag's Presence (Deer) OR Boar's Fury (Boar)",
        "d": "Deer: You can cast Calm Emotions without a spell slot (Wisdom, Intelligence, or Charisma is your spellcasting ability). Once you use this feature, you can't use it again until completing a long rest. Boar: When you are reduced to half your maximum Hit Points or lower, you have advantage on melee attack rolls."
      },
      {
        "n": "Keen Smell",
        "d": "You have advantage on Perception checks that rely on smell."
      }
    ],
    "feat": "Charger or Sentinel",
    "lore": "Cervines command respect in most communities simply by walking into a room. Deer-folk are graceful diplomats and keepers of ancient forest law; boar-folk are stubborn, courageous, and notoriously hard to stop once they have decided on a course of action."
  },
  {
    "id": 10,
    "enabled": true,
    "name": "Canine",
    "animal": "Dog",
    "icons": ["🐕"],
    "size": "Medium",
    "speed": 30,
    "traits": [
      {
        "n": "Loyal Bond",
        "d": "Choose one creature as your Bonded Companion at the end of each Long Rest. While within 30 feet of your Bonded Companion, they have advantage on saving throws against being Frightened. If your companion drops to 0 Hit Points, you can use your Reaction to move up to your Speed toward them without provoking Opportunity Attacks."
      },
      {
        "n": "Tracker's Nose",
        "d": "You have advantage on Wisdom (Perception) and Wisdom (Survival) checks that rely on smell. You can follow a scent trail up to 24 hours old, even through rain or other adverse conditions."
      },
      {
        "n": "Protective Instinct",
        "d": "When an ally within 5 feet of you is hit by an attack, you can impose disadvantage on the attack roll as a Reaction. You can use this trait a number of times equal to your Proficiency Bonus after each long rest."
      },
      {
        "n": "Brave",
        "d": "You have advantage on saving throws against being Frightened."
      },
      {
        "n": "Pack Coordination",
        "d": "Once per turn when you hit a creature that another ally hit within the last 6 seconds, you deal an additional 1d4 damage of the same type."
      }
    ],
    "feat": "Inspiring Leader or Shield Master",
    "lore": "Canine-folk are the great loyalists of Everden, building communities of fierce devotion and mutual protection. They are found in every role from town guard to wandering merchant, and their reputation for keeping their word has made them prized partners in any enterprise. A canine's friendship is not easily won, but once given, it is lifelong."
  },
  {
    "id": 11,
    "enabled": true,
    "name": "Feline",
    "animal": "Cat",
    "icons": ["🐈"],
    "size": "Small or Medium",
    "speed": 35,
    "traits": [
      {
        "n": "Always Land",
        "d": "You never take falling damage from falls of 30 feet or less, and you land on your feet. For greater falls, reduce the damage as if the fall were 30 feet shorter."
      },
      {
        "n": "Retractable Claws",
        "d": "Your claws are natural weapons. You can make one Claw attack as an action or bonus action (1d4 + Strength or Dexterity modifier slashing). You can retract them at will; when retracted, your footsteps make no sound when barefoot."
      },
      {
        "n": "Nine Lives",
        "d": "When you are reduced to 0 Hit Points but not killed outright, you may choose to set your Hit Points to 9 instead. You can't use this trait again until you finish a Long Rest. You may only use this trait 9 times total, ever."
      },
      {
        "n": "Darkvision",
        "d": "You have Darkvision with a range of 60 feet."
      },
      {
        "n": "Uncanny Curiosity",
        "d": "You have proficiency in the Investigation skill. You have advantage on Intelligence (Investigation) checks to examine objects, mechanisms, or documents you can physically handle."
      }
    ],
    "feat": "Skulker or Alert",
    "lore": "Feline-folk are infuriatingly self-possessed. Serene in crisis, curious at the worst moments, and possessed of an independence that their allies sometimes call unhelpful. Domestic cat-folk are urban sophisticates who move through cities like shadows; wilder cat-folk such as lynx or bobcat lineages tend toward solitary ranger lives deep in unclaimed territory."
  },
  {
    "id": 12,
    "enabled": true,
    "name": "Chiropteran",
    "animal": "Bat (Microbat or Megabat)",
    "icons": ["🦇"],
    "size": "Small (Microbat) or Medium (Megabat)",
    "speed": 30,
    "traits": [
      {
        "n": "Echolocation",
        "d": "While you aren't deafened, you have Blindsight with a range of 20 feet."
      },
      {
        "n": "Darkvision",
        "d": "You have Darkvision with a range of 60 feet."
      },
      {
        "n": "Wing Membranes",
        "d": "When you fall at least 10 feet above the ground, you can use your Reaction to extend your wing membranes and glide horizontally a number of feet equal to your walking speed, taking no damage from the fall. You determine the direction of the glide."
      },
      {
        "n": "Sonic Screech",
        "d": "As a Bonus Action, you can emit a piercing screech at one creature within 30 feet of you. That creature must succeed on a Constitution saving throw (DC = 8 + your Proficiency Bonus + your Constitution modifier) or be Deafened and have disadvantage on attack rolls until the end of your next turn. Once you use this trait, you can't use it again until you finish a Short or Long Rest."
      },
      {
        "n": "Keen Hearing",
        "d": "You have advantage on Wisdom (Perception) checks that rely on hearing."
      }
    ],
    "feat": "Skulker or Mobile",
    "lore": "Bat-folk are nocturnal folk who feel just as at home hanging from the rafters of a Whiskerburrow library as they are roosting in mist-shrouded belfries of Carrovia. They are surprisingly social if you can match their nocturnal schedule, favoring dense, chattering colonies over solitary living, and their famously excellent hearing makes them prized guards and lookouts in any nation. While some Diurnal animalfolk do not enjoy the noise created by a people who are mostly active at night, savvy business owners know that batfolk can single-wingedly support a city's nightlife."
  },
  {
    "id": 13,
    "enabled": true,
    "name": "Serpentine",
    "animal": "Snake",
    "icons": ["🐍"],
    "size": "Small or Medium",
    "speed": 30,
    "traits": [
      {
        "n": "Darkvision",
        "d": "You have Darkvision with a range of 60 feet."
      },
      {
        "n": "Poison Resilience",
        "d": "You have advantage on saving throws you make to avoid or end the Poisoned condition on yourself. You also have resistance to poison damage."
      },
      {
        "n": "Venomous Bite",
        "d": "You have sharp fangs that you can use to make unarmed strikes. When you hit with them, the strike deals 1d4 piercing damage instead of the bludgeoning damage normal for an unarmed strike. Once per short rest you can add 1d6 poison damage to an unarmed strike."
      },
      {
        "n": "Serpentine Spellcasting",
        "d": "You know the Poison Spray cantrip. You can also cast Animal Friendship an unlimited number of times with this trait, but you can target only silent snakes with it. Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
      },
      {
        "n": "Beguiling Tongue",
        "d": "You have proficiency in the Deception or Persuasion skill (your choice)."
      }
    ],
    "feat": "Actor or Magic Initiate",
    "lore": "Snake-folk communities can be found in Sunreach's desert and jungle interiors, keeping mostly to themselves, in part because the serpent sigil associated with the outlawed cult of the Viper Beneath has made introductions harder than they should be for a people who had nothing to do with choosing that symbol. Those who do get to know a Serpentine family tend to describe them as dryly funny and big fans of hot places. Sunreach's Sun Council has, on more than one occasion, quietly intervened on behalf of Serpentine communities facing suspicion they did nothing to earn."
  },
  {
    "id": 14,
    "enabled": true,
    "name": "Primate",
    "animal": "Monkey / chimp / gorilla / orangutan",
    "icons": ["🐒","🦍","🦧"],
    "size": "Small (Chimp) or Medium (All Others)",
    "speed": 30,
    "traits": [
      {
        "n": "Canopy Climber",
        "d": "You have a Climb speed equal to your walking speed."
      },
      {
        "n": "Dexterous Feet",
        "d": "As a Bonus Action, you can use your feet to manipulate an object, open or close a door or container, or pick up or set down a Tiny object."
      },
      {
        "n": "Nimble Swinger (Monkey/Chimp) OR Powerful Frame (Gorilla/Orangutan)",
        "d": "Monkey/Chimp: You can move through the space of a creature one size larger than you without provoking an Opportunity Attack, and vine-choked or rubble-strewn terrain costs you no extra movement. Gorilla/Orangutan: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift, and you have advantage on Strength (Athletics) checks made to climb or grapple."
      },
      {
        "n": "Bracing Reflex",
        "d": "The instincts that keep you safe in the high canopy heighten your reactions elsewhere too. When you take damage, you can use your Reaction to roll a d6, add your Proficiency Bonus to the number rolled, and reduce the damage you take by that total (minimum 0 damage). You can use this trait a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
      },
      {
        "n": "Natural Storyteller",
        "d": "You have proficiency in the Performance or Persuasion skill (your choice)."
      }
    ],
    "feat": "Athlete or Actor",
    "lore": "In the jungles of Sunreach live animalfolk unlike any other in Everden, at home high in the canopy where the reptilefolk and toadfolk who dominate the nation rarely bother to climb. Monkey and chimp lineages tend to move in tight, lively troupes and are quick with both wit and dexterity, while gorilla and orangutan lineages are more often found alone or in small family groups, making good livings elsewhere as bodyguards when a negotiation calls for someone very large to stand quietly in the corner. Primate-folk are Everden's best natural climbers, as well as some of the best storytellers. Some believe they share a connection to the smooth ones, but this is seen as a crackpot theory, after all, they're the least smooth skinned people in Everden."
  },
  {
    "id": 15,
    "enabled": true,
    "name": "Chelonian",
    "animal": "Turtle / tortoise",
    "icons": ["🐢"],
    "size": "Small or Medium",
    "speed": 30,
    "traits": [
      {
        "n": "Claws",
        "d": "You have claws that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike."
      },
      {
        "n": "Hold Breath",
        "d": "You can hold your breath for up to 1 hour."
      },
      {
        "n": "Natural Armor",
        "d": "Your shell provides you a base Armor Class of 15. Your Dexterity modifier doesn't affect this number. You can't wear light, medium, or heavy armor, but you can still benefit from a shield."
      },
      {
        "n": "Nature's Intuition",
        "d": "You gain proficiency in one of the following skills of your choice: Animal Handling, Medicine, Nature, Perception, Stealth, or Survival."
      },
      {
        "n": "Shell Defense",
        "d": "You can withdraw into your shell as an Action. Until you emerge, you gain a +4 bonus to your AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are Prone, your Speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take Reactions, and the only action you can take is a Bonus Action to emerge from your shell."
      }
    ],
    "feat": "Tough or Sentinel",
    "lore": "Turtle-folk rarely settle anywhere permanently, and the ones who do tend to pick somewhere ancient, such as a mountain pass too remote for most trade caravans to bother with. Chelonian communities are small, very long-lived, and treated with respect by nearly everyone. It's believed that any given turtle-folk might live long enough to remember your deeds and either repay your kindness to your descendants, or your cruelty. Chelonians are the longest-lived people of any known mortal race, and receiving wisdom from one is said to be life changing."
  },
  {
    "id": 16,
    "enabled": true,
    "name": "Racyonid",
    "animal": "Raccoon / tanuki / possum",
    "icons": ["🦝", "🍁"],
    "size": "Small",
    "speed": 30,
    "traits": [
      {
        "n": "Junk Tinkerer",
        "d": "You have proficiency with tinker's tools, and you can use scavenged junk and scrap in place of the materials normally required to use them."
      },
      {
        "n": "Darkvision",
        "d": "You have Darkvision with a range of 60 feet."
      },
      {
        "n": "Iron Stomach",
        "d": "You have resistance to poison damage. Additionally, you have advantage on saving throws against poison or sickness caused by eating spoiled, rotten, or otherwise ill-advised food."
      },
      {
        "n": "Pack Tactics",
        "d": "You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't incapacitated."
      },
      {
        "n": "Scrap Contraption (Raccoon) OR Trickster's Guise (Tanuki) OR Feigned Death (Possum)",
        "d": "Raccoon: Given ten minutes and a pile of junk or scrap, you can cobble together a simple, temporary Contraption, such as a noisemaker, a small trap, or a crude tool. It functions until you finish your next Long Rest, at which point it falls apart. You can have only one Contraption active at a time. Tanuki: You can cast Alter Self once without expending a spell slot, using Charisma as your spellcasting ability. You regain the ability to do so when you finish a Long Rest. Possum: As a Reaction to shocking situations or taking damage, or an Action at any time, you can cast Feign Death targeting yourself, needing no components. Once you use this trait, you can't use it again until you finish a Short or Long Rest."
      }
    ],
    "feat": "Crafter or Actor",
    "lore": "Racyonid-folk are scattered all over, and are known for charming and exasperating their neighbors in equal measure. Raccoon lineages are the tinkerers and collectors, endlessly curious and rarely without some half-finished contraption built from spare parts, scrap metal, and whatever else they managed to drag home that week. Tanuki lineages lean fully into the family reputation for trickery, delighting in elaborate pranks and tapping into ancestral magics to disguise themselves. Possum lineages are the quiet, easily startled cousins who would rather flop over and play dead than deal with a confrontation, a strategy that works more often than you might expect it to. All three share an inexplicable fondness for trash and shiny things."
  },
  {
    "id": 17,
    "enabled": true,
    "name": "Proboscidean",
    "animal": "Elephant",
    "icons": ["🐘"],
    "size": "Medium (tall)",
    "speed": 30,
    "traits": [
      {
        "n": "Powerful Build",
        "d": "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
      },
      {
        "n": "Serene Mind",
        "d": "You have advantage on saving throws against being Charmed or Frightened."
      },
      {
        "n": "Natural Armor",
        "d": "You have thick, leathery skin. When you aren't wearing armor, your AC equals 12 + your Constitution modifier. You can use a shield and still benefit from this trait (this does not stack with unarmored defense skills from classes like barbarian and monk)."
      },
      {
        "n": "Trunk",
        "d": "You can use your trunk to grasp objects and creatures. It has a reach of 5 feet and can lift a number of pounds equal to five times your Strength score. You can use it to lift, drop, hold, push, or pull an object or a creature, open or close a door or container, Grapple a creature, or make an unarmed strike, but it can't wield weapons or shields, use tools or magic items, or perform the somatic components of a spell."
      },
      {
        "n": "Keen Smell",
        "d": "Thanks to your sensitive trunk, you have advantage on Wisdom (Perception), Wisdom (Survival), and Intelligence (Investigation) checks that involve smell."
      }
    ],
    "feat": "Tough or Grappler",
    "lore": "Elephant-folk favor slow, deliberate lives that rival turtle-folk in lifespans, and caravans across every nation have been known to hire on a single elephant-folk elder as much for their unshakeable calm as for their memory, which is exactly as reliable as the old jokes claim. They are rarely in a hurry, and even more rarely wrong about something they've decided to remember. Some claim to have an innate, genetic fear of mouse-folk, but most claim this is just an overblown paranoia of accidentally stepping on people much smaller than yourself."
  }
];
