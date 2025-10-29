type Dialog = {
  talker: string;
  message: string;
};
export type MixSeriesDataType = {
  id: string;
  name: string;
  edition: string;
  note?: string;
  artist: string;
  artistLink?: string;
  date: string;
  artwork: string;
  coverImage: string;
  images?: string[];
  soundcloudLink: string;
  soundcloudEmbed: string;
  description: string;
  dialog?: Dialog[];
};
const mixSeriesData: MixSeriesDataType[] = [
  {
    id: "XX",
    edition: "[dia/log]",
    name: "Mix Series XX [dia/log] - Cocktail Twinks & HIGH",
    artist: "Cocktail Twinks",
    date: "30th October 2025",
    artwork: "Bece",
    coverImage: "/images/mixSeries/20/cocktail_coverImage.jpg",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-xx-dia-log-cocktail-twinks-high?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2195264107&color=%23000000&inverse=true&auto_play=true&show_user=true",
    description: `Down in the pit or behind the decks, Cocktail Twinks is a powerful force in the local queer underworld. Already part of Pixelflowers, a live visuals duo who blends software, analog video synthesis, cameras and old digital hardware to enhance 'ecstatic rituals on sweaty dancefloors and dirty couches', since three years now they run HIGH, a sex positive party where live visuals and performances meets information and care.

With them we talked about conscious dancefloors, altered states and the artistic creativity as an escape from depression and alienation. Listen to their mix and read the full Interview on our IG.

Tracklist
1. Nigh/T\\mare - The Path of the Moans
2. Melania . - ORDEN
3. Restive Plaggona - Lulled Into Lethargy
4. Cranya - Wait For Better Gods
5. ANNLOR - Sin of the Soul
6. Scalameriya - Ceremony
7. Ancient Methods - Else
8. Maze DK - Shredding Into Pieces
9. Eve Schwarz - Slaves Of Algorithm
10. Andrea Natale - Perfect Control
11. SPØRE - Sombre Présage
12. EYES GONE - No Funerals
13. Znzl - The Nothing That Beholds Everything
14. Lesser Of - My Prayer For Mercy
15. Öspiel - Boreal Festen
16. t_error 404 - Techno Yidam
17. Throbbing Gristle - Still Walking
18. SUNDS - Desolation Valleys`,
    dialog: [
      {
        talker: "A\\I",
        message:
          "Three years in the game now, and HIGH seems more alive than ever. Dark, genderfuck,techno ritual, but also sex positivity, awareness, community. Alongside a few other vital collectives in town, HIGH is part of a network that’s shaping a new sensibility within the party landscape, often in opposition to mainstream club culture. What’s the core concept behind your project, and how did it come to life?",
      },
      {
        talker: "C.T",
        message:
          "I started thinking of HIGH in 2022 with the intention of creating exactly the kind of party I wanted, bringing together the elements I had liked at other parties where I felt very comfortable but not completely satisfied. After having enjoyed some situations that opened my mind to what was possible – for example in the snake pit of GEGEN, that for some years had hosted very experimental acts thanks to the curation of the visionary industrial techno musician A/Ona, or at the queer industrial techno party Discipline, at the queer underground party Interzone and the kinky queer party Boar, which only lasted for a couple of years – I saw how Berlin’s gentrification was making experimentations and radical experiences rarer and rarer and how the most popular queer techno parties were turning commercial and aiming at filling dance floors with consumers rather than at opening up our minds to new perceptions of the world, art and existence. Even in this context, I could still find parties where I felt comfortable for different reasons. On the one hand, there were queer parties where I really liked the crowd and awareness, but where I didn't feel very in tune with the music, and on the other hand, there were parties focused on the music genres I like most, where I could get carried away by the dance, but where the dance floor was full of people who weren't on my wavelength, even at parties that tried to give space to FLINTA DJs and artists. And then there were events more focused on a kinky community where the music I like would have fit in perfectly, but there was no investment on musical research and booking. So the idea was to bring together a radical queer crowd, darker music genres like industrial techno and EBM, and an atmosphere focused on BDSM practices. Alongside these desires, there was of course also a criticism of commercial parties in the post-pandemic gentrification of Berlin. It was clear to me that both the queer and the techno scenes were being appropriated to produce a profitable entertainment industry, which for me was the opposite of why I go to a party, namely not simply to have fun, go back home and start the routine all over again, but to find an artistic proposal within a safer space that opens minds and leads to the creation of a community of shared joy. For me it’s important to remember that techno flourished in grassroots experiences, leading to moments of radical criticism with the temporary autonomous zones of raves, and that before that happened it had been born from the black, and queer, communities of post-industrial cities in the United States. So for me a successful party is a political party, not an event geared towards enriching promoters or glorifying DJs, and that’s what I had in mind when I started thinking of HIGH.",
      },
      {
        talker: "A\\I",
        message:
          "Another key element in parties like HIGH is the pursuit of a freer, though conscious, sense of individual expression within a safe space. That freedom extends to sexuality as much as to open consumption. In your opinion, what role does the altered state play within the sex positive techno scene? Can free consumption foster a more genuine, even safer, form of participation?",
      },
      {
        talker: "C.T",

        message:
          "To begin with, I don't believe that altered states of consciousness are produced solely through drug consumption. Altered states of consciousness can be achieved through many different techniques. The achievement of altered states of consciousness as an initiation, if you will, into a path of existential awareness is a very ancient practice. For me, a successful party leads to a path of this kind, a path that goes through an altered state of consciousness and is aimed at exorcising death and at living life in a more fulfilling way. And this path can be achieved through the use of psychedelic substances, but also through other practices such as sleep deprivation, fasting, reaching subspace in a BDSM session or even simply dancing for hours in a circle in a trance-inducing repetition of movements. Many traditional rituals predominantly use dance as a means of achieving an altered state of consciousness (and I should mention here that I was taking part in traditional Southern Italian dance rites before I was attracted to techno). In the pharmaco-pornographic era (to quote Paul Preciado), the achievement of such states is not restricted to few individuals which the people consider gifted with shamanic powers – now the “magic initiation” can be consciously hacked into to build moments of shared joy and pleasure that can be turned into the foundations of communities driven by awareness, solidarity and compassion. So I think that the achievement of altered states of consciousness is not so much about individual expression as about a collective journey in which everyone aims to reach a certain state together, the ego is suspended and the sense of existence as individuals is left behind in order to achieve a sense of shared liberation. In this sense, I would say that in the context of parties like HIGH sexual expression can lead to altered states of consciousness as much as substance use can pave the way to sexual liberation. These are only some of the elements of a wider formula – a formula whose purpose is the construction of a collective ritual rather than individual liberation. Of course, individual liberation is ultimately achieved as well, but only because there’s a community supporting the individual. So we are talking about a ritual that allows us to share collective joy and experiences, bringing about mutual empowerment and a change in our reality – a change in which everyone is freer to be themselves and everyone supports each other in overcoming dogmas and fixed rules. So if we approach the ritual with awareness – if we know why we consume, why we enter a dark room, why we engage in a BDSM session, if we know why we dance, what’s the purpose of this all – we can achieve a more genuine and safer form of participation, precisely because the goal is participation, not consumption.",
      },
      {
        talker: "A\\I",
        message:
          "Part of your artistic roots lie in the so-called Roma Est scene. Thinking of places like Fanfulla or Dal Verme, the latter forced to close in 2016 along with many other independent venues, following the enforcement of a Public Security Act dating back to 1931, during the Fascist era. Then as now, in Rome as in Berlin, independent spaces often remain the only possibility for collectives like HIGH to operate with real autonomy. To what extent can independent culture coexist with the mainstream? And how can its survival be safeguarded in a city increasingly shaped by market logic?",
      },
      {
        talker: "C.T",
        message:
          "It’s true – today I’m certainly connected to Roma Est, and it all started with a strong fascination towards Forte Prenestino, a historical squat in a 19th century fortress in the middle of Rome East. And I find it interesting that you mention this area of Rome as the origin of my “artistic” roots, as that part of Rome is currently one of the few places of resistance to the neo-fascist drift that has engulfed Italy in the 2010s and 2020s. The truth is, though, that my artistic, and political, roots date back to long before my contacts with Roma Est, and are primarily linked to the squatting and self-management experiences of the 1990s and 2000s and to the awareness of what these experiences made possible in terms of creativity, sociality and direct action all over Italy in those years. It was through those experiences that I was introduced to the ideas of temporary autonomous zones, DIY, hacking, feminism, anti-prohibitionism and anti-psychiatry, just to name a few. And I got in touch with these ideas first through social centres in Naples, Bologna and Northern Italy and only after that in Rome. And I can see how certain successful parties in Berlin were created by people who came from these experiences (in Italy and other countries) and owe much of their existence to these realities of occupation and radical politics. The first person that comes to mind is Francesco Macarone Palmieri, aka Cichitone, aka DJ Warbear, one of the founders of GEGEN who, before moving to Berlin, had organised queer parties at Forte Prenestino, and who in the 2000s was the co-editor of Torazine, an amazing underground fanzine linked to raves, anti-prohibitionism and radical queer politics. And I can see how the success of certain parties in Berlin in the 2000s and 2010s was due to the skills that were developed by creating sociality and underground culture in social centres and TAZs. Without these experiences, some of the most popular parties in Berlin at the moment would probably not have existed or would have had a completely different history and vibe. So now that those autonomous spaces are shrinking both in Italy and in Berlin, and everything is becoming more regulated and profit-oriented, I can see how the artistic scope of techno parties is shrinking as well. Nowadays, many DJs and musicians are not booked for the music they play but for how much they make people dance and consume, for how many people they attract, how many followers they have on Instagram, whether they are influencers or not. Thus I believe that without self-management and with capitalism as the main driving force, we are losing a lot of genuine creativity and radical artistic scope, if we consider true art as a critique of reality and the existing order. So now we need to find spaces that allow us to keep creating in an independent and radical manner – spaces that make self-management still possible – by renting small venues for example, by reducing the scale of our events, by recognising that only by aiming at reaching smaller groups of people can we create moments of true creativity.",
      },
      {
        talker: "A\\I",
        message:
          "Playing music as Cocktail Twinks, promoting consciousness (and unconsciousness!) through HIGH, or tripping out dancefloors alongside Pixi in your visual project Pixelflowers, you seem to invest a deep sense of self in everything you create, a reflection of your genuine connection to your community. In this sense, how much of your identity is shaped by what you do? And to what extent the environment we inhabit and the culture we belong to influence the existence of those who live art at such a deep level?",
      },
      {
        talker: "C.T",
        message:
          "I must say that I don’t find it particularly easy to define the word identity and to describe what my own identity is about in the first place! However, I can say that only when I connected with a radical queer community did I begin to feel welcome and free to publicly express both my nonbinary identity and my artistic creativity. Previously, in the absence of a radical queer community, this had been very hard for me, to the point of reaching a state of strong alienation and never feeling completely comfortable with the people around me, no matter how close they were as friends and no matter how many initiatives I organised with them. It was only when I arrived in Berlin and participated in the rituals that I now create, through music, VJing and organising queer parties, that I was able to feel empowered and make profound choices for my entire life. So the environment I inhabit and the culture I belong to totally influence my existence and my creativity. Without the creativity I have been able to experience in this context, and without the altered states of consciousness that have opened up to me thanks to the rituals of Berlin's techno and queer scenes, none of what I am experiencing would be possible, and probably not being able to imagine a future of joy would have led me to a state of depression and alienation that I now see afflicting a large part of the population of the advanced capitalistic world in the grip of rampant authoritarianism. To quote another important source of my reflections on all this – Raving by McKenzie Wark, “I wish Mark [Fisher] had joined us”.",
      },
    ],
  },
  {
    id: "XIX",
    edition: "[dia/log]",
    name: "Mix Series XIX [dia/log] - Pris V & Jinx",
    artist: "Pris V",
    date: "17th September 2025",
    artwork: "Bece",
    coverImage: "/images/mixSeries/19/prisV_coverImage.jpg",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-xix-dia-log-pris-v-jinx?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2172106485&color=%23000000&inverse=true&auto_play=true&show_user=true",
    description: `Soon to play at out next event on the 4th of October, Pris V is an Argentinian musician (half of @contescruels) and DJ with a nocturnal taste rooted in underground tape culture and the 80's wave aesthetics. Among the many active projects she is involved in, she founded and curates the Jinx party series in Schokoladen, one of the most iconic spaces in town.

Listen to her very personal mix of oddities and curved grooves and read more about Jinx, Schokoladen and her future plans in our short interview on IG.`,
    dialog: [
      {
        talker: "A\\I",
        message:
          "Resident DJ at Nocturnal Emissions, founder of Jinx and Avant Post and one half of Contes Cruels. Despite having lived in Berlin for only few years, your influence on the local wave scene is already tangible. What brought you here, how did you first become involved in the city’s soundscape, and what’s the common thread running through these projects?",
      },
      {
        talker: "P.V",
        message:
          "As a teenager I was obsessed with German music from the 70s and 80s, so my connection dates from that time. A couple of years later I started running clandestine parties in abandoned spaces like a burnt-out house, a former car wash, an old slaughterhouse. On the main floor I would play mostly NDW, while in other rooms you could stumble upon installations like an entire Faust or Monte Cazazza record played all night from an old cassette player. At the same time, I was also playing in bands inspired by the Düsseldorfer Schule, among others. I immersed myself so deeply in all this that when I eventually moved to Berlin, it felt like a déjà vu or as if I had already been here before. I guess the common thread through my projects is an interest in subcultures, marginal spaces, and sounds that challenge norms.",
      },
      {
        talker: "A\\I",
        message:
          "A constant search driven by a genuine love for the hidden and the obscure seems to be the formula behind both your mixes and the success of your events. What elements matter most to you in a record, and how do you approach the decks—whether playing for a crowd or recording a mix like the one you prepared for our Mix Series?",
      },
      {
        talker: "P.V",
        message:
          "I look for albums that sound and feel refined yet deranged, balance experiment with raw textures, always with a darker imprint. I’m also drawn to rhythms and patterns that come from outside the white/Western canon, they bring a complexity and depth that expands how a track can live on a dancefloor. Beyond that, I’ve always been fascinated by the hidden and the obscure, both in music and cinema.When approaching a set or a mix, it’s less about genre and more about atmosphere, dissonance, contrast. I’m more interested in creating a narrative than a seamless polish",
      },
      {
        talker: "A\\I",
        message:
          "Jinx, the party series you founded and curate, takes place at Schokoladen—one of Berlin’s oldest squats, which recently celebrated 35 years of history. Tell us more about the project: how did your connection with Schokoladen begin, and what does it mean to be part of such a respected and beloved institution?",
      },
      {
        talker: "P.V",
        message:
          "During my first years in Berlin, I met someone at Drugstore- a squat that sadly no longer exists- who was part of the Schokoladen collective. Soon after I began playing there and eventually founded my own post-punk, minimal synth & oddities night, Jinx, which I currently run.",
      },
      {
        talker: "A\\I",
        message:
          "Being involved in so many projects—from the parties you run or play at to Contes Cruels, with whom you released a striking debut EP this year—must require a certain level of planning. What’s next for you? Do you intend to continue balancing all of them, focus on something in particular, or even launch new projects?",
      },
      {
        talker: "P.V",
        message:
          "I’m currently focused on two main projects: the next Contes Cruels album and expanding Avant Post into new territory. With Contes Cruels, the new material moves deeper into the project’s concept, while Avant Post is growing beyond the party format into something larger. Stay de-tuned. ;)",
      },
    ],
  },
  {
    id: "XVIII",
    edition: "[dia/log]",
    name: "Mix Series XVIII [dia/log] - expediitn & De Blauwe Aanslag",
    note: "𝙇𝙞𝙫𝙚 𝙧𝙚𝙘𝙤𝙧𝙙𝙞𝙣𝙜 𝙛𝙧𝙤𝙢 𝙇𝙖𝙪𝙨𝙘𝙝𝙖𝙣𝙜𝙧𝙞𝙛𝙛, 𝘽𝙚𝙧𝙡𝙞𝙣 – 𝙈𝙖𝙮 1𝙨𝙩, 2025",
    artist: "expediitn",
    artistLink: "linktr.ee/expediitn",
    date: "13th August 2025",
    artwork: "Bece",
    coverImage: "/images/mixSeries/18/expediitn_coverImage.jpg",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/expediitn?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=8ca3cbdb046346d984a2eb4c7d1a013a",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2152421493&color=%23000000&inverse=true&auto_play=true&show_user=true",
    description: `First edition of [dia/log] by expediitn. Listen to the live recording their set at Lauschangriff and read our interview to know more about them, DBA and what link them to Bunker Records, Guy Tavarez and the Acid Planets parties in the squats of Den Haag.`,
    dialog: [
      {
        talker: "A\\I",
        message:
          "How did your connection to the noise and experimental electronic scene first emerge?",
      },
      {
        talker: "Ex.",
        message:
          "I can’t pinpoint the exact moment I began associating myself with the experimental scene. Since childhood, I’ve been drawn to unusual things with a dark undertone. Back in school, I listened to Siberian noise rock and avant-garde rock, but over time my curiosity grew, and I began digging through the depths of the internet in search of rare, sophisticated albums. In Ukraine, opportunities to build truly experimental and niche platforms are scarce so, after I moved in Berlin, I finally felt that I could contribute to this scene.",
      },
      {
        talker: "A\\I",
        message:
          "While researching your collective, De Blauwe Aanslag, we came across an intriguing description: “Berlin-based collective and label, that got the name bequeathed to use by Guy Tavares, erstwhile the name of the famous squat from The Hague’. Could you tell us more about DBA? What’s the philosophy driving the collective, how did it begin, and what’s the link with The Hague, Guy Tavares, and Bunker Records?",
      },
      {
        talker: "Ex.",
        message:
          "De Blauwe Aanslag is rooted in conceptualism and the desire to create a platform for free expression. Symbolism and certain aesthetic and ideological frameworks matter to us, and we maintain boundaries in visual style — but we also aim to remove any that feel unnecessary. An essential goal is to evoke a set of emotions in which each listener can find personal resonance, shaping their own meaning from what they see or hear. We welcome interpretations that diverge from our original intent — even more so when the result leaves a lasting impact. Guy Tavares, along with the events and music of Bunker Records, played an important role in shaping the label. At the time, I was still in Ukraine, but a group of like-minded people who became my friends later regularly traveled to The Hague from Berlin. Bunker succeeded in creating a deeply engaging community where music took on new colors. They offered strong support when we came up with the idea of spreading this “virus”; Guy even gave us permission to use the name of legendary squat in den Haague where he used to organize events. For our first compilation, The Street of the Holy Spirit pt. I & pt. II, we received music from artists connected to Bunker or the original squat, including Guy himself.",
      },

      {
        talker: "A\\I",
        message:
          "Impressive. Bunker Records boasts a history of over 30 years of militant presence in the scene and remains, for us, a constant point of reference. From the label itself to the Acid Planet parties held in the squats of The Hague, Bunker can be seen as one of the most legitimate contributors to articulating an underground ethos within the electronic dance movement. In this sense, Tavarez’s recognition towards you almost feels like an investiture to carry that torch forward. A formidable challenge, especially considering how much the times have changed. In this context, do you think it’s still possible to speak of an “underground”? Or has it become something that’s been sold back to us?",
      },
      {
        talker: "Ex.",
        message:
          "This topic has been discussed for decades, and most people deeply involved in niche scenes rarely change their views. In the 70s–90s, each underground movement — from British industrial to Siberian punk — brought something radically new, influencing the entire music industry, even commerce. Many of those artists became famous only years later, as their goal was to oppose mainstream culture.Today, there are countless releases in the genres of noise, industrial, noise rock, or any experimental genre that are referred to as “underground,” but many of them simply repeat what successful artists were doing decades ago(And I am by no means saying that artists do not do anything interesting or contribute anything of their own; I am talking about more global issues.). Unique works do exist, but they are the exception. Some projects have achieved recognition and pushed boundaries, but they are rare. To me, saying “the underground has been sold” is as wrong as saying “the underground is alive and thriving” and both are partly true. The underground of 30 years ago is gone, replaced by a scene with endless ways to share and discover music. Something new appears daily, yet it rarely changes our understanding of art. My criticism is aimed at those clinging to absolutes: the underground is alive, but it’s far from what it once was.",
      },

      {
        talker: "A\\I",
        message:
          "On the practical side, what are the main challenges of running a noise/experimental label in today’s climate?",
      },
      {
        talker: "Ex.",
        message:
          "This answer reflects my personal view, as I can’t speak for all three of us. The core issue is that music culture is shifting: the scene is changing, and while we have some understanding of how it worked before, the current rules are undefined and still taking shape. We never expected this project to bring us fame or major profit — but the question remains: how do we avoid fading away like so many other small projects?",
      },

      {
        talker: "A\\I",
        message:
          "How do you select artists or sounds for the label? What connects them?",
      },
      {
        talker: "Ex.",
        message:
          "The choice of artists for our releases directly reflects the label’s concept. We avoid strict genre limits — any artist can fit, as long as their work carries an ideology aligned with ours: encouraging listeners to reflect and challenge dominant culture. Our goal is to build a platform for collaboration and growth, bringing together both established and emerging artists. Personal taste plays a role, but our criteria are deliberately flexible and may change depending on the situation. What matters most is that the artist’s mindset is not in opposition to what we do.",
      },

      {
        talker: "A\\I",
        message:
          "What are your plans for Expediitn and De Blauwe Aanslag in the next year?",
      },
      {
        talker: "Ex.",
        message:
          "Regarding expediitn, I should clarify that it’s not a project but simply a creative pseudonym. I plan to keep it as my DJ alias and possibly release music under this name without a strict concept — not in a negative sense, just less conceptual. I’m also thinking of launching at least two other creative projects with clear ideas and defined musical boundaries. As for DBA, we’re planning a joint event with artists who once performed at the original squat, along with several other events — not only in Berlin. We already have material for future releases, and our plans include developing the platform further: starting our own podcast, releasing on vinyl for the first time (so far, we’ve only worked with cassettes), and more.",
      },
    ],
  },
  {
    id: "XVII",
    edition: "Malebolge",
    name: "Mix Series XVII - Fuerza Kontraria",
    note: "Live recorded in Ziegrastrasse 11, approx. thirty minutes after midnight the 16/6 at Autonoma Industriale",
    artist: "Fuerza Kontraria",
    date: "1st August 2023",
    artwork: "Still from L’Inferno (1911) - Edit SamLTV",
    coverImage: "/images/mixSeries/17/fuerzaK.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/mix-series-fuerzakontraria?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1579752014&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description: `Born in Santiago de Chile and based in Berlin, Fuerza Kontraria is the maniacal mind behind Kontralamkina, record label & channel focused on communication and exploration around magic.
                  Already part of the hometown industrial forces, Fuerza Kontraria brought to Berlin an obscure tradition that fuse sinisterly evocative noises with quadratic mind-tricks and industrial landscapes.
                  A new cult of the occult we are very happy to cross the paths with.`,
  },
  {
    id: "XVI",
    edition: "Malebolge",
    name: "Mix Series XVI - GHKC",
    artist: "GHKC",
    date: "30th November 2022",
    artwork: "Still from L’Inferno (1911) - Edit SamLTV",
    coverImage: "/images/mixSeries/16/ghkc.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-xvi-ghkc?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1393499950&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description: `Buenos Aires to Berlin GHKC delivers the sixteenth episode of our MIX SERIES with an hour long rolling mixture of noisy industrial textures, dynamic rhythms and melodic pads.
       Dark and bright alternation on wax for bodily pleasure and relief of the mind.`,
  },
  {
    id: "XV",
    edition: "Malebolge",
    name: "Mix Series XV - MazeDK",
    artist: "MazeDK",
    date: "3rd October 2022",
    artwork: "Still from L’Inferno (1911) - Edit SamLTV",
    coverImage: "/images/mixSeries/15/MazeDK.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-xiv-mazedk?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1355917426&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description: `MazeDK is a queer Polish DJ living in Berlin. She grew up listening to Underground Punk, EBM and Industrial.
        This musical upbringing heavily influenced the type of Techno she plays – fast, hard, relentless. Yet her sets centre on emotional messages and in each of them she creates a dark and exciting journey to follow.

        Track list:

        3SBAT - The Angel Of The Abyss [Soma Records]
        EXIX - Restwut [Self Release]
        Endlec - Unleash The Beast [Renegade Methodz]
        Slam + Rebekah - Believe In The Night [Soma Records]
        Anthro - Falcon [WRONGNOTES Records]
        EYRIS - Double Clutchin' [Green Fetish Records]
        Wallis - You Will Wish You Were Never Born [Jell Records]
        Inhalt Der Nacht & Echoes Of October - Fleischleben [Lebendig]
        Panternoise - Shuffle The Pandora (Crystal Geometry Remix) [Self-Release]
        Termination_800 - Mauler [Crave Tapes]
        Moth - My Generation Won't Listen Yours Anymore [Self-Release]
        Umwelt - Codebreaker [Monnom Black]
        HRD.303 - Feel My Body [Vast Perception]
        Ben Techy - Hostile Reference [WRONGNOTES Records]
        Arkhan - Nightstalker [Vast Perception]
        Laren Born As Rebels [Deestricted]
        VIVAY - 528hZ (RZVX remix) [PURE HATE 000]`,
  },
  {
    id: "XIV",
    edition: "Malebolge",
    name: "Mix Series XIV - Hålbå",
    artist: "Hålbå",
    date: "12th July 2022",
    artwork: "",
    coverImage: "/images/mixSeries/14/Hålbå.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-iv-halba?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1303766548&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description: `Love and hate, peace and war are sung in a sequence of futuristic drones that recall an orgasmic stupor.

        Alessio is not only a great producers and expert live performer: his sound research goes beyond the classic standards with which we are used to confronting ourselves with, bringing his awareness and his passion towards the sound mastery that many see, but few reach.

        Tracklist :

        Natalia Beylis - Handwriting Analysis
        Dave Phillips - To Death We All Go
        The Sooner The Better Constantine – Cosmos [Bedouin Records]
        Puce Mary – Gaba For Medea
        SØS Gunver Ryberg – Seadust [Sublunar Records]
        KMRU & Aho Ssan – Rebirth [Subtext Recordings]
        Cares - Oxidized The City [World Canvas]
        Drew McDowall –Agalma V (feat. Kali Malone) [Dais Records]
        Uboa – Lay Down & Rot Amphior
        Imaginary Shelter [Glacial Movements]
        Ronce – My Anger Has Roots [Promesses]
        Laura Lair – Carry Me Home
        Aseptic Stir- Pattern Ode
        Pan Daijing - Part Four -A Deafening Hum
        Damien Dubrovnik – Arrow 2 [Posh Isolation]
        Pechblende – Cities & Desire [Amulet Of Tears]
        Mats Erlandsson – Synthetic Crystal [Portals Editions]
        Coalminer - Ashen Paradise [Basement Corner Emissions]
        SEC_ - Love [A Flooded Need]
        Roly Porter – An Open Door [Subtext Recordings]
        Hålbå – La Voce Della Resistenza [Sector Audio]
        Hålbå - Untrue Love [Glioblastoma Records] [UNRELEASED]

        `,
  },
  {
    id: "XIII",
    edition: "Malebolge",
    name: "Mix Series XIII - EYES GONE",
    artist: "EYES GONE",
    date: "2nd February 2022",
    artwork: "Still from L’Inferno (1911) - Edit SamLTV",
    coverImage: "/images/mixSeries/13/EYESGONE.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-xiii-eyes-gone?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1208349982&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description: `The 13th Mix series of AI comes from EYES GONE, who offers an hour of sound exploration outside the usual schemes and habits related to the purely techno world. Sweetness and melancholy come together in a unison of sounds and decadent rhythms, like at the end of a pleasant life experience.

      A minimalist side emerges from the artist, who is able to propose his most hidden and unexpected side, which fades between esotericism and invocations to times that escape the rules of our industrial universe.`,
  },
  {
    id: "XII",
    edition: "Children of the Red",
    name: "Mix Series XII - About:Kaos & Ecce",
    artist: "About:Kaos & Ecce",
    date: "28th December 2021",
    artwork: "Untitled - Cat Raia",
    coverImage: "/images/mixSeries/12/kaos.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-vol-xii-aboutkaos-ecce?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1186215526&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description: `12/12. @Aboutkaos & Ecce closes the first cycle of our Mix Series with a front-left set of hard hitting techno and fast forward breaks. 80 minutes of rhythm and rebellion recorded and home delivered with expertise in the last day of the year, for your self-enjoyment or collective enhancement purpose.`,
  },
  {
    id: "XI",
    edition: "Children of the Red",
    name: "Mix Series XI - SUNDS",
    artist: "SUNDS",
    date: "29th November 2021",
    artwork: "Untitled - Cat Raia",
    coverImage: "/images/mixSeries/11/SUNDS.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-vol-xi-sunds?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1168878640&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description: `The 11th instalment of this year is mixed by our co founder @SUNDSyndrome, expert musician and polystumentist.

      Dark drones and obscure texture characterise the first part of his set, builded with industrial elements and a rhythmic hammer approach, revealing the punk influences that brings him to construct his own sound.

      Industrial techno shivers are the basic of this emotional mix, that sweats passion like a body inflamed by extrasensory pleasures.`,
  },
  {
    id: "X",
    edition: "Children of the Red",
    name: "Mix Series X - NU YORCK",
    artist: "NU YORCK",
    date: "31st October 2021",
    artwork: "Untitled - Cat Raia",
    coverImage: "/images/mixSeries/10/NUYORCK.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-x-nu-yorck?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1151024935&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description: `Vol. X of our podcasts serie is dispatched by one third of Autonoma Industriale’s foundation. Nu Yorck behind the decks presenting an abysmal futuristic Techno set. A deep dive into telluric rumbles and manic grooves.
Within this fine and unique selection you will also hear an unreleased forthcoming track from the label catalogue.`,
  },
  {
    id: "IX",
    edition: "Children of the Red",
    name: "Mix Series IX - Nacasat + Desert Drone",
    artist: "Nacasat + Desert Drone",
    date: "28th September 2021",
    artwork: "Untitled - Cat Raia",
    coverImage: "/images/mixSeries/9/Nacasat.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-ix?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1132391293&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description:
      "Our ninth instalment in the Autonoma Industriale mix series comes from the established collaboration between one of our founding member (Desert Drone / Ex Controllata Enichem / Anxiety Pattern Generator) and a long time friend and collaborator, Nacasat. The duo regularly delivers outstanding industrial techno around Berlin, always live and improvised. A true Autonoma Industriale landmark.",
  },
  {
    id: "VIII",
    edition: "Children of the Red",
    name: "Mix Series VIII - BPF",
    artist: "BPF",
    date: "31st August 2021",
    artwork: "Untitled - Cat Raia",
    coverImage: "/images/mixSeries/8/BPF.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-vol-viii-bpf?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1116524116&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description:
      "The 8th Volume of our Mix series contains excerpts from BPF sets on Radio Banda Larga (Torino) and Atelier de l'étoile (Besançon). Recorded by using solely physical formats (CD, vinyl and tapes) which are found, given for free and/or exchanged at DIY shows.",
  },
  {
    id: "VII",
    edition: "Children of the Red",
    name: "Mix Series VII - DJ Control Delete",
    artist: "DJ Control Delete",
    date: "29th July 2021",
    artwork: "Untitled - Cat Raia",
    coverImage: "/images/mixSeries/7/DJControlDelete.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-vol-vii-dj-control-delete-set-ai-190621?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1096224205&color=%23ff5500&inverse=true&auto_play=true&show_user=tr",
    description:
      "Tom Schwarz is the seventh artist to participate in our Mix series, recorded live at Autonoma Industriale 190621, Extreme, intense, Control Delete wraps body and mind in one of the most beautiful and overwhelming sets played in our events. He is not just a DJ, but an expert musical explorer able to Capture musical moments within an unstable system that keeps collapsing on it self. The livesets with the Sinister Sveta project are exceptional, in a hypnotic evolution of noises and loops, sealed by ancient and disturbing voices.",
  },
  {
    id: "VI",
    edition: "Children of the Red",
    name: "Mix Series VI - Samin Son",
    artist: "Samin Son",
    date: "22nd June 2021",
    artwork: "Untitled - Cat Raia",
    coverImage: "/images/mixSeries/6/SAMINSON.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-vol-vi-samin-son?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1073830891&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description: `Skate In Paradise Justin Hugh Williams
Presented by 93n3r4tør(11111111111)saminsonstudioeditallnona

Semi-organised collage mash-up chaos gift dosage of post punk noise music concrete techno industrial, Samin Son super sonic exploration's .

TRACK-ARTIST(s)-ALBUM-DATE-(GENRE/STYLE/TAGS)-LOCATION-LABEL
These following amazing tracks were not necessarily played at their original forms although a lot of them still may sound very similar and one or two it may seem more decontrstructed

We Are Meat - ハナタラシ [Hanatarash] - 1988 Electronic, Rock, Noise-Japan-Alchemy Records.(2) - ARLP-018
A New Radiance Springing Forth From Inside The Light - Keiji Haino, Jim O’Rourke, Oren Ambarchi - Now While It's Still Warm Let Us Pour In All The Mystery = まだ　温かい内の　この今に　全ての謎を　注ぎ込んでしまおう
- 26 Apr 2013 - Rock - Experimental - Australia - Black Truffle - BT09, Medama Records - mr04
Resurrection River - VVV*(Vega & Vaino & Vaisanen) - May 2005 - Electronic Leftfield, Minimal, Experimental - Austria - Mego - MEGO 075
Post-Soviet Models - Tzusing - 東方不敗
- 28 Feb 2017 - Electronic - Techno, EBM - US - L.I.E.S. Records - LIES-092
The Hacker - Clock DVA - Buried Dreams - 1989 - Electronic - Industrial - US - Wax Trax! Records - WAX 7094
Fokus - Schwefelgelb - Dahinter Das Gesicht - 17 Feb 2017 - Electronic - Techno, EBM, Industrial - Germany - aufnähme + wiedergäbe
Mad - CoH Plays Cosey* – CoH Plays Cosey - Oct 2008 - Electronic - Musique Concrète, Spoken Word, Experimental, Poetry - Germany - Raster-Noton - R-N 91
Hamburger Lady - Throbbing Gristle - Throbbing Gristle’s Greatest Hits (Entertainment Through Pain) - Oct 1981 - Electronic - Industrial, Experimental - US - Rough Trade - ROUGH US 23
Smile - The Fall - Perverted By Language - Dec 1983 - Rock - New Wave, Post-Punk - UK - Rough Trade - ROUGH 62
HANATARASH YouTube live at Bears, Osaka, Japan www.youtube.com/watch?v=L7p_C9OlN40
Hammer II - BEEATSZ v2.0999z - Cog - 7 Aug 2020 - #experimental #core #free #noise #other #turin #berlin - Brainpussyfication
Anoda Rava - G I L T - Guillaume Lobmeyer and Thiébault Imm - recorded in July 2018 - Hardware Only / Live Set - Techno, no compromises #berlin
Stray Dogs - Broken English Club - The English Beach - 21 Jun 2017 - Electronic - Techno, EBM, Industrial, Experimental - US - L.I.E.S. Records - LIES-094
Bright Black - Death Qualia - Fanged Contradiction - 2020 - Electronic - Techno, Experimental, Industrial, Speedcore, Noise, Ambient
Guest Worker - Nacasat - Chemring - 24 Dec 2020 - Electronic - Techno, Industrial - Berlin - Autonoma Industriale
Parataxon - Osheyack - Empty Hell - 11 May 2018 - Electronic - Techno, Industrial, Experimental - China, SVBKVLT - SBKT021
Evil Knevil - Human - Electro Boogie - Shape Generator - 29 Mar 1999 - Electronic - Breakbeat, Electro, Synth-pop - Germany - Studio !K7 - !K7075LP
Integer / Along The Synthetic River I (Samuel Kerridge Remix) - Gooooose - Rusted Silicon - 17 May 2019 - Electronic - Industrial - China - SVBKVLT - SBKT027
Atmosphere - Joy Division - Atmosphere - Oct 1980 - Rock - New Wave, Post-Punk - Factory - FACUS 2/UK, Factory (US) - Facus 2`,
  },
  {
    id: "V",
    edition: "Children of the Red",
    name: "Mix Series V - Bianco Negativo",
    artist: "Bianco Negativo",
    date: "28th May 2021",
    artwork: "Untitled - Cat Raia",
    coverImage: "/images/mixSeries/5/BiancoNegativo.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-vol-v-bianco-negativo?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1057258132&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description: `A selection of unreleased, unnamed, obscure tracks ripped of old tapes from the likes of Bianco Negativo.
Founders of Marguerite Records and Tocca il futuro, Davide and Claudio already accomplished the support of great artists like Reka, Intergalactic Gary, Alessandro Adriani, Pasiphae and many more.
Their monthly show on Rinse France is a fixture for New Beat, Industrial, Post Punk and Synth-Pop passionates, with regular guests such as Josh Cheon, Borusiade, Robert Bergman and Violet Poison.`,
  },
  {
    id: "IV",
    edition: "Children of the Red",
    name: "Mix Series IV - Nekrobot",
    artist: "Nekrobot",
    date: "24th April 2021",
    artwork: "Untitled - Cat Raia",
    coverImage: "/images/mixSeries/4/NEKROBOT.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-vol-iv-nekrobot?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1035799510&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description: `The umbral and dusky character Nekrobot takes the spot in our April Mix Series. The notorious Berlin based experimental musician and DJ from Athens, delivers a delirious and stunning harsh Podcast, a journey into a metal factory. As he describes it: An expression of disorder through sounds.
      Proper, "according to the actual situation"

      Tracklist
      1 Iron Sight - Weekend
      2 Damien Dubrovnik - Penis Corset
      3 Consumer Electronics - Co-Opted
      4 Dive - Back To Back
      5 Tanz ohne Musik - Atrraction
      6 group A - Circulation (Hiro Kone Remix)
      7 Celluloïd Mata - At Bunkers
      8 Vainio Väisänen Vega - Sick Sick USA
      9 Ars Moriendi - Armageddon
      10 Militia - Die Theorielosigkeit des Anarchismus
      11 Pharmakon - Transmission
      12 Hydrone - Disorientation Emerge
      13 Sudden Infant - Angelic Agony`,
  },
  {
    id: "III",
    edition: "Children of the Red",
    name: "Mix Series III - Nuisance777",
    artist: "Nuisance777",
    date: "31st March 2021",
    artwork: "Untitled - Cat Raia",
    coverImage: "/images/mixSeries/3/NUISANCE777.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-vol-iii-nuisance777?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1019731885&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description: `A dystopic, 90 minutes excursion in the post-rave era, where the Machine gained the control, the human is persecuted and the last, abandoned factory rise as the church of a new, undisputed emperor of Techno.
The third episode of Autonoma Industriale Mix Series comes from NUISANCE777, the Israhell/Berlin based DJ and producer part of LNS Soundterror disorganization.`,
  },
  {
    id: "II",
    edition: "Children of the Red",
    name: "Mix Series II - Bionihil",
    artist: "Bionihil",
    date: "27th February 2021",
    artwork: "Untitled - Cat Raia",
    coverImage: "/images/mixSeries/2/BIONIHIL.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-mix-series-bionihil?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A994349311&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description: `Mix of #Bionihil's unreleased home recordings: from the recordings in Chemnitz (karl-marx-stadt) in 2007 to the ones made in Valencia and in the mountains, to Berlin phase with unreleased AMOR track, flamenco collaboration with Alberto Santacruz (DIY1990, ALTAR) adding a vocal improvisation on traditional Belarusian folklore following recitation of the poem by Belarusian poet Danuta Bichel-Zahnietava. Ending with pandemic classic guitar exploration.

"I wanted to give space for a presence of Belarusian language to make attention on the current political situation in Belarus where government is shooting down the peoples voices." Bionihil`,
  },
  {
    id: "I",
    edition: "Children of the Red",
    name: "Mix Series I - Hausverboti",
    artist: "Husverboti",
    date: "21st January 2021",
    artwork: "Untitled - Cat Raia",
    coverImage: "/images/mixSeries/1/HAUSVERBOTI.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/autonoma-industriale-podcast-vol-i-hausverboti?in=autonoma-industriale/sets/mix-series",
    soundcloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A969822115&color=%23ff5500&inverse=true&auto_play=true&show_user=true",
    description: `First Mix Series of Autonoma Industriale by Hausverboti

Artwork: Cat Raia

Track list:

Draag - Redrum
Ice Cube - I’m Scared (Insert)
Interferon - Poison Barbs (Shrouds Remix)
ANFS - VPA
SUNDS - Denation
Unhuman / Petra Flurr - Had Enough
Sawf - Menete
NX1 - BT3
Diagenetic Origin - Born Again
Arnaud Rebotini & David Carretta - OM PSG
Alessandro Adriani & Cosimo Damiano - Flashblind
Nacasat - Torturing Test
Ogmah - Torture
JK Flesh - Chelmsley Wood
I Murdered - Sins
Reeko - Desfile Funebre De Rosas
Vulkanski - Stalking Caracal
JK Flesh - The Body Is Not Real
YURA YURA - Brume
Reeko - Cyberpunk
Orphx - What Will Burn`,
  },
];

export default mixSeriesData;
