/* ==========================================================================
   PALAWAN WILD — SPECIES DATA
   Single source of truth. Every page (index, species grid, map, quiz)
   reads from this file. To add/edit an animal, only touch this file.
   ========================================================================== */

const SPECIES = [
  {
    id: "palawan-hornbill",

    image: "assets/animals/palawan-hornbill.jpg",
    name: "Palawan Hornbill",
    scientificName: "Anthracoceros marchei",
    localName: "Talusi (Cuyunon)",
    category: "birds",
    status: "vulnerable",
    statusLabel: "Vulnerable",
    locations: ["Puerto Princesa", "St. Paul Subterranean River N.P.", "Balabac", "Busuanga", "Coron"],
    blurb: "A large, glossy-black forest bird with a creamy casqued bill and a loud, raucous call that carries through the canopy at dawn and dusk.",
    details: "The Palawan Hornbill is the only hornbill on its island group, easily told apart from the Sulu Hornbill by its pale bill and bare blue-white face skin. It travels in small noisy family groups, feeding mostly on fruit but also insects and small reptiles, and plays an outsized role in seed dispersal for large-seeded forest trees. Habitat loss from logging and hunting for the cage-bird trade are its main threats. It is illegal to hunt, capture, or possess this species under RA 9147.",
    encounter: "Hornbills are loud, visible, and almost always high in the canopy. They are not aggressive toward people and will simply fly off if disturbed.",
    ifEncountered: [
      "Stay quiet and still — sudden movement or noise will scare the group off before you get a good look.",
      "Watch from a distance with binoculars rather than approaching the tree.",
      "Never attempt to feed them or lure them closer.",
      "If you find a grounded or injured hornbill, do not handle it — call the wildlife hotline (see Rescue page)."
    ],
    firstAid: null,
    dangerLevel: "none"
  },
  {
    id: "palawan-pangolin",

    image: "assets/animals/palawan-pangolin.jpg",
    name: "Palawan Pangolin",
    scientificName: "Manis culionensis",
    localName: "Balintong",
    category: "mammals",
    status: "critically-endangered",
    statusLabel: "Critically Endangered",
    locations: ["Puerto Princesa Subterranean River N.P.", "Roxas", "Dumaran Island", "Culion"],
    blurb: "An armor-plated, toothless mammal that rolls into a ball when threatened — the world's most trafficked mammal group, and Palawan's own endemic species.",
    details: "Also called the Philippine pangolin, this species was only recognized as distinct from the Sunda pangolin in 1998. It is nocturnal, solitary, and feeds almost entirely on ants and termites using a long sticky tongue. Decades of hunting for its meat and scales — fueled by demand in the illegal wildlife trade — have pushed it to Critically Endangered. Pangolin scales have no proven medicinal value; the demand is driven by myth, not medicine.",
    encounter: "Pangolins are shy, slow-moving, and completely harmless. They have no teeth and cannot bite. Their only defense is rolling into a tight ball.",
    ifEncountered: [
      "Keep your distance and let it move away on its own — approaching will stress the animal.",
      "Never attempt to pick it up, even 'to help it cross the road' — this is a common excuse used to capture them for trade.",
      "Do not photograph it in a way that reveals the exact location publicly — poachers do monitor social media.",
      "If you see one for sale, being transported, or in a snare, do not intervene physically — call the wildlife hotline and PCSD immediately."
    ],
    firstAid: null,
    dangerLevel: "none"
  },
  {
    id: "palawan-bearded-pig",

    image: "assets/animals/palawan-bearded-pig.jpg",
    name: "Palawan Bearded Pig",
    scientificName: "Sus ahoenobarbus",
    localName: "Baboy Ramo",
    category: "mammals",
    status: "near-threatened",
    statusLabel: "Near Threatened",
    locations: ["Palawan mainland forests", "Balabac", "Calamian Islands"],
    blurb: "The largest wild pig in the Philippines, dark-coated with a pale mane and a distinctive tufted tail, roaming in loose nomadic groups.",
    details: "Once considered a subspecies of the Bornean bearded pig, genetic and physical differences now mark it as its own species. It is mostly nocturnal, omnivorous, and locally common in parts of Palawan, though heavily hunted with snares, low-caliber rifles, and crude explosive traps known locally as 'pig bombs.' Despite this pressure, it remains a key part of the forest ecosystem, dispersing seeds and turning soil as it forages.",
    encounter: "Bearded pigs are generally shy of people, but a cornered animal, or a mother with young, can charge if it feels trapped. Their tusks can cause serious puncture wounds.",
    ifEncountered: [
      "Give it a wide path and an open route to retreat — never corner a wild pig.",
      "Back away slowly; do not run, which can trigger a chase response.",
      "Make noise calmly to announce your presence well before you're close, so it has time to move off.",
      "If with a group of piglets, assume the mother is nearby and extra defensive — leave the area."
    ],
    firstAid: [
      "Wild pig tusk wounds are puncture wounds and bite wounds — both carry high infection risk.",
      "Control bleeding with firm, direct pressure using the cleanest cloth available.",
      "Do not pack soil, leaves, or traditional poultices into the wound.",
      "Rinse the wound with clean water if available, but prioritize getting to a clinic over field-cleaning.",
      "Seek medical care promptly — puncture wounds need proper cleaning and likely a tetanus check.",
      "Watch for signs of infection over the following days: increasing redness, swelling, warmth, or fever."
    ],
    dangerLevel: "moderate"
  },
  {
    id: "palawan-peacock-pheasant",

    image: "assets/animals/palawan-peacock-pheasant.jpg",
    name: "Palawan Peacock-Pheasant",
    scientificName: "Polyplectron napoleonis",
    localName: "Tandikan",
    category: "birds",
    status: "vulnerable",
    statusLabel: "Vulnerable",
    locations: ["Puerto Princesa Subterranean River N.P.", "Victoria-Anepahan Range", "Mt. Mantalingajan foothills"],
    blurb: "A ground-dwelling forest bird whose male carries an iridescent blue-green tail covered in eye-like spots, fanned out in an elaborate courtship dance.",
    details: "Featured on Puerto Princesa's official seal and on the Philippine 100-peso bill, the Tandikan is a cultural icon of Palawan as much as an ecological one. Males perform a 'tidbitting' display — offering food to a female while spreading their tail fan — during courtship. The species depends on old-growth lowland forest with large trees, habitat that is shrinking fast due to logging, mining, and slash-and-burn agriculture.",
    encounter: "These are shy, ground-dwelling birds that freeze or slip into undergrowth rather than fly when startled. They pose no danger to people.",
    ifEncountered: [
      "Stay on the trail and avoid pushing into undergrowth to get a closer look — you may be standing near a nest.",
      "Keep voices low; these birds rely on stillness to avoid predators and will not return to an area with frequent noise.",
      "Never attempt to capture or cage one — wild capture for the pet trade is a major threat to the species.",
      "Report sightings to local park rangers, who track populations for conservation planning."
    ],
    firstAid: null,
    dangerLevel: "none"
  },
  {
    id: "philippine-crocodile",

    image: "assets/animals/philippine-crocodile.jpg",
    name: "Philippine Crocodile",
    scientificName: "Crocodylus mindorensis",
    localName: "Buwaya",
    category: "reptiles",
    status: "critically-endangered",
    statusLabel: "Critically Endangered",
    locations: ["Puerto Princesa Subterranean River N.P.", "Freshwater rivers & marshes, southern Palawan"],
    blurb: "A smaller, shyer freshwater crocodile found only in the Philippines — frequently mistaken for the much larger, more dangerous saltwater crocodile.",
    details: "One of the most threatened crocodile species on Earth, with likely fewer than 150 mature individuals left in the wild. It rarely exceeds 3 meters, far smaller than the saltwater crocodile (Crocodylus porosus), which also occurs in some Palawan waters and is the species responsible for almost all serious crocodile attacks in the region. The Philippine crocodile is nationally protected under RA 9147, and breeding programs at the Palawan Wildlife Rescue and Conservation Center support its recovery.",
    encounter: "Never assume a crocodile in Palawan waters is the small, shy Philippine crocodile — treat every crocodile sighting as if it could be the larger, dangerous saltwater species, since both can share habitat.",
    ifEncountered: [
      "Stay well back from the water's edge — most attacks happen when people are at the shoreline or in the water near a crocodile's territory.",
      "Never swim, wade, or let children or pets play in rivers, marshes, or mangrove creeks with known or suspected crocodile presence.",
      "Do not approach, feed, or attempt to photograph a crocodile up close — feeding crocodiles teaches them to associate people with food, which is dangerous for everyone.",
      "If you see one on land, give it a very wide berth; crocodiles can move in short fast bursts.",
      "Report sightings to PCSD or barangay officials so warning signage can go up if needed."
    ],
    firstAid: [
      "Crocodile bites cause severe crushing and tearing injuries — this is a medical emergency. Call for emergency transport immediately.",
      "Get the person away from the water first; crocodiles can drag victims back in.",
      "Control heavy bleeding with firm, direct pressure using the cleanest material available — a shirt, towel, or bandage.",
      "If a limb is involved and bleeding is severe and not controlled by direct pressure, a tourniquet placed above the wound may be necessary — use a belt, strap, or cloth, tightened until bleeding visibly slows.",
      "Keep the person still, warm, and calm to reduce shock; do not give food or water.",
      "Do not try to clean or probe the wound in the field beyond covering it — focus on bleeding control and getting to a hospital fast.",
      "Get to the nearest hospital or call emergency services immediately — crocodile bites carry serious infection risk even when the initial injury seems survivable."
    ],
    dangerLevel: "high"
  },
  {
    id: "palawan-bearcat",

    image: "assets/animals/palawan-bearcat.jpg",
    name: "Palawan Bearcat (Binturong)",
    scientificName: "Arctictis binturong whitei",
    localName: "Binturong / Bearcat",
    category: "mammals",
    status: "vulnerable",
    statusLabel: "Vulnerable",
    locations: ["Palawan lowland & secondary forest", "Katala Foundation study areas"],
    blurb: "A shaggy, tree-dwelling carnivore with a prehensile tail and a surprising scent — its musk glands smell distinctly like buttered popcorn.",
    details: "This Palawan-endemic subspecies of binturong is one of only two carnivores in the world that use a prehensile tail for climbing, and can descend trees head-first thanks to backward-rotating hind ankles. It is primarily nocturnal and arboreal, feeding on fruit, small animals, and carrion. The Bearcat Study Program, run by ABConservation on Palawan, uses camera traps to study this elusive animal. Though generally docile when encountered calmly, it has sharp claws and teeth that can cause serious injury if it feels cornered.",
    encounter: "Bearcats are slow-moving, mostly nocturnal, and avoid confrontation. Bites are rare but possible if the animal is cornered, startled, or mishandled.",
    ifEncountered: [
      "Observe from a distance and let it continue moving through the canopy undisturbed.",
      "Never attempt to handle one, even if it appears calm — they retain sharp claws and a strong bite.",
      "If found on the ground or in a building, do not corner it; give it a clear escape route.",
      "Keep pets away, as a cornered bearcat may act defensively toward dogs or cats."
    ],
    firstAid: [
      "Bearcat bites and claw injuries are deep puncture wounds — wash thoroughly with soap and running water for several minutes.",
      "Apply firm pressure with a clean cloth to control bleeding.",
      "Seek medical attention for any bite that breaks the skin, as with any wild mammal bite, due to infection and rabies risk.",
      "Note the time and circumstances of the bite for the attending clinic."
    ],
    dangerLevel: "low"
  },
  {
    id: "philippine-cockatoo",

    image: "assets/animals/philippine-cockatoo.jpg",
    name: "Red-vented Cockatoo",
    scientificName: "Cacatua haematuropygia",
    localName: "Katala",
    category: "birds",
    status: "critically-endangered",
    statusLabel: "Critically Endangered",
    locations: ["Rasa Island Wildlife Sanctuary", "Narra", "Iwahig", "Mangrove areas, Puerto Princesa Bay"],
    blurb: "A snow-white parrot with a flash of red beneath the tail — once common across the Philippines, now surviving in real numbers only in Palawan.",
    details: "The Katala is one of the world's rarest cockatoos, with an estimated 430–750 mature individuals left in the wild. Habitat destruction and decades of nest poaching for the pet trade wiped it out across most of the country; Palawan, particularly Rasa Island, now holds its last meaningful stronghold. The Katala Foundation runs long-term protection and community-based conservation programs here, including nest guarding during breeding season.",
    encounter: "Cockatoos are loud, social, and visible, often seen flying between roost sites at dawn and dusk. They are not aggressive and pose no danger to people.",
    ifEncountered: [
      "Watch and listen from a distance rather than approaching roost or nest trees.",
      "Never purchase a cockatoo offered as a pet — nearly all in trade are taken illegally from the wild.",
      "Report nest poaching or any cockatoo offered for sale to PCSD or the Katala Foundation immediately.",
      "If visiting a known roost site, avoid bright lights or loud noise around dusk, when birds are most easily disturbed."
    ],
    firstAid: null,
    dangerLevel: "none"
  },
  {
    id: "palawan-leopard-cat",

    image: "assets/animals/palawan-leopard-cat.jpg",
    name: "Palawan Leopard Cat",
    scientificName: "Prionailurus javanensis",
    localName: "Tamaral / Maral",
    category: "mammals",
    status: "vulnerable",
    statusLabel: "Vulnerable",
    locations: ["Aborlan", "Roxas", "Palawan lowland forest & forest-edge"],
    blurb: "A small, spotted wild cat about the size of a house cat — the only wild felid native to the Philippines.",
    details: "Recently reclassified under the Sunda leopard cat species (Prionailurus javanensis) following genetic studies, this population is nationally listed as Vulnerable under Philippine law. It hunts rats, mice, and small reptiles, making it a natural form of rodent control in farmland near forest edges. It is solitary, mostly nocturnal, and adaptable enough to be seen near villages and plantations, which sadly puts it at risk of being mistaken for a pest or captured as a pet.",
    encounter: "Leopard cats avoid people and are very rarely aggressive. Most 'encounters' happen when one is found injured, trapped, or a kitten is found alone.",
    ifEncountered: [
      "If healthy and moving on its own, simply leave it alone — do not chase or attempt to corner it.",
      "If you find what looks like an abandoned kitten, do not assume it's orphaned — the mother is often nearby and hunting; watch from a distance first.",
      "Never keep one as a pet — it is a protected species and illegal to possess without authorization.",
      "If injured or clearly in distress, contact PCSD's wildlife rescue team rather than handling it yourself."
    ],
    firstAid: [
      "Scratches or bites from a leopard cat should be washed immediately with soap and running water for several minutes.",
      "Apply gentle pressure with a clean cloth if there is bleeding.",
      "See a doctor for any bite that breaks the skin — wild cat bites carry infection and rabies risk.",
      "Avoid covering deep puncture wounds tightly; let a medical professional assess and clean it properly."
    ],
    dangerLevel: "low"
  },
  {
    id: "palawan-scops-owl",

    image: "assets/animals/palawan-scops-owl.jpg",
    name: "Palawan Scops Owl",
    scientificName: "Otus fuliginosus",
    localName: "Kuwago",
    category: "birds",
    status: "near-threatened",
    statusLabel: "Near Threatened",
    locations: ["Cleopatra's Needle", "St. Paul Subterranean River N.P.", "Mt. Mantalingajan", "Iwahig"],
    blurb: "A small, deep-orange-eyed owl found only on Palawan, known for its low rasping croak rather than a typical hoot.",
    details: "This owl is endemic strictly to Palawan and nearby islands, inhabiting lowland forest, including secondary growth and mixed cultivated areas as long as tree cover remains. Its call — a rough 'gruk grrrrrrrrr' — is distinctive among Philippine owls. Like much of Palawan's endemic wildlife, its main threat is habitat clearance from logging, mining, and slash-and-burn farming rather than direct hunting.",
    encounter: "Strictly nocturnal and well camouflaged, scops owls are rarely seen up close and pose no danger.",
    ifEncountered: [
      "Use a red-filtered light rather than a bright white flashlight if spotlighting at night — it's less disruptive to the owl's vision.",
      "Keep noise to a minimum; owls hunt by sound and bright light or loud talking can disrupt feeding.",
      "Never attempt to capture one for a photo — observe and photograph from a respectful distance.",
      "If you find a grounded owl during the day, it is likely injured or disoriented — contact the wildlife hotline rather than handling it."
    ],
    firstAid: null,
    dangerLevel: "none"
  },
  {
    id: "monitor-lizard",

    image: "assets/animals/monitor-lizard.jpg",
    name: "Palawan Monitor Lizard",
    scientificName: "Varanus palawanensis",
    localName: "Bayawak",
    category: "reptiles",
    status: "least-concern",
    statusLabel: "Least Concern",
    locations: ["Calauit Island", "Mangroves & coastal forest, mainland Palawan", "Busuanga"],
    blurb: "A large, powerfully built lizard reaching up to 2 meters long, equally at home swimming through mangrove creeks or foraging on land.",
    details: "Described as a distinct species only in 2010, the Palawan Monitor was previously lumped together with other Philippine water monitors. It thrives in mangroves, riverbanks, and coastal forest, and is also commonly seen scavenging near human settlements. Unlike the pangolin or cockatoo, it is currently Least Concern, with locally healthy populations on Palawan and Calauit Island — though it is still hunted in places for meat and skin.",
    encounter: "Monitor lizards are not venomous, but a large adult has a powerful bite, sharp claws, and a strong tail it can use to lash out if cornered.",
    ifEncountered: [
      "Give it space and an open path to retreat — most encounters end with the lizard simply walking or swimming away.",
      "Do not corner it near water or in a confined space; this is when defensive bites and tail-whips happen.",
      "Never try to grab the tail to move or catch one — the bite reflex when grabbed is strong.",
      "Keep food and garbage secured at campsites, since monitors are drawn to scavenge near people."
    ],
    firstAid: [
      "Monitor lizard bites are deep puncture wounds with a risk of bacterial infection from bacteria naturally present in the mouth.",
      "Wash the wound immediately and thoroughly with soap and running water for several minutes.",
      "Apply firm pressure with a clean cloth to control any bleeding.",
      "Seek medical attention promptly, even if the bite looks minor — infection risk is the main concern, not venom.",
      "Mention the bite was from a monitor lizard so the clinic can choose appropriate antibiotics if needed."
    ],
    dangerLevel: "moderate"
  },
  {
    id: "palawan-porcupine",

    image: "assets/animals/palawan-porcupine.jpg",
    name: "Palawan Porcupine",
    scientificName: "Hystrix pumila",
    localName: "Durian / Landak",
    category: "mammals",
    status: "vulnerable",
    statusLabel: "Vulnerable",
    locations: ["Puerto Princesa Subterranean River N.P.", "El Nido forests", "Busuanga", "Coron"],
    blurb: "A quilled, ground-dwelling rodent found only in the Palawan island group — the smallest-ranging porcupine species in the world.",
    details: "The Palawan Porcupine dens under tree buttresses, in rock crevices, or in caves, and is mostly nocturnal and solitary. It has the smallest geographic range of any porcupine species, restricted entirely to Palawan, Busuanga, and Balabac. It is heavily hunted for bushmeat, and in recent years has faced a troubling spike in poaching driven by demand for bezoars — stone-like masses found in its digestive tract — used in unproven traditional medicine.",
    encounter: "Porcupines do not attack, but their quills are a real defense — a startled or cornered animal can back into a threat, driving quills into it on contact.",
    ifEncountered: [
      "Give it plenty of space; it will typically freeze, raise its quills as a warning, or simply move away.",
      "Never try to pick one up or corner it in a den, even out of curiosity.",
      "Keep dogs leashed near porcupine habitat — quill injuries to pets are common and quills are barbed, making removal painful.",
      "If quills become embedded in skin, do not pull them out yourself if they are deep — see first aid below."
    ],
    firstAid: [
      "Porcupine quills are barbed and can work their way deeper into tissue if left or handled incorrectly.",
      "If only the quill tip is visible and shallow, it can be pulled straight out in the direction it entered, firmly and quickly.",
      "Do not cut or break the quill before removing it, and do not push on the skin around it.",
      "For deep, multiple, or close-to-the-eye quill injuries, do not attempt removal — go to a clinic, since barbed quills can migrate toward organs if mishandled.",
      "Clean the area with soap and water after removal and watch for signs of infection over the next few days."
    ],
    dangerLevel: "low"
  },
  {
    id: "palawan-flying-squirrel",

    image: "assets/animals/palawan-flying-squirrel.jpg",
    name: "Palawan Flying Squirrel",
    scientificName: "Hylopetes nigripes",
    localName: "Tapilak",
    category: "mammals",
    status: "near-threatened",
    statusLabel: "Near Threatened",
    locations: ["Lowland & dry forest, mainland Palawan"],
    blurb: "A nocturnal glider with a furred membrane stretching wrist to ankle, sailing silently between trees on woolly, grizzled-brown wings of skin.",
    details: "Despite the name, the Palawan Flying Squirrel doesn't truly fly — it glides using a patagium, a skin membrane connecting its limbs. It nests in tree cavities and is rarely seen during the day, emerging at night to forage. Some individuals on Palawan show degrees of partial albinism, an unusual trait noted by researchers. Habitat loss from deforestation is its primary threat, along with some hunting for food and the pet trade.",
    encounter: "A purely nocturnal, arboreal glider that almost never comes into contact with people. It poses no danger.",
    ifEncountered: [
      "If spotted gliding at night, observe quietly with a dim light rather than a bright spotlight.",
      "Leave tree cavities and dead snags undisturbed where possible — these are nesting sites.",
      "Never attempt to capture one for the pet trade; it does not adapt well to captivity and is protected by law.",
      "Report any for sale or in captivity to PCSD."
    ],
    firstAid: null,
    dangerLevel: "none"
  },
  {
    id: "northern-palawan-tree-squirrel",

    image: "assets/animals/northern-palawan-tree-squirrel.jpg",
    name: "Northern Palawan Tree Squirrel",
    scientificName: "Sundasciurus juvencus",
    localName: "Iho",
    category: "mammals",
    status: "least-concern",
    statusLabel: "Least Concern",
    locations: ["Central & northern Palawan forest", "Coastal woodland & plantation edges"],
    blurb: "A common, day-active tree squirrel with brown-grey fur and a black-tipped tail, often the easiest endemic mammal for visitors to actually spot.",
    details: "Unlike most of the animals on this list, the Northern Palawan Tree Squirrel is doing well — it's widespread, often abundant, and classified Least Concern. It's diurnal (active by day), making it one of the more visible endemic mammals for hikers and visitors. It is sometimes considered a minor pest in coconut plantations and is occasionally hunted or kept as a pet, but neither poses a major threat to the overall population at this time.",
    encounter: "Harmless and easily startled — it will dart up a tree trunk at the first sign of people.",
    ifEncountered: [
      "Simply enjoy watching it forage — no special precautions are needed.",
      "Avoid feeding wild squirrels, as it encourages dependence on people and unhealthy diets.",
      "If keeping one as a pet, note that this is generally discouraged and may require permits, as with most native wildlife.",
      "Report any unusually large gatherings of dead or sick squirrels to PCSD, as this can indicate disease or pesticide exposure."
    ],
    firstAid: null,
    dangerLevel: "none"
  },
  {
    id: "palawan-flycatcher",

    image: "assets/animals/palawan-flycatcher.jpg",
    name: "Palawan Flycatcher",
    scientificName: "Ficedula platenae",
    localName: "Manyok-manyok",
    category: "birds",
    status: "vulnerable",
    statusLabel: "Vulnerable",
    locations: ["Puerto Princesa Subterranean River N.P.", "Palawan lowland & foothill forest understory"],
    blurb: "A small, orange-chested forest bird, one of the 'Tres Amigos' most sought-after endemic birds by visiting birdwatchers in Palawan.",
    details: "This small flycatcher favors dense undergrowth with palms or bamboo in lowland and foothill forest. Along with the Melodious Babbler and Falcated Wren-Babbler, it's nicknamed one of the 'Tres Amigos' — a trio of hard-to-find Palawan endemics that draw birders from around the world. Its population, estimated between 6,000 and 15,000 mature individuals, is declining as forest fragmentation from mining, logging, and clearing continues.",
    encounter: "A shy, low-undergrowth bird with no danger to people — the main 'risk' is disturbing its habitat while trying to spot one.",
    ifEncountered: [
      "Move slowly and stay on established trails rather than pushing into undergrowth.",
      "Keep noise low and avoid playback calls repeatedly, which can stress breeding birds.",
      "Photograph from a distance with a zoom lens rather than approaching closely.",
      "Support birding guides and protected-area entrance fees — they directly fund the habitat protection this species depends on."
    ],
    firstAid: null,
    dangerLevel: "none"
  }
];

const CATEGORY_LABELS = {
  mammals: "Mammals",
  birds: "Birds",
  reptiles: "Reptiles"
};

const STATUS_META = {
  "critically-endangered": { label: "Critically Endangered", color: "#b03a2e", order: 1 },
  "endangered":             { label: "Endangered",            color: "#c0533a", order: 2 },
  "vulnerable":             { label: "Vulnerable",             color: "#d68c2f", order: 3 },
  "near-threatened":        { label: "Near Threatened",        color: "#b8a13a", order: 4 },
  "least-concern":          { label: "Least Concern",          color: "#5a8a4a", order: 5 }
};

const DANGER_META = {
  none:     { label: "No real danger",        color: "#5a8a4a" },
  low:      { label: "Low — caution advised",  color: "#b8a13a" },
  moderate: { label: "Moderate — be careful",  color: "#d68c2f" },
  high:     { label: "High — emergency risk",  color: "#b03a2e" }
};
