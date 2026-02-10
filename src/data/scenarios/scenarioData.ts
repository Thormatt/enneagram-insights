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
        preview: 'This matters. Commitments mean something, and forgetting feels careless.',
        fullResponse: {
          thought: 'I reminded them. There\'s a right way to treat someone you love, and this isn\'t it. But I also need to be fair—was my reminder clear enough? No, it was. This is on them.',
          action: 'I\'d bring it up directly but without attacking: "I need to tell you something that\'s bothering me. Today is our anniversary, and it hurts that it wasn\'t remembered." Then I\'d want to understand why and how we prevent this.',
          somaticMarker: 'Tight shoulders. A controlled heat in my chest—frustration held in check.'
        },
        psychologicalInsight: 'Type 1s experience forgotten commitments as violations of how things should be. There\'s often internal debate about whether their standards are fair before addressing it.',
        healthVariations: {
          healthy: 'Expresses disappointment clearly while remaining open to explanation and genuine repair.',
          unhealthy: 'Uses the oversight as evidence of fundamental character flaws, becoming rigidly critical.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'Something heavy settles in my chest. I find myself wondering what I did wrong.',
        fullResponse: {
          thought: 'Maybe they\'ve been stressed. I should check if they\'re okay. But also... don\'t I matter enough to remember? No, that\'s selfish—they probably just have a lot on their mind.',
          action: 'I\'d probably start making their favorite dinner without saying why. Part of me hopes they\'ll notice and realize, part of me just wants to do something loving to reconnect.',
          somaticMarker: 'Weight in the heart area. An ache that feels like reaching for something just out of grasp.'
        },
        psychologicalInsight: 'Type 2s often redirect hurt into caretaking, focusing on the partner\'s needs rather than directly addressing their own disappointment. The hope for recognition often remains unspoken.',
        healthVariations: {
          healthy: 'Says directly: "I\'m hurt you forgot. I need some acknowledgment today." Allows partner to respond.',
          unhealthy: 'Gives more while growing silently resentful, eventually erupting or withdrawing passive-aggressively.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'A pit opens in my stomach. Am I not worth remembering?',
        fullResponse: {
          thought: 'What does this say about me? About us? If someone really valued me, they wouldn\'t forget. I feel suddenly small—like I don\'t matter as much as I thought I did.',
          action: 'I might book something nice for us anyway and frame it as "surprising them." It\'s easier than admitting I\'m hurt. At least we\'ll still have a good anniversary, and I won\'t feel like a failure.',
          somaticMarker: 'Restless energy in my limbs. An urgent need to do something—fix this, improve it, make it okay.'
        },
        psychologicalInsight: 'Type 3s often experience being forgotten as a reflection of their worth. The instinct to "fix" the situation can mask deeper feelings of inadequacy that are painful to acknowledge.',
        healthVariations: {
          healthy: 'Acknowledges the hurt underneath and shares it: "I feel unimportant right now and I need to talk about it."',
          unhealthy: 'Focuses entirely on creating a successful appearance of the relationship while feeling hollow inside.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'Something familiar sinks in my chest. Of course. Of course this happened.',
        fullResponse: {
          thought: 'I always feel things more deeply than others do. They went about their day like nothing, while I woke up with this date circled in my heart. Maybe I\'m just... too much. Or maybe I\'m not enough.',
          action: 'I might get quiet, withdraw to process. I\'d probably journal or need to be alone with the feeling for a while before I could talk about it without either crying or saying something I\'d regret.',
          somaticMarker: 'A deep ache, heavy and familiar. It sits in my chest like something I\'ve carried before.'
        },
        psychologicalInsight: 'Type 4s often experience disappointment through a lens of personal significance—not just "they forgot" but "this confirms something about my place in the world." The pain is real, not performed.',
        healthVariations: {
          healthy: 'Sits with the feeling, then shares vulnerability directly: "This really hurt me. I need to know I matter to you."',
          unhealthy: 'Spirals into the wound, withdrawing into a narrative of being fundamentally flawed or unlovable.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'I notice myself pulling back, needing space to figure out what I\'m feeling.',
        fullResponse: {
          thought: 'This is... unexpected. I need to think about what this means. Do I even care about anniversaries that much? I think I do. More than I realized. I need time to sort this out before I can discuss it.',
          action: 'I\'d probably not say anything immediately. I\'d retreat into my own space, maybe go for a walk or into another room. When I\'m ready, I\'d bring it up factually: "You forgot our anniversary. I want to understand what happened."',
          somaticMarker: 'A pulling inward, like closing a door. Slight numbness as I distance from the emotion to observe it.'
        },
        psychologicalInsight: 'Type 5s often need to retreat and process emotions privately before they can engage with them relationally. This isn\'t coldness—it\'s a genuine need for space to understand their own inner experience.',
        healthVariations: {
          healthy: 'Takes needed space, then returns to share the emotional impact alongside the facts.',
          unhealthy: 'Withdraws indefinitely, analyzes instead of feeling, becomes increasingly emotionally unavailable.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'My mind starts racing. What does this mean? Are we okay?',
        fullResponse: {
          thought: 'Did they really forget or is something else going on? Are they pulling away? No—maybe they\'re planning something and this is misdirection? But what if it\'s a sign we\'re falling apart and I\'ve been missing the clues?',
          action: 'I\'d probably drop hints and watch their reaction carefully. If they don\'t pick up on it, I\'d ask directly, but I\'d be watching their face for what they\'re not saying.',
          somaticMarker: 'Stomach tight, almost queasy. Mind scanning for information, unable to settle.'
        },
        psychologicalInsight: 'Type 6s often interpret relationship oversights through a security lens—is this a threat to the relationship? The anxiety comes from uncertainty rather than the event itself.',
        healthVariations: {
          healthy: 'Names the anxiety directly: "I\'m feeling insecure about us because of this. Can we talk?"',
          unhealthy: 'Tests partner repeatedly, reads into every response, struggles to accept reassurance.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'My first instinct is to shake it off. Worse things have happened.',
        fullResponse: {
          thought: 'Okay, so they forgot. Honestly, it\'s not the end of the world. We can celebrate any day. Maybe I\'ll plan something fun for this weekend instead—make it even better than whatever we would have done.',
          action: 'I\'d probably say something light like "Hey, you know what today is, right?" and if they look panicked, laugh it off: "It\'s fine! Let\'s do something this weekend instead." Then I\'d start planning.',
          somaticMarker: 'A quick deflection in my chest—forward energy, moving past the sting toward what\'s next.'
        },
        psychologicalInsight: 'Type 7s reframe disappointment quickly, often before fully feeling it. The pivot to planning is genuine enthusiasm, but it can also be a way to avoid sitting with hurt.',
        healthVariations: {
          healthy: 'Allows a moment of "this hurt" before genuinely reframing and moving toward positive action.',
          unhealthy: 'Never acknowledges the disappointment, accumulating unprocessed hurts that eventually surface in other ways.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'Nope. We\'re addressing this right now.',
        fullResponse: {
          thought: 'I won\'t pretend this is fine when it\'s not. If there\'s a problem, we deal with it. I need to know where I stand—are we on the same page about this relationship or not?',
          action: 'I\'d say directly: "You forgot our anniversary. That\'s not okay with me. What happened?" No buildup, no hints. Then I\'d listen—but I expect a real answer, not excuses.',
          somaticMarker: 'Heat rising in my chest. Grounded stance, ready for whatever comes next.'
        },
        psychologicalInsight: 'Type 8s confront issues directly because ambiguity feels more threatening than conflict. The directness protects against the vulnerability of being uncertain where they stand.',
        healthVariations: {
          healthy: 'Confronts directly but then allows vulnerability: "It hurt because you matter to me."',
          unhealthy: 'Dominates the conversation, doesn\'t allow partner\'s perspective, potentially escalates to ultimatums.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'I notice I\'m already making excuses for them. Is that okay?',
        fullResponse: {
          thought: 'They\'ve had a lot going on. It\'s just a day, really. And making a big deal of it would just create tension. But... there\'s something in me that keeps coming back to it. Some quiet part that wishes it mattered more to them.',
          action: 'I\'d probably wait, hoping they might remember later. If they don\'t, I might mention it casually tomorrow, downplaying how much it bothered me: "Oh hey, yesterday was our anniversary. No big deal, I just realized."',
          somaticMarker: 'A settling heaviness in my body. Like I\'m sinking into the couch, into the day, letting it pass over me.'
        },
        psychologicalInsight: 'Type 9s often merge with their partner\'s probable perspective, prioritizing peace over their own feelings. The disappointment doesn\'t disappear—it gets archived, sometimes resurfacing later.',
        healthVariations: {
          healthy: 'Gently names it: "I felt a little sad you didn\'t remember. Can we acknowledge it together?"',
          unhealthy: 'Suppresses completely, builds invisible resentment, eventually checks out of the relationship emotionally.'
        }
      }
    ]
  },
  {
    id: 'rel-002',
    title: 'The Difficult In-Law',
    category: 'relationships',
    situation: `Your partner's parent has been staying with you for a week. They've been consistently critical of how you keep house, questioning your career choices at dinner, and making passive-aggressive comments about when you'll have children. Your partner seems blind to it, or perhaps just doesn't want to rock the boat. Tonight at dinner, the parent makes another pointed comment: "I just think if you really loved [partner], you'd make more of an effort." You can feel your partner squirming but not speaking up. What happens inside you? What do you do?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'This is inappropriate. Someone needs to establish proper boundaries.',
        fullResponse: {
          thought: 'That comment crossed a line. There are respectful ways to express concern, and this isn\'t one of them. I shouldn\'t have to defend my love for my partner based on their parent\'s arbitrary standards.',
          action: 'I\'d respond clearly but civilly: "I appreciate you care about [partner], but our relationship decisions are ours to make. I\'d ask that you respect that." Then I\'d expect my partner to back me up.',
          somaticMarker: 'Jaw tightening. Controlled energy—the urge to correct channeled through careful words.'
        },
        psychologicalInsight: 'Type 1s see boundary violations as requiring principled correction. They\'ll often step up when others won\'t, viewing it as the right thing to do.',
        healthVariations: {
          healthy: 'Sets clear boundary while maintaining composure and family relationships.',
          unhealthy: 'Becomes rigidly moralistic, lectures about proper behavior, alienates everyone.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'I\'ve been trying so hard to make them feel welcome. What more can I give?',
        fullResponse: {
          thought: 'I\'ve cooked their favorite meals, given up my schedule, tried to connect. Maybe I should try harder tomorrow. But also... when is it enough? When do I get to matter too?',
          action: 'I might excuse myself to the kitchen, taking a breath. Part of me wants to redouble my efforts; part of me is exhausted. I probably won\'t say anything tonight—but I\'ll talk to my partner later.',
          somaticMarker: 'Heart aching with effort. Fatigue beneath the smile I\'m still wearing.'
        },
        psychologicalInsight: 'Type 2s often absorb criticism by giving more, hoping increased effort will finally earn acceptance. The exhaustion is real but often hidden.',
        healthVariations: {
          healthy: 'Recognizes the criticism isn\'t about their worth. Sets limits on over-giving.',
          unhealthy: 'Burns out trying to earn approval that never comes, then explodes or collapses.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'I feel exposed. Judged. And I hate that I care this much.',
        fullResponse: {
          thought: 'Why does their opinion even matter to me? But it does. They\'re seeing me as not good enough, and I can\'t seem to shake it. I need to turn this around—show them who I really am.',
          action: 'I might pivot to something I\'m confident about: redirect to my work accomplishments or subtly demonstrate competence. Or I\'d excuse myself to regroup, planning a better approach.',
          somaticMarker: 'Tension in my chest. Energy mobilizing, looking for how to recover ground.'
        },
        psychologicalInsight: 'Type 3s experience public criticism as threats to their sense of value. The instinct is to manage perception and demonstrate worth.',
        healthVariations: {
          healthy: 'Recognizes the judgment says more about the critic. Addresses the situation authentically.',
          unhealthy: 'Becomes obsessed with winning approval, performing ever harder, or dismisses the relationship entirely as "not worth it."'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'There it is again. That familiar feeling of not fitting in, not belonging here.',
        fullResponse: {
          thought: 'They\'ll never understand me. I don\'t fit their mold and I never will. Part of me wants to say something devastating, something true. Part of me just wants to disappear.',
          action: 'I might get very quiet, withdrawing inside myself. If pushed, I could say something sharply honest that cuts to the heart of the dynamic everyone\'s pretending isn\'t happening.',
          somaticMarker: 'Heaviness in my chest, sinking. The ache of being on the outside looking in.'
        },
        psychologicalInsight: 'Type 4s often feel like outsiders in conventional family dynamics. Criticism confirms fears of fundamental differentness—not better or worse, just incompatible.',
        healthVariations: {
          healthy: 'Holds onto sense of self while acknowledging the pain. Addresses it directly when ready.',
          unhealthy: 'Dramatizes the rejection, or withdraws completely into wounded isolation.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'This is draining. I need to get out of this situation and think.',
        fullResponse: {
          thought: 'What\'s the actual agenda here? Is this about me, or about their anxiety about their child? Either way, I don\'t have the energy for this level of social combat. I need space.',
          action: 'I\'d likely excuse myself—need to take a call, finish some work, anything. I need to be out of this room. Later, I\'ll process what happened and decide if it\'s worth addressing.',
          somaticMarker: 'Energy depleting rapidly. Strong pull toward solitude, toward walls and doors.'
        },
        psychologicalInsight: 'Type 5s often prioritize preservation of energy and space over engagement with emotionally demanding situations. Retreat isn\'t defeat—it\'s resource management.',
        healthVariations: {
          healthy: 'Takes needed space, then returns to address the situation thoughtfully.',
          unhealthy: 'Withdraws completely, leaves partner to handle everything, becomes emotionally absent.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'Where does my partner actually stand? I need to know I\'m not alone here.',
        fullResponse: {
          thought: 'Why isn\'t my partner saying anything? Are they going to let their parent treat me this way? I need to know whose side they\'re on. Because if I can\'t count on them...',
          action: 'I\'d watch my partner\'s reaction very carefully. Later, in private: "Where were you in that? Because I need to know you have my back when your family crosses lines."',
          somaticMarker: 'Stomach churning. Alert system scanning my partner\'s face for loyalty signals.'
        },
        psychologicalInsight: 'Type 6s interpret family conflicts as tests of alliance. Security comes from knowing their partner will stand with them against external threats.',
        healthVariations: {
          healthy: 'Discusses needs directly, builds united front with partner.',
          unhealthy: 'Becomes accusatory toward partner, tests loyalty repeatedly, creates the rift they fear.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'This dinner is a disaster. Can we just... move past this?',
        fullResponse: {
          thought: 'This is so tense. Someone needs to change the energy. Maybe I can crack a joke, redirect to a happier topic. They\'re only here for a few more days—we can survive this.',
          action: 'I might jump in with something lighter: "Well, on the topic of effort, who wants dessert? I made something special." Redirect the energy. We can debrief later.',
          somaticMarker: 'Restless energy looking for an exit. A buzz of discomfort I want to outrun.'
        },
        psychologicalInsight: 'Type 7s often work to shift emotional energy, redirecting from pain to possibility. This serves the group but can also avoid necessary confrontations.',
        healthVariations: {
          healthy: 'Lightens the mood appropriately while still addressing the issue later.',
          unhealthy: 'Constantly deflects, never addresses the pattern, tension builds underground.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'That\'s enough. No one talks to me like that in my own home.',
        fullResponse: {
          thought: 'This is a power move, and I don\'t back down from power moves. They want to test me? Fine. But they need to understand who they\'re dealing with—and that there are consequences.',
          action: 'I\'d respond directly: "I\'m going to stop you there. You\'re a guest in our home, and I\'d appreciate if you kept opinions about our relationship to yourself." Then I\'d hold eye contact.',
          somaticMarker: 'Fire rising in my chest. Grounded, solid, ready for whatever comes.'
        },
        psychologicalInsight: 'Type 8s see disrespect in their territory as requiring immediate confrontation. The force protects against feeling vulnerable or controlled.',
        healthVariations: {
          healthy: 'Sets firm boundary while leaving room for relationship repair.',
          unhealthy: 'Dominates and intimidates, creating a permanent rift, winning the battle but losing the war.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'My body wants to disappear. Can I just... get through this?',
        fullResponse: {
          thought: 'If I say something, it\'ll blow up. My partner will be caught in the middle. They\'ll be gone in a few days. Maybe I can just... absorb this. Keep the peace. But something in me is getting smaller.',
          action: 'I might smile thinly and change the subject. Or just go quiet, present but not present. Later I might mention it to my partner, but probably framed as "no big deal."',
          somaticMarker: 'Fog rolling in. A heaviness in my limbs. The urge to merge into the furniture and disappear.'
        },
        psychologicalInsight: 'Type 9s often absorb conflict to protect others and preserve harmony, sometimes at great personal cost. The self gets smaller to keep the peace bigger.',
        healthVariations: {
          healthy: 'Finds a low-conflict way to name the issue: "That comment was hurtful. I\'d like us to move on more respectfully."',
          unhealthy: 'Completely erases own experience, builds resentment, eventually either explodes or checks out entirely.'
        }
      }
    ]
  },

  // ========== WORK SCENARIOS ==========
  {
    id: 'work-001',
    title: 'Credit Stolen',
    category: 'work',
    situation: `You've spent three weeks developing an innovative solution for a persistent problem at work. Late nights, detailed research, creative thinking—this was your intellectual baby. In today's team meeting, your colleague presents your idea as their own. They don't mention your contribution at all. Your manager is impressed. The colleague smiles and accepts the praise. You're sitting right there. A few people glance at you, seemingly aware of what just happened. What do you feel? What do you do?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'This is wrong. Credit belongs where it\'s earned, and this needs to be corrected.',
        fullResponse: {
          thought: 'There\'s a principle at stake here. It\'s not about ego—it\'s about integrity. If we let this slide, what does that say about how we operate? Someone needs to set this right.',
          action: 'I\'d speak up in the meeting, calmly: "I\'m glad this approach is resonating. As you may recall, I developed this over the past few weeks—I\'m happy to walk through the documentation." Clear, factual, undeniable.',
          somaticMarker: 'Controlled heat in my chest. Jaw set. The energy of righteous correction held in check.'
        },
        psychologicalInsight: 'Type 1s experience intellectual theft as a moral violation requiring principled correction—not for ego, but for how things should work.',
        healthVariations: {
          healthy: 'Corrects the record professionally without excessive moralizing or alienating colleagues.',
          unhealthy: 'Becomes preachy about ethics, turns it into a crusade, right but insufferable.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'After everything I\'ve done for this team, for them... this is what I get?',
        fullResponse: {
          thought: 'I\'ve helped this person so many times. Stayed late with them, covered for them. Is this what caring gets me? But if I make a scene, everyone will think I\'m difficult...',
          action: 'I\'d probably approach them privately afterward, hoping for an explanation, giving them a chance to make it right. Maybe they\'ll apologize and fix it. Maybe they\'ll see how much this hurt.',
          somaticMarker: 'Sting in my chest. The weight of unreciprocated giving pressing down.'
        },
        psychologicalInsight: 'Type 2s often process professional betrayal through the relationship lens—not just "they stole my work" but "after all I gave them."',
        healthVariations: {
          healthy: 'Addresses the professional issue directly, separate from relationship history.',
          unhealthy: 'Gives even more hoping to eventually earn loyalty, or becomes martyred and resentful.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'My mind races—how do I recover from this without looking petty?',
        fullResponse: {
          thought: 'If I let this go, I look weak. If I make a scene, I look small. I need to reclaim this strategically. There has to be a way to get credit while still looking gracious.',
          action: 'I\'d find a smooth interjection: "Thanks for presenting this! When I was developing it, the key insight was..." Subtle ownership claim. Then I\'d follow up with manager separately.',
          somaticMarker: 'Calculating energy firing. Competitive tension. The chess game activating.'
        },
        psychologicalInsight: 'Type 3s experience credit theft as both an image threat and a genuine wound to their sense of value. The strategic response masks real hurt.',
        healthVariations: {
          healthy: 'Reclaims credit authentically, then processes the deeper hurt privately or with trusted others.',
          unhealthy: 'Becomes purely political, potentially undermining colleague aggressively, winning at any cost.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'Of course. My original work goes unseen, claimed by someone more... conventional.',
        fullResponse: {
          thought: 'This always happens. The people who play the game get the credit; the ones who actually create get overlooked. Something in me wants to make a scene, make them see. Something else just wants to leave.',
          action: 'I might withdraw, processing the betrayal internally. Or I might make a pointed comment later that others won\'t understand—something true and cutting that only I\'ll know the full weight of.',
          somaticMarker: 'A familiar ache opening up. Heavy, dark, confirmed. The outsider again.'
        },
        psychologicalInsight: 'Type 4s may experience stolen credit as confirmation of being perpetually overlooked—not for lack of quality, but for being too different to be seen.',
        healthVariations: {
          healthy: 'Addresses the situation directly while recognizing the hurt is about this moment, not cosmic destiny.',
          unhealthy: 'Dramatizes the wound, quits in artistic protest, or withdraws into bitter isolation.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'I have the evidence. I need to think about the best way to use it.',
        fullResponse: {
          thought: 'Emotionally reacting now would be a mistake. I have timestamps, drafts, emails. I need to assess: is this worth the political capital? What\'s the strategic play here?',
          action: 'I\'d stay silent in the meeting, observing. Later, I\'d compile documentation and decide whether to approach my manager with facts or let it go and protect my energy for what matters.',
          somaticMarker: 'Pulling inward. Emotional dampening engaging. The observer mode activating.'
        },
        psychologicalInsight: 'Type 5s often retreat to evidence and strategy, using intellectual preparation as both shield and weapon. This isn\'t coldness—it\'s how they process threat.',
        healthVariations: {
          healthy: 'Uses documentation effectively while also acknowledging the personal impact to trusted others.',
          unhealthy: 'Becomes coldly calculating, stores grievance, potentially engages in quiet retaliation later.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'If they did this, who else is working against me? What else am I missing?',
        fullResponse: {
          thought: 'This person looked me in the eye and took my work. Can I trust anyone here? Who knew about this? Is management complicit? I need to figure out who\'s really on my side.',
          action: 'I\'d carefully sound out trusted colleagues—who saw what happened? Then I\'d document everything and decide whether to escalate. I need allies before I make any moves.',
          somaticMarker: 'Vigilance spiking. Stomach tight. Scanning the room for who\'s ally, who\'s threat.'
        },
        psychologicalInsight: 'Type 6s may experience a single betrayal as evidence of systemic threat, triggering broader suspicion and alliance-testing.',
        healthVariations: {
          healthy: 'Addresses the specific situation while maintaining appropriate trust in others.',
          unhealthy: 'Becomes paranoid, sees conspiracies, potentially damages relationships with people who weren\'t involved.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'Frustrating. But honestly, I have better ideas coming. This one was just the start.',
        fullResponse: {
          thought: 'This stings, but dwelling on it won\'t help. The people who matter know my work. And frankly, I\'ve already moved on to the next thing. Let them have this one—I\'ll be three steps ahead.',
          action: 'I might shrug it off in the moment, then casually mention in the next meeting: "Building on that approach, I\'ve been developing something even more interesting..." Eyes forward.',
          somaticMarker: 'Forward momentum engaging. A quick sidestep around the disappointment.'
        },
        psychologicalInsight: 'Type 7s often reframe loss as a minor detour, pivoting to future possibilities. This keeps spirits up but may leave the wound unaddressed.',
        healthVariations: {
          healthy: 'Acknowledges "that sucked" briefly, then genuinely moves forward without residue.',
          unhealthy: 'Never addresses the pattern, gets taken advantage of repeatedly, resentment accumulates underground.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'No. This is not going to stand. They need to understand who they just crossed.',
        fullResponse: {
          thought: 'Nobody takes what\'s mine and gets away with it. This is about respect—if I let this slide, I\'m weak. They need to know there are consequences.',
          action: 'I\'d speak up in the meeting: "Just to be clear—this is the approach I\'ve been developing these past weeks. [Colleague], did you want to add how you came to present it?" Direct, undeniable, public.',
          somaticMarker: 'Fire rising. Power stance engaging. Ready for whatever comes next.'
        },
        psychologicalInsight: 'Type 8s experience theft of credit as a challenge to their power and dignity, requiring immediate, public correction.',
        healthVariations: {
          healthy: 'Reclaims credit firmly but proportionately, maintains professional relationships.',
          unhealthy: 'Escalates to domination, potentially destroys colleague publicly, creates enemies.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'Ugh. But is it worth the awkwardness? Maybe I should just let it go.',
        fullResponse: {
          thought: 'This isn\'t fair. But making a scene would be so uncomfortable. Everyone would be looking at me. Maybe they needed this win more than I do? The team benefits either way...',
          action: 'I\'d probably stay quiet, maybe mention it to my manager in private later. Or maybe not—it depends on whether I can work up the energy to care enough. The conflict feels worse than the loss.',
          somaticMarker: 'Heaviness settling in. A fog descending over the injustice, muting it.'
        },
        psychologicalInsight: 'Type 9s may minimize their own needs to avoid the discomfort of confrontation, even when the stakes are significant.',
        healthVariations: {
          healthy: 'Finds a low-conflict way to address it: email to manager with "just wanted to clarify the background on this..."',
          unhealthy: 'Completely suppresses, resentment builds invisibly, eventually disengages from work entirely.'
        }
      }
    ]
  },
  {
    id: 'work-002',
    title: 'The Unexpected Promotion',
    category: 'work',
    situation: `Your manager calls you into a private meeting with surprising news: you've been selected for a significant promotion. The role means leading a team, higher visibility, more responsibility—and more stress. It's the kind of opportunity many dream about. But it also means moving away from the hands-on work you love, more political navigation, and potentially longer hours. You have 48 hours to decide. What goes through your mind? How do you approach this decision?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'Can I do this the right way? What does this role really demand?',
        fullResponse: {
          thought: 'Leadership is a responsibility, not just a title. Can I hold myself to the standards this requires? Will I be able to do it correctly, or will I have to compromise my principles for politics?',
          action: 'I\'d make a thorough list of the role\'s requirements and honestly assess whether I can meet them with integrity. I\'d consult mentors about what the position actually entails—not just the description, but the reality.',
          somaticMarker: 'Deliberation weighing heavily. The pressure of responsibility already settling onto my shoulders.'
        },
        psychologicalInsight: 'Type 1s evaluate opportunities through the lens of their own high standards—not "can I succeed?" but "can I do this right?"',
        healthVariations: {
          healthy: 'Assesses realistically, acknowledges growth potential, accepts with commitment to do it well.',
          unhealthy: 'Paralyzed by fear of imperfection, declines to avoid falling short of own standards.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'What will this mean for my relationships here? Will people still need me?',
        fullResponse: {
          thought: 'This is recognition—they see my value! But... will I lose the closeness with my current team? Will I become just "the boss"? Will people still come to me, confide in me?',
          action: 'I\'d reach out to people I\'m close with—how would this change things? I might even ask them what they think I should do, partly to gauge their reaction, partly because I genuinely want their input.',
          somaticMarker: 'Mixed feelings—warmth of being valued, anxiety about what it might cost relationally.'
        },
        psychologicalInsight: 'Type 2s often evaluate career moves through relationship impact—will this bring them closer to or farther from the people who matter?',
        healthVariations: {
          healthy: 'Considers relationships while also honoring own professional growth and desires.',
          unhealthy: 'Decides based entirely on what others want or what will make them more needed.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'Yes. This is validation—I\'ve earned this. How do I maximize it?',
        fullResponse: {
          thought: 'This is what I\'ve been working toward. The title, the recognition, the next step on the path. Now—how do I negotiate the best terms? How do I make sure everyone knows this happened?',
          action: 'I\'d say yes quickly, then strategize: negotiate title, salary, resources. I\'d already be thinking about my first 90 days and how to make an impact that positions me for what comes next.',
          somaticMarker: 'Achievement energy surging. Already moving toward the next milestone.'
        },
        psychologicalInsight: 'Type 3s often experience promotions as external validation of worth. The instinct is to leverage it immediately.',
        healthVariations: {
          healthy: 'Celebrates genuinely while also checking in—is this actually what I want, or just what looks good?',
          unhealthy: 'Accepts regardless of fit, sacrifices health and relationships for advancement.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'Management? But that\'s so... ordinary. Will I lose myself in this?',
        fullResponse: {
          thought: 'They want me. That\'s meaningful. But—will I become one of those people? Sitting in meetings, talking about metrics, losing what made me good in the first place?',
          action: 'I\'d need time alone to really sit with this. What does my gut say? Does this path feel true to who I am, or am I being pulled toward something that will slowly erase what matters?',
          somaticMarker: 'Push-pull tension. Recognition feels good; conformity feels threatening.'
        },
        psychologicalInsight: 'Type 4s often struggle with conventional success—wanting recognition while fearing that accepting it means abandoning authenticity.',
        healthVariations: {
          healthy: 'Finds a way to bring authentic self to leadership, integrating uniqueness with responsibility.',
          unhealthy: 'Rejects opportunity to preserve outsider identity, or accepts and feels perpetually inauthentic.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'I need to understand exactly what this entails before I can decide.',
        fullResponse: {
          thought: 'What are the real expectations—not just what\'s in the job description? How much of my energy will this consume? Will I still have time for the work that actually interests me, or will I become a people-manager?',
          action: 'I\'d request detailed information: actual time allocation, typical week, energy demands. I need to calculate whether I have the resources for this before I can commit.',
          somaticMarker: 'Analytical mode engaging. Slight anxiety about unknown energy expenditure.'
        },
        psychologicalInsight: 'Type 5s evaluate opportunities through resource management—especially time and energy. They need to know the real cost before committing.',
        healthVariations: {
          healthy: 'Gathers information while remaining open to growth and stretch.',
          unhealthy: 'Focuses on potential drains, declines to preserve resources, misses growth opportunity.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'Why me? What are they not telling me? What could go wrong?',
        fullResponse: {
          thought: 'Why was I chosen over others? Is this a setup? What happened to the last person in this role? Do I have the support I need to succeed, or am I being set up to fail?',
          action: 'I\'d investigate thoroughly—ask about the history of the role, what resources I\'d have, what the real expectations are. I need to know the threats before I can commit.',
          somaticMarker: 'Alert system engaging. Scanning for hidden dangers, testing the ground.'
        },
        psychologicalInsight: 'Type 6s often evaluate opportunities through threat assessment—not pessimism, but preparation. They need to know the risks to feel secure.',
        healthVariations: {
          healthy: 'Does appropriate due diligence while remaining open to the possibility.',
          unhealthy: 'Becomes paralyzed by potential dangers, or accepts but lives in constant fear of failure.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'New adventure! New challenges! But wait—does this limit my options?',
        fullResponse: {
          thought: 'This opens so many doors! New experiences, new people, new problems to solve! But... what if I get stuck? What about all the other paths this might close? What if I get bored?',
          action: 'I\'d probably lean yes, but I\'d negotiate for flexibility—variety in the role, travel, room for creative freedom. I need to know I won\'t be trapped in something monotonous.',
          somaticMarker: 'Excitement buzzing, with a thread of anxiety about commitment underneath.'
        },
        psychologicalInsight: 'Type 7s are drawn to new opportunities and experiences, but struggle with the commitment and option-closing they require.',
        healthVariations: {
          healthy: 'Embraces opportunity while accepting necessary limitations and seeing them through.',
          unhealthy: 'Accepts but immediately starts planning the next move, never fully commits.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'More power, more ability to make things happen. But on whose terms?',
        fullResponse: {
          thought: 'This gives me more control, more influence, more ability to do things my way. But I need to make sure I\'m not being put in a position where I\'m someone else\'s puppet.',
          action: 'I\'d negotiate hard—for resources, authority, autonomy. If I take this, I take it on my terms. I\'d make that clear from the start.',
          somaticMarker: 'Power assessment engaging. Evaluating leverage, control, what I\'d gain and what I might have to give up.'
        },
        psychologicalInsight: 'Type 8s evaluate opportunities through power and autonomy—will this expand or constrain their ability to act?',
        healthVariations: {
          healthy: 'Accepts with appropriate negotiation, uses power to empower others and make real change.',
          unhealthy: 'Focuses solely on control, potentially clashes with anyone who limits authority.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'This is a lot. I was comfortable where I am. Maybe I should stay?',
        fullResponse: {
          thought: 'Change is... a lot. I like my current role, my current rhythm. But I also don\'t want to disappoint anyone who believes in me. What do other people think I should do?',
          action: 'I\'d probably seek many opinions, maybe hoping someone else\'s certainty will help me find my own. I\'d have trouble locating what I actually want underneath what seems expected.',
          somaticMarker: 'Overwhelm settling in. Difficulty accessing my own preferences through the fog.'
        },
        psychologicalInsight: 'Type 9s may struggle to connect with their own ambition or desire, potentially merging with others\' expectations or defaulting to inertia.',
        healthVariations: {
          healthy: 'Takes time to find their own genuine desire, makes a decision from center.',
          unhealthy: 'Decides based on others\' wishes or avoids deciding until the choice is made for them.'
        }
      }
    ]
  },

  // ========== STRESS SCENARIOS ==========
  {
    id: 'stress-001',
    title: 'The Health Scare',
    category: 'stress',
    situation: `Your doctor calls with results from routine tests: there's an abnormality that requires further investigation. They're calm but clear—this needs follow-up. It might be nothing, it might be serious. You won't know for two weeks until more tests are done. During those two weeks, you have work deadlines, family obligations, a friend's wedding. Life must continue while this uncertainty hangs. How do you navigate these weeks? What happens inside you?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'I need to do everything right. Research, second opinions, perfect self-care.',
        fullResponse: {
          thought: 'If I handle this correctly—right doctors, right protocols, right lifestyle—I can manage this. But I also can\'t stop reviewing: what did I do wrong? Should I have exercised more? Eaten differently?',
          action: 'I\'d research extensively, schedule second opinions, create a strict wellness regimen. I\'d try to feel in control through perfect behavior while internally questioning every past choice.',
          somaticMarker: 'Controlled tension throughout my body. The inner critic working overtime.'
        },
        psychologicalInsight: 'Type 1s often respond to health uncertainty with attempts to control through "doing everything right," coupled with self-examination for where they fell short.',
        healthVariations: {
          healthy: 'Takes appropriate action while accepting what cannot be controlled. Offers self-compassion.',
          unhealthy: 'Becomes obsessively self-critical, punishes body for perceived failures.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'Who do I tell? I don\'t want to burden anyone, but I need support.',
        fullResponse: {
          thought: 'I should focus on others—they have their own problems. But also... will people be there for me if this is serious? Have I given enough to deserve their care?',
          action: 'I might keep giving to others while dropping small hints about needing support, struggling to directly ask for help. Or I might tell everyone and then feel guilty about worrying them.',
          somaticMarker: 'Ache in my chest. The conflict between needing and fearing to need.'
        },
        psychologicalInsight: 'Type 2s often struggle to receive care even in crisis, uncertain whether they\'ve "earned" support from others.',
        healthVariations: {
          healthy: 'Directly asks for support: "I need you right now." Allows others to give.',
          unhealthy: 'Martyrs through alone, resents others for not intuiting their need.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'I need to keep performing. No one can see this affecting me.',
        fullResponse: {
          thought: 'I can\'t let this slow me down. People are counting on me. If I\'m not productive, capable, successful—what am I? This is just another challenge to overcome.',
          action: 'I\'d likely compartmentalize completely. Crush the work deadlines, show up strong at the wedding, keep achieving. The fear stays in a locked box I\'ll deal with... later.',
          somaticMarker: 'Driving energy, pushing forward. The fear converted into fuel.'
        },
        psychologicalInsight: 'Type 3s may experience health threats as challenges to their capable image, compartmentalizing fear to maintain performance.',
        healthVariations: {
          healthy: 'Maintains function while also allowing private moments to feel fear and seek support.',
          unhealthy: 'Completely denies impact, pushes through, potentially damages health by ignoring warning signs.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'I\'m facing something most people don\'t want to look at. There\'s weight in that.',
        fullResponse: {
          thought: 'This is real. The fragility of life, the edge of something unknown. Most people go through their days never feeling this. I\'m touching something profound, even if it\'s terrifying.',
          action: 'I\'d probably create—write, make art, process through deep feeling. I might share with a few trusted people who can hold the weight of it. The wedding will feel surreal, almost dreamlike.',
          somaticMarker: 'Deep in my chest, heavy and present. Everything feels more vivid, more significant.'
        },
        psychologicalInsight: 'Type 4s often find meaning in emotional depth, even painful depth. A health scare connects to existential questions that feel important, if frightening.',
        healthVariations: {
          healthy: 'Allows the full emotional experience while also engaging practical support and maintaining life.',
          unhealthy: 'Becomes lost in the emotional significance, struggles to engage with practical necessities.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'I need information. What are the possibilities, the probabilities?',
        fullResponse: {
          thought: 'If I understand this completely, I can manage it. What are the possible diagnoses? Survival rates? Treatment options? Knowledge is how I handle uncertainty.',
          action: 'I\'d research extensively—medical journals, forums, statistics. I\'d want to walk into the next appointment with questions prepared. This is how I cope: through understanding.',
          somaticMarker: 'Pulling into my head. Emotions muted as the analytical mode takes over.'
        },
        psychologicalInsight: 'Type 5s often use information-gathering as a way to manage fear. Understanding feels like control.',
        healthVariations: {
          healthy: 'Uses research productively while also allowing emotional processing and connection with others.',
          unhealthy: 'Becomes lost in information, avoids feeling, pushes away people who want to support them.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'What\'s the worst case? I need to be prepared for anything.',
        fullResponse: {
          thought: 'What if it\'s serious? What happens to my family? Is the doctor competent? Should I get another opinion? I need to prepare for every outcome, even the ones I don\'t want to imagine.',
          action: 'I\'d likely oscillate between hope and catastrophizing, researching while trying to stay calm, seeking reassurance while questioning every source. Making contingency plans for worst cases.',
          somaticMarker: 'Anxiety in my body—stomach tight, mind racing. Unable to fully rest.'
        },
        psychologicalInsight: 'Type 6s experience health uncertainty as a threat requiring vigilance. The anxiety comes from uncertainty, and preparing for the worst feels like protection.',
        healthVariations: {
          healthy: 'Acknowledges fear, prepares reasonably, allows for hope, leans on trusted support.',
          unhealthy: 'Spirals into catastrophizing, unable to accept any reassurance, exhausts self and others.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'I refuse to let this consume me. Life is happening—I\'m going to live it.',
        fullResponse: {
          thought: 'Worrying won\'t change the test results. I can spend two weeks miserable, or I can spend them living fully. The wedding will be amazing. Work will stay interesting. I\'m not doing the doom spiral.',
          action: 'I\'d keep myself busy with good things—plans, friends, activities. When the fear surfaces, I\'d redirect. Maybe a little more intensely alive than usual, knowing life is uncertain.',
          somaticMarker: 'Forward energy, staying in motion. A slight franticness underneath the optimism.'
        },
        psychologicalInsight: 'Type 7s often cope with fear through activity and positive focus. This can be genuine resilience or avoidance of processing.',
        healthVariations: {
          healthy: 'Maintains joy and life engagement while also allowing moments of fear and connection.',
          unhealthy: 'Manically avoids any stillness, never processes the fear, potentially misses important preparation.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'I\'ll fight this. Whatever it is, I\'ve faced worse.',
        fullResponse: {
          thought: 'This is just another battle. I\'ve overcome everything life has thrown at me. This is no different. Weakness isn\'t an option—not in front of others, not even to myself.',
          action: 'I\'d take charge: demanding expedited results, researching the best specialists, making things happen. Vulnerability stays locked away. If people see fear, they see weakness.',
          somaticMarker: 'Armor up. Energy rising to meet the threat. Invulnerability reasserting itself.'
        },
        psychologicalInsight: 'Type 8s often approach health challenges as battles, using strength and aggression to protect against the terrifying vulnerability of illness.',
        healthVariations: {
          healthy: 'Takes appropriate action while allowing a few trusted people to see the fear underneath.',
          unhealthy: 'Becomes aggressive with medical system, alienates support, denies all vulnerability until breakdown.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'It\'s probably nothing. The doctor said it might be fine. I\'ll just... wait.',
        fullResponse: {
          thought: 'No use worrying about something that might not be real. The doctor said it could be nothing. Why stress everyone out? I\'ll just... go through my days and see what happens.',
          action: 'I might minimize it to myself and others, maintain normal routines, maybe even forget to think about it for stretches. The wedding will be a nice distraction. Everything continues as if normal.',
          somaticMarker: 'A fog settling over the fear. Numbness keeping the anxiety at bay. Body heavy but functional.'
        },
        psychologicalInsight: 'Type 9s may minimize health concerns to maintain peace and avoid disruption. The numbing is protective but can lead to dangerous denial.',
        healthVariations: {
          healthy: 'Stays calm while taking appropriate action and sharing with appropriate people.',
          unhealthy: 'Dangerously minimizes, avoids follow-up, denies reality until crisis forces attention.'
        }
      }
    ]
  },
  {
    id: 'stress-002',
    title: 'The Public Failure',
    category: 'stress',
    situation: `You're presenting at an important conference—your biggest audience yet. Five minutes in, the slides freeze. You try to recover, but the backup also fails. Technical support is scrambling. The audience of 300 colleagues and industry leaders watches as you stand there, exposed. Some check their phones. A few leave. After ten agonizing minutes, you're told the session must be cancelled. You walk off stage. The failure is public, undeniable, and will be discussed. How do you navigate the aftermath?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'I should have prepared better. There were backups I didn\'t create.',
        fullResponse: {
          thought: 'I failed to prepare adequately. There were contingencies I should have had. The inner voice is relentless: how could I let this happen? What did I miss? I need to make sure this never happens again.',
          action: 'I\'d likely spend hours analyzing what went wrong, creating systems for the future, perhaps writing an email to attendees acknowledging the failure and promising better. Fixing it through thoroughness.',
          somaticMarker: 'Crushing self-judgment. Tension headache forming. Stomach churning with shame.'
        },
        psychologicalInsight: 'Type 1s often turn external failures into internal moral failings, focusing on how they fell short of their own standards.',
        healthVariations: {
          healthy: 'Learns from experience, creates reasonable improvements, offers self-compassion.',
          unhealthy: 'Becomes paralyzed by perfectionism, potentially avoids public speaking entirely.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'What will everyone think of me now? Have I damaged relationships that matter?',
        fullResponse: {
          thought: 'All those people watched me fail. Will they still respect me? Like me? I need to reach out to key people, make sure we\'re okay. I hope they know this isn\'t really me.',
          action: 'I\'d probably reach out to specific people—apologizing, checking in, making sure relationships aren\'t damaged. Maybe offering to help others with their presentations to show my value.',
          somaticMarker: 'Heart-sick worry. The ache of potential disconnection.'
        },
        psychologicalInsight: 'Type 2s often interpret public failure primarily through relationship impact—will people still want connection with them?',
        healthVariations: {
          healthy: 'Seeks appropriate support while maintaining perspective—one failure doesn\'t define relationships.',
          unhealthy: 'Becomes desperately people-pleasing, over-apologizing, losing self in repair attempts.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'My reputation. How do I recover from this? There has to be a strategy.',
        fullResponse: {
          thought: 'This is a disaster for my image. Everyone saw. I need to spin this somehow—the technology failed, not me. Or own it in a way that makes me look resilient. There\'s always a way to turn this around.',
          action: 'I\'d quickly craft a narrative: maybe a LinkedIn post about "what I learned when technology betrayed me." Position myself as someone who handles failure gracefully. Recovery as personal brand.',
          somaticMarker: 'Shame rapidly converting to strategic energy. Mind racing toward damage control.'
        },
        psychologicalInsight: 'Type 3s often move quickly from experiencing failure to managing the perception of failure. The deeper wound may go unprocessed.',
        healthVariations: {
          healthy: 'Recovers authentically while also processing the genuine hurt privately.',
          unhealthy: 'Becomes obsessed with image recovery, never addresses the real feelings of shame and inadequacy.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'This confirms something I\'ve always feared. Something about me is fundamentally broken.',
        fullResponse: {
          thought: 'Everyone saw me at my worst. Exposed. The failure feels significant somehow—not just technical difficulty, but a symbol of something deeper. Maybe I was fooling myself thinking I belonged up there.',
          action: 'I\'d likely need to withdraw and process, probably through writing or creative expression. When I re-emerge, I might share the experience as something meaningful—the truth of failure.',
          somaticMarker: 'Deep shame settling in. Heavy, familiar weight. The wound connecting to older wounds.'
        },
        psychologicalInsight: 'Type 4s may experience public failure as confirmation of deeper defect. The intensity of feeling is real, not performative.',
        healthVariations: {
          healthy: 'Processes deeply, finds genuine meaning, eventually reconnects with sense of capability.',
          unhealthy: 'Becomes defined by the failure, spirals into shame-based identity.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'I need to analyze what happened. And I need to be alone right now.',
        fullResponse: {
          thought: 'What were the failure points? I need to understand completely before engaging with anyone. I don\'t have the energy for social interaction right now. Let me process this alone first.',
          action: 'I\'d retreat immediately after the event, avoiding networking. Later, I\'d analyze the technical failures thoroughly, rebuilding my sense of competence through understanding before facing others.',
          somaticMarker: 'Energy completely depleted. Strong pull toward solitude and closed doors.'
        },
        psychologicalInsight: 'Type 5s often need significant alone time after public exposure or failure to restore their energy and sense of competence.',
        healthVariations: {
          healthy: 'Takes needed space, eventually reconnects and learns from the experience.',
          unhealthy: 'Isolates indefinitely, develops aversion to public exposure, becomes more reclusive.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'Who\'s going to hold this against me? What are the consequences I should prepare for?',
        fullResponse: {
          thought: 'Who saw this? Who will talk about it? Will this affect my standing, my opportunities? I need to assess the damage and figure out who\'s still on my side.',
          action: 'I\'d carefully gauge reactions, seeking out trusted allies for honest feedback. What\'s the real fallout? Who can I count on? I need to know the threat level before I can calm down.',
          somaticMarker: 'Hypervigilance. Scanning for consequences. Anxiety about what\'s coming next.'
        },
        psychologicalInsight: 'Type 6s often interpret failure through a threat lens—who might use this against them? What are the downstream consequences?',
        healthVariations: {
          healthy: 'Seeks appropriate feedback, learns from it, moves forward with support.',
          unhealthy: 'Becomes paranoid, assumes the worst about others\' intentions, preemptively defensive.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'That was rough. But honestly? It makes for a great story.',
        fullResponse: {
          thought: 'Okay, that was bad. Really bad. But... it\'s also kind of funny? In a horrible way? At least I\'ll never forget this. And neither will anyone else—might as well own it.',
          action: 'I\'d probably make a self-deprecating joke about it as soon as possible, turning the disaster into an anecdote. Then focus on what\'s next—maybe another speaking opportunity to redeem myself.',
          somaticMarker: 'Quick reframe engaging. Forward motion resuming. Discomfort being left behind.'
        },
        psychologicalInsight: 'Type 7s often use humor and future-focus to move past painful experiences quickly. This can be genuine resilience or avoidance.',
        healthVariations: {
          healthy: 'Finds genuine lightness while also acknowledging the sting. Uses it as growth.',
          unhealthy: 'Jokes it away without processing, moves to next thing so fast the lesson is lost.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'I don\'t make excuses. The tech failed. I handled what I could. Next.',
        fullResponse: {
          thought: 'This wasn\'t my fault—the technology failed. I did what I could in the situation. Anyone who thinks less of me for this wasn\'t worth impressing anyway. I\'m not going to crawl.',
          action: 'I\'d probably address it directly to anyone who brings it up: "Yeah, that sucked. The tech failed. It happens. What else?" No apology tour. Stand tall and move on.',
          somaticMarker: 'Shoulders squared. Refusing to shrink. Protecting against vulnerability through strength.'
        },
        psychologicalInsight: 'Type 8s often protect against the vulnerability of failure by refusing to show weakness. The defiance is defensive.',
        healthVariations: {
          healthy: 'Takes appropriate responsibility while maintaining confidence. Doesn\'t over-apologize or collapse.',
          unhealthy: 'Becomes aggressive and dismissive, alienates people with refusal to acknowledge any fault.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'Can we just... move past this? These things happen. It\'s not that big a deal.',
        fullResponse: {
          thought: 'It was out of my control. Technology fails. I don\'t want to make it into a bigger thing than it needs to be. Can we all just... let it go and move on?',
          action: 'I\'d probably minimize it, avoid discussing it if possible, hope everyone forgets quickly. If pressed, I\'d say something like "yeah, that was unfortunate" and change the subject.',
          somaticMarker: 'Fog settling over the experience. A heaviness wanting to move on and past.'
        },
        psychologicalInsight: 'Type 9s often minimize difficult experiences to restore peace and avoid prolonged discomfort, for themselves and others.',
        healthVariations: {
          healthy: 'Maintains calm perspective while learning appropriate lessons.',
          unhealthy: 'Minimizes to the point of denial, misses opportunities to grow or receive support.'
        }
      }
    ]
  },

  // ========== GROWTH SCENARIOS ==========
  {
    id: 'growth-001',
    title: 'The Opportunity to Lead',
    category: 'growth',
    situation: `A community project you care about is struggling. The current leadership is stepping down, and several people have suggested you step up. You have ideas for how to make it better, and people respect your judgment. But leading means being visible, being criticized, being responsible for outcomes you can't fully control. You'll need to ask for help, delegate to others, and accept that not everyone will agree with your decisions. The opportunity is real, and it's yours if you want it. What do you do?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'I could do this well. But can I hold myself to the standard required?',
        fullResponse: {
          thought: 'I see what\'s wrong and how to fix it. If I lead, I can do things the right way. But I\'ll also be judged—and I\'ll judge myself most harshly. Can I handle being responsible when things inevitably fall short?',
          action: 'I\'d want to understand the commitment fully before deciding. If I do this, I do it completely, with clear principles and standards. But I need to make sure I won\'t be compromised by others\' lower standards.',
          somaticMarker: 'The weight of responsibility already settling in. Tension between capability and fear of falling short.'
        },
        psychologicalInsight: 'Type 1s are often drawn to fixing what\'s broken but struggle with the imperfection inherent in leading diverse people.',
        healthVariations: {
          healthy: 'Accepts leadership with realistic expectations, offers guidance without demanding perfection.',
          unhealthy: 'Either avoids to escape inevitable imperfection or leads with rigid criticism that alienates others.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'People need me. That feels important. But can I lead without losing them?',
        fullResponse: {
          thought: 'They asked me. They want me. That means something. But leaders have to make hard decisions, and not everyone will be happy. What if leading makes people pull away?',
          action: 'I\'d probably say yes—how can I refuse when people need help? But I\'d worry about the decisions that might make people like me less. I\'d try to lead through consensus and care.',
          somaticMarker: 'Warmth at being needed, mixed with anxiety about potential rejection.'
        },
        psychologicalInsight: 'Type 2s often find leadership appealing when it comes through being needed, but struggle with the inevitable unpopular decisions.',
        healthVariations: {
          healthy: 'Leads with genuine care while accepting that some decisions will displease.',
          unhealthy: 'Avoids difficult decisions to maintain approval, or exhausts self trying to please everyone.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'I can make this successful. This could be significant for my reputation.',
        fullResponse: {
          thought: 'I see the potential here. With the right approach, this project could really become something—and leading it would show what I\'m capable of. This is an opportunity to create something impressive.',
          action: 'I\'d step up confidently, already envisioning the turnaround. I\'d set clear goals, build a strong team, and work toward visible success. This needs to be a win.',
          somaticMarker: 'Achievement energy rising. Already planning the path to success.'
        },
        psychologicalInsight: 'Type 3s are often natural leaders who can rally people toward success, but may prioritize visible achievement over deeper impact.',
        healthVariations: {
          healthy: 'Leads effectively while staying connected to genuine mission beyond personal success.',
          unhealthy: 'Uses leadership primarily for image, burns out team, or abandons if success isn\'t guaranteed.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'Me? A leader? But that\'s so... ordinary. Could I do this authentically?',
        fullResponse: {
          thought: 'Leadership usually means conformity, politics, compromise. But this project matters to me. Maybe I could do it differently—bring something unique, lead in a way that\'s true to who I am.',
          action: 'I\'d need to think about whether I can lead without losing myself. If I can do this my way—with depth and meaning rather than just management—maybe. But I won\'t become a generic leader.',
          somaticMarker: 'Push-pull. Resistance to conventional roles, but drawn to creating something meaningful.'
        },
        psychologicalInsight: 'Type 4s often resist leadership roles as too ordinary, but may step up when they can make it uniquely their own.',
        healthVariations: {
          healthy: 'Brings authentic vision and emotional depth to leadership, creates something meaningful.',
          unhealthy: 'Either avoids to preserve outsider identity or leads erratically, making it about their emotional journey.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'Leading means constant interaction. Do I have the energy for this?',
        fullResponse: {
          thought: 'I have ideas—good ones. But leadership means meetings, politics, managing people\'s emotions. That\'s exhausting. Can I contribute my expertise without being drained by the people parts?',
          action: 'I might accept a more advisory role, or propose a leadership model that gives me space. If I lead, I\'ll need to structure it so I have room to recharge and think.',
          somaticMarker: 'Calculation mode. Weighing energy expenditure against impact desired.'
        },
        psychologicalInsight: 'Type 5s often have valuable insights for leadership but struggle with the social and emotional demands of the role.',
        healthVariations: {
          healthy: 'Finds sustainable way to contribute meaningfully, whether leading or advising.',
          unhealthy: 'Retreats from opportunity entirely to preserve energy, or leads but becomes unavailable and cold.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'What if I\'m not up to this? But also—what if no one else does it right?',
        fullResponse: {
          thought: 'I see what could go wrong if the wrong person leads this. But am I the right person? Do I have the support I need? I can\'t do this alone. But maybe with the right people behind me...',
          action: 'I\'d want to understand the support structure before deciding. Who else is committed? What happens if I fail? If I can build a trustworthy team, maybe I can do this.',
          somaticMarker: 'Anxiety and responsibility wrestling. Fear of failure versus fear of letting things fail.'
        },
        psychologicalInsight: 'Type 6s often struggle with leadership due to self-doubt but may step up when they fear what happens if no one competent does.',
        healthVariations: {
          healthy: 'Leads with appropriate caution, builds strong support systems, becomes reliable and steady.',
          unhealthy: 'Either avoids due to fear or leads with constant anxiety, second-guessing every decision.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'This could be exciting! Lots of possibilities. But also... ongoing responsibility?',
        fullResponse: {
          thought: 'I can see so many ways to make this better, more fun, more creative. Leadership could be an adventure! But... it also means being stuck with the same thing, the same problems, the same people. Long term.',
          action: 'I might say yes enthusiastically, focusing on the exciting parts—vision, innovation, new directions. But I\'d want to delegate the tedious parts and keep things dynamic.',
          somaticMarker: 'Excitement at possibility, with an undercurrent of restlessness about commitment.'
        },
        psychologicalInsight: 'Type 7s bring creative energy and optimism to leadership but may struggle with the sustained, sometimes tedious commitment it requires.',
        healthVariations: {
          healthy: 'Brings enthusiasm while accepting necessary routine, stays engaged through the challenging parts.',
          unhealthy: 'Starts strong but loses interest when novelty wears off, or delegates all difficult parts away.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'Finally. A chance to actually make things happen my way.',
        fullResponse: {
          thought: 'I\'ve seen how others have mishandled this. I have the strength to do it right, to make real change. Leadership means I can stop complaining about problems and actually fix them.',
          action: 'I\'d step up decisively, taking charge with clear vision and strong direction. This needs someone who\'s not afraid to make tough calls and push through resistance.',
          somaticMarker: 'Power and purpose activating. Ready to take the reins and drive.'
        },
        psychologicalInsight: 'Type 8s often step into leadership naturally, drawn to the ability to create change and protect what matters.',
        healthVariations: {
          healthy: 'Leads with strength while empowering others, uses power to serve the mission.',
          unhealthy: 'Dominates and controls, struggles to share power or accept input, drives others away.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'Me? Lead? But I don\'t like conflict, and leadership means making hard choices.',
        fullResponse: {
          thought: 'I care about this project, but leading means being the one who decides when people disagree. That sounds exhausting and uncomfortable. Maybe someone else would be better suited?',
          action: 'I\'d probably initially deflect or delay, seeing if someone else steps up. If truly no one else will, I might accept reluctantly, hoping to lead through consensus rather than direction.',
          somaticMarker: 'Heaviness at the thought. Inertia resisting the exposure and responsibility.'
        },
        psychologicalInsight: 'Type 9s often avoid leadership due to discomfort with conflict and visibility, though they can be excellent consensus-builders when they step up.',
        healthVariations: {
          healthy: 'Accepts leadership and finds strength in bringing people together, makes hard decisions when needed.',
          unhealthy: 'Avoids or leads passively, lets others fill the vacuum, becomes resentful when things go wrong.'
        }
      }
    ]
  },
  {
    id: 'growth-002',
    title: 'The Vulnerable Conversation',
    category: 'growth',
    situation: `Someone you care about has hurt you—not deliberately, but through carelessness or misunderstanding. The wound is real, and it's affecting your relationship. You could let it go, swallow your feelings, pretend everything is fine. Or you could have the hard conversation: tell them how you feel, risk their reaction, be vulnerable about your needs. The relationship is important to you, but so is being honest. What do you do?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'I need to address this. It\'s the right thing to do—for the relationship and for myself.',
        fullResponse: {
          thought: 'Pretending everything is fine when it isn\'t is dishonest. I need to say what\'s true, clearly and fairly. But I also need to be careful not to turn this into a lecture or a judgment.',
          action: 'I\'d prepare what I want to say, focusing on facts and impact rather than blame. Something like: "When this happened, it affected me this way. I want us to understand each other better."',
          somaticMarker: 'Controlled energy. The tension of holding back natural criticism to be fair.'
        },
        psychologicalInsight: 'Type 1s often feel obligated to address issues directly but struggle with expressing hurt without making it a critique.',
        healthVariations: {
          healthy: 'Shares feelings clearly and fairly, listens to other perspective, works toward understanding.',
          unhealthy: 'Turns the conversation into a lecture, focuses on what the other person did wrong rather than own vulnerability.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'I need to tell them. But what if they think I\'m too needy? What if they pull away?',
        fullResponse: {
          thought: 'This matters too much to leave unsaid. But asking for what I need feels so exposed. What if they can\'t give it? What if this changes how they see me? But I can\'t keep pretending I\'m fine.',
          action: 'I\'d probably hedge at first, then try to be brave: "I need to tell you something that\'s been on my heart. This hurt me, and I need you to know." Then I\'d wait, vulnerable, for their response.',
          somaticMarker: 'Heart pounding. The fear and longing for connection mixing together.'
        },
        psychologicalInsight: 'Type 2s often struggle deeply with asking directly for what they need, fearing it will drive others away.',
        healthVariations: {
          healthy: 'Expresses needs directly and allows the other person to respond, tolerates uncertainty.',
          unhealthy: 'Hints rather than stating directly, then resents if the other person doesn\'t intuit correctly.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'Being vulnerable feels like showing weakness. But this relationship matters.',
        fullResponse: {
          thought: 'I don\'t like being the one who was hurt. It\'s uncomfortable. But pretending it didn\'t happen isn\'t working. Maybe being honest is its own kind of strength?',
          action: 'I\'d try to frame it in a way that maintains some dignity: "I want to be honest with you because this relationship matters to me. Here\'s what I experienced..." Keep it real but not crumbling.',
          somaticMarker: 'Discomfort at vulnerability. Fighting the urge to perform strength instead of feeling.'
        },
        psychologicalInsight: 'Type 3s often associate vulnerability with weakness, making honest emotional conversations challenging.',
        healthVariations: {
          healthy: 'Recognizes that genuine vulnerability builds real connection, risks being seen.',
          unhealthy: 'Keeps the mask up even in intimate conversations, or shares but quickly pivots to how they handled it well.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'I feel this so deeply. But can I share it without overwhelming them?',
        fullResponse: {
          thought: 'The hurt is real and significant. I want them to understand how deeply this affected me. But I also don\'t want to drown them in feeling. How do I share what\'s true without making it too much?',
          action: 'I\'d share from the heart: "This is hard to say, but I need you to know what happened is still with me. I felt..." The depth is real—the question is whether they can meet me there.',
          somaticMarker: 'The ache wanting to be expressed. Fear of being too much, or not enough.'
        },
        psychologicalInsight: 'Type 4s often feel deeply but worry that their emotional intensity will be too much for others to hold.',
        healthVariations: {
          healthy: 'Shares authentically without dramatizing, allows the other person their own response.',
          unhealthy: 'Either holds back to avoid rejection or overwhelms with intensity that the other can\'t match.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'Emotional conversations are draining. But leaving this unaddressed is worse.',
        fullResponse: {
          thought: 'I\'d rather process this internally, but it\'s affecting the relationship. I need to say something. Let me figure out exactly what happened and what I need, so I can express it clearly and efficiently.',
          action: 'I\'d prepare what to say, keep it concise: "I want to talk about something that\'s been on my mind. When X happened, it impacted me in Y way." Clear, direct, then see how they respond.',
          somaticMarker: 'Anxiety about emotional exposure. The discomfort of moving from mind to feeling.'
        },
        psychologicalInsight: 'Type 5s often prefer internal processing but can struggle to translate emotional experience into shareable words.',
        healthVariations: {
          healthy: 'Expresses feelings despite discomfort, stays present for the conversation.',
          unhealthy: 'Over-intellectualizes the conversation, or retreats at the first sign of emotional intensity.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'I need to know where we stand. But what if this conversation goes badly?',
        fullResponse: {
          thought: 'Not knowing if we\'re okay is worse than knowing we\'re not. I need to understand: are we solid? Can I count on them? This conversation scares me, but the uncertainty is worse.',
          action: 'I\'d probably test the waters first, gauge their mood. Then: "I need to talk about something that\'s been worrying me. I want to make sure we\'re okay, but first I need to share something."',
          somaticMarker: 'Anxiety and hope wrestling. Fear of the outcome, but need for certainty greater.'
        },
        psychologicalInsight: 'Type 6s often initiate hard conversations seeking security—knowing where they stand, even if it\'s painful.',
        healthVariations: {
          healthy: 'Has the conversation seeking understanding, not just reassurance.',
          unhealthy: 'Uses the conversation to test loyalty rather than genuinely connect, or avoids entirely and stews in anxiety.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'Heavy conversations are hard for me. But this is sitting between us.',
        fullResponse: {
          thought: 'I really don\'t want to do this. It\'s going to be uncomfortable, maybe even painful. But I can feel it affecting things, and I can\'t just keep pretending. Maybe we can get through it quickly and move on to better things.',
          action: 'I\'d try to be honest but light: "Hey, I need to tell you something, and it might be a little awkward. Can we talk about it and then move forward?" Keep it real but not too heavy.',
          somaticMarker: 'Restlessness. The urge to skip to resolution without sitting in the discomfort.'
        },
        psychologicalInsight: 'Type 7s often struggle with heavy emotional conversations, preferring to move to resolution quickly.',
        healthVariations: {
          healthy: 'Stays with the discomfort long enough for real understanding, even when it\'s hard.',
          unhealthy: 'Rushes through, reframes too quickly, or avoids entirely, leaving the wound to fester.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'I hate feeling hurt. But I\'d rather confront this than let it rot.',
        fullResponse: {
          thought: 'I don\'t like being the wounded one—it feels weak. But this person matters, and pretending I\'m fine when I\'m not is dishonest. Better to face it head-on than let it poison things.',
          action: 'I\'d be direct: "We need to talk. What happened affected me, and I need you to understand that." No softening, no hints. But the vulnerability underneath would be hard to show.',
          somaticMarker: 'Protective energy fighting with the need to be honest. Vulnerability armored in directness.'
        },
        psychologicalInsight: 'Type 8s often struggle with showing hurt or vulnerability, but value honesty enough to push through.',
        healthVariations: {
          healthy: 'Shows the vulnerability underneath the strength, allows connection through honesty.',
          unhealthy: 'Confronts but stays armored, makes it about the other person\'s failure rather than own hurt.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'I\'ve been carrying this, trying to let it go. But it\'s not going away.',
        fullResponse: {
          thought: 'I don\'t want to make this into a thing. But it is a thing—at least for me. I keep hoping it\'ll fade, but it\'s just sitting there. Maybe if I say something small, just to release a little...',
          action: 'I\'d probably approach it gently, minimizing: "Hey, can I mention something? It\'s not a big deal, but... this thing has been on my mind." Even in honesty, softening.',
          somaticMarker: 'Heaviness of carrying unexpressed feeling. The effort of finally moving toward voice.'
        },
        psychologicalInsight: 'Type 9s often carry hurt rather than express it, hoping it will resolve without confrontation. When they do speak, they often minimize.',
        healthVariations: {
          healthy: 'Expresses the full truth of what they feel, stays present for the response.',
          unhealthy: 'Softens so much the other person doesn\'t understand the real impact, then continues to carry it.'
        }
      }
    ]
  },

  // ========== DAILY LIFE SCENARIOS ==========
  {
    id: 'daily-001',
    title: 'The Traffic Jam',
    category: 'daily',
    situation: `You're stuck in unexpected traffic. Construction, an accident, something—it doesn't matter. You're going to be late for something that matters: a meeting, picking up your kid, a dinner reservation. There's nothing you can do. You sit in your car, surrounded by other frustrated drivers, watching the minutes tick by. The delay is completely outside your control. How do you react? What happens inside you?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'This shouldn\'t be happening. Someone should have planned better—maybe me.',
        fullResponse: {
          thought: 'Why didn\'t I leave earlier? Why didn\'t I check traffic? And whoever caused this delay—didn\'t they consider the impact? This whole situation is wrong and preventable.',
          action: 'I\'d probably call ahead to explain, apologizing for something that isn\'t my fault but feeling responsible anyway. Then I\'d strategize: alternative routes, how to make up the time.',
          somaticMarker: 'Tension building in shoulders and jaw. Frustration at imperfection in the system—and in myself.'
        },
        psychologicalInsight: 'Type 1s often experience random delays as failures of proper planning—their own or others\'—triggering the inner critic.',
        healthVariations: {
          healthy: 'Accepts what can\'t be controlled, makes practical adjustments, offers self-compassion.',
          unhealthy: 'Spirals into self-criticism and resentment, arrives even more stressed.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'I\'m going to let someone down. They\'ll think I don\'t care.',
        fullResponse: {
          thought: 'They\'re waiting for me. They\'ll think I don\'t prioritize them. I need to call, explain, make sure they know I tried. I hate that I\'m causing them inconvenience.',
          action: 'I\'d call immediately, apologizing profusely. Probably offer to make it up somehow. The anxiety is less about being late and more about disappointing someone.',
          somaticMarker: 'Worry in my chest. The ache of failing to be there for someone.'
        },
        psychologicalInsight: 'Type 2s often experience delays through the lens of relationship impact—not the lost time, but the potential disappointment.',
        healthVariations: {
          healthy: 'Communicates clearly, accepts it\'s not their fault, doesn\'t over-apologize.',
          unhealthy: 'Takes on excessive guilt, promises too much to make up for it.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'This is inefficient. What a waste of time I could be using productively.',
        fullResponse: {
          thought: 'I have things to do, places to be. Being stuck here accomplishes nothing. Let me see if I can use this time somehow—calls, emails, planning. Can\'t just sit here doing nothing.',
          action: 'I\'d immediately start multitasking: calls, voice memos, mental planning. If I have to be stuck, I\'m going to be productive about it. Also checking maps constantly for alternatives.',
          somaticMarker: 'Restless energy. The discomfort of forced stillness and wasted potential.'
        },
        psychologicalInsight: 'Type 3s often struggle with forced unproductivity, needing to convert even delay into something accomplishing.',
        healthVariations: {
          healthy: 'Accepts the pause, maybe uses it for genuine rest or reflection.',
          unhealthy: 'Becomes increasingly agitated, makes the stress worse by fighting the unfightable.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'Stuck. Trapped. Something about this feels symbolic.',
        fullResponse: {
          thought: 'Everyone here, in their little metal boxes, going nowhere. There\'s something almost poetic about it, if frustrating. My day is derailed, but maybe there\'s meaning in the interruption.',
          action: 'I might listen to music that matches my mood, let my thoughts wander. Or I might feel the frustration deeply, the melancholy of disrupted plans. Either way, I\'m feeling it fully.',
          somaticMarker: 'A mix of frustration and strange peace. Finding depth even in mundane annoyance.'
        },
        psychologicalInsight: 'Type 4s often find emotional significance in ordinary frustrations, processing mundane delays through a more symbolic lens.',
        healthVariations: {
          healthy: 'Uses the time for reflection without dramatizing, accepts the disruption gracefully.',
          unhealthy: 'Spirals into feeling uniquely victimized or dramatically inconvenienced.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'Nothing I can do. Might as well use the time in my head.',
        fullResponse: {
          thought: 'Traffic is traffic. Getting upset won\'t make it move. Let me use this time to think—about work, about ideas, about whatever I\'ve been too busy to process.',
          action: 'I\'d call ahead matter-of-factly, then settle into my thoughts. Maybe listen to a podcast or just think. Enforced solitude isn\'t the worst thing.',
          somaticMarker: 'Initial frustration settling into acceptance. Mind turning inward to make use of the time.'
        },
        psychologicalInsight: 'Type 5s often adapt quickly to forced stillness, turning it into private thinking time.',
        healthVariations: {
          healthy: 'Uses time thoughtfully, arrives calm despite delay.',
          unhealthy: 'Detaches so completely they miss when traffic starts moving, or neglects to communicate with waiting people.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'How bad is this going to get? What\'s the worst case here?',
        fullResponse: {
          thought: 'How late will I be? What if it\'s worse than I think? What will happen when I\'m late—will it really be okay or are people just saying that? Should I have taken a different route?',
          action: 'I\'d obsessively check multiple traffic apps, call ahead to warn and gauge their reaction. Run scenarios in my head. Maybe call someone just to process the anxiety out loud.',
          somaticMarker: 'Stomach churning. Mind running scenarios. Unable to settle into acceptance.'
        },
        psychologicalInsight: 'Type 6s often struggle with uncertainty, and a delay with unknown duration can trigger scenario-planning and anxiety.',
        healthVariations: {
          healthy: 'Acknowledges anxiety, takes practical steps, then finds way to calm the mind.',
          unhealthy: 'Spirals into worst-case thinking, arrives more stressed than the situation warrants.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'Ugh. Okay, what can make this less boring?',
        fullResponse: {
          thought: 'This is frustrating, but I refuse to sit here fuming. Let me find something to make this more interesting—music, a podcast, calling someone fun. Transform this from a loss into something.',
          action: 'I\'d immediately reach for entertainment or stimulation. Call a friend, crank up music, start a podcast. Being stuck doesn\'t mean being bored.',
          somaticMarker: 'Restless energy redirecting toward stimulation. Refusing to sit in discomfort.'
        },
        psychologicalInsight: 'Type 7s often cope with frustrating situations by finding ways to inject interest or pleasure into them.',
        healthVariations: {
          healthy: 'Genuinely makes the best of the time, arrives in good spirits.',
          unhealthy: 'Avoids any moment of sitting with frustration, stays stimulated but frazzled.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'This is unacceptable. There has to be a way around this.',
        fullResponse: {
          thought: 'I don\'t sit and wait. There has to be an alternative—a side street, a shortcut, something. If I can\'t control the traffic, I can control my response. I refuse to be passive.',
          action: 'I\'d be searching aggressively for alternatives, maybe even getting a little creative with navigation. If truly stuck, I\'d make calls—not apologizing but managing expectations.',
          somaticMarker: 'Energy pushing against the constraint. Frustration at being blocked, forced to submit.'
        },
        psychologicalInsight: 'Type 8s often struggle with situations they can\'t control, responding with action rather than acceptance.',
        healthVariations: {
          healthy: 'Takes action where possible, accepts where not, doesn\'t make it worse by fighting the unfightable.',
          unhealthy: 'Becomes increasingly aggressive in driving, arrives angry, takes it out on others.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'Okay. Nothing I can do. Might as well relax into it.',
        fullResponse: {
          thought: 'Traffic is traffic. Getting upset won\'t help. I\'ll get there when I get there. These things happen. It\'s kind of nice to have an excuse to just... sit.',
          action: 'I\'d call ahead casually—"running late, traffic"—then settle in. Maybe listen to something calming. Find a kind of peace in the enforced pause.',
          somaticMarker: 'Initial tension releasing into acceptance. Body settling into stillness.'
        },
        psychologicalInsight: 'Type 9s often adapt easily to circumstances, finding comfort in acceptance—though sometimes too easily.',
        healthVariations: {
          healthy: 'Genuinely at peace, arrives calm, doesn\'t carry the stress forward.',
          unhealthy: 'Uses acceptance to avoid dealing with real frustration, which emerges later.'
        }
      }
    ]
  },
  {
    id: 'daily-002',
    title: 'The Messy Kitchen',
    category: 'daily',
    situation: `You come home after a long day to find the kitchen in chaos. Dishes piled in the sink, food left out, counters covered in crumbs and spills. Your roommate or partner was supposed to handle this—you had an agreement. They're home, relaxed on the couch, apparently oblivious to the mess they left. This isn't the first time. You're tired, you're hungry, and the mess is between you and making dinner. What happens inside you? What do you do?`,
    responses: [
      {
        type: 1 as TypeNumber,
        preview: 'This is not how things should be. There was an agreement.',
        fullResponse: {
          thought: 'We agreed. There\'s a right way to share space, and this isn\'t it. Part of me wants to clean it myself because I can\'t stand the mess, but that lets them off the hook. That\'s not fair.',
          action: 'I\'d probably address it directly: "We need to talk about the kitchen. We had an agreement and it\'s not being honored." Calm but firm. This needs to be corrected.',
          somaticMarker: 'Tension throughout. The mess itself is irritating; the unfairness makes it worse.'
        },
        psychologicalInsight: 'Type 1s experience broken agreements as violations of right and wrong. The mess triggers both aesthetic discomfort and moral frustration.',
        healthVariations: {
          healthy: 'Addresses it clearly without lecturing, focuses on solution rather than blame.',
          unhealthy: 'Becomes rigidly critical, or silently cleans while radiating resentment.'
        }
      },
      {
        type: 2 as TypeNumber,
        preview: 'I\'ve done so much already. Don\'t they see how tired I am?',
        fullResponse: {
          thought: 'After everything I do around here, they couldn\'t handle this one thing? I\'ve helped them so many times. Don\'t they care about how this affects me? Maybe I should just do it—but I\'m so tired of giving.',
          action: 'I might start cleaning with visible exhaustion, hoping they\'ll notice and offer to help. Or I\'d say something like "I\'m really tired tonight..." and see if they pick up the cue.',
          somaticMarker: 'Weariness mixed with resentment. The heaviness of giving without receiving.'
        },
        psychologicalInsight: 'Type 2s often struggle to ask directly, instead signaling need and feeling hurt when others don\'t respond.',
        healthVariations: {
          healthy: 'Says directly: "I need you to handle this now. I can\'t tonight."',
          unhealthy: 'Does it themselves with martyred energy, builds invisible resentment.'
        }
      },
      {
        type: 3 as TypeNumber,
        preview: 'This is inefficient. My time is being wasted on something that should have been done.',
        fullResponse: {
          thought: 'I have limited evening time and now I have to spend it dealing with someone else\'s mess? This is ridiculous. What a waste of time that could go toward something productive.',
          action: 'I\'d probably address it efficiently: "Hey, the kitchen needs to be cleaned before we do anything else tonight. Can you handle it now?" Direct, solution-focused, minimal drama.',
          somaticMarker: 'Irritation at inefficiency. The obstacle between me and what I want to accomplish.'
        },
        psychologicalInsight: 'Type 3s often frame household issues in terms of time and efficiency rather than emotional impact.',
        healthVariations: {
          healthy: 'Addresses it practically, moves on without holding grudge.',
          unhealthy: 'Becomes dismissive or cold, makes the other person feel like an obstacle to productivity.'
        }
      },
      {
        type: 4 as TypeNumber,
        preview: 'How can they be so oblivious? Don\'t they feel how this affects the space?',
        fullResponse: {
          thought: 'They\'re sitting there, unbothered, while the space feels chaotic and wrong. Don\'t they notice? Don\'t they care about creating a home that feels good? The disconnect is frustrating.',
          action: 'I might make a pointed comment about the state of things, or withdraw to process my frustration before engaging. The disconnect in how we experience the space bothers me.',
          somaticMarker: 'The dissonance between my inner state and their apparent comfort. Feeling unseen in the shared space.'
        },
        psychologicalInsight: 'Type 4s often experience shared spaces emotionally, and others\' obliviousness to the impact can feel like a failure to understand them.',
        healthVariations: {
          healthy: 'Expresses need for order as valid preference, not as judgment of partner\'s character.',
          unhealthy: 'Dramatizes the impact, makes it about deeper incompatibility.'
        }
      },
      {
        type: 5 as TypeNumber,
        preview: 'I just wanted to come home to peace. This requires energy I don\'t have.',
        fullResponse: {
          thought: 'I was looking forward to quiet, to making dinner, to settling in. Now there\'s a mess and a conversation I don\'t want to have. This is draining before I even start.',
          action: 'I might withdraw to my room first to recover some energy, then address it minimally: "The kitchen needs attention before I can use it." Facts, not feelings.',
          somaticMarker: 'Depletion. The social demand of addressing this on top of the practical one.'
        },
        psychologicalInsight: 'Type 5s often experience unexpected demands on attention and energy as particularly draining after already-depleting days.',
        healthVariations: {
          healthy: 'Addresses it directly despite tiredness, takes care of needs.',
          unhealthy: 'Retreats and avoids, lets resentment build, or engages minimally in a way that doesn\'t actually solve the pattern.'
        }
      },
      {
        type: 6 as TypeNumber,
        preview: 'This keeps happening. Can I actually count on them to follow through on agreements?',
        fullResponse: {
          thought: 'This isn\'t the first time. Is this going to be the pattern? Can I rely on them or not? I need to know if this is just forgetfulness or something I should be more worried about.',
          action: 'I\'d bring it up, but probably with some anxiety about the conversation: "Hey, this is becoming a pattern. I need to know I can count on you. Can we figure this out?"',
          somaticMarker: 'Vigilance about the pattern. Is this an isolated thing or a sign of something bigger?'
        },
        psychologicalInsight: 'Type 6s often interpret repeated failures as data about reliability. The question becomes: can I trust this person?',
        healthVariations: {
          healthy: 'Addresses the pattern directly, works toward reliable solution.',
          unhealthy: 'Catastrophizes about what the pattern means, becomes accusatory.'
        }
      },
      {
        type: 7 as TypeNumber,
        preview: 'Ugh, this is annoying. Can we just deal with it quickly and move on?',
        fullResponse: {
          thought: 'I don\'t want to dwell on this. It\'s frustrating but it is what it is. Let\'s figure out the fastest way to address it so we can get on with the evening.',
          action: 'I might just start cleaning to get it over with, or say something light: "Hey, kitchen disaster zone! Want to tackle it together real quick?" Keep it moving, don\'t make it heavy.',
          somaticMarker: 'Quick flash of frustration, then forward motion toward resolution and past the problem.'
        },
        psychologicalInsight: 'Type 7s often prefer to solve problems quickly rather than dwell on frustration or have heavy conversations about patterns.',
        healthVariations: {
          healthy: 'Addresses it lightly but directly, actually solves the pattern.',
          unhealthy: 'Brushes past too quickly, never addresses the underlying issue, annoyance accumulates.'
        }
      },
      {
        type: 8 as TypeNumber,
        preview: 'No. They\'re going to deal with this right now.',
        fullResponse: {
          thought: 'I\'m not cleaning up their mess, and I\'m not tiptoeing around it. We had a deal, they didn\'t keep it, and they\'re going to fix it. Now. Not later, now.',
          action: 'I\'d walk over and say directly: "The kitchen\'s a mess and it\'s your turn. I need it cleaned before I can make dinner. Can you handle that now?" No games, no hints.',
          somaticMarker: 'Direct energy. The readiness to take charge and enforce the boundary.'
        },
        psychologicalInsight: 'Type 8s often address issues directly and immediately, expecting others to take responsibility without needing to be managed.',
        healthVariations: {
          healthy: 'Clear, direct, effective. Gets the result without damaging the relationship.',
          unhealthy: 'Comes across as dominating or aggressive, creates defensiveness rather than cooperation.'
        }
      },
      {
        type: 9 as TypeNumber,
        preview: 'I could say something... or I could just deal with it and not make a thing.',
        fullResponse: {
          thought: 'It\'s frustrating, but is it worth a conversation? They\'ll probably get defensive. Maybe I\'ll just clean enough to make dinner and deal with the rest later. It\'s easier.',
          action: 'I might start quietly cleaning, or make a very gentle comment: "Hey, the kitchen\'s a bit of a disaster." Nothing that creates conflict. Just... noting.',
          somaticMarker: 'The familiar weight of swallowed frustration. The tiredness that comes with not expressing.'
        },
        psychologicalInsight: 'Type 9s often weigh the discomfort of confrontation against the discomfort of unmet needs, frequently choosing to absorb rather than address.',
        healthVariations: {
          healthy: 'Names the issue clearly, even if gently: "I need you to clean this up."',
          unhealthy: 'Absorbs and absorbs until resentment finally erupts, or just disengages from the relationship bit by bit.'
        }
      }
    ]
  }
];

// Helper functions
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
