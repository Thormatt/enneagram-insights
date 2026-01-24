import type { Subtype, TypeNumber, InstinctType } from '../../types';

export const subtypes: Subtype[] = [
  // TYPE 1 SUBTYPES
  {
    type: 1,
    instinct: 'sp',
    name: 'Worry/Anxiety',
    ichazoTitle: 'Anxiety',
    description: `The SP One is the "worrier" who tries to make everything perfect as a way to feel safe
and secure. They are the warmest of the Ones but also the most anxious. Their perfectionism is
turned toward managing material life—they want everything in order to avoid problems.`,
    characteristics: [
      'Warm and friendly compared to other Ones',
      'Anxious about getting everything right',
      'Perfectionism focused on practical matters',
      'Worry about health, finances, and domestic life',
      'May fuss over details and preparation'
    ],
    blindSpots: [
      'May not recognize their anxiety as perfectionism',
      'Can worry themselves into paralysis',
      'May miss the forest for the trees'
    ],
    growthPath: 'Learning to tolerate imperfection and uncertainty without excessive worry'
  },
  {
    type: 1,
    instinct: 'so',
    name: 'Non-Adaptability',
    ichazoTitle: 'Inadaptability',
    description: `The SO One is the "reformer" in the social sense—they have strong beliefs about how
society should be and can be rigid about social norms. They are the most typically "One-like" of
the subtypes, embodying the critical teacher or moral authority.`,
    characteristics: [
      'Strong convictions about right and wrong in society',
      'Can be the critical teacher or moral authority',
      'Rigid about social/ethical standards',
      'Focused on reform and doing the right thing publicly',
      'May be preachy or self-righteous'
    ],
    blindSpots: [
      'Can be inflexible in social situations',
      'May alienate others with moral rigidity',
      'Difficulty seeing other perspectives as valid'
    ],
    growthPath: 'Learning flexibility and humility in social contexts'
  },
  {
    type: 1,
    instinct: 'sx',
    name: 'Zeal',
    ichazoTitle: 'Jealousy',
    description: `The SX One (sometimes called the "counter-type" One) focuses their perfectionism on
relationships and partners. They have an intense desire to improve their loved ones and can be
jealous if others don't meet their ideals. This is the most reforming and least patient One.`,
    characteristics: [
      'Intense focus on perfecting relationships',
      'Can be zealous about "fixing" partners',
      'More outwardly passionate than other Ones',
      'Jealousy when ideals aren\'t met',
      'May struggle with anger in intimate relationships'
    ],
    blindSpots: [
      'Can be controlling in relationships',
      'May project inner critic onto partner',
      'Difficulty accepting loved ones as they are'
    ],
    growthPath: 'Learning to love partners as they are rather than as ideal versions'
  },

  // TYPE 2 SUBTYPES
  {
    type: 2,
    instinct: 'sp',
    name: 'Privilege',
    ichazoTitle: 'Me First',
    description: `The SP Two (the "counter-type") is less overtly helpful and more focused on getting
their own needs met, often through appearing lovable or childlike. They seek to be taken care of
by being irresistible rather than by being indispensable helpers.`,
    characteristics: [
      'Less overtly helpful, more focused on being loved',
      'Can appear childlike or cute to elicit care',
      'More aware of own needs than other Twos',
      'Seeks protection and nurturing from others',
      'May seem more self-focused than stereotypical Two'
    ],
    blindSpots: [
      'May manipulate through helplessness',
      'Can be demanding while seeming sweet',
      'May not recognize their own entitlement'
    ],
    growthPath: 'Learning to meet own needs directly rather than through seduction'
  },
  {
    type: 2,
    instinct: 'so',
    name: 'Ambition',
    ichazoTitle: 'Ambition',
    description: `The SO Two is the "power behind the throne"—they gain influence and status through
strategic relationships and being indispensable to important people. They are the most ambitious
Two, though their ambition is often in service to others or groups.`,
    characteristics: [
      'Seeks influence through strategic relationships',
      'The "power behind the throne"',
      'More ambitious than other Twos',
      'Focuses on being indispensable to leaders or groups',
      'Skilled at networking and social positioning'
    ],
    blindSpots: [
      'May not recognize their own ambition',
      'Can confuse helping with social climbing',
      'May feel resentful if influence isn\'t acknowledged'
    ],
    growthPath: 'Owning ambition directly rather than through others'
  },
  {
    type: 2,
    instinct: 'sx',
    name: 'Seduction',
    ichazoTitle: 'Seduction/Aggression',
    description: `The SX Two is the most intense and romantic of the Twos, focused on being attractive
and irresistible to their chosen person. They pour energy into special connections and can be
quite bold in pursuing the object of their affection.`,
    characteristics: [
      'Intensely focused on special romantic connections',
      'Uses charm and attractiveness to win love',
      'More emotionally intense than other Twos',
      'Bold in pursuing romantic interests',
      'Can be possessive of partners'
    ],
    blindSpots: [
      'Can confuse seduction with love',
      'May lose themselves in relationships',
      'Difficulty when attraction isn\'t reciprocated'
    ],
    growthPath: 'Learning that love doesn\'t require being irresistible'
  },

  // TYPE 3 SUBTYPES
  {
    type: 3,
    instinct: 'sp',
    name: 'Security',
    ichazoTitle: 'Security',
    description: `The SP Three (the "counter-type") is the most modest Three, focused on material
security through hard work rather than flashy success. They want to be seen as good rather than as
the best, and can be workaholics who never feel they've done enough.`,
    characteristics: [
      'Focus on security through hard work',
      'More modest than other Threes',
      'Workaholic tendencies',
      'Wants to be seen as good, not necessarily best',
      'Less flashy, more quietly competent'
    ],
    blindSpots: [
      'May overwork themselves into exhaustion',
      'Can miss their own need for recognition',
      'May not recognize they\'re driven by image'
    ],
    growthPath: 'Recognizing that worth isn\'t measured by productivity'
  },
  {
    type: 3,
    instinct: 'so',
    name: 'Prestige',
    ichazoTitle: 'Prestige',
    description: `The SO Three is the classic image-conscious achiever, focused on social status and
being seen as successful. They are skilled at reading what success looks like in any context and
shape themselves accordingly.`,
    characteristics: [
      'Highly focused on social status and prestige',
      'Classic "chameleon" who adapts to context',
      'Skilled at networking and impression management',
      'Measures self-worth by social metrics',
      'Can be very charming and polished'
    ],
    blindSpots: [
      'May lose authentic self in image crafting',
      'Can be superficial in relationships',
      'May not recognize their own feelings'
    ],
    growthPath: 'Finding value in being rather than appearing'
  },
  {
    type: 3,
    instinct: 'sx',
    name: 'Charisma',
    ichazoTitle: 'Masculinity/Femininity',
    description: `The SX Three focuses on being attractive and successful in the realm of intimate
relationships. They want to be desirable and impressive to their romantic interests, embodying
ideals of masculine or feminine attractiveness.`,
    characteristics: [
      'Focuses on being romantically desirable',
      'Cultivates attractiveness and sex appeal',
      'Wants to embody ideal masculinity or femininity',
      'Success measured in romantic conquest',
      'Can be intensely charming one-on-one'
    ],
    blindSpots: [
      'May confuse being desired with being loved',
      'Can be competitive in romantic arena',
      'May not know who they are apart from appeal'
    ],
    growthPath: 'Learning that authentic connection beats performance'
  },

  // TYPE 4 SUBTYPES
  {
    type: 4,
    instinct: 'sp',
    name: 'Tenacity',
    ichazoTitle: 'Dauntless/Reckless',
    description: `The SP Four (the "counter-type") is the most stoic Four, enduring suffering without
complaint. They internalize pain and may push themselves through hardship to prove their strength.
Less dramatic than other Fours, they may not look like typical Fours.`,
    characteristics: [
      'Stoic endurance of suffering',
      'Less outwardly emotional than other Fours',
      'Proves self through surviving hardship',
      'May deny or minimize own pain',
      'Focused on practical demands despite inner turmoil'
    ],
    blindSpots: [
      'May not recognize their own needs',
      'Can suffer unnecessarily in silence',
      'May miss opportunities for help or connection'
    ],
    growthPath: 'Learning to express needs and accept support'
  },
  {
    type: 4,
    instinct: 'so',
    name: 'Shame',
    ichazoTitle: 'Shame',
    description: `The SO Four is acutely aware of how they compare to others and often feels like an
outsider looking in. They may gravitate toward group suffering or outsider status, romanticizing
their exclusion while longing to belong.`,
    characteristics: [
      'Intense comparison with others',
      'Feels like a perpetual outsider',
      'May identify with marginalized groups',
      'Shame about not fitting in',
      'Longs for belonging while pushing it away'
    ],
    blindSpots: [
      'May create the exclusion they fear',
      'Can be envious while denying it',
      'May romanticize suffering and outsider status'
    ],
    growthPath: 'Finding belonging without losing uniqueness'
  },
  {
    type: 4,
    instinct: 'sx',
    name: 'Competition',
    ichazoTitle: 'Competition',
    description: `The SX Four is the most intense and dramatic Four, competing for attention and
demanding to be seen as special. They can be shameless in expressing their emotions and needs,
quite unlike the more withdrawn image of Fours.`,
    characteristics: [
      'Intensely demands attention and recognition',
      'Competes to be the most special',
      'Dramatic emotional expression',
      'Can be angry and assertive',
      'May seem more like an Eight than a typical Four'
    ],
    blindSpots: [
      'Can overwhelm others with intensity',
      'May alienate those they want close',
      'Difficulty seeing they push away what they want'
    ],
    growthPath: 'Learning that specialness doesn\'t require competition'
  },

  // TYPE 5 SUBTYPES
  {
    type: 5,
    instinct: 'sp',
    name: 'Castle',
    ichazoTitle: 'Castle',
    description: `The SP Five builds strong boundaries around their private space and resources. They are
the most withdrawn Five, creating a "castle" where they can retreat. They focus on having enough
and not being intruded upon.`,
    characteristics: [
      'Strong need for private space',
      'Builds protective boundaries',
      'Focuses on having enough resources',
      'Most withdrawn of the Fives',
      'Home is their sanctuary'
    ],
    blindSpots: [
      'Can become increasingly isolated',
      'May hoard unnecessarily',
      'Difficulty letting others into their space'
    ],
    growthPath: 'Learning that sharing space doesn\'t deplete safety'
  },
  {
    type: 5,
    instinct: 'so',
    name: 'Totem',
    ichazoTitle: 'Totem',
    description: `The SO Five (somewhat counter-type) seeks connection through expertise and shared
intellectual interests. They find their "tribe" through ideas and may become the expert or
guru in a specialized community.`,
    characteristics: [
      'Connects through intellectual interests',
      'Seeks expertise in specialized field',
      'May become a teacher or guru',
      'Finds belonging through ideas',
      'More social than other Fives, but on own terms'
    ],
    blindSpots: [
      'May only connect intellectually',
      'Can be rigid about being the expert',
      'May miss emotional dimensions of connection'
    ],
    growthPath: 'Learning to connect beyond intellectual exchange'
  },
  {
    type: 5,
    instinct: 'sx',
    name: 'Confidence',
    ichazoTitle: 'Confidence',
    description: `The SX Five (the "counter-type") seeks intense one-to-one connection through sharing
their inner world with a select person. They are the most romantic Five, seeking a partner who
can understand their depths.`,
    characteristics: [
      'Seeks deep connection with one special person',
      'Shares inner world with chosen partner',
      'More emotionally intense than other Fives',
      'Can be romantic and idealistic',
      'Seeks to be truly known by another'
    ],
    blindSpots: [
      'Can be possessive of the special relationship',
      'May project too much onto partner',
      'Difficulty when partner doesn\'t understand fully'
    ],
    growthPath: 'Learning that no one person can completely know another'
  },

  // TYPE 6 SUBTYPES
  {
    type: 6,
    instinct: 'sp',
    name: 'Warmth',
    ichazoTitle: 'Warmth',
    description: `The SP Six seeks security through forming warm alliances and being dependable. They are
the "phobic" Six who deals with fear through building supportive relationships and structures.
They can be very loyal and responsible.`,
    characteristics: [
      'Seeks security through warm connections',
      'More phobic—acknowledges fear',
      'Dependable and responsible',
      'Builds alliances for safety',
      'Warm and engaged with trusted people'
    ],
    blindSpots: [
      'Can be overly dependent on others',
      'May stay in limiting situations for security',
      'Can worry excessively about losing support'
    ],
    growthPath: 'Developing inner security alongside external support'
  },
  {
    type: 6,
    instinct: 'so',
    name: 'Duty',
    ichazoTitle: 'Duty',
    description: `The SO Six finds security through adherence to rules, systems, and authority. They are
the most rule-following Six, looking for clear guidelines and trying to do everything right
according to established standards.`,
    characteristics: [
      'Follows rules and respects authority',
      'Seeks clarity about expectations',
      'Very responsible and dutiful',
      'May defer to established systems',
      'Loyal to groups and institutions'
    ],
    blindSpots: [
      'Can be overly deferential to authority',
      'May not trust own judgment',
      'Can be rigid about rules'
    ],
    growthPath: 'Trusting inner authority alongside external guidelines'
  },
  {
    type: 6,
    instinct: 'sx',
    name: 'Strength',
    ichazoTitle: 'Strength/Beauty',
    description: `The SX Six (the "counter-type") deals with fear by appearing strong and intimidating.
They confront danger head-on rather than backing down. This is the "counterphobic" Six who may
not even recognize their underlying fear.`,
    characteristics: [
      'Confronts fear with strength',
      'Counterphobic—moves toward danger',
      'Can be aggressive and intimidating',
      'May not recognize own fear',
      'Proves safety through being tough'
    ],
    blindSpots: [
      'May not recognize fear underneath bravado',
      'Can create unnecessary conflict',
      'May exhaust themselves fighting'
    ],
    growthPath: 'Acknowledging fear as a first step to true courage'
  },

  // TYPE 7 SUBTYPES
  {
    type: 7,
    instinct: 'sp',
    name: 'Keepers of the Castle',
    ichazoTitle: 'Keepers of the Castle',
    description: `The SP Seven (somewhat counter-type) finds pleasure through material comforts and
practical pleasures. They are more grounded than other Sevens, creating networks of friends and
opportunities to ensure they won't miss out.`,
    characteristics: [
      'Focused on material pleasures and comfort',
      'More grounded than other Sevens',
      'Creates practical networks of opportunity',
      'Strategic about securing good experiences',
      'Less scattered, more practical gluttony'
    ],
    blindSpots: [
      'May over-prepare rather than enjoy now',
      'Can still avoid deeper feelings through busyness',
      'May hoard opportunities and connections'
    ],
    growthPath: 'Enjoying the present without needing insurance'
  },
  {
    type: 7,
    instinct: 'so',
    name: 'Sacrifice',
    ichazoTitle: 'Sacrifice',
    description: `The SO Seven (the "counter-type") is the most service-oriented Seven, finding meaning
through contributing to groups and causes. They postpone their own gratification for others and
can seem more like a Two than a typical Seven.`,
    characteristics: [
      'Service-oriented, contributes to causes',
      'Postpones own gratification for others',
      'Less obviously self-interested',
      'Idealistic about making a difference',
      'Can seem more Two-like than typical Seven'
    ],
    blindSpots: [
      'May use service to avoid own pain',
      'Can become resentful if sacrifice isn\'t appreciated',
      'May lose touch with own needs'
    ],
    growthPath: 'Giving without losing self or expecting return'
  },
  {
    type: 7,
    instinct: 'sx',
    name: 'Suggestibility',
    ichazoTitle: 'Suggestibility',
    description: `The SX Seven is the eternal optimist and dreamer, imagining wonderful possibilities
especially in relationships. They are suggestible in the sense of being enchanted by visions of
what could be. They are the most visionary and fantastical Seven.`,
    characteristics: [
      'Enchanted by romantic possibilities',
      'Highly imaginative and visionary',
      'Gets swept up in enthusiasm',
      'Most idealistic in relationships',
      'Sees potential and possibility everywhere'
    ],
    blindSpots: [
      'Can be disappointed when reality doesn\'t match fantasy',
      'May not see warning signs in relationships',
      'Can scatter energy among many interests'
    ],
    growthPath: 'Grounding visions in reality without losing magic'
  },

  // TYPE 8 SUBTYPES
  {
    type: 8,
    instinct: 'sp',
    name: 'Survival',
    ichazoTitle: 'Satisfactory Survival',
    description: `The SP Eight is the most practical Eight, focused on securing material resources and
territory. They are the "survivalist" who ensures they have enough power and resources to be
independent. Less openly confrontational than other Eights.`,
    characteristics: [
      'Focused on material security and resources',
      'Territorial about their domain',
      'Practical and survival-oriented',
      'Less overtly aggressive, more quietly powerful',
      'Focuses on having enough to be independent'
    ],
    blindSpots: [
      'Can be possessive of territory and resources',
      'May miss opportunities for vulnerability',
      'Can be rigid about self-sufficiency'
    ],
    growthPath: 'Learning that interdependence doesn\'t mean weakness'
  },
  {
    type: 8,
    instinct: 'so',
    name: 'Solidarity',
    ichazoTitle: 'Social Friendship',
    description: `The SO Eight (somewhat counter-type) uses their power to protect groups and causes.
They are the "protector of the weak" who channels aggression into social justice. Less personally
dominating, more focused on collective power.`,
    characteristics: [
      'Uses power to protect groups and causes',
      'Focused on social justice and fairness',
      'Loyal to their people',
      'Less personally dominating',
      'Channels aggression into advocacy'
    ],
    blindSpots: [
      'Can be righteously aggressive',
      'May see enemies where there are none',
      'Can lose sight of individual nuances'
    ],
    growthPath: 'Fighting for justice without making enemies'
  },
  {
    type: 8,
    instinct: 'sx',
    name: 'Possession',
    ichazoTitle: 'Possession/Surrender',
    description: `The SX Eight is the most intense Eight, focused on possessing and being possessed in
intimate relationships. They seek powerful bonds and can be quite charismatic and magnetic. This
is the most emotionally intense Eight.`,
    characteristics: [
      'Intense focus on intimate partnerships',
      'Possessive and passionate',
      'Most emotionally intense Eight',
      'Magnetic and charismatic',
      'Seeks powerful intimate bonds'
    ],
    blindSpots: [
      'Can be overwhelming in relationships',
      'May confuse possession with love',
      'Difficulty with partner\'s independence'
    ],
    growthPath: 'Learning that love doesn\'t require possession'
  },

  // TYPE 9 SUBTYPES
  {
    type: 9,
    instinct: 'sp',
    name: 'Appetite',
    ichazoTitle: 'Appetite',
    description: `The SP Nine is the most concrete Nine, seeking comfort through physical pleasures—
food, sleep, comfort. They may substitute these for more essential needs. This is the most
stubbornly resistant Nine, though in a passive way.`,
    characteristics: [
      'Seeks comfort through physical pleasures',
      'May substitute food, sleep for emotional needs',
      'Stubbornly resistant in passive way',
      'Very grounded and practical',
      'Focus on concrete, tangible comforts'
    ],
    blindSpots: [
      'May numb out through physical indulgence',
      'Can be stubbornly immovable',
      'May not recognize substituting comfort for engagement'
    ],
    growthPath: 'Waking up to what truly satisfies beyond comfort'
  },
  {
    type: 9,
    instinct: 'so',
    name: 'Participation',
    ichazoTitle: 'Participation',
    description: `The SO Nine is the hardest-working Nine, losing themselves through merging with
groups and group activities. They keep busy with social participation as a way to avoid their
own priorities. Can seem more active than typical Nines.`,
    characteristics: [
      'Merges with groups and activities',
      'Hardest-working Nine through busyness',
      'Loses self in social participation',
      'Seems more active than typical Nine',
      'Avoids own priorities through group involvement'
    ],
    blindSpots: [
      'May be busy but not doing own priorities',
      'Can lose identity in group',
      'May not realize they\'re avoiding self'
    ],
    growthPath: 'Finding self within community rather than losing it'
  },
  {
    type: 9,
    instinct: 'sx',
    name: 'Union',
    ichazoTitle: 'Union',
    description: `The SX Nine (the "counter-type") merges with a partner, taking on their energy and
priorities. They can seem very energized by the relationship but may lose their own identity.
This Nine is the most romantic and connected.`,
    characteristics: [
      'Merges identity with partner',
      'Takes on partner\'s energy and priorities',
      'Most relationship-focused Nine',
      'Can seem energized through partner',
      'Romantic and devoted'
    ],
    blindSpots: [
      'May completely lose self in partner',
      'Can be confused about own vs partner\'s wants',
      'May become nothing without the relationship'
    ],
    growthPath: 'Maintaining self while deeply connecting'
  }
];

export const getSubtypesByType = (typeNumber: TypeNumber): Subtype[] => {
  return subtypes.filter(s => s.type === typeNumber);
};

export const getSubtype = (typeNumber: TypeNumber, instinct: InstinctType): Subtype | undefined => {
  return subtypes.find(s => s.type === typeNumber && s.instinct === instinct);
};

export const getSubtypesByInstinct = (instinct: InstinctType): Subtype[] => {
  return subtypes.filter(s => s.instinct === instinct);
};
