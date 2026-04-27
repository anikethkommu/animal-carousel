
const animals = {

    wild: {
        label: "Wild Animals",
        badge: "wild",
        list: [
            {
                name: "African Lion",
                img: "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWZyaWNhbiUyMExpb258ZW58MHx8MHx8fDA%3D",
                desc: "The king of the savanna, lions are the only truly social big cats, living in groups called prides of up to 30 individuals.",
                facts: [{ l: "Habitat", v: "African Savanna" }, { l: "Lifespan", v: "10–14 years" }, { l: "Weight", v: "120–190 kg" }, { l: "Status", v: "Vulnerable" }]
            },
            {
                name: "Bengal Tiger",
                img: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVuZ2FsJTIwVGlnZXJ8ZW58MHx8MHx8fDA%3D",
                desc: "The largest wild cat species, Bengal tigers are solitary hunters known for their distinctive orange coat with black stripes.",
                facts: [{ l: "Habitat", v: "Indian Subcontinent" }, { l: "Lifespan", v: "10–15 years" }, { l: "Weight", v: "140–300 kg" }, { l: "Status", v: "Endangered" }]
            },
            {
                name: "African Elephant",
                img: "https://plus.unsplash.com/premium_photo-1661810056990-57be781caa2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWZyaWNhbiUyMEVsZXBoYW50fGVufDB8fDB8fHww",
                desc: "The largest land animal on Earth, African elephants are highly intelligent and live in close-knit matriarchal family groups.",
                facts: [{ l: "Habitat", v: "Sub-Saharan Africa" }, { l: "Lifespan", v: "60–70 years" }, { l: "Weight", v: "3,000–6,000 kg" }, { l: "Status", v: "Vulnerable" }]
            },
            {
                name: "Snow Leopard",
                img: "https://images.unsplash.com/photo-1639231554431-ebce02bdeacc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U25vdyUyMExlb3BhcmR8ZW58MHx8MHx8fDA%3D",
                desc: "The ghost of the mountains, snow leopards are elusive predators perfectly adapted to the harsh cold of Central Asian ranges.",
                facts: [{ l: "Habitat", v: "Central Asia" }, { l: "Lifespan", v: "10–12 years" }, { l: "Weight", v: "22–55 kg" }, { l: "Status", v: "Vulnerable" }]
            },
            {
                name: "Grey Wolf",
                img: "https://plus.unsplash.com/premium_photo-1661890071978-6c80f92c7fdf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R3JleSUyMFdvbGZ8ZW58MHx8MHx8fDA%3D",
                desc: "Highly social apex predators, wolves live and hunt in family packs with complex social hierarchies and communication.",
                facts: [{ l: "Habitat", v: "North America, Eurasia" }, { l: "Lifespan", v: "6–8 years" }, { l: "Weight", v: "25–40 kg" }, { l: "Status", v: "Least Concern" }]
            },
            {
                name: "Cheetah",
                img: "https://images.unsplash.com/photo-1624958319297-d1aa3a41378e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hlZXRhaHxlbnwwfHwwfHx8MA%3D%3D",
                desc: "The fastest land animal, cheetahs can reach 112 km/h in short bursts. Unlike other big cats, they hunt by day using sight.",
                facts: [{ l: "Habitat", v: "Africa & Iran" }, { l: "Lifespan", v: "10–12 years" }, { l: "Weight", v: "21–72 kg" }, { l: "Status", v: "Vulnerable" }]
            },
            {
                name: "Gorilla",
                img: "https://images.unsplash.com/photo-1581281863883-2469417a1668?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
                desc: "The largest primates on Earth, gorillas share 98.3% of their DNA with humans and live in tight family groups in African forests.",
                facts: [{ l: "Habitat", v: "Central Africa" }, { l: "Lifespan", v: "35–40 years" }, { l: "Weight", v: "70–200 kg" }, { l: "Status", v: "Critically Endangered" }]
            },
            {
                name: "Grizzly Bear",
                img: "https://plus.unsplash.com/premium_photo-1661849977833-c18cd1c7e295?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JpenpseSUyMEJlYXJ8ZW58MHx8MHx8fDA%3D",
                desc: "One of North America's largest land predators, grizzly bears are omnivores known for their enormous strength and intelligence.",
                facts: [{ l: "Habitat", v: "North America" }, { l: "Lifespan", v: "20–25 years" }, { l: "Weight", v: "130–360 kg" }, { l: "Status", v: "Least Concern" }]
            },
            {
                name: "Jaguar",
                img: "https://images.unsplash.com/photo-1566544496485-02b11e54229b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SmFndWFyfGVufDB8fDB8fHww",
                desc: "The Americas' largest cat, jaguars have the most powerful bite of any big cat and are exceptional swimmers.",
                facts: [{ l: "Habitat", v: "Amazon Basin" }, { l: "Lifespan", v: "12–15 years" }, { l: "Weight", v: "56–96 kg" }, { l: "Status", v: "Near Threatened" }]
            },
            {
                name: "Orangutan",
                img: "https://plus.unsplash.com/premium_photo-1661816511883-d53e6e9e106f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8T3Jhbmd1dGFufGVufDB8fDB8fHww",
                desc: "Among the most intelligent animals, orangutans are the only great apes native to Asia and use tools in the wild.",
                facts: [{ l: "Habitat", v: "Borneo & Sumatra" }, { l: "Lifespan", v: "35–45 years" }, { l: "Weight", v: "30–90 kg" }, { l: "Status", v: "Critically Endangered" }]
            },
            {
                name: "Polar Bear",
                img: "https://images.unsplash.com/photo-1593946460607-d1570da6268f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UG9sYXIlMjBCZWFyfGVufDB8fDB8fHww",
                desc: "The world's largest land carnivore, polar bears are perfectly adapted to Arctic life with thick fur and a layer of fat for insulation.",
                facts: [{ l: "Habitat", v: "Arctic Circle" }, { l: "Lifespan", v: "20–25 years" }, { l: "Weight", v: "350–700 kg" }, { l: "Status", v: "Vulnerable" }]
            }
        ]
    },

    carnivorous: {
        label: "Carnivorous Animals",
        badge: "carnivorous",
        list: [
            {
                name: "African Leopard",
                img: "images/carnivorous/african_leopard.jpg",
                desc: "Incredibly adaptable big cats, leopards are solitary ambush predators that drag prey up trees to keep it from scavengers.",
                facts: [{ l: "Diet", v: "Meat only" }, { l: "Prey", v: "Deer, baboons" }, { l: "Weight", v: "28–65 kg" }, { l: "Hunt", v: "Night" }]
            },
            {
                name: "Komodo Dragon",
                img: "images/carnivorous/komodo_dragon.jpg",
                desc: "The world's largest living lizard, Komodo dragons use venom and bacteria-laden saliva to bring down prey much larger than themselves.",
                facts: [{ l: "Diet", v: "Meat only" }, { l: "Prey", v: "Deer, goats, pigs" }, { l: "Weight", v: "Up to 70 kg" }, { l: "Speed", v: "20 km/h" }]
            },
            {
                name: "Hyena",
                img: "images/carnivorous/hynea.jpg",
                desc: "Often misunderstood, spotted hyenas are highly intelligent social predators — not just scavengers — with jaws that can crush bone.",
                facts: [{ l: "Diet", v: "Meat & bones" }, { l: "Pack", v: "Up to 80 members" }, { l: "Weight", v: "45–70 kg" }, { l: "Hunt", v: "Night & dawn" }]
            },
            {
                name: "African Wild Dog",
                img: "images/carnivorous/african_wild_dog.jpg",
                desc: "Africa's most successful predator by hunt success rate (~80%), wild dogs live in cooperative packs with strong social bonds.",
                facts: [{ l: "Diet", v: "Meat only" }, { l: "Success rate", v: "80%" }, { l: "Weight", v: "18–36 kg" }, { l: "Status", v: "Endangered" }]
            },
            {
                name: "Nile Crocodile",
                img: "images/carnivorous/wild_crocodile.jpg",
                desc: "One of Africa's most feared predators, Nile crocodiles have the strongest bite force of any animal and can live over 70 years.",
                facts: [{ l: "Diet", v: "Fish, mammals" }, { l: "Bite Force", v: "5,000 lbs" }, { l: "Length", v: "Up to 6 m" }, { l: "Lifespan", v: "70+ years" }]
            },
            {
                name: "Great White Shark",
                img: "images/carnivorous/white_shark.jpg",
                desc: "The ocean's apex predator, great white sharks can detect a single drop of blood from 5 km away thanks to electroreceptors.",
                facts: [{ l: "Diet", v: "Fish, seals, dolphins" }, { l: "Speed", v: "56 km/h" }, { l: "Length", v: "Up to 6 m" }, { l: "Status", v: "Vulnerable" }]
            },
            {
                name: "Orca",
                img: "images/carnivorous/orca.jpg",
                desc: "The most powerful predators in the sea, orcas use sophisticated cooperative hunting strategies and are highly intelligent.",
                facts: [{ l: "Diet", v: "Fish, seals, whales" }, { l: "Speed", v: "56 km/h" }, { l: "Weight", v: "3,600–5,400 kg" }, { l: "Lifespan", v: "50–80 years" }]
            },
            {
                name: "Mountain Lion",
                img: "images/carnivorous/mountain_lion.jpg",
                desc: "Also called puma or cougar, mountain lions are solitary ambush predators with the widest range of any wild land animal in the Americas.",
                facts: [{ l: "Diet", v: "Deer, elk" }, { l: "Jump", v: "5.5 m high" }, { l: "Weight", v: "53–100 kg" }, { l: "Range", v: "Americas" }]
            },
            {
                name: "Wolverine",
                img: "images/carnivorous/wolverine.jpg",
                desc: "Pound for pound one of nature's fiercest predators, wolverines have been known to drive bears and mountain lions off their kills.",
                facts: [{ l: "Diet", v: "Meat, carrion" }, { l: "Territory", v: "600 km²" }, { l: "Weight", v: "9–25 kg" }, { l: "Habitat", v: "Northern forests" }]
            },
            {
                name: "Bald Eagle",
                img: "images/carnivorous/bald_eagle.jpg",
                desc: "The national bird of the USA, bald eagles are powerful aerial hunters that snatch fish from water with razor-sharp talons.",
                facts: [{ l: "Diet", v: "Fish, small mammals" }, { l: "Wingspan", v: "Up to 2.4 m" }, { l: "Speed", v: "120–160 km/h dive" }, { l: "Lifespan", v: "20 years wild" }]
            }
        ]
    },

    herbivorous: {
        label: "Herbivorous Animals",
        badge: "herbivorous",
        list: [
            {
                name: "Giraffe",
                img: "images/herbivorous/giraffe.jpg",
                desc: "The tallest living terrestrial animal, giraffes use their 1.8-metre necks to browse leaves that no other animal can reach.",
                facts: [{ l: "Diet", v: "Leaves & twigs" }, { l: "Height", v: "4.5–5.9 m" }, { l: "Tongue", v: "45 cm long" }, { l: "Sleep", v: "Only 30 min/day" }]
            },
            {
                name: "Giant Panda",
                img: "images/herbivorous/gaint_panda.jpg",
                desc: "Beloved worldwide, giant pandas spend up to 16 hours a day eating bamboo and are a symbol of wildlife conservation.",
                facts: [{ l: "Diet", v: "99% bamboo" }, { l: "Weight", v: "75–135 kg" }, { l: "Eat/day", v: "12–38 kg bamboo" }, { l: "Status", v: "Vulnerable" }]
            },
            {
                name: "White Rhinoceros",
                img: "images/herbivorous/white_rhinoceros.jpg",
                desc: "The largest living rhinoceros species and the third-largest land mammal, white rhinos are social grazers living in groups called crashes.",
                facts: [{ l: "Diet", v: "Grass" }, { l: "Weight", v: "1,500–2,300 kg" }, { l: "Horn", v: "Up to 150 cm" }, { l: "Status", v: "Near Threatened" }]
            },
            {
                name: "Hippopotamus",
                img: "images/herbivorous/hippopotamus.jpg",
                desc: "Despite being herbivores, hippos are considered one of Africa's most dangerous animals. They spend most of the day in water to keep cool.",
                facts: [{ l: "Diet", v: "Grass, fruit" }, { l: "Weight", v: "1,500–3,000 kg" }, { l: "Speed", v: "30 km/h on land" }, { l: "Status", v: "Vulnerable" }]
            },
            {
                name: "Bison",
                img: "images/herbivorous/bison.jpg",
                desc: "The heaviest land animal in North America, American bison once roamed in vast herds of millions across the Great Plains.",
                facts: [{ l: "Diet", v: "Grasses & sedges" }, { l: "Weight", v: "400–900 kg" }, { l: "Speed", v: "60 km/h" }, { l: "Herd", v: "Millions historically" }]
            },
            {
                name: "Zebra",
                img: "images/herbivorous/zebra.jpg",
                desc: "No two zebras have the same stripe pattern. They live in large herds for protection, and stripes may confuse predators when running together.",
                facts: [{ l: "Diet", v: "Grass, leaves, bark" }, { l: "Speed", v: "65 km/h" }, { l: "Lifespan", v: "25 years" }, { l: "Stripes", v: "All unique" }]
            },
            {
                name: "Koala",
                img: "images/herbivorous/koala.jpg",
                desc: "Koalas feed almost exclusively on eucalyptus leaves, which are toxic to most animals. They sleep up to 22 hours a day to conserve energy.",
                facts: [{ l: "Diet", v: "Eucalyptus only" }, { l: "Sleep", v: "18–22 hrs/day" }, { l: "Weight", v: "4–15 kg" }, { l: "Status", v: "Endangered" }]
            },
            {
                name: "Mountain Gorilla",
                img: "images/herbivorous/mountain_gorilla.jpg",
                desc: "Critically endangered mountain gorillas are gentle herbivores living in the misty forests of the Virunga volcanoes.",
                facts: [{ l: "Diet", v: "Leaves, stems, fruit" }, { l: "Group", v: "Family troops" }, { l: "Weight", v: "100–220 kg" }, { l: "Status", v: "Endangered" }]
            },
            {
                name: "Moose",
                img: "images/herbivorous/moose.jpg",
                desc: "The largest member of the deer family, moose are solitary animals with distinctive palmate antlers that can span up to 1.8 metres.",
                facts: [{ l: "Diet", v: "Aquatic plants, shrubs" }, { l: "Weight", v: "380–700 kg" }, { l: "Antler span", v: "Up to 1.8 m" }, { l: "Habitat", v: "Boreal forests" }]
            },
            {
                name: "Manatee",
                img: "images/herbivorous/manatee.jpg",
                desc: "Gentle sea cows, manatees are slow-moving aquatic herbivores that graze on seagrass and freshwater vegetation for up to 8 hours daily.",
                facts: [{ l: "Diet", v: "Seagrass & aquatic plants" }, { l: "Weight", v: "400–550 kg" }, { l: "Speed", v: "8 km/h avg" }, { l: "Status", v: "Vulnerable" }]
            }
        ]
    },

    birds: {
        label: "Birds",
        badge: "birds",
        list: [
            {
                name: "Bald Eagle",
                img: "images/birds/bald_eagle.jpg",
                desc: "America's national bird and symbol of freedom, bald eagles are powerful hunters with wingspans up to 2.4 metres.",
                facts: [{ l: "Wingspan", v: "Up to 2.4 m" }, { l: "Diet", v: "Fish, carrion" }, { l: "Speed", v: "160 km/h dive" }, { l: "Lifespan", v: "20–30 years" }]
            },
            {
                name: "Flamingo",
                img: "images/birds/flamingo.jpg",
                desc: "Flamingos get their pink colour from carotenoid pigments in the algae and crustaceans they eat. They can fly 600 km in one night.",
                facts: [{ l: "Height", v: "90–120 cm" }, { l: "Diet", v: "Algae, shrimp" }, { l: "Flight", v: "600 km in one night" }, { l: "Flock", v: "Thousands" }]
            },
            {
                name: "Peacock",
                img: "images/birds/peacock.jpg",
                desc: "Male peacocks display their iridescent tail feathers — called a train — in elaborate courtship dances to attract females.",
                facts: [{ l: "Train length", v: "Up to 1.8 m" }, { l: "Diet", v: "Omnivore" }, { l: "Lifespan", v: "15–20 years" }, { l: "Call", v: "Very loud" }]
            },
            {
                name: "Snowy Owl",
                img: "images/birds/snowy_owl.jpg",
                desc: "One of the world's largest owls, snowy owls are diurnal hunters of the Arctic, with thick plumage to withstand extreme cold.",
                facts: [{ l: "Wingspan", v: "Up to 1.5 m" }, { l: "Diet", v: "Lemmings, birds" }, { l: "Habitat", v: "Arctic tundra" }, { l: "Vision", v: "Excellent day & night" }]
            },
            {
                name: "Toucan",
                img: "images/birds/toucan.jpg",
                desc: "Famous for their enormous colourful bills, toucans use them to reach fruit, regulate body temperature, and intimidate rivals.",
                facts: [{ l: "Bill length", v: "Up to 20 cm" }, { l: "Diet", v: "Fruit, insects, eggs" }, { l: "Habitat", v: "Tropical forests" }, { l: "Weight", v: "130–680 g" }]
            },
            {
                name: "Mandarin Duck",
                img: "images/birds/mandarin_duck.jpg",
                desc: "Often called the world's most beautiful duck, male mandarins display an extraordinary array of coloured plumage in mating season.",
                facts: [{ l: "Habitat", v: "East Asia & UK" }, { l: "Diet", v: "Seeds, plants, insects" }, { l: "Lifespan", v: "6–10 years" }, { l: "Symbol", v: "Love in E. Asia" }]
            },
            {
                name: "Penguin",
                img: "images/birds/penguin.jpg",
                desc: "Flightless birds perfectly adapted to aquatic life, penguins can swim up to 36 km/h underwater and dive to 500 metres depth.",
                facts: [{ l: "Swim speed", v: "36 km/h" }, { l: "Dive depth", v: "500 m" }, { l: "Diet", v: "Fish, krill, squid" }, { l: "Species", v: "18 species" }]
            },
            {
                name: "Macaw",
                img: "images/birds/macaw.jpg",
                desc: "Among the most intelligent birds, macaws are highly social with vivid plumage and can live over 60 years in captivity.",
                facts: [{ l: "Wingspan", v: "Up to 1 m" }, { l: "Diet", v: "Seeds, fruit, nuts" }, { l: "Lifespan", v: "Up to 60 years" }, { l: "Intelligence", v: "Can mimic speech" }]
            },
            {
                name: "Kiwi",
                img: "images/birds/kiwi.jpg",
                desc: "New Zealand's iconic flightless bird, the kiwi is nocturnal, lays eggs that are 20% of the mother's body weight — the largest ratio of any bird.",
                facts: [{ l: "Habitat", v: "New Zealand forests" }, { l: "Egg size", v: "20% of body weight" }, { l: "Diet", v: "Worms, insects" }, { l: "Status", v: "Endangered" }]
            },
            {
                name: "Hummingbird",
                img: "images/birds/hummingbird.jpg",
                desc: "The world's smallest birds, hummingbirds beat their wings 50–80 times per second and are the only birds that can fly backwards.",
                facts: [{ l: "Wing beats", v: "50–80 per sec" }, { l: "Heart rate", v: "1,200 beats/min" }, { l: "Weight", v: "2–20 g" }, { l: "Diet", v: "Nectar, insects" }]
            },
            {
                name: "Ostrich",
                img: "images/birds/ostrich.jpg",
                desc: "The world's largest and heaviest bird, the ostrich cannot fly but is the fastest running bird on Earth at 70 km/h.",
                facts: [{ l: "Height", v: "Up to 2.7 m" }, { l: "Speed", v: "70 km/h" }, { l: "Egg", v: "Largest of any bird" }, { l: "Kick", v: "Lethal force" }]
            }
        ]
    },

    aquatic: {
        label: "Aquatic Animals",
        badge: "aquatic",
        list: [
            {
                name: "Bottlenose Dolphin",
                img: "images/aquatic/bottlenose_dolphin.jpg",
                desc: "Among the most intelligent animals on Earth, bottlenose dolphins have complex social structures and use echolocation to hunt fish.",
                facts: [{ l: "Speed", v: "35 km/h" }, { l: "Dive", v: "Up to 150 m" }, { l: "Lifespan", v: "40–60 years" }, { l: "Diet", v: "Fish, squid" }]
            },
            {
                name: "Blue Whale",
                img: "images/aquatic/blue_whale.jpg",
                desc: "The largest animal ever known to have existed, the blue whale's heart alone is the size of a small car.",
                facts: [{ l: "Length", v: "Up to 30 m" }, { l: "Weight", v: "Up to 200 tonnes" }, { l: "Diet", v: "4 tonnes krill/day" }, { l: "Status", v: "Endangered" }]
            },
            {
                name: "Sea Turtle",
                img: "images/aquatic/sea_turtle.jpg",
                desc: "Ancient mariners of the ocean, sea turtles have existed for over 100 million years and can navigate across entire ocean basins.",
                facts: [{ l: "Lifespan", v: "80–100 years" }, { l: "Navigation", v: "Magnetic field" }, { l: "Speed", v: "35 km/h" }, { l: "Nesting", v: "Every 2–5 years" }]
            },
            {
                name: "Manta Ray",
                img: "images/aquatic/manta_ray.jpg",
                desc: "Gentle giants of the ocean, giant manta rays have the largest brain-to-body ratio of any fish and demonstrate self-awareness.",
                facts: [{ l: "Wingspan", v: "Up to 9 m" }, { l: "Weight", v: "Up to 3,000 kg" }, { l: "Diet", v: "Plankton, krill" }, { l: "Brain", v: "Largest of any fish" }]
            },
            {
                name: "Clownfish",
                img: "images/aquatic/clownfish.jpg",
                desc: "Famous for their symbiotic relationship with sea anemones, clownfish are immune to anemone stings thanks to a special mucus coating.",
                facts: [{ l: "Size", v: "7–11 cm" }, { l: "Habitat", v: "Indian/Pacific Oceans" }, { l: "Diet", v: "Algae, plankton" }, { l: "Fact", v: "All born male" }]
            },
            {
                name: "Octopus",
                img: "images/aquatic/octopus.jpg",
                desc: "Highly intelligent invertebrates, octopuses can open jars, use tools, and have three hearts, blue blood and nine brains.",
                facts: [{ l: "Arms", v: "8" }, { l: "Hearts", v: "3" }, { l: "Brains", v: "9 (central + per arm)" }, { l: "Lifespan", v: "1–5 years" }]
            },
            {
                name: "Seahorse",
                img: "images/aquatic/seahorse.jpg",
                desc: "Unique among fish, seahorses are monogamous and it is the male who carries and gives birth to the young.",
                facts: [{ l: "Height", v: "1.5–35 cm" }, { l: "Speed", v: "Slowest fish" }, { l: "Young", v: "Male gives birth" }, { l: "Diet", v: "Tiny crustaceans" }]
            },
            {
                name: "Hammerhead Shark",
                img: "images/aquatic/hammerhead_shark.jpg",
                desc: "The distinctive hammer-shaped head of hammerhead sharks gives them 360-degree vision and enhanced electrosensory ability to find prey.",
                facts: [{ l: "Length", v: "Up to 6 m" }, { l: "Diet", v: "Stingrays, fish" }, { l: "Vision", v: "360 degrees" }, { l: "Status", v: "Critically Endangered" }]
            },
            {
                name: "Humpback Whale",
                img: "images/aquatic/humpback_whale.jpg",
                desc: "Famous for their complex songs, humpback whales migrate up to 25,000 km each year — one of the longest migrations of any mammal.",
                facts: [{ l: "Length", v: "12–16 m" }, { l: "Migration", v: "25,000 km" }, { l: "Song", v: "Up to 20 minutes" }, { l: "Weight", v: "25–30 tonnes" }]
            },
            {
                name: "Narwhal",
                img: "images/aquatic/narwhal.jpg",
                desc: "The unicorn of the sea, narwhals have a long spiral tusk which is actually a modified tooth with up to 10 million nerve endings.",
                facts: [{ l: "Tusk", v: "Up to 3 m long" }, { l: "Habitat", v: "Arctic Ocean" }, { l: "Diet", v: "Fish, squid, shrimp" }, { l: "Dive", v: "1,500 m deep" }]
            }
        ]
    },

    reptiles: {
        label: "Reptiles",
        badge: "reptiles",
        list: [
            {
                name: "King Cobra",
                img: "images/reptiles/king_cobra.jpg",
                desc: "The world's longest venomous snake, king cobras can rear up to one-third of their body to stand eye-to-eye with a person.",
                facts: [{ l: "Length", v: "Up to 5.5 m" }, { l: "Venom", v: "Can kill elephant" }, { l: "Diet", v: "Other snakes" }, { l: "Lifespan", v: "20 years" }]
            },
            {
                name: "Saltwater Crocodile",
                img: "images/reptiles/saltwater_crocodile.jpg",
                desc: "The largest living reptile, saltwater crocodiles are apex predators capable of taking down water buffalo and sharks.",
                facts: [{ l: "Length", v: "Up to 6.3 m" }, { l: "Weight", v: "Up to 1,000 kg" }, { l: "Bite", v: "Strongest on Earth" }, { l: "Lifespan", v: "70+ years" }]
            },
            {
                name: "Chameleon",
                img: "https://plus.unsplash.com/premium_photo-1722827117771-51f0f24a9a1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hhbWVsZW9ufGVufDB8fDB8fHww",
                desc: "Master of disguise, chameleons change colour not just to camouflage but also to communicate mood and temperature regulation.",
                facts: [{ l: "Eyes", v: "360-degree vision" }, { l: "Tongue", v: "Twice body length" }, { l: "Colour", v: "For communication" }, { l: "Species", v: "200+" }]
            },
            {
                name: "Galapagos Tortoise",
                img: "images/reptiles/galapagos_tortoise.jpg",
                desc: "The largest living tortoise and one of the longest-lived vertebrates, Galapagos tortoises inspired Darwin's theory of evolution.",
                facts: [{ l: "Lifespan", v: "150+ years" }, { l: "Weight", v: "Up to 400 kg" }, { l: "Diet", v: "Cacti, grass, fruit" }, { l: "Status", v: "Vulnerable" }]
            },
            {
                name: "Green Iguana",
                img: "images/reptiles/green_iguana.jpg",
                desc: "Arboreal herbivores native to Central and South America, green iguanas can drop from trees into water and swim away from predators.",
                facts: [{ l: "Length", v: "Up to 1.8 m" }, { l: "Diet", v: "Leaves, fruit, flowers" }, { l: "Speed", v: "35 km/h" }, { l: "Tail", v: "Can regenerate" }]
            },
            {
                name: "Monitor Lizard",
                img: "images/reptiles/monitor_lizard.jpg",
                desc: "Highly intelligent lizards, monitor lizards have forked tongues to track prey by scent and are known to count — a rare ability among reptiles.",
                facts: [{ l: "Species", v: "80+" }, { l: "Length", v: "Up to 3 m" }, { l: "Diet", v: "Carnivore" }, { l: "Intelligence", v: "Can count" }]
            },
            {
                name: "Anaconda",
                img: "images/reptiles/anaconda.jpg",
                desc: "The world's heaviest and one of the longest snakes, green anacondas are non-venomous constrictors that ambush prey in murky rivers.",
                facts: [{ l: "Length", v: "Up to 9 m" }, { l: "Weight", v: "Up to 250 kg" }, { l: "Prey", v: "Caiman, deer, capybara" }, { l: "Habitat", v: "Amazon basin" }]
            },
            {
                name: "Gecko",
                img: "images/reptiles/gecko.jpg",
                desc: "Geckos can walk upside down on ceilings using millions of microscopic hair-like structures on their toes that create van der Waals forces.",
                facts: [{ l: "Species", v: "1,500+" }, { l: "Toe hairs", v: "Millions per foot" }, { l: "Diet", v: "Insects" }, { l: "Vocalisations", v: "Chirping & barking" }]
            },
            {
                name: "Horned Lizard",
                img: "images/reptiles/horned_lizard.jpg",
                desc: "Often called horny toads, these lizards can shoot blood from their eyes as a defence mechanism — squirting up to 1.5 metres.",
                facts: [{ l: "Blood squirt", v: "Up to 1.5 m" }, { l: "Diet", v: "Ants (mostly)" }, { l: "Habitat", v: "North American deserts" }, { l: "Defence", v: "Eye-blood shooting" }]
            },
            {
                name: "Leatherback Turtle",
                img: "images/reptiles/leatherback_turtle.jpg",
                desc: "The largest living turtle, leatherbacks dive deeper than any other reptile and migrate vast distances across entire ocean basins.",
                facts: [{ l: "Length", v: "Up to 2.1 m" }, { l: "Weight", v: "Up to 900 kg" }, { l: "Dive", v: "1,200 m deep" }, { l: "Status", v: "Vulnerable" }]
            }
        ]
    }
};

