/* Everden Player Guide — Lore & Mysteries tab. "knownLore" is settled, common-knowledge fact; "mysteries" is rumor and the unexplained. To hide the whole tab, set CONTENT.tabs.lore to false in data/hero.js. Set "enabled": false on any single entry below to hide just that card. */
CONTENT.lore = {
  "label": "Lore & Mysteries",
  "intro": "Not everything about Everden fits neatly into a nation, a god, or a species. Some of it is common knowledge nobody bothers to write down. Some of it isn't confirmed at all. Click on an entry to learn more.",
  "knownLore": {
    "label": "Common Knowledge",
    "intro": "Facts that any Awakened citizen, regardless of nation, would recognize without needing a scholar to explain them.",
    "list": [
      {
        "enabled": true,
        "icon": "✨",
        "iconBg": "#1a1508",
        "title": "The Great Awakening",
        "teaser": "The event every calendar in Everden is set against.",
        "status": "Historical Record",
        "paragraphs": [
          "Every schoolchild in every nation learns the same basic shape of it: once, the world belonged only to the Smooth Ones, and every other creature that breathed was Silent. Then, in a single moment that no living memory reaches back to but every calendar is dated from, the Smooth Ones were gone and the Silent were not silent anymore. Animals stood upright, found words in their mouths, and started building the world that exists today.",
          "Nations disagree fiercely about what it meant, who caused it, and which god, if any, deserves the credit. Nobody Awakened disagrees that it happened, or that it happened to everyone at once."
        ]
      },
      {
        "enabled": true,
        "icon": "🐾",
        "iconBg": "#101a10",
        "title": "Awakened and Silent",
        "teaser": "The line every nation draws the same way, more or less.",
        "status": "Common Knowledge",
        "paragraphs": [
          "Not every animal woke up, and the practical difference between Awakened folk and the Silent beasts they share the land with is something every child learns early: Awakened folk speak, reason, build, and are due the same basic respect regardless of species. Silent animals do not, and are treated, uncomfortably but consistently across all six nations, as part of the natural world rather than participants in it.",
          "The rule holds up fine in the vast majority of everyday cases. It is the edge cases, a talking hound here, a curiously clever crow there, that keep philosophers employed and dinner conversations tense."
        ]
      }
    ]
  },
  "mysteries": {
    "label": "Mysteries & Rumors",
    "intro": "The setting's loose threads: things that are widely believed, quietly disputed, or flatly unexplained.",
    "list": [
      {
        "enabled": true,
        "icon": "🚪",
        "iconBg": "#1a1510",
        "title": "The Doors Were Never Built for You",
        "teaser": "Every Smooth One ruin has the same unsettling flaw.",
        "status": "Physical Evidence",
        "paragraphs": [
          "Doorframes in Smooth One ruins are consistently, almost mockingly, oversized: door handles set at head height for even the tallest ursine scholar, chairs a warhorse could curl up and vanish inside of, stairs whose risers are taller than most Awakened folk are long. The easy explanation is that the Smooth Ones were simply enormous. The uneasy explanation, favored by a small but insistent minority of Whiskerburrow academics, is that the ruins were never built to be walked through at all.",
          "Nobody has produced a better theory. Nobody has stopped looking, either."
        ]
      },
      {
        "enabled": true,
        "icon": "🌒",
        "iconBg": "#14101c",
        "title": "The Second Awakening",
        "teaser": "A story that never has the same ending twice.",
        "status": "Unconfirmed Rumor",
        "paragraphs": [
          "The story travels the same rough shape from a Moonhowl hunting camp to a Whiskerburrow lecture hall to a Petsburg dockside tavern: thirty-odd years after the Great Awakening, in a valley nobody can agree on the location of, it happened again. Briefly. To something. Before whatever had opened, closed.",
          "Every telling insists it happened to somebody's grandparent's neighbor's herd. No firsthand witness has ever been produced, and the handful of scholars who have gone looking for the valley have each come back with a different set of coordinates and a strong disinclination to discuss the trip further."
        ]
      },
      {
        "enabled": true,
        "icon": "🪙",
        "iconBg": "#221a05",
        "title": "Every Coin Bears the Same Mark",
        "teaser": "Six nations, six mints, one impossible coincidence.",
        "status": "Confirmed, Unexplained",
        "paragraphs": [
          "Goldcollar crowns, Iron-Tusk ingots, Sunreach sun-disks: six currencies, minted independently by six governments that agree on almost nothing, none of which have ever coordinated a design standard. And yet turn any coin from any nation over in the light and you will find, stamped small enough to miss, the same tiny spiral mark.",
          "The Dewclaw Institute has traced the mark on Goldcollar currency back to the oldest surviving coins, predating even the Dual Monarchy. Nobody has found a mint record explaining who first ordered it added, or why every mint since has quietly kept including it."
        ]
      },
      {
        "enabled": true,
        "icon": "🕳️",
        "iconBg": "#0f0f0f",
        "title": "The Blank Ruin",
        "teaser": "The one Smooth One structure with nothing written on it at all.",
        "status": "Sunreach Field Notes",
        "paragraphs": [
          "Every cataloged Smooth One ruin is covered in something: proto-Smoothtalk pictographs, structural markings, decorative friezes, at minimum a few scratched numerals. Every ruin except one, a chamber discovered beneath the rainforest canopy near Verdant Deep, whose every surface has been found perfectly smooth and utterly bare, as though it were scrubbed clean the day it was finished, or never finished at all.",
          "The expedition that found it was not permitted a second visit. Yddross has not explained why, and Yddross does not explain anything."
        ]
      },
      {
        "enabled": true,
        "icon": "🗣️",
        "iconBg": "#0f1a1a",
        "title": "Where Mimicry Ends and Waking Begins",
        "teaser": "A dispute that has ended dinners, marriages, and one court case.",
        "status": "Philosophical Dispute",
        "paragraphs": [
          "Some Silent beasts can be taught, patiently, to produce words: parrots that were never touched by the Awakening, certain unusually clever corvids, a rare hound-breed prized in Moonhowl for repeating hunting commands back with unsettling clarity. None of them, by every test anyone has devised, are actually Awakened. What none of the tests can quite settle is why.",
          "The dispute stopped being purely academic the day a Moonhowl hunter tried to enter her talking hound as a witness in a poaching dispute. The court declined. The hound, witnesses agree, seemed to take it personally."
        ]
      },
      {
        "enabled": true,
        "icon": "📅",
        "iconBg": "#1a1500",
        "title": "The Thirteenth Month",
        "teaser": "Ancient calendars count a month that no modern one does.",
        "status": "Archive Curiosity",
        "paragraphs": [
          "Calendars recovered from Smooth One ruins consistently divide the year into thirteen months, not twelve. Twelve of those names translate cleanly enough into modern Collartongue. The thirteenth has never been successfully translated by anyone, in any nation, ever, not because the pictographs are unclear, but because every attempted translation contradicts every other attempted translation, and none of the philologists involved will explain what they think it might mean instead.",
          "Whiskerburrow's Great Archive keeps three independent translation attempts locked in the same reading room, specifically so their authors cannot compare notes unsupervised."
        ]
      }
    ]
  }
};
