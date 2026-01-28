import type { Scenario, ScenarioCategory, TypeNumber } from '../../types';

export const SCENARIO_CATEGORIES: Record<ScenarioCategory, { label: string; description: string; icon: string }> = {
  relationships: {
    label: 'Relationships',
    description: 'Romantic, friendship, and family dynamics',
    icon: '❤️'
  },
  work: {
    label: 'Work',
    description: 'Career, team, and leadership situations',
    icon: '💼'
  },
  stress: {
    label: 'Stress',
    description: 'Crisis, change, and challenging moments',
    icon: '⚡'
  },
  growth: {
    label: 'Growth',
    description: 'Opportunities and facing fears',
    icon: '🌱'
  },
  daily: {
    label: 'Daily Life',
    description: 'Everyday situations and mundane triggers',
    icon: '☀️'
  }
};

export const scenarios: Scenario[] = [
  // ========== RELATIONSHIPS SCENARIOS ==========
  {
    id: 'rel-001',
    title: 'The Forgotten Anniversary',
    category: 'relationships',
    situation: `Your partner forgot your anniversary. You wake up expecting some acknowledgment—maybe flowers, a card, or at least a heartfelt "Happy Anniversary"—but nothing. Your partner is going about their morning routine as if it's any other day. You've been together for five years, and while things have been busy lately with work and life, you had reminded them last week. By lunch, it's clear they've completely forgotten. You're at a crossroads: do you say something, let it slide, or find your own way to process this disappointment?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'This is wrong. Anniversaries matter and forgetting shows a lack of proper attention to the relationship.',
        fullResponse: {
          thought: 'How could they forget? I reminded them. There are standards in a relationship, and remembering important dates is basic. This reflects something deeper about their priorities.',
          action: 'I would calmly but directly bring it up, explaining why this matters and what I expect. Not to punish, but to correct and improve.',
          somaticMarker: 'Tension in jaw and shoulders. A tightness in chest that feels like contained frustration.'
        },
        psychologicalInsight: 'Type 1s experience forgotten commitments as violations of how things should be. The inner critic activates, potentially directed at both partner and self for not preventing this.',
        healthVariations: {
          healthy: 'Expresses disappointment clearly while remaining open to explanation and repair.',
          unhealthy: 'Becomes rigidly critical, using the oversight as evidence of fundamental character flaws.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'My heart sinks. Have I not been lovable enough lately for them to remember?',
        fullResponse: {
          thought: 'Did I do something wrong? Have I been giving too much or too little? Maybe if I had reminded them more... but shouldn\'t love be enough to remember?',
          action: 'I might create a moment for connection anyway—make a nice dinner—hoping they\'ll realize and feel terrible, thus affirming they do love me.',
          somaticMarker: 'Heaviness in heart area. A physical ache of unmet longing and vulnerability.'
        },
        psychologicalInsight: 'Type 2s may unconsciously interpret forgotten dates as evidence of being unworthy of love. The response often involves renewed efforts to "earn" attention.',
        healthVariations: {
          healthy: 'Expresses hurt directly and allows partner to make amends.',
          unhealthy: 'Becomes martyred, giving even more while harboring resentment.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'This is embarrassing. What does this say about our relationship—and about me?',
        fullResponse: {
          thought: 'Is our relationship not Instagram-worthy anymore? Have I become someone not worth celebrating? I need to fix this image problem.',
          action: 'I might book a nice restaurant myself and post about it, creating the successful relationship narrative regardless of what actually happened.',
          somaticMarker: 'Restless energy. A drive to do something, to fix, to perform success.'
        },
        psychologicalInsight: 'Type 3s experience relationship failures as personal brand failures. The instinct is to restore the image of success rather than sit with disappointment.',
        healthVariations: {
          healthy: 'Acknowledges hurt and has genuine conversation about relationship priorities.',
          unhealthy: 'Focuses on appearances, potentially posting fake happy content while feeling hollow inside.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'Of course. Nobody truly sees me. I\'m destined to be overlooked.',
        fullResponse: {
          thought: 'This confirms what I\'ve always feared—I\'m fundamentally forgettable. There\'s a tragic beauty in being the one who loves more deeply.',
          action: 'I might withdraw into creative expression—writing, art—processing this abandonment through the lens of romantic melancholy.',
          somaticMarker: 'Deep ache in chest. A bittersweet feeling of being uniquely misunderstood.'
        },
        psychologicalInsight: 'Type 4s may find identity in being the one who suffers more exquisitely. Disappointment becomes proof of special depth.',
        healthVariations: {
          healthy: 'Uses feelings as information, communicates vulnerability authentically.',
          unhealthy: 'Amplifies the drama, making the oversight into proof of existential abandonment.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'Interesting data point about memory and priorities in relationships.',
        fullResponse: {
          thought: 'Why do arbitrary calendar dates carry such weight? Though I should analyze: is this a pattern? What does research say about relationship maintenance?',
          action: 'I might observe quietly, perhaps bringing it up later in a detached way: "I noticed our anniversary passed without acknowledgment. Can we discuss?"',
          somaticMarker: 'Pulling inward. A slight emotional numbing as I retreat to analysis.'
        },
        psychologicalInsight: 'Type 5s may intellectualize emotional pain, using analysis as a defense against the rawness of disappointment.',
        healthVariations: {
          healthy: 'Acknowledges that the hurt is real and shares feelings despite discomfort.',
          unhealthy: 'Becomes coldly analytical, treating the relationship as a specimen rather than a connection.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'What does this mean? Should I be worried about us?',
        fullResponse: {
          thought: 'Is this the beginning of the end? Do they not care anymore? Or am I overreacting—maybe they have something planned later?',
          action: 'I might test them—dropping hints, watching for reactions—gathering evidence before confronting or reassuring myself.',
          somaticMarker: 'Stomach tightness. Alert system activated, scanning for threat level.'
        },
        psychologicalInsight: 'Type 6s may interpret forgotten occasions as signs of unreliability, triggering anxiety about relationship security.',
        healthVariations: {
          healthy: 'Asks directly about what happened, trusting the relationship can handle honest conversation.',
          unhealthy: 'Spirals into worst-case thinking, testing partner repeatedly for reassurance.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'Oh well! Let\'s not dwell on this. I\'ll plan something fun instead.',
        fullResponse: {
          thought: 'Negativity is a choice. I could be upset, or I could turn this into an adventure. Maybe a surprise trip I plan for us both!',
          action: 'I\'d likely redirect immediately—booking something exciting, making a joke of it, keeping the energy positive.',
          somaticMarker: 'Restless, forward-moving energy. A slight buzz of avoidance disguised as enthusiasm.'
        },
        psychologicalInsight: 'Type 7s reframe disappointment as opportunity, sometimes before fully processing the original hurt.',
        healthVariations: {
          healthy: 'Acknowledges disappointment briefly, then genuinely moves toward positive action.',
          unhealthy: 'Completely avoids the hurt, creating a manic positivity that never addresses the issue.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'Unacceptable. I won\'t pretend this is okay.',
        fullResponse: {
          thought: 'I don\'t get overlooked. If they can\'t prioritize our relationship, I need to know where I stand. No games.',
          action: 'I\'d confront directly: "You forgot our anniversary. Explain." No sugarcoating, no hints.',
          somaticMarker: 'Heat rising. Power stance activating. Ready for confrontation.'
        },
        psychologicalInsight: 'Type 8s experience being forgotten as a power issue. The vulnerability underneath is protected by immediate assertion.',
        healthVariations: {
          healthy: 'Expresses hurt underneath the anger, allows partner to see vulnerability.',
          unhealthy: 'Becomes dominating and punishing, potentially ending relationship to "win."'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'Maybe it\'s not that big a deal. I don\'t want to make a fuss.',
        fullResponse: {
          thought: 'They\'ve been stressed. Everyone forgets things. Is my disappointment worth disrupting our peace?',
          action: 'I might wait to see if they remember later, or quietly celebrate internally while saying nothing.',
          somaticMarker: 'Slight numbness. A tamping down of desires. Heaviness in body.'
        },
        psychologicalInsight: 'Type 9s may merge with their partner\'s perspective, minimizing their own needs to maintain harmony.',
        healthVariations: {
          healthy: 'Gently expresses that this mattered, holding both own needs and relationship peace.',
          unhealthy: 'Completely suppresses disappointment, building hidden resentment over time.'
        }
      }
    ]
  },
  {
    id: 'rel-002',
    title: 'The Difficult In-Law',
    category: 'relationships',
    situation: `Your partner\'s parent has been staying with you for a week. They\'ve been consistently critical of how you keep house, questioning your career choices at dinner, and making passive-aggressive comments about when you\'ll have children. Your partner seems blind to it, or perhaps just doesn\'t want to rock the boat. Tonight at dinner, the parent makes another pointed comment: "I just think if you really loved [partner], you\'d make more of an effort." You can feel your partner squirming but not speaking up. What happens inside you? What do you do?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'This is inappropriate. There are right ways to treat guests—and hosts.',
        fullResponse: {
          thought: 'Someone needs to establish proper boundaries here. If my partner won\'t, then I must—but it should be done correctly, fairly.',
          action: 'I\'d address it directly but politely: "I appreciate your concern, but our relationship decisions are ours to make." Then expect my partner to follow up.',
          somaticMarker: 'Righteous tension. Jaw set. The feeling of needing to correct an injustice.'
        },
        psychologicalInsight: 'Type 1s see boundary violations as moral issues requiring correction, even when socially uncomfortable.',
        healthVariations: {
          healthy: 'Sets clear boundary while maintaining respect for all parties.',
          unhealthy: 'Becomes rigidly critical of both in-law and partner for failing to meet standards.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'I\'ve tried so hard to make them comfortable. Why isn\'t it enough?',
        fullResponse: {
          thought: 'Maybe if I try harder, cook their favorite meal again, they\'ll finally see how much I love their child. I just need to give more.',
          action: 'I might excuse myself to "help in the kitchen" while internally rehearsing more ways to win their approval.',
          somaticMarker: 'Heart racing with effort. The exhaustion of performing lovability.'
        },
        psychologicalInsight: 'Type 2s may interpret criticism as not having given enough, leading to redoubled efforts that deplete them.',
        healthVariations: {
          healthy: 'Recognizes approval isn\'t earned through serving, sets healthy limits.',
          unhealthy: 'Becomes increasingly self-sacrificing while resentment builds invisibly.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'This is undermining my image. I need to reframe this narrative.',
        fullResponse: {
          thought: 'How do I come out of this looking successful? Maybe I pivot to achievements—mention the promotion, the recognition at work.',
          action: 'I\'d smoothly redirect: "Actually, we\'ve been focused on [impressive accomplishment]. We have our own timeline."',
          somaticMarker: 'Activated, performing energy. Mask firmly in place.'
        },
        psychologicalInsight: 'Type 3s manage image under attack, pivoting to achievements rather than addressing the emotional content.',
        healthVariations: {
          healthy: 'Addresses the underlying dynamic honestly rather than just managing appearances.',
          unhealthy: 'Becomes obsessed with "winning" the in-law\'s approval through impressive performance.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'They\'ll never understand me. I\'m too different for this ordinary family drama.',
        fullResponse: {
          thought: 'This is so pedestrian—the meddling in-law trope. But the pain is real, even if the situation is cliché. Nobody here sees my depth.',
          action: 'I might make a pointed, poetic comment that goes over their head but expresses my authentic feeling: "Some love can\'t be measured by conventional milestones."',
          somaticMarker: 'Melancholic ache. A sense of being alien in ordinary situations.'
        },
        psychologicalInsight: 'Type 4s may feel both above and rejected by conventional family dynamics, creating complex isolation.',
        healthVariations: {
          healthy: 'Expresses genuine feelings without dramatic escalation, seeks connection.',
          unhealthy: 'Becomes theatrically wounded, making the situation about their unique suffering.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'I need to retreat and analyze this family system.',
        fullResponse: {
          thought: 'What\'s the underlying dynamic here? Control issues? Generational patterns? I need space to understand before engaging.',
          action: 'I might excuse myself early, retreating to process alone, possibly researching family dynamics or simply withdrawing.',
          somaticMarker: 'Energy draining. A strong pull toward solitude and walls.'
        },
        psychologicalInsight: 'Type 5s often need to retreat from emotionally demanding situations to process intellectually before responding.',
        healthVariations: {
          healthy: 'Retreats briefly, then returns with thoughtful response and engaged presence.',
          unhealthy: 'Withdraws completely, leaving partner to handle everything, becoming emotionally unavailable.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'Is this an attack? Whose side is my partner really on?',
        fullResponse: {
          thought: 'Can I trust my partner to have my back? Why aren\'t they defending me? Maybe I need to prepare for worst case—what if they always choose family over me?',
          action: 'I\'d watch my partner\'s reaction carefully, later privately asking: "Where do you stand? Because I need to know if I\'m alone here."',
          somaticMarker: 'Vigilance. Scanning for loyalty. Stomach churning with uncertainty.'
        },
        psychologicalInsight: 'Type 6s often interpret family conflicts as tests of loyalty, needing clear allegiance from partners.',
        healthVariations: {
          healthy: 'Discusses concerns with partner directly, works toward united front.',
          unhealthy: 'Becomes paranoid about partner\'s loyalty, testing repeatedly, pushing them away.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'Let\'s lighten the mood! No need for this heaviness.',
        fullResponse: {
          thought: 'This is getting way too tense. I can redirect this energy toward something fun, change the subject, break the negativity.',
          action: 'I\'d crack a joke, suggest a fun activity: "Speaking of effort, who wants to try that new escape room this weekend?" Redirect, redirect.',
          somaticMarker: 'Buzzing avoidance energy. Physical restlessness to escape the heaviness.'
        },
        psychologicalInsight: 'Type 7s often use humor and activity to escape uncomfortable emotional confrontations.',
        healthVariations: {
          healthy: 'Lightens mood appropriately while still addressing issue later.',
          unhealthy: 'Never addresses the issue, accumulating unprocessed conflict.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'Nobody talks to me like that in my own home.',
        fullResponse: {
          thought: 'This is a power play, and I don\'t back down. If my partner won\'t set boundaries, I will. This ends now.',
          action: 'I\'d directly confront: "With respect, you\'re a guest here. I\'d appreciate if you kept opinions about our relationship to yourself."',
          somaticMarker: 'Fire rising. Protective energy activating. Ready for conflict.'
        },
        psychologicalInsight: 'Type 8s see disrespect in their space as requiring immediate confrontation, protecting territory and dignity.',
        healthVariations: {
          healthy: 'Sets firm boundary while remaining respectful, protects self without destroying relationship.',
          unhealthy: 'Escalates to domination, potentially causing permanent rift.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'Let\'s not make this bigger than it needs to be.',
        fullResponse: {
          thought: 'They\'ll be gone soon. Is it worth the fight? My partner is caught in the middle. Maybe I can just absorb this.',
          action: 'I might smile, change the subject, later processing alone or perhaps mentioning it mildly to partner as "no big deal."',
          somaticMarker: 'Numbing out. A fog descending. Heaviness in limbs.'
        },
        psychologicalInsight: 'Type 9s often absorb conflict to keep peace, potentially losing themselves in the process.',
        healthVariations: {
          healthy: 'Acknowledges own needs while still holding space for complexity.',
          unhealthy: 'Completely merges with situation, building resentment that erupts later.'
        }
      }
    ]
  },

  // ========== WORK SCENARIOS ==========
  {
    id: 'work-001',
    title: 'Credit Stolen',
    category: 'work',
    situation: `You\'ve spent three weeks developing an innovative solution for a persistent problem at work. Late nights, detailed research, creative thinking—this was your intellectual baby. In today\'s team meeting, your colleague presents your idea as their own. They don\'t mention your contribution at all. Your manager is impressed. The colleague smiles and accepts the praise. You\'re sitting right there. A few people glance at you, seemingly aware of what just happened. What do you feel? What do you do?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'This is fundamentally wrong. Credit should go where credit is due.',
        fullResponse: {
          thought: 'There are ethical standards for a reason. This violates them. I must correct this—not for ego, but for principle.',
          action: 'I would speak up in the meeting: "I\'m glad we\'re excited about this direction. As you may recall, I developed this approach over the past few weeks. I\'m happy to provide the detailed documentation." Calm, factual, irrefutable.',
          somaticMarker: 'Tight jaw. Controlled energy of righteous correction.'
        },
        psychologicalInsight: 'Type 1s experience intellectual theft as a moral violation requiring principled correction.',
        healthVariations: {
          healthy: 'Corrects the record professionally without excessive moralizing.',
          unhealthy: 'Becomes preachy about ethics, alienating others while being technically right.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'After everything I\'ve given this team, this is how I\'m treated?',
        fullResponse: {
          thought: 'I helped this person so many times. Is this what caring gets me? But if I make a scene, will people still like me?',
          action: 'I might approach the colleague privately afterward, hurt and seeking explanation, hoping they\'ll make it right and validate our relationship.',
          somaticMarker: 'Wounded heart. The sting of unreciprocated generosity.'
        },
        psychologicalInsight: 'Type 2s may experience professional betrayal through the lens of relationship, wondering what they did wrong.',
        healthVariations: {
          healthy: 'Addresses the issue directly, separating professional credit from personal worth.',
          unhealthy: 'Becomes martyr-like, giving more while harboring resentment.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'My reputation is at stake. I need to fix this immediately.',
        fullResponse: {
          thought: 'If I let this slide, I look weak. But if I make a scene, I look petty. I need to strategically reclaim credit while maintaining my professional image.',
          action: 'I\'d smoothly interject: "Thanks for presenting this! As we discussed when I was developing it, the key insight is..." Subtly claiming ownership without drama.',
          somaticMarker: 'Competitive tension. Strategic calculation activating.'
        },
        psychologicalInsight: 'Type 3s experience credit theft as an image and career threat, requiring strategic recovery.',
        healthVariations: {
          healthy: 'Reclaims credit authentically while maintaining professional relationships.',
          unhealthy: 'Becomes calculating and political, potentially undermining colleague aggressively.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'Of course my unique contribution goes unseen. Story of my life.',
        fullResponse: {
          thought: 'Nobody recognizes originality. My creative vision is appropriated by someone more ordinary who knows how to play the game I refuse to play.',
          action: 'I might withdraw, processing through internal narrative or creative expression. Perhaps later making a pointed comment about authenticity in creation.',
          somaticMarker: 'Deep melancholy. The familiar ache of being unseen.'
        },
        psychologicalInsight: 'Type 4s may experience stolen credit as confirmation of being perpetually overlooked for being too different.',
        healthVariations: {
          healthy: 'Addresses the situation while recognizing the hurt is real, not a character flaw.',
          unhealthy: 'Becomes dramatically wounded, perhaps quitting in an act of artistic protest.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'Interesting. I\'ll document this and consider my options.',
        fullResponse: {
          thought: 'I have the evidence—emails, timestamps, drafts. I need to analyze the best approach. No emotional reaction until I\'ve thought this through.',
          action: 'I\'d remain silent in the meeting, then compile documentation, consider whether this is worth spending social capital on, and approach manager with facts.',
          somaticMarker: 'Withdrawal into analysis. Emotional dampening as defense.'
        },
        psychologicalInsight: 'Type 5s often retreat to evidence and strategy, using intellectual preparation as protection.',
        healthVariations: {
          healthy: 'Uses documentation effectively while also expressing the personal impact.',
          unhealthy: 'Becomes coldly calculating, possibly engaging in passive retaliation.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'Can I trust anyone here? Who else has been undermining me?',
        fullResponse: {
          thought: 'If this person did this, what else is happening behind my back? Is management in on it? Who can I actually trust?',
          action: 'I might carefully probe trusted colleagues, gather evidence, then decide whether to confront or report to HR/management.',
          somaticMarker: 'Vigilance heightened. Scanning for other threats.'
        },
        psychologicalInsight: 'Type 6s may experience single betrayal as evidence of systemic threat, triggering broader suspicion.',
        healthVariations: {
          healthy: 'Addresses specific situation while maintaining appropriate trust in others.',
          unhealthy: 'Becomes paranoid, seeing conspiracies, potentially damaging multiple relationships.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'Frustrating, but I have ten more ideas where that came from.',
        fullResponse: {
          thought: 'Dwelling on this is a waste. I\'ll come up with something better. Plus, people who matter know my work. This is just a speed bump.',
          action: 'I might shrug it off publicly, already brainstorming the next innovation, perhaps mentioning casually: "I have some even better ideas building on this concept..."',
          somaticMarker: 'Forward-moving energy. Avoidance of the disappointment through activity.'
        },
        psychologicalInsight: 'Type 7s often reframe loss as opportunity, though sometimes before fully processing the hurt.',
        healthVariations: {
          healthy: 'Genuinely moves forward after appropriate acknowledgment of the situation.',
          unhealthy: 'Never addresses it, allowing pattern to repeat, resentment building underground.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'This will not stand. They need to know who they\'re dealing with.',
        fullResponse: {
          thought: 'Nobody takes what\'s mine without consequence. This is about respect and power. I will correct this immediately and publicly.',
          action: 'I\'d speak up in the meeting: "I appreciate you presenting the work I\'ve been developing these past weeks. Let me add some context from my research..." Firm, direct, undeniable.',
          somaticMarker: 'Rising fire. Power stance. Ready for confrontation.'
        },
        psychologicalInsight: 'Type 8s experience theft of credit as a power challenge requiring immediate assertion.',
        healthVariations: {
          healthy: 'Reclaims credit firmly but proportionately, maintains working relationships.',
          unhealthy: 'Escalates to domination, potentially crushing colleague and damaging reputation.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'It\'s uncomfortable, but is it worth the conflict?',
        fullResponse: {
          thought: 'Maybe they needed this win more than I do. The team benefits either way. And making a scene would be so awkward for everyone...',
          action: 'I might stay quiet, perhaps mentioning it to my manager in private later, if at all. The discomfort of conflict outweighs the injustice.',
          somaticMarker: 'Heaviness. A settling into resignation. Slight numbness.'
        },
        psychologicalInsight: 'Type 9s may minimize their own needs to avoid the discomfort of confrontation, even at personal cost.',
        healthVariations: {
          healthy: 'Finds low-conflict way to address the situation that still honors own contribution.',
          unhealthy: 'Completely suppresses, builds resentment, eventually disengages from work entirely.'
        }
      }
    ]
  },
  {
    id: 'work-002',
    title: 'The Unexpected Promotion',
    category: 'work',
    situation: `Your manager calls you into a private meeting with surprising news: you\'ve been selected for a significant promotion. The role means leading a team, higher visibility, more responsibility—and more stress. It\'s the kind of opportunity many dream about. But it also means moving away from the hands-on work you love, more political navigation, and potentially longer hours. You have 48 hours to decide. What goes through your mind? How do you approach this decision?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'Can I do this role correctly? What are the ethical implications of the position?',
        fullResponse: {
          thought: 'Leadership is a responsibility. Can I hold myself to the standards required? Will I have to compromise my principles? I need to evaluate if I can do this right.',
          action: 'I\'d create a detailed pros/cons list, consult trusted mentors about what the role really requires, and assess whether I can fulfill the position with integrity.',
          somaticMarker: 'Anxious deliberation. Pressure of responsibility weighing.'
        },
        psychologicalInsight: 'Type 1s evaluate opportunities through the lens of whether they can meet their own high standards in the new role.',
        healthVariations: {
          healthy: 'Realistically assesses capabilities while acknowledging growth potential.',
          unhealthy: 'Paralyzed by fear of not doing it perfectly, potentially declining opportunity.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'How will this affect my relationships? Will my team still need me?',
        fullResponse: {
          thought: 'Will I still be close to my colleagues? As a manager, will people like me? But also—this is recognition that I matter, that my contributions are valued!',
          action: 'I\'d reach out to people affected—current team, new team—gauging reactions, seeking approval for the decision, perhaps asking "What do you think I should do?"',
          somaticMarker: 'Mixed excitement and anxiety about love/approval implications.'
        },
        psychologicalInsight: 'Type 2s often evaluate career moves primarily through relationship impact.',
        healthVariations: {
          healthy: 'Considers relationships while also honoring own professional growth.',
          unhealthy: 'Makes decision based solely on what will make others happy or need them more.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'This is the success I\'ve been working toward. How do I maximize it?',
        fullResponse: {
          thought: 'This is validation. I\'ve earned this. Now, how do I leverage it for the next step? What title, salary, resources can I negotiate?',
          action: 'I\'d immediately strategize: negotiating terms, planning my first 90 days, thinking about how to announce this achievement and what it signals about my trajectory.',
          somaticMarker: 'Excitement. Achievement energy. Already planning next moves.'
        },
        psychologicalInsight: 'Type 3s often experience promotions as external validation, immediately strategizing for maximum advantage.',
        healthVariations: {
          healthy: 'Celebrates genuinely while also considering personal fit and sustainability.',
          unhealthy: 'Accepts regardless of fit, driven purely by image and advancement.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'Will this role let me express my authentic self, or will I become ordinary?',
        fullResponse: {
          thought: 'Management is so... conventional. Will I lose my uniqueness in bureaucracy? But also, recognition that I\'m special enough for this...',
          action: 'I\'d introspect deeply, perhaps through journaling or art, asking whether this path honors who I truly am or betrays my authentic nature.',
          somaticMarker: 'Push-pull of wanting recognition while fearing loss of identity.'
        },
        psychologicalInsight: 'Type 4s often struggle with conventional success, wanting recognition while fearing ordinary conformity.',
        healthVariations: {
          healthy: 'Finds way to bring authentic self to leadership role, integrating uniqueness with responsibility.',
          unhealthy: 'Rejects opportunity to maintain outsider identity, or accepts but feels perpetually inauthentic.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'What does this role actually entail? I need complete information before deciding.',
        fullResponse: {
          thought: 'What are the real expectations? How much social energy will this drain? Will I have time to maintain my expertise, or will I become an administrator?',
          action: 'I\'d request detailed information—job description, time allocation, actual responsibilities—and calculate whether I have the resources for this.',
          somaticMarker: 'Analytical mode. Slight anxiety about social/energy demands.'
        },
        psychologicalInsight: 'Type 5s evaluate opportunities through resource management—especially time, energy, and expertise preservation.',
        healthVariations: {
          healthy: 'Gathers information while remaining open to growth and stretch.',
          unhealthy: 'Focuses on potential drains, declining to preserve resources, avoiding growth.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'What are they not telling me? What could go wrong?',
        fullResponse: {
          thought: 'Why was I chosen? Is this a setup? What\'s the hidden agenda? But also—do I have the support systems to succeed in this?',
          action: 'I\'d thoroughly investigate—asking about why others didn\'t get it, what happened to the last person in this role, building contingency plans for failures.',
          somaticMarker: 'Alert scanning. Testing the ground before stepping.'
        },
        psychologicalInsight: 'Type 6s often evaluate opportunities through threat assessment, preparing for worst cases.',
        healthVariations: {
          healthy: 'Does appropriate due diligence while remaining open to possibility.',
          unhealthy: 'Becomes paralyzed by potential dangers, or accepts but lives in constant fear.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'New adventure! But wait—will this limit my options?',
        fullResponse: {
          thought: 'This opens doors! New experiences, new people, new challenges! But... what if I get stuck? What about all the other paths I\'d be closing?',
          action: 'I\'d immediately brainstorm all the exciting possibilities, probably leaning yes but negotiating for flexibility—travel, variety, creative freedom.',
          somaticMarker: 'Excitement buzzing, with underlying anxiety about commitment.'
        },
        psychologicalInsight: 'Type 7s are drawn to new opportunities but struggle with the commitment and option-closing they require.',
        healthVariations: {
          healthy: 'Embraces opportunity while accepting necessary limitations.',
          unhealthy: 'Accepts but immediately starts planning next move, never fully committing.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'More power and influence. But on whose terms?',
        fullResponse: {
          thought: 'This gives me more control, more ability to make things happen. But I need to ensure I\'m not being put in a position where I\'m controlled.',
          action: 'I\'d negotiate hard—for resources, authority, autonomy. Making clear that if I take this, I do it my way.',
          somaticMarker: 'Power assessment. Evaluating leverage and control.'
        },
        psychologicalInsight: 'Type 8s evaluate opportunities through power and autonomy—will this expand or constrain their ability to act?',
        healthVariations: {
          healthy: 'Accepts with appropriate negotiation, uses power to empower others.',
          unhealthy: 'Focuses solely on control, potentially undermining collaborative leadership.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'This is a lot. Maybe I\'m fine where I am?',
        fullResponse: {
          thought: 'Change is disruptive. My current situation is comfortable. But I don\'t want to disappoint anyone who believes in me... what do others think I should do?',
          action: 'I\'d seek many opinions, potentially letting others\' enthusiasm (or lack thereof) make the decision, struggling to connect with my own desires.',
          somaticMarker: 'Overwhelm. Difficulty accessing own preferences. Inertia.'
        },
        psychologicalInsight: 'Type 9s may struggle to connect with their own ambition, potentially merging with others\' expectations.',
        healthVariations: {
          healthy: 'Takes time to connect with own genuine desires, makes decision from center.',
          unhealthy: 'Declines to avoid disruption, or accepts based on others\' wishes, never fully engaging.'
        }
      }
    ]
  },

  // ========== STRESS SCENARIOS ==========
  {
    id: 'stress-001',
    title: 'The Health Scare',
    category: 'stress',
    situation: `Your doctor calls with results from routine tests: there\'s an abnormality that requires further investigation. They\'re calm but clear—this needs follow-up. It might be nothing, it might be serious. You won\'t know for two weeks until more tests are done. During those two weeks, you have work deadlines, family obligations, a friend\'s wedding. Life must continue while this uncertainty hangs. How do you navigate these weeks? What happens inside you?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'I need to handle this correctly—research, second opinions, proper protocols.',
        fullResponse: {
          thought: 'If I do everything right—diet, exercise, research, the best doctors—I can control this. I should have been more careful. What did I do wrong?',
          action: 'I\'d research extensively, seek multiple opinions, create a strict health regimen, potentially becoming rigid about "doing everything right" while also internally criticizing myself for any past imperfections.',
          somaticMarker: 'Controlled tension. Self-criticism activated. Body becomes another project to perfect.'
        },
        psychologicalInsight: 'Type 1s may respond to health uncertainty with self-blame and attempts to control through perfect behavior.',
        healthVariations: {
          healthy: 'Takes appropriate action while accepting what cannot be controlled.',
          unhealthy: 'Becomes obsessively self-critical, punishing body for perceived failures.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'Who do I tell? I don\'t want to burden anyone, but I need support.',
        fullResponse: {
          thought: 'I should keep giving to others—they need me. But also... will people be there for me if this is serious? Have I earned their care?',
          action: 'I might continue caring for others while dropping subtle hints about needing support, struggling to directly ask for help, possibly caretaking even harder to "deserve" care later.',
          somaticMarker: 'Ache of needing. Conflict between giving and receiving.'
        },
        psychologicalInsight: 'Type 2s often struggle to receive care, even in crisis, fearing they haven\'t earned it.',
        healthVariations: {
          healthy: 'Directly asks for support while continuing meaningful connections.',
          unhealthy: 'Martyrs through crisis alone, potentially resenting others for not intuiting their need.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'I can\'t let this slow me down. How do I maintain performance?',
        fullResponse: {
          thought: 'If I\'m sick, I\'m not successful. I need to keep achieving, keep appearing strong. Nobody can see this affecting me.',
          action: 'I\'d likely minimize it, continue crushing work goals, perhaps even increase productivity to prove I\'m still winning—compartmentalizing the fear entirely.',
          somaticMarker: 'Pushing energy. Denial in motion. Body as performance vehicle.'
        },
        psychologicalInsight: 'Type 3s may deny health concerns that threaten their identity as successful, capable performers.',
        healthVariations: {
          healthy: 'Maintains appropriate function while also processing fear and seeking support.',
          unhealthy: 'Completely denies impact, potentially harming health by ignoring needs.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'There\'s a strange dark beauty in facing mortality. Few will understand.',
        fullResponse: {
          thought: 'This confirms life\'s tragedy. I\'m on the edge of an abyss that most people never acknowledge. The depth of this experience isolates me further.',
          action: 'I might create art, write, process through intense emotional expression—perhaps romanticizing the experience while genuinely feeling its depths.',
          somaticMarker: 'Profound melancholy. Embracing the darkness as meaningful.'
        },
        psychologicalInsight: 'Type 4s may find identity in the intensity of suffering, seeing crisis as proof of their depth.',
        healthVariations: {
          healthy: 'Allows full emotional experience while also engaging practical support.',
          unhealthy: 'Becomes attached to the tragic narrative, potentially resisting good news or recovery.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'I need to understand this completely. What are the probabilities?',
        fullResponse: {
          thought: 'Knowledge is control. I\'ll research every possibility, every outcome, every treatment. If I understand it enough, I can manage it.',
          action: 'I\'d likely retreat into intensive research—medical journals, statistics, forums—possibly avoiding emotional processing through intellectual activity.',
          somaticMarker: 'Withdrawal into mind. Emotional dampening through analysis.'
        },
        psychologicalInsight: 'Type 5s often use knowledge-gathering as a way to manage fear and feel prepared.',
        healthVariations: {
          healthy: 'Uses research productively while also allowing emotional processing and connection.',
          unhealthy: 'Becomes lost in information, avoiding feelings and potentially driving away support.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'What\'s the worst case? I need to be prepared for anything.',
        fullResponse: {
          thought: 'I need to prepare for every outcome. Who can I trust for information? Are the doctors competent? What happens to my family if...?',
          action: 'I\'d likely spiral between hope and catastrophizing, seeking reassurance, perhaps consulting multiple sources while struggling to trust any of them.',
          somaticMarker: 'Anxiety in body. Constant vigilance. Unable to rest.'
        },
        psychologicalInsight: 'Type 6s experience health uncertainty as a threat requiring constant vigilance and preparation.',
        healthVariations: {
          healthy: 'Acknowledges fear while maintaining appropriate perspective and support.',
          unhealthy: 'Becomes paralyzed by anxiety, catastrophizing endlessly, possibly alienating supporters.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'I won\'t let this consume me. Life is for living!',
        fullResponse: {
          thought: 'Worrying won\'t change the outcome. I\'ll keep enjoying life—maybe even more intensely. That wedding is going to be epic!',
          action: 'I\'d likely amp up plans and activities, staying busy, positive, avoiding quiet moments where fear might surface.',
          somaticMarker: 'Manic positivity. Restless avoidance. Body in motion.'
        },
        psychologicalInsight: 'Type 7s often use activity and optimism to avoid sitting with fear and pain.',
        healthVariations: {
          healthy: 'Maintains joy while also allowing moments of processing and support.',
          unhealthy: 'Completely avoids the reality, potentially missing important preparation or connection.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'I\'ll fight this. Whatever it is, I\'m stronger.',
        fullResponse: {
          thought: 'I\'ve overcome everything in my path. This is just another battle. I won\'t show weakness—not to anyone, including myself.',
          action: 'I\'d likely take aggressive action—demanding faster results, second opinions, control over the process—while denying any vulnerability.',
          somaticMarker: 'Fighting energy. Armor up. Vulnerability locked away.'
        },
        psychologicalInsight: 'Type 8s often approach health crises as battles, using aggression to protect against feeling vulnerable.',
        healthVariations: {
          healthy: 'Takes appropriate action while also allowing trusted others to see fear.',
          unhealthy: 'Becomes aggressive with medical system, alienates support, denies all vulnerability.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'Maybe it\'s nothing. No need to worry yet.',
        fullResponse: {
          thought: 'Probably fine. The doctor said it could be nothing. Why stress everyone out? I\'ll just... wait and see.',
          action: 'I might minimize it to others and myself, maintain routines, perhaps forgetting to schedule follow-ups or numbing through comfort activities.',
          somaticMarker: 'Foggy. Checked out. Difficulty feeling urgency.'
        },
        psychologicalInsight: 'Type 9s may minimize health concerns to maintain peace and avoid the disruption of confronting mortality.',
        healthVariations: {
          healthy: 'Takes appropriate action while maintaining calm perspective.',
          unhealthy: 'Dangerously minimizes, potentially avoiding necessary follow-up.'
        }
      }
    ]
  },
  {
    id: 'stress-002',
    title: 'The Public Failure',
    category: 'stress',
    situation: `You\'re presenting at an important conference—your biggest audience yet. Five minutes in, the slides freeze. You try to recover, but the backup also fails. Technical support is scrambling. The audience of 300 colleagues and industry leaders watches as you stand there, exposed. Some check their phones. A few leave. After ten agonizing minutes, you\'re told the session must be cancelled. You walk off stage. The failure is public, undeniable, and will be discussed. How do you navigate the aftermath?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'I should have triple-checked everything. This is unacceptable.',
        fullResponse: {
          thought: 'I failed to prepare adequately. There were protocols I should have followed. The inner critic is relentless: how could I let this happen?',
          action: 'I\'d likely spend hours analyzing what went wrong, creating systems to prevent future failures, possibly becoming obsessive about perfecting every future presentation.',
          somaticMarker: 'Crushing self-judgment. Tension headache. Stomach churning with shame.'
        },
        psychologicalInsight: 'Type 1s turn external failures into internal moral failings, intensifying self-criticism.',
        healthVariations: {
          healthy: 'Learns from experience, creates reasonable improvements, offers self-compassion.',
          unhealthy: 'Becomes paralyzed by perfectionism, potentially avoiding public speaking entirely.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'What will everyone think of me now? Have I damaged relationships?',
        fullResponse: {
          thought: 'All those people watched me fail. Will they still respect me? Like me? Will this ruin the connections I\'ve worked so hard to build?',
          action: 'I\'d likely reach out immediately to key people—apologizing, ensuring they\'re okay, perhaps sending extra-helpful follow-ups to repair relationship damage.',
          somaticMarker: 'Heart-sick. Desperate need for reassurance. Relationship anxiety.'
        },
        psychologicalInsight: 'Type 2s interpret failure primarily through relationship impact, fearing loss of connection and love.',
        healthVariations: {
          healthy: 'Seeks appropriate reassurance while maintaining perspective.',
          unhealthy: 'Becomes desperately people-pleasing, over-apologizing, losing self in damage control.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'My reputation. My brand. How do I recover from this?',
        fullResponse: {
          thought: 'This is a disaster for my image. I need to spin this, rebuild my brand, come back stronger. I can\'t be seen as a failure.',
          action: 'I\'d immediately craft a narrative—the technology failed, not me—perhaps posting a polished LinkedIn response turning it into a "what I learned" story.',
          somaticMarker: 'Shame rapidly converted to strategic energy. Performing recovery.'
        },
        psychologicalInsight: 'Type 3s move quickly from feeling failure to managing the perception of failure.',
        healthVariations: {
          healthy: 'Recovers genuinely while learning from the experience.',
          unhealthy: 'Becomes obsessed with image recovery, never processing the genuine feelings underneath.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'This confirms my deepest fear: I\'m fundamentally flawed.',
        fullResponse: {
          thought: 'Everyone saw my failure. My worst self exposed. There\'s tragic poetry in this public unraveling, but also deep shame that I am somehow defective.',
          action: 'I might withdraw entirely, processing through intense emotional expression—perhaps art, writing, or dramatic self-reflection—before eventually emerging.',
          somaticMarker: 'Profound shame-spiral. Heavy body. Waves of emotional intensity.'
        },
        psychologicalInsight: 'Type 4s may experience public failure as confirmation of fundamental defect, though also find meaning in the intensity.',
        healthVariations: {
          healthy: 'Processes deeply, finds meaning, eventually reconnects with sense of worth.',
          unhealthy: 'Becomes defined by the failure, wallowing in shame as identity.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'I need to analyze what went wrong and withdraw to process.',
        fullResponse: {
          thought: 'What were the technical failures? I need to understand completely before engaging with anyone. I\'m drained and need solitude to recover.',
          action: 'I\'d likely retreat immediately, spending hours analyzing the failure technically, avoiding social interaction until I\'ve rebuilt my sense of competence.',
          somaticMarker: 'Depleted. Strong pull to isolation. Intellectual retreat from emotional pain.'
        },
        psychologicalInsight: 'Type 5s often retreat to analysis and solitude after public exposure, rebuilding from private competence.',
        healthVariations: {
          healthy: 'Takes needed space while eventually reconnecting and learning.',
          unhealthy: 'Isolates indefinitely, potentially developing aversion to any public exposure.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'Who\'s going to hold this against me? What are the consequences?',
        fullResponse: {
          thought: 'Who saw this? Who\'s talking about it? Will my job be affected? I need to know who\'s with me and who\'s turned against me.',
          action: 'I\'d likely scan carefully for allies and threats, perhaps seeking reassurance from trusted colleagues while preparing for worst-case professional outcomes.',
          somaticMarker: 'Hyper-vigilance. Scanning for safety. Anxiety about consequences.'
        },
        psychologicalInsight: 'Type 6s often interpret failure through a threat lens, assessing who remains trustworthy.',
        healthVariations: {
          healthy: 'Seeks appropriate reassurance, learns, and moves forward.',
          unhealthy: 'Becomes paranoid about judgment, possibly preemptively attacking perceived critics.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'This is bad, but honestly—it makes a great story.',
        fullResponse: {
          thought: 'Okay, that was painful. But I can already see how this becomes a funny anecdote. What\'s next? I\'m not dwelling on this.',
          action: 'I\'d likely make jokes immediately, plan the next thing, perhaps book another speaking gig to "get back on the horse"—anything to avoid sitting in the failure.',
          somaticMarker: 'Restless energy. Escaping the moment. Looking ahead not back.'
        },
        psychologicalInsight: 'Type 7s rapidly reframe failures as stories or learning, sometimes before processing the actual pain.',
        healthVariations: {
          healthy: 'Maintains perspective while also honoring the genuine disappointment.',
          unhealthy: 'Never processes the failure, potentially repeating mistakes from lack of reflection.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'Someone is responsible for this tech failure. Not me.',
        fullResponse: {
          thought: 'I was undermined by incompetent tech support. This wasn\'t my failure—it was a failure of the system I was forced to rely on.',
          action: 'I\'d likely confront whoever was responsible, demand accountability, possibly take control of tech for all future presentations—no reliance on others.',
          somaticMarker: 'Anger rising. Protective aggression. Vulnerability converted to power.'
        },
        psychologicalInsight: 'Type 8s often protect against vulnerability by externalizing blame and taking aggressive control.',
        healthVariations: {
          healthy: 'Holds others appropriately accountable while also owning their part.',
          unhealthy: 'Becomes bullying or vengeful, damaging relationships and reputation further.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'Maybe it wasn\'t as bad as I think. People probably forgot already.',
        fullResponse: {
          thought: 'It\'s fine. Everyone has tech failures. Why make a big deal? I\'ll just... move on and not think about it too much.',
          action: 'I might minimize it, avoid discussing it, perhaps numbing through comfort activities and hoping everyone just... forgets.',
          somaticMarker: 'Numbing. Checking out. Diffuse rather than sharp feeling.'
        },
        psychologicalInsight: 'Type 9s may minimize failures to maintain peace, potentially avoiding important learning or repair.',
        healthVariations: {
          healthy: 'Maintains calm perspective while still processing and learning.',
          unhealthy: 'Dangerously minimizes, never addresses issues, disengages from growth.'
        }
      }
    ]
  },

  // ========== GROWTH SCENARIOS ==========
  {
    id: 'growth-001',
    title: 'The Opportunity to Lead',
    category: 'growth',
    situation: `A community organization you care about is in crisis. Their leader resigned suddenly, and the group is at risk of dissolving. Multiple people have approached you: "You should take over. You have the skills, the passion, the respect of the community." But leadership means visibility, conflict, difficult decisions, and personal sacrifice. The organization will die without someone stepping up soon. Do you step forward? What\'s the internal dialogue?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'Can I do this correctly? Will I be able to maintain the standards this deserves?',
        fullResponse: {
          thought: 'This needs to be done right, or not at all. Can I meet the ethical and operational standards required? But if no one steps up, something important dies...',
          action: 'I\'d likely create a thorough assessment: what resources are needed, what standards must be met, whether I can commit to doing this properly before deciding.',
          somaticMarker: 'Weight of responsibility. Internal deliberation. Tension between duty and fear of imperfection.'
        },
        psychologicalInsight: 'Type 1s evaluate leadership opportunities against their own high standards, fearing they might fail to be good enough.',
        healthVariations: {
          healthy: 'Steps up while accepting imperfection as part of the journey.',
          unhealthy: 'Either refuses due to fear of imperfection, or accepts and becomes rigidly critical.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'They need me. How can I say no when I could help?',
        fullResponse: {
          thought: 'I love these people. They\'re asking for my help. It would be selfish to say no... but will I disappear entirely into serving them?',
          action: 'I\'d likely say yes, perhaps too quickly, driven by the need to be needed—then struggle later with boundaries and self-care.',
          somaticMarker: 'Heart expanding. Warmth of being needed. Subtle fear of depletion.'
        },
        psychologicalInsight: 'Type 2s are often drawn to leadership through the opportunity to be needed, sometimes at personal cost.',
        healthVariations: {
          healthy: 'Leads with genuine care while maintaining appropriate boundaries.',
          unhealthy: 'Over-gives to the point of burnout, possibly becoming resentful.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'This is a platform. I can make a real impact and be recognized for it.',
        fullResponse: {
          thought: 'This is an opportunity to lead, to achieve, to build something visible. Success here could open more doors. But is this the right arena for my ambitions?',
          action: 'I\'d evaluate the strategic value—visibility, network, achievement potential—while genuinely considering if I can make the organization successful.',
          somaticMarker: 'Excited ambition. Calculating energy. Drive activating.'
        },
        psychologicalInsight: 'Type 3s often evaluate opportunities through achievement and visibility potential.',
        healthVariations: {
          healthy: 'Leads effectively while also genuinely caring about the mission.',
          unhealthy: 'Uses organization for personal brand-building, potentially neglecting its actual needs.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'Leadership feels so ordinary. But maybe my unique vision could transform this.',
        fullResponse: {
          thought: 'I don\'t want to be just another leader doing ordinary things. But maybe my different perspective is exactly what\'s needed. Can I stay authentic in this role?',
          action: 'I\'d likely resist initially, then perhaps accept with a vision for transforming the organization into something more meaningful and aligned with my values.',
          somaticMarker: 'Resistance to conventional roles. Creative excitement about transformation.'
        },
        psychologicalInsight: 'Type 4s often struggle with traditional leadership roles, seeking to make them uniquely their own.',
        healthVariations: {
          healthy: 'Brings authentic creativity while also meeting practical organizational needs.',
          unhealthy: 'Becomes so focused on being unique that they neglect basic leadership functions.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'Do I have the resources for this? It will drain me considerably.',
        fullResponse: {
          thought: 'Leadership means constant interaction, decisions, exposure. Do I have the energy reserves? But my knowledge and perspective could genuinely help...',
          action: 'I\'d likely need extended analysis time, perhaps proposing a limited or advisory role rather than full visible leadership.',
          somaticMarker: 'Energy assessment. Concern about depletion. Intellectual interest competing with social exhaustion.'
        },
        psychologicalInsight: 'Type 5s often evaluate opportunities through energy management, fearing depletion from social demands.',
        healthVariations: {
          healthy: 'Steps up while building in appropriate recharge time.',
          unhealthy: 'Declines to protect resources, missing opportunity for growth and contribution.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'Leadership means being responsible if things go wrong. That\'s a lot to hold.',
        fullResponse: {
          thought: 'What if I make bad decisions? What if people turn on me? But also—I see what could go wrong if no one competent steps up. Maybe it\'s safer with me than without.',
          action: 'I\'d likely waffle, seeking opinions, building contingencies, eventually deciding based on whether I trust myself and have enough support systems.',
          somaticMarker: 'Anxiety about responsibility. Counter-phobic push toward risk. Desire for security.'
        },
        psychologicalInsight: 'Type 6s struggle with leadership due to fear of being solely responsible, yet often step up to prevent worse outcomes.',
        healthVariations: {
          healthy: 'Leads with appropriate caution while trusting self and supporters.',
          unhealthy: 'Either avoids entirely or leads anxiously, constantly seeking reassurance.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'This could be an exciting new adventure! But also... a lot of responsibility.',
        fullResponse: {
          thought: 'New challenges, new people, creative problem-solving—sounds fun! But ongoing commitment, tedious details, being stuck in one thing... less fun.',
          action: 'I might say yes enthusiastically, then struggle with the routine parts—possibly delegating heavily or adding multiple other projects to keep things exciting.',
          somaticMarker: 'Initial excitement. Underlying restlessness about commitment.'
        },
        psychologicalInsight: 'Type 7s are attracted to leadership\'s novelty but may struggle with its sustained commitment.',
        healthVariations: {
          healthy: 'Brings enthusiasm while building discipline for less exciting aspects.',
          unhealthy: 'Takes on role but abandons or neglects it when it becomes routine.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'Someone needs to take charge. I can do this better than most.',
        fullResponse: {
          thought: 'I see what needs to happen. I\'m capable of making the hard decisions others won\'t. Power in service of something I believe in—that\'s meaningful.',
          action: 'I\'d likely step up decisively, taking control quickly, potentially running over others who move too slowly.',
          somaticMarker: 'Power rising. Protective instincts activating. Ready for battle.'
        },
        psychologicalInsight: 'Type 8s often step into leadership naturally, seeing it as protection and control in service of what matters.',
        healthVariations: {
          healthy: 'Leads strongly while empowering others and remaining open to input.',
          unhealthy: 'Becomes dominating, alienating community members who feel bulldozed.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'Can\'t someone else do this? But if no one else will...',
        fullResponse: {
          thought: 'I don\'t want the spotlight or the conflict. But watching this die when I could help... that feels worse. Maybe I can lead quietly.',
          action: 'I might reluctantly accept, hoping to lead through consensus and harmony rather than assertion—potentially struggling when difficult decisions are needed.',
          somaticMarker: 'Reluctance. Slow awakening of personal investment. Desire to merge with collective will.'
        },
        psychologicalInsight: 'Type 9s often resist leadership roles but may accept when they see no other option for something they love.',
        healthVariations: {
          healthy: 'Leads by facilitating harmony while also making necessary decisions.',
          unhealthy: 'Avoids all conflict, letting the organization drift or collapse from indecision.'
        }
      }
    ]
  },
  {
    id: 'growth-002',
    title: 'The Vulnerable Conversation',
    category: 'growth',
    situation: `Someone important to you—a close friend, family member, or partner—has hurt you. Not intentionally, but through neglect or insensitivity. You\'ve been carrying this for months, and it\'s affecting the relationship. You know you need to have the conversation, to express what you felt and ask for what you need. But vulnerability is terrifying. You\'ve scheduled time to talk. What\'s going through your mind? How do you approach it?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'I need to express this fairly, without being too critical or too emotional.',
        fullResponse: {
          thought: 'I must communicate this correctly—clear, fair, not attacking. But also, they should have known better. How do I balance righteous anger with appropriate expression?',
          action: 'I\'d likely prepare extensively, perhaps even scripting key points, trying to be fair while internally struggling with critical thoughts.',
          somaticMarker: 'Controlled energy. Tension between emotion and "appropriate" expression.'
        },
        psychologicalInsight: 'Type 1s often prepare meticulously for difficult conversations, trying to balance honesty with fairness.',
        healthVariations: {
          healthy: 'Expresses feelings clearly while remaining open to the other\'s perspective.',
          unhealthy: 'Becomes preachy or rigidly critical, losing the connection they\'re trying to repair.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'What if they don\'t care? What if sharing this pushes them away?',
        fullResponse: {
          thought: 'If I tell them how I feel, will they still love me? Maybe I should just focus on what they need... but I\'m dying inside from unspoken hurt.',
          action: 'I might struggle to actually state my needs directly, perhaps softening or redirecting to their experience, possibly never actually expressing the full truth.',
          somaticMarker: 'Heart pounding. Fear of rejection. Deep longing to be seen.'
        },
        psychologicalInsight: 'Type 2s often struggle to express needs directly, fearing vulnerability will lead to rejection.',
        healthVariations: {
          healthy: 'Expresses genuine needs while trusting the relationship can hold it.',
          unhealthy: 'Never actually asks for what they need, or becomes manipulative rather than direct.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'How do I have this conversation without looking weak or needy?',
        fullResponse: {
          thought: 'I need something from them—that\'s a vulnerable position. How do I maintain my competent image while also being honest? Can I frame this as a "relationship optimization"?',
          action: 'I might approach it almost as a business conversation, managing the interaction rather than fully surrendering to vulnerability.',
          somaticMarker: 'Discomfort with neediness. Performance energy even in intimacy.'
        },
        psychologicalInsight: 'Type 3s often struggle with the exposure vulnerability requires, trying to manage rather than fully open.',
        healthVariations: {
          healthy: 'Drops the performance mask and allows genuine vulnerability.',
          unhealthy: 'Turns intimacy into performance, never really showing true self.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'Finally—someone will see my depth of feeling. But will they understand?',
        fullResponse: {
          thought: 'I\'ve felt this so deeply. Will they be able to receive the intensity of what I\'m sharing? Will they dismiss my feelings as "too much"?',
          action: 'I might express with full emotional intensity, perhaps overwhelming them, or hold back fearing my depth will be rejected as dramatic.',
          somaticMarker: 'Waves of emotion. Fear of being too much. Desperate hope to be truly seen.'
        },
        psychologicalInsight: 'Type 4s often bring deep emotional intensity to vulnerability, sometimes overwhelming others or fearing rejection.',
        healthVariations: {
          healthy: 'Shares authentically while calibrating to what the other can receive.',
          unhealthy: 'Either overwhelms with intensity or withdraws, declaring themselves misunderstood.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'I\'ve analyzed this thoroughly. But can I actually feel it aloud?',
        fullResponse: {
          thought: 'I understand what happened intellectually. I\'ve prepared my points. But actually expressing feelings out loud, in real time, is terrifying.',
          action: 'I might approach it almost academically, discussing feelings rather than expressing them, potentially disconnecting in the moment.',
          somaticMarker: 'Tight chest. Words stuck. Mind racing while emotions feel distant.'
        },
        psychologicalInsight: 'Type 5s often understand emotions intellectually but struggle to express them in the vulnerability of the moment.',
        healthVariations: {
          healthy: 'Allows feeling to emerge despite discomfort, stays present.',
          unhealthy: 'Retreats to analysis, never actually connecting emotionally.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'What if this goes wrong? But also, what if I don\'t say anything and lose them anyway?',
        fullResponse: {
          thought: 'Either path has risk. If I speak, they might reject me. If I don\'t, the resentment might destroy us. I\'m stuck between fears.',
          action: 'I might approach hesitantly, testing their reaction before fully committing to vulnerability, perhaps seeking reassurance throughout.',
          somaticMarker: 'Anxiety in stomach. Scanning for safety. Oscillating between approach and retreat.'
        },
        psychologicalInsight: 'Type 6s often experience vulnerability as a risk calculation, caught between fear of speaking and fear of silence.',
        healthVariations: {
          healthy: 'Takes the risk despite fear, trusting the relationship.',
          unhealthy: 'Either never speaks or anxiously seeks constant reassurance rather than trusting.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'This is heavy. Maybe I can keep it light while still being honest?',
        fullResponse: {
          thought: 'Do we have to make this a big serious thing? Can\'t I just... mention it and move on? But I know this needs more space than that.',
          action: 'I might use humor or lightness to manage the discomfort, potentially avoiding the full depth of what needs to be said.',
          somaticMarker: 'Restless energy. Desire to escape the heaviness. Physical discomfort with slowness.'
        },
        psychologicalInsight: 'Type 7s often try to lighten serious conversations, potentially avoiding the depth vulnerability requires.',
        healthVariations: {
          healthy: 'Allows the heaviness, trusting that there will be lightness after.',
          unhealthy: 'Skates over the surface, never really addressing the deeper issue.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'I hate needing something from someone. But hiding this feels worse.',
        fullResponse: {
          thought: 'Vulnerability is weakness. But pretending I wasn\'t hurt is a lie, and I don\'t lie. I\'d rather confront this than let it fester.',
          action: 'I might approach with more intensity than intended, potentially overwhelming them, or I might deny vulnerability by framing it as confrontation rather than need.',
          somaticMarker: 'Armored heart. Force behind words. Vulnerability disguised as assertion.'
        },
        psychologicalInsight: 'Type 8s often struggle to express vulnerability without converting it to assertion or aggression.',
        healthVariations: {
          healthy: 'Allows genuine vulnerability to show, trusting strength can include softness.',
          unhealthy: 'Turns conversation into confrontation, never revealing the tender hurt underneath.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'Is this really worth disrupting our peace? Maybe I\'m overreacting.',
        fullResponse: {
          thought: 'They probably didn\'t mean to hurt me. Do I really need to make this into a thing? But it\'s been eating at me for months...',
          action: 'I might minimize my feelings even as I try to express them, or agree too quickly with their perspective, never really standing in my own experience.',
          somaticMarker: 'Fog. Difficulty staying with own position. Merging with their view.'
        },
        psychologicalInsight: 'Type 9s often minimize own needs even while trying to express them, losing themselves in the other\'s perspective.',
        healthVariations: {
          healthy: 'Stays grounded in own experience while also holding space for theirs.',
          unhealthy: 'Never actually expresses the full truth, continues to carry resentment.'
        }
      }
    ]
  },

  // ========== DAILY LIFE SCENARIOS ==========
  {
    id: 'daily-001',
    title: 'The Traffic Jam',
    category: 'daily',
    situation: `You\'re stuck in unexpected traffic. You left with plenty of time, but an accident has turned a 20-minute drive into an hour-plus ordeal. You\'re going to be late to something that matters—maybe a dinner with friends, a movie, a class. There\'s nothing you can do; you\'re wedged between cars with no escape. What rises in you as you sit there?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'I should have left earlier. The city should fix these traffic patterns.',
        fullResponse: {
          thought: 'This is preventable—I should have checked traffic apps. The infrastructure should be better. Why don\'t people drive more efficiently?',
          action: 'I\'d likely sit rigidly, internally critiquing everything—myself for not anticipating, other drivers for making it worse, the city for poor planning—while outwardly controlled.',
          somaticMarker: 'Jaw clenched. Hands tight on wheel. Controlled frustration.'
        },
        psychologicalInsight: 'Type 1s often respond to delays by finding something or someone to critique, including themselves.',
        healthVariations: {
          healthy: 'Accepts what cannot be changed, communicates about being late, uses time productively.',
          unhealthy: 'Becomes increasingly critical and tense, possibly snapping at others.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'They\'re going to be disappointed in me. I should have done more.',
        fullResponse: {
          thought: 'People are waiting for me. I\'m letting them down. They\'ll think I don\'t care. I should call and apologize repeatedly.',
          action: 'I\'d likely call or text multiple times apologizing, possibly offering to make it up to them, feeling guilty even though it\'s not my fault.',
          somaticMarker: 'Anxious in chest. Guilt weighing. Need to smooth things over.'
        },
        psychologicalInsight: 'Type 2s often interpret delays as relationship failures, feeling responsible for others\' disappointment.',
        healthVariations: {
          healthy: 'Communicates once, accepts it\'s not personal, uses time for self.',
          unhealthy: 'Apologizes excessively, takes on guilt that isn\'t theirs.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'This is wasting my time. I could be accomplishing something.',
        fullResponse: {
          thought: 'Every minute stuck here is a minute not being productive. How can I optimize this? Calls? Emails? Planning?',
          action: 'I\'d likely fill the time with work calls, voice memos, multitasking—anything to convert "dead time" into achievement.',
          somaticMarker: 'Restless frustration. Need to do something, anything. Impatience with stillness.'
        },
        psychologicalInsight: 'Type 3s often struggle with forced stillness, needing to convert all time into productivity.',
        healthVariations: {
          healthy: 'Uses some time productively, also allows some simple presence.',
          unhealthy: 'Becomes manic with activity, unable to tolerate the unproductive moment.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'There\'s something melancholy about being stuck. A metaphor for life.',
        fullResponse: {
          thought: 'Everyone trapped in their boxes, going nowhere. There\'s poetic sadness in this. I\'ll put on meaningful music and feel it.',
          action: 'I might use the time for melancholy reflection, meaningful music, feeling the existential weight of wasted time—finding meaning in the mundane.',
          somaticMarker: 'Wistful feeling. Finding aesthetic in frustration. Deeper than surface irritation.'
        },
        psychologicalInsight: 'Type 4s often find emotional meaning in mundane frustrations, aestheticizing difficulty.',
        healthVariations: {
          healthy: 'Finds genuine meaning without over-dramatizing.',
          unhealthy: 'Turns minor inconvenience into existential crisis or romantic tragedy.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'This is an opportunity for thinking time, actually.',
        fullResponse: {
          thought: 'I can\'t do anything about this. But I can think, listen to that podcast, enjoy some rare uninterrupted mental space.',
          action: 'I\'d likely put on educational content or use the time for undistracted thinking, possibly preferring this to whatever I was driving to.',
          somaticMarker: 'Initial frustration settling into acceptance. Mind engaging.'
        },
        psychologicalInsight: 'Type 5s often convert forced waiting into valued thinking or learning time.',
        healthVariations: {
          healthy: 'Genuinely enjoys the mental space while staying appropriately engaged.',
          unhealthy: 'Becomes too comfortable in isolation, potentially relieved to miss social obligation.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'What if there\'s something worse ahead? What\'s causing this?',
        fullResponse: {
          thought: 'Was there an accident? Could it affect me? Will people be angry I\'m late? Should I have taken the other route?',
          action: 'I might anxiously check news, traffic apps, imagine scenarios, possibly call ahead multiple times to warn people I\'m late.',
          somaticMarker: 'Heightened alertness. Stomach churning. Mind scanning for threats.'
        },
        psychologicalInsight: 'Type 6s often respond to delays by scanning for what might go wrong.',
        healthVariations: {
          healthy: 'Appropriately checks information, then relaxes into acceptance.',
          unhealthy: 'Spirals into worst-case thinking, anxiety builds unnecessarily.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'This is frustrating! Let me find something fun to do.',
        fullResponse: {
          thought: 'I refuse to be bored. Podcast! Music! Planning my next trip! Calling friends! This doesn\'t have to be painful.',
          action: 'I\'d immediately seek stimulation—entertainment, calls, mental planning of exciting things—avoiding the discomfort of stillness.',
          somaticMarker: 'Restless energy. Physical need for stimulation. Buzzing to escape boredom.'
        },
        psychologicalInsight: 'Type 7s quickly seek escape from discomfort through stimulation and activity.',
        healthVariations: {
          healthy: 'Genuinely enjoys the time without manic escape from discomfort.',
          unhealthy: 'Unable to tolerate any stillness, constantly seeking distraction.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'This is unacceptable. Someone should fix this.',
        fullResponse: {
          thought: 'Why isn\'t anyone doing anything? I should have taken control of this situation earlier. Being trapped like this is infuriating.',
          action: 'I might become aggressive—honking, considering driving on the shoulder, feeling impotent rage at loss of control.',
          somaticMarker: 'Heat rising. Caged feeling. Power frustrated.'
        },
        psychologicalInsight: 'Type 8s often experience forced waiting as loss of control, triggering anger.',
        healthVariations: {
          healthy: 'Feels the frustration, accepts what can\'t be controlled, relaxes into it.',
          unhealthy: 'Becomes aggressive, possibly endangering self or others.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'Oh well. Nothing I can do. Might as well relax.',
        fullResponse: {
          thought: 'Getting upset won\'t help. I\'ll just... be here. Maybe listen to something calming. It is what it is.',
          action: 'I\'d likely accept it quickly, perhaps using it as excuse to zone out, possibly enjoying the lack of demands.',
          somaticMarker: 'Quick settling. Pleasant numbing. Relief from no demands.'
        },
        psychologicalInsight: 'Type 9s often accept delays readily, sometimes preferring the lack of demands to wherever they were going.',
        healthVariations: {
          healthy: 'Genuinely accepts while staying appropriately engaged with life.',
          unhealthy: 'Uses it as excuse to check out, possibly relieved to avoid demands.'
        }
      }
    ]
  },
  {
    id: 'daily-002',
    title: 'The Messy Kitchen',
    category: 'daily',
    situation: `You come home after a long day to find your roommate/partner has left the kitchen in chaos. Dishes piled in the sink, food containers open on the counter, crumbs everywhere. They\'re not home, and you were planning to cook dinner. You\'re tired, hungry, and now faced with someone else\'s mess. This isn\'t the first time. What happens inside you?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'This is wrong. There are basic standards of shared living they\'re not meeting.',
        fullResponse: {
          thought: 'They should know better. This is disrespectful and irresponsible. I\'ve mentioned this before. Why is it so hard to just do things correctly?',
          action: 'I might clean it with controlled resentment, composing a message in my head about "basic kitchen etiquette," or leave it pointedly and address it later with a clear standard.',
          somaticMarker: 'Tension building. Righteous frustration. Need to correct.'
        },
        psychologicalInsight: 'Type 1s experience disorder as a moral failing in others that must be addressed.',
        healthVariations: {
          healthy: 'Addresses it directly without excessive moralizing.',
          unhealthy: 'Becomes preachy and resentful, damaging relationship over dishes.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'They must have been stressed. But also... I always do this for them.',
        fullResponse: {
          thought: 'Maybe they had a hard day. But I\'m also tired, and I\'m always the one cleaning up after people. Don\'t I matter too?',
          action: 'I might clean it while feeling martyred, possibly mentioning later how I "took care of it for you"—hoping they\'ll appreciate and reciprocate.',
          somaticMarker: 'Mix of caretaking instinct and building resentment.'
        },
        psychologicalInsight: 'Type 2s often clean up others\' messes while building quiet resentment about unreciprocated care.',
        healthVariations: {
          healthy: 'Directly addresses the issue without martyrdom.',
          unhealthy: 'Does the work while harboring resentment, expecting gratitude that won\'t come.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'This is inefficient and reflects poorly on how we live.',
        fullResponse: {
          thought: 'I don\'t have time for this. A successful household runs smoothly. This makes us look like slobs if anyone visited.',
          action: 'I\'d likely clean it quickly and efficiently, annoyed at the waste of time, possibly implementing a system to prevent future issues.',
          somaticMarker: 'Irritation at inefficiency. Quick, solving energy.'
        },
        psychologicalInsight: 'Type 3s often approach household friction as efficiency problems requiring systems.',
        healthVariations: {
          healthy: 'Addresses practically without excessive image concern.',
          unhealthy: 'Focuses on how it looks, misses the relationship conversation.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'They don\'t understand how much this affects me. I feel overlooked.',
        fullResponse: {
          thought: 'The mess is almost symbolic—my needs getting lost in their chaos. Why do I always have to absorb the ugliness others create?',
          action: 'I might leave it and retreat to my space, processing the feeling of being unconsidered, perhaps creating something from the emotional intensity.',
          somaticMarker: 'Melancholy. Feeling unseen. Emotional weight of mundane disorder.'
        },
        psychologicalInsight: 'Type 4s often experience mundane frustrations as symbols of deeper issues about being seen.',
        healthVariations: {
          healthy: 'Addresses the practical issue without over-dramatizing.',
          unhealthy: 'Makes it about existential neglect, creates drama from dishes.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'I need space and now I can\'t have it. This invades my sanctuary.',
        fullResponse: {
          thought: 'I came home for quiet and restoration. This chaos requires energy I don\'t have. Why can\'t people manage their own messes?',
          action: 'I might retreat to my private space without cleaning, possibly skipping dinner rather than dealing with it, feeling invaded.',
          somaticMarker: 'Depleted. Invaded. Pulling inward to protect resources.'
        },
        psychologicalInsight: 'Type 5s experience others\' messes as drains on their limited energy.',
        healthVariations: {
          healthy: 'Addresses it when resourced, protects energy appropriately.',
          unhealthy: 'Retreats entirely, builds resentment in isolation.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'Is this a pattern? Should I be worried about living with this person?',
        fullResponse: {
          thought: 'Is this getting worse? Can I rely on them? What does this say about our living situation? Should I prepare a backup plan?',
          action: 'I might clean while cataloging this instance in a mental file of "concerning patterns," possibly bringing it up later as part of a larger trust conversation.',
          somaticMarker: 'Anxiety about reliability. Trust under evaluation.'
        },
        psychologicalInsight: 'Type 6s often connect small incidents to larger patterns of reliability.',
        healthVariations: {
          healthy: 'Addresses specific situation without catastrophizing the relationship.',
          unhealthy: 'Turns kitchen mess into evidence of untrustworthiness.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'Ugh, annoying. Let me just do something fun instead.',
        fullResponse: {
          thought: 'I don\'t want to deal with this. I was going to cook but... maybe I\'ll just order in. Or go out! Turn this into an adventure.',
          action: 'I\'d likely avoid the mess entirely, finding a more enjoyable solution—eating out, ordering in, anything to bypass the unpleasant task.',
          somaticMarker: 'Aversion to unpleasant. Quick pivot to positive alternative.'
        },
        psychologicalInsight: 'Type 7s often avoid unpleasant tasks by finding more enjoyable alternatives.',
        healthVariations: {
          healthy: 'Deals with it while maintaining lightness, addresses pattern constructively.',
          unhealthy: 'Always avoids, never addresses, resentment builds invisibly.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'This is disrespectful. They need to know this isn\'t acceptable.',
        fullResponse: {
          thought: 'In my space, there are standards. They\'re taking advantage of my tolerance. This ends now.',
          action: 'I\'d likely not clean it, instead waiting for them to return and addressing it directly: "This is not okay. Clean it."',
          somaticMarker: 'Fire rising. Territorial protection. Power asserting.'
        },
        psychologicalInsight: 'Type 8s experience others\' messes in shared space as disrespect requiring direct confrontation.',
        healthVariations: {
          healthy: 'Addresses firmly but fairly, maintains relationship.',
          unhealthy: 'Becomes dominating or punishing over household mess.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'It\'s fine. They were probably busy. I\'ll just... work around it.',
        fullResponse: {
          thought: 'Making a big deal would create conflict. They probably didn\'t mean to. I can just clear enough space to cook...',
          action: 'I\'d likely clean enough to function without addressing it, possibly numbing my frustration, avoiding the confrontation.',
          somaticMarker: 'Resignation. Stuffing annoyance. Heavy peace.'
        },
        psychologicalInsight: 'Type 9s often minimize their own frustration to avoid conflict, absorbing inconvenience.',
        healthVariations: {
          healthy: 'Addresses calmly without drama, holds own needs.',
          unhealthy: 'Never addresses, resentment builds underground, eventually explodes or disengages.'
        }
      }
    ]
  }
];

export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find(s => s.id === id);
}

export function getScenariosByCategory(category: ScenarioCategory): Scenario[] {
  return scenarios.filter(s => s.category === category);
}

export function getRandomScenario(excludeIds: string[] = []): Scenario | undefined {
  const available = scenarios.filter(s => !excludeIds.includes(s.id));
  if (available.length === 0) return undefined;
  return available[Math.floor(Math.random() * available.length)];
}