// ── State ────────────────────────────────────────────────────
let currentCategory = 'wild';
let autoSpeed = 1;      // multiplier for rotation speed

// ── DOM refs ─────────────────────────────────────────────────
const carousel    = document.getElementById('carousel');
const catLabel    = document.getElementById('category-label');
const countLabel  = document.getElementById('count-label');
const overlay     = document.getElementById('modal-overlay');
const modalClose  = document.getElementById('modal-close');

// ── Build carousel ───────────────────────────────────────────
function buildCarousel(category) {
    const data  = animals[category];
    const list  = data.list;
    const n     = list.length;

    carousel.innerHTML = '';
    carousel.style.setProperty('--n', n);

    list.forEach((animal, i) => {
        const img       = document.createElement('img');
        img.className   = 'card';
        img.src         = animal.img;
        img.alt         = animal.name;
        img.style.cssText = `--i:${i}`;
        img.loading     = 'lazy';

        img.addEventListener('click', () => openModal(animal, category));
        carousel.appendChild(img);
    });

    catLabel.textContent  = data.label;
    countLabel.textContent = `${n} animals`;
}

// ── Switch category ──────────────────────────────────────────
function switchCategory(category) {
    if (category === currentCategory) return;
    currentCategory = category;

    // animate out
    carousel.classList.add('switching');
    setTimeout(() => {
        buildCarousel(category);
        carousel.classList.remove('switching');
    }, 380);

    // update buttons
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
}

// ── Modal ────────────────────────────────────────────────────
function openModal(animal, category) {
    document.getElementById('modal-img').src   = animal.img;
    document.getElementById('modal-name').textContent = animal.name;
    document.getElementById('modal-desc').textContent = animal.desc;

    const badge = document.getElementById('modal-badge');
    badge.textContent  = animals[category].label;
    badge.className    = `modal-badge badge-${category}`;

    const factsEl = document.getElementById('modal-facts');
    factsEl.innerHTML = animal.facts.map(f =>
        `<div class="fact-item">
            <span class="fact-label">${f.l}</span>
            <span class="fact-value">${f.v}</span>
        </div>`
    ).join('');

    overlay.classList.add('open');
    // pause carousel while modal open
    carousel.style.animationPlayState = 'paused';
}

function closeModal() {
    overlay.classList.remove('open');
    carousel.style.animationPlayState = '';
}

// ── Events ───────────────────────────────────────────────────
document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => switchCategory(btn.dataset.category));
});

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

// ── Init ─────────────────────────────────────────────────────
buildCarousel(currentCategory);
