import type { TypeNumber, InstinctType } from '../../types';

export interface RelationshipStory {
  type1: TypeNumber;
  type2: TypeNumber;
  title: string;
  subtitle: string;
  narrative: string;
  subtypeVariations: {
    instinct: InstinctType;
    forType1: string;
    forType2: string;
  }[];
  growthMoment: string;
  reflection: string;
}

export const relationshipStories: RelationshipStory[] = [
  // === SAME-TYPE RELATIONSHIPS ===
  {
    type1: 1, type2: 1,
    title: "The Double Standard",
    subtitle: "When two perfectionists meet",
    narrative: `They met over a shared cause—perhaps organizing a community garden, or fighting for policy reform at work. The attraction was immediate: finally, someone who cared as much as they did. Someone who noticed when things were done sloppily. Someone who understood that standards matter.

The first months were intoxicating. They finished each other's sentences about what needed to be improved. They made lists together. They shared the secret relief of finding someone who also felt the weight of an imperfect world.

But then came the first disagreement about how to load the dishwasher. Or how to organize the pantry. Or the right way to address a complaint. What seemed like alignment revealed itself as two parallel standards, similar but not identical. Each One was certain their method was the objectively correct one.

The inner critic that each had spent their life managing suddenly had a target besides themselves. Small corrections crept in. "That's not how you do it." "You missed a spot." The same perfectionism that drew them together now created a constant, low-level evaluation that made neither feel good enough.

The saving grace of this pairing is their shared integrity. When they can stop competing over who is more right and start acknowledging their shared struggle—that both are driven by an inner voice that says "you should be better"—something softens. The real intimacy comes when one admits to the other: "My inner critic is so loud today." And the other says: "Mine too."`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "The SP One focuses their perfectionism on material security—the home must be maintained just so, health routines optimized, finances in order. Two SP Ones may bond deeply over practical standards, but compete over whose system for managing the household is superior.",
        forType2: "When two SP Ones partner, the home becomes an anxious perfection project. The gift is mutual understanding of the worry underneath—the sense that survival depends on getting things right."
      },
      {
        instinct: 'so',
        forType1: "The SO One holds strong opinions about how groups and society should operate. Two SO Ones create a powerful advocacy partnership, but may lecture each other about the 'correct' position on issues.",
        forType2: "The challenge for two SO Ones is who gets to be the moral authority. The gift is shared passion for making the world better—when they can be on the same team."
      },
      {
        instinct: 'sx',
        forType1: "The SX One channels intensity into reforming their intimate relationships. Two SX Ones experience passionate connection, but may focus zealously on improving each other.",
        forType2: "This pairing has the most heat but also the most potential for mutual criticism. The growth is learning that love doesn't require perfection."
      }
    ],
    growthMoment: "Growth happens when both Ones can sit together with something imperfect—a messy room, an unfinished project, their own flawed humanity—and choose acceptance over criticism. When they stop trying to be right and start being real.",
    reflection: "Where in your relationship have you confused 'being right' with 'being close'? What would it mean to let something be good enough?"
  },

  {
    type1: 2, type2: 2,
    title: "The Giving Competition",
    subtitle: "When two helpers try to help each other",
    narrative: `Everyone said they were the sweetest couple. So generous. So caring. So thoughtful about everyone else's needs.

What no one saw was the silent competition underneath. Each Two was determined to be the more giving one. "I'll get that." "No, let me." "You sit down, I'll handle it." What looked like mutual care was actually a battle for the helper role—because neither knew how to be the one who receives.

The dynamic revealed itself during illness. When one Two got the flu, they both panicked—but for opposite reasons. The sick one couldn't bear being dependent, kept insisting they were fine, tried to get up and make tea for their partner. The well one hovered anxiously, their identity suddenly shaky because their partner didn't seem to need them.

The fights, when they came, were confusing to outsiders. "You never let me do anything for you!" "You're always helping me like I can't take care of myself!" Both accused the other of exactly what they themselves were doing—avoiding their own needs by focusing on giving.

The breakthrough came on a quiet Sunday. One Two finally said: "I'm exhausted. I don't want to take care of anyone today. I just want to sit here and have someone take care of me." It was terrifying to admit. And the other Two, instead of rushing to fix it, sat down and said: "Me too."

For the first time, they received together. Just two tired people, letting themselves be human.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "The SP Two is more guarded about their giving, wanting to attract care without appearing needy. Two SP Twos may circle each other warily, each appearing charming but self-sufficient.",
        forType2: "This pairing can actually be healthier than it sounds—both have better boundaries. The challenge is that neither may initiate vulnerability."
      },
      {
        instinct: 'so',
        forType1: "The SO Two gives to gain social influence and position. Two SO Twos may compete for who is more indispensable to their community, creating a power-couple dynamic.",
        forType2: "The risk is that the relationship becomes a performance of generosity. The gift is shared social mission when they unite their networks."
      },
      {
        instinct: 'sx',
        forType1: "The SX Two focuses all their giving on one special person. Two SX Twos create intense, almost merged bonds—but may both be giving to receive.",
        forType2: "This is the most emotionally intense version. The growth comes when both can honestly say what they need instead of trying to earn it through giving."
      }
    ],
    growthMoment: "Growth happens when both Twos can be needy together without anyone rushing to fix it. When they can receive without immediately paying it back. When they discover that being loved isn't earned through service.",
    reflection: "When was the last time you truly received something without calculating what you owed in return?"
  },

  {
    type1: 3, type2: 3,
    title: "The Power Couple Illusion",
    subtitle: "When two achievers merge identities",
    narrative: `On paper, they were perfect. Two successful, attractive, driven people who made everyone wonder how they found each other. Their social media presence was flawless. Their dinner parties were legendary. They climbed together—promotions, networking, the right friends in the right places.

What no one saw was the emptiness they felt when the door closed.

They had fallen in love with each other's image. He admired how effortlessly she commanded a room. She admired his strategic mind and polished ambition. But as the relationship deepened, a troubling question emerged: who was behind the image? And worse—would that person be enough?

The avoiding began subtly. Too busy for deep conversations. Filling every moment with activities, goals, events. When they were alone together, they talked about accomplishments. Analyzing performance reviews. Planning the next move. The conversation stayed safely on the surface.

The crisis came when one of them failed publicly. A layoff. A project gone wrong. Suddenly, the performer had nothing to perform. And the partner didn't know who they were looking at.

"I don't know if I can still love you if you're not successful," one admitted in a brutal moment of honesty.

It was the most real thing either had ever said.

The healing required them to fail together. To let each other see the shame. To discover that behind both their polished exteriors were two exhausted people who desperately wanted to be loved for something other than their accomplishments. And slowly, terrifyingly, to show each other who that person was.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "The SP Three achieves through tireless hard work, often not looking like a typical Three. Two SP Threes may create a workaholic partnership where both are too busy being productive to connect.",
        forType2: "The irony is that both value substance over flash—but may still miss intimacy in favor of accomplishment."
      },
      {
        instinct: 'so',
        forType1: "The SO Three achieves through social status and recognition. Two SO Threes create the classic 'power couple'—impressive to everyone, potentially lonely in private.",
        forType2: "The question this pairing must ask: Is our relationship real, or just our best performance?"
      },
      {
        instinct: 'sx',
        forType1: "The SX Three achieves through personal charisma and being attractive. Two SX Threes each want to be the prize—this can create admiration but also competition.",
        forType2: "This pairing may bond through mutual magnetism but struggle when the attraction becomes about who is more desirable."
      }
    ],
    growthMoment: "Growth happens when both Threes can be unsuccessful together and still feel loved. When they can show up without a highlight reel. When 'being' starts to matter more than 'achieving.'",
    reflection: "If you couldn't list your accomplishments, how would you describe yourself to someone you loved?"
  },

  {
    type1: 4, type2: 4,
    title: "The Beautiful Darkness",
    subtitle: "When two romantics recognize each other",
    narrative: `They saw each other across a crowded room and knew. There was something in the eyes—a depth, a sadness, a recognition of the ache that others seemed not to feel. "Finally," each thought, "someone who understands."

The early relationship was intoxicating. Poetry at 2 AM. Shared tears over beautiful music. Long conversations about longing, meaning, the tragedy of ordinary life. Each felt truly seen for perhaps the first time.

But then a strange competition emerged. Whose pain was deeper? Whose sensitivity more refined? Whose artistic vision more authentic? Two Fours together can create a subtle contest over who is more special in their suffering.

"You don't understand what I'm going through," one would say, and the other would feel crushed—weren't they the one who was supposed to finally understand? The uniqueness that drew them together became a barrier. Each Four was so focused on their own inner landscape that they sometimes forgot to actually see the other.

The arguments were operatic. The reconciliations were tearful and beautiful. The cycle became almost comfortable—more alive in the drama than in ordinary moments.

The real growth came when they tried something terrifying: being boring together. No crisis. No artistic project. No emotional intensity. Just two people sitting on a couch on a Tuesday, watching a mediocre show.

"Is this okay?" one asked.

"I don't know. It feels weird."

"Maybe we could try just being here. Without it being meaningful."

It was the most radical thing either had ever attempted.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "The SP Four endures suffering stoically, showing tenacity rather than drama. Two SP Fours may actually create a stable partnership—both understand hidden depths and don't demand emotional display.",
        forType2: "The challenge is that neither may express what they need. The gift is mutual respect for silent suffering."
      },
      {
        instinct: 'so',
        forType1: "The SO Four compares themselves unfavorably to others, focusing on shame and belonging. Two SO Fours may commiserate about being outsiders—but risk reinforcing each other's sense of deficiency.",
        forType2: "The healing comes when they can feel like they belong—at least to each other—without requiring the outside world's validation."
      },
      {
        instinct: 'sx',
        forType1: "The SX Four expresses envy as competition and emotional intensity. Two SX Fours create a passionate, stormy relationship—ecstatic heights and devastating lows.",
        forType2: "This pairing is the most dramatic. Growth means learning that ordinary love is not less real than extraordinary passion."
      }
    ],
    growthMoment: "Growth happens when both Fours can find beauty in ordinary moments together. When they can be present without needing the relationship to be remarkable. When they choose contentment over longing.",
    reflection: "What if the most profound thing about your relationship isn't what's missing, but what's already here?"
  },

  {
    type1: 5, type2: 5,
    title: "The Parallel Universes",
    subtitle: "When two investigators share space",
    narrative: `They didn't need to talk much. That was the first relief.

Both had spent their lives with people who wanted more—more emotion, more connection, more words, more presence. And here was someone who understood that being in the same room, each absorbed in their own thoughts or books, was a form of intimacy.

Their relationship looked strange to others. Long silences. Separate interests. Hours spent in the same house without speaking. Friends worried it was coldness, but both Fives knew it was comfort. No demands. No intrusions. Just two minds, coexisting.

The trouble came slowly. Months could pass where neither initiated a real conversation. Important things went unsaid because neither wanted to disturb the equilibrium. The relationship became a comfortable parallel existence—so comfortable that intimacy almost disappeared.

"I don't know what you're feeling about us," one Five finally said. It took tremendous effort to form the words.

"I don't know either," the other admitted. "I haven't been paying attention."

They realized they had created the perfect Five environment—so much space that they'd floated apart entirely. Two people who feared being overwhelmed had created a relationship where nothing could reach them. Including each other.

The repair required scheduling. It felt absurd—putting "Talk about feelings" on a calendar. But for two Fives, structure provided safety. They learned to share one emotion each week. To ask one probing question. To tolerate the discomfort of being known.

The intimacy they built was quiet but real. Not effusive. Not demonstrative. But present. Two people who finally let each other in, one small opening at a time.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "The SP Five retreats to defended spaces and guards resources. Two SP Fives understand each other's need for sanctuary but may create such separate castles that they rarely meet.",
        forType2: "The work is creating shared space that doesn't feel invasive to either."
      },
      {
        instinct: 'so',
        forType1: "The SO Five connects through expertise and intellectual contribution. Two SO Fives may bond over shared knowledge domains but relate more as colleagues than lovers.",
        forType2: "The growth is learning to share feelings, not just ideas."
      },
      {
        instinct: 'sx',
        forType1: "The SX Five seeks one intense connection and shares their secret inner world with a chosen person. Two SX Fives can create profound intimacy—if both choose each other as that person.",
        forType2: "This pairing has the most potential for true depth. The risk is putting all needs on one relationship while neglecting practical connection."
      }
    ],
    growthMoment: "Growth happens when both Fives can tolerate being truly known—not just intellectually understood, but emotionally seen. When they can reach for each other instead of retreating into their own minds.",
    reflection: "What would it mean to share not just your thoughts, but your needs, with the person closest to you?"
  },

  {
    type1: 6, type2: 6,
    title: "The Faithful Fortress",
    subtitle: "When two loyalists build security together",
    narrative: `They found safety in each other. After a lifetime of scanning for danger, of questioning trustworthiness, of waiting for the other shoe to drop—here was someone who understood. Who also looked both ways three times. Who also needed reassurance. Who would never judge them for being afraid.

The early relationship was a relief. "Tell me again you're not leaving." "I promise. I promise. I promise." The promises weren't annoying—they were water in the desert. Finally, someone who understood that trust wasn't automatic. That it had to be built, brick by brick, with a thousand small proofs.

But two anxious minds together can create an echo chamber. One Six worries about money; the other starts worrying too. One imagines disaster; the other confirms it could happen. The vigilance that protected each individually now multiplied between them. The world seemed more dangerous than ever.

The testing started subtly. One Six, not trusting their own perception, would seek evidence of the other's commitment. The other Six, sensitive to being doubted, would take the test as proof of distrust. "If you trusted me, you wouldn't need to ask." "If you were trustworthy, I wouldn't need to ask." A spiral of mutual doubt, even in genuine love.

The breakthrough came when they named the pattern together. "We're both so scared," one said. "We're both expecting to be abandoned."

Instead of trying to talk each other out of fear, they learned to hold it together. Not "don't be afraid" but "I'm afraid too, and I'm still here." The fear didn't disappear. But neither did the loyalty.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "The SP Six seeks security through building warmth and practical safety. Two SP Sixes create a cozy, protected domestic life—but may reinforce each other's survival anxiety.",
        forType2: "The gift is a genuinely safe home. The work is not letting that safety become a fortress against life."
      },
      {
        instinct: 'so',
        forType1: "The SO Six finds safety through groups, rules, and doing duty. Two SO Sixes bond over shared commitments and reliability—but may get lost in obligation over intimacy.",
        forType2: "The challenge is making room for spontaneity and joy alongside responsibility."
      },
      {
        instinct: 'sx',
        forType1: "The SX Six is counterphobic—moving toward fear with strength and intensity. Two SX Sixes may create an intense, even combative bond, constantly testing each other's loyalty through challenge.",
        forType2: "This pairing has passion but needs to learn that peace is not weakness."
      }
    ],
    growthMoment: "Growth happens when both Sixes can be uncertain together without spiraling into anxiety. When they trust the relationship even when they can't trust the world. When loyalty becomes a practice, not a test.",
    reflection: "What if you didn't need certainty to feel safe? What if showing up, day after day, was proof enough?"
  },

  {
    type1: 7, type2: 7,
    title: "The Endless Horizon",
    subtitle: "When two enthusiasts dream together",
    narrative: `No one had ever been able to keep up with her before. And suddenly here was someone who not only kept up but raced ahead, shouting "Come on, there's more!"

Their relationship was a whirlwind of adventures, ideas, plans. They finished each other's sentences about the next trip, the next project, the next possibility. Energy met energy. Enthusiasm sparked enthusiasm. The world was an infinite playground, and they'd found the perfect playmate.

But here's what no one tells you about two Sevens together: they can outrun everything. Including their own pain. Including their relationship's real issues. The moment something difficult arose, one would say "Hey, you know what would be fun?" and they'd be off again. Problems dissolved not through resolution but through distraction.

The relationship stayed at permanent altitude—exhilarating but exhausting. Neither wanted to be the one who brought things down. Neither wanted to be the killjoy, the bore, the one who said "We need to talk." So they kept flying.

The crash came when one Seven couldn't fly anymore. Grief, maybe, or burnout, or just the body giving out. And suddenly they were grounded, unable to chase the next horizon.

The other Seven's first instinct was to fix it—suggest solutions, plan recovery activities, reframe it positively. But the grounded one said: "Could you just be sad with me for a minute?"

It was the hardest thing either had ever done. To just sit there. In the pain. Without escaping, without reframing, without moving on.

"This is terrible," one whispered.

"Yes," said the other. "It really is."

And in that moment, something deepened. They discovered they could survive the dark together. And their adventures meant more once they could also be still.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "The SP Seven creates networks of practical allies and resources. Two SP Sevens build an efficient partnership with many fallback plans—but may relate through practical advantage rather than emotional intimacy.",
        forType2: "The work is finding depth beneath the strategizing."
      },
      {
        instinct: 'so',
        forType1: "The SO Seven channels enthusiasm into causes and idealistic sacrifice. Two SO Sevens may bond over shared missions—but might postpone personal happiness indefinitely for 'the cause.'",
        forType2: "The gift is shared purpose. The challenge is making room for play alongside service."
      },
      {
        instinct: 'sx',
        forType1: "The SX Seven seeks ultimate experience through fascination with people and ideas. Two SX Sevens create an intensely exciting relationship—but may both be prone to seeking the next fascinating thing.",
        forType2: "The work is finding that the ordinary moments together can be as meaningful as the peak experiences."
      }
    ],
    growthMoment: "Growth happens when both Sevens can stay with difficult emotions instead of flying to the next adventure. When they can find depth in commitment, not just breadth in experience. When they discover that some of the best adventures are interior ones.",
    reflection: "What are you running from? And what might happen if you stopped long enough to find out?"
  },

  {
    type1: 8, type2: 8,
    title: "The Irresistible Force",
    subtitle: "When two warriors face each other",
    narrative: `The attraction was primal. Here was someone who didn't back down. Didn't play games. Didn't need protection. For each Eight, meeting another Eight was like finding a worthy opponent and a true ally in one.

Their early days were fire. Direct conversations. No manipulation. No weakness performance. They could be exactly who they were—strong, intense, real. Neither flinched at the other's power.

But two people who won't back down eventually meet head-on.

The first power struggle was almost funny in retrospect—something trivial, a restaurant choice or a route to take. But neither would yield. What started as preference became a battle of wills. Hours passed. Neither would give in, because giving in felt like losing. And Eights don't lose.

The fights were legendary. Doors slammed. Voices raised. Things said that couldn't be unsaid. Each Eight, when threatened, went bigger. And when your partner goes bigger, you go even bigger. Escalation was inevitable.

What saved them wasn't learning to back down. It was learning to let each other in.

It happened after one of their biggest fights. They sat in the wreckage—exhausted, far apart on the couch, still furious. And one Eight said something that took everything: "When you come at me like that, I feel scared."

The other Eight was stunned. Scared? They were never scared.

"Me too," came the admission, barely audible. "I feel scared that I'll lose you."

Something cracked open. Beneath all that power was the same vulnerability neither had ever shown anyone. And somehow, showing it to the one person strong enough to destroy them was the safest thing they'd ever done.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "The SP Eight focuses power on material security and survival. Two SP Eights may build an empire together but struggle over resource control.",
        forType2: "The gift is mutual protection and provision. The work is sharing power over the domain."
      },
      {
        instinct: 'so',
        forType1: "The SO Eight protects their group with fierce loyalty. Two SO Eights can be a powerful team defending shared causes—but may clash over whose group comes first.",
        forType2: "The challenge is creating an 'us' that supersedes all other loyalties."
      },
      {
        instinct: 'sx',
        forType1: "The SX Eight is possessive and intense in intimate bonds. Two SX Eights create overwhelming passion—but may struggle with mutual possession and surrender.",
        forType2: "This pairing is the most intense. Growth means learning that surrender to love is not defeat."
      }
    ],
    growthMoment: "Growth happens when both Eights can be vulnerable with each other. When winning the argument matters less than keeping the person. When they learn that letting someone in is its own form of power.",
    reflection: "What would it mean to let your guard down completely with someone? What's the difference between surrendering and losing?"
  },

  {
    type1: 9, type2: 9,
    title: "The Gentle Merge",
    subtitle: "When two peacemakers dissolve together",
    narrative: `It was so easy. No drama. No demands. No one needed to fight for space or assert a position. They could just... be.

Friends marveled at their compatibility. "You never fight!" It was true. There was nothing to fight about. Whatever one wanted, the other was fine with. Whatever one decided, the other went along. It was the most comfortable relationship either had ever known.

But slowly, something strange happened. Neither could remember the last time they'd expressed a preference. Neither could identify what they actually wanted—about dinner, about the weekend, about the future. The questions just bounced between them: "What do you want to do?" "I don't know, what do you want to do?" "Whatever you want is fine."

They had merged so completely that neither person remained.

It took a crisis to reveal it. An outside pressure—a job offer in another city, a family emergency, something that required an actual decision. And suddenly neither knew who they were without the other. Neither had practiced having opinions. The peaceful merger had become a peaceful disappearance.

"Who are you?" one Nine asked the other, genuinely confused.

"I don't know anymore," the other admitted. "I've been being whoever you needed."

"So have I."

The work that followed was uncomfortable. They had to actually disagree. To express preferences. To say "I want this" even if it conflicted. It felt like conflict, which both hated. But they were learning that peace built on the erasure of two people isn't peace—it's just absence.

"I want Thai food," one said finally, after twenty minutes of "whatever you want."

"I actually wanted Italian," the other admitted.

It was the beginning of two people finally showing up to the relationship.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "The SP Nine merges with physical routines and comfort. Two SP Nines create a cozy, comfortable life—but may numb out together through food, sleep, or comfortable numbness.",
        forType2: "The work is staying awake and present, not just comfortable."
      },
      {
        instinct: 'so',
        forType1: "The SO Nine merges with groups and takes on collective identity. Two SO Nines may lose themselves in community roles and activities rather than face each other directly.",
        forType2: "The challenge is creating a private 'we' that isn't defined by group belonging."
      },
      {
        instinct: 'sx',
        forType1: "The SX Nine merges completely with their intimate partner. Two SX Nines create deep union but risk total loss of individual identity.",
        forType2: "This pairing has the most intimacy potential but needs conscious effort to maintain two separate people within the merge."
      }
    ],
    growthMoment: "Growth happens when both Nines can show up as distinct individuals within their union. When they can disagree without losing the peace. When they remember that real harmony requires two whole people, not one merged entity.",
    reflection: "What do you actually want? Not what's easiest, not what keeps the peace—what do you want?"
  },

  // === CROSS-TYPE RELATIONSHIPS: Type 1 Pairings ===
  {
    type1: 1, type2: 2,
    title: "The Responsible Heart",
    subtitle: "When principles meet compassion",
    narrative: `She organized relief efforts; he organized spreadsheets. They met while volunteering at the food bank—she greeting everyone with warmth, he redesigning their entire inventory system.

The attraction was complementary: she saw someone who actually got things done, who held standards, who cared about excellence. He saw someone who moved through the world with warmth, who made people feel valued, who reminded him that systems serve people, not the other way around.

At first, they made each other better. Her warmth softened his criticalness. His structure helped her stop overextending. She taught him that sometimes people need a hug, not a fix. He taught her that sometimes love requires boundaries.

But the friction emerged when their drives collided. She gave time and energy to someone who, in his view, was taking advantage of her. "You can't just help everyone," he said. "Some people need to face consequences."

"Not everything is about right and wrong," she shot back. "Sometimes people just need care."

To him, her indiscriminate helping seemed naive. To her, his standards seemed cold. Each felt the other was missing something essential.

The breakthrough came when they saw their shared motivation underneath: both desperately wanted to make the world better. She tried to do it through love; he tried to do it through improvement. Neither way was wrong—they were just different languages for the same care.

"I criticize because I care too," he finally admitted.

"And I help because I want to be good," she confessed.

They learned to check themselves: he asked "Is this about principles or just my frustration?" while she asked "Is this about helping or about being needed?"`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP One focuses on practical standards for the home. SP Two seeks security through measured giving. Together they can build solid domestic life—but may compete over who maintains it better.",
        forType2: "Both value practical care but express it differently—One through systems, Two through nurturing."
      },
      {
        instinct: 'so',
        forType1: "SO One holds moral positions about how groups should operate. SO Two gives to gain social influence. Together they can be a formidable force for social good—or clash over methods.",
        forType2: "The challenge is when One's preaching meets Two's need for appreciation."
      },
      {
        instinct: 'sx',
        forType1: "SX One focuses reform energy on intimate relationships. SX Two focuses all giving on one person. Together they create intense bonds—but One may try to perfect Two while Two may give with strings attached.",
        forType2: "Both bring intensity to the relationship. Growth means One accepting Two as they are, while Two gives without conditions."
      }
    ],
    growthMoment: "Growth happens when the One learns that warmth is its own form of righteousness, and the Two learns that boundaries are a form of love. When they can appreciate each other's way of caring.",
    reflection: "How might what you judge in your partner actually be a different expression of what you value?"
  },

  {
    type1: 1, type2: 3,
    title: "The Excellence Race",
    subtitle: "When integrity meets achievement",
    narrative: `They were both the best in their field—he for impeccable ethics, she for impeccable results. Colleagues joked they should merge their reputations into one unstoppable force.

The early relationship was full of mutual admiration. She respected his principles, the way he'd rather fail than compromise his standards. He respected her effectiveness, the way she could accomplish what others only planned.

But what looked like alignment revealed a fundamental difference: he cared about doing things right; she cared about winning. He would slow down to perfect every detail. She would cut corners to hit the deadline.

"You're compromising quality," he said about her latest project.

"You're missing opportunities," she said about his delayed launches.

To the One, the Three seemed inauthentic—all image, no substance. To the Three, the One seemed ineffective—all principles, no pragmatism.

The conflict crystallized around a work decision. She suggested presenting results favorably—not lying, but spinning. "That's deceptive," he insisted. "No, that's strategic," she countered. "There's no prize for truth that no one listens to."

Something cracked open when he asked: "Why does winning matter so much to you?"

"Why does being right matter so much to you?" she asked back.

They both paused. Underneath his righteousness was a fear of being flawed. Underneath her achievement was a fear of being worthless.

"I'm afraid that if I'm not perfect, I'm not good," he admitted.

"I'm afraid that if I'm not successful, I'm not lovable," she said.

Different fears, similar wounds. They learned to see their partner's defense as a sibling to their own.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP One focuses on material and practical excellence. SP Three works tirelessly for security. Together they can build solid success—but may overwork instead of connect.",
        forType2: "Both understand hard work; the challenge is making space for rest and authentic being."
      },
      {
        instinct: 'so',
        forType1: "SO One holds social standards. SO Three seeks social prestige. Together they can be highly influential—but may confuse moral authority with status.",
        forType2: "The work is distinguishing genuine principle from image management."
      },
      {
        instinct: 'sx',
        forType1: "SX One intensely reforms intimate relationships. SX Three charms and attracts. Together they create passion—but One may try to improve Three while Three may perform rather than reveal.",
        forType2: "Both bring intensity; growth means One accepting Three's charisma and Three showing authentic feelings."
      }
    ],
    growthMoment: "Growth happens when the One learns that effectiveness is a form of integrity, and the Three learns that authenticity is more valuable than achievement. When they can pursue excellence together without competing about whose version matters more.",
    reflection: "What if success and integrity weren't in opposition? What would it look like to accomplish things you're proud of?"
  },

  {
    type1: 1, type2: 4,
    title: "The Critic and the Creator",
    subtitle: "When structure meets feeling",
    narrative: `He lived by lists; she lived by moods. He found order; she found meaning. They shouldn't have worked—and maybe that's why they were fascinated.

The One saw something in the Four he'd lost access to: the permission to feel deeply, to value beauty over function, to prioritize the soul over the schedule. The Four saw something she'd never developed: the ability to act despite feeling, to structure creative chaos, to finish things.

At first, it was exhilarating. He helped her turn artistic visions into completed projects. She helped him remember that life wasn't just a checklist.

But then the shadow emerged.

"You're wallowing," he said when she canceled plans to sit with her feelings.

"You're repressing," she said when he pushed through his emotions to be productive.

The One saw the Four as self-indulgent—so caught in their inner world that they couldn't function. The Four saw the One as emotionally stunted—so concerned with doing that they'd forgotten how to be.

It came to a head during a hard time in her life. She needed to grieve, to feel it fully. He needed to fix it, to solve the problem, to make a plan. She said: "Stop trying to help and just feel this with me." He didn't know how.

"I feel it," he insisted. "I just don't see the point of marinating in it."

"The point," she said quietly, "is that feelings aren't problems to be solved."

He began to learn that sometimes sitting in the mess is the work. She began to learn that sometimes taking action is its own kind of honoring.

They're still different—she'll never make a spreadsheet about her feelings, and he'll never indulge in melancholy for melancholy's sake. But they've learned that his practicality is a gift she needs, and her depth is a doorway he's been missing.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP One focuses practical perfectionism on material security. SP Four endures with stoic tenacity. Together they build quietly—One through systems, Four through perseverance.",
        forType2: "Both are less outwardly expressive than other variants. The challenge is creating emotional connection within practical focus."
      },
      {
        instinct: 'so',
        forType1: "SO One preaches about how things should be. SO Four feels shame about not belonging. Together they may bond over shared ideals—or clash when One judges Four's differentness.",
        forType2: "Growth means One appreciating Four's unique perspective rather than expecting conformity."
      },
      {
        instinct: 'sx',
        forType1: "SX One intensely reforms their intimate world. SX Four experiences intense emotions and competition. Together they create passionate connection—but may exhaust each other with intensity.",
        forType2: "Both bring fire; the work is channeling it toward growth rather than mutual critique."
      }
    ],
    growthMoment: "Growth happens when the One learns that feelings have their own logic, and the Four learns that structure can serve creativity. When he can hold her chaos without fixing it, and she can appreciate his order without feeling limited by it.",
    reflection: "What would it mean to honor both structure and feeling in your own life? How might they serve each other?"
  },

  {
    type1: 1, type2: 5,
    title: "The Righteous Mind",
    subtitle: "When principle meets knowledge",
    narrative: `Two serious people found each other in a quiet corner of a conference, arguing about the ethics of a new technology. She had strong opinions about how things should be done; he had deep knowledge about how things actually worked. The conversation lasted four hours.

The attraction was cerebral—finally, someone who thought rigorously, who cared about getting things right, who didn't waste time on small talk. They shared a disdain for sloppy thinking and a respect for competence.

But their approaches differed fundamentally. The One wanted to act on principles; the Five wanted to study before concluding. She was ready to take a stand; he needed more data first.

"You're overthinking this," she said. "We have enough information to know what's right."

"You're oversimplifying," he replied. "The more I learn, the more complex it becomes."

To her, his endless research looked like avoidance—a way to postpone making hard choices. To him, her quick judgments looked premature—a way to feel righteous without understanding.

The impasse broke during an argument about a decision they disagreed on. She'd made a choice without fully understanding the situation; it backfired.

"I told you we needed more information," he said.

"And I've told you that sometimes we can't wait for perfect knowledge," she replied, frustrated. But she paused. "You were right this time, though. I moved too fast."

"And I often move too slow," he admitted. "By the time I know enough, the window closes."

They learned to be a team: her conviction met his comprehension. She learned to ask "What am I missing?" before deciding. He learned to ask "What do I already know?" before researching further. Together, they made better choices than either made alone.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP One focuses practical standards on material life. SP Five retreats to defended spaces. Together they value self-sufficiency—but may create parallel lives under one roof.",
        forType2: "Both appreciate boundaries; the work is creating warmth within the structure."
      },
      {
        instinct: 'so',
        forType1: "SO One holds group standards. SO Five contributes through expertise. Together they can make important social contributions—but may relate more as colleagues than intimates.",
        forType2: "The challenge is building emotional connection alongside shared mission."
      },
      {
        instinct: 'sx',
        forType1: "SX One intensely reforms intimate bonds. SX Five shares their secret inner world with chosen people. Together they create deep, private connection—both intense in their own ways.",
        forType2: "This pairing has unexpected depth when both reveal their inner worlds."
      }
    ],
    growthMoment: "Growth happens when the One learns that understanding can enhance—not weaken—conviction, and the Five learns that some knowledge only comes through committed action. When they trust each other's mode of truth-seeking.",
    reflection: "How do knowledge and conviction relate in your life? When does each serve you, and when does it hold you back?"
  },

  {
    type1: 1, type2: 6,
    title: "The Faithful Standard",
    subtitle: "When certainty meets questioning",
    narrative: `He knew what was right; she questioned everything. And somehow, they were perfect for each other.

The One found in the Six someone who took things seriously—no flighty optimism or careless assumptions. The Six found in the One something she'd always longed for: someone who seemed genuinely sure.

In the beginning, it was stabilizing. She'd spiral into anxiety, and he'd say "Here's what we should do" with such certainty that she could finally rest. He'd get rigid, and she'd say "But have you considered..." and keep him from becoming unreasonable.

But the dynamic had a shadow. The more she relied on his certainty, the less she trusted her own judgment. The more he provided answers, the more impatient he became with her questions.

"Why can't you just trust the plan?" he asked, frustrated.

"Why can't you acknowledge it might be wrong?" she shot back.

To the One, the Six's constant questioning felt like being undermined. To the Six, the One's confidence started to feel like arrogance.

The shift came when his certainty proved wrong about something important. He'd been sure; he'd dismissed her doubts; he'd failed.

"I'm sorry," he said. "You were right to question."

"I'm sorry too," she said. "Sometimes I question because I'm scared, not because you're wrong."

They learned a rhythm: he could be confident without being rigid, and she could question without spiraling. His conviction became more humble; her doubt became more trusting. Together, they found a middle path between blind faith and paralytic uncertainty.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP One focuses on practical standards. SP Six seeks safety through practical security. Together they build a stable, well-organized life—but may reinforce each other's anxiety about getting things right.",
        forType2: "Both value reliability; the challenge is relaxing within the security they create."
      },
      {
        instinct: 'so',
        forType1: "SO One holds moral authority in groups. SO Six commits to groups and duty. Together they share principled commitment—but may become rigidly rule-bound.",
        forType2: "The work is distinguishing true principle from mere conformity."
      },
      {
        instinct: 'sx',
        forType1: "SX One intensely reforms intimate relationships. SX Six tests loyalty through challenge. Together they create intense bonds—but may exhaustingly test and reform each other.",
        forType2: "Both bring intensity; growth means choosing trust over vigilance, acceptance over improvement."
      }
    ],
    growthMoment: "Growth happens when the One learns that doubt can strengthen faith, not weaken it, and the Six learns that trust can coexist with discernment. When conviction becomes humble and questioning becomes brave.",
    reflection: "How do certainty and doubt serve each other? When has each been a friend, and when has each been a trap?"
  },

  {
    type1: 1, type2: 7,
    title: "The Disciplined Dreamer",
    subtitle: "When focus meets possibility",
    narrative: `She made lists; he made plans that involved hot air balloons and spontaneous trips to Iceland. She finished things; he started twelve new things before finishing any.

They baffled each other—and couldn't look away.

The One saw in the Seven something she'd lost touch with: joy, spontaneity, the permission to play before all the work was done. The Seven saw in the One something he'd always lacked: the ability to follow through, to commit, to make dreams real instead of just dreaming them.

This was their integration line—they had something profound to offer each other. When healthy, she learned to lighten up through him. When healthy, he learned to focus through her.

But when stressed, the dynamic inverted. She became more rigid and critical in response to his chaos; he became more scattered and evasive in response to her control.

"You're not fun anymore," he said when she shot down another spontaneous idea.

"You're never serious," she said when he dodged another conversation about the future.

The breakthrough came when he got sick and couldn't run—literally couldn't escape into activity. Stuck in bed, he had to face what he'd been avoiding. She was there, not with criticism but with quiet presence.

"I don't know how to be still," he admitted.

"I don't know how to be light," she replied.

They became teachers for each other. He reminded her that joy is not irresponsible. She reminded him that commitment is not a cage. In their best moments, they create a life that is both meaningful and delightful.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP One focuses on practical perfection. SP Seven builds networks for security. Together they can create well-organized adventures—when One relaxes and Seven follows through.",
        forType2: "Both have practical concerns; the integration potential is high when they combine One's discipline with Seven's resourcefulness."
      },
      {
        instinct: 'so',
        forType1: "SO One preaches about how things should be. SO Seven sacrifices for causes. Together they can be powerful advocates—but may clash over methods: One's by-the-book vs Seven's creative rebellion.",
        forType2: "The gift is shared idealism; the work is accepting each other's style of pursuing it."
      },
      {
        instinct: 'sx',
        forType1: "SX One intensely reforms intimate bonds. SX Seven seeks ultimate experience through fascination. Together they create passionate connection—when One can appreciate Seven's enthusiasm and Seven can appreciate One's depth.",
        forType2: "Both bring intensity; the growth is One learning to play and Seven learning to stay."
      }
    ],
    growthMoment: "This is an integration line pairing. At their best, the One learns joy without losing integrity, and the Seven learns focus without losing freedom. They become living proof that discipline and delight are not opposites.",
    reflection: "What have you sacrificed for responsibility that you might reclaim? What have you avoided committing to that might give your life meaning?"
  },

  // Type 1 continued
  {
    type1: 1, type2: 8,
    title: "The Fortress of Virtue",
    subtitle: "When principle meets power",
    narrative: `Two forces of nature met over a negotiating table. She ran the ethics committee; he ran the company. Neither was used to backing down.

The One saw in the Eight a terrifying mirror—someone who also had strong convictions, who also wanted to do right by their lights. But the Eight's version of right was about strength and protection, while the One's was about moral purity. Same fire, different fuel.

What drew them together was their shared intolerance for weakness and dishonesty. Neither played games. Both said what they meant. In a world of equivocation, they recognized each other as the real thing.

But their conflicts were volcanic. Two people who believe they're right, who won't compromise their positions, who both need to win. Arguments could last for days, with neither giving an inch.

"You're self-righteous," he accused.

"You're a bully," she shot back.

Both were partially right.

The shift came when they faced a common enemy—an actual ethical crisis that required both her principles and his power to resolve. Fighting together instead of against each other, they discovered they were formidable allies.

"I need your conviction," he admitted afterward. "It keeps me honest."

"I need your strength," she admitted. "It makes my principles actually matter."

They learned to unite their forces: her moral clarity with his protective power. Their household runs like a benevolent dictatorship with a constitution—strong, principled, and surprisingly tender when no one's watching.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP One focuses on practical standards. SP Eight focuses on material security and survival. Together they build a fortress—orderly and protected.",
        forType2: "Both are focused on the concrete world; the challenge is softening enough to connect emotionally."
      },
      {
        instinct: 'so',
        forType1: "SO One holds moral authority in groups. SO Eight protects their group with fierce loyalty. Together they can lead movements—when aligned on whose group and whose rules.",
        forType2: "The power couple potential is high; the conflict potential is equally high."
      },
      {
        instinct: 'sx',
        forType1: "SX One intensely reforms intimate relationships. SX Eight is possessive and overwhelming in intimacy. Together they create intense bonds—when they can stop battling for control.",
        forType2: "Maximum passion, maximum conflict. Growth requires mutual surrender neither finds easy."
      }
    ],
    growthMoment: "Growth happens when the One learns that power can serve goodness, and the Eight learns that vulnerability isn't weakness. When they fight the world together instead of each other.",
    reflection: "What would it look like to combine strength and righteousness? How might they be the same thing?"
  },

  {
    type1: 1, type2: 9,
    title: "The Peaceful Standard",
    subtitle: "When idealism meets acceptance",
    narrative: `He noticed every flaw; she barely noticed anything was wrong. He wanted to fix the world; she wanted the world to just calm down. They shouldn't have made sense.

But the One found in the Nine something he desperately needed: acceptance. She didn't criticize him for his criticalness. She didn't judge him for judging. She just... let him be.

And the Nine found in the One something she needed too: someone with enough conviction to make decisions. She'd floated through life saying "whatever you want," and here was someone who actually wanted things.

In the beginning, it was perfect balance. His energy met her calm. His decisiveness met her flexibility. She helped him relax; he helped her engage.

But the shadow emerged when his standards became her prison. "Why can't you just decide?" he'd ask, frustrated by her endless "I don't know, what do you think?" And she'd feel his frustration as criticism, and withdraw further into pleasant compliance.

"You never tell me what you want," he complained.

"Because what I want is peace," she finally said. "And you bring tension into everything."

The tension broke when he realized his standards were steamrolling her. "I've been deciding everything," he admitted. "And maybe judging you for not fighting back."

"And I've been disappearing," she admitted. "Because it's easier than having opinions that might upset you."

They had to learn new dances: he practiced asking her preference and waiting through the silence while she found it. She practiced having opinions even when they might create conflict.

Their relationship became a place where standards and acceptance coexist—where he can want things to be better without making her feel like she's not enough.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP One focuses on practical household standards. SP Nine merges with comfortable routines. Together they create a comfortable, orderly home—if One doesn't criticize Nine's comfort-seeking.",
        forType2: "Both are practically focused; the challenge is One not dominating the domestic environment."
      },
      {
        instinct: 'so',
        forType1: "SO One holds group moral standards. SO Nine merges with group identity. Together they can serve communities—but Nine may lose themselves in One's causes.",
        forType2: "The work is Nine maintaining their own voice within shared purpose."
      },
      {
        instinct: 'sx',
        forType1: "SX One intensely focuses reform on the relationship. SX Nine merges completely with their partner. Together they create deep bonds—but One may unwittingly define the entire relationship.",
        forType2: "SX Nine's merger can enable SX One's reforming; growth requires Nine to remain a distinct person."
      }
    ],
    growthMoment: "Growth happens when the One learns that peace is its own form of wisdom, and the Nine learns that having standards isn't aggression. When they can coexist as two distinct people—one with opinions, one with peace—without either erasing the other.",
    reflection: "How do striving and accepting relate in your life? What if both were forms of love?"
  },

  // === TYPE 2 PAIRINGS ===
  {
    type1: 2, type2: 3,
    title: "The Image of Love",
    subtitle: "When helping meets achieving",
    narrative: `She supported everyone's dreams; he achieved his own. They met at a charity gala—she organizing it, he headlining it. The attraction was instant: her warmth, his shine.

In the beginning, it was symbiotic. She helped him succeed; he let her be indispensable. He shined; she reflected. They looked perfect together, and maybe that's what both were really after.

The Two poured energy into the Three's career, his image, his needs. The Three accepted it as his due—isn't this what partners do? He succeeded; she glowed with pride in being the one behind the success.

But something felt hollow. The Two started to wonder: Does he see me, or just what I do for him? The Three started to wonder: Does she love me, or love being needed by me?

"I'm not just your support staff," she said one night.

"And I'm not just my achievements," he replied.

Both were shocked. They'd each been reducing themselves to their function—and reducing each other to theirs.

The real work began when they tried to be together without performing. No networking events. No success to celebrate or support. Just two people on a couch.

"Who are you when you're not helping?" he asked.

"Who are you when you're not achieving?" she asked back.

Neither knew for certain. Finding out became their shared adventure.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Two seeks security through measured giving. SP Three works tirelessly for practical success. Together they build solid material life—but may forget to build emotional intimacy.",
        forType2: "Both focus on practical outcomes; the challenge is connecting beyond function."
      },
      {
        instinct: 'so',
        forType1: "SO Two gives to gain social influence. SO Three achieves through social prestige. Together they're a classic power couple—potentially more impressive than intimate.",
        forType2: "The question is whether their relationship is real or their best joint performance."
      },
      {
        instinct: 'sx',
        forType1: "SX Two focuses giving on one special person. SX Three charms through personal magnetism. Together they create intense attraction—but may both be giving to receive.",
        forType2: "Maximum chemistry, potential for mutual using. Growth means giving without strings, achieving without performing."
      }
    ],
    growthMoment: "Growth happens when the Two gives without needing to be needed, and the Three achieves without needing applause. When they can simply be together, without either performing or supporting.",
    reflection: "What would your relationship look like if no one was watching? Would you still show up for each other?"
  },

  {
    type1: 2, type2: 4,
    title: "The Depth of Devotion",
    subtitle: "When nurturing meets longing",
    narrative: `He felt misunderstood by everyone—except her. She seemed to see past his moods, his intensity, his need for something more. And she needed to be needed by someone special, someone deep. He was that.

The Two was drawn to the Four's intensity. Here was someone who felt things deeply, who wasn't satisfied with superficial connection, who might finally appreciate her gifts. The Four was drawn to the Two's attentiveness. Here was someone who might actually see him, who would stay through the darkness.

But the dynamic had shadows. The Two's helping could feel suffocating to the Four—too much attention when he needed space for his feelings. The Four's moods could exhaust the Two—she was giving and giving, and he was still melancholy.

"Why can't you just be happy?" she finally asked, exhausted.

"Why can't you just let me feel what I feel?" he replied, frustrated.

The Two wanted to fix his sadness; the Four experienced that as not being accepted. The Four wanted space for his depths; the Two experienced that as rejection of her care.

The breakthrough came when she learned to sit with him in his darkness without trying to rescue him, and he learned to receive her care without feeling smothered by it.

"I don't need you to fix me," he said. "I need you to witness me."

"I don't need you to be happy," she said. "I just need to know my care reaches you."

They found a way: she offered presence instead of solutions, and he received instead of withdrawing.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Two gives with more boundaries. SP Four endures stoically. Together they create steady connection—both more contained than their counterparts.",
        forType2: "Less dramatic but potentially more sustainable."
      },
      {
        instinct: 'so',
        forType1: "SO Two gives to groups for influence. SO Four compares themselves to others, feeling deficient. Together they navigate belonging—Two helping Four feel included, Four helping Two see beneath social performance.",
        forType2: "The work is creating genuine belonging between them."
      },
      {
        instinct: 'sx',
        forType1: "SX Two pours everything into one person. SX Four experiences intense emotions and competition. Together they create passionate, consuming bonds—for better and worse.",
        forType2: "Maximum intensity. Growth requires Two accepting Four's otherness and Four receiving Two's devotion."
      }
    ],
    growthMoment: "Growth happens when the Two learns that witnessing is its own gift, and the Four learns that receiving is its own form of connection. When they can be present without fixing or withdrawing.",
    reflection: "What's the difference between helping someone and being present with them? When is each what's needed?"
  },

  {
    type1: 2, type2: 5,
    title: "The Warmth and the Distance",
    subtitle: "When connection meets solitude",
    narrative: `She never met anyone so hard to reach. He never met anyone so determined to reach him.

The Two saw the Five as a puzzle—someone clearly brilliant, clearly deep, but locked away behind walls she was determined to scale. The Five saw the Two as both tempting and terrifying—warm, present, generous, and overwhelming.

She reached out; he pulled back. She offered help; he said he didn't need it. She wanted connection; he wanted space. It should have ended quickly.

But something kept them both.

"Why won't you let me in?" she asked.

"Why won't you let me breathe?" he asked back.

For the Two, his distance felt like rejection. For the Five, her reaching felt like invasion. Both were triggered by the other's basic nature.

The shift came when she stopped advancing and he stopped retreating. She found other outlets for her nurturing. He found he actually missed her presence.

"I do want you here," he admitted. "Just not all the time."

"And I can want to be close without needing constant proof," she said.

They built a relationship with clear boundaries—scheduled together time, respected space, neither abandoning nor suffocating. It wasn't what either imagined love would look like. But it was real.

"You're not rejecting me when you need space," she learned to say.

"And you're not invading when you want connection," he learned to respond.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Two has better boundaries. SP Five guards resources and space. Together they may find easier balance—both understand self-protection.",
        forType2: "The challenge is creating warmth within the boundaries."
      },
      {
        instinct: 'so',
        forType1: "SO Two connects through social influence. SO Five connects through expertise. Together they relate through roles—but may miss personal intimacy.",
        forType2: "The work is connecting as people, not just positions."
      },
      {
        instinct: 'sx',
        forType1: "SX Two focuses all giving on one person. SX Five shares their inner world with only chosen people. This pairing has potential—if Two is the chosen person and can receive intensity without demanding more.",
        forType2: "Maximum potential depth if Five chooses to let Two in."
      }
    ],
    growthMoment: "Growth happens when the Two learns that space isn't rejection, and the Five learns that connection isn't depletion. When both can tolerate the other's fundamental need without taking it personally.",
    reflection: "What's the difference between intimacy and intrusion? How do you know when closeness becomes too much?"
  },

  {
    type1: 2, type2: 6,
    title: "The Loyal Embrace",
    subtitle: "When nurturing meets anxiety",
    narrative: `She gave unconditionally—or at least, that's what it looked like. He questioned everything—including her generosity. "What's the catch?" he wondered. "What does she really want?"

The Six, burned by false friends before, wasn't sure he could trust the Two's care. And the Two, used to being appreciated, was hurt by his suspicion.

"I'm trying to help you," she said.

"But why?" he asked. Not grateful—suspicious.

For the Two, his doubt was crushing. She was giving her best self, and he was questioning her motives. For the Six, her insistence felt like pressure. "Trust me" demands are exactly what untrustworthy people make.

The breakthrough came through time, not words. She stopped asking him to trust her and just showed up—consistently, predictably, without condition. He stopped testing her and started noticing that she was still there.

"You've been here for three years," he said one day, surprised.

"I'm not going anywhere," she said.

"I'm starting to believe you."

That was more intimate than any declaration. The Two learned that some people need proof, not promises. The Six learned that some people really do give without hidden agendas.

Their relationship is built on demonstrated loyalty—she shows up, he watches, and over time, the watching becomes trust.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Two gives for security. SP Six seeks warmth and practical safety. Together they build a cozy, reliable world—when trust is established.",
        forType2: "Both value security; the work is Six learning to receive without suspicion."
      },
      {
        instinct: 'so',
        forType1: "SO Two gives to gain social influence. SO Six is dutiful to groups. Together they serve institutions—but may subordinate their relationship to their roles.",
        forType2: "The challenge is making their bond primary, not their duties."
      },
      {
        instinct: 'sx',
        forType1: "SX Two focuses all giving on one person. SX Six tests loyalty through challenge. Together they create intense bonds—when Two passes Six's tests and Six receives Two's devotion.",
        forType2: "Six must be careful not to test Two into exhaustion."
      }
    ],
    growthMoment: "Growth happens when the Two gives without requiring immediate trust, and the Six receives without requiring endless proof. When loyalty becomes the foundation instead of the test.",
    reflection: "How is trust built? Through words or through time? What proof do you need, and what proof do you offer?"
  },

  {
    type1: 2, type2: 7,
    title: "The Sunshine and the Soil",
    subtitle: "When nurturing meets adventure",
    narrative: `She grounded him; he lifted her. At least, that was the hope.

The Two saw in the Seven a spark she wanted to tend—so much enthusiasm, so much life, surely it just needed her support to flourish. The Seven saw in the Two warmth and acceptance—a home base to return to between adventures.

But their rhythms clashed. She wanted depth; he wanted breadth. She wanted to process feelings; he wanted to move on to the next thing. She gave and gave; he took and flew.

"You never stay long enough for me to really love you," she said.

"You always want more than I can give," he replied.

The Two felt abandoned every time the Seven chased a new enthusiasm. The Seven felt trapped every time the Two wanted emotional processing. She was an anchor; anchors drag.

The shift came when she found her own adventures—not chasing him, but discovering what made her come alive. And when he let himself be caught—choosing to stay through a hard conversation instead of escaping into positivity.

"I can have adventures too," she discovered.

"I can have depth too," he discovered.

Their relationship works when she doesn't only give and when he doesn't only take. When she has a self apart from nurturing him, and he has roots alongside his wings.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Two has better boundaries. SP Seven builds practical networks. Together they create efficient partnership—if Two doesn't give too much and Seven doesn't strategize too much.",
        forType2: "More grounded than other variants; the challenge is genuine emotional connection."
      },
      {
        instinct: 'so',
        forType1: "SO Two gives to social groups. SO Seven sacrifices for causes. Together they serve communities with generosity and enthusiasm—potentially exhausting themselves.",
        forType2: "The work is maintaining private connection within public service."
      },
      {
        instinct: 'sx',
        forType1: "SX Two focuses all giving on one person. SX Seven seeks fascination in intimate connections. Together they create passionate bonds—when Seven stays fascinated and Two doesn't burn out.",
        forType2: "The challenge is Seven's wandering attention meeting Two's need for centrality."
      }
    ],
    growthMoment: "Growth happens when the Two nurtures herself as much as others, and the Seven finds that depth is its own adventure. When they can be light together without avoiding weight.",
    reflection: "What's the relationship between depth and lightness? Can you have both? What would that look like?"
  },

  {
    type1: 2, type2: 8,
    title: "The Heart and the Force",
    subtitle: "When nurturing meets power",
    narrative: `The Eight had never met anyone who could handle his intensity. The Two had never met anyone who needed her strength, not just her softness.

The attraction was primal. His power made her feel safe. Her warmth made him feel... something he'd forgotten he could feel. They were fire and water, destruction and creation.

But Two gives through softness; Eight respects strength. Two manipulates indirectly; Eight demands directness. The collision was inevitable.

"Just tell me what you want!" he roared.

"I shouldn't have to tell you!" she cried.

For the Eight, her indirectness felt like manipulation—games he had no patience for. For the Two, his demand felt like rejection of her way of loving.

The breakthrough came when she got angry. Really angry. For the first time, she stopped being nice and said exactly what she felt, loudly.

He was stunned. And then—relieved.

"There you are," he said. "Now I can see you."

The Two learned that this Eight respected strength more than service. And the Eight learned that underneath his Two's giving was someone as fierce as himself.

Their relationship works when she's direct and he's tender. When she claims her power and he admits his vulnerability. When both can be strong and soft in turns.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Two has better boundaries. SP Eight focuses on material survival. Together they build practical empires—if Two doesn't over-give and Eight doesn't dominate.",
        forType2: "Both are protective of resources; the work is sharing vulnerability."
      },
      {
        instinct: 'so',
        forType1: "SO Two gives to gain influence. SO Eight protects their group fiercely. Together they can be a formidable advocacy team—united or at war.",
        forType2: "The challenge is aligning loyalties and sharing power."
      },
      {
        instinct: 'sx',
        forType1: "SX Two pours everything into one person. SX Eight possesses their partner intensely. Together they create overwhelming bonds—consuming passion that needs occasional air.",
        forType2: "Maximum intensity. Both must maintain self within the merger."
      }
    ],
    growthMoment: "Growth happens when the Two finds her own strength, and the Eight shows his tenderness. When power and love become the same thing, expressed differently.",
    reflection: "What's the relationship between nurturing and strength? How might giving be an act of power?"
  },

  {
    type1: 2, type2: 9,
    title: "The Gentle Confluence",
    subtitle: "When giving meets accepting",
    narrative: `Two accommodating people found each other, and no one was steering the ship.

The Two gave and gave; the Nine accepted and accepted. Both were focused on the other; neither was focused on themselves. It was peaceful. It was warm. It was slightly empty.

"What do you want for dinner?"
"Whatever you want."
"No, what do you want?"
"I'm fine with anything."

Conversations that went nowhere. Decisions unmade. Each deferring to the other in an endless, polite loop.

The Two needed to feel needed, so she kept helping. The Nine needed to keep peace, so he kept accepting. But the Two grew resentful—was her giving even noticed? And the Nine grew invisible—had he merged so completely that no one saw him anymore?

"Do you even want me here, or just what I do for you?" she finally asked.

"Do you even see me, or just someone to help?" he asked back.

Both were shocked. They'd been so busy accommodating that they'd forgotten to actually meet.

The repair required both to show up differently. She had to stop giving and start asking. He had to stop accepting and start wanting. It felt selfish to both—the Two expressing needs, the Nine expressing preferences.

"I want Thai food," she said finally, not offering alternatives.

"I don't," he said. "I want Mexican."

A disagreement. A moment of tension. And then—a real decision made by two real people.

Their relationship came alive when both stopped disappearing into niceness.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Two has better boundaries. SP Nine prioritizes comfort. Together they create peaceful domestic life—if both don't disappear into routine.",
        forType2: "Comfortable but at risk for stagnation."
      },
      {
        instinct: 'so',
        forType1: "SO Two gives to social groups. SO Nine merges with community. Together they serve others—potentially losing their relationship in service.",
        forType2: "The work is maintaining a private 'us' amid public roles."
      },
      {
        instinct: 'sx',
        forType1: "SX Two focuses all giving on one person. SX Nine merges completely with their partner. Together they create deep union—perhaps too merged.",
        forType2: "Maximum fusion. Both must practice maintaining distinct identities."
      }
    ],
    growthMoment: "Growth happens when the Two has needs and the Nine has preferences. When two accommodating people learn to take up space together.",
    reflection: "What do you actually want? Not what's easiest, not what keeps the peace—what do you want?"
  },

  // === TYPE 3 PAIRINGS ===
  {
    type1: 3, type2: 4,
    title: "The Image and the Depth",
    subtitle: "When doing meets being",
    narrative: `He was climbing. She was sinking into herself.

The Three moved through the world with purpose, optimism, goals. Every day had metrics. Every conversation had a point. Success was the destination, and he knew exactly how to get there.

The Four lived in depths he didn't understand. She spoke of longing, melancholy, the beauty of sadness. She found meaning in suffering. She lingered where he wanted to leap forward.

"Why do you romanticize pain?" he asked, frustrated.
"Why do you avoid feeling anything real?" she countered.

It was the central collision. He saw her intensity as self-indulgent wallowing. She saw his optimism as emotional fraud—a shiny surface with nothing underneath.

But what drew them together was also what divided them. The Three was secretly exhausted by the performance. Somewhere beneath the polished exterior was a terrified child who didn't know who he was without achievements. The Four saw this immediately. She was drawn to authenticity, and she could smell the hollow places in him.

"Who are you when you're not succeeding?" she asked one night.

He had no answer. It was the question he'd been running from his entire life.

And she—she was secretly envious of his ability to function, to move through the world without being immobilized by feeling. She got lost in emotional depths; he knew how to surface.

The healing happens when he stops performing for her and lets her see his real fear of worthlessness. When she stops testing his authenticity and appreciates his genuine gifts. When depth and doing learn to dance.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Three focuses on material success and security. SP Four creates beautiful, unique environments. Together they build something aesthetically distinctive—if he doesn't dismiss her impracticality.",
        forType2: "Both value self-sufficiency; work is integrating feeling with function."
      },
      {
        instinct: 'so',
        forType1: "SO Three wants prestige and influence. SO Four feels like an outsider looking in. Together they navigate belonging differently—he performs for groups, she stands apart from them.",
        forType2: "Tension between his need to fit in and her pride in being different."
      },
      {
        instinct: 'sx',
        forType1: "SX Three projects charisma and attractiveness. SX Four seeks intense, transformative love. Together they create passionate bonds—if both can be real instead of performing intensity.",
        forType2: "Maximum chemistry but risk of image-based attraction. Growth requires stripping away performance."
      }
    ],
    growthMoment: "Growth happens when the Three stops achieving and starts being. When the Four stops longing and starts doing. When both find that authenticity includes action and feeling together.",
    reflection: "What's the relationship between success and depth? Can you achieve without losing your soul?"
  },

  {
    type1: 3, type2: 5,
    title: "The Performer and the Observer",
    subtitle: "When visibility meets invisibility",
    narrative: `She was always center stage; he was always in the audience. Watching. Analyzing. Never participating.

The Three lived to be seen—her energy, her achievements, her value all measured by recognition. She moved fast, talked fast, accomplished fast. The world was a stage and she knew her lines perfectly.

The Five lived to understand. He watched from the margins, conserving energy, gathering data. People exhausted him. The Three's constant performance was both fascinating and draining.

"Why do you need so much attention?" he asked, genuinely puzzled.
"Why do you hide from everything?" she responded, equally confused.

He thought she was superficial—all flash, no substance. She thought he was paralyzed—all thought, no action. Both were partially right and completely wrong.

What she didn't see was the profound depth of his inner world, the complex frameworks he built in solitude. What he didn't see was the terror beneath her performance—the fear that without achievements, she was nothing.

The breakthrough came when she got sick. Couldn't perform. Couldn't achieve. Just had to lie there and be. She was terrified.

He brought books. Sat with her quietly. Didn't need her to perform anything. Just... stayed.

"You're still you," he said. "Even without doing anything."

It was the most healing thing anyone had ever said to her. And she, by needing him, drew him out of his isolation in a way nothing else could.

They work when she slows down enough to meet his depth, and he engages enough to support her action. When visibility and invisibility become choices rather than compulsions.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Three focuses on security through achievement. SP Five hoards resources and knowledge. Together they're pragmatic partners—if she doesn't overwhelm his need for space.",
        forType2: "Both value self-sufficiency. Work is merging separate systems."
      },
      {
        instinct: 'so',
        forType1: "SO Three craves social success. SO Five is the expert in groups but remains detached. Together they navigate community differently—she center stage, he backstage.",
        forType2: "Complementary roles if they respect each style."
      },
      {
        instinct: 'sx',
        forType1: "SX Three projects magnetic appeal. SX Five has intense but selective connections. Together they create private depth—if she can tolerate his need for boundaries.",
        forType2: "Can be profoundly intimate or frustratingly disconnected."
      }
    ],
    growthMoment: "Growth happens when she finds worth beyond achievement and he finds connection beyond observation. When both discover they're valuable simply for existing.",
    reflection: "What is your value when no one is watching? What is your value when you're not performing?"
  },

  {
    type1: 3, type2: 6,
    title: "The Star and the Skeptic",
    subtitle: "When confidence meets doubt",
    narrative: `He projected certainty; she projected questions. It was attraction and irritation from the start.

The Three moved through the world as though success was inevitable. Obstacles were opportunities. Failure was not an option—or not acknowledged, anyway. His confidence was magnetic, almost blinding.

The Six saw all the ways it could go wrong. She spotted risks, anticipated disasters, questioned motives. His certainty felt dangerous to her—how could anyone be so sure?

"You're so negative," he said, frustrated by her constant worrying.
"You're so reckless," she countered. "You don't think about consequences."

But here was the secret: his confidence was partly performance. Beneath the polished success was fear of failure so profound he couldn't acknowledge it. Her doubt was actually wisdom—she saw real dangers.

And her doubt was partly performance too. Beneath the questioning was a longing for something solid to trust. His confidence, when it was real, gave her something to lean against.

The crisis came when his big project failed. Spectacularly. Publicly. The image shattered.

She expected to feel vindicated—she'd warned him, after all. Instead, she felt his devastation and something shifted. She stopped questioning and started supporting. Not blind faith—real support. "We'll figure this out together."

And he, for the first time, stopped performing success and admitted failure. "I don't know what to do."

In that mutual vulnerability, something real began. He learned that certainty could include doubt. She learned that faith could include risk.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Three builds security through achievement. SP Six worries about survival. Together they're practical partners—if his risks don't trigger her anxiety.",
        forType2: "Both want security; different strategies for getting it."
      },
      {
        instinct: 'so',
        forType1: "SO Three wants group admiration. SO Six is loyal to groups but questions authority. Together they navigate systems—he climbing, she testing trustworthiness.",
        forType2: "Work is aligning ambition with authentic belonging."
      },
      {
        instinct: 'sx',
        forType1: "SX Three is magnetically attractive. SX Six seeks courage through partnership. Together they create intense bonds—her testing, him proving.",
        forType2: "The Six's tests can exhaust the Three's patience. Growth is earning real trust."
      }
    ],
    growthMoment: "Growth happens when confidence includes honest doubt, and doubt includes courageous faith. When both stop performing their defaults and meet in the uncertain middle.",
    reflection: "What would your confidence look like if it could include doubt? What would your doubt look like if it could include trust?"
  },

  {
    type1: 3, type2: 7,
    title: "The Achiever and the Adventurer",
    subtitle: "When success meets possibilities",
    narrative: `Two golden retrievers found each other. Everything was exciting. Everything was possible. Let's do this, then this, then this!

The Three and Seven were the most high-energy pairing imaginable. Both optimistic. Both forward-moving. Both allergic to negativity. Together they could conquer the world—or at least keep each other entertained while avoiding their feelings.

"Let's start a business!"
"Let's travel!"
"Let's do both!"

The first years were a whirlwind of accomplishment and adventure. She achieved; he explored. He brought levity to her ambition; she brought focus to his ideas. They made a great team.

But neither would slow down. Both were running from something—she from worthlessness, he from pain. The constant motion was a shared defense mechanism, and they enabled each other perfectly.

"Are you happy?" someone asked her at a party.
She didn't know. She hadn't stopped long enough to check.

"What do you really want?" someone asked him.
He listed ten more adventures. None of them answered the question.

The crash came when she burned out. Couldn't keep going. Sat in their beautiful apartment surrounded by achievements and felt... empty. And he, instead of sitting with her in that emptiness, suggested a vacation.

"I don't want to go anywhere," she said. "I want to feel something real."

It terrified both of them. Feeling real meant feeling the pain they'd been outrunning. But when they finally stopped—just stopped—and let themselves feel the hollowness and the grief, something deeper emerged. Not achievement. Not adventure. Just two tired people who finally admitted they were lost.

The relationship matured when motion became a choice instead of a compulsion.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Three builds security through success. SP Seven makes mundane life pleasurable. Together they create comfortable achievement—if they don't exhaust resources chasing more.",
        forType2: "Most grounded version but still avoiding depth."
      },
      {
        instinct: 'so',
        forType1: "SO Three wants prestige. SO Seven networks enthusiastically. Together they're a social power couple—if the performance ever stops.",
        forType2: "Maximum external success, minimum internal examination."
      },
      {
        instinct: 'sx',
        forType1: "SX Three is intensely attractive. SX Seven seeks intense experiences. Together they create thrilling romance—until the novelty fades and depth is required.",
        forType2: "Chemistry is immediate. Sustainability requires slowing down."
      }
    ],
    growthMoment: "Growth happens when both can sit still. When achievement and adventure serve life instead of escaping it. When facing pain becomes possible because they face it together.",
    reflection: "What are you running toward—or what are you running from?"
  },

  {
    type1: 3, type2: 8,
    title: "The Image and the Impact",
    subtitle: "When polish meets power",
    narrative: `She was refined; he was raw. Both were forces of nature.

The Three moved through the world with calculated grace. Every gesture served her image. She knew how to read a room and become what it needed. Her power was soft, strategic, irresistible.

The Eight moved through the world like a tank. No calculation, no polish—just direct force. He said what he meant and meant what he said. His power was obvious, unapologetic, sometimes terrifying.

"Why do you have to be so blunt?" she asked, embarrassed by his directness.
"Why do you have to be so fake?" he countered, frustrated by her image management.

Each saw the other's shadow. She envied his freedom from caring what people thought. He envied her ability to influence without intimidating. But they also judged each other—she thought he was crude; he thought she was hollow.

The test came at a work event. Someone insulted her subtly, and she smiled through it—performing competence, dying inside. He saw her face and exploded at the offender.

"You don't defend yourself," he said later, bewildered. "Why do you let people disrespect you?"

She had no answer. She'd been so focused on image that she'd forgotten she had the right to be angry.

And he learned something too: sometimes strategy accomplished what force couldn't. When she helped him navigate a complex negotiation with finesse instead of confrontation, he saw her strength differently.

They work when his honesty helps her find her real self, and her strategy helps him find his smart self. When power becomes sophisticated and sophistication becomes powerful.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Three builds practical success. SP Eight protects resources fiercely. Together they're a formidable team—if they don't compete for control.",
        forType2: "Both want security; different approaches to getting it."
      },
      {
        instinct: 'so',
        forType1: "SO Three seeks status through groups. SO Eight leads groups protectively. Together they can build empires—if they share the throne.",
        forType2: "Power dynamics need negotiating; both want to lead."
      },
      {
        instinct: 'sx',
        forType1: "SX Three is magnetically attractive. SX Eight possesses intensely. Together they create overwhelming chemistry—if neither dominates.",
        forType2: "Explosive attraction. Work is balancing intensity without power struggles."
      }
    ],
    growthMoment: "Growth happens when she stops performing strength and embodies it. When he learns that power can be refined without being diminished. When both find authentic force.",
    reflection: "What's the relationship between image and substance? Between strategy and truth?"
  },

  {
    type1: 3, type2: 9,
    title: "The Driver and the Passenger",
    subtitle: "When ambition meets acceptance",
    narrative: `She was always going somewhere; he was always arriving.

The Three lived in forward motion—goals, plans, next steps. Rest was for people without ambition. The future was always more compelling than the present.

The Nine lived in the present moment—comfortable, accepting, at peace. Why strive so hard when everything was basically fine? The present was good enough.

"Don't you want more?" she asked, frustrated by his contentment.
"Don't you ever rest?" he asked, exhausted by her constant motion.

At first, the differences seemed complementary. She provided direction; he provided calm. She pushed; he soothed. She energized; he grounded.

But over time, the frustration grew. She felt like she was dragging him through life. He felt like he was being dragged away from everything that mattered—peace, presence, simplicity.

"You have no ambition," she accused.
"You have no peace," he responded.

The crisis came when she achieved a major goal and felt... nothing. Empty. Lost. She'd been so focused on getting somewhere that she'd forgotten how to be somewhere.

He found her sitting on the floor, staring into space. Instead of suggesting she make a new plan, he just sat with her. For hours. Not doing anything. Not fixing anything. Just being present.

"Is this what it's like for you?" she asked finally. "Just... being?"

"Sometimes," he said. "It's not nothing. It's everything, actually."

She didn't fully understand, but she started to learn. And he, inspired by her, started to find his own goals—not her goals, but things he actually wanted.

They work when she learns to arrive and he learns to drive. When both discover that peace and purpose aren't opposites.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Three achieves for security. SP Nine creates comfortable routine. Together they build stable life—if she doesn't outpace his need for comfort.",
        forType2: "Most compatible version; both value practical stability."
      },
      {
        instinct: 'so',
        forType1: "SO Three seeks group success. SO Nine merges with community. Together they navigate belonging differently—she leading, he blending.",
        forType2: "She may feel she's carrying social effort for both."
      },
      {
        instinct: 'sx',
        forType1: "SX Three projects magnetic energy. SX Nine merges with partner's intensity. Together they create powerful bonds—if Nine maintains self amid merger.",
        forType2: "Risk of Nine disappearing into Three's agenda."
      }
    ],
    growthMoment: "Growth happens when the Three discovers that arriving is as important as going. When the Nine discovers that wanting is as valid as accepting. When both find the middle way.",
    reflection: "Can you be ambitious and peaceful at the same time? What would that look like?"
  },

  // === TYPE 4 PAIRINGS ===
  {
    type1: 4, type2: 5,
    title: "The Heart and the Mind",
    subtitle: "When feeling meets thinking",
    narrative: `She lived in the depths of emotion; he lived in the heights of thought. Both knew what it was to be different, to stand apart from the ordinary world.

The Four felt everything intensely—beauty, pain, longing, joy. Her inner world was a cathedral of emotion, vast and echoing. She sought someone who could meet her depth, who wouldn't be frightened by the intensity.

The Five thought everything thoroughly—patterns, systems, meanings. His inner world was a library of understanding, quiet and immense. He sought someone who could respect his boundaries while still wanting to know him.

They recognized each other immediately—two aliens in a world of ordinary people. Both outsiders. Both intense in their own way. Both needing space.

"You feel what I think," he said once, marveling at how she could access emotional truths he could only analyze.
"You think what I feel," she replied. "You make sense of what overwhelms me."

But the differences created friction too. When she was drowning in emotion, she wanted him to dive in with her. He wanted to analyze it, fix it, understand it from a safe distance.

"Just feel it with me!" she begged.
"I'm trying to help you understand it," he protested.

The breakthrough came when she realized his thinking was how he loved—he was trying to give her the gift of understanding. And he realized her feeling wasn't chaos to be solved—it was a different kind of knowing.

They learned to translate. She would say "I'm not asking you to feel it. Just witness it." He would say "I'm not dismissing your feelings. I'm offering you a map."

Their relationship became a place where heart and mind weren't opposites, but partners exploring different territories of the same landscape.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Four creates unique, aesthetic environments. SP Five hoards resources and maintains boundaries. Together they build a sanctuary—private, beautiful, protected.",
        forType2: "Both need space; work is sharing while maintaining autonomy."
      },
      {
        instinct: 'so',
        forType1: "SO Four feels like an outsider in groups. SO Five is the detached expert. Together they observe society from the margins—connected outsiders.",
        forType2: "Both feel different from others; shared alienation can bond or isolate."
      },
      {
        instinct: 'sx',
        forType1: "SX Four seeks intense, transformative connection. SX Five has deep but bounded intensity. Together they create profound intimacy—within limits.",
        forType2: "The Four may want more merger than Five can give. Growth is respecting different intimacy styles."
      }
    ],
    growthMoment: "Growth happens when the Four trusts that thinking is another form of presence. When the Five discovers that feeling is another form of understanding. When both recognize they're exploring the same mystery differently.",
    reflection: "Is your partner's way of engaging with life a rejection of yours—or a complement to it?"
  },

  {
    type1: 4, type2: 6,
    title: "The Depth and the Doubt",
    subtitle: "When melancholy meets anxiety",
    narrative: `Both lived in the land of what's missing. She felt the absence of something essential; he anticipated the arrival of something terrible.

The Four's suffering was poetic—she romanticized her pain, found beauty in longing, created meaning from melancholy. Her emotional intensity was both her gift and her curse.

The Six's suffering was practical—he worried about real dangers, imagined disasters, questioned everything. His vigilance was both his protection and his prison.

"You're always so negative," she said, though she spent hours in her own darkness.
"You're always so dramatic," he countered, though his anxiety created plenty of drama.

They didn't see, at first, how similar they were. Both lived in fear—she feared being ordinary, he feared being unprepared. Both created problems—she through emotional intensity, he through anticipatory worry. Both doubted—she doubted her worth, he doubted his safety.

The connection deepened when they stopped judging each other's suffering and started witnessing it. She learned that his worry wasn't weakness—it was his way of caring, of protecting. He learned that her intensity wasn't self-indulgence—it was her way of seeking depth, of refusing the shallow.

"I understand living in fear," she said one night. "Mine just looks different."

"I understand needing something to be different," he replied. "I just call it preparation."

They became each other's anchors. Her emotional courage helped him face feelings instead of just anticipating them. His practical wisdom helped her ground her emotions in reality instead of drowning in them.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Four focuses on aesthetics and unique environment. SP Six focuses on security and practical safety. Together they create protected, beautiful spaces—if they don't trigger each other's fears.",
        forType2: "Both are self-protective; work is opening to each other."
      },
      {
        instinct: 'so',
        forType1: "SO Four feels like an outsider. SO Six is loyal but questions belonging. Together they navigate community—her standing apart, him seeking reliable groups.",
        forType2: "Different relationships to groups; can feel disconnected from each other's social experience."
      },
      {
        instinct: 'sx',
        forType1: "SX Four seeks intense romantic transformation. SX Six seeks courage through relationship. Together they create powerful bonds—if her tests don't trigger his doubt.",
        forType2: "Maximum intensity. Both are testing—she for authenticity, he for trustworthiness."
      }
    ],
    growthMoment: "Growth happens when both can sit with their fears—hers of being ordinary, his of being unsafe—without drowning or running. When they witness each other's darkness with compassion.",
    reflection: "What would it mean to accept your fear rather than fight it? To let it be present without letting it define you?"
  },

  {
    type1: 4, type2: 7,
    title: "The Depths and the Heights",
    subtitle: "When melancholy meets mania",
    narrative: `She sank where he soared. He escaped what she embraced. It was the strangest attraction—and the most frustrating.

The Four lived in depths. She felt everything, lingered in melancholy, found beauty in darkness. She didn't want to be cheered up; she wanted to be met.

The Seven lived in heights. He bounced from possibility to possibility, reframing pain as opportunity, refusing to stay anywhere uncomfortable. He didn't want to dwell; he wanted to move.

"Why do you wallow?" he asked, genuinely unable to understand why anyone would stay in pain.
"Why do you avoid?" she countered, equally baffled by his relentless positivity.

They were each other's shadow—the thing they feared becoming. She feared his superficiality, the way he skated over feelings. He feared her depths, the way she got stuck in darkness.

But underneath the surface difference was a shared longing. Both wanted life to be extraordinary. Both refused the ordinary. Both were seeking something more.

The breakthrough came when she got tired of her own intensity. "I'm exhausted," she admitted. "I don't want to feel this deeply today."

He didn't try to fix it or distract her. He just said: "I'll hold the light for a while. You don't have to climb out yet."

And when his relentless optimism finally cracked—when a loss was too big to reframe—she didn't try to cheer him up. She just sat with him in the dark and said: "This is where I live. Welcome."

They learned that depth and heights were both valid responses to life's intensity. Neither was wrong. And sometimes, they could meet in the middle—not drowning, not flying, just present together.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Four creates a beautiful, unique environment. SP Seven pursues sensory pleasures. Together they create aesthetic abundance—if they don't exhaust each other.",
        forType2: "She may find him superficial; he may find her draining."
      },
      {
        instinct: 'so',
        forType1: "SO Four feels like an outsider looking in. SO Seven is socially enthusiastic. Together they navigate belonging differently—she critiques what he celebrates.",
        forType2: "Maximum contrast in social energy. Work is respecting different social needs."
      },
      {
        instinct: 'sx',
        forType1: "SX Four seeks intense, transformative love. SX Seven seeks intense experiences. Together they create passionate bonds—if he stays present and she embraces joy.",
        forType2: "Both want intensity; different relationships to it."
      }
    ],
    growthMoment: "Growth happens when she can rise without feeling she's betraying her depth. When he can descend without feeling he's dying. When both discover that light and dark need each other.",
    reflection: "What would it mean to honor both your depths and your heights? To not have to choose?"
  },

  {
    type1: 4, type2: 8,
    title: "The Sensitive and the Strong",
    subtitle: "When vulnerability meets power",
    narrative: `She led with her wounds; he led with his armor. Both were intense beyond measure.

The Four wore her heart outside her body. Every emotion was visible, every nuance expressed. She found strength in vulnerability, beauty in brokenness. She couldn't understand people who hid what they felt.

The Eight wore his armor like a second skin. Every emotion was controlled, every vulnerability protected. He found safety in strength, power in invulnerability. He couldn't understand people who exposed their soft underbelly.

"You're so defended," she said, hurt by his walls.
"You're so exposed," he countered, uncomfortable with her rawness.

Each had what the other needed and feared. She needed his strength—her emotions sometimes overwhelmed her, and his solidity was a container she could rest against. But his power also terrified her; she'd been hurt by people who mistook domination for strength.

He needed her vulnerability—his armor kept out pain but also connection, and her openness showed him another way. But her intensity also terrified him; feelings were dangerous territory he'd learned to avoid.

The crisis came when he hurt her without knowing—a casual dismissal that cut deep. She crumpled. And he, seeing her pain, didn't know what to do with the tenderness that rose in him.

"I'm sorry," he said, and it cost him something enormous to say it. To be soft. To not be defended.

"I know," she said. "I know it's hard for you."

In that moment, his armor cracked a little. And her sensitivity became strength—she received his vulnerability when he finally offered it.

They work when his strength serves her sensitivity, and her sensitivity opens his heart. When power and vulnerability become partners.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Four is more grounded in practical aesthetics. SP Eight protects resources fiercely. Together they build a protected sanctuary—if neither dominates.",
        forType2: "Both are self-protective; different strategies."
      },
      {
        instinct: 'so',
        forType1: "SO Four feels like an outsider. SO Eight protects groups fiercely. Together they navigate community—she critiques, he defends.",
        forType2: "She may feel dismissed by his certainty; he may feel undermined by her complexity."
      },
      {
        instinct: 'sx',
        forType1: "SX Four seeks transformative intensity. SX Eight possesses with fierce passion. Together they create overwhelming bonds—maximum emotion, maximum power.",
        forType2: "Most intense version. Both must maintain self in the fire."
      }
    ],
    growthMoment: "Growth happens when her sensitivity teaches him that vulnerability is not weakness. When his strength teaches her that protection is not rejection. When both find that tender and tough aren't opposites.",
    reflection: "What if vulnerability were a form of strength? What if strength could include tenderness?"
  },

  {
    type1: 4, type2: 9,
    title: "The Intense and the Peaceful",
    subtitle: "When drama meets calm",
    narrative: `She was all feeling; he was all acceptance. The storm met the still lake.

The Four lived at emotional extremes—depths of despair, heights of longing, intensity in everything. Life was a drama, and she was both actor and audience. Nothing was ordinary; everything meant something.

The Nine lived in peaceful acceptance—even-keeled, undisturbed, at home wherever he was. Life was a gentle stream, and he floated with the current. Nothing needed to be different; everything was basically okay.

"Don't you feel anything?" she demanded, frustrated by his calm.
"Do you have to feel everything so intensely?" he wondered, exhausted by her storms.

At first, the attraction was clear: she was tired of her own intensity and found his peace restful. He was tired of his own flatness and found her passion enlivening.

But over time, the friction grew. She felt unseen—her intensity was the most important thing about her, and he seemed to absorb it without response. He felt overwhelmed—her emotional demands were relentless, and he couldn't match her.

"You don't care about anything," she accused.
"You care too much about everything," he replied, then immediately felt guilty for having an opinion.

The breakthrough came when she finally saw what his peace actually was. Not absence of feeling, but a deep acceptance that didn't need drama to feel alive. And he finally saw what her intensity actually was—not self-indulgence, but a refusal to live a life that didn't matter.

"I need to matter to you," she said finally.
"You do," he replied. "I just show it differently."

They work when she accepts that peace is not indifference, and he accepts that intensity is not immaturity. When both discover that passion and peace can coexist.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Four creates aesthetic environments. SP Nine creates comfortable routines. Together they build a peaceful haven—if her need for unique doesn't conflict with his need for simple.",
        forType2: "Both introverted; risk of parallel lives."
      },
      {
        instinct: 'so',
        forType1: "SO Four feels like an outsider. SO Nine merges with community. Together they navigate belonging—she standing apart, he blending in.",
        forType2: "Very different social energies; work is bridging."
      },
      {
        instinct: 'sx',
        forType1: "SX Four seeks intense one-on-one connection. SX Nine merges completely with partner. Together they create deep bonds—if she doesn't overwhelm and he doesn't disappear.",
        forType2: "Her intensity can activate him or exhaust him."
      }
    ],
    growthMoment: "Growth happens when she finds peace within her intensity, and he finds passion within his calm. When both discover that full presence includes all the emotions and the space that holds them.",
    reflection: "What would it mean to be intense and peaceful at the same time? To feel deeply without drowning?"
  },

  // === TYPE 5 PAIRINGS ===
  {
    type1: 5, type2: 6,
    title: "The Observer and the Questioner",
    subtitle: "When detachment meets doubt",
    narrative: `Two minds seeking safety found each other—one through withdrawal, one through vigilance.

The Five retreated to understand. The world was overwhelming, people were draining, so he built walls of knowledge and solitude. If he understood enough, he could handle anything. His safety was in distance.

The Six questioned to prepare. The world was dangerous, authorities were unreliable, so she gathered allies and tested everything. If she anticipated enough, she could handle anything. Her safety was in readiness.

"Why don't you engage more?" she asked, worried by his withdrawal.
"Why don't you trust more?" he wondered, exhausted by her questions.

They recognized each other's fear—both lived in a world that felt threatening, both developed strategies to feel safe. But their strategies sometimes clashed. When she needed reassurance, he offered analysis. When he needed space, she pressed for connection.

"I just want to know we're okay," she said.
"I just told you we are," he replied, confused about why she needed to ask again.

The breakthrough came when they mapped each other's fear responses. She learned that his withdrawal wasn't rejection—it was how he regulated his energy. He learned that her questions weren't distrust—they were how she regulated her anxiety.

"Your silence scares me," she admitted. "But I'm learning it doesn't mean you're gone."
"Your questions overwhelm me," he admitted. "But I'm learning they mean you care."

They built something rare—a relationship where both anxious strategies could coexist. His calm helped steady her doubt. Her loyalty helped warm his isolation.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Five guards resources carefully. SP Six worries about survival. Together they're practical, security-focused partners—if anxiety doesn't spiral.",
        forType2: "Both prepare for scarcity; can reinforce worry or create stability."
      },
      {
        instinct: 'so',
        forType1: "SO Five is the detached expert. SO Six seeks group belonging and loyalty. Together they navigate community—he from outside, she from within.",
        forType2: "Different relationships to groups can complement or conflict."
      },
      {
        instinct: 'sx',
        forType1: "SX Five has intense private connections. SX Six seeks courage through relationship. Together they create deep bonds—if she trusts his boundaries and he tolerates her intensity.",
        forType2: "Both want connection but fear it; can create profound trust or frustrating distance."
      }
    ],
    growthMoment: "Growth happens when the Five engages without losing himself, and the Six trusts without needing constant proof. When both discover that safety comes from within, not from control.",
    reflection: "What does real safety feel like—not the illusion of control, but actual security? Can you find it in uncertainty?"
  },

  {
    type1: 5, type2: 7,
    title: "The Thinker and the Enthusiast",
    subtitle: "When depth meets breadth",
    narrative: `He went deep; she went wide. Both were seeking to fill an inner emptiness, but their strategies couldn't have been more different.

The Five dove into one subject until he knew everything about it. Knowledge was infinite, and he wanted mastery. His mind was a well—deep, dark, cool.

The Seven skimmed across everything, sampling possibilities. Experience was infinite, and she wanted all of it. Her mind was a river—wide, rushing, sparkling.

"How can you spend a week on one book?" she asked, restless just thinking about it.
"How can you start so many things without finishing any?" he wondered, exhausted just watching her.

At first, the attraction was pure: his depth grounded her; her energy enlivened him. She felt steadied by his focus; he felt expanded by her enthusiasm.

But the friction emerged quickly. She found his pace painfully slow, his interests painfully narrow. He found her pace exhausting, her scattered attention superficial.

The fight was about vacation. She wanted to see five cities in ten days. He wanted to spend the whole time in one museum.

"You're missing everything!" she said.
"You're not seeing anything!" he countered.

The resolution required both to stretch. She learned to slow down sometimes, to go deep into one experience and find the richness there. He learned to speed up sometimes, to let go of completeness and just enjoy.

"Show me one thing fully," she asked him.
"Show me ten things quickly," he asked her.

They became guides to each other's way of being.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Five guards resources and energy. SP Seven seeks pleasurable experiences. Together they navigate scarcity vs abundance—his minimalism, her gluttony.",
        forType2: "Very different relationships to resources and pleasure."
      },
      {
        instinct: 'so',
        forType1: "SO Five is the intellectual expert. SO Seven networks enthusiastically. Together they engage community—he contributing knowledge, she connecting people.",
        forType2: "Complementary if they respect each style."
      },
      {
        instinct: 'sx',
        forType1: "SX Five has intense private bonds. SX Seven seeks intense experiences. Together they create concentrated passion—if she stays present and he opens up.",
        forType2: "Both want intensity; different expressions of it."
      }
    ],
    growthMoment: "Growth happens when depth and breadth become choices rather than compulsions. When he can enjoy expansion and she can appreciate focus. When both find that less sometimes means more, and more sometimes means less.",
    reflection: "What would it mean to have both depth and breadth? To know when to go deep and when to go wide?"
  },

  {
    type1: 5, type2: 8,
    title: "The Mind and the Force",
    subtitle: "When withdrawal meets confrontation",
    narrative: `He disappeared; she expanded. Both were private, but in opposite ways.

The Five survived by minimizing his footprint. Less need, less vulnerability. He retreated into his mind, where he was safe and powerful. The world could not demand from him what he did not offer.

The Eight survived by maximizing her impact. More control, more territory. She expanded into the world, where she was safe and powerful. The world could not threaten what she already dominated.

"Why do you hide?" she demanded, her energy filling every corner of the room.
"Why do you overwhelm?" he asked, shrinking from her force.

They frustrated each other profoundly. She couldn't understand someone who didn't want more—more space, more power, more presence. He couldn't understand someone who needed so much—so much control, so much intensity, so much room.

But beneath the surface, they recognized something. Both were afraid. Both were protecting something vulnerable. Both had built elaborate defenses.

"You're not as aggressive as you seem," he observed one day.
"You're not as weak as you pretend," she replied.

The shift happened when they stopped seeing withdrawal and force as opposites and started seeing them as different responses to the same fear.

She learned to value his restraint—not everyone needed to conquer. His non-reaction was sometimes the wisest response. And he learned to value her expansion—sometimes engagement was necessary. Her force could protect what needed protecting.

"You're my tank," he said. "You go where I can't."
"You're my strategist," she replied. "You see what I miss."`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Five hoards resources carefully. SP Eight protects territory fiercely. Together they build fortresses—his minimal, hers maximal.",
        forType2: "Both value self-sufficiency; different approaches to security."
      },
      {
        instinct: 'so',
        forType1: "SO Five is the detached expert. SO Eight protects groups powerfully. Together they serve community—his knowledge, her leadership.",
        forType2: "Complementary roles if power dynamics are negotiated."
      },
      {
        instinct: 'sx',
        forType1: "SX Five has intense private connections. SX Eight has overwhelming intimacy. Together they create powerful bonds—if neither dominates or withdraws completely.",
        forType2: "Maximum intensity meets maximum privacy. Work is meeting in the middle."
      }
    ],
    growthMoment: "Growth happens when the Five emerges with his own power, and the Eight restrains hers to let others breathe. When both discover strength that doesn't require defense.",
    reflection: "What would it feel like to be powerful without having to prove it? To be vulnerable without having to hide?"
  },

  {
    type1: 5, type2: 9,
    title: "The Private and the Peaceful",
    subtitle: "When solitude meets stillness",
    narrative: `Two quiet people found each other. The world hardly noticed.

The Five needed solitude to think. His mind was a rich landscape, and he wandered it alone. People were exhausting—their demands, their emotions, their needs. He needed space to be himself.

The Nine needed peace to exist. His spirit was a still pond, and he rested there. Conflict was exhausting—the tension, the discord, the demands for position. He needed harmony to be himself.

Together they created something unusual: a relationship with plenty of space and almost no friction. Both valued quietude. Both could sit in silence without discomfort. Neither demanded what the other couldn't give.

But was it intimacy, or was it just two people coexisting?

"Do we actually know each other?" she asked one day—a third party, observing them. "Or do you just share space?"

The question disturbed them. They had been so careful not to disturb each other that they had stopped reaching toward each other.

"What do you need?" he asked, realizing he'd never asked.
"What do you want?" she asked back, realizing she'd never pushed.

Both waited for the other to answer. Old patterns—he withdrew into thought; she merged into accommodation.

"I need to know you're there," he finally said. "Not just present. There."
"I want to know you see me," she replied. "Not just accept me. See me."

The relationship deepened when peace became connection instead of just absence of conflict. When solitude became choice instead of habit.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Five carefully manages resources. SP Nine creates comfortable routine. Together they build cozy, low-demand life—if isolation doesn't become disconnection.",
        forType2: "Most comfortable pairing; risk of parallel solitudes."
      },
      {
        instinct: 'so',
        forType1: "SO Five is the detached expert. SO Nine merges with groups. Together they navigate community—his observing, her belonging.",
        forType2: "Different relationships to groups; can complement or miss each other."
      },
      {
        instinct: 'sx',
        forType1: "SX Five has intense private bonds. SX Nine merges completely with partner. Together they create deep union—if both actually show up.",
        forType2: "Potential for profound intimacy or profound avoidance."
      }
    ],
    growthMoment: "Growth happens when peace includes passion, and privacy includes presence. When both discover that real intimacy requires showing up, not just sharing space.",
    reflection: "Is your togetherness real connection or comfortable avoidance? What would it mean to actually reach toward each other?"
  },

  // === TYPE 6 PAIRINGS ===
  {
    type1: 6, type2: 7,
    title: "The Worrier and the Optimist",
    subtitle: "When anxiety meets enthusiasm",
    narrative: `She saw the cliff edge; he saw the view. Every adventure was a negotiation between caution and possibility.

The Six anticipated everything that could go wrong. Her mind was a disaster preparedness kit—always scanning, always questioning, always braced. Hope felt dangerous; things could always fall apart.

The Seven anticipated everything that could go right. His mind was a possibility generator—always exploring, always reframing, always excited. Worry felt wasteful; things could always work out.

"Why do you always assume the worst?" he asked, frustrated by her hesitation.
"Why don't you ever think about consequences?" she countered, exhausted by his recklessness.

They were each other's medicine and poison. His optimism lifted her from the pit of anxiety—with him, she did things she'd never have tried alone. Her caution grounded his flights of fancy—with her, he actually considered whether plans were possible.

But they also triggered each other. His reframing felt like dismissal of her valid concerns. Her worrying felt like a wet blanket on his enthusiasm.

The crisis came when his big idea failed—spectacularly, as she'd feared. Instead of saying "I told you so," she surprised herself by feeling his pain.

"I'm sorry," she said. "I know how much this meant to you."

And he surprised himself by admitting: "You were right to worry. I should have listened more."

In that moment, something shifted. Her anxiety wasn't the enemy of his joy; it was its protector. His optimism wasn't the enemy of her caution; it was its companion.

They work when worry and wonder become a dialogue instead of a debate.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Six worries about practical security. SP Seven seeks practical pleasures. Together they navigate risk—her caution, his appetite.",
        forType2: "Most grounded pairing; still negotiating safety vs adventure."
      },
      {
        instinct: 'so',
        forType1: "SO Six seeks trustworthy groups. SO Seven networks enthusiastically. Together they engage community—her discernment, his enthusiasm.",
        forType2: "Both social but different approaches; can balance or clash."
      },
      {
        instinct: 'sx',
        forType1: "SX Six seeks courage through partnership. SX Seven seeks intensity through variety. Together they create passionate bonds—if she trusts his commitment and he stays present.",
        forType2: "Her intensity tests him; his variety threatens her. Growth is mutual presence."
      }
    ],
    growthMoment: "Growth happens when worry becomes wisdom without becoming prison. When optimism becomes vision without becoming denial. When both discover that faith includes doubt and doubt can include faith.",
    reflection: "Can you hold both caution and hope at the same time? What would that look like in your decisions?"
  },

  {
    type1: 6, type2: 8,
    title: "The Doubter and the Dominator",
    subtitle: "When questions meet certainty",
    narrative: `She questioned everything; he questioned nothing. It was collision and completion.

The Six lived in doubt—authority was unreliable, certainty was dangerous, every position needed testing. Her strength was in her questions, her loyalty earned through scrutiny.

The Eight lived in certainty—his gut was trustworthy, hesitation was weakness, every position needed defending. His strength was in his confidence, his loyalty given through protection.

"How can you be so sure?" she asked, genuinely puzzled.
"How can you doubt everything?" he countered, equally baffled.

At first, his certainty was a relief. She was tired of her own questioning, and his solidity gave her something to lean against. His confidence said: "The world is handleable. I've got this."

But as trust deepened, her testing began. She poked at his certainties, questioned his judgments, doubted his decisions—not to undermine him, but to see if he was real.

He didn't understand. "Why do you keep testing me? Haven't I proven myself?"
"Because I need to know if you're trustworthy," she said. "Really trustworthy."

For an Eight, being doubted felt like being disrespected. He wanted to respond with force. But something stopped him—he saw her fear underneath.

"I'm not going anywhere," he said. "You can test me. I'm still here."

It was the reassurance she needed—not that he'd pass every test, but that he'd stay through the testing.

And she learned something too: sometimes faith had to precede proof. Sometimes trust was a leap, not a conclusion.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Six worries about survival. SP Eight protects territory. Together they create security—her vigilance, his force.",
        forType2: "Both want safety; different strategies. Can build fortress together."
      },
      {
        instinct: 'so',
        forType1: "SO Six is loyal to groups and questions authority. SO Eight leads and protects groups. Together they navigate power—she questioning, he wielding.",
        forType2: "Dynamic tension around authority; can balance or clash."
      },
      {
        instinct: 'sx',
        forType1: "SX Six seeks courage through relationship. SX Eight has overwhelming intimacy. Together they create fierce bonds—intensity meeting intensity.",
        forType2: "Maximum passion. Both need to prove themselves; can be exhausting or exhilarating."
      }
    ],
    growthMoment: "Growth happens when her questions become wisdom rather than weapon. When his certainty can include humility. When both discover that real strength allows for doubt, and real trust survives questioning.",
    reflection: "What if certainty could hold doubt, and doubt could rest in certainty? What would that feel like?"
  },

  {
    type1: 6, type2: 9,
    title: "The Anxious and the Accepting",
    subtitle: "When vigilance meets peace",
    narrative: `She couldn't stop worrying; he couldn't start. It was comfort and frustration all at once.

The Six's mind never stopped scanning—what could go wrong, who could be trusted, what needed preparing. Her vigilance was exhausting but felt necessary. Relaxation felt dangerous.

The Nine's mind barely started—everything was basically fine, nothing needed addressing, why stir up trouble? His acceptance was peaceful but felt necessary. Vigilance felt pointless.

"How can you be so calm?" she asked, her anxiety spiking at his equanimity.
"How can you worry so much?" he wondered, his peace disturbed by her agitation.

The initial relief was real. His calm steadied her anxiety—with him, she could actually relax. Her awareness woke him up—with her, he couldn't fall completely asleep.

But the friction came too. When she needed him to worry with her, he went passive. When he needed her to relax with him, she couldn't stop analyzing.

"I feel like you don't care," she said.
"I feel like you can't stop," he replied.

The breakthrough came during a real crisis—something that actually required worry. She expected him to check out; instead, he showed up. Quietly, steadily, without panic—but present.

"You worried so I didn't have to," she realized. "You held the anxiety so I could function."

And he realized: her vigilance protected them both while he'd been asleep at the wheel. Her worry was a form of care.

They work when his peace can hold her fear, and her vigilance can wake his sleeping strength.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Six worries about practical security. SP Nine creates comfortable routine. Together they build stable, safe life—if she doesn't exhaust him with worry.",
        forType2: "Both want security through different means."
      },
      {
        instinct: 'so',
        forType1: "SO Six is loyal to groups. SO Nine merges with community. Together they navigate belonging—her discerning, him accepting.",
        forType2: "Different intensities around groups; can complement."
      },
      {
        instinct: 'sx',
        forType1: "SX Six seeks courage through partnership. SX Nine merges with partner. Together they create deep bonds—if he doesn't disappear and she doesn't overwhelm.",
        forType2: "Her intensity can activate or exhaust him."
      }
    ],
    growthMoment: "Growth happens when anxiety can rest in peace, and peace can wake to engagement. When both discover that presence includes both alertness and acceptance.",
    reflection: "What would it feel like to be alert and peaceful at the same time? Not worried, not asleep, but truly present?"
  },

  // === TYPE 7 PAIRINGS ===
  {
    type1: 7, type2: 8,
    title: "The Adventurer and the Warrior",
    subtitle: "When freedom meets force",
    narrative: `Two big energies filled every room they entered. Nothing was small with them; nothing was quiet.

The Seven moved through life as a celebration—possibilities everywhere, experiences waiting, joy as a birthright. She refused limitation. Her spirit was a balloon, always trying to rise.

The Eight moved through life as a conquest—challenges everywhere, territory to claim, power as a necessity. She refused weakness. Her spirit was a tank, always moving forward.

Together they were unstoppable—and completely exhausting to everyone around them.

"Let's do this!" she'd say.
"I'll make it happen," he'd respond.

Adventures were had. Mountains climbed. Businesses started. Nothing held them back.

But what happens when two forces meet and can't agree on direction?

"You're controlling!" she accused when he dictated plans.
"You're scattered!" he countered when she changed direction.

Both wanted to lead. Both resisted being led. Their fights were spectacular—loud, intense, seemingly irreconcilable. And then just as quickly, forgotten. Neither held grudges; both had somewhere else to be.

The depth came when life delivered something neither could escape—loss, limitation, something that couldn't be reframed or dominated.

She wanted to find the silver lining. He wanted to fight the unfightable.

"Maybe we can't fix this," she said finally.
"Maybe we don't have to win this," he replied.

In that moment, two expansive people learned to sit with something small. Together. Not escaping, not conquering. Just being.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Seven seeks comfort and pleasure. SP Eight protects resources. Together they build abundant, powerful life—if they don't compete for control.",
        forType2: "Both want more; work is sharing power."
      },
      {
        instinct: 'so',
        forType1: "SO Seven networks enthusiastically. SO Eight leads groups fiercely. Together they're a social power couple—if they can share the spotlight.",
        forType2: "Both have big social energy; can complement or clash."
      },
      {
        instinct: 'sx',
        forType1: "SX Seven seeks intense experiences. SX Eight has overwhelming passion. Together they create explosive bonds—maximum intensity, maximum pleasure, maximum power.",
        forType2: "The most intense pairing. Both must pace themselves."
      }
    ],
    growthMoment: "Growth happens when expansion includes stillness. When power includes surrender. When both discover that the deepest adventure is staying present with what is.",
    reflection: "What's the adventure you can't escape? The challenge you can't conquer? What would it mean to stay with it?"
  },

  {
    type1: 7, type2: 9,
    title: "The Enthusiast and the Peacemaker",
    subtitle: "When excitement meets equilibrium",
    narrative: `He was the spark; she was the calm. Together they made something almost sustainable.

The Seven burned bright—ideas, plans, possibilities tumbling out faster than anyone could catch them. Life was an adventure waiting to happen. Rest was just preparation for the next exciting thing.

The Nine glowed steady—accepting, peaceful, content with what was. Life was already good. Adventures were nice, but so was staying home.

"Come with me!" he'd say, already halfway out the door.
"Can we just... stay?" she'd ask, already settling into the couch.

At first, the contrast was delightful. His energy enlivened her; her peace grounded him. She did things she'd never do alone. He rested in ways he never had before.

But over time, the differences chafed. He felt held back by her inertia. She felt exhausted by his pace.

"You're so passive," he said, frustrated.
"You're so relentless," she replied, tired.

The crisis came when he planned an adventure she truly didn't want. He expected her to accommodate as usual. Instead, she said: "No."

It was quiet but firm. A boundary where there had never been one.

He was stunned. Then hurt. Then curious.

"You actually don't want to go?"
"I actually don't."

In that moment, she became a person instead of a peace-keeping backdrop. And he had to reckon with someone whose presence wasn't just about supporting his energy.

They deepened when excitement could include stillness, and peace could include desire.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Seven seeks pleasurable experiences. SP Nine seeks comfortable routine. Together they balance adventure and ease—if he doesn't overwhelm and she doesn't disappear.",
        forType2: "Most compatible version; both like comfort."
      },
      {
        instinct: 'so',
        forType1: "SO Seven networks enthusiastically. SO Nine merges with groups. Together they engage community—his leading, her blending.",
        forType2: "Different social energies; he's the face, she's the support."
      },
      {
        instinct: 'sx',
        forType1: "SX Seven seeks intense experiences. SX Nine merges with partner. Together they create bonds where her presence steadies his seeking—if she maintains herself.",
        forType2: "Risk of Nine disappearing into Seven's whirlwind."
      }
    ],
    growthMoment: "Growth happens when the Seven discovers that presence is an adventure. When the Nine discovers that desire isn't disruption. When both find that peace and passion can coexist.",
    reflection: "What's the difference between acceptance and disappearance? Between adventure and avoidance?"
  },

  // === TYPE 8 PAIRINGS ===
  {
    type1: 8, type2: 9,
    title: "The Force and the Flow",
    subtitle: "When power meets peace",
    narrative: `She was a wave; he was the shore. She crashed; he absorbed.

The Eight moved through the world with undeniable force—opinions, presence, energy that filled every room. She took up space because that's how she felt safe. The world bent to her or broke against her.

The Nine moved through the world like water—adapting, accepting, flowing around obstacles. He gave space because that's how he kept peace. The world rarely noticed him; that's how he preferred it.

"Why don't you fight for anything?" she demanded.
"Why do you fight for everything?" he wondered.

At first, the difference seemed perfect. She needed someone who could receive her force without crumbling. He needed someone who didn't require him to lead. She pushed; he absorbed. She decided; he agreed.

But slowly, she realized something disturbing: she was with a ghost. When she pushed, there was no pushback. When she asked what he wanted, he had no answer. He had disappeared into accommodation.

"Where are you?" she asked finally. "I can't find you."

"I'm right here," he said.

"No, you're not. You're just reflecting me back. I want to know what you want."

It was the question that changed everything. Because he didn't know. He'd been so focused on keeping peace that he'd forgotten he had preferences.

And she had to face something too: her force had crushed the very thing she was looking for. She wanted a partner, not a mirror.

The relationship transformed when she learned to make room, and he learned to take it. When her power could include softness, and his peace could include position.`,
    subtypeVariations: [
      {
        instinct: 'sp',
        forType1: "SP Eight protects territory and resources. SP Nine creates comfortable, peaceful space. Together they build a protected haven—if she doesn't dominate and he doesn't disappear.",
        forType2: "Both want security through different means."
      },
      {
        instinct: 'so',
        forType1: "SO Eight leads and protects groups. SO Nine merges with community. Together they serve others—her leading, him supporting.",
        forType2: "Complementary roles if power dynamics are healthy."
      },
      {
        instinct: 'sx',
        forType1: "SX Eight has overwhelming intimacy. SX Nine merges completely with partner. Together they create profound bonds—if she doesn't consume and he maintains identity.",
        forType2: "Maximum intensity meets maximum merger. Work is maintaining two selves."
      }
    ],
    growthMoment: "Growth happens when force includes gentleness, and flow includes direction. When both discover that real strength requires two present people.",
    reflection: "What would it mean to be powerful without overwhelming? To be peaceful without disappearing?"
  }
];

// Helper to get a relationship story by type pair
export const getRelationshipStory = (
  type1: TypeNumber,
  type2: TypeNumber
): RelationshipStory | undefined => {
  return relationshipStories.find(
    s => (s.type1 === type1 && s.type2 === type2) || (s.type1 === type2 && s.type2 === type1)
  );
};

// Get all stories for a particular type
export const getStoriesForType = (type: TypeNumber): RelationshipStory[] => {
  return relationshipStories.filter(s => s.type1 === type || s.type2 === type);
};
