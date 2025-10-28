type Dialog = {
  talker: string;
  message: string;
};
export type MixSeriesDataType = {
  id: Number;
  name: String;
  artist: String;
  artistLink: String;
  coverImage: String;
  images?: String[];
  soundcloudLink: String;
  description: String;
  isDialog: boolean;
  dialog?: Dialog[];
};
const mixSeriesData: MixSeriesDataType[] = [
  {
    id: 18,
    name: "Mix Series XVIII [dia/log] - expediitn & De Blauwe Aanslag",
    artist: "expediitn",
    artistLink: "linktr.ee/expediitn",
    coverImage: "/images/mixSeries/18/coverImage.png",
    images: undefined,
    soundcloudLink:
      "https://soundcloud.com/autonoma-industriale/expediitn?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=8ca3cbdb046346d984a2eb4c7d1a013a",
    description:
      "𝐀𝐈-𝐌𝐢𝐱 𝐒𝐞𝐫𝐢𝐞𝐬 𝐗𝐕𝐈𝐈𝐈 [ 𝐝𝐢𝐚 / 𝐥𝐨𝐠 ] – 𝐞𝐱𝐩𝐞𝐝𝐢𝐢𝐭𝐧 & 𝐃𝐞 𝐁𝐥𝐚𝐮𝐰𝐞 𝐀𝐚𝐧𝐬𝐥𝐚𝐠 𝙇𝙞𝙫𝙚 𝙧𝙚𝙘𝙤𝙧𝙙𝙞𝙣𝙜 𝙛𝙧𝙤𝙢 𝙇𝙖𝙪𝙨𝙘𝙝𝙖𝙣𝙜𝙧𝙞𝙛𝙛, 𝘽𝙚𝙧𝙡𝙞𝙣 – 𝙈𝙖𝙮 1𝙨𝙩, 2025 Listen to the live recording of expediitn at Lauschangriff on our Soundcloud and read our interview to know more about them, DBA and what link them to Bunker Records, Guy Tavarez and the Acid Planets parties in the squats of Den Haag.",
    isDialog: true,
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
];

export default mixSeriesData;
