import type { TypeNumber, InstinctType } from '../../types';

export interface SubtypeRelationshipStory {
  type1: TypeNumber;
  subtype1: InstinctType;
  type2: TypeNumber;
  subtype2: InstinctType;
  title: string;
  subtitle: string;
  narrative: string;
  dynamicDescription: string;
  growthPath: string;
  watchOut: string;
}

// Helper to create a story key for lookups
export const getSubtypeStoryKey = (
  type1: TypeNumber,
  subtype1: InstinctType,
  type2: TypeNumber,
  subtype2: InstinctType
): string => {
  // Normalize to always have lower type number first, or if same type, alphabetical subtype
  if (type1 < type2 || (type1 === type2 && subtype1 <= subtype2)) {
    return `${type1}-${subtype1}-${type2}-${subtype2}`;
  }
  return `${type2}-${subtype2}-${type1}-${subtype1}`;
};

export const subtypeRelationshipStories: SubtypeRelationshipStory[] = [
  // ============================================
  // SAME-TYPE PAIRINGS (54 stories)
  // ============================================

  // === TYPE 1 SAME-TYPE SUBTYPE PAIRINGS ===
  {
    type1: 1, subtype1: 'sp', type2: 1, subtype2: 'sp',
    title: "The Anxious Perfectionists",
    subtitle: "Two SP Ones creating fortress of correctness",
    narrative: `She alphabetized the spice rack; he reorganized it by frequency of use. Both were right. Both were frustrated.

"The cumin should be with the C spices," she said, moving it back.

"But we use it daily. It should be within reach," he countered, moving it forward.

Their apartment gleamed with the tension of two perfectionists sharing one space. The budget spreadsheet had competing formulas. The cleaning schedule had footnotes arguing with other footnotes. Even their meal prep containers were silently debating optimal stacking methods.

One evening, exhausted from optimizing their optimization systems, they sat amid the perfect order they'd created. "Are we ever going to just... live here?" she asked quietly.

He looked around at their fortress of correctness. "I don't know how to stop fixing things."

"Neither do I."

That confession—two people admitting they couldn't turn it off—was the first imperfect thing they'd allowed to exist. And strangely, it felt like the beginning of something that might actually be good enough.`,
    dynamicDescription: "Shared focus on practical perfectionism creates deep understanding but can amplify anxiety about material security and physical order.",
    growthPath: "Learning to accept 'good enough' in practical matters, creating spaces where imperfection is allowed, finding security in each other rather than in perfect systems.",
    watchOut: "Competitive criticism about whose methods are correct, never feeling safe enough to rest, home becoming a tense optimization project."
  },
  {
    type1: 1, subtype1: 'sp', type2: 1, subtype2: 'so',
    title: "The Pragmatist and The Advocate",
    subtitle: "Personal standards meet social principles",
    narrative: `He was drafting another letter to the city council. She was rebalancing their retirement portfolio for the third time this month.

"You spend hours on community issues," she said, not looking up from the spreadsheet. "Meanwhile, our own finances could be more efficient."

"Our finances are fine. The neighborhood recycling program is not." He sealed the envelope with conviction. "Someone has to care about the bigger picture."

She set down her calculator. "And someone has to make sure we don't end up broke while you're saving the world."

They'd had this argument before—his gaze fixed on the horizon, hers focused on what was right in front of them. Both saw the other as missing what mattered most.

But one Saturday, he helped her organize the garage while she came to his community meeting. She discovered his passion wasn't preachy—it was principled. He realized her pragmatism wasn't small-minded—it was the foundation that let him dream bigger.

"You need your home in order to change the world," she admitted.

"And the world needs changing by people whose homes are in order," he replied.

They were both right. Finally, that felt okay.`,
    dynamicDescription: "Tension between inward-focused and outward-focused perfectionism, but potential for complementary coverage of personal and social domains.",
    growthPath: "SP One learning that social contribution matters, SO One learning that personal integrity starts at home, finding shared causes that honor both orientations.",
    watchOut: "SP One dismissing SO One as preachy, SO One dismissing SP One as selfish, competing over whose standards matter more."
  },
  {
    type1: 1, subtype1: 'sp', type2: 1, subtype2: 'sx',
    title: "The Cautious and The Zealous",
    subtitle: "Measured reform meets passionate transformation",
    narrative: `She approached love like a controlled burn; he approached it like wildfire.

"We need to talk about our communication patterns," he announced at 11 PM, eyes blazing. "I feel like we're not connecting at a soul level."

She'd been reviewing the next month's grocery budget. "Can this wait until—"

"See? This is exactly what I mean. You'd rather organize vegetables than engage with what really matters."

She took a breath. "The vegetables matter. Everything can't be a breakthrough moment."

To him, she seemed to be sleepwalking through their relationship, checking boxes instead of diving deep. To her, he seemed to be setting everything on fire just to feel the heat.

But she noticed: when she was sick, his intensity became fierce protection. His passion was love in its rawest form.

And he noticed: her steady presence never wavered. Her calm was love in its most reliable form.

"Maybe I need your fire," she admitted one night.

"Maybe I need your ground," he replied.

Not everything has to transform. Not everything has to stay safe. Some gardens need both the careful tending and the wild growth.`,
    dynamicDescription: "Grounded practicality meets intense idealism about love and transformation, creating tension between stability and passion.",
    growthPath: "SP One learning that passion isn't impractical, SX One learning that steady presence is its own form of devotion.",
    watchOut: "SX One overwhelming SP One with intensity, SP One dampening SX One's fire with practical concerns, each feeling unseen in their core values."
  },
  {
    type1: 1, subtype1: 'so', type2: 1, subtype2: 'so',
    title: "The Moral Alliance",
    subtitle: "Two reformers with social vision",
    narrative: `They met at a town hall, both rising to speak against the same zoning proposal. Their arguments complemented each other so perfectly that the audience assumed they'd coordinated. They hadn't. They'd just arrived at the same righteous conclusion independently.

Coffee became dinner became late-night strategy sessions for every cause imaginable. They were unstoppable—two people who knew how the world should work, finally united.

Then came the disagreement.

"The protest should focus on environmental impact," she insisted.

"Economic justice is the root issue," he countered. "Your approach is treating symptoms."

Three hours of debate. Neither budged. Both felt betrayed—how could someone who seemed so aligned be so fundamentally wrong?

They sat in frustrated silence until she laughed, exhausted. "We sound like opposing counsel."

"Except we're on the same side," he said. "Aren't we?"

They were. That was the revelation. Two people committed to making things right don't have to agree on every detail. The cause is bigger than the method.

They learned to be allies rather than competitors. The world benefited from their combined conviction—and so did they.`,
    dynamicDescription: "Powerful alignment on social values but potential for moral competition and debates about who holds the truly correct position.",
    growthPath: "Learning that rightness isn't a competition, finding ways to collaborate rather than compete for moral authority, accepting each other's slightly different emphasis.",
    watchOut: "Endless debates about whose position is more correct, moral one-upmanship, relationship becoming a political alliance rather than intimate partnership."
  },
  {
    type1: 1, subtype1: 'so', type2: 1, subtype2: 'sx',
    title: "The Cause and The Crusade",
    subtitle: "Social reform meets personal revolution",
    narrative: `She was preparing for the school board meeting. He was preparing to have the conversation—the one about where their relationship was really going.

"I need you fully present tonight," he said, watching her shuffle through notes.

"This vote affects hundreds of children," she replied, not looking up.

"And I don't affect you at all?"

She finally met his eyes. "Of course you do. But—"

"But the world comes first." It wasn't a question.

She saw how it looked to him: that policies mattered more than passion, that abstract children outweighed the person standing right here. He saw how it looked to her: that his intensity was self-centered, that he couldn't see beyond the two of them.

The silence stretched until he spoke again. "I want to transform this relationship into something profound. You want to transform everything except this relationship."

"That's not fair."

"Neither is always coming second to your causes."

They were both reformers, just aiming at different scales. The breakthrough came when she brought him to a meeting, and he helped her write a speech. When he made their relationship feel like a cause worth fighting for, and she made him feel like he was part of something larger.

The personal became political. The political became personal. Both became right.`,
    dynamicDescription: "Social perfectionism meets intimate perfectionism, creating different scopes of reform that can complement or clash.",
    growthPath: "SO One learning that changing one relationship deeply matters, SX One learning that broader contribution has value, integrating public and private idealism.",
    watchOut: "SO One neglecting the relationship for causes, SX One dismissing social engagement as impersonal, each invalidating the other's focus."
  },
  {
    type1: 1, subtype1: 'sx', type2: 1, subtype2: 'sx',
    title: "The Consuming Fire",
    subtitle: "Two zealots seeking perfect love",
    narrative: `They fought like they loved—completely, righteously, and with nothing held back.

"You said you'd work on your defensiveness," she said, voice trembling with conviction.

"I have been! Maybe if you didn't criticize everything I do—"

"It's not criticism, it's helping you become who you could be!"

"That's exactly what I'm trying to do for you!"

The irony hung in the air: two people trying to perfect each other, convinced their reforms came from love. And they did—that was the agonizing part. Every pointed observation, every "we need to talk," every exhausting late-night session about who they were and weren't being... all of it came from genuine devotion.

The fights were legendary. So were the reconciliations.

One night, mid-argument, she stopped. "We're both trying to fix each other."

"We're both trying to reach the ideal," he said quietly.

"What if the ideal isn't two perfect people?" She took his hands. "What if it's two imperfect people who choose each other anyway?"

He exhaled years of impossible standards. "That sounds like heresy."

"It sounds like mercy."

They discovered that the most transformative thing wasn't changing each other—it was accepting each other. And that felt like the truest form of love either had ever known.`,
    dynamicDescription: "Maximum intensity as both focus perfectionism on the relationship, creating passionate connection with equally passionate conflict.",
    growthPath: "Learning that love includes accepting imperfection, channeling reform energy toward self rather than partner, finding that real intimacy requires mercy.",
    watchOut: "Relationship becoming a reform project, criticism disguised as improvement, intensity without tenderness, each trying to fix the other."
  },

  // === TYPE 2 SAME-TYPE SUBTYPE PAIRINGS ===
  {
    type1: 2, subtype1: 'sp', type2: 2, subtype2: 'sp',
    title: "The Careful Givers",
    subtitle: "Two protectors guarding their giving",
    narrative: `They circled each other like two people carrying full trays—careful, measured, watching for spills.

"I made you tea," she said, setting it down precisely. "But I need an hour to myself after."

"I understand," he nodded, having already planned his own retreat. "I picked up your prescription. It's by the door."

Their love was a series of thoughtful gestures followed by gentle withdrawals. Each gave—but with guardrails. Each helped—but protected their reserves.

"Sometimes I wish you'd just... overwhelm me," she admitted one night. "Give without counting."

"I wish the same about you," he confessed.

They sat with that truth—two helpers who had learned to help themselves first, now wondering if they had forgotten how to be reckless with love.

"Maybe we can practice," she offered. "Small overwhelmings."

He smiled cautiously. "I'll make you breakfast. No retreat after."

It was not the floods of devotion they had once dreamed of giving. But it was real. And it was safe enough to grow.`,
    dynamicDescription: "Mutual understanding of boundaried helping, creating stability but potentially feeling emotionally restrained compared to Two ideals.",
    growthPath: "Appreciating that boundaried giving is healthy, learning to receive as well as give, finding intimacy beyond the helper dynamic.",
    watchOut: "Both waiting for the other to give more, relationship feeling transactional, neither fully satisfying the Two's desire to be indispensable."
  },
  {
    type1: 2, subtype1: 'sp', type2: 2, subtype2: 'so',
    title: "The Private Helper and The Public Servant",
    subtitle: "Personal care meets community service",
    narrative: `She came home to find him already gone—another community meeting, another board, another cause that needed his warmth.

"You give yourself to everyone," she said when he returned, exhausted but glowing. "There's nothing left for us."

"There's plenty left," he protested. "You just want me all to yourself."

She did. She admitted it quietly. She wanted to be special, not one of many recipients of his generous heart.

"When you help Mrs. Patterson with her groceries," she asked, "do you feel what you feel when you help me?"

He paused. "It's... different."

"Is it?"

He sat down heavily. "I don't know anymore. Everyone needs something."

"I need something too," she whispered. "I need to matter more than the community."

"And I need to matter beyond these walls," he replied.

The impasse hung between them until she reached for his hand. "What if we both stretched? You come home earlier. I come to one meeting."

He smiled, tired but hopeful. "One meeting?"

"One. And then you're mine."`,
    dynamicDescription: "Tension between selective and broad giving, with potential to balance intimate care and community involvement.",
    growthPath: "SP Two learning to give more freely, SO Two learning to prioritize close relationships, finding ways to serve both intimate and broader needs.",
    watchOut: "SP Two resenting SO Two's external focus, SO Two feeling controlled by SP Two's boundaries, competing for whose giving matters more."
  },
  {
    type1: 2, subtype1: 'sp', type2: 2, subtype2: 'sx',
    title: "The Boundaried and The Boundless",
    subtitle: "Careful giving meets consuming devotion",
    narrative: `She loved like a river breaking its banks—everything, everywhere, all at once, all for him.

He loved like a careful gardener—measured watering, pruned attention, sustainable care.

"Why do you hold back?" she asked, pressing closer. "I give you everything."

"That's the problem," he said gently, stepping back. "Everything is too much."

She felt the rejection like a blade. How could devotion be too much? How could total focus feel like a burden?

"I'm not rejecting you," he tried to explain. "I'm protecting us both."

"From what?"

"From burning out. From drowning."

She stared at him, her vast love suddenly feeling like a flaw. He watched her, his careful boundaries suddenly feeling like walls.

"Teach me," she finally said. "Teach me to love in portions."

"Only if you teach me to love without an exit strategy."

They stood at the edge of their differences—one learning that space was not abandonment, one learning that vulnerability did not require depletion. Meeting somewhere in the middle, where devotion had room to breathe.`,
    dynamicDescription: "Maximum contrast in Two expression: boundaried care versus complete devotion, creating tension between self-protection and merger.",
    growthPath: "SP Two learning that vulnerability is safe here, SX Two learning that space isn't rejection, finding sustainable intimacy that honors both styles.",
    watchOut: "SX Two feeling rejected by SP Two's boundaries, SP Two feeling suffocated by SX Two's intensity, neither feeling properly loved."
  },
  {
    type1: 2, subtype1: 'so', type2: 2, subtype2: 'so',
    title: "The Power Couple of Helpers",
    subtitle: "Two networkers building social capital",
    narrative: `They threw the best parties. Everyone said so.

"You handle the Hendersons," she whispered, squeezing his arm. "I'll work on getting the Chens to commit to the fundraiser."

"Perfect," he smiled, already scanning the room. "Oh—catch up with Maria. She's been feeling neglected."

They moved through the crowd like dancers who knew every step, each making others feel seen, wanted, valued. Together they were unstoppable—a power couple of connection, indispensable to every gathering.

But at 2 AM, when the last guest finally left, they sat on opposite ends of the couch, exhausted.

"Good party," she said.

"Great party," he agreed.

Silence.

"Do you ever wonder," she finally asked, "if we know how to do this when no one's watching?"

He looked at her—really looked, for the first time all night. "I was just thinking the same thing."

"Maybe we could practice," she suggested. "Being useless together. Just... being."

He reached for her hand, uncertain. "I don't know how."

"Neither do I," she admitted. "But we're both quick learners."`,
    dynamicDescription: "Amplified social giving creates powerful partnership but risks treating relationship as another networking context.",
    growthPath: "Creating private intimacy separate from social performance, valuing each other beyond usefulness, being vulnerable when no one's watching.",
    watchOut: "Relationship becoming a social performance, competing for influence, never having truly private moments, valuing each other for status."
  },
  {
    type1: 2, subtype1: 'so', type2: 2, subtype2: 'sx',
    title: "The Networker and The Devoted",
    subtitle: "Broad connection meets singular focus",
    narrative: `Her phone buzzed constantly. Another text, another need, another person requiring her warmth.

He watched from across the table, waiting. Always waiting.

"You're everyone's," he finally said. "When do you become mine?"

"I am yours," she protested, even as she typed a quick response to someone else. "But I cannot just abandon people who need me."

"What about what I need?" His voice cracked. "To be your only. Your first. Your everything."

She looked up, seeing the hunger in his eyes—the same hunger she poured outward into a hundred connections. He wanted it all directed at him. Just him.

"That is not how love works for me," she said softly.

"Then teach me your way," he replied, "because mine is drowning us both."

She set down her phone—a small revolution. He took a breath—a small unclenching.

"What if I gave you first priority?" she offered. "Not exclusive. First."

"What if I let others exist?" he countered. "Not happily. But without falling apart."

They were speaking different languages of devotion, but for the first time, trying to translate.`,
    dynamicDescription: "Conflict between broad social giving and focused intimate giving, creating jealousy and competing needs for connection.",
    growthPath: "SO Two prioritizing the relationship more, SX Two tolerating partner's broader connections, finding balance between intimate and social worlds.",
    watchOut: "SX Two becoming jealous of SO Two's social life, SO Two feeling trapped by SX Two's intensity, neither feeling fully chosen."
  },
  {
    type1: 2, subtype1: 'sx', type2: 2, subtype2: 'sx',
    title: "The Complete Merger",
    subtitle: "Two people becoming one",
    narrative: `They fell into each other like two flames meeting—consuming, merging, becoming one blaze.

"I would do anything for you," she breathed.

"Not if I do it first," he replied.

They competed in devotion. She anticipated his needs before he knew them. He sacrificed his plans to fulfill hers. Each trying to be more essential, more irreplaceable, more everything.

"You are all I need," she declared.

"You are all I want," he echoed.

The world shrank to the space between them. Friends faded. Hobbies vanished. There was only this—this endless loop of giving and needing to give more.

"Let me take care of you," she insisted.

"No, let me take care of you," he countered.

"Who is receiving?" their therapist finally asked. "If you are both only giving, who is actually being filled?"

They stared at each other, the question hanging like smoke.

"Maybe," she said slowly, "we could learn to receive."

"Together?"

"Together. But also... separate. Sometimes."

It was the hardest word they had ever said. And the beginning of love that could breathe.`,
    dynamicDescription: "Maximum intensity Two pairing with complete mutual focus, creating profound connection with risk of unhealthy merger.",
    growthPath: "Maintaining individual identity, allowing outside connections, learning to receive as well as give, finding self beyond the relationship.",
    watchOut: "Complete fusion losing both selves, competition to be more giving, relationship becoming the whole world, codependency squared."
  },

  // === TYPE 3 SAME-TYPE SUBTYPE PAIRINGS ===
  {
    type1: 3, subtype1: 'sp', type2: 3, subtype2: 'sp',
    title: "The Material Achievers",
    subtitle: "Two builders of tangible success",
    narrative: `The spreadsheet showed their combined net worth—up thirty percent this quarter. She smiled at the numbers. He nodded, satisfied.

"We're ahead of schedule," she said. "House by thirty-five. Portfolio by forty."

"We're winning," he agreed.

Their friends envied them. The couple with the plan. The ones who had it figured out.

But one night, after another perfect dinner party in their perfect home, she found him sitting alone in the dark.

"What's wrong?" she asked.

"Nothing. Everything's going exactly right."

"Then why do you look so lost?"

He couldn't answer. Neither could she. They had achieved everything they'd planned—and felt nothing.

"When did we last do something just because we wanted to?" she finally asked.

"I don't remember wanting anything except... this."

They looked around at their showcase. Beautiful. Empty.

"Maybe," she said slowly, "we could try wanting something that doesn't go on a spreadsheet."

It terrified them both. Achievement with no metric. Success that couldn't be measured. But sitting together in the dark, not performing, not optimizing—just being—felt like the first real thing in years.`,
    dynamicDescription: "Aligned material ambition creates powerful partnership for success but may neglect emotional depth beneath the achievements.",
    growthPath: "Finding value beyond material success, creating space for vulnerability between accomplishments, discovering who you are when you stop achieving.",
    watchOut: "Relationship becoming another achievement metric, competing for who's more successful, never resting in each other without performing."
  },
  {
    type1: 3, subtype1: 'sp', type2: 3, subtype2: 'so',
    title: "The Builder and The Star",
    subtitle: "Material security meets social status",
    narrative: `He watched her work the room at the charity gala, air-kissing donors, laughing at the right moments. Everyone wanted to talk to her.

Meanwhile, he was checking his phone—the quarterly numbers were in. Strong.

"You should come mingle," she said during a break. "These connections matter."

"The portfolio matters," he replied. "Anyone can smile at strangers."

She stiffened. "You think what I do is just smiling?"

"You think what I do is just numbers?"

The silence hung heavy on the drive home. Two achievers, each convinced the other had it backward.

"Without my reputation, doors don't open," she finally said.

"Without my foundation, you'd have nothing to dress up for those doors."

Both true. Both insufficient alone.

"Maybe," he said slowly, "I could learn to work a room."

"Maybe," she admitted, "I could learn to read a balance sheet."

He took her hand. "I don't think you're superficial."

"I don't think you're small-minded."

They'd been competing when they could have been completing. His security, her visibility. Together, they covered both—the foundation and the face of their shared success.`,
    dynamicDescription: "Different achievement orientations can complement or compete, covering material and social success if aligned.",
    growthPath: "SP Three appreciating the value of reputation, SO Three appreciating the foundation of material security, building together rather than competing.",
    watchOut: "SP Three dismissing SO Three as superficial, SO Three dismissing SP Three as small-minded, competing over whose success matters more."
  },
  {
    type1: 3, subtype1: 'sp', type2: 3, subtype2: 'sx',
    title: "The Pragmatist and The Performer",
    subtitle: "Quiet achievement meets magnetic presence",
    narrative: `She walked into the meeting like a force of nature—heads turned, conversations paused. He had already been there an hour, quietly reviewing spreadsheets.

"You're still working?" She kissed his cheek. "We're celebrating tonight."

"Someone has to make sure there's something to celebrate."

She heard the judgment. "You think I don't contribute?"

"I think you dazzle. I build."

"And you think building matters more?"

He paused. "Doesn't it?"

She sat down. "Last week's deal happened because I walked into that room. They couldn't stop looking at me long enough to question the numbers."

"The numbers I prepared."

"Yes. Your foundation. My spark. Are you saying one's more real?"

He looked at her—the woman who lit up rooms he could never warm. And she looked at him—the man who made everything she touched actually work.

"I feel outshone," he admitted.

"I feel boring next to your substance."

They laughed at the absurdity. Both feeling inadequate beside the other's gifts.

"You ground me," she said.

"You make me shine."`,
    dynamicDescription: "Substance meets charisma, creating potential for complete package if they value rather than dismiss each other's strengths.",
    growthPath: "SP Three learning that magnetism has value, SX Three learning that substance underlies lasting success, appreciating different success styles.",
    watchOut: "SP Three feeling upstaged, SX Three feeling judged, competing for who's the 'real' achiever, dismissing each other's approach."
  },
  {
    type1: 3, subtype1: 'so', type2: 3, subtype2: 'so',
    title: "The Power Couple",
    subtitle: "Two stars sharing the stage",
    narrative: `Their Instagram was flawless. The couple everyone envied. Perfect photos, perfect parties, perfect life.

"You look amazing," he said, checking her outfit before the event.

"So do you," she replied, adjusting his collar.

They worked the room like professionals—separate but synchronized, always catching each other's eye across crowds, always presenting the united front.

But that night, after the guests left, she found him staring at his phone, scrolling through their own photos.

"Who are we when no one's watching?" she asked quietly.

He looked up, startled. "What do you mean?"

"I mean... do you even like me? Or just how we look together?"

The question hung in the perfectly curated air. He put down his phone.

"I don't know anymore," he admitted. "I don't know where the performance ends."

"Me neither."

They sat in silence—no audience, no image to maintain. Just two people who'd forgotten how to be real.

"I failed a presentation last week," she whispered. "I didn't tell you."

"I got passed over for the promotion." His voice cracked. "I was ashamed."

Two imperfect truths. Two cracks in the polish. And somehow, in that moment of mutual failure, they finally saw each other.`,
    dynamicDescription: "Amplified social success creates impressive image but risks becoming mutual performance with no authentic core.",
    growthPath: "Creating private moments of authenticity, valuing each other beyond image, admitting failure and still being loved.",
    watchOut: "Competing for spotlight, relationship as performance, never knowing if you're loved for yourself, image taking precedence over intimacy."
  },
  {
    type1: 3, subtype1: 'so', type2: 3, subtype2: 'sx',
    title: "The Social Star and The Magnetic One",
    subtitle: "Public success meets private intensity",
    narrative: `She checked her watch. Another networking event. He was already dressed, waiting.

"Do we have to?" he asked, pulling her closer. "Stay. Just us."

"Everyone will be there. It matters."

"I matter." His eyes locked on hers. "Don't I?"

She felt the pull—his intensity, his focus on her alone. But the party called. The connections. The visibility she craved.

"You matter," she said, pulling away gently. "But so does this."

He watched her work the room from across the venue, charming everyone, belonging to no one. She was the center of every conversation while he waited at the edges.

"You were incredible tonight," he said in the car home. "Everyone loved you."

"Did you?"

The question surprised them both.

"I want you to love me the way they do," he admitted. "All that energy—I want it here. On us."

"And I need the world to see me. Is that wrong?"

Silence. Then her hand found his.

"What if I came home earlier sometimes?" she offered.

"What if I came out more willingly?"

Two types of hunger. Public and private. Neither wrong—just starving for different things.`,
    dynamicDescription: "Public versus private focus creates tension between social demands and intimate intensity, requiring careful balance.",
    growthPath: "SO Three making relationship genuinely primary, SX Three tolerating public demands, creating rhythm between spotlight and sanctuary.",
    watchOut: "SX Three feeling second to SO Three's public life, SO Three feeling trapped by SX Three's intensity, competing for each other's attention."
  },
  {
    type1: 3, subtype1: 'sx', type2: 3, subtype2: 'sx',
    title: "The Magnetic Field",
    subtitle: "Two irresistibles creating one force",
    narrative: `They met across a crowded room—two magnetic forces recognizing each other instantly. Everyone else faded.

"I've never met anyone like you," he said that first night.

"I was thinking the same thing." Her eyes held his.

The early months were electric. Two captivating people, utterly captivated by each other. Friends watched in awe—had they ever seen either of them this focused on someone?

But then the chase ended. The mystery revealed. And one evening, she caught him checking his reflection instead of looking at her.

"Are you bored?" she asked.

"Are you?"

The truth hung between them. They'd both lived on the spark of pursuit. Now what?

"I don't know how to be wanted without performing," she admitted.

"I don't know how to want without chasing."

They sat with the terrifying ordinary-ness of stability. No conquest. No dazzle.

"What if this is the real test?" he said. "Not capturing each other—but keeping each other?"

"Can we learn?"

"I don't know. But I don't want to find someone new just because this got quiet."

"Me neither."

The spark wasn't gone. It had become a different fire—slower, deeper, asking them to be real instead of radiant.`,
    dynamicDescription: "Maximum attraction energy creates electric connection but challenges sustainable intimacy beyond initial captivation.",
    growthPath: "Moving from attraction to authentic intimacy, being loved beyond performance, sustaining connection when the chase ends.",
    watchOut: "Relationship staying at surface attraction, competing to be more desirable, losing interest when novelty fades, performance replacing presence."
  },

  // === TYPE 4 SAME-TYPE SUBTYPE PAIRINGS ===
  {
    type1: 4, subtype1: 'sp', type2: 4, subtype2: 'sp',
    title: "The Aesthetic Survivors",
    subtitle: "Two Fours building beautiful stability",
    narrative: `They built their home together—every lamp chosen, every fabric deliberate, every corner a poem. She understood why he needed the velvet chair in exactly that shade of midnight. He understood why she spent an hour arranging dried flowers.

"The world is so loud," she said one evening, drawing the curtains against the noise outside.

"That's why we made this," he replied.

For months it was perfect. Their sanctuary. Their understood sadness, never needing explanation. But seasons passed and the beautiful cave became a beautiful prison.

"When did we last leave?" she asked one morning, realizing she couldn't remember.

He looked at the door like it was a foreign object. "We have everything here."

But they didn't. They had beauty without life, understanding without growth. The breakthrough came slowly—one dinner with friends, one walk in the imperfect world. They learned their sanctuary was a base camp, not a destination.

"We can always come home," she said, taking his hand at the threshold.

"But we have to leave it sometimes to remember why it matters."`,
    dynamicDescription: "Shared aesthetic sensibility and grounded intensity create peaceful partnership but may enable mutual withdrawal.",
    growthPath: "Engaging with the world together, bringing beauty outward not just inward, finding meaning beyond their curated sanctuary.",
    watchOut: "Mutual withdrawal from life, using aesthetics to avoid engagement, parallel loneliness in a beautiful space."
  },
  {
    type1: 4, subtype1: 'sp', type2: 4, subtype2: 'so',
    title: "The Interior and The Outsider",
    subtitle: "Private aesthete meets social misfit",
    narrative: `She came home wounded from another party. "They all have their inside jokes. Their shared histories. I just stand there, watching them belong to each other."

He looked up from the journal he was writing in, surrounded by carefully arranged objects. "Why do you keep going?"

"Because I have to know if I can belong somewhere." She stared at him. "How can you just... not care?"

"I don't not care. I just suffer it here, in my own space, on my own terms."

"That's not suffering. That's hiding."

"And what you do—measuring yourself against people who don't understand you—that's not torture. It's self-harm."

The words hung between them, both true, both painful.

"You think your loneliness is more real because it's private," she finally said.

"You think yours is more real because it's witnessed."

They sat with that. Two kinds of outsiders, each thinking the other had it easier. The healing began when they stopped competing.

"Show me your world," she said.

"Come to the next party with me," he replied. "And we'll leave when you want to."`,
    dynamicDescription: "Different relationships to uniqueness—one inward and aesthetic, one outward and social—can create misunderstanding about what matters.",
    growthPath: "SP Four understanding social belonging pain, SO Four finding peace in private creation, sharing different expressions of the Four experience.",
    watchOut: "SP Four dismissing SO Four's social concerns, SO Four finding SP Four's inwardness insufficiently meaningful, competing over authentic suffering."
  },
  {
    type1: 4, subtype1: 'sp', type2: 4, subtype2: 'sx',
    title: "The Aesthetic Survivor and The Romantic Intensity",
    subtitle: "Grounded uniqueness meets consuming passion",
    narrative: `"Feel this with me," she demanded, tears streaming. "Be here. Be present. Stop hiding in your perfect room."

He stood frozen, the intensity washing over him like a wave he wasn't sure he could survive. "I am here. I'm just... not drowning."

"Drowning is the point! Love should consume you!"

"Love should also let you breathe."

She saw it then—not coldness but containment. A fire burning steady instead of wild. His beautiful objects weren't walls; they were how he held his intensity without being destroyed by it.

"You think I don't feel deeply," he said quietly. "Look at this room. Every piece is a feeling I couldn't speak."

She looked. Really looked. The painting he'd chosen after his father died. The chair from the house they almost bought. A museum of contained grief.

"I burn too," he continued. "I just don't burn everything down."

"And I," she admitted, "sometimes burn things just to feel alive."

They met in the middle that night. He let her intensity touch him. She let his stillness calm her. Two flames learning they could dance without destroying.`,
    dynamicDescription: "Maximum contrast in Four expression: contained intensity versus explosive passion, creating tension between stability and depth.",
    growthPath: "SP Four allowing more emotional engagement, SX Four appreciating grounded presence, finding middle ground between containment and explosion.",
    watchOut: "SX Four overwhelming SP Four, SP Four seeming cold to SX Four, each invalidating the other's way of being a Four."
  },
  {
    type1: 4, subtype1: 'so', type2: 4, subtype2: 'so',
    title: "The Outsiders Together",
    subtitle: "Two people who never quite belonged",
    narrative: `They found each other at the edge of the party, both watching the easy laughter of people who belonged.

"You feel it too," she said. Not a question.

"Every room I enter," he replied. "I'm always studying the language everyone else was born speaking."

For the first time, she felt seen. They built a world of two—their own references, their own language, their own belonging that excluded everyone who had ever excluded them.

"We're the only real ones," she said one night, satisfied.

But then he noticed her watching him. Measuring. "You had it worse than me," she said. "Your family actually rejected you."

"But you—" he started, and stopped. They were competing. Even here. Even with each other.

"We're doing to each other what they did to us," he realized. "Making the other prove they deserve to belong."

The work was hard: building a home instead of a fortress. Letting others in occasionally. Defining themselves by what they loved, not what had rejected them.

"We belong to each other," she finally said. "Not because no one else wanted us. Because we chose each other."`,
    dynamicDescription: "Shared outsider experience creates deep understanding but risks defining relationship by mutual exclusion from others.",
    growthPath: "Building positive identity beyond outsider status, finding belonging in each other rather than just shared alienation, engaging with community from secure base.",
    watchOut: "Competing for who's more excluded, relationship based on shared grievance, never finding positive belonging together."
  },
  {
    type1: 4, subtype1: 'so', type2: 4, subtype2: 'sx',
    title: "The Outsider and The Passionate",
    subtitle: "Social longing meets intimate intensity",
    narrative: `"Why do you care so much about what they think?" she asked, exasperated. "We have each other. Isn't that enough?"

He stared at her, frustrated. "It's not about them specifically. It's about... belonging somewhere. Being part of something larger."

"I am something larger. This love is something larger."

"But you're just one person. What about meaning? Community? The bigger picture of a life?"

She felt the rejection like a slap. "So I'm not enough."

"You're everything," he said, catching himself. "But you're not the only thing. I need to find my place in the world, not just in you."

She couldn't understand—all her intensity poured into one consuming bond, while he kept scattering his longing across groups that never wanted him.

"You're looking for belonging in rooms full of strangers," she said bitterly.

"And you're looking for belonging in just one person who can never be everything."

The truth lived between them. She learned to loosen her grip. He learned to come home fully.

"You're my belonging," he finally said. "And I still need to find my place out there. Both are true."`,
    dynamicDescription: "Different orientations of Four longing—social belonging versus intimate merger—create different needs and potential misunderstanding.",
    growthPath: "SO Four valuing the relationship as unique belonging, SX Four understanding broader existential context, meeting in shared emotional depth.",
    watchOut: "SX Four demanding complete focus SO Four can't give, SO Four's social preoccupation threatening SX Four, competing needs for connection."
  },
  {
    type1: 4, subtype1: 'sx', type2: 4, subtype2: 'sx',
    title: "The Passionate Flames",
    subtitle: "Two romantics in consuming intensity",
    narrative: `The first months were ecstatic. Finally—someone who understood that love should break you open, remake you, leave you transformed. They matched each other wave for wave, depth for depth.

"I've never felt so seen," she whispered at 3am, tears streaming.

"I've never felt so alive," he replied, holding her through another emotional storm.

But storms need rest between them. And neither knew how to rest.

"I need you," she said when he retreated to recover.

"I need you too," he said when she went silent to process.

Two people demanding total presence. Two people sometimes empty at the same time. When she descended, he descended with her. When he spiraled, she spiraled alongside. Who would catch whom?

"We're drowning each other," he said one terrible night.

"Or teaching each other to swim," she countered.

The work was learning rhythm. Taking turns. Discovering that love could include Tuesday morning coffee, not just 3am revelations. That ordinary moments were love too.

"I'm here," she learned to say when he was deep. "I'll wait."

"I've got you," he learned to reply. "Even when I'm tired."

Same intensity. New language.`,
    dynamicDescription: "Maximum Four intensity creates transcendent connection but risks emotional exhaustion when both are consuming simultaneously.",
    growthPath: "Taking turns in intensity, grounding the relationship in ordinary moments, finding that love includes lightness too.",
    watchOut: "Emotional exhaustion from mutual intensity, competing for who feels more deeply, drama becoming the relationship, burning out."
  },

  // === TYPE 5 SAME-TYPE SUBTYPE PAIRINGS ===
  {
    type1: 5, subtype1: 'sp', type2: 5, subtype2: 'sp',
    title: "The Fortified Observers",
    subtitle: "Two minimalists in their castle",
    narrative: `They lived in the same house like two monasteries sharing a courtyard. Separate studies. Separate projects. Meals together in comfortable silence. Neither demanded what the other couldn't give.

"This works," he said one evening, satisfied with their arrangement.

"It does," she agreed, returning to her book.

Years passed. Efficient. Peaceful. Utterly lonely.

One night, she found herself crying in her study, unsure why. He heard through the wall but didn't knock. That was their agreement—space was sacred.

The next morning, she broke protocol. "I was crying last night."

He looked up, startled. "I know. I heard."

"Why didn't you come?"

"I didn't want to intrude."

The silence stretched. Two fortresses, suddenly seeing the moat between them.

"What if," she said carefully, "we built a door? Just a small one. That we could choose to open."

He considered this like the serious proposal it was. "We'd have to learn to knock. And to answer."

It started small. One shared evening a week. One conversation about feelings instead of ideas. One moment of choosing connection over protection.

"This is harder," he admitted.

"But less lonely," she replied.

The fortresses remained. But now there was a bridge.`,
    dynamicDescription: "Mutual respect for boundaries creates low-demand partnership but risks isolation even within the relationship.",
    growthPath: "Choosing to engage despite the option not to, finding that intimacy doesn't deplete, building bridges between fortresses.",
    watchOut: "Parallel lives without real connection, using boundaries to avoid intimacy, never truly being known."
  },
  {
    type1: 5, subtype1: 'sp', type2: 5, subtype2: 'so',
    title: "The Hermit and The Expert",
    subtitle: "Private withdrawal meets intellectual contribution",
    narrative: `He came home drained from the conference. "They needed my expertise on three different panels. Everyone wanted my analysis."

She looked at him, baffled. "Why do you give it away? All that knowledge, all that energy—scattered to people who don't deserve it."

"Because being valued feels good," he admitted. "Being the expert in the room."

"And being depleted afterward?"

"That's what you're for. Recovery."

She didn't like being a recovery station. But she understood the appeal of being needed—she just preferred to be needed by no one.

"You hide behind these walls," he said another day. "No one even knows what you know."

"Exactly. That's the point."

"But don't you want to matter?"

"I matter to myself. Isn't that enough?"

They were mirrors of different strategies. He spent energy for recognition; she hoarded it for survival. Neither was wrong.

"Maybe," she offered one evening, "you could come to one less panel. And I could share one idea with one person."

"Meet in the middle?"

"Meet in the middle."`,
    dynamicDescription: "Different withdrawal strategies create potential for balance between isolation and intellectual engagement.",
    growthPath: "SP Five finding value in contribution, SO Five finding peace in withdrawal, respecting different ways of managing Five energy.",
    watchOut: "SP Five pulling SO Five away from meaningful contribution, SO Five exhausting SP Five with external engagements, competing over correct distance."
  },
  {
    type1: 5, subtype1: 'sp', type2: 5, subtype2: 'sx',
    title: "The Fortress and The Connection",
    subtitle: "Total withdrawal meets intense bond",
    narrative: `She knocked on his study door. Again. "Can I come in?"

"I'm working."

"You're always working. I just want to sit with you."

He opened the door reluctantly. "Why? We can sit in our own rooms."

"Because I want to be with you. Near you. Is that so strange?"

For him, yes. Connection felt like invasion. Intimacy like depletion. He had chosen her precisely because she was also a Five—he thought she would understand.

"I do understand," she said, reading his face. "I just need something different. One person. You. Deeply."

"But I need—"

"Space. I know. I'm not asking for your space. I'm asking for an hour."

He tried. One hour, together, present. It was harder than any intellectual work he'd done. But also... different. Warm. Unexpectedly filling rather than draining.

"I can do an hour," he said the next day, before she asked.

"That's all I need," she smiled. "One hour of you, really here."

The walls remained. But she had found the gate. And he was learning to unlock it.`,
    dynamicDescription: "Maximum contrast in Five connection styles creates tension between isolation and intimacy.",
    growthPath: "SP Five allowing the connection the SX Five offers, SX Five respecting SP Five's need for space, building intimacy within boundaries.",
    watchOut: "SX Five feeling rejected by SP Five's withdrawal, SP Five feeling invaded by SX Five's needs, neither finding comfortable distance."
  },
  {
    type1: 5, subtype1: 'so', type2: 5, subtype2: 'so',
    title: "The Expert Partnership",
    subtitle: "Two knowledge-sources building intellectual alliance",
    narrative: `They were the power couple of the department—her expertise in theory, his mastery of method. They co-authored papers, co-presented at conferences, co-inhabited a life built entirely on intellect.

"Excellent analysis," he said after reading her latest chapter.

"Solid methodology," she replied after reviewing his data.

They communicated like colleagues. Loved like collaborators. Years of minds meeting, never quite touching hearts.

One night, she broke. "Do you love me?"

He looked up from his reading, puzzled. "Of course. We're extremely compatible. Our work complements—"

"Not my work. Me."

The question hung in the air like a foreign language.

"I don't know how to answer that without reference to what we do," he admitted.

"That's the problem."

They sat with the silence. Two experts suddenly faced with something they couldn't analyze their way through.

"I feel... warmth when you enter a room," he said carefully. "Not because of what you know. Just because you're there."

"That's a start," she smiled. "Tell me more things like that."

The papers continued. But now there were words between them that weren't for publication. Private words. Feelings without footnotes.`,
    dynamicDescription: "Shared intellectual orientation creates productive partnership but may keep emotion safely at bay.",
    growthPath: "Moving from intellectual respect to emotional intimacy, sharing not just knowledge but vulnerability, letting hearts engage too.",
    watchOut: "Relationship staying at intellectual level, competing for expertise, never moving beyond mind-to-mind contact."
  },
  {
    type1: 5, subtype1: 'so', type2: 5, subtype2: 'sx',
    title: "The Expert and The Intense",
    subtitle: "Intellectual contribution meets private depth",
    narrative: `"You gave them three hours," she said when he came home from the symposium. "Three hours of your best thinking."

"That's my role. Contributing to the field."

"And what do I get? The leftovers? The depleted version?"

He didn't understand. He thought she, as a Five, would appreciate his intellectual contribution to the world. But she wasn't that kind of Five.

"I want what you give them," she said. "That focus. That intensity. Turned on me."

"But you have all of me at home—"

"I have your tired body. They get your brilliant mind."

He sat with this. It was true. He saved his best analysis for public consumption, came home running on empty.

"What would it look like," he asked carefully, "to give you my best thinking?"

"Talk to me like you talk to them. Engaged. Present. Like what I think matters as much as what some conference attendee thinks."

He tried it. One evening, fully present, intellectually engaged with her—not recovering from the world, but bringing the world's energy home.

"This," she said, eyes bright. "This is what I needed."

He learned to ration his external expertise. Some brilliance had to stay home.`,
    dynamicDescription: "Public intellectual focus versus private emotional intensity creates different expectations for connection.",
    growthPath: "SO Five bringing intellectual presence to the relationship, SX Five appreciating partner's broader contribution, finding depth together.",
    watchOut: "SX Five feeling less important than SO Five's external engagement, SO Five feeling pressured by SX Five's intensity, mismatched connection needs."
  },
  {
    type1: 5, subtype1: 'sx', type2: 5, subtype2: 'sx',
    title: "The Intense Thinkers",
    subtitle: "Two Fives who actually want connection",
    narrative: `They surprised everyone who knew them—two Fives, but with heat. Their conversations went until 3am. Their silences were comfortable, not cold. They sought each other out instead of retreating.

"I didn't know I could want someone this much," she said one night.

"I didn't know I could let someone this close," he replied.

For two people trained in self-protection, the intimacy was almost frightening. They kept waiting for the other to withdraw. Both ready to retreat at the first sign of rejection.

Then the inevitable happened. Work stress hit. His defenses rose. He retreated to his study, door closed, energy protected.

"Are you leaving?" she asked through the door. Not physically—emotionally.

"I need time."

"I need you."

Both true. Both terrifying.

"I'll come back," he said. "I always come back. But I need to go sometimes."

"And I'll be here. But I need to know you're coming back."

They built a language for it. "Going in" meant withdrawal was coming. "Still here" meant connection remained beneath the distance. Two Fives who wanted each other, learning to trust that wanting could survive retreating.

"I'm going in," he said.

"Still here," she replied.

And he always came back.`,
    dynamicDescription: "Maximum Five intimacy creates deep intellectual and emotional connection while still navigating Five withdrawal needs.",
    growthPath: "Building stable intimacy while respecting need for space, trusting the connection survives temporary withdrawal.",
    watchOut: "Both withdrawing simultaneously, creating distance through mutual Five tendencies, intensity becoming unsustainable."
  },

  // === TYPE 6 SAME-TYPE SUBTYPE PAIRINGS ===
  {
    type1: 6, subtype1: 'sp', type2: 6, subtype2: 'sp',
    title: "The Security Partnership",
    subtitle: "Two worriers building safety together",
    narrative: `Their garage held six months of emergency supplies. Their savings account could survive two years of unemployment. Their home security system had three backups.

"Did you check the smoke detectors?" she asked.

"Twice. Did you verify the insurance renewal?"

"Already done. And I increased the coverage."

They understood each other's vigilance in a way no one else did. While other couples fought about spending, they fought about not preparing enough.

But one night, their daughter said something that stopped them cold: "Why are we always getting ready for disasters that never come?"

They looked at each other. The emergency supplies. The backup plans for the backup plans. The constant scanning for what could go wrong.

"When do we get to enjoy what we've built?" she asked him that night.

"When it's safe."

"What if it's never safe? What if we just prepared our way through our whole lives?"

He had no answer. Neither did she.

They started small. One dinner out without checking the reviews for food safety. One vacation booked without researching every possible crisis. One evening where they talked about dreams instead of risks.

"This is terrifying," he admitted.

"But also... free?" she offered.

The supplies stayed. The plans remained. But now there was room for living too.`,
    dynamicDescription: "Shared survival anxiety creates thorough preparation but risks amplifying worry and never feeling safe enough.",
    growthPath: "Finding rest within safety measures, not just endless preparation, trusting that enough preparation is enough.",
    watchOut: "Amplifying each other's anxiety, never feeling secure enough, home becoming anxious rather than safe."
  },
  {
    type1: 6, subtype1: 'sp', type2: 6, subtype2: 'so',
    title: "The Prepared and The Loyal",
    subtitle: "Personal security meets group allegiance",
    narrative: `"We don't need the neighborhood association," he said, reviewing their budget. "We have savings, insurance, a generator. We're self-sufficient."

"But what if something happens that money can't fix?" she countered. "What if we need people?"

"People let you down."

"So does being alone."

They were both right, and they both knew it. She saw safety in belonging—the neighbor who would notice if they didn't answer the door, the community that would rally in crisis. He saw safety in self-reliance—resources controlled, needs minimized, no dependence on unreliable others.

"Your people could abandon us," he said.

"Your fortress could fail," she replied.

The breakthrough came during the actual crisis—a fire on their street. His preparations helped evacuate efficiently. Her community connections provided shelter, meals, support.

"I couldn't have done it alone," he admitted, watching neighbors they barely knew open their homes.

"And we would have been helpless without your planning," she acknowledged.

"Maybe," he said slowly, "safety isn't either/or."

"Maybe it's both."

They started attending neighborhood meetings. And keeping the emergency supplies stocked. Belt and suspenders. Community and self-reliance. Both fears addressed.`,
    dynamicDescription: "Different security strategies—personal preparation versus group belonging—create different but complementary approaches to safety.",
    growthPath: "SP Six finding security in community, SO Six finding security in practical preparation, combining strategies for comprehensive safety.",
    watchOut: "SP Six undermining SO Six's group involvement, SO Six dismissing SP Six's practical concerns, competing security strategies."
  },
  {
    type1: 6, subtype1: 'sp', type2: 6, subtype2: 'sx',
    title: "The Careful and The Bold",
    subtitle: "Cautious preparation meets counterphobic action",
    narrative: `She triple-checked the smoke detectors. He signed up for skydiving.

"You're going to get yourself killed," she said, watching him pack the gear.

"You're going to worry yourself to death," he countered.

Both carried the same fear. She built walls against it; he ran straight at it. Her caution felt like cowardice to him. His boldness felt like recklessness to her.

Then the power went out during a storm. She had flashlights in every drawer, candles ready, a battery radio. He'd never thought about it.

"See?" she said. "Preparation matters."

The next week, their landlord tried to bully them out of their lease. She froze. He stepped forward, voice steady, eyes unflinching.

"See?" he said afterward. "Sometimes you have to face it."

They learned: her caution wasn't weakness—it was wisdom. His boldness wasn't recklessness—it was courage. Two strategies for the same war against fear.`,
    dynamicDescription: "Opposite fear management strategies create tension between caution and confrontation.",
    growthPath: "SP Six learning courage, SX Six learning prudence, finding that both strategies have their place.",
    watchOut: "SX Six's risks triggering SP Six's anxiety, SP Six's caution frustrating SX Six's need for action, judging each other's approach."
  },
  {
    type1: 6, subtype1: 'so', type2: 6, subtype2: 'so',
    title: "The Loyal Alliance",
    subtitle: "Two people finding safety in belonging",
    narrative: `They met at the neighborhood watch meeting—both arriving early, both taking notes, both already knowing everyone's name.

"I've seen you at the community board meetings too," she said.

"And the school PTA. And the block party committee." He smiled. "You check people out before trusting them, don't you?"

"Don't you?"

Their first year was a joint vetting project. Every new friend examined from both angles. Is this person reliable? Does this organization have integrity?

"The Hendersons seem solid," she reported after the dinner party.

"Agreed. But I'm not sure about the new couple on the corner."

"We'll watch them."

It worked beautifully—until they turned the lens on each other.

"Did you mean what you said to Sarah?" she asked one night.

"Did you really forget the potluck, or did you not want to go?"

The suspicion that protected them started poisoning them.

"I trust you," she finally said. "I have to. Otherwise what's the point?"

"Maybe," he said slowly, "we could start there. Trust each other first. Then worry about everyone else."

It was the hardest thing they'd ever done—choosing faith over vigilance. But they had each other's backs now, not each other under surveillance.`,
    dynamicDescription: "Shared focus on group belonging and loyalty creates strong community partnership but may amplify suspicion.",
    growthPath: "Finding trust without excessive testing, building community with openness, secure attachment allowing broader belonging.",
    watchOut: "Mutual suspicion amplifying, constantly testing others' loyalty, never quite trusting anyone including each other."
  },
  {
    type1: 6, subtype1: 'so', type2: 6, subtype2: 'sx',
    title: "The Loyal and The Fierce",
    subtitle: "Group allegiance meets personal intensity",
    narrative: `She knew everyone in the neighborhood watch. He knew how to throw a punch.

"We should report this to the committee," she said, noticing a suspicious car circling their block.

"Or I could just go ask them what they want," he replied, already standing.

"That's reckless. We have systems for this."

"Systems are slow. Sometimes you have to act."

She trusted in numbers—the power of a group that looked out for each other. He trusted in himself—the courage to face threats directly. Her community felt like hiding behind others to him. His lone-wolf approach felt dangerously isolated to her.

But when the car returned, she called the neighbors while he walked outside. By the time he reached the curb, six people stood on their porches, watching. The car drove away.

"Your people showed up," he admitted.

"Because you weren't afraid to walk out there first."

They learned: her loyalty wasn't cowardice—it was strategic. His fierceness wasn't isolation—it was the spark that mobilized the group.`,
    dynamicDescription: "Different sources of security—group belonging versus personal strength—create complementary or competing approaches.",
    growthPath: "SO Six developing personal courage, SX Six appreciating community strength, combining loyalty and bravery.",
    watchOut: "SX Six dismissing SO Six's need for group, SO Six threatened by SX Six's independence, competing security sources."
  },
  {
    type1: 6, subtype1: 'sx', type2: 6, subtype2: 'sx',
    title: "The Courageous Pair",
    subtitle: "Two counterphobic warriors",
    narrative: `They met at the rock climbing gym, both free-soloing routes that scared the regulars.

"You're crazy," he said, watching her attempt an overhang without ropes.

"Look who's talking," she shot back.

They started dating like they climbed—full speed, no safety net. Skydiving on the second date. Motorcycle road trip on the third. Their friends called them reckless. They called it living.

"I finally found someone who gets it," she said one night, bruised from a mountain biking crash.

"Someone who won't ask me to slow down," he agreed.

Then came the climb that went wrong. Bad weather. Crumbling rock. For the first time, they looked at each other and saw the same fear reflected back.

"We should turn around," she said.

"Yeah," he admitted. "We should."

Walking down felt like defeat—until she took his hand.

"That was brave," she said. "Knowing when to retreat."

"Turns out," he replied, "courage isn't just about going forward."

They still climb. They still push limits. But now they also know when to say no—together.`,
    dynamicDescription: "Mutual counterphobic energy creates bold partnership but may ignore valid warnings and push too far.",
    growthPath: "Developing discernment about which fears to face, allowing vulnerability with each other, finding courage in admitting fear.",
    watchOut: "Competitive risk-taking, dismissing each other's fears, proving courage rather than being safe together."
  },

  // === TYPE 7 SAME-TYPE SUBTYPE PAIRINGS ===
  {
    type1: 7, subtype1: 'sp', type2: 7, subtype2: 'sp',
    title: "The Comfortable Adventurers",
    subtitle: "Two Sevens making the good life",
    narrative: `Their kitchen was a museum of small pleasures—imported olive oil, artisan cheese, wine from regions they'd visited.

"Try this," she said, holding out a chocolate truffle.

"Perfect." He closed his eyes. "Where did you find it?"

"That little shop in the village."

Their life was curated delight. Soft sheets. The right music. Restaurants booked months ahead.

Then her mother got sick.

"We should visit more," she said, not touching her wine.

"It's hard to see her like that."

"I know. But—"

"Let's plan a trip instead. Somewhere beautiful."

She recognized the deflection—she felt it too. The pull toward pleasure, away from pain.

"What if we just sat with this?" she said. "Without fixing it?"

He looked at her, fear in his eyes. "I don't know how."

"Neither do I."

They held hands in the beautiful kitchen, surrounded by lovely things that couldn't help. For the first time, they let sadness in without reaching for something pleasant.

"This is terrible," he whispered.

"Yes."

"But I'm glad you're here."

They were learning: sometimes the good life includes being present for the bad parts.`,
    dynamicDescription: "Shared pursuit of comfort creates pleasurable partnership but may enable avoidance of difficulty.",
    growthPath: "Finding that comfort includes facing discomfort, staying present for difficult emotions, not needing everything to be pleasant.",
    watchOut: "Enabling mutual avoidance, never facing difficulty together, relationship dependent on pleasure."
  },
  {
    type1: 7, subtype1: 'sp', type2: 7, subtype2: 'so',
    title: "The Homebody and The Networker",
    subtitle: "Private pleasure meets social enthusiasm",
    narrative: `Friday night. She had the couch perfect—blankets arranged, snacks prepared, favorite movie queued.

He walked in already dressed. "The Hendersons are having people over. Let's go!"

She looked at the couch. At him. Back at the couch.

"I was thinking we'd stay in."

"But everyone's there! It'll be fun!"

"This is fun."

He didn't understand. How could she not want to be where the energy was?

She didn't understand. How could he not want this cocoon she'd created?

"You go," she finally said. "I'll be here."

He went. She stayed. Both had fun—separately.

"How was the party?" she asked when he got home.

"Amazing. You should have come." He collapsed beside her. "But this is nice too."

"How was your night?"

"Peaceful. You should have stayed." She snuggled closer. "But I'm glad you're home."

They started negotiating. One social night, one cozy night. Her world of comfort expanding to include his people. His world of parties contracting to include her sanctuary.

"I actually enjoyed that dinner," she admitted after one gathering.

"I actually loved that quiet weekend," he confessed after one hermit session.

Neither converted. But both stretched.`,
    dynamicDescription: "Different pleasure orientations create tension between homebody comfort and social stimulation.",
    growthPath: "SP Seven enjoying social adventures, SO Seven appreciating quiet pleasures, balancing private and public enjoyment.",
    watchOut: "SP Seven feeling dragged out, SO Seven feeling held back, competing definitions of fun."
  },
  {
    type1: 7, subtype1: 'sp', type2: 7, subtype2: 'sx',
    title: "The Comfortable and The Intense",
    subtitle: "Measured pleasure meets consuming experience",
    narrative: `She wanted one glass of excellent wine. He wanted the whole bottle—then another.

"You're not finishing yours?" he asked, pouring his third.

"I'm savoring it."

"That's what I'm doing."

"You're consuming it."

The vacation captured their difference. She wanted the lovely hotel, leisurely breakfast, the perfect sunset. He wanted to stay out until 3am, try every club, exhaust every possibility.

"We're in Barcelona! Live a little!" he urged.

"I am living. I'm just not burning."

He couldn't understand moderation. She couldn't understand excess.

"You know what I love about you?" he said one morning. "You make pleasure last."

"You know what I love about you? You make pleasure explode."

They negotiated intensity. His nights of abandon, her mornings of ritual.

"I'm exhausted," he admitted after one marathon.

"I know." She handed him coffee in their quiet room.

He sipped slowly for once. "Okay. I get it."

"And sometimes," she said, grabbing her jacket, "we stay out until 3am."

Different dosages. Same medicine.`,
    dynamicDescription: "Different intensities of pleasure-seeking create tension between sustainable enjoyment and consuming experience.",
    growthPath: "SP Seven allowing occasional intensity, SX Seven appreciating sustainable pleasure, finding comfortable intensity together.",
    watchOut: "SX Seven finding SP Seven boring, SP Seven finding SX Seven exhausting, incompatible pleasure intensities."
  },
  {
    type1: 7, subtype1: 'so', type2: 7, subtype2: 'so',
    title: "The Party of Two",
    subtitle: "Two social enthusiasts energizing each other",
    narrative: `Everyone knew them. They arrived together, worked separate sides of the room, compared notes afterward.

"Did you meet the Chens? Fascinating—she runs a sustainable fashion startup."

"I got us invited to Marcus's thing next weekend."

Their calendar was a mosaic of gatherings. Dinner parties, gallery openings, weekend festivals.

Then a friend asked: "What do you two do when you're alone?"

They looked at each other, surprised. When were they alone?

That night, after the last guest left, they sat in their quiet apartment. Just them. No audience.

"This is weird," he said.

"Very weird."

Silence stretched. Without people to charm, what were they?

"I don't know what to say to you," she admitted. "We never run out of things to say to everyone else."

"Maybe we should practice this."

They started with one night a week. Just them. No phones, no plans, no people dropping by.

"Tell me something you've never told a dinner party," she said.

He paused. "I'm afraid I'm only interesting in groups."

"Me too."

It was the most intimate thing they'd ever shared. The life of every party, learning to be the life of each other.`,
    dynamicDescription: "Amplified social energy creates vibrant networked life but may lack private intimate core.",
    growthPath: "Building private intimacy beyond social performance, finding each other when alone, creating space for depth.",
    watchOut: "Relationship as social performance, never having quiet together, defining relationship by external stimulation."
  },
  {
    type1: 7, subtype1: 'so', type2: 7, subtype2: 'sx',
    title: "The Networker and The Consumed",
    subtitle: "Broad connection meets focused intensity",
    narrative: `Her phone buzzed constantly. Group chats, event invites, old friends checking in. His phone had one conversation that mattered: hers.

"We should have them over," she said, scrolling through messages.

"Or we could just stay in. Just us."

"We did that last night."

"And it was perfect."

She didn't understand his tunnel vision. He didn't understand her scattered light.

"Why do you need so many people?" he asked one night, watching her respond to five conversations at once.

"Why do you only need one?" she countered.

They weren't wrong about each other—just different. She found energy in breadth. He found it in depth.

"I feel abandoned when you're texting everyone else," he admitted.

"I feel trapped when you want only me."

The words hurt. But they were finally honest.

"What if you come first?" she offered. "Not only. But first."

"What if I come out sometimes? Not often. But sometimes."

She put down her phone when they were together. He joined her friends occasionally.

"You were amazing tonight," she said after a party.

"I was faking half of it."

"I know. Thank you."

He smiled. "You're welcome. Now take me home."`,
    dynamicDescription: "Different scope of seeking—broad social versus focused intense—creates tension around attention and freedom.",
    growthPath: "SO Seven making relationship genuinely primary, SX Seven tolerating partner's social needs, finding exclusive intensity within broader life.",
    watchOut: "SX Seven's jealousy of SO Seven's social life, SO Seven feeling controlled, competing for each other's energy."
  },
  {
    type1: 7, subtype1: 'sx', type2: 7, subtype2: 'sx',
    title: "The Consuming Fire",
    subtitle: "Two Sevens in overwhelming intensity",
    narrative: `Their first date lasted three days. They forgot to eat. Forgot to sleep. Talked until sunrise, kissed until noon, talked again until the next sunrise.

"I've never felt this before," she said.

"Neither have I."

They dove deep, fast, consuming. Weekend trips that turned into adventures. Conversations that became confessions.

But three months in, lying on the couch on a Tuesday night, he reached for the remote.

"Want to watch something?"

"Sure."

They stared at the screen. The silence felt wrong. Where was the intensity?

"Is this boring?" she asked. "Am I boring you?"

"I was about to ask you the same thing."

They looked at each other—two people who only knew how to burn, facing a quiet evening.

"I don't know how to do this," she admitted.

"The ordinary stuff?"

"Yeah."

He took her hand. Not passionately. Just held it.

"We could learn," he said. "Peaks are amazing. But maybe valleys can be okay too."

"Can we handle okay?"

"I don't know. But I'd rather find out with you than find another peak with someone else."

She squeezed his hand. "That's the most ordinary romantic thing you've ever said."

They watched the movie. Just together. No fireworks—but still warm.`,
    dynamicDescription: "Maximum intensity seeking creates extraordinary experiences but may make ordinary presence difficult.",
    growthPath: "Finding value in ordinary moments, sustaining connection beyond peak experiences, learning that presence doesn't require intensity.",
    watchOut: "Relationship only working at peaks, ordinary life feeling insufficient, always needing more stimulation."
  },

  // === TYPE 8 SAME-TYPE SUBTYPE PAIRINGS ===
  {
    type1: 8, subtype1: 'sp', type2: 8, subtype2: 'sp',
    title: "The Survival Alliance",
    subtitle: "Two Eights protecting the territory",
    narrative: `They both reached for the thermostat at the same time.

"It's too cold," she said.

"It's fine." He didn't move his hand.

"I'm turning it up."

"I'm leaving it."

They stood there, neither yielding, over a temperature setting.

"This is ridiculous," she laughed despite herself.

"We're fighting over control."

They'd built something formidable—business, home, savings that could survive any storm. Two survivors. But whose territory was it?

"I need to be in charge of some things," she said.

"So do I."

"Then we divide it. Your domains. My domains."

"Kitchen and finances are mine."

"Bedroom and calendar are mine."

"What about the thermostat?"

"We alternate."

It wasn't perfect. Two territorial people sharing one territory. But they discovered something: sharing power didn't make them weaker.

"Your turn to set the temperature," she said one evening.

"I was going to set it where you like it anyway."

That was the real victory—not who controlled what, but choosing to give.`,
    dynamicDescription: "Shared territorial focus creates powerful material partnership but risks power struggles over control.",
    growthPath: "Sharing control rather than competing, building abundance together, finding that vulnerability creates rather than threatens security.",
    watchOut: "Power struggles over territory, competing for control, relationship as negotiated alliance rather than intimate partnership."
  },
  {
    type1: 8, subtype1: 'sp', type2: 8, subtype2: 'so',
    title: "The Protector and The Leader",
    subtitle: "Personal power meets group dominance",
    narrative: `She was reviewing their investment portfolio when he walked in from a neighborhood association meeting.

"They voted me president," he announced.

"Why?" She didn't look up. "That's a lot of time for no money."

"Because someone needs to protect this community."

"Someone needs to protect this household."

He sat down across from her. "You think I'm wasting my energy."

"I think you're spending capital we could keep."

"And I think you're hoarding power that could help people."

The standoff lasted days. She focused on their fortress. He focused on his kingdom. Both convinced the other had it wrong.

Then the hurricane came.

Her preparations kept them safe—generator, supplies, backup plan. His leadership organized the neighborhood response—shared resources, welfare checks, coordinated cleanup.

"We couldn't have done this alone," a neighbor told them afterward.

He looked at her. "Your supplies saved us."

She looked at him. "Your leadership saved them."

Neither was wrong. Personal power and social power, fortress and kingdom. Together they protected everything worth protecting.

"I'll keep building the base," she said.

"I'll keep leading the charge."

"Deal."`,
    dynamicDescription: "Different power scopes—personal versus social—create potential for complementary coverage or scope competition.",
    growthPath: "SP Eight appreciating group leadership, SO Eight appreciating personal foundation, building power together at both scales.",
    watchOut: "SP Eight pulling SO Eight away from leadership, SO Eight dismissing SP Eight's concerns, competing power orientations."
  },
  {
    type1: 8, subtype1: 'sp', type2: 8, subtype2: 'sx',
    title: "The Fortress and The Flame",
    subtitle: "Material power meets passionate intensity",
    narrative: `He was balancing the books when she stormed in, eyes blazing.

"They said no. Can you believe it? After everything we offered?"

"We'll find another supplier," he said calmly.

"That's it? That's your response?"

"What do you want me to do? Burn the place down?"

"I want you to feel something!"

He looked up from his spreadsheet. "I feel plenty. I just don't let it run the show."

She wanted to explode at him—his measured calm against her consuming fire. But she saw his jaw clench, his knuckles white on the pen. He felt it. He just held it differently.

"You think I'm too much," she said.

"You think I'm too little."

They were both Eights—power running through their veins. But hers burned hot and visible. His banked slow and steady.

"Your fire keeps us moving forward," he admitted.

"Your foundation keeps us from burning down."

She sat beside him. "I don't want to overwhelm you."

"I don't want to bore you."

He reached for her hand—solid and steady. She took it—passionate and present.

"We're both powerful," she said.

"Just differently." He smiled. "The fortress needs flame. The flame needs a fortress."`,
    dynamicDescription: "Practical power meets passionate intensity, creating potential for grounded but powerful partnership.",
    growthPath: "SP Eight allowing passion, SX Eight appreciating material foundation, finding that power includes both base and fire.",
    watchOut: "SP Eight dampening SX Eight's passion, SX Eight overwhelming SP Eight's stability, different expressions feeling like different values."
  },
  {
    type1: 8, subtype1: 'so', type2: 8, subtype2: 'so',
    title: "The Power Couple",
    subtitle: "Two leaders building influence",
    narrative: `They met at a conference—both keynote speakers, both commanding attention, both used to being the most powerful person in the room.

"Interesting talk," she said afterward. Not a compliment. A challenge.

"Yours too." Same energy. "You were wrong about the market projections."

"I was right. You were conservative."

They argued for three hours. Then they started dating.

"Who's driving?" he asked on their first outing.

"I am."

"No, I am."

It became a pattern. Every decision a negotiation. Every plan a power play. Two alphas, neither backing down.

"This is exhausting," she said one night after another standoff.

"It is."

"We can't both lead everything."

He was silent. Then: "What if we lead different things?"

They carved territories. Her domain: finances, travel, family events. His domain: home decisions, social calendar, investments.

"What happens when our domains overlap?" she asked.

"We fight it out. Like always."

She laughed. "At least we're honest."

Two leaders building an empire together—not by one dominating, but by both yielding in turns. The real power wasn't control. It was choosing when to follow.`,
    dynamicDescription: "Amplified leadership capacity creates powerful social impact but requires navigating shared authority.",
    growthPath: "Finding partnership in leadership, respecting each other's domains, discovering that real power includes yielding.",
    watchOut: "Competing for dominance, relationship becoming power struggle, never truly partnering as equals."
  },
  {
    type1: 8, subtype1: 'so', type2: 8, subtype2: 'sx',
    title: "The Leader and The Lover",
    subtitle: "Social power meets private passion",
    narrative: `He was always late coming home from his volunteer leadership meetings. She was always waiting, energy coiled.

"They needed me to stay," he said, hanging up his coat.

"I need you too."

"It's different."

"Is it? Or do they just matter more?"

He stopped. She stood there—all that Eight intensity focused like a laser beam, demanding his presence the way his community demanded his leadership.

"I can't give you everything," he said. "I have responsibilities."

"I don't want everything. I want something. Real presence, not the leftovers after you've given everyone else the best of you."

That landed. He saw her—not angry, but starving. Powerful in her own right, wanting all that power focused on her sometimes.

"Wednesday nights," he offered. "No meetings. No calls. Just us."

"And when you're home, be home. Not half-thinking about the next crisis to solve."

He pulled her close—the same force he used to command rooms, now focused entirely on one person.

"This is harder," he admitted. "Leading a group is easy. Leading with you is..."

"More real?"

"More vulnerable."

She kissed him. "Welcome to intimacy, Chief."`,
    dynamicDescription: "Social leadership meets private intensity, requiring balance between public role and intimate presence.",
    growthPath: "SO Eight bringing presence home, SX Eight appreciating partner's broader impact, finding powerful intimacy within public life.",
    watchOut: "SX Eight feeling second to SO Eight's public role, SO Eight feeling trapped by SX Eight's demands, power expressions feeling incompatible."
  },
  {
    type1: 8, subtype1: 'sx', type2: 8, subtype2: 'sx',
    title: "The Overwhelming Bond",
    subtitle: "Two Eights in consuming intensity",
    narrative: `Their fights were legendary. Neighbors could hear them through walls—two voices at full volume, neither backing down, passion like a hurricane.

"You don't get to control this!" she shouted.

"Neither do you!" he roared back.

The making up was equally legendary. Intensity that left them breathless, connection that felt like the only real thing in the world.

"No one else can handle me," she said one night, tangled together afterward.

"No one else would dare try."

They pushed and pulled, possessed and claimed. Two overwhelming forces trying to overwhelm each other. It was magnificent. It was also exhausting.

"I'm so tired," she admitted during a rare quiet moment.

"Of me?"

"Of fighting to possess you. Of being fought for possession."

He was quiet. "I don't know another way."

"What if we tried... being together instead of conquering each other?"

It felt impossible. Two Eights, learning that love isn't domination.

"I surrender," she said, testing the word.

"I surrender too."

The strangest thing: surrendering to each other made them both stronger. Not domination—partnership. Not possession—presence. Two forces, finally flowing together instead of against.`,
    dynamicDescription: "Maximum Eight intimacy creates overwhelming passion but risks competitive domination.",
    growthPath: "Finding that love includes surrender, that possession can be mutual, that vulnerability is strength with each other.",
    watchOut: "Competing to possess, passion becoming control, overwhelming each other rather than being together."
  },

  // === TYPE 9 SAME-TYPE SUBTYPE PAIRINGS ===
  {
    type1: 9, subtype1: 'sp', type2: 9, subtype2: 'sp',
    title: "The Comfortable Cocoon",
    subtitle: "Two Nines in sustainable peace",
    narrative: `Their apartment was a temple to tranquility—soft blankets folded just so, tea always ready, the same shows queued every evening.

She sighed contentedly from her corner of the couch. He did the same from his.

Hours passed. Neither moved.

"This is nice," she finally said.

"Mm," he agreed.

More silence. More peace. The perfect Sunday stretching into the perfect week into the perfect year.

One night, a friend asked them: "What do you two actually do together?"

They looked at each other, startled. They existed together. They were peaceful together. Was that not enough?

"I don't know what you want," she admitted that night, voice small.

"I don't know either," he said. "I never wanted to disturb you by asking."

The realization hung there—two people so committed to not rocking the boat that they'd never actually gotten in it together. The comfort was real. But so was the distance hiding inside it.`,
    dynamicDescription: "Maximum comfort-seeking creates peaceful coexistence but risks comfortable disconnection.",
    growthPath: "Engaging actively with each other, bringing desires into the relationship, finding that intimacy doesn't require disturbance.",
    watchOut: "Parallel lives without connection, comfort enabling mutual withdrawal, peace as avoidance of engagement."
  },
  {
    type1: 9, subtype1: 'sp', type2: 9, subtype2: 'so',
    title: "The Homebody and The Mediator",
    subtitle: "Private peace meets social harmony",
    narrative: `She watched him get ready for another community potluck and felt the familiar weight settle in her chest.

"You could come," he offered gently. "Everyone asks about you."

"I know." She pulled the blanket tighter. "Next time."

He didn't push. He never did. That was their way.

But coming home, he found her already asleep, the TV murmuring softly. Another evening missed. Another connection unmade.

"Why do you need all those people?" she finally asked one morning, genuinely curious.

"Why do you need all this quiet?" he asked back, not accusing—just wondering.

They sat with it. Both seeking peace. Both finding it in such different places.

"What if," she said slowly, "I came to one thing a month? And we had one weekend with no plans?"

He smiled—the first real smile in weeks. "We could try that."

Two Nines, building a bridge between their different sanctuaries. Neither demanding. Both finally asking.`,
    dynamicDescription: "Different peace-seeking strategies—private comfort versus social harmony—create tension but share Nine foundation.",
    growthPath: "SP Nine engaging in community, SO Nine appreciating private peace, finding harmony at both scales.",
    watchOut: "SP Nine pulling SO Nine away from community, SO Nine exhausting SP Nine socially, competing peace strategies."
  },
  {
    type1: 9, subtype1: 'sp', type2: 9, subtype2: 'sx',
    title: "The Comfort and The Connection",
    subtitle: "Routine peace meets intimate merger",
    narrative: `He loved her like breathing—steady, constant, undemanding. She loved him like drowning—total, consuming, desperate to merge completely.

"Come closer," she whispered, reaching for him on the couch.

He was already close. But for her, it was never close enough.

"I just want to be with you," she said, hurt creeping into her voice. "Really with you."

"I am with you," he said, confused. They were sitting together. What more was there?

She wanted to climb inside his skin. He wanted to sit beside her in comfortable silence. Both called it love. Both meant it entirely.

"It's like you're behind glass," she said one night, crying softly.

"It's like you want to swallow me whole," he admitted, finally honest.

The words hung between them—two Nines, same peaceful core, such different expressions.

"Maybe," she said slowly, "I can learn to be near you without consuming you."

"Maybe," he said, "I can learn to let you in without disappearing."

The distance began to close—carefully, tenderly, in a language neither had spoken before.`,
    dynamicDescription: "Different Nine expressions—comfortable routine versus intimate merger—create surprising contrast within same type.",
    growthPath: "SP Nine allowing deeper connection, SX Nine appreciating peaceful space, finding that merger can be comfortable.",
    watchOut: "SX Nine overwhelming SP Nine, SP Nine feeling too distant for SX Nine, different Nine expressions feeling incompatible."
  },
  {
    type1: 9, subtype1: 'so', type2: 9, subtype2: 'so',
    title: "The Harmonizers",
    subtitle: "Two peacemakers creating smooth community",
    narrative: `They met at a neighborhood association meeting—both volunteering, both smoothing over the tension between the old guard and the newcomers.

"You handled that beautifully," she said afterward.

"So did you," he smiled.

They became the couple everyone called when conflict arose. The mediators. The bridge-builders. The ones who made community work.

But one evening, alone together for once, silence fell.

"What do you want for dinner?" she asked.

"Whatever you want."

"But what do you want?"

The question echoed strangely. Neither could remember the last time they'd asked themselves that.

"I don't know," he admitted. "I've been so focused on what everyone else needs..."

"Me too," she whispered.

They sat there, two peacemakers who'd made harmony for everyone except themselves. Two people who'd merged with every group but forgotten to find each other.

"I think," she said carefully, "I might want Thai food."

He laughed—surprised, delighted. "I think I might want that too."

A small want. But theirs. A beginning.`,
    dynamicDescription: "Shared social harmony focus creates powerful peacemaking partnership but may neglect personal desires.",
    growthPath: "Expressing personal preferences, having private desires beyond group harmony, finding each other in the midst of social focus.",
    watchOut: "No private relationship beneath social role, suppressing desires for harmony, never having conflict or passion."
  },
  {
    type1: 9, subtype1: 'so', type2: 9, subtype2: 'sx',
    title: "The Mediator and The Merged",
    subtitle: "Social harmony meets intimate fusion",
    narrative: `She belonged to everyone—the community garden, the book club, the neighbors who needed her. He wanted to belong only to her.

"Stay home tonight," he said, not demanding, just longing. "Just us."

"I promised I'd help set up for the fundraiser," she said, already reaching for her keys. "You could come?"

But he didn't want the group. He wanted her. All of her. The way she seemed to give pieces of herself to everyone but him.

"Why do you need so many people?" The question came out more wounded than he intended.

She paused. "Why do you need only me?"

They stared at each other—same type, such different hungers.

"When you're with them, I feel like I disappear," he admitted.

"When you focus only on me, I feel like I'm suffocating," she confessed.

The truth sat between them, painful and necessary.

"What if I come to the fundraiser," he offered slowly, "and you come home early? Just for tonight?"

She took his hand. "What if we try?"

Two Nines, learning that love might mean holding both the village and the beloved—and that neither had to be abandoned for the other.`,
    dynamicDescription: "Different merger orientations—broad social versus focused intimate—create tension around connection scope.",
    growthPath: "SO Nine making relationship primary, SX Nine accepting partner's broader connections, finding deep union within wider belonging.",
    watchOut: "SX Nine jealous of SO Nine's community, SO Nine feeling trapped by SX Nine's focus, competing merger needs."
  },
  {
    type1: 9, subtype1: 'sx', type2: 9, subtype2: 'sx',
    title: "The Complete Merge",
    subtitle: "Two Nines becoming one",
    narrative: `They finished each other's sentences. They felt each other's feelings. They'd merged so completely that friends joked they shared one brain.

"What do you want to do tonight?" she asked.

"Whatever you want," he said.

"I want what you want."

They smiled at each other—but somewhere beneath the smile, something flickered. Unease. Uncertainty.

"I had a thought today," she said slowly. "But I'm not sure if it was mine or if I absorbed it from you."

He nodded. "I don't remember what I liked before us."

The admission hung in the air like a question neither had thought to ask.

"Who are we?" she whispered. "Separately, I mean."

"I don't know anymore."

They sat in the quiet—not the peaceful quiet of harmony, but the hollow quiet of two people who'd dissolved so completely into each other that neither remained.

"Maybe," he said finally, "we need to spend a day apart. Just to remember."

"That sounds terrifying," she admitted.

"I know," he said. "That's how I know we need to."

Two Nines, learning that true union requires two people present to unite.`,
    dynamicDescription: "Maximum Nine merger creates profound union but risks losing both individuals in the fusion.",
    growthPath: "Maintaining individual identity, having personal desires, finding that real union includes two distinct people.",
    watchOut: "Complete loss of self in relationship, decisions never made, no individual identity, peaceful emptiness."
  },

  // ============================================
  // CROSS-TYPE SUBTYPE PAIRINGS
  // ============================================

  // === TYPE 1 WITH TYPE 2 SUBTYPES (9 stories) ===
  {
    type1: 1, subtype1: 'sp', type2: 2, subtype2: 'sp',
    title: "The Practical Standards",
    subtitle: "Methodical perfectionism meets boundaried helping",
    narrative: `She reorganized his filing system while he was at work. A gift, she thought.

"You moved the tax documents," he said that evening, voice tight.

"I made it more efficient. You're welcome."

"Efficient isn't the same as correct." He began re-sorting. "The categories were intentional."

She watched him undo her hours of work. "I was trying to help."

"Were you? Or were you trying to prove you're useful?"

The words hung between them—too accurate, too cold.

They lived in parallel perfections: his systems, her strategies. Both practical. Both guarded. Neither quite reaching the other.

"I don't know how to just... be here," she admitted one night. "Without doing something."

He set down his organizing labels. "And I don't know how to receive without inspecting."

"So we're both broken."

"Or both careful." He almost smiled. "Maybe that's a start."

She took his hand—no strategy, no standard. Just presence.`,
    dynamicDescription: "Two practical types creating functional partnership, but may stay at surface-level utility rather than deep intimacy.",
    growthPath: "Moving beyond mutual usefulness to genuine affection, One appreciating help without critiquing, Two giving without calculating.",
    watchOut: "Relationship as practical arrangement, One's criticism hurting Two's giving, Two's strategy feeling manipulative to One."
  },
  {
    type1: 1, subtype1: 'sp', type2: 2, subtype2: 'so',
    title: "The Private Perfectionist and The Public Helper",
    subtitle: "Personal standards meet social generosity",
    narrative: `He meal-prepped on Sundays—precise portions, labeled containers. She coordinated the neighborhood food drive from their kitchen table, phone ringing constantly.

"You're giving away our Tupperware," he noted.

"The Hendersons needed containers. I couldn't say no."

"You could. You just won't."

She covered the phone. "Not everyone has your luxury of saying no."

That stung. He wasn't selfish—he was careful. There's a difference.

But watching her work, he saw something else: the light in her eyes when she connected people, the way she remembered everyone's dietary restrictions.

"You gave Mrs. Chen my good containers," he said later.

"I'll replace them."

"Don't." He paused. "She needed them more than I needed them labeled."

She looked up, surprised. "Who are you and what happened to my husband?"

"Maybe I'm learning," he said slowly, "that perfecting my own corner isn't enough."

"And maybe I'm learning that I can't help everyone from empty."

She put down the phone. He put down the labels. They met somewhere in between.`,
    dynamicDescription: "Inward perfectionism meets outward helping, creating tension between self-focus and others-focus.",
    growthPath: "One learning to give more broadly, Two learning to maintain personal standards, finding balance between self and others.",
    watchOut: "One criticizing Two's generous helping, Two resenting One's self-focus, different orientations feeling like different values."
  },
  {
    type1: 1, subtype1: 'sp', type2: 2, subtype2: 'sx',
    title: "The Careful Reformer and The Devoted Giver",
    subtitle: "Anxious perfectionism meets consuming devotion",
    narrative: `She brought him coffee exactly how he liked it—before he asked. She learned his sleep schedule, his stress signals, his unspoken needs.

"The coffee's slightly too hot," he said one morning.

She adjusted. Tomorrow it would be perfect.

He noticed everything she did wrong. She noticed everything he needed. A strange symbiosis: her devotion, his criticism. Her giving, his taking.

"Why do you stay?" his sister asked her once.

"Because he needs me."

"Does he? Or do you need to be needed?"

She couldn't answer. The question haunted her for weeks.

"I noticed," he said one evening, "that you haven't corrected the coffee temperature in days."

"I've been wondering if I should stop trying."

He looked stricken. "I didn't mean—"

"You did. You always do." She sat down heavily. "And I always adjust. But I'm exhausted."

He was quiet for a long time. "I don't know how to stop seeing flaws."

"And I don't know how to stop fixing them."

"Maybe," he said carefully, "we could learn to live with imperfection. Together."

It was the most loving thing he'd ever said.`,
    dynamicDescription: "Careful self-protection meets total devotion, creating potential for caretaking that enables or overwhelms.",
    growthPath: "One receiving without critiquing, Two giving without losing self, finding sustainable care that satisfies both.",
    watchOut: "Two exhausting themselves meeting One's standards, One becoming ungratefully critical, codependency with judgment."
  },
  {
    type1: 1, subtype1: 'so', type2: 2, subtype2: 'sp',
    title: "The Moral Advocate and The Strategic Helper",
    subtitle: "Social principles meet calculated giving",
    narrative: `He stood at the podium, arguing for policy reform. She worked the room beforehand, remembering names, connecting donors.

"You schmoozed Senator Williams," he said after. "She's corrupt."

"She's a vote. Your reform needs votes."

"Not like this. Not by playing their game."

She smiled tightly. "Your principles don't pass legislation. My relationships do."

They'd had this fight before—a hundred versions of the same clash. He saw her tactics as compromise. She saw his rigidity as naive.

But the bill passed. His vision, her mechanics.

"I couldn't have done it your way," he admitted over celebratory drinks.

"And your way gave me something worth fighting for." She studied her glass. "I'm tired of being useful. I want to matter."

"You do matter."

"For what I do. Not who I am."

He set down his drink. "Then teach me to see you. Not just your strategy. You."

She looked up. "Teach me your principles aren't just criticism. Show me they're hope."

They clinked glasses—not as strategist and reformer, but as partners.`,
    dynamicDescription: "Social idealism meets strategic relationship building, sharing social awareness but different approaches.",
    growthPath: "One appreciating Two's relational wisdom, Two appreciating One's principled stance, combining moral clarity with practical helpfulness.",
    watchOut: "One judging Two's strategic giving as manipulative, Two finding One's principles rigid and impractical."
  },
  {
    type1: 1, subtype1: 'so', type2: 2, subtype2: 'so',
    title: "The Reformer and The Networker",
    subtitle: "Social principles meet social giving",
    narrative: `They both wanted to lead the neighborhood association. He had the vision—ethical guidelines, fair processes, transparent governance. She had the people—every family owed her a favor, remembered her casseroles.

"You can't just buy loyalty," he said at the candidates' forum.

"And you can't just demand respect," she replied sweetly.

The room held its breath. Two forces of nature, colliding.

They tied the election. Forced to co-lead.

"This is impossible," he muttered after their first joint meeting.

"You alienated the Garcias with your rules talk."

"You promised the Chens things we can't deliver."

"Watch me deliver them."

She did. And slowly, he began to see it: warmth wasn't weakness. Connection wasn't corruption.

"I envy you," he admitted one evening. "People actually like you."

"I envy you," she said. "People actually trust you."

"What if we stopped competing?"

She considered. "What if we built something together?"

He brought the principles. She brought the people. The neighborhood had never been better governed—or more connected.`,
    dynamicDescription: "Shared social focus but different approaches—moral authority versus relational warmth—create complementary or competing styles.",
    growthPath: "One bringing warmth to principles, Two bringing integrity to networking, powerful community partnership.",
    watchOut: "One judging Two's social ambition, Two resenting One's rigidity, competing for social influence."
  },
  {
    type1: 1, subtype1: 'so', type2: 2, subtype2: 'sx',
    title: "The Public Reformer and The Private Devotee",
    subtitle: "Social advocacy meets intimate focus",
    narrative: `He came home late again, fired up from another city council meeting.

"They're trying to cut the homeless shelter funding," he said, pacing. "We have to organize."

She sat on the couch, waiting. Always waiting.

"I made dinner," she said quietly. "Three hours ago."

"This is important."

"And I'm not?"

The question hung between them—the core of everything wrong.

"You have the whole world," she said. "I just want you."

"The world needs changing."

"So do we." Her voice cracked. "I pour myself into you, and you pour yourself into strangers."

He stopped pacing. Saw her, finally—really saw her.

"I don't know how to be smaller," he admitted.

"I don't know how to be bigger." She wiped her eyes. "Maybe that's the problem."

"Or maybe," he sat beside her, "I need to bring my causes home sometimes. And you need to let me take you out into the world."

"I'm afraid I'll lose you out there."

"I'm afraid I'll suffocate in here."

"So we're both afraid."

He took her hand. "Then let's be brave together."`,
    dynamicDescription: "Social advocacy versus intimate devotion creates tension between public mission and private relationship.",
    growthPath: "One making relationship genuinely primary, Two supporting One's broader mission, finding that both matter.",
    watchOut: "Two feeling second to One's causes, One feeling trapped by Two's intensity, incompatible scope of focus."
  },
  {
    type1: 1, subtype1: 'sx', type2: 2, subtype2: 'sp',
    title: "The Passionate Reformer and The Careful Helper",
    subtitle: "Intense transformation meets boundaried giving",
    narrative: `"You could be so much more," he said, eyes blazing. "If you'd just let yourself transform."

She folded laundry, measured movements. "I help you. Isn't that enough?"

"I want all of you. Your depths. Your darkness. Everything."

"I give what I can." She smoothed a shirt. "I protect what I must."

His passion crashed against her walls like waves on stone. She helped him—meals prepared, schedules managed, needs anticipated—but always from behind a careful barrier.

"Why won't you let me in?" he demanded.

"Why must you storm every gate?"

They circled each other: his intensity seeking, her caution preserving.

"I'm not trying to destroy you," he said one night, exhausted. "I'm trying to reach you."

"And I'm not trying to reject you. I'm trying to survive you."

The words landed differently. Not accusation—confession.

"What if I learned to knock," he offered, "instead of breaking down doors?"

"What if I learned to open," she replied, "instead of just handing things through windows?"

He sat beside her. She let him. A small opening. A patient intensity. Enough.`,
    dynamicDescription: "Intimate perfectionism meets boundaried helping, creating tension between transformation demands and self-protection.",
    growthPath: "One respecting Two's boundaries, Two allowing deeper transformation, finding sustainable intimate growth.",
    watchOut: "One's intensity exhausting Two, Two's boundaries frustrating One, push-pull dynamic without resolution."
  },
  {
    type1: 1, subtype1: 'sx', type2: 2, subtype2: 'so',
    title: "The Intimate Reformer and The Social Helper",
    subtitle: "Relationship focus meets community focus",
    narrative: `Her phone buzzed again. Another friend in crisis. Another committee needing her.

"Stay," he said. "Just this once. Stay with me."

"Sarah's husband left her. She needs—"

"I need you." His voice cracked with an intensity that scared them both. "When is it my turn?"

She put down the phone. Looked at him—really looked.

"You want all of me," she said slowly. "But there's so much of me already given away."

"Then take some back."

"I don't know how. Helping is how I exist."

"And perfecting you is how I love." He ran his hands through his hair. "We're both drowning in different oceans."

She sat beside him. "What if I learned that you're not just another person to help? That you're... home?"

"What if I learned that your community isn't competition? That your bigness doesn't diminish us?"

"I'm afraid I'll disappear into you."

"I'm afraid I'll disappear without you."

She took his hand—not to help, just to hold. He held back—not to transform, just to connect.

Somewhere between everywhere and just here, they found each other.`,
    dynamicDescription: "Intimate intensity meets social responsibility, creating tension between focused transformation and broad contribution.",
    growthPath: "One appreciating Two's social gifts, Two prioritizing intimate depth, finding that both private and public relationships matter.",
    watchOut: "One feeling neglected for Two's social life, Two feeling trapped by One's intensity, competing relationship scopes."
  },
  {
    type1: 1, subtype1: 'sx', type2: 2, subtype2: 'sx',
    title: "The Passionate Reformer and The Devoted Lover",
    subtitle: "Intense perfectionism meets consuming devotion",
    narrative: `They burned together—that was the only word for it. She gave everything. He wanted everything perfected.

"You're not listening the right way," he said after she spent hours comforting him.

"I'm giving you all of me," she whispered. "How is it not enough?"

"Because it could be more. We could be more."

She broke that night. Not dramatically—just a quiet collapse. She'd been trying to be his everything, and his everything kept shape-shifting.

He found her crying in the bathroom.

"I can't be perfect," she said. "I've been trying. I can't."

"I don't want you perfect."

"You want me improved. It's the same thing."

The words hit him like cold water. Was it? Was improvement just perfectionism in sheep's clothing?

"I love you," he said slowly, testing the words. "Not the you I'm trying to create. You."

"Do you? Or do you love your vision of me?"

He had no answer. The question itself was the answer.

"What if we stopped," she offered. "Just... stopped. Me trying to be everything. You trying to fix everything."

"What would be left?"

"Us. Just us."

They sat in the bathroom—unglamorous, unimproved, utterly present. It was enough.`,
    dynamicDescription: "Maximum intensity pairing—transformative perfectionism meets consuming devotion—creating passionate but potentially painful dynamic.",
    growthPath: "One accepting Two's imperfect giving, Two maintaining self while devoting, finding love beyond improvement.",
    watchOut: "One's criticism devastating Two, Two's giving never satisfying One, intensity without peace, reform without acceptance."
  },

  // === TYPE 1 WITH TYPE 3 SUBTYPES (9 stories) ===
  {
    type1: 1, subtype1: 'sp', type2: 3, subtype2: 'sp',
    title: "The Meticulous and The Efficient",
    subtitle: "Correct standards meet practical achievement",
    narrative: `The deadline loomed. She typed furiously, shipping code that worked.

"That function needs refactoring," he said, peering over her shoulder.

"It works."

"It's not clean."

"Clean doesn't meet deadlines." She hit send. "Done."

He physically flinched. Watching imperfect work leave her desk felt like watching someone litter.

They built a company together—her speed, his standards. For years it worked: she shipped, he polished. But the tensions accumulated like technical debt.

"You slow everything down," she said during their worst fight.

"You cut every corner," he fired back.

The product launch failed. Not because it shipped fast with bugs. Not because it shipped slow with perfection. Because they'd stopped talking to each other.

In the postmortem, she said, "What if right and done aren't opposites?"

"What if we built together instead of against?"

They started over—not with code, but with each other.`,
    dynamicDescription: "Shared practical focus but different priorities—correctness versus results—create efficient but potentially tense partnership.",
    growthPath: "One appreciating efficiency, Three appreciating quality, finding that right and effective can align.",
    watchOut: "One slowing Three with perfectionism, Three cutting corners that bother One, competing definitions of good work."
  },
  {
    type1: 1, subtype1: 'sp', type2: 3, subtype2: 'so',
    title: "The Private Perfectionist and The Social Achiever",
    subtitle: "Personal standards meet public success",
    narrative: `He polished the kitchen counter for the third time. She was on her phone, scheduling her next speaking engagement.

"You're never here," he said quietly.

"I'm building something. For us."

"Is it for us? Or is it for the applause?"

She put down the phone. He had a point, and she hated that.

"You hide in this house," she countered. "Perfecting things no one will ever see."

"At least what I do is real."

The silence stretched. Two people who'd chosen each other for their differences, now suffocating in them.

She came home early the next day. He looked up, surprised.

"Teach me," she said, "to care about something no one's watching."

He smiled slowly. "If you teach me that being seen isn't the same as being shallow."

She picked up a polishing cloth. He opened his calendar app. They met in the middle—learning that excellence could be both quiet and visible.`,
    dynamicDescription: "Personal perfectionism meets public achievement, creating potential for comprehensive success if they value each other's focus.",
    growthPath: "One appreciating public success, Three appreciating private integrity, building life that's both excellent and recognized.",
    watchOut: "One dismissing Three's image focus, Three dismissing One's attention to detail, competing values around what matters."
  },
  {
    type1: 1, subtype1: 'sp', type2: 3, subtype2: 'sx',
    title: "The Careful Perfectionist and The Magnetic Achiever",
    subtitle: "Anxious standards meet captivating presence",
    narrative: `She walked into rooms and the air changed. People turned. Conversations paused. He stood in the corner, cataloging everything wrong with the catering arrangement.

"Come dance," she said, pulling his arm.

"The ice sculptures are melting unevenly."

She laughed—that magnetic, room-filling laugh. "You're impossible."

"You're superficial."

They shouldn't have worked. The showstopper and the standard-keeper. But late at night, when the charm wore thin and the critiques exhausted themselves, they found something true.

"Everyone sees me," she whispered once. "No one knows me."

"I see every flaw," he admitted. "That's how I know you."

She learned that substance felt like safety. He learned that sparkle could be genuine.

"You make me real," she said.

"You make me brave."

Together they were fire and structure—each making the other possible.`,
    dynamicDescription: "Grounded perfectionism meets magnetic charisma, creating potential for substantial attraction if mutual respect develops.",
    growthPath: "One appreciating Three's magnetism without dismissing it, Three valuing One's substance without finding it boring.",
    watchOut: "One criticizing Three's image focus, Three finding One's perfectionism unattractive, substance versus style divide."
  },
  {
    type1: 1, subtype1: 'so', type2: 3, subtype2: 'sp',
    title: "The Social Reformer and The Practical Achiever",
    subtitle: "Principled advocacy meets efficient success",
    narrative: `He marched for causes. She negotiated deals. He spoke of justice. She counted margins.

"Another protest?" she asked, not looking up from her spreadsheet.

"Another dollar?" he countered, not looking up from his sign.

They'd been this way for years—parallel lives in the same house. He thought she'd sold out. She thought he'd never grown up.

Then the factory closed. Her workers—people she knew, people with families—suddenly adrift.

"We should do something," she said, surprising herself.

"I know some organizers," he offered, surprising himself.

They worked together for the first time in years. His principles guided strategy. Her resources made it possible. When the severance packages came through, they stood on the picket line together.

"I never understood," she said. "Principles feel different when they're personal."

"And pragmatism feels different when it serves something larger."

They walked home hand in hand—the advocate and the achiever, finally on the same team.`,
    dynamicDescription: "Social principles meet practical achievement, creating potential for principled success if values align.",
    growthPath: "One appreciating practical success, Three developing principled approach, achieving in ways that also serve values.",
    watchOut: "One judging Three's material focus, Three dismissing One's principles as impractical, values versus results tension."
  },
  {
    type1: 1, subtype1: 'so', type2: 3, subtype2: 'so',
    title: "The Moral Authority and The Social Star",
    subtitle: "Principled influence meets achieved status",
    narrative: `They both wanted the corner office—metaphorically, spiritually, in every room they entered.

He built coalitions through conviction. She built them through charisma. He inspired through righteousness. She inspired through results.

"You need me," she said after yet another competition.

"I need integrity," he corrected.

"And I need to win. Together, we could have both."

They tried partnership. It was like merging fire with ice—spectacular and unsustainable. Every board meeting became a referendum on their competing philosophies.

Until the scandal. A competitor cut corners, succeeded wildly, then crashed spectacularly.

"That could have been us," she admitted. "If I'd had my way entirely."

"And we'd never have the platform for impact," he admitted, "if I'd had mine."

They rebuilt their partnership that night—not as competitors but as complements. His ethics. Her excellence. Together, unstoppable.`,
    dynamicDescription: "Two social influence styles—moral authority versus achieved status—create powerful partnership or competition.",
    growthPath: "Combining ethical leadership with impressive achievement, leading together from different strengths.",
    watchOut: "Competing for social leadership, One judging Three's methods, Three dismissing One's rigidity, different influence philosophies."
  },
  {
    type1: 1, subtype1: 'so', type2: 3, subtype2: 'sx',
    title: "The Public Principled and The Privately Magnetic",
    subtitle: "Social advocacy meets intimate charisma",
    narrative: `He gave speeches about ethics in governance. She made every person she met feel like the only one in the room.

"Come to the gala," she urged. "You need to charm donors."

"I don't charm. I convince."

"That's the problem." She adjusted his tie. "People don't give to arguments. They give to people."

"So I should be fake?"

"You should be human."

He watched her work the room that night—genuine warmth that felt calculated, calculated warmth that felt genuine. It confused him.

Later, alone, she crumbled. "Do you know how exhausting it is? Being on all the time?"

"Do you know how exhausting it is being right all the time?"

They looked at each other. Two performances, meeting in honesty.

"I could be your truth," she offered.

"I could be your rest," he answered.

The public figure and the private magnetism, finding shelter in each other.`,
    dynamicDescription: "Public principles meet private charisma, creating potential complementarity if they bridge their different worlds.",
    growthPath: "One bringing charisma to advocacy, Three bringing purpose to magnetism, integrating public and private strengths.",
    watchOut: "One dismissing Three's charm as shallow, Three finding One's advocacy boring, living in separate spheres."
  },
  {
    type1: 1, subtype1: 'sx', type2: 3, subtype2: 'sp',
    title: "The Intimate Reformer and The Practical Achiever",
    subtitle: "Relationship perfectionism meets material success",
    narrative: `"You spent twelve hours at work again," he said, not hiding the accusation.

"Building our future," she replied, not hiding the defensiveness.

"Our future is us. Right now. Being present."

She dropped her bag. "I'm here, aren't I?"

"Your body is here. Your ambition is still at the office."

She worked harder than anyone she knew. Built security from nothing. And still it wasn't enough for him. He wanted transformation when she wanted stability.

"What if I stopped?" she asked one night. "Would you love me if I achieved nothing?"

The question hung there. His love had conditions—growth, improvement, change. But so did hers—success, provision, proof.

"What if we both stopped?" he said slowly. "Just for tonight. No improvement. No achievement."

They sat in silence. No projects, no progress. Just two people discovering what remained when the striving stopped.

It was enough. It was more than enough.`,
    dynamicDescription: "Relationship intensity meets material focus, creating tension between intimate transformation and practical achievement.",
    growthPath: "One supporting Three's practical success, Three investing in relationship depth, finding that both achievement and intimacy matter.",
    watchOut: "One feeling neglected for Three's career, Three feeling pressured by One's relationship demands, competing priorities."
  },
  {
    type1: 1, subtype1: 'sx', type2: 3, subtype2: 'so',
    title: "The Passionate Reformer and The Social Star",
    subtitle: "Intimate intensity meets public success",
    narrative: `She accepted another award. He sat in the audience, applauding a woman he barely recognized.

"You were brilliant," he said afterward, meaning it.

"Then why do you look sad?"

"Because you're brilliant for everyone. I want you brilliant for me."

The success had grown between them like a hedge—beautiful from outside, but blocking everything within. She'd become a brand. He'd become a critic of that brand.

"I don't know how to be small," she admitted. "Even with you."

"I don't want you small. I want you real."

She canceled the next appearance. He didn't critique what she wore. They spent a weekend being nobody—no reputation to maintain, no perfection to achieve.

"I forgot," she said, "that I liked myself before the applause."

"I forgot that I loved you before I started fixing you."

They emerged different. She smaller. He softer. Both more real than they'd been in years.`,
    dynamicDescription: "Intimate perfectionism meets social achievement, creating tension between private depth and public success.",
    growthPath: "One accepting Three's public role, Three prioritizing relationship presence, balancing private depth with public achievement.",
    watchOut: "One feeling abandoned for Three's social life, Three feeling trapped by One's intensity, incompatible orientations."
  },
  {
    type1: 1, subtype1: 'sx', type2: 3, subtype2: 'sx',
    title: "The Passionate Reformer and The Magnetic Charmer",
    subtitle: "Intense perfectionism meets captivating presence",
    narrative: `They were a bonfire—beautiful, dangerous, consuming everything in reach.

She performed perfection: the ideal partner, the captivating presence, the woman no one could resist. He evaluated every performance: too much here, not enough there, almost right but never quite.

"Be yourself," he demanded.

"This is myself," she insisted.

"No. This is your show."

The fight lasted three days. She accused him of impossible standards. He accused her of impossible surfaces. Both were right. Neither could stop.

"What are you like when no one's watching?" he finally asked.

"I don't know. Someone's always watching. Even me."

"Then stop watching."

She tried. Without the performance, without the dazzle, without the carefully crafted self—she was just a woman, afraid of being ordinary.

"You're ordinary," he said softly. "And I love you anyway."

For the first time, she believed him. Ordinary was finally enough.`,
    dynamicDescription: "Maximum intensity pairing—transformative perfectionism meets consuming charisma—creating passionate but challenging dynamic.",
    growthPath: "One appreciating Three's magnetism as gift not flaw, Three accepting One's feedback as care not rejection.",
    watchOut: "One's criticism devastating Three's confidence, Three's performance frustrating One's authenticity needs, intensity without acceptance."
  },

  // === TYPE 1 WITH TYPE 4 SUBTYPES (9 stories) ===
  {
    type1: 1, subtype1: 'sp', type2: 4, subtype2: 'sp',
    title: "The Practical Perfectionist and The Aesthetic Survivor",
    subtitle: "Methodical standards meet creative survival",
    narrative: `His spreadsheets had spreadsheets. Her studio was chaos arranged by feeling.

"There's a system to this," she insisted when he stood in her doorway, appalled.

"Where?"

"The blue things feel connected. The broken things teach me something. The—"

"It's a mess."

She looked at his organized life—labeled, filed, controlled. "Your soul is a mess."

They almost walked away from each other that day. Disorder versus rigidity. Feeling versus function.

But that night, he found her crying over a canvas that wouldn't cooperate.

"It's not working," she sobbed. "Nothing's working."

He sat beside her. For once, didn't offer solutions. Just stayed.

"Sometimes," he said finally, "broken things are allowed to be broken."

She leaned into him. "Sometimes organized things are allowed to feel."

The perfectionist and the artist, finding that maybe beauty had structure and structure had beauty.`,
    dynamicDescription: "Practical perfectionism meets aesthetic intensity, sharing grounded focus but differing on correctness versus uniqueness.",
    growthPath: "One appreciating beauty as a form of rightness, Four finding structure supportive of creativity.",
    watchOut: "One dismissing Four's aesthetics as impractical, Four feeling constrained by One's standards."
  },
  {
    type1: 1, subtype1: 'sp', type2: 4, subtype2: 'so',
    title: "The Private Perfectionist and The Social Outsider",
    subtitle: "Personal standards meet belonging pain",
    narrative: `He alphabetized the spice rack. She stared out the window, drowning in not belonging.

"What's wrong now?" he asked—not unkind, but not understanding either.

"I don't fit anywhere. I never have."

"You fit here." He gestured at their apartment. "The dishes are done. The bills are paid."

"That's not what I mean."

He didn't understand. His world was concrete: problems with solutions, messes with systems. Her world was mist: feelings without forms, wounds without bandages.

"Teach me," he said one night, putting down his to-do list.

"Teach you what?"

"To feel what you feel. Even if I can't fix it."

She took his hand and led him to the window. "Just look. Don't organize it. Don't solve it. Just feel how big the world is and how small we are."

He tried. It was terrifying. It was beautiful. It was the beginning of something neither had words for.`,
    dynamicDescription: "Practical focus meets social-existential suffering, creating different orientations toward what matters.",
    growthPath: "One understanding existential pain, Four finding grounding in practical action.",
    watchOut: "One dismissing Four's belonging needs, Four finding One's concerns shallow."
  },
  {
    type1: 1, subtype1: 'sp', type2: 4, subtype2: 'sx',
    title: "The Careful Perfectionist and The Passionate Artist",
    subtitle: "Anxious standards meet consuming intensity",
    narrative: `She burst through doors. He closed them carefully behind her.

"FEEL something!" she screamed during their worst fight.

"I am feeling something," he said quietly. "I'm feeling like you're too much."

"Too much is the only amount worth being!"

He watched her blaze, this woman made of passion and pain and poetry. Everything he'd controlled in himself, she unleashed.

"I terrify you," she realized.

"Yes."

"Because I'm what you'd be if you stopped gripping."

"Yes."

She sat down, suddenly exhausted. "I'm tired of being everything at full volume."

He sat beside her. "I'm tired of being nothing at any volume."

They looked at each other—the tsunami and the seawall—finally seeing what they needed from each other.

"Teach me your quiet," she whispered.

"Teach me your storm," he answered.

They began learning the language between eruption and containment.`,
    dynamicDescription: "Cautious practicality meets overwhelming passion, creating stark contrast in approach to life.",
    growthPath: "One allowing passion, Four appreciating grounding, finding that intensity and stability can coexist.",
    watchOut: "Four overwhelming One with emotion, One dampening Four's passion with criticism."
  },
  {
    type1: 1, subtype1: 'so', type2: 4, subtype2: 'sp',
    title: "The Moral Advocate and The Creative Survivor",
    subtitle: "Social principles meet private aesthetics",
    narrative: `He campaigned for justice. She painted walls the color of loneliness.

"The world is on fire," he announced, home from another rally.

"I know," she said, mixing cerulean and shadow. "I'm making something beautiful from the ashes."

"Making art while Rome burns?"

"Building arks while everyone argues about the flood."

He didn't understand her withdrawal. She didn't understand his crusades. He wanted to fix the world; she wanted to make one moment of it bearable.

Then the campaign failed. His cause collapsed. He came home broken.

She didn't say I told you so. She took his hand and led him to her studio—to walls covered in color, in feeling, in things that couldn't be legislated.

"This doesn't change anything," he said.

"It changes us. Sometimes that's all we can save."

He wept for the first time in years. She held him in her private world, where beauty was its own rebellion.`,
    dynamicDescription: "Public principles meet private aesthetics, creating different scopes and values.",
    growthPath: "One appreciating private beauty, Four engaging with broader principles.",
    watchOut: "One dismissing Four's inwardness, Four finding One's public focus superficial."
  },
  {
    type1: 1, subtype1: 'so', type2: 4, subtype2: 'so',
    title: "The Principled Advocate and The Alienated Outsider",
    subtitle: "Social reform meets social suffering",
    narrative: `He stood at the center of every room. She haunted the edges.

"Join us," he kept saying. "You have so much to offer."

"I don't fit. I've never fit."

His confidence exhausted her. Her melancholy frustrated him. He saw problems to solve; she saw proof she was unfixable.

"You make me feel broken," she finally admitted.

"You make me feel heartless," he confessed.

They sat in that truth. The leader and the outsider, realizing they'd been hurting each other by being themselves.

"What if I don't try to fix you?" he asked.

"What if I don't assume you're judging me?"

She attended his event—not to belong, but to watch him in his element. He sat with her in her darkness—not to cure it, but to understand.

"You're not broken," he said. "You're just tuned to a different frequency."

"You're not heartless," she said. "You just show love in systems instead of sadness."

Two social orientations, learning to orbit without collision.`,
    dynamicDescription: "Social leadership meets social alienation, creating different relationships to groups and belonging.",
    growthPath: "One understanding outsider pain, Four finding belonging through One's acceptance.",
    watchOut: "One's confidence increasing Four's shame, Four's alienation frustrating One's reform impulse."
  },
  {
    type1: 1, subtype1: 'so', type2: 4, subtype2: 'sx',
    title: "The Public Reformer and The Passionate Soul",
    subtitle: "Social advocacy meets intimate intensity",
    narrative: `He saved the world. She wanted to be his world.

"Another meeting?" she asked, watching him gather papers.

"The housing bill—"

"There's always a bill. A cause. A crisis that isn't me."

He paused. She was drowning in front of him, and he kept swimming toward distant shores.

"I matter too," she said quietly. "More than policy."

"Of course you do—"

"Then prove it. Cancel something. Stay."

He looked at his phone, his calendar, his carefully scheduled revolution. Then he looked at her—this woman who felt everything, who needed him to feel her back.

He turned off his phone.

"What are you doing?" she asked, shocked.

"Choosing the housing crisis in front of me."

She laughed despite tears. "That's the most romantic thing you've ever said."

"I'm still learning your language."

"And I'm learning yours. Causes can be intimate too."

The reformer and the romantic, finding where public and private could hold hands.`,
    dynamicDescription: "Public moral focus meets private emotional intensity, creating tension between social and intimate orientations.",
    growthPath: "One bringing emotional presence to relationship, Four supporting One's broader mission.",
    watchOut: "Four feeling abandoned for causes, One feeling overwhelmed by Four's emotional demands."
  },
  {
    type1: 1, subtype1: 'sx', type2: 4, subtype2: 'sp',
    title: "The Passionate Reformer and The Grounded Artist",
    subtitle: "Intimate perfectionism meets practical aesthetics",
    narrative: `He wanted to perfect her. She wanted to create herself.

"You could be so much more," he said, arranging her potential like furniture.

"I could be me," she countered, rearranging her actual furniture for the third time.

His vision for her was clear, precise, achievable with effort. Her vision for herself was murky, beautiful, entirely her own.

"Stop improving me," she finally said. "I'm not a project."

"Then what are you?"

"A process. Like this room. Like this life."

He looked around her space—imperfect, personal, alive with meaning he didn't assign.

"I don't know how to love without fixing," he admitted.

"I don't know how to be loved without disappearing."

They stood at the crossroads of their intensities—his reform meeting her creation.

"What if your love was witnessing instead of fixing?"

"What if being seen was enough to change you?"

They tried. It was harder than either expected. It was also more real.`,
    dynamicDescription: "Transformative intensity meets aesthetic grounding, sharing intensity but expressing it differently.",
    growthPath: "One appreciating Four's aesthetic expression, Four accepting One's transformative care.",
    watchOut: "One trying to improve Four's art, Four resisting One's reform agenda."
  },
  {
    type1: 1, subtype1: 'sx', type2: 4, subtype2: 'so',
    title: "The Intimate Reformer and The Social Outsider",
    subtitle: "Relationship intensity meets belonging pain",
    narrative: `She brought her loneliness like luggage into their relationship. He tried to unpack it, organize it, solve it.

"You belong with me," he insisted.

"I don't belong anywhere. That's the point."

His certainty crashed against her doubt. He was so sure of them—sure enough for both—while she questioned everything, especially herself.

"Let me fix this," he said.

"You can't fix being me."

The words stopped him. All his intensity, all his transformative passion, met a wound he couldn't renovate.

"Then what can I do?"

"Stay anyway. While I'm unfixed. While I don't belong anywhere except maybe, sometimes, here."

He sat down. Stopped solving. Started being.

"Here is enough," he said finally. "You, unfixed, is enough."

She cried—not from sadness but from the shock of being accepted without the usual conditions.

"Teach me to believe that," she whispered.

"Every day. For as long as it takes."`,
    dynamicDescription: "Intense intimate focus meets social suffering, creating potential for deep acceptance or painful reform.",
    growthPath: "One accepting Four's pain without fixing, Four finding belonging in the intensity offered.",
    watchOut: "One's improvement agenda making Four feel more defective, Four's suffering exhausting One's patience."
  },
  {
    type1: 1, subtype1: 'sx', type2: 4, subtype2: 'sx',
    title: "The Passionate Reformer and The Romantic Intense",
    subtitle: "Transformative perfectionism meets consuming emotion",
    narrative: `They were both too much—and they knew it.

He demanded perfection with the force of a hurricane. She demanded feeling with the depth of an ocean. When they collided, the world shook.

"Feel it correctly," he once said, not hearing how impossible he sounded.

"Don't correct my soul," she answered, not hearing how impossible she sounded.

Their fights were legendary. Their reconciliations, seismic. Nothing between them was ever small.

"We'll destroy each other," she said one night, exhausted.

"Or become each other's masterpiece."

"What's the difference?"

He didn't know. Neither did she. But they kept choosing the fire over safety, the storm over peace.

"What if perfect meant fully felt?" she offered.

"What if fully felt was the goal instead of the obstacle?"

They held each other in the intensity neither could escape.

"I'll try to feel your standards," she said.

"I'll try to accept your chaos."

Two overwhelming forces, finally learning that too much could be exactly enough.`,
    dynamicDescription: "Maximum intensity pairing—transformative perfectionism meets consuming emotion—creating profound but volatile connection.",
    growthPath: "One accepting Four's emotion as valid rather than problem to fix, Four appreciating One's care as love not criticism.",
    watchOut: "Intensity without resolution, One's improvement meeting Four's sensitivity destructively."
  },

  // === TYPE 1 WITH TYPE 5 SUBTYPES (9 stories) ===
  {
    type1: 1, subtype1: 'sp', type2: 5, subtype2: 'sp',
    title: "The Practical Perfectionist and The Minimalist Observer",
    subtitle: "Correct systems meet conservation",
    narrative: `Their apartment was small by choice. She kept it immaculate—everything labeled, organized, in its proper place. He kept his needs minimal—one shelf of books, one drawer of clothes, everything conserved.

"The kitchen faucet needs a new washer," she said, already researching the correct replacement.

"It works fine."

"It drips."

"I don't hear it."

She heard everything that needed fixing. He needed almost nothing to begin with.

But their frugality matched. Their careful ways complemented. She improved systems; he didn't resist when she was right. He retreated into silence; she learned to let him rest there.

"I reorganized your bookshelf," she said one evening. "By subject, then author."

He looked at his books. Found them exactly where he could find them.

"Thank you," he said quietly. And meant it.

She'd made his small world slightly better. He'd let her in without losing himself.

It was enough. For both of them, that was everything.`,
    dynamicDescription: "Practical perfectionism meets resource conservation, sharing groundedness but differing on engagement.",
    growthPath: "One accepting Five's withdrawal as valid, Five engaging with One's standards.",
    watchOut: "One's demands depleting Five, Five's withdrawal frustrating One's standards."
  },
  {
    type1: 1, subtype1: 'sp', type2: 5, subtype2: 'so',
    title: "The Private Perfectionist and The Expert Observer",
    subtitle: "Personal standards meet intellectual contribution",
    narrative: `She noticed he never talked about feelings—only facts. He noticed she never stopped organizing—even when things were already in order.

"Tell me something personal," she said one evening, genuinely curious.

"The migration patterns of Arctic terns are fascinating." He paused. "Is that personal?"

"That's knowledge. I meant something about you."

He considered this seriously. "I find migration patterns comforting. The predictability."

It was more than she expected. She sat with it, recognizing something.

"I find organization comforting," she admitted. "The control."

He nodded. "We're both managing anxiety. Different methods."

She'd never thought of it that way. Her systems weren't virtue—they were shelter.

"Teach me about the terns," she said, putting down her label maker.

He looked at her—really looked—surprised by the invitation.

"You actually want to know?"

"You shared something real. I want to meet you there."

They stayed up late. He talked about birds; she listened without fixing. Both learned that connection didn't require perfection.`,
    dynamicDescription: "Personal perfectionism meets intellectual contribution, sharing competence focus but differing on intimacy.",
    growthPath: "One valuing intellectual contribution, Five engaging personally beyond expertise.",
    watchOut: "One demanding more intimacy than Five can give, Five finding One's standards exhausting."
  },
  {
    type1: 1, subtype1: 'sp', type2: 5, subtype2: 'sx',
    title: "The Careful Perfectionist and The Intense Observer",
    subtitle: "Anxious standards meet private depth",
    narrative: `She checked the locks twice before bed. He watched from his reading chair, surprised she'd stayed this late again.

"You could just stay," he said quietly. For him, this was a declaration.

"I have my routine." But she sat down instead of leaving.

He returned to his book, comfortable with silence. She fidgeted with her keys, then set them down.

"You're different than other people," she said.

"I know."

"I mean—you're actually here. When you're here."

He looked up. "Where else would I be?"

It was so simple for him. Presence or absence. She lived in the anxious space between—always half-leaving, always half-checking.

"Stay," he said again. "I'll make sure the locks are right."

"You'll check them properly?"

"Twice, if you need."

She laughed—actually laughed. He'd found her language.

That night, she stayed. He checked the locks, then checked them again. Not because he needed to, but because she did.

They learned: her care looked like vigilance; his looked like attention. Different methods, same devotion.`,
    dynamicDescription: "Practical perfectionism meets bounded intensity, creating potential for structured depth.",
    growthPath: "One appreciating Five's unusual openness, Five tolerating One's structured approach.",
    watchOut: "One's demands triggering Five withdrawal, Five's boundaries frustrating One's standards."
  },
  {
    type1: 1, subtype1: 'so', type2: 5, subtype2: 'sp',
    title: "The Social Reformer and The Withdrawn Observer",
    subtitle: "Public principles meet private conservation",
    narrative: `She returned from another town hall meeting, energized and frustrated. He was reading where she'd left him, lamp casting its small circle of light.

"They're going to ruin the zoning if we don't organize," she said, dropping her bag.

He nodded without looking up.

"You could help, you know. Your research skills would be—"

"No."

The word was soft but absolute. A wall she'd learned to recognize.

"Why won't you engage with anything?" she asked, finally sitting.

"I engage with things that matter."

"The community matters!"

"You matter." He closed his book. "The community drains me. You don't."

She stared at him. All her advocacy, all her improvement projects, and this quiet man in his reading chair thought she was what mattered.

"I can't stop trying to fix things," she said.

"I know. Fix the world. Just let me stay here while you do."

"You'll be here when I get back?"

"Always."

It wasn't what she wanted—his participation, his energy, his shared outrage. But it was what he had: a light left on, a door unlocked, a witness to her efforts who never needed saving himself.`,
    dynamicDescription: "Social engagement meets total withdrawal, creating stark contrast in relationship to the world.",
    growthPath: "One respecting Five's need for solitude, Five supporting One's social mission from behind.",
    watchOut: "One dragging Five into unwanted engagement, Five frustrating One with disengagement."
  },
  {
    type1: 1, subtype1: 'so', type2: 5, subtype2: 'so',
    title: "The Principled Advocate and The Detached Expert",
    subtitle: "Moral authority meets intellectual authority",
    narrative: `They met on a committee—she pushing for ethical standards, he presenting data on outcomes.

"The numbers support a different approach," he said, projecting his slides.

"Numbers don't capture the human cost," she countered.

"Emotion doesn't capture the full picture," he replied.

The room watched them clash—moral certainty versus analytical detachment. Neither yielded.

But afterward, in the parking lot:

"Your data was solid," she admitted.

"Your principles weren't wrong. Just incomplete."

She laughed, surprised. "That's almost a compliment."

"It's an observation." He paused. "We could be powerful together. Your why, my how."

She considered it. "You'd have to care about more than data."

"You'd have to care about data at all."

They started meeting before committees. She brought the vision; he brought the evidence. Together, they became formidable—reformers who could prove their reforms worked.

"I still think you're too cold," she said one evening.

"I still think you're too certain," he replied.

"But it works."

"It works."

That was enough. Two authorities, finally learning that moral and intellectual power could share the same stage.`,
    dynamicDescription: "Moral authority meets intellectual authority, creating complementary or competing leadership.",
    growthPath: "One valuing Five's analysis, Five valuing One's moral clarity, leading together.",
    watchOut: "One dismissing Five as unfeeling, Five dismissing One as irrational."
  },
  {
    type1: 1, subtype1: 'so', type2: 5, subtype2: 'sx',
    title: "The Public Reformer and The Private Intense",
    subtitle: "Social advocacy meets intimate depth",
    narrative: `She was preparing for another fundraiser when he said it:

"Stay home tonight."

She stopped sorting donation envelopes. He never asked for anything.

"The charity gala—"

"I know." He was looking at her with unusual intensity. "Stay anyway."

"Why tonight?"

"Because I'm asking."

For a Five—especially this Five—asking was everything. He who needed nothing was admitting to need.

"One night," she said slowly. "Just one."

"One night."

She called her co-chair, made excuses, hung up feeling strange. Guilty. Free.

They ordered dinner. He talked more than usual—about his research, his thoughts, things he normally kept inside his head.

"You're different tonight," she said.

"I'm always like this. You're just usually gone."

It landed harder than he intended. Or maybe exactly as intended.

"I can't give up everything I do," she said.

"I'm not asking for everything. Just sometimes. Just this."

She learned: his private world was vast. Her public one was loud. Between them, they'd find the islands where both could rest.

"Next time," she said, "ask sooner."

"Next time," he promised, "I will."`,
    dynamicDescription: "Public focus meets private intensity, creating tension between social mission and intimate bond.",
    growthPath: "One investing in Five's offered depth, Five supporting One's broader impact.",
    watchOut: "Five feeling abandoned for causes, One feeling trapped by Five's private focus."
  },
  {
    type1: 1, subtype1: 'sx', type2: 5, subtype2: 'sp',
    title: "The Passionate Reformer and The Withdrawn Observer",
    subtitle: "Intimate intensity meets total conservation",
    narrative: `She wanted everything from him—every thought, every feeling, every moment of attention. He wanted to give her something, but needed to keep most of himself intact.

"Talk to me," she said for the hundredth time.

"I am talking."

"About something real. About us."

He set down his book, exhausted already. "We're fine."

"Fine isn't enough. I need more."

"More than I have?"

The question stopped her. She'd been so focused on what she wanted that she hadn't asked what he could give.

"How much do you have?" she asked quietly.

"Some. Not as much as you need. But some."

She sat with this. All her passion, all her need for transformation—crashing against his walls like waves on a cliff.

"I don't want to break you," she admitted.

"You won't. I'm stronger than I look." He reached for her hand—offering what he could. "I just need you to want what I can give. Not what I can't."

She held his hand. Felt the warmth he was offering.

"I'll try," she said.

"That's all I ask."

They learned: intensity and conservation could coexist, but only if she stopped seeing his walls as rejection and he stopped seeing her need as demand.`,
    dynamicDescription: "Transformative intensity meets resource conservation, creating challenge between engagement and withdrawal.",
    growthPath: "One learning that Five's withdrawal isn't rejection, Five learning that One's intensity is care.",
    watchOut: "One's intensity depleting Five, Five's withdrawal feeling like rejection to One."
  },
  {
    type1: 1, subtype1: 'sx', type2: 5, subtype2: 'so',
    title: "The Intimate Reformer and The Expert Observer",
    subtitle: "Relationship perfectionism meets intellectual contribution",
    narrative: `She wanted to perfect their relationship with the same intensity she brought to everything. He wanted to contribute his expertise to the world and come home to peace.

"We need to talk about us," she said.

"What's wrong with us?"

"Nothing's wrong. I want it to be better."

He sighed. Better, in her language, meant more—more processing, more transformation, more of everything he found exhausting.

"I gave a presentation today," he offered. "Fifty people. They said it was illuminating."

"That's wonderful. But I'm asking about us."

"I know." He looked at her carefully. "What if how I engage with the world is how I love you? What if my competence is my gift?"

She hadn't thought of it that way—his lectures, his expertise, his public contributions as a form of devotion.

"You work so hard out there," she said slowly. "And I want you to work hard here too."

"Different kinds of work. I give them knowledge. I give you presence."

"Is presence enough?"

"Is knowledge enough for them?" He reached for her. "We give what we have, where we can give it."

She leaned into him, letting his quiet presence be enough for now. Tomorrow she'd push again. Tonight, she'd receive what he offered.`,
    dynamicDescription: "Emotional perfectionism meets intellectual distance, creating different expectations for connection.",
    growthPath: "One valuing Five's intellectual gifts, Five allowing emotional engagement.",
    watchOut: "One demanding more emotion than Five can give, Five's distance frustrating One's transformation agenda."
  },
  {
    type1: 1, subtype1: 'sx', type2: 5, subtype2: 'sx',
    title: "The Passionate Reformer and The Intense Observer",
    subtitle: "Transformative perfectionism meets bounded depth",
    narrative: `They were both intense—but with different fuels. She burned hot, demanding transformation. He burned slow, offering depth within careful boundaries.

"You're holding back," she said, feeling his walls.

"I'm not. This is full for me."

"It doesn't feel full."

He looked at her with those deep eyes that had drawn her in. "I give you more than I give anyone. Ever."

She knew it was true. He opened doors for her he kept locked for the world. But her hunger was endless.

"Why can't you just—" She stopped. "I don't know how to finish that sentence."

"Because you want something infinite. I'm finite."

"Everyone's finite."

"But I know my limits. You don't know yours."

The observation landed. She pushed because she didn't know when to stop. He withdrew because he knew exactly when he had to.

"Meet me somewhere in the middle?" she asked.

"I'm already there." He reached for her. "Come find me."

She stepped forward, into his bounded intensity. It wasn't everything she wanted—but it was more than she'd get anywhere else, and truer than anything she'd known.

Two intense souls, finally learning that depth could have different depths.`,
    dynamicDescription: "Transformative intensity meets bounded intensity, sharing depth but with different capacities.",
    growthPath: "One accepting Five's unusual openness as gift, Five sustaining more engagement than typical.",
    watchOut: "One's perfectionism overwhelming Five's offered depth, Five retreating from One's demands."
  },

  // === TYPE 1 WITH TYPE 6 SUBTYPES (9 stories) ===
  {
    type1: 1, subtype1: 'sp', type2: 6, subtype2: 'sp',
    title: "The Careful Perfectionist and The Survival Worrier",
    subtitle: "Anxious standards meet anxious preparation",
    narrative: `They kept lists—both of them. His tracked home maintenance schedules, proper procedures, things done right. Hers tracked potential disasters, emergency supplies, escape routes.

"Did you check the smoke detectors?" she asked.

"Last Tuesday. They're on the schedule."

"And the fire extinguisher?"

"Serviced in March. As noted."

They sat in their perfectly maintained, thoroughly prepared home, both scanning for what could go wrong.

"Sometimes," she said quietly, "I wonder if we'll ever feel safe."

He looked up from his checklist. "I thought safety came from doing things right."

"I thought it came from being ready."

Neither had found it. Both kept trying.

"What if," he said slowly, "we're just anxious people who found each other?"

"Is that bad?"

"It might be good. At least we understand."

She reached for his hand. He took it—both of them imperfect, both of them worried, both of them trying so hard.

"One evening," she said. "Just one evening without checking anything."

"We'll check tomorrow?"

"Twice, if we need to."

They sat together, practicing peace. Two anxious souls, learning that safety might mean trusting each other—not just the systems.`,
    dynamicDescription: "Shared anxiety about practical matters can create thorough preparation or amplified worry.",
    growthPath: "Finding peace together, not just shared worry; trusting that enough is enough.",
    watchOut: "Mutual anxiety amplifying, never feeling safe or correct enough."
  },
  {
    type1: 1, subtype1: 'sp', type2: 6, subtype2: 'so',
    title: "The Private Perfectionist and The Loyal Questioner",
    subtitle: "Personal standards meet group allegiance",
    narrative: `He spent Saturdays perfecting the house—organizing closets, tuning systems, maintaining order in their private world. She spent Saturdays at meetings—book club, neighborhood watch, her sister's kids.

"You're never home," he said one evening.

"I'm home now."

"For how long? Until the next text from someone who needs you?"

She looked at her phone, already lighting up. "They count on me."

"I count on you too."

"You don't need me. You have your systems."

It stung because it was partly true. His home ran perfectly without her. But that wasn't the point.

"I want you here," he said. "Not need. Want."

She set down the phone. "I don't know how to belong to just one person."

"I'm not asking for just. I'm asking for also."

She considered this—her committees and communities, his careful home and quiet standards.

"Teach me about your closet organization," she said, surprising them both.

"What?"

"Show me what matters to you. Let me belong here too."

He did. She stayed. One Saturday—just one—she chose his private world over her public ones.

It became a pattern: her loyalty expanding to include him, his home opening to include her worlds.`,
    dynamicDescription: "Personal perfectionism meets social loyalty, creating different scopes of concern.",
    growthPath: "One appreciating community, Six appreciating personal standards.",
    watchOut: "One dismissing Six's group needs, Six finding One's focus too narrow."
  },
  {
    type1: 1, subtype1: 'sp', type2: 6, subtype2: 'sx',
    title: "The Careful Perfectionist and The Counterphobic Warrior",
    subtitle: "Cautious standards meet bold action",
    narrative: `She triple-checked the locks every night, labeled the emergency supplies, kept the first-aid kit stocked. He punched walls, picked fights with strangers, drove too fast on purpose.

"You're going to get yourself killed," she said, watching him grab his motorcycle helmet.

"And you're going to die having never lived." He revved the engine.

She stood at the window until he returned at 2 AM, adrenaline still buzzing in his eyes.

"Why do you do this to yourself?" she asked.

He paused. "Why do you organize pantries instead of feeling your fear?"

They stared at each other—two people terrified of the same thing, running opposite directions.

She touched his bruised knuckles. "Teach me to be brave."

He sat down, suddenly exhausted. "Teach me it's okay to be careful."

Her caution wasn't cowardice—it was wisdom. His recklessness wasn't courage—it was armor. Somewhere between her preparations and his confrontations, they found a bravery neither could reach alone.`,
    dynamicDescription: "Cautious perfectionism meets counterphobic courage, creating different approaches to fear.",
    growthPath: "One learning courage, Six learning prudence.",
    watchOut: "Six's risks triggering One's anxiety, One's caution frustrating Six."
  },
  {
    type1: 1, subtype1: 'so', type2: 6, subtype2: 'sp',
    title: "The Social Reformer and The Prepared Survivor",
    subtitle: "Public principles meet private security",
    narrative: `He organized community meetings about civic responsibility. She stockpiled canned goods and learned to filter water.

"We need to get people voting," he announced, spreading petitions across the kitchen table.

She glanced up from her emergency radio. "We need to get people prepared for when voting doesn't matter anymore."

"That's so cynical."

"That's so naive."

They lived in parallel worlds—his full of committees and causes, hers full of backup generators and escape routes. He thought she was paranoid. She thought he was dangerously optimistic.

Then the storm came. Real crisis. His community networks mobilized beautifully. Her preparations kept them alive when the power failed.

"We needed both," she admitted, watching neighbors share her supplies through his organized distribution system.

He nodded, finally understanding. "You protect what I build. I give meaning to what you prepare for."

Her survival instincts weren't fear—they were wisdom. His idealism wasn't naivete—it was hope. Together, they were both realistic and revolutionary.`,
    dynamicDescription: "Public idealism meets private preparation, creating different relationships to the world.",
    growthPath: "One understanding real dangers, Six supporting principled engagement.",
    watchOut: "One dismissing Six's concerns as paranoid, Six finding One naive."
  },
  {
    type1: 1, subtype1: 'so', type2: 6, subtype2: 'so',
    title: "The Principled Advocate and The Loyal Lieutenant",
    subtitle: "Moral authority meets trusted allegiance",
    narrative: `She set the standards. He tested them relentlessly.

"We should implement the new ethics policy," she announced at the committee meeting.

"Why? Who wrote it? What's their agenda?" He leaned forward, suspicious.

"I wrote it. My agenda is doing the right thing."

"That's what everyone says."

She felt attacked. He felt protective. Two people who wanted the same thing—trustworthy groups—approaching it from opposite ends.

She led. He questioned. She provided principles. He stress-tested them. It felt like opposition until they realized it was partnership.

"Your questions make my standards stronger," she admitted one day.

"Your standards give my questions somewhere to land," he replied.

She stopped seeing his doubt as disloyalty. He stopped seeing her certainty as naivete. Between them, they built something neither could alone: authority that had been tested, loyalty that had been earned.

"Lead," he finally said. "I'll watch your back."

"Question everything," she answered. "I'll give you answers worth believing."

Moral clarity met loyal skepticism. Together, they were both principled and proven.`,
    dynamicDescription: "Moral authority meets loyalty-seeking, creating potential for principled partnership or authority struggle.",
    growthPath: "One earning Six's trust through consistency, Six finding One's principles reliable.",
    watchOut: "Six's testing exhausting One, One's certainty threatening Six's need to question."
  },
  {
    type1: 1, subtype1: 'so', type2: 6, subtype2: 'sx',
    title: "The Public Reformer and The Fierce Warrior",
    subtitle: "Principled advocacy meets counterphobic intensity",
    narrative: `She drafted the petition. He wanted to storm the building.

"We follow proper channels," she insisted, straightening her stack of signatures. "That's how change actually happens."

"Proper channels are how they keep us quiet." His jaw was set, fists clenched. "Sometimes you have to fight."

She saw recklessness in his eyes. He saw cowardice in her caution.

But when the council ignored her petition for the third time, she felt something shift. When his protest nearly got him arrested with nothing to show for it, he felt it too.

"What if we tried both?" she asked one night.

He looked up, surprised. "What do you mean?"

"Your courage. My strategy. You push the boundaries—I make sure we don't lose ground."

They became formidable. Her principles gave his fire direction. His fearlessness gave her advocacy teeth.

"You're braver than you think," he told her.

"You're smarter than you pretend," she replied.

Moral clarity met warrior spirit. Together, they weren't just righteous or fierce—they were effective.`,
    dynamicDescription: "Principled advocacy meets fierce courage, creating potential for powerful reform or stylistic clash.",
    growthPath: "One bringing courage to principles, Six bringing principles to courage.",
    watchOut: "One restraining Six's action, Six finding One's methods too timid."
  },
  {
    type1: 1, subtype1: 'sx', type2: 6, subtype2: 'sp',
    title: "The Passionate Reformer and The Anxious Preparer",
    subtitle: "Relationship intensity meets survival worry",
    narrative: `He wanted to talk about their relationship at midnight. She wanted to check the bank account.

"We need to go deeper," he insisted, pulling her back to the couch. "I feel like we're not really connecting."

"We need groceries. The car payment is due. The roof needs fixing." Her eyes were tired, worried. "I can't connect when I'm scared we'll lose everything."

He felt rejected. She felt pressured. They started sleeping on opposite sides of the bed.

But one night the furnace broke—real emergency, real cold. He held her while she cried about money, about safety, about never feeling secure.

"I didn't know you were this scared," he whispered.

"I didn't know you needed me this much," she replied.

He started helping with budgets—transforming their finances together. She started staying up late with him—letting herself feel safe enough to be vulnerable.

"Your worry isn't weakness," he told her. "It's protection."

"Your intensity isn't pressure," she answered. "It's love."

She taught him that safety is intimacy's foundation. He taught her that intimacy is worth being safe for.`,
    dynamicDescription: "Intimate perfectionism meets survival anxiety, creating different foci within the partnership.",
    growthPath: "One including practical security in relationship care, Six allowing relational depth beyond worry.",
    watchOut: "One's intensity overwhelming Six's anxiety, Six's practical worry diminishing One's relational focus."
  },
  {
    type1: 1, subtype1: 'sx', type2: 6, subtype2: 'so',
    title: "The Intimate Reformer and The Loyal Questioner",
    subtitle: "Relationship perfectionism meets group allegiance",
    narrative: `He wanted her completely. She belonged to a dozen communities.

"Why do you need so many people?" he asked, watching her prepare for another meeting.

"Why do you need all of me?" she countered.

He felt abandoned every time she left. She felt suffocated every time he asked her to stay.

"Your groups are more important than us," he accused one night.

"You want me to have nothing but you," she shot back. "That's not love. That's imprisonment."

The silence stretched for days. He paced. She tested—watched him to see if he'd try to control her.

He didn't. Instead, he asked: "What do these communities give you that I can't?"

"Safety in numbers. People who show up. Trust that's been earned over time."

He sat with that. "Teach me to earn it."

She started bringing him along—not to own her, but to understand her. He started supporting her causes—not competing, but joining.

"You're not second to my communities," she finally said. "You're one of them."

His passion found a home in her web of loyalty. Her loyalty found a center in his depth.`,
    dynamicDescription: "Intimate perfectionism meets social loyalty, creating tension between relationship focus and group commitment.",
    growthPath: "One accepting Six's community role, Six prioritizing relationship within broader loyalty.",
    watchOut: "One feeling second to Six's groups, Six feeling trapped by One's exclusive focus."
  },
  {
    type1: 1, subtype1: 'sx', type2: 6, subtype2: 'sx',
    title: "The Passionate Reformer and The Fierce Warrior",
    subtitle: "Transformative perfectionism meets counterphobic intensity",
    narrative: `They burned hot. Both of them.

She wanted to transform their relationship into something perfect. He wanted to prove he wasn't afraid of anything—including her demands.

"This isn't working," she said, meaning: let me fix it.

"Fine. Let's fight about it." He squared his shoulders, meaning: I won't back down.

She improved. He defended. Her criticism felt like attack. His defensiveness felt like rejection. Two fires in one room, consuming all the oxygen.

They nearly burned the house down. Twice.

"I'm not trying to hurt you," she finally said, exhausted.

"I'm not trying to fight you," he admitted, equally spent.

They sat in the ashes of another argument, finally quiet enough to hear each other.

"When you criticize, I feel attacked," he explained. "I have to fight back."

"When you fight back, I feel rejected," she offered. "I push harder."

Understanding crept in like dawn. Her improvement was love. His resistance was protection. Neither was the enemy.

"Improve with me, not against me," she asked.

"Fight beside me, not at me," he offered.

Two intensities finally pointed the same direction. They remained fierce—but fierce together, not against each other.`,
    dynamicDescription: "Maximum intensity pairing—transformative perfectionism meets counterphobic courage—creating powerful but volatile dynamic.",
    growthPath: "One accepting Six's courage style, Six accepting One's improvement as care.",
    watchOut: "Intensity escalating conflict, One's criticism triggering Six's defensiveness."
  },

  // === TYPE 1 WITH TYPE 7 SUBTYPES (9 stories) ===
  {
    type1: 1, subtype1: 'sp', type2: 7, subtype2: 'sp',
    title: "The Practical Perfectionist and The Comfortable Enthusiast",
    subtitle: "Correct systems meet pleasurable living",
    narrative: `She organized the pantry by expiration date. He organized it by what looked delicious.

"The canned tomatoes go here," she said, moving them to their proper shelf.

He moved them back. "But they're next to the pasta ingredients. It makes cooking more fun."

"Fun isn't a system."

"Systems aren't a life."

They argued about spices for three days. Alphabetical versus cuisines. Proper versus pleasurable. Neither willing to yield.

Then she got sick—really sick, fever and chills. He made soup exactly the way she would have: measured, correct, healthy. But he added cream and fresh herbs and served it in her favorite bowl.

"This is wrong," she whispered, tasting it. "It's also perfect."

He smiled. "Your way keeps us alive. My way makes us want to be."

She started allowing one "pleasure shelf" in every organized space. He started asking what mattered before rearranging.

"Good can also feel good," she admitted.

"Feeling good can also be good," he agreed.

Together, they built a life both correct and delicious.`,
    dynamicDescription: "Practical perfectionism meets pleasure-seeking, sharing groundedness but differing on purpose.",
    growthPath: "One allowing pleasure, Seven accepting standards, finding that good can also be right.",
    watchOut: "One killing Seven's joy with criticism, Seven's indulgence frustrating One's standards."
  },
  {
    type1: 1, subtype1: 'sp', type2: 7, subtype2: 'so',
    title: "The Private Perfectionist and The Social Enthusiast",
    subtitle: "Personal standards meet party energy",
    narrative: `She gardened alone on Saturday mornings. He hosted brunch for thirty.

"Come outside," he called through the kitchen window, music and laughter spilling onto her quiet plants. "Everyone's asking about you!"

"I'm busy."

"You're hiding."

She kept weeding. He kept gathering crowds. They lived in the same house but different worlds—hers small and perfect, his sprawling and chaotic.

"Don't you get lonely?" he asked one evening, finding her alone in the greenhouse.

"Don't you ever stop?" she replied.

He sat down among her seedlings, suddenly quiet. "Sometimes I don't know how."

She handed him a pot, some soil, a small green thing. "Start here."

He planted it wrong. She corrected him. He planted another, better this time.

"Bring one person next time," she offered. "Not thirty."

He brought his best friend. They gardened together in near-silence. She served tea she'd grown herself.

"This is nice," he admitted. "Slower, but nice."

"Your world is nice too," she said. "Louder, but nice."

She started attending one party a month. He started reserving one morning for quiet. Both worlds remained, but now they had a door between them.`,
    dynamicDescription: "Quiet perfectionism meets social enthusiasm, creating different energy orientations.",
    growthPath: "One engaging socially sometimes, Seven appreciating quiet refinement.",
    watchOut: "Seven exhausting One with social demands, One's preferences limiting Seven's adventures."
  },
  {
    type1: 1, subtype1: 'sp', type2: 7, subtype2: 'sx',
    title: "The Careful Perfectionist and The Intense Experiencer",
    subtitle: "Anxious standards meet consuming sensation",
    narrative: `She read the reviews before every restaurant. He ordered the spiciest thing on the menu.

"That's too much," she said, watching him add more hot sauce.

"There's no such thing as too much." His eyes watered. He kept eating.

She saw chaos, recklessness, a man who'd burn himself out. He saw rigidity, fear, a woman who'd never truly taste anything.

"You're going to hurt yourself," she warned.

"You're going to miss your whole life," he countered.

They almost didn't survive it—her worry driving him away, his excess overwhelming her careful world.

But one night he got food poisoning. Really bad. She nursed him through it, bringing the right medicines at the right times, exactly the care he needed.

"Maybe a little caution isn't terrible," he admitted, pale and humbled.

She laughed for the first time in weeks. "Maybe a little excess isn't either."

He started checking expiration dates. She started trying new foods—intense ones, sometimes.

"You make my world bigger," she told him.

"You make mine last longer," he replied.

Between her caution and his ecstasy, they found a sustainable passion—still intense, but with someone to catch them when they fell.`,
    dynamicDescription: "Cautious practicality meets consuming intensity, creating stark contrast in approach to life.",
    growthPath: "One allowing intensity, Seven appreciating caution, finding sustainable passion.",
    watchOut: "Seven overwhelming One, One dampening Seven, mutual frustration."
  },
  {
    type1: 1, subtype1: 'so', type2: 7, subtype2: 'sp',
    title: "The Social Reformer and The Comfortable Seeker",
    subtitle: "Public principles meet private pleasure",
    narrative: `He attended protests on weekends. She took spa days.

"How can you just relax when there's so much wrong with the world?" he demanded, watching her book another massage.

"How can you fix the world if you're exhausted and miserable?" she replied, not looking up.

He saw selfishness, avoidance, a woman who didn't care about anything beyond her own comfort. She saw burnout waiting to happen, a man who'd sacrificed joy for righteousness.

They argued about morality and pleasure until neither could stand the other's lifestyle.

Then he collapsed—years of advocacy without rest finally catching up. She nursed him back to health, teaching him that bodies need care, that pleasure isn't sin, that rest is part of the work.

"I forgot I had a body," he admitted.

"I forgot there's a world outside mine," she confessed.

He started scheduling rest like he scheduled meetings. She started volunteering—two hours a week, then three.

"Enjoying life doesn't mean ignoring it," she learned.

"Improving life doesn't mean not living it," he discovered.

He brought purpose to her pleasure. She brought pleasure to his purpose. Together, they were both responsible and replenished.`,
    dynamicDescription: "Social idealism meets personal pleasure, creating different orientations toward life.",
    growthPath: "One enjoying life while improving it, Seven contributing while enjoying.",
    watchOut: "One judging Seven's pleasure, Seven avoiding One's serious concerns."
  },
  {
    type1: 1, subtype1: 'so', type2: 7, subtype2: 'so',
    title: "The Principled Advocate and The Social Energizer",
    subtitle: "Moral authority meets party catalyst",
    narrative: `She organized the fundraiser. He made it fun.

"We need to stay focused on the cause," she insisted, arranging donation boxes with precision.

"We need to stay focused on not boring everyone to death," he countered, queuing up the playlist.

She saw him as frivolous. He saw her as oppressive. Two people trying to serve the same community, pulling in opposite directions.

"Your enthusiasm undermines the message," she accused.

"Your seriousness kills the spirit," he shot back.

The event was a disaster. Too stern, too scattered, too much of both and not enough of either.

But walking home, they passed a street performer who'd gathered a crowd—laughing, engaged, and dropping money into a hat labeled "School Supplies for Kids."

"He did both," she said quietly.

"He made the serious thing joyful," he agreed.

They tried again. Her principles gave his energy purpose. His enthusiasm gave her principles wings. The next event raised twice as much.

"Serious doesn't have to mean heavy," she learned.

"Fun doesn't have to mean shallow," he discovered.

She added lightness to her causes. He added depth to his parties. Together, they made righteousness something people actually wanted to join.`,
    dynamicDescription: "Social principles meet social enthusiasm, creating complementary energy or value clash.",
    growthPath: "One bringing lightness to principles, Seven bringing depth to enthusiasm.",
    watchOut: "One judging Seven as shallow, Seven finding One oppressive."
  },
  {
    type1: 1, subtype1: 'so', type2: 7, subtype2: 'sx',
    title: "The Public Reformer and The Intense Adventurer",
    subtitle: "Social advocacy meets consuming experience",
    narrative: `She campaigned for environmental causes. He chased lightning storms.

"This matters," she said, spreading petitions across the kitchen table.

"This is alive," he countered, showing her photos of tornadoes he'd photographed from too close.

She saw a man wasting his life on sensations. He saw a woman who'd forgotten what it felt like to be amazed.

"Your storms don't change anything," she argued.

"Your meetings don't make you feel anything," he replied.

They lived in parallel dimensions—her world of should, his world of wow.

Then he took her storm-chasing once. She screamed, cried, clutched the dashboard—and felt more alive than she had in years.

"I'd forgotten," she whispered, watching the sky explode.

He held her hand. "Forgotten what?"

"That the world is worth saving because it's beautiful, not just because it's right."

She started bringing passion to her advocacy. He started channeling his intensity toward her causes.

"Your fire is contagious," she told him.

"Your purpose gives my fire somewhere to go," he admitted.

She made his experiences mean something. He made her meanings feel something.`,
    dynamicDescription: "Public principles meet private intensity, creating different orientations to meaning.",
    growthPath: "One allowing personal intensity, Seven engaging with broader purpose.",
    watchOut: "One dismissing Seven's experiences, Seven avoiding One's serious concerns."
  },
  {
    type1: 1, subtype1: 'sx', type2: 7, subtype2: 'sp',
    title: "The Passionate Reformer and The Comfortable Seeker",
    subtitle: "Relationship intensity meets grounded pleasure",
    narrative: `He wanted to revolutionize their relationship. She wanted to enjoy it.

"We need to go deeper," he insisted. "This could be so much more."

"This is already good." She curled into the couch, content. "Why can't good be enough?"

He saw complacency, a woman settling. She saw relentless pressure, a man who couldn't rest.

"You're always trying to fix us," she said one night. "Am I that broken?"

He stopped. Actually stopped. "No. You're not broken at all."

"Then why the constant improvement?"

He didn't have an answer. Just the feeling that things should always be becoming, never just being.

She taught him to sit in good moments—really sit in them, without planning the next transformation. He taught her that growth doesn't mean something was wrong.

"Enjoying what we have isn't settling," she explained.

"Wanting more isn't criticizing what exists," he offered.

She started dreaming with him—small dreams, comfortable-sized ones. He started savoring present pleasures—not as stops on the way somewhere else, but as destinations themselves.

"Transform the future," she suggested. "But enjoy the now."

He kissed her forehead. "I can live with that."`,
    dynamicDescription: "Transformative intensity meets comfortable pleasure, creating different expectations for relationship.",
    growthPath: "One accepting enjoyment as valid, Seven allowing deeper transformation.",
    watchOut: "One's intensity disrupting Seven's comfort, Seven's ease frustrating One's depth."
  },
  {
    type1: 1, subtype1: 'sx', type2: 7, subtype2: 'so',
    title: "The Intimate Reformer and The Social Butterfly",
    subtitle: "Relationship perfectionism meets broad connection",
    narrative: `He wanted all of her. She belonged to everyone.

"You spent the whole party talking to other people," he said, voice tight with hurt.

"That's what parties are for." She looked genuinely confused.

"I need more of you."

"There isn't more of me. This is how I love—spread wide, not pooled deep."

He felt starved. She felt smothered. They fought in the language of needs neither could understand.

"Am I not enough?" he finally asked.

"You're too much," she whispered, then caught herself. "Not like that. You're too much to be everything."

He sat with that—the idea that his intensity was a gift some couldn't receive full-strength.

"What if I joined your world instead of pulling you from it?" he offered.

"What if I saved something just for you?" she countered.

She started holding things back from parties—private jokes, intimate looks, a depth reserved for him alone. He started attending her gatherings—not jealously watching, but joining her broad bright world.

"You're my home," she told him. "They're my garden."

"I can share you with a garden," he admitted. "As long as I'm home."

Her breadth gave him oxygen. His depth gave her roots.`,
    dynamicDescription: "Intimate perfectionism meets social breadth, creating tension between exclusive and expansive connection.",
    growthPath: "One accepting Seven's social nature, Seven prioritizing intimate depth.",
    watchOut: "One feeling abandoned for Seven's social life, Seven feeling trapped by One's exclusivity."
  },
  {
    type1: 1, subtype1: 'sx', type2: 7, subtype2: 'sx',
    title: "The Passionate Reformer and The Intense Experiencer",
    subtitle: "Transformative perfectionism meets consuming sensation",
    narrative: `Both wanted everything. All of it. Now.

She wanted to transform their love into something transcendent—deeper, truer, more perfect with every passing day.

He wanted to experience their love like a storm—overwhelming, consuming, sensations so intense they erased everything else.

"Feel this with me," he urged, pulling her into another adventure.

"Grow with me," she pleaded, pulling him into another serious conversation.

He felt criticized. She felt avoided. Two passionate people who wanted the same relationship, fighting over how to want it.

"Your intensity exhausts me," he admitted one night.

"Yours distracts me," she replied.

They sat with the impasse—both too hungry to settle, both too intense to compromise.

"What if transformation felt good?" she asked slowly.

"What if ecstasy meant something?" he countered.

They experimented. She learned to transform through joy, not just effort. He learned to find meaning in sensation, not just escape.

Their love became both—growth that felt like flying, pleasure that built something lasting.

"Transform me into someone who can feel this much," she whispered.

"Help me feel something worth this much," he answered.

Two intensities, finally speaking the same language. Not improvement versus enjoyment—but improvement as enjoyment, forever deepening, forever alive.`,
    dynamicDescription: "Transformative intensity meets consuming intensity, sharing passion but with different aims.",
    growthPath: "One including joy in transformation, Seven finding depth in pleasure.",
    watchOut: "One's criticism dampening Seven's joy, Seven's avoidance frustrating One's depth."
  },

  // === TYPE 1 WITH TYPE 8 SUBTYPES (9 stories) ===
  {
    type1: 1, subtype1: 'sp', type2: 8, subtype2: 'sp',
    title: "The Practical Perfectionist and The Territory Protector",
    subtitle: "Correct systems meet material power",
    narrative: `She organized the garage by category, label, function. He built the fence higher, installed better locks, stockpiled supplies. Both securing their world—she through order, he through dominance.

"The toolbox goes here," she said, pointing to the designated spot.

He dropped it where he stood. "It goes where I put it."

She felt her jaw tighten. He felt his shoulders square. Two immovable forces in one small garage.

But when the storm came—real crisis, real threat—they discovered their rhythm. She tracked supplies, managed systems, kept everything running. He defended, negotiated, pushed back what needed pushing.

"You're good at this," she admitted, watching him secure the property.

"You're the reason there's something worth securing," he replied.

She wanted things right. He wanted things his. Somehow, right and his became the same territory.`,
    dynamicDescription: "Practical perfectionism meets territorial power, sharing material focus but differing on control.",
    growthPath: "One accepting Eight's power, Eight accepting One's standards.",
    watchOut: "Power struggle over whose approach prevails, One's criticism versus Eight's dominance."
  },
  {
    type1: 1, subtype1: 'sp', type2: 8, subtype2: 'so',
    title: "The Private Perfectionist and The Community Protector",
    subtitle: "Personal standards meet group leadership",
    narrative: `He kept his workshop immaculate—every tool in its place, every project documented. She commanded the neighborhood watch, the block party committee, the informal council that decided who belonged.

He admired her from the window. She barely noticed him at all.

"Your meetings are too loud," he said one evening, standing at her door.

She laughed—not mean, just surprised. "And you're too quiet. Nobody knows you're even here."

"I like it that way."

"Then why are you at my door?"

He didn't know. Something about her certainty. Something about how she moved through the world like she owned it.

She started coming to him with problems—practical things, systems that needed fixing. He'd solve them quietly, perfectly. She'd take his solutions and make them community policy.

"You could come to the meetings," she offered once.

"You could come see what I'm building," he countered.

She did. He did. She brought him into the world; he gave her a place to rest from it.`,
    dynamicDescription: "Private perfectionism meets public leadership, creating complementary coverage or value clash.",
    growthPath: "One supporting Eight's leadership, Eight respecting One's standards.",
    watchOut: "Eight dismissing One's concerns as petty, One criticizing Eight's methods."
  },
  {
    type1: 1, subtype1: 'sp', type2: 8, subtype2: 'sx',
    title: "The Careful Perfectionist and The Passionate Possessor",
    subtitle: "Anxious standards meet overwhelming intensity",
    narrative: `She was checking the locks for the third time when he appeared behind her.

"You're safe," he said, his presence filling the doorway. "I'm here."

She startled. His intensity always startled her—the way he looked at her like she was the only thing that existed.

"The deadbolt sticks," she said weakly.

"Then I'll fix it. Or I'll stand here all night. Nobody gets through me."

She believed him. That was the terrifying part. He meant every word. His love was a force—protective, possessive, absolute.

"You scare me sometimes," she admitted.

"I know." He didn't apologize. "But nothing else will ever scare you. I promise that."

She wanted to organize her feelings into neat categories: healthy, unhealthy, appropriate, too much. But he didn't fit her systems. He overwhelmed them.

Slowly, she stopped checking the locks. Not because the world got safer—but because he was standing guard, and she finally believed she could rest.

"You're too much," she said one night, leaning into him.

"You're worth too much," he replied.

His fire. Her order. Somehow, they found shelter in each other.`,
    dynamicDescription: "Cautious perfectionism meets overwhelming passion, creating stark contrast in energy and approach.",
    growthPath: "One finding strength in Eight's protection, Eight finding grounding in One's order.",
    watchOut: "Eight overwhelming One, One's anxiety frustrating Eight."
  },
  {
    type1: 1, subtype1: 'so', type2: 8, subtype2: 'sp',
    title: "The Social Reformer and The Survival Fighter",
    subtitle: "Public principles meet material power",
    narrative: `She organized the community forum on housing rights. He owned half the buildings on the block.

"Your tenants deserve better conditions," she said at the public meeting, her voice carrying the weight of moral certainty.

He leaned back, arms crossed. "My tenants have heat, water, and security. What do your meetings give them?"

"Dignity. A voice."

"Can they eat dignity?" He wasn't being cruel—just practical. Survival was his language.

After the meeting, he found her. "You're not wrong about the conditions. I'm not wrong about what it takes to survive."

She studied him—this blunt, powerful man who'd built everything from nothing. "Your methods are brutal."

"Your principles are expensive." He paused. "But maybe some things are worth paying for."

They started talking. Really talking. She learned how he'd fought his way to ownership. He learned what the fight had cost the people he'd stepped over.

"I'll fix the buildings," he said finally. "But you're going to help me understand what that actually means to them."

Principle met power. Both were changed.`,
    dynamicDescription: "Moral advocacy meets material dominance, creating different approaches to power.",
    growthPath: "One appreciating practical power, Eight appreciating principled approach.",
    watchOut: "One judging Eight's methods, Eight dismissing One's principles as naive."
  },
  {
    type1: 1, subtype1: 'so', type2: 8, subtype2: 'so',
    title: "The Principled Advocate and The Community Leader",
    subtitle: "Moral authority meets protective power",
    narrative: `Both cared about the community. But she led like a general—decisive, confrontational, willing to fight for what the group needed. He led like a judge—principled, measured, insisting on what was right.

"You're too soft," she said after he refused to pressure the difficult landlord.

"You're too aggressive," he said after she made three board members resign.

The nonprofit needed both, but they couldn't see it. Not until the crisis—when aggression alone would have fractured the fragile coalition and principles alone couldn't stop the threat.

She confronted the opposition directly, fierce and unyielding. He held the membership together through it, reminding them why they'd joined.

"I fight for them," she said finally, exhausted.

"I hold them together so you have something to fight for," he replied.

They looked at each other across the conference table—two leaders who'd been pulling in different directions, finally realizing they'd been building the same thing.

"I'll stop calling you soft if you stop calling me brutal," she offered.

"Deal. As long as you know I'm still right about the ethics."

She laughed. He almost did too. Same love. Different languages.`,
    dynamicDescription: "Moral authority meets protective power, creating powerful partnership or leadership clash.",
    growthPath: "One respecting Eight's protective strength, Eight respecting One's principled guidance.",
    watchOut: "Power struggle for leadership, One's criticism versus Eight's dominance."
  },
  {
    type1: 1, subtype1: 'so', type2: 8, subtype2: 'sx',
    title: "The Public Reformer and The Passionate Warrior",
    subtitle: "Social advocacy meets overwhelming intensity",
    narrative: `He stood in the doorway, watching her prepare for another evening meeting. Third one this week.

"Stay," he said. Not asking. Not demanding. Something in between.

"The education committee needs—"

"I need." His voice dropped, raw and honest. "I need you here tonight."

She paused, papers in hand. This was the tension that defined them: her mission to improve the world, his mission to claim her completely.

"You always have causes," he said. "When do I get to be your cause?"

"You're not a cause. You're a person."

"Then treat me like one."

She set down the papers. Looked at him—really looked. This man who commanded rooms, who bent the world to his will, standing here asking to be chosen over a committee meeting.

"One night," she said finally. "Tomorrow, I go back to my work."

He crossed the room in two steps, pulled her close. "Then I have one night to make you forget about tomorrow."

She never forgot her mission. But she learned to let him be part of it—his intensity fueling her conviction, her principles channeling his fire.`,
    dynamicDescription: "Public principles meet private intensity, creating tension between social mission and intimate power.",
    growthPath: "One meeting Eight's intensity privately, Eight supporting One's public mission.",
    watchOut: "Eight feeling second to causes, One feeling overwhelmed by Eight's demands."
  },
  {
    type1: 1, subtype1: 'sx', type2: 8, subtype2: 'sp',
    title: "The Passionate Reformer and The Territory Defender",
    subtitle: "Relationship intensity meets material power",
    narrative: `She wanted to transform their relationship into something transcendent. He wanted to build an empire they could live in.

"We need to talk about our communication patterns," she announced, her eyes blazing with reformer's zeal.

He looked up from the business plans spread across the table. "We need to talk about the property deal closing Friday."

"This is more important."

"This puts a roof over our heads."

They stared at each other—two intense people, passion flowing in different directions. She burned to perfect the bond between them; he burned to secure the ground beneath them.

The breakthrough came unexpectedly. She helped him negotiate a difficult deal, bringing her intensity to his territory. He sat through one of her transformation conversations, bringing his full presence to hers.

"You fight for us out there," she said afterward. "I never saw that as love before."

"You fight for us in here," he replied, tapping his chest. "I didn't know that was a battlefield."

Both warriors. Different fronts. Same war for what mattered most.`,
    dynamicDescription: "Intimate perfectionism meets territorial power, creating different but potentially complementary intensities.",
    growthPath: "One including material concerns in relationship care, Eight allowing relational transformation.",
    watchOut: "One's criticism challenging Eight's authority, Eight's dominance overwhelming One's agenda."
  },
  {
    type1: 1, subtype1: 'sx', type2: 8, subtype2: 'so',
    title: "The Intimate Reformer and The Community Commander",
    subtitle: "Relationship perfectionism meets group leadership",
    narrative: `She was the center of every room she entered. He wanted to be the center of her world.

"You missed dinner again," he said when she finally came home, still carrying the energy of the community meeting.

"The youth program needed—"

"I need." He caught himself. Tried again. "We need time. Just us."

She sat down heavily. "Do you know how many people depend on me out there?"

"Do you know I'm one of them?"

She looked at him—this man who wanted all of her when she'd given so much of herself away. His passion for their relationship felt suffocating sometimes. Her public mission felt like abandonment to him.

"I can't choose between them and you," she said finally.

"I'm not asking you to." He moved closer. "I'm asking to matter as much as they do."

They found their rhythm slowly. She brought him into her world—let him see what she was protecting. He learned to love the leader in her, not just the partner.

"I'll always have people who need me," she said.

"And I'll always need you most," he replied. "Can that be enough?"

It was. Just barely. But enough.`,
    dynamicDescription: "Intimate perfectionism meets public leadership, creating tension between relationship and community.",
    growthPath: "One accepting Eight's leadership role, Eight prioritizing intimate presence.",
    watchOut: "One feeling second to Eight's public role, Eight feeling trapped by One's relational demands."
  },
  {
    type1: 1, subtype1: 'sx', type2: 8, subtype2: 'sx',
    title: "The Passionate Reformer and The Possessive Warrior",
    subtitle: "Transformative perfectionism meets overwhelming passion",
    narrative: `The fights were legendary. So were the reconciliations.

"You never listen!" she shouted, her passion for improving them crashing against his passion for possessing them.

"You never stop pushing!" he roared back, his need for control meeting her need for transformation.

They circled each other like two forces of nature—she determined to perfect what they had, he determined to claim it completely. Neither could dominate. Neither would surrender.

"Why do you have to change everything?" he demanded.

"Why do you have to control everything?" she countered.

The silence after their battles was its own kind of intimacy. Two people who'd spent everything, lying exhausted in the ruins of their argument.

"I push because I love you," she said quietly into the dark.

"I hold on because I love you," he replied.

They learned, slowly, that her criticism was care and his intensity was devotion. That transformation and possession weren't opposites—they were two ways of saying mine.

"I'll never stop trying to make us better," she warned.

"I'll never stop wanting all of you," he promised.

It wasn't peaceful. But it was theirs. And that was everything.`,
    dynamicDescription: "Maximum intensity pairing—transformative perfectionism meets overwhelming possession—creating powerful but volcanic dynamic.",
    growthPath: "One accepting Eight's intensity as love, Eight accepting One's criticism as care.",
    watchOut: "Power struggles over control, intensity becoming destructive."
  },

  // === TYPE 1 WITH TYPE 9 SUBTYPES (9 stories) ===
  {
    type1: 1, subtype1: 'sp', type2: 9, subtype2: 'sp',
    title: "The Practical Perfectionist and The Comfortable Peacekeeper",
    subtitle: "Correct systems meet sustainable peace",
    narrative: `She arranged the kitchen with precision—everything in its optimal place. He made himself comfortable on the couch, content to let the day unfold however it would.

"The pantry needs reorganizing," she said, eyeing the shelves.

"It's fine," he replied, not looking up from his book.

"It's not fine. The pasta is with the canned goods."

"Does the pasta mind?"

She felt the familiar frustration—his acceptance of disorder, his peace with imperfection. He felt the familiar tension—her endless improvements, her inability to just be.

But their home was solid. Built by her systems and his steadiness. She kept things right; he kept things calm. Neither could do what the other did.

One evening, she sat down beside him without mentioning the crooked picture frame.

"You're not fixing it," he observed.

"I'm trying something new."

He put down his book. Really looked at her. "That must be hard."

"It is." She leaned into him. "But you make it worth trying."

He smiled. "And you make everything work better. Even when I don't notice."

Improvement met acceptance. Somehow, both found room to breathe.`,
    dynamicDescription: "Practical perfectionism meets comfortable peace, sharing groundedness but differing on standards.",
    growthPath: "One accepting peaceful imperfection, Nine engaging with standards that matter.",
    watchOut: "One's criticism disturbing Nine's peace, Nine's acceptance frustrating One's improvement."
  },
  {
    type1: 1, subtype1: 'sp', type2: 9, subtype2: 'so',
    title: "The Private Perfectionist and The Social Harmonizer",
    subtitle: "Personal standards meet group peace",
    narrative: `He kept his workshop immaculate. She kept the peace at every gathering—smoothing tensions, making everyone feel included, merging with whatever the group needed.

"You agree with everyone," he said after a dinner party where she'd nodded along with contradictory opinions all night.

"I see everyone's point," she said.

"But what's your point?"

She paused. It was a question she rarely asked herself. Her role was harmony, not position.

He retreated to his shop, organizing tools that were already organized. She floated through social circles, belonging everywhere and nowhere.

But slowly, they found each other's value. She brought home friends who warmed his solitary world. He gave her a space where she could stop performing peace.

"You don't have to agree with me," he said one night. "You can just be here."

"I don't know how to do that."

"I'll teach you. And you can teach me how to let people in."

She started having opinions. He started attending gatherings. Neither was natural at it—but they had each other for practice.`,
    dynamicDescription: "Private perfectionism meets social harmony, creating different orientations to improvement.",
    growthPath: "One appreciating social harmony, Nine developing personal standards.",
    watchOut: "One dismissing Nine's harmonizing, Nine finding One's standards divisive."
  },
  {
    type1: 1, subtype1: 'sp', type2: 9, subtype2: 'sx',
    title: "The Careful Perfectionist and The Merged Partner",
    subtitle: "Anxious standards meet complete fusion",
    narrative: `She organized their life down to the minute. He disappeared into whatever she wanted.

"What do you think about the blue curtains?" she asked.

"Whatever you prefer."

"No, what do YOU think?"

He blinked, unable to locate an opinion. When had he stopped having preferences?

She started noticing—how he echoed her choices, adopted her routines, became a shadow of her structure. It should have been comfortable. Instead, it was lonely.

"I need you to exist," she said one night. "Not just agree with me."

"I don't know how anymore." His voice was small. "I've been yours so completely I forgot who I was before."

She softened—her perfectionism melting into something gentler. "Let's find out together."

She started asking questions without right answers. What did morning feel like to him? What did he dream about before they met? Slowly, opinions emerged—tiny at first, then braver.

"I actually hate the blue curtains," he admitted one day.

She laughed, delighted. "Finally. Something real."

He learned to stay himself while staying close. She learned that love isn't agreeing—it's two people choosing each other, not one person choosing to disappear.`,
    dynamicDescription: "Cautious perfectionism meets complete merger, creating potential for complementarity or enabling.",
    growthPath: "One drawing Nine out as individual, Nine bringing presence to One's standards.",
    watchOut: "Nine losing self to One's agenda, One missing Nine's absence."
  },
  {
    type1: 1, subtype1: 'so', type2: 9, subtype2: 'sp',
    title: "The Social Reformer and The Comfortable Retreater",
    subtitle: "Public principles meet private peace",
    narrative: `He organized community meetings. She napped.

"There's a petition that needs signatures," he announced, coming through the door with energy she didn't have.

"There's a couch that needs sitting," she replied, not moving.

He saw apathy, withdrawal, a woman who wouldn't engage with the world. She saw exhaustion, endless demands, a man who couldn't let anything rest.

"Don't you care about anything?" he demanded.

"I care about peace. You keep disturbing it."

They circled each other like opposing planets—his orbit always pushing outward, hers always pulling in.

Then he burned out. Really crashed. His body forced the rest his principles wouldn't allow. She was there—patient, soft, holding space for stillness he'd never permitted himself.

"How do you do this?" he asked, lying beside her on the couch. "Just... exist?"

"Practice," she smiled. "Years of resisting people like you."

He laughed. Actually laughed, without an agenda.

She started attending one cause—just one. He started defending her right to rest as fiercely as he'd defended anything.

"Retreat isn't surrender," she taught him.

"Engagement isn't war," he showed her.

They learned that peace and purpose aren't opposites—they're dance partners.`,
    dynamicDescription: "Public advocacy meets private retreat, creating tension between engagement and withdrawal.",
    growthPath: "One allowing peaceful respite, Nine supporting social engagement.",
    watchOut: "One dragging Nine into unwanted engagement, Nine's withdrawal frustrating One."
  },
  {
    type1: 1, subtype1: 'so', type2: 9, subtype2: 'so',
    title: "The Principled Advocate and The Social Harmonizer",
    subtitle: "Moral authority meets group mediator",
    narrative: `She had principles. He had peace.

"We need to take a stand," she announced after the town hall meeting. "That proposal is wrong."

"We need to find common ground," he countered. "Fighting will just make everyone dig in."

She saw him as spineless. He saw her as divisive. Two people who loved their community, tearing at its seams with their conflicting approaches.

"Your peace enables injustice," she accused.

"Your justice destroys peace," he replied.

They stopped speaking for a week. The silence cost them both—she had no bridge-builder, he had no backbone.

The breakthrough came at their daughter's school board meeting. A real conflict, real stakes. They watched each other work.

She articulated the principles clearly—what was right, what was wrong, what couldn't be compromised. He translated for both sides—honoring concerns, finding paths forward, holding space for difficulty.

Together, they resolved what neither could have alone.

"You gave my harmony teeth," he admitted afterward.

"You gave my standards wings," she replied.

Direction found diplomacy. Peace found principle. They stopped working against each other and started working as a team—she the compass, he the current, both carrying the ship.`,
    dynamicDescription: "Moral leadership meets social harmony, creating complementary roles or value clash.",
    growthPath: "One bringing harmony to principles, Nine bringing standards to mediation.",
    watchOut: "One's standards disrupting Nine's harmony, Nine's accommodation frustrating One's principles."
  },
  {
    type1: 1, subtype1: 'so', type2: 9, subtype2: 'sx',
    title: "The Public Reformer and The Merged Partner",
    subtitle: "Social advocacy meets intimate fusion",
    narrative: `He had causes. She had him.

"What matters to you?" he asked one evening, genuinely curious.

"You matter to me."

"No, I mean... beyond me. Beyond us. What do you believe in?"

She searched for an answer and found only his reflection. When had she stopped being separate?

He noticed it slowly—how she adopted his positions, joined his committees, echoed his language. At first it felt like support. Then it felt like losing her.

"I can't have a partner who's just my shadow," he said, not unkindly. "I need someone to come home to."

"I don't know how to be separate and close at the same time."

So they practiced. He asked her opinions before sharing his. She sat with questions until her own answers emerged. Slowly, she developed her own small causes—different from his, sometimes conflicting.

"I actually think you're wrong about the zoning thing," she said one day.

He grinned, delighted. "Finally. A real person."

She kept merging—but with boundaries now. Choosing to blend, not disappearing into it. He kept advocating—but for two now, making sure she had a world to return from.

"Support me by being yourself," he asked.

"Love me by letting me disagree," she answered.`,
    dynamicDescription: "Public principles meet private merger, creating potential for support or disappearance.",
    growthPath: "One seeing Nine as individual, Nine supporting One while maintaining self.",
    watchOut: "Nine disappearing into One's agenda, One losing connection to Nine as person."
  },
  {
    type1: 1, subtype1: 'sx', type2: 9, subtype2: 'sp',
    title: "The Passionate Reformer and The Comfortable Retreater",
    subtitle: "Relationship intensity meets peaceful withdrawal",
    narrative: `He wanted everything to be better. She wanted everything to be still.

"We could redecorate," he suggested, eyes scanning the room for improvements. "New paint. Better furniture. Transform this space."

"I like it exactly as it is." She pulled the blanket tighter, protecting her cocoon.

He saw stagnation, resistance to growth. She saw assault on her peace, a man who couldn't let things be.

"Why won't you grow with me?" he asked, frustrated.

"Why won't you rest with me?" she pleaded.

They nearly destroyed each other—his intensity crashing against her walls, her withdrawal starving his need for engagement.

Then one day he collapsed next to her on the couch—just collapsed, mid-transformation plan, energy finally spent. She held him without asking questions, without demanding he be different. Just held him.

"I'm so tired," he admitted.

"I know," she said. "I've been waiting for you to stop."

He learned that her peace wasn't resistance—it was sanctuary. She learned that his intensity wasn't attack—it was devotion looking for a home.

"Transform me slowly," she offered.

"Rest with me sometimes," he accepted.

Her stillness became his harbor. His passion became her occasional adventure. Between them, peace and fire learned to share a house.`,
    dynamicDescription: "Transformative intensity meets comfortable peace, creating challenge between engagement and withdrawal.",
    growthPath: "One accepting Nine's peace, Nine engaging with One's transformation.",
    watchOut: "One's intensity overwhelming Nine, Nine's withdrawal frustrating One."
  },
  {
    type1: 1, subtype1: 'sx', type2: 9, subtype2: 'so',
    title: "The Intimate Reformer and The Social Harmonizer",
    subtitle: "Relationship perfectionism meets group focus",
    narrative: `He wanted her wholly. She belonged to her communities.

"Stay home tonight," he asked, reaching for her as she grabbed her keys.

"There's a conflict at the community center. They need a mediator."

"I need you more."

She paused at the door. "Do you? Or do you just need to be the only one who needs me?"

The question hung between them—heavy, uncomfortable, true.

He saw a woman spread too thin. She saw a man trying to contain her. They fought about loyalty, about priorities, about what love meant when it had to be shared.

"I can't be your only peace," she finally said. "I have to make peace everywhere."

"I can't be one of many," he countered. "I need to matter most."

They sat with impossible positions until something shifted.

"What if you came with me?" she asked. "Not to own my attention, but to understand why this matters?"

He went. Watched her smooth conflicts, bridge divides, create harmony from chaos. Saw that this was her gift—not abandonment, but expansion.

"You matter most," she told him afterward. "But mattering most doesn't mean mattering alone."

He learned to share her with her calling. She learned to save her deepest harmonizing for him.`,
    dynamicDescription: "Intimate perfectionism meets social harmony, creating tension between relationship and community.",
    growthPath: "One accepting Nine's social nature, Nine prioritizing intimate depth.",
    watchOut: "One feeling neglected for Nine's groups, Nine feeling trapped by One's demands."
  },
  {
    type1: 1, subtype1: 'sx', type2: 9, subtype2: 'sx',
    title: "The Passionate Reformer and The Merged Soul",
    subtitle: "Transformative perfectionism meets complete fusion",
    narrative: `He transformed. She dissolved.

At first it felt like perfect compatibility—his visions became hers, his improvements became their projects, his passion met no resistance. She agreed with everything. Supported everything. Became everything he wanted.

Then one morning he reached for her and found only a mirror.

"Who are you?" he asked, suddenly afraid.

"I'm yours," she said, meaning it as love.

"No. Who are you when you're not being mine?"

She couldn't answer. The merger had been so complete that the person who'd merged was gone.

"I've loved you out of existence," he whispered, horrified.

"I let myself disappear," she admitted. "It felt like love."

The rebuilding took years. He learned to stop transforming her—to wait, to ask, to resist his urge to improve what was already whole. She learned to maintain a self worth merging—to disagree, to want, to exist separately enough that choosing togetherness meant something.

"Stay yourself," he begged. "Even when we're close."

"Transform yourself," she offered. "I'll watch without disappearing."

They remained intense—but two intensities now, meeting and dancing, never one consuming the other. Passion finally found partnership instead of ownership.`,
    dynamicDescription: "Transformative intensity meets complete merger, creating risk of One overwhelming Nine into non-existence.",
    growthPath: "One drawing Nine out as individual, Nine maintaining self within the merge.",
    watchOut: "Nine completely lost in One's transformation agenda, One leading a partner who's no longer there."
  },

  // ============================================
  // TYPE 2 CROSS-TYPE PAIRINGS
  // ============================================

  // === TYPE 2 WITH TYPE 3 ===
  {
    type1: 2, subtype1: 'sp', type2: 3, subtype2: 'sp',
    title: "The Practical Helper and The Diligent Achiever",
    subtitle: "Boundaried nurturing meets workaholic excellence",
    narrative: `She packed his lunch every morning—protein-heavy, exactly what he needed for the long hours ahead. He noticed, appreciated, and kept working.

Their apartment ran like a well-oiled machine. Bills paid on time. Groceries stocked. His suits pressed. Her contributions invisible but essential.

"Thank you for dinner," he'd say, already opening his laptop.

"Of course." She'd clear the plates, satisfied that her help mattered.

Months passed in productive harmony. Then one evening she paused at the kitchen sink. "When did we last talk? Really talk?"

He looked up, genuinely confused. "We talk every day."

"About tasks. About schedules." Her voice caught. "I don't know how you feel about anything anymore."

The silence stretched. Both realized they'd built a partnership of function—efficient, secure, emotionally hollow. She gave practically; he achieved practically. Somewhere between the meal prep and the spreadsheets, they'd forgotten to actually connect.

"Tell me something real," she finally said. "Something that has nothing to do with accomplishing."`,
    dynamicDescription: "Practical helping meets practical achievement, creating productive but potentially emotionally distant partnership.",
    growthPath: "Two recognizing own needs beyond helping, Three valuing relationship as much as work.",
    watchOut: "Relationship becoming purely functional, both too focused on practical matters to connect emotionally."
  },
  {
    type1: 2, subtype1: 'sp', type2: 3, subtype2: 'so',
    title: "The Protective Helper and The Social Star",
    subtitle: "Boundaried care meets public success",
    narrative: `She ironed his shirts before interviews. She rehearsed his talking points over breakfast. She waited at home while he dazzled the board.

"I got it!" He burst through the door. "They loved me."

"I knew they would." She smiled, already planning the celebration dinner.

Months later, at his company party, someone asked how they'd met. He launched into a story where he was the protagonist of their romance too.

Driving home, she was quiet.

"What's wrong?"

"You never mentioned me. How I helped you prepare. How I believed in you when you didn't."

"I thanked you in my head."

"I'm not in your head. I'm right here. And I'm starting to feel invisible."

He reached for her hand. For the first time, he saw the scaffolding holding up his shine—and the person exhausted from being only that.

"Next time," he said quietly, "I tell them about you first."`,
    dynamicDescription: "Behind-scenes support meets public performance, creating complementary but potentially unequal partnership.",
    growthPath: "Three acknowledging Two's contribution, Two finding own visibility.",
    watchOut: "Two feeling invisible behind Three's shine, Three taking support for granted."
  },
  {
    type1: 2, subtype1: 'sp', type2: 3, subtype2: 'sx',
    title: "The Practical Nurturer and The Magnetic Achiever",
    subtitle: "Careful giving meets seductive success",
    narrative: `He walked into the room like he owned it. She noticed immediately—everyone did.

"Let me help you with that project," she offered after he'd charmed his way into her orbit.

His smile could have powered the building. "You'd do that for me?"

She would. But she wouldn't lose herself doing it.

Weeks later, he pushed for more. "Cancel your plans tonight. I need you at this dinner."

"I have plans."

"But this is important." The charm turned up, full wattage.

"So are my plans." She didn't waver.

He wasn't used to limits. People gave him everything. But something about her boundaries made him feel safer than all the endless yeses ever had.

"Tomorrow, then?" he asked, genuinely this time.

"Tomorrow works."

He learned her limits weren't rejection—they were architecture. And she learned that underneath his magnetism was someone who'd never been told no with love before.`,
    dynamicDescription: "Boundaried support meets magnetic ambition, testing whether charm can coexist with limits.",
    growthPath: "Three accepting boundaried love, Two allowing more vulnerability.",
    watchOut: "Three pushing against Two's boundaries, Two feeling manipulated by Three's charm."
  },
  {
    type1: 2, subtype1: 'so', type2: 3, subtype2: 'sp',
    title: "The Social Connector and The Hard Worker",
    subtitle: "Networking nurture meets quiet achievement",
    narrative: `She knew everyone at the gala. He knew no one—and preferred it that way.

"Come meet the Hendersons," she urged. "They need a contractor."

"I'd rather let my work speak for itself."

She paused mid-stride. "Your work is excellent. But nobody knows it exists."

He bristled. All those late nights, the meticulous craftsmanship—wasn't that enough?

"I'm not performing for strangers," he said quietly.

"I'm not asking you to perform. I'm asking you to let people see what I already see."

He met the Hendersons. They hired him within a week.

"You were right," he admitted later.

"I usually am." She smiled. "But I couldn't do what you do. I connect people to things worth connecting to."

He realized her networking wasn't shallow—it was the bridge his work needed. And she realized his solitude wasn't coldness—it was where real value got forged.`,
    dynamicDescription: "Social networking meets private achievement, creating different comfort zones around visibility.",
    growthPath: "Two appreciating Three's quiet dedication, Three engaging with Two's social world.",
    watchOut: "Two pushing Three into unwanted social situations, Three isolating from Two's network."
  },
  {
    type1: 2, subtype1: 'so', type2: 3, subtype2: 'so',
    title: "The Social Helper and The Social Climber",
    subtitle: "Influence through giving meets influence through winning",
    narrative: `They were the couple everyone wanted to be. She knew the right people; he won all the prizes.

"We should throw a fundraiser," she said over breakfast. "I can get the mayor's office."

"Perfect. I'll announce my award that night." He was already drafting remarks.

Their calendars synced like military operations. Her networking fed his opportunities. His achievements elevated her access. Together, they were unstoppable.

Until the night she watched him accept another award. "Special thanks to my incredible wife," he said. "My behind-the-scenes champion."

Behind the scenes. The phrase lodged like a splinter.

"Am I your partner or your publicist?" she asked in the car.

"What? We're a team."

"A team where you score and I pass. When do I get to shine?"

He went quiet. He'd never noticed how the spotlight only landed on him.

"Next event," he said finally, "you give the speech. I'll work the room."

For the first time, they competed for something real: who could lift the other higher.`,
    dynamicDescription: "Two forms of social ambition creating either powerful alliance or competitive tension.",
    growthPath: "Finding shared purpose beyond status, valuing each other beyond social utility.",
    watchOut: "Relationship becoming strategic alliance, competing for social position, losing genuine intimacy to image management."
  },
  {
    type1: 2, subtype1: 'so', type2: 3, subtype2: 'sx',
    title: "The Community Helper and The Captivating Star",
    subtitle: "Social nurturing meets personal magnetism",
    narrative: `She ran the neighborhood association, the school fundraiser, three book clubs. Everyone's helper, everyone's friend.

He walked into her charity event and left with half the room wanting his number.

"You could help with the silent auction," she suggested later.

"I could." His smile was designed for close range. "Or you could help me with something more interesting."

She found herself pulled toward him despite herself. But when they started dating, she noticed: his charm was always aimed at one person at a time, while her attention dispersed across dozens.

"You spend more time with strangers than with me," he said one night.

"They're not strangers. They're my community."

"And what am I?"

She paused. She'd never had to choose before.

"You're the person I come home to. But I can't shrink my world to fit in your spotlight."

He considered this. "Then teach me to share the light."

They learned: her breadth wasn't betrayal. His focus wasn't possessiveness. Just different ways of shining.`,
    dynamicDescription: "Wide social care meets focused personal charm, creating tension between breadth and depth of attention.",
    growthPath: "Three engaging with Two's community, Two giving Three focused attention.",
    watchOut: "Three jealous of Two's wide social bonds, Two feeling Three's charm is manipulation."
  },
  {
    type1: 2, subtype1: 'sx', type2: 3, subtype2: 'sp',
    title: "The Intense Lover and The Quiet Achiever",
    subtitle: "Seductive devotion meets modest success",
    narrative: `She loved like a bonfire. He worked like a clock.

"I made you dinner," she said, candles lit, wine poured, wearing his favorite dress.

"That's sweet." He kissed her forehead, eyes already on his laptop. "Just need to finish this report."

She watched him disappear into spreadsheets. The candles burned down while she ate alone.

"Do you even want me here?" she finally asked.

He looked up, confused. "Of course. You're my home base."

"I don't want to be a base. I want to be your world."

The silence stretched. She burned too hot; he ran too cool. But somewhere beneath his task lists was a man who'd never learned that work couldn't substitute for presence.

"Teach me," he said quietly. "How to show up the way you need."

She smiled for the first time in weeks. "Put the laptop away. Just for tonight. Let me love you without competing with a deadline."

He closed it. It was the hardest thing he'd done all week. And somehow, also the most successful.`,
    dynamicDescription: "Relationship intensity meets work dedication, creating imbalance between emotional and practical focus.",
    growthPath: "Two finding security in Three's steady presence, Three opening to Two's emotional depth.",
    watchOut: "Two feeling abandoned for Three's work, Three feeling suffocated by Two's intensity."
  },
  {
    type1: 2, subtype1: 'sx', type2: 3, subtype2: 'so',
    title: "The Devoted Lover and The Public Success",
    subtitle: "Intimate fusion meets social achievement",
    narrative: `She wanted to be his everything. He wanted to be everyone's something.

"Skip the conference," she whispered, pulling him back to bed. "Stay with me."

"I can't. The keynote—"

"There will always be another speech." Her eyes searched his. "Will there always be another me?"

He hesitated. She was his sanctuary, the one person who saw past the performance. But the audience was waiting, and he needed them too—their applause, their proof that he mattered.

"I'll be back tomorrow night."

She let him go. But something shifted.

When he returned, triumphant with praise, she was packing a bag. "I can't keep competing with everyone else for your attention."

"You're not competing. You already won."

"Then why does it feel like losing?"

He set down his award. For the first time, the trophy felt lighter than her absence would.

"Stay," he said. "I'll learn to be present. Really present."

It took months. But slowly, he discovered her devotion was worth more than any standing ovation.`,
    dynamicDescription: "Desire for intimate centrality meets desire for public recognition, creating tension over attention.",
    growthPath: "Two finding security in Three's private devotion, Three prioritizing intimacy alongside achievement.",
    watchOut: "Two jealous of Three's public, Three feeling trapped by Two's demands."
  },
  {
    type1: 2, subtype1: 'sx', type2: 3, subtype2: 'sx',
    title: "The Seductive Giver and The Seductive Winner",
    subtitle: "Alluring devotion meets alluring success",
    narrative: `They met like two fires colliding. She seduced by giving everything; he seduced by being everything worth wanting.

"I've never met anyone like you," she breathed, already imagining how she'd make him need her.

"I know," he smiled, already calculating how to make her want him more.

The chemistry was immediate and overwhelming. She cooked elaborate meals, remembered his preferences, anticipated his needs. He dressed impeccably, said exactly the right things, made her feel chosen among thousands.

But who was taking care of whom?

"You're always giving," he noticed one night. "What do you actually want?"

"To be wanted the way you're wanted."

He paused. He'd never considered that his shine might cast her in shadow.

"I want you," he said slowly, "not because you give me things. Because you're you."

"Show me," she challenged. "Without performing."

He took off the charm like a costume. She stopped serving. Two people stood there, raw and real.

"This is terrifying," he admitted.

"This is real," she replied.

They chose real.`,
    dynamicDescription: "Two forms of seductive energy creating intense attraction with potential competition for desired position.",
    growthPath: "Moving beyond seduction to genuine intimacy, being real rather than performing.",
    watchOut: "Relationship staying at surface seduction, competing for who is more desired, image over substance."
  },

  // === TYPE 2 WITH TYPE 4 ===
  {
    type1: 2, subtype1: 'sp', type2: 4, subtype2: 'sp',
    title: "The Practical Nurturer and The Suffering Artist",
    subtitle: "Careful helping meets enduring through pain",
    narrative: `She noticed he never asked for anything. Coffee appeared when needed. Dinner was ready. He said thank you and returned to his work, carrying something heavy she couldn't name.

"Let me help," she offered, watching him stare at a blank canvas.

"With what?"

"Whatever's making you so quiet."

He didn't know how to explain that silence was where he processed everything—grief, beauty, the overwhelming weight of being alive. He didn't dramatize. He endured.

"I'm fine," he said. "Really."

She didn't believe him, but stopped pushing. Instead, she left tea beside his easel. Folded laundry without asking. Small acts of care he received without comment.

"You keep giving," he said finally, months later. "Even when I don't give back."

"I know."

"Doesn't that bother you?"

She considered. "I'd rather be here, giving into your silence, than not here at all."

He finally let her sit beside him. Two people comfortable with quiet. Sometimes that was enough.`,
    dynamicDescription: "Practical care meets silent suffering, creating reserved partnership where help is offered but not always accepted.",
    growthPath: "Four allowing help without feeling diminished, Two accepting Four's need for independent processing.",
    watchOut: "Two feeling rejected by Four's self-sufficiency, Four feeling intruded upon by Two's help."
  },
  {
    type1: 2, subtype1: 'sp', type2: 4, subtype2: 'so',
    title: "The Boundaried Helper and The Social Outsider",
    subtitle: "Strategic nurturing meets community-seeking difference",
    narrative: `"Come to the party with me," she said, reaching for his coat.

He hesitated at the door. "I don't fit in those crowds."

"You fit with me." She squeezed his hand. "That's enough."

But at the party, she watched him drift to corners, observing everyone like an anthropologist studying a foreign tribe. He belonged nowhere, and something in him needed that to be true.

"Why won't you just try?" she asked on the way home.

"I am trying. Every day. You don't see it because you want me to belong the way you do."

She fell silent. Her help was practical—introductions, small talk tips, the right clothes. His need was deeper: to be seen as different and loved anyway.

"I can't fix your loneliness, can I?" she realized.

"No." His voice was gentle. "But you can sit in it with me."

She'd never considered that witnessing could be its own form of care. That some people didn't need solutions—just someone willing to stay.

"Okay," she said. "Teach me how to do that."`,
    dynamicDescription: "Practical helping meets emotional alienation, creating potential mismatch between what's offered and what's needed.",
    growthPath: "Two learning to witness rather than fix, Four accepting practical care as valid love.",
    watchOut: "Two frustrated by inability to solve Four's pain, Four feeling unseen in practical helping."
  },
  {
    type1: 2, subtype1: 'sp', type2: 4, subtype2: 'sx',
    title: "The Careful Giver and The Passionate Sufferer",
    subtitle: "Boundaried nurturing meets intense emotional depth",
    narrative: `His emotions came in waves—sometimes tsunamis. She built careful walls.

"I feel like I'm drowning," he said one night, tears streaming. "Everything is too much."

She wanted to fix it. Make tea. Suggest therapy. Create an action plan. But none of her practical tools could hold the ocean.

"I don't know how to help you," she admitted.

"Just stay."

She stayed. But after hours of his grief pouring out, she felt her own reserves depleting. "I need to sleep," she finally said.

His face crumpled. "You're leaving me alone with this?"

"I'm not leaving. I'm taking care of myself so I can come back."

He didn't understand. She felt inadequate.

But over months, something shifted. Her steadiness became an anchor when his feelings threatened to carry him away. His depth cracked open something in her she'd sealed shut.

"I'm sorry I'm so much," he said one morning.

"You're exactly the right amount," she replied, surprising herself. "I just needed to learn how to swim."`,
    dynamicDescription: "Measured care meets intense emotion, testing whether stability can meet depth.",
    growthPath: "Two stretching emotional capacity, Four appreciating steady presence.",
    watchOut: "Four overwhelming Two's boundaries, Two feeling inadequate to Four's emotional needs."
  },
  {
    type1: 2, subtype1: 'so', type2: 4, subtype2: 'sp',
    title: "The Social Nurturer and The Enduring Artist",
    subtitle: "Community caretaking meets solitary suffering",
    narrative: `Her house was always full of people. His studio was always empty.

"Come to the barbecue," she pleaded. "Everyone's asking about you."

"Tell them I'm working." He didn't look up from his canvas.

"You're always working. Or hiding." She sat on the edge of his stool. "I don't understand why you push everyone away."

"I don't push you away."

"Only because I refuse to leave."

He set down his brush. The truth was simpler than she imagined: crowds exhausted him. Small talk felt like sandpaper. The work required solitude, and solitude required her absence.

"Your world is loud," he finally said. "Mine is quiet. I don't know how to live in both."

She considered this. "What if I was quieter sometimes? And you were louder sometimes?"

"Like a dimmer switch?"

"Like compromise."

It wasn't perfect. She still hosted; he still retreated. But she learned to close the door softly. And he learned to open it, occasionally, when the house grew full.`,
    dynamicDescription: "Social warmth meets private endurance, creating challenge between engagement and solitude.",
    growthPath: "Two respecting Four's solitary needs, Four engaging with Two's social world selectively.",
    watchOut: "Two feeling rejected by Four's withdrawal, Four feeling overwhelmed by Two's social demands."
  },
  {
    type1: 2, subtype1: 'so', type2: 4, subtype2: 'so',
    title: "The Community Helper and The Social Outsider",
    subtitle: "Belonging through giving meets belonging through difference",
    narrative: `She fit in everywhere. He fit in nowhere—by design.

"You could just be normal," she said after another party where he'd worn vintage clothes and quoted obscure poets.

"I could. But then I wouldn't be me."

"Is being you worth being alone?"

He turned to face her. "Is fitting in worth disappearing?"

The question landed. She'd spent years making herself useful, needed, central—and somewhere along the way, she'd stopped asking what she actually wanted.

"I don't understand you," she admitted. "You have so much to offer. Why insist on being strange?"

"Because strange is honest. I'd rather be genuinely weird than falsely accepted."

She watched him walk away, envying something she couldn't name. The next day, she wore a shirt she actually liked instead of one that matched everyone else's.

"I noticed," he said with a small smile.

"Noticed what?"

"You chose yourself today."

It was the beginning of a new education: how to belong and stand apart, how to help without losing, how to be both needed and known.`,
    dynamicDescription: "Two approaches to belonging creating understanding of social pain but different solutions.",
    growthPath: "Two appreciating authentic differentiation, Four appreciating connection through service.",
    watchOut: "Two seeing Four as needlessly alienated, Four seeing Two as inauthentically conformist."
  },
  {
    type1: 2, subtype1: 'so', type2: 4, subtype2: 'sx',
    title: "The Social Giver and The Intense Individualist",
    subtitle: "Community nurturing meets passionate depth",
    narrative: `Her phone buzzed constantly. His eyes tracked her like she was the only person in the room.

"You have so many friends," he observed, something sharp in his voice.

"I care about a lot of people."

"Do you care about any of them the way you should care about me?"

She paused. He wanted depth she wasn't sure she had—the kind of focused, consuming attention that excluded everyone else.

"I can't be your only person," she said carefully. "I have a community."

"And I want to be your universe." His honesty was brutal. "Is that so wrong?"

"It's not wrong. It's just... a lot."

He pulled away. She felt him receding into that private world where he nursed wounds no one else could see.

"What if I gave you one hour?" she offered. "Every day. Just us. No phones."

"One hour?"

"My undivided attention. My real presence. Can that be enough?"

He considered. "It's more than I've ever had."

They began meeting at seven each evening. She learned to be singular. He learned to share.`,
    dynamicDescription: "Broad social care meets focused emotional intensity, creating tension between breadth and depth.",
    growthPath: "Two giving Four unique focused attention, Four appreciating Two's wider heart.",
    watchOut: "Four feeling like one of many, Two feeling Four is too demanding of exclusive attention."
  },
  {
    type1: 2, subtype1: 'sx', type2: 4, subtype2: 'sp',
    title: "The Devoted Lover and The Stoic Sufferer",
    subtitle: "Intense giving meets private enduring",
    narrative: `She loved like wildfire—all-consuming, immediate, impossible to ignore. He grieved like stone—solid, silent, eroding so slowly no one noticed.

"Talk to me," she pleaded. "Tell me what you're feeling."

"I'm feeling fine."

"You're not fine. You haven't been fine for months. Let me in."

He couldn't explain that letting her in meant letting everything out—and he wasn't sure either of them would survive the flood. So he stayed quiet, and she stayed frustrated.

"Why won't you let me love you?" she finally asked, voice breaking.

"You do love me. I feel it every day."

"Then why does it feel like you're pushing me away?"

"Because your love is loud. And I process in silence."

She wanted to argue. But she watched him work, day after day, steadily creating beautiful things from his invisible pain. Maybe silence was his language too.

"Teach me," she said finally. "Teach me to love you quieter."

He reached for her hand. It was the most he'd given in months.`,
    dynamicDescription: "Passionate devotion meets stoic reserve, testing whether intensity can meet privacy.",
    growthPath: "Two respecting Four's processing style, Four opening to Two's devotion.",
    watchOut: "Two feeling rejected by Four's withdrawal, Four feeling suffocated by Two's intensity."
  },
  {
    type1: 2, subtype1: 'sx', type2: 4, subtype2: 'so',
    title: "The Passionate Helper and The Social Artist",
    subtitle: "Intimate devotion meets community-seeking uniqueness",
    narrative: `She wanted to be his muse. He wanted to be everyone's mystery.

"Stay home tonight," she murmured. "Stay with me."

"I have the gallery opening. My work is showing."

"Your work will show without you."

"But I won't be seen."

She pulled back. This was the heart of it: he needed witnesses. Not for approval—for existence. His uniqueness required an audience to be real.

"Am I not enough?" The question came out smaller than she intended.

"You're everything," he said, and meant it. "But I'm nothing if I only exist in this room."

She dressed and went with him. Watched him circulate through admirers, playing the fascinating artist. Felt invisible beside his spotlight.

On the drive home, she was quiet.

"I saw you," he said. "Every minute. Even when I wasn't looking."

"That's not the same as being here."

"Teach me the difference."

They spent the next month learning: how to be seen in public and present in private, how to shine for crowds and still illuminate each other.`,
    dynamicDescription: "Intimate focus meets social creative identity, creating competition between relationship and world.",
    growthPath: "Two supporting Four's social expression, Four prioritizing intimate connection.",
    watchOut: "Two jealous of Four's social seeking, Four feeling trapped by Two's relationship demands."
  },
  {
    type1: 2, subtype1: 'sx', type2: 4, subtype2: 'sx',
    title: "The Passionate Giver and The Passionate Feeler",
    subtitle: "Intense devotion meets intense emotion",
    narrative: `They recognized each other instantly—two storms seeking landfall.

"I've never felt understood before," she whispered the first night, already giving him everything.

"I've never felt felt before," he replied, already drowning in her.

The passion was immediate and overwhelming. She gave with hurricane force; he received with oceanic depth. Every touch was confession. Every fight was opera. Every reconciliation felt like rebirth.

"You're consuming me," he said one morning, not complaining.

"You're consuming me first," she countered.

They couldn't tell where one ended and the other began. That was the problem and the point.

"Who takes care of whom?" she asked after a particularly devastating argument.

"Does it matter?"

"It might. If we're both empty, what are we filling each other with?"

The question hung between them. They'd found the person who matched their intensity. Now they had to learn not to drown together.

"I'll learn to receive," she offered.

"I'll learn to give," he promised.

The water level dropped. Not completely. But enough to breathe.`,
    dynamicDescription: "Two forms of emotional intensity creating deep connection with risk of mutual overwhelm.",
    growthPath: "Two receiving as well as giving, Four appreciating care not just depth.",
    watchOut: "Emotional overwhelm, competing needs for centrality, relationship becoming all-consuming vortex."
  },

  // === TYPE 2 WITH TYPE 5 ===
  {
    type1: 2, subtype1: 'sp', type2: 5, subtype2: 'sp',
    title: "The Practical Helper and The Self-Sufficient Hermit",
    subtitle: "Careful nurturing meets resourceful withdrawal",
    narrative: `She left a casserole by his door. He didn't answer when she knocked.

"I know you're in there," she called. "I just wanted to help."

Through the door: "I don't need help."

She'd been doing this for weeks. Practical gestures—groceries, mail brought in, snow shoveled. All rejected. All unnecessary. He had systems. He was fine.

"Everyone needs something," she insisted.

"I've minimized my needs specifically so I don't need anyone."

The words stung. But she noticed something: he always took the casseroles. Eventually.

"What if I helped without expecting anything back?" she asked through the door. "No relationship. No conversation. Just... leaving things."

Silence. Then: "That might work."

She kept leaving things. He kept accepting them, eventually. Months later, he opened the door while she was still there.

"I don't understand you," he said.

"I don't need you to understand me. I just need to give."

"And I need to not need. But somehow, you've become... tolerable."

It wasn't poetry. But from him, it was everything.`,
    dynamicDescription: "Practical care meets determined independence, creating challenge around whether help is welcome.",
    growthPath: "Two learning that space is a gift, Five learning that accepting help isn't weakness.",
    watchOut: "Two feeling useless to self-sufficient Five, Five feeling intruded upon by Two's helping."
  },
  {
    type1: 2, subtype1: 'sp', type2: 5, subtype2: 'so',
    title: "The Boundaried Nurturer and The Knowledge Sharer",
    subtitle: "Strategic helping meets intellectual community",
    narrative: `He came alive at lectures. She watched him transform from wallflower to oracle.

"The epistemological implications are fascinating," he said to the small crowd gathered around him after his talk.

She'd helped organize the event—printed programs, arranged chairs, made sure there was water for the speaker. Now she waited while he held court with his intellectual admirers.

"You're brilliant up there," she said on the drive home. "I just wish..."

"Wish what?"

"I wish you'd talk to me like that. At home. About anything."

He considered this seriously. "I don't know how to connect without ideas."

"What if I learned some of your ideas? Would that help?"

He handed her a book the next day. Dense philosophy. She read it anyway, taking notes. When she asked her first real question, his face lit up.

"You actually read it."

"I wanted to meet you where you live."

He kissed her forehead—the most emotional he'd ever been. "I'll try to visit where you live too."

They met in the middle: she learned to love his mind, he learned to speak her language of care.`,
    dynamicDescription: "Practical nurturing meets intellectual engagement, with possible connection through shared interests.",
    growthPath: "Two appreciating intellectual connection, Five offering emotional warmth alongside ideas.",
    watchOut: "Two wanting more emotional engagement, Five staying in intellectual mode."
  },
  {
    type1: 2, subtype1: 'sp', type2: 5, subtype2: 'sx',
    title: "The Careful Giver and The Intense Seeker",
    subtitle: "Boundaried helping meets romantic isolation",
    narrative: `He wanted her desperately from across the room. Then she came closer, and he needed to leave.

"You run away every time we get close," she observed after his third sudden departure.

"I know. I'm sorry. I don't understand it either."

She did, somehow. He was a telescope: designed for distant stars, overwhelmed by nearby light. He wanted intimacy the way a man dying of thirst wants water—and feared drowning just as much.

"What if I stayed far away?" she offered. "Close enough to see, too far to touch."

"That sounds like torture."

"It sounds like practice."

They built a strange courtship. She left notes instead of embracing. Called instead of visiting. Let him approach when he could, retreated when he couldn't.

"I still want you," he said after months. "But I'm not running."

"I'll come a little closer now."

"Just a little."

She crossed half the room. He stayed. It felt like a miracle—intimacy through restraint, connection through space. Not what either wanted. Exactly what both needed.`,
    dynamicDescription: "Limited giving meets longed-for but feared intimacy, potentially finding balance in mutual boundaries.",
    growthPath: "Five trusting Two's boundaried consistency, Two accepting Five's connection rhythm.",
    watchOut: "Two frustrated by Five's approach-avoidance, Five overwhelmed even by boundaried giving."
  },
  {
    type1: 2, subtype1: 'so', type2: 5, subtype2: 'sp',
    title: "The Social Helper and The Complete Hermit",
    subtitle: "Community nurturing meets total withdrawal",
    narrative: `Her life was a whirlwind of people. His was a monastery of one.

"Come to dinner with my friends," she said, keys already in hand.

"I'd rather not."

"You always 'rather not.' Don't you get lonely?"

He looked up from his book. "I have everything I need here. Books. Quiet. Thoughts I can finish."

She couldn't imagine it. A week without seeing people would destroy her. But he seemed genuinely content in his solitude, as if silence were water and people were drought.

"What do you even see in me?" she asked. "I'm everything you avoid."

"You bring the world in. I don't have to go find it."

"That sounds like using me."

"That sounds like partnership."

She sat with this. Maybe she could be his window to the world he'd walled off. Maybe he could be her refuge from the world she couldn't escape.

"One dinner a month," she negotiated. "And in between, we stay home."

"I can try that."

She learned to love silence. He learned to tolerate company. Neither became the other—but both became more.`,
    dynamicDescription: "Maximum social versus solitary orientation, creating challenge around engagement with world.",
    growthPath: "Two respecting Five's need for solitude, Five engaging with Two's world selectively.",
    watchOut: "Two feeling Five is reclusive and rejecting, Five feeling overwhelmed by Two's social demands."
  },
  {
    type1: 2, subtype1: 'so', type2: 5, subtype2: 'so',
    title: "The Social Nurturer and The Intellectual Networker",
    subtitle: "Community care meets community of minds",
    narrative: `They met at a nonprofit board meeting. She'd organized the fundraiser; he'd analyzed the budget.

"The numbers don't lie," he said, presenting findings. "We're overspending on events, underspending on programs."

She bristled. Those events built relationships. Relationships built donations. Didn't he understand that people mattered more than spreadsheets?

"You can't reduce everything to data," she said afterward.

"And you can't run an organization on feelings."

They argued for months. She brought emotional intelligence to every meeting; he brought intellectual rigor. The board loved them both—for different reasons.

"I notice something," he said one evening. "You make people feel cared for. I make them think clearly. Together, we're effective."

"Is that your version of a compliment?"

"It's my version of an observation."

She laughed despite herself. "What if we stopped fighting and started collaborating?"

"I've been analyzing that possibility."

"And?"

"The data suggests it would be optimal."

Hearts and minds, together. The nonprofit thrived. So did they.`,
    dynamicDescription: "Emotional and intellectual approaches to community, with potential for complementary contribution.",
    growthPath: "Two appreciating intellectual community, Five offering emotional care to groups.",
    watchOut: "Two feeling Five is cold in groups, Five feeling Two is intellectually shallow."
  },
  {
    type1: 2, subtype1: 'so', type2: 5, subtype2: 'sx',
    title: "The Community Helper and The Secret Romantic",
    subtitle: "Social warmth meets hidden longing",
    narrative: `She noticed him watching her at every party—always from the corner, never approaching. The mysterious quiet one.

"Why don't you ever talk to anyone?" she asked, finally cornering him.

"I talk to you. In my head. All the time."

She laughed, assuming he was joking. He wasn't.

Weeks later, she found a letter slipped under her door. Pages of longing, eloquent and raw, describing everything he'd observed: how she tilted her head when listening, how her laugh changed depending on who she was with, how she seemed exhausted beneath her warmth.

"This is beautiful," she said when she found him. "Why couldn't you just say it?"

"Words disappear. Letters stay. I needed you to know I saw you—really saw you—not just the person you perform for everyone else."

She'd spent years being everyone's helper. He'd spent years watching her from the shadows, loving the person underneath.

"Show me more," she said. "I want to know everything you've seen."

He opened his notebook. Inside was a map of her, drawn by someone who'd been paying attention all along.`,
    dynamicDescription: "Visible social warmth meets hidden emotional depth, with potential for surprising intimacy.",
    growthPath: "Five revealing hidden longing, Two focusing attention on Five's unexpected depth.",
    watchOut: "Five remaining hidden behind Two's social activity, Two missing Five's need for intimate attention."
  },
  {
    type1: 2, subtype1: 'sx', type2: 5, subtype2: 'sp',
    title: "The Passionate Giver and The Self-Contained Hermit",
    subtitle: "Intense devotion meets complete withdrawal",
    narrative: `She came at him like a wave. He built a seawall.

"Let me in," she pleaded outside his locked door. "I just want to love you."

Silence from inside. Then: "Your love is an invasion."

The words cut. But she understood something he didn't: his walls weren't strength. They were fear dressed as fortress.

"What are you protecting in there?"

"Everything."

"What would happen if you let me see?"

"I don't know. That's the problem."

She sat outside his door for an hour. Didn't knock again. Just waited.

Finally, the lock clicked. He stood there, terrified and defiant. "If you come in, you might break everything."

"Or I might hold everything together."

She stepped inside slowly. His space was sparse, controlled, carefully ordered. She touched nothing, moved like a guest.

"This isn't what I expected," he said.

"I can burn slower. When something's worth not breaking."

He exhaled for the first time in years. Maybe love could learn to knock.`,
    dynamicDescription: "Maximum intensity meets maximum withdrawal, creating either breakthrough or frustration.",
    growthPath: "Five allowing penetration of defenses, Two accepting Five's need for space even in intimacy.",
    watchOut: "Two experiencing Five's withdrawal as rejection, Five experiencing Two's intensity as invasion."
  },
  {
    type1: 2, subtype1: 'sx', type2: 5, subtype2: 'so',
    title: "The Devoted Lover and The Intellectual Engager",
    subtitle: "Intimate intensity meets social intellect",
    narrative: `She wanted him completely. He wanted his research group too.

"You're going to that conference again?" She couldn't hide the edge.

"It's important. These are my people."

"I thought I was your people."

He set down his papers. This was the recurring argument: her desire for total focus, his need for intellectual community. She felt like an afterthought. He felt like a hostage.

"I love you," he said carefully. "But I can't live in only one room."

"And I can't live with half a person."

They sat with the impasse. Neither willing to bend. Neither able to leave.

"What if I came?" she finally asked. "To the conference."

"You'd be bored."

"I'd be with you. Show me what excites you."

He brought her. She listened to panels she didn't understand, but watched his face light up in ways she'd never seen. He was himself there—fully, brilliantly alive.

"I get it now," she said on the flight home. "They're part of you. Not competition."

"And you're part of me too. The part that comes home."

She learned to share. He learned to return.`,
    dynamicDescription: "Intimate passion meets intellectual social engagement, creating tension over attention.",
    growthPath: "Two engaging with Five's intellectual world, Five prioritizing intimate connection.",
    watchOut: "Two jealous of Five's intellectual community, Five feeling pulled from interests."
  },
  {
    type1: 2, subtype1: 'sx', type2: 5, subtype2: 'sx',
    title: "The Passionate Giver and The Secret Yearner",
    subtitle: "Consuming devotion meets hidden intensity",
    narrative: `She offered everything. He wanted everything—and ran from it just as fast.

"I know you feel this too," she said, catching him leaving another party early. "I see how you look at me."

"Looking isn't the same as being able to stay."

"Then teach me what staying looks like for you."

He'd never met anyone willing to learn his language. Most people wanted him to speak theirs. She stood there, offering patience he didn't deserve for a connection he desperately wanted.

"I'm terrified," he admitted.

"Of what?"

"Of finally having what I've imagined. Of it being real. Of it disappearing."

"I'm not going anywhere."

"Everyone goes somewhere."

"Then I'll go slowly. And I'll tell you before I move."

It took a year. She moved like approaching a wild animal—deliberate, visible, non-threatening. He stayed, fled, returned, stayed longer. Eventually, the staying became normal.

"I never thought I'd have this," he whispered one night.

"Neither did I. The waiting was worth it."

He finally stopped running. She finally stopped chasing. They met in the middle, both out of breath, both home.`,
    dynamicDescription: "Open intensity meets hidden intensity, with potential for profound connection if fear is overcome.",
    growthPath: "Five trusting enough to reveal hidden yearning, Two being patient with Five's fear.",
    watchOut: "Five's fear overcoming their longing, Two's frustration with Five's ambivalence."
  },

  // === TYPE 2 WITH TYPE 6 ===
  {
    type1: 2, subtype1: 'sp', type2: 6, subtype2: 'sp',
    title: "The Protective Helper and The Security Seeker",
    subtitle: "Careful nurturing meets anxious preparation",
    narrative: `She triple-checked the locks. He triple-checked the smoke detectors.

"Did you call the insurance company?" she asked.

"Twice. And I updated the emergency kit. Do we have enough water?"

They understood each other's worry in a way that felt like home. When the world seemed dangerous, they built safety together—practical preparations, careful planning, every contingency covered.

But one night, after an hour debating the safest route to their vacation rental, she stopped.

"Are we protecting each other, or feeding each other's fear?"

He considered this. They'd become experts at anticipating disaster. But when had they last anticipated joy?

"What if we just went?" she suggested. "Without the backup plans?"

"That feels reckless."

"Maybe reckless is exactly what we need."

They drove without GPS. Stopped at random diners. Let the road surprise them.

"I'm terrified," he admitted.

"Me too." She squeezed his hand. "But I'm also having fun."

They learned that safety could include adventure—that the best protection was trusting they could handle whatever came.`,
    dynamicDescription: "Shared security focus creating understanding but potential for mutual anxiety amplification.",
    growthPath: "Finding security in each other rather than just in preparation, allowing trust to reduce anxiety.",
    watchOut: "Mutual anxiety feeding rather than soothing, relationship becoming primarily about managing fear."
  },
  {
    type1: 2, subtype1: 'sp', type2: 6, subtype2: 'so',
    title: "The Boundaried Nurturer and The Loyal Follower",
    subtitle: "Strategic helping meets system loyalty",
    narrative: `She helped individuals. He helped the institution.

"The committee needs volunteers," he said, spreading papers across the kitchen table. "I told them you'd coordinate."

"You told them?"

"You're good at organizing. They need someone reliable."

She stared at the stack of assignments, already feeling the familiar resentment creep in. His loyalty was to the organization first—she was useful for serving it.

"What about loyalty to me?" she asked quietly.

He looked up, genuinely confused. "Being part of the system IS loyalty to you. We both benefit from strong institutions."

"I want to be a person to you. Not a resource."

The words hung between them. He'd never separated the two.

"How do I do that?" he asked finally. "Show personal loyalty?"

"Remember my birthday without putting it in the committee calendar. Help me because I need it, not because the organization does."

He practiced. She reminded. Slowly, he learned that some loyalties existed outside any system—unprogrammed, uncalendared, purely personal.

"I chose you," he said one morning, completely off-script. "Not the organization. You."

It was the first time she'd believed it.`,
    dynamicDescription: "Personal helping meets systemic loyalty, creating organized partnership.",
    growthPath: "Two appreciating Six's organizational commitment, Six offering personal loyalty beyond systems.",
    watchOut: "Two feeling like just part of Six's system, Six over-organizing the relationship."
  },
  {
    type1: 2, subtype1: 'sp', type2: 6, subtype2: 'sx',
    title: "The Careful Helper and The Counterphobic Fighter",
    subtitle: "Boundaried nurturing meets aggressive strength",
    narrative: `He came home with bruised knuckles. Someone had insulted her at the coffee shop, he explained. He'd handled it.

"I didn't ask you to fight anyone," she said, wrapping ice around his hand.

"You don't have to ask. Anyone who comes at you, comes through me first."

His protectiveness should have felt romantic. Instead, it felt like a wall—keeping out danger, yes, but also keeping her inside something she hadn't chosen.

"I appreciate you defending me. But I can handle my own conflicts."

"Not as well as I can."

"That's not the point."

He went quiet. His whole life had been about confronting threats, being strong enough that nothing could hurt the people he loved. Her caution seemed like weakness. Her boundaries seemed like rejection of his protection.

"What if your strength isn't always what I need?" she asked gently. "What if sometimes I just need space to figure things out myself?"

He struggled with this. But he tried. Started asking before fighting. Started trusting her to handle small battles.

"You're still my protector," she said, watching him restrain himself from an overreaction. "But now you're protecting my autonomy too."`,
    dynamicDescription: "Careful giving meets confrontational strength, creating potential for protection or overwhelm.",
    growthPath: "Six's strength protecting rather than threatening Two, Two appreciating Six's courage.",
    watchOut: "Six's intensity overwhelming Two's boundaries, Two seeming too cautious for Six."
  },
  {
    type1: 2, subtype1: 'so', type2: 6, subtype2: 'sp',
    title: "The Social Helper and The Personal Worrier",
    subtitle: "Community nurturing meets private anxiety",
    narrative: `She threw dinner parties. He reinforced the locks.

"We should invite the new neighbors," she said, arranging flowers.

"We don't know them."

"That's why we invite them. To know them."

His jaw tightened. Every new person was a variable, a potential threat, an unknown that required vetting before trust. She collected people like friends were currency. He hoarded safety like trust was debt.

"What if they're not good people?" he asked.

"What if they are? What if they become friends? What if your world got a little bigger?"

"Bigger isn't always better."

She set down the flowers. "I know you're worried. I know the world feels dangerous. But you've built walls so thick you can't see over them anymore."

He considered the dinner party. The new neighbors. The terrifying possibility of vulnerability.

"One dinner," he conceded. "And I'm keeping the exits clear."

The neighbors were lovely. They came back twice more. He still checked the exits, but eventually stopped counting them.

"Your world is growing," she said, watching him laugh at a joke.

"Your world," he corrected. "You just let me visit."

She squeezed his hand. "It's yours now too."`,
    dynamicDescription: "Social warmth meets private worry, creating tension between expansion and security.",
    growthPath: "Six allowing social expansion through Two, Two appreciating Six's security focus.",
    watchOut: "Two pushing Six beyond comfort zone, Six anchoring Two from needed social engagement."
  },
  {
    type1: 2, subtype1: 'so', type2: 6, subtype2: 'so',
    title: "The Community Nurturer and The System Loyalist",
    subtitle: "Social helping meets group commitment",
    narrative: `They met at the community board meeting. She organized the potluck; he tracked the budget.

"The Johnson family needs help with groceries," she reported. "I'm starting a meal train."

"We have a policy for that," he said. "Page fifteen of the bylaws."

She smiled through gritted teeth. His loyalty to the rules was admirable—and exhausting. Sometimes people just needed soup, not procedures.

"Can't we just help them? Directly?"

"The system exists for a reason. Following it protects everyone."

She brought soup anyway. He filed the proper forms after the fact.

Over months, they found their rhythm. She warmed the community; he kept it organized. Her spontaneity drove him crazy; his rigidity frustrated her. But together, they built something neither could alone.

"You make people feel cared for," he admitted after a particularly successful event. "I just make sure the permits are in order."

"Permits matter too. You keep us legal and funded."

"Is that romantic?"

"It's partnership." She handed him a clipboard. "Now help me with the sign-up sheet."

He took it, finally understanding that warmth and rules could serve the same mission.`,
    dynamicDescription: "Warmth and loyalty both serving community, creating strong social partnership.",
    growthPath: "Combining warmth and loyalty for community, appreciating different contributions.",
    watchOut: "Two seeing Six as cold, Six seeing Two as unreliable in rule-following."
  },
  {
    type1: 2, subtype1: 'so', type2: 6, subtype2: 'sx',
    title: "The Social Connector and The Fierce Defender",
    subtitle: "Community warmth meets counterphobic strength",
    narrative: `She made everyone feel welcome. He made sure no one took advantage of that.

"The new volunteer seems sketchy," he said after the community meeting. "Something's off."

"You think everyone's sketchy."

"Someone has to. You trust too easily."

She sighed. They'd had this conversation a hundred times. She saw the best in people; he saw the worst. She opened doors; he guarded them.

But when the sketchy volunteer stole from the donation box, she had to admit: his vigilance had protected what her warmth had built.

"I hate that you were right," she said.

"I hate that I had to be."

They learned to work as a system. She welcomed; he vetted. She connected; he protected. The community grew safer because it was both warm and watched.

"You're not paranoid," she told him one night. "You're paying attention to things I'm too busy hugging to notice."

"And you're not naive. You're just... hopeful."

"Is there room for both?"

"There has to be." He smiled—a rare sight. "Someone's got to believe in people. Someone else has to watch their hands."`,
    dynamicDescription: "Social warmth and aggressive defense potentially combining for strong community role.",
    growthPath: "Six channeling strength to protect Two's community, Two appreciating Six's defensive role.",
    watchOut: "Six's aggression disturbing Two's social harmony, Two seeming naïve to vigilant Six."
  },
  {
    type1: 2, subtype1: 'sx', type2: 6, subtype2: 'sp',
    title: "The Passionate Lover and The Anxious Worrier",
    subtitle: "Intense devotion meets security anxiety",
    narrative: `She loved with her whole body, her whole life. He checked the locks three times before bed.

"Come away with me this weekend," she whispered, eyes bright with plans. "Spontaneous trip. Just us."

His mind raced: the car needs an oil change, the budget's tight, what if something happens while they're gone?

"Can we plan it for next month instead? I'd feel better with some—"

"Planning." She pulled away, wounded. "You always need planning."

"And you always need everything now." His voice caught. "Your intensity terrifies me sometimes."

The honesty stopped her. She'd never considered that her passion might feel like a threat.

"I'm not trying to destabilize you," she said softly. "I just want all of you."

"I know." He reached for her hand. "And I want to give you that. I just need... handrails."

She squeezed back. "Then let's build some. Together."

His worry finally had something worth protecting. Her devotion finally had somewhere safe to land.`,
    dynamicDescription: "Intense devotion meets practical anxiety, creating potential for security through love.",
    growthPath: "Six feeling secure in Two's devotion, Two appreciating Six's practical grounding.",
    watchOut: "Six's worry dampening Two's passion, Two's intensity overwhelming Six's anxiety."
  },
  {
    type1: 2, subtype1: 'sx', type2: 6, subtype2: 'so',
    title: "The Devoted Giver and The Group Loyalist",
    subtitle: "Intimate intensity meets systemic commitment",
    narrative: `She wanted to be his everything. He already belonged to a dozen other things.

"The union meeting's tonight," he said, checking his calendar. "Then the neighborhood watch has that emergency session."

"You've been out every night this week."

"People count on me." His voice carried no apology.

"I count on you too." She heard the jealousy in her own voice and hated it. Competing with a union? A neighborhood watch?

"You're not competing with them." He finally looked up. "They're my responsibility. You're my choice."

"Is there a difference?"

"All the difference in the world." He set down the calendar. "I show up for them because I have to. I come home to you because I want to."

She'd been measuring his devotion by exclusivity—how much of him no one else got. He measured devotion by returning, choosing, preferring.

"Go to your meeting," she said. "I'll be here when you get back."

"I know." He kissed her. "That's exactly why I always come back."`,
    dynamicDescription: "Intimate focus meets group loyalty, creating competition for commitment.",
    growthPath: "Two accepting Six's group loyalties, Six prioritizing intimate relationship.",
    watchOut: "Two jealous of Six's group commitments, Six feeling torn between relationship and loyalties."
  },
  {
    type1: 2, subtype1: 'sx', type2: 6, subtype2: 'sx',
    title: "The Seductive Giver and The Counterphobic Fighter",
    subtitle: "Passionate devotion meets confrontational strength",
    narrative: `When they fought, neighbors closed their windows. When they loved, the room couldn't contain it.

"You went after him," she said, still shaking. "In the parking lot. He just made a comment."

"A comment about you." His jaw was tight. "Nobody talks about you like that."

"I can handle comments! I don't need you starting fires everywhere we go."

"And I don't need you trying to charm your way out of everything!" He matched her volume. "Sometimes people need to be confronted."

They stood toe to toe, neither backing down. Two furnaces burning at full blast.

Then she laughed—unexpected, releasing. "We're ridiculous."

"Completely." He almost smiled. "But I'd rather fight with you than be peaceful with anyone else."

"Same." She reached for him. "We're both too much, aren't we?"

"For other people? Definitely." He pulled her close. "For each other? Maybe we're finally enough."

Fire didn't destroy fire. It merged, burned brighter, created something that couldn't exist at lower temperatures.`,
    dynamicDescription: "Two forms of intensity creating powerful connection with potential for explosive conflict.",
    growthPath: "Six's strength protecting Two's devotion, Two's love softening Six's aggression.",
    watchOut: "Explosive conflicts between two intensities, neither backing down from confrontation."
  },

  // === TYPE 2 WITH TYPE 7 ===
  {
    type1: 2, subtype1: 'sp', type2: 7, subtype2: 'sp',
    title: "The Practical Helper and The Resourceful Opportunist",
    subtitle: "Careful nurturing meets strategic networking",
    narrative: `She packed lunches for his networking events. He always came home with new contacts and bigger dreams.

"I made your favorite," she said, handing him the container. "The investors will love the personal touch."

He kissed her cheek, already mentally rehearsing his pitch. "You're my secret weapon."

For months this worked beautifully—her practical care fueling his expanding universe of possibilities. But one evening she sat alone with cold dinner, watching his third "quick drink with a potential partner" stretch into midnight.

"Am I helping you, or am I just useful?" she asked when he returned.

He stopped loosening his tie. The question hung like an audit of their entire arrangement.

"Both," he admitted finally. "But I want it to be more than that."

They learned to build together: her warmth made his network genuine, his opportunities gave her care a bigger stage. Partnership, not transaction.`,
    dynamicDescription: "Practical helping meets pragmatic opportunity-seeking, creating potential for mutually beneficial partnership.",
    growthPath: "Two appreciating Seven's resourcefulness, Seven appreciating Two's supportive care.",
    watchOut: "Seven's opportunism feeling transactional to Two, Two's helping feeling constraining to Seven."
  },
  {
    type1: 2, subtype1: 'sp', type2: 7, subtype2: 'so',
    title: "The Boundaried Nurturer and The Social Entertainer",
    subtitle: "Strategic helping meets group excitement",
    narrative: `She'd prepared snacks for six. He came home with twelve.

"Surprise!" He burst through the door, trailing strangers like confetti. "Everyone, this is my amazing girlfriend!"

She smiled through gritted teeth, stretching the appetizers, finding extra glasses, playing hostess to his spontaneous party.

Later, after the last guest left, she collapsed on the couch. "A little warning next time?"

"But spontaneity is the best part!" He genuinely didn't understand.

"For you. I need time to prepare. To recharge."

He sat beside her, actually listening for once. "You're tired."

"I'm exhausted. And it's Tuesday."

The word landed. Tuesday. Not even the weekend. Just... Tuesday chaos.

"I didn't realize." He took her hand. "What if I promised advance notice? At least a text?"

"That would help." She leaned into him. "I love your energy. I just can't always match it."

"Then I'll learn to save some for quieter nights." He kissed her forehead. "Just us. No confetti."`,
    dynamicDescription: "Careful helping meets social enthusiasm, creating challenge between intimate support and group fun.",
    growthPath: "Two enjoying Seven's social energy, Seven appreciating Two's steady support.",
    watchOut: "Seven's social schedule overwhelming Two, Two seeming too serious for fun-loving Seven."
  },
  {
    type1: 2, subtype1: 'sp', type2: 7, subtype2: 'sx',
    title: "The Careful Giver and The Fascinated Explorer",
    subtitle: "Boundaried nurturing meets imaginative depth",
    narrative: `He'd been researching octopi for three weeks straight. She found it oddly charming.

"Did you know they have three hearts?" He looked up from his laptop, eyes bright with discovery.

"You mentioned." She set down his tea—the kind he forgot to make for himself when fascinated.

"And they can taste with their skin!" He grabbed her hand. "Imagine experiencing the world that way."

She'd learned his pattern: deep dives that consumed everything, then sudden surfacing when interest shifted. Most people found it exhausting. She found it predictable.

"How long until the next thing?" she asked gently.

He paused. "You're not bored hearing about octopi?"

"I'm curious what comes next. And I'll be here for that too."

Something shifted in his expression. "You're the first person who's ever just... let me explore."

"I have limits," she admitted. "But your depth isn't a burden. It's beautiful."

He closed the laptop. "Maybe tonight I'll be fascinated by you instead."

"I'd like that." She smiled. "Though I have fewer hearts."`,
    dynamicDescription: "Boundaried care meets focused fascination, with potential for sustained deep connection.",
    growthPath: "Seven staying present with Two, Two allowing Seven's explorative depth.",
    watchOut: "Seven's fascination moving to new objects, Two feeling abandoned when interest shifts."
  },
  {
    type1: 2, subtype1: 'so', type2: 7, subtype2: 'sp',
    title: "The Social Helper and The Strategic Networker",
    subtitle: "Community nurturing meets opportunity-seeking",
    narrative: `She introduced him to the Martins because they seemed kind. He handed them a business card before dessert.

"Really?" she whispered in the kitchen. "They're our neighbors, not prospects."

"They're both. Why waste a warm introduction?"

"Because not everything is a transaction!"

He leaned against the counter, considering. "You see people as relationships. I see them as possibilities. Both are real."

"But I brought you here to connect, not to collect."

The word stung. He'd never thought of it as collecting. But maybe she had a point.

"What if I promised no business talk for the rest of the night?" he offered.

"What would you even talk about?"

"I don't know." He smiled uncertainly. "Them? You? How to just... be somewhere without an angle?"

She took his hand. "I'll help you. That's what I do."

"And I'll help you see opportunities you're missing. That's what I do."

By evening's end, he had friends. She had possibilities. Neither had to choose.`,
    dynamicDescription: "Nurturing and strategic approaches to social world, with potential for combined influence.",
    growthPath: "Seven appreciating emotional connection, Two appreciating strategic contribution.",
    watchOut: "Two feeling used for Seven's networking, Seven feeling emotionally obligated against will."
  },
  {
    type1: 2, subtype1: 'so', type2: 7, subtype2: 'so',
    title: "The Community Nurturer and The Social Butterfly",
    subtitle: "Warm helping meets endless enthusiasm",
    narrative: `They threw the best parties in town. She made everyone feel welcome; he made sure no one was bored.

"Let's do a theme!" he announced, already brainstorming. "Gatsby! No—tropical! No—murder mystery!"

"People just want to feel seen," she said, arranging flowers. "The theme is secondary."

"The theme is everything! It gives them something to do."

She set down the vase. "Is that what connection is to you? Something to do?"

He stopped mid-gesture. "What else would it be?"

"Being known. Being valued. Not just entertained."

"But entertainment is how I show I care," he said quietly. "I give people a good time. What's wrong with that?"

She softened. "Nothing. But some of us need more than sparkle."

"And I need more than depth." He moved closer. "I need air. Movement. Joy."

"Then let's do both." She smiled. "You handle the sparkle. I'll handle the heart. Between us, no one leaves feeling anything less than loved."

The party was legendary. Nobody could quite explain why.`,
    dynamicDescription: "Two social styles creating exciting partnership with potential for exhaustion versus superficiality tension.",
    growthPath: "Seven appreciating Two's deeper care, Two enjoying Seven's lighter touch.",
    watchOut: "Seven exhausting Two's nurturing capacity, Two dampening Seven's fun with emotional demands."
  },
  {
    type1: 2, subtype1: 'so', type2: 7, subtype2: 'sx',
    title: "The Social Giver and The Focused Enthusiast",
    subtitle: "Community care meets intense fascination",
    narrative: `She knew two hundred people by name. He knew three—deeply, obsessively, completely.

"Come to the fundraiser," she urged. "Everyone's asking about you."

"I'd rather stay and finish this book." He held up the worn philosophy text. "There's a passage I've been thinking about for days."

"Days? On one passage?"

"It changes everything if I understand it right."

She sat beside him, genuinely curious. "Show me."

For an hour, he walked her through the layers of meaning—connections she'd never have found alone. His depth was a kind of gift, she realized. Different from her wide warmth, but equally real.

"I'll never understand things the way you do," she admitted.

"And I'll never connect like you do. That party you're worried about? Those two hundred people trust you. That's its own kind of depth."

She leaned her head on his shoulder. "Maybe I don't have to choose between depth and breadth."

"Maybe I can learn that too." He closed the book. "I'll come tonight. But only if you introduce me slowly."`,
    dynamicDescription: "Wide social warmth meets focused intensity, creating breadth-depth tension.",
    growthPath: "Two offering Seven focused attention, Seven engaging with Two's broader circle.",
    watchOut: "Seven feeling lost in Two's social world, Two feeling Seven's focus excludes them."
  },
  {
    type1: 2, subtype1: 'sx', type2: 7, subtype2: 'sp',
    title: "The Passionate Helper and The Practical Adventurer",
    subtitle: "Intense devotion meets resourceful freedom",
    narrative: `She wanted to merge completely. He kept a go-bag by the door.

"Why do you still have that?" she asked, her voice tight.

"It's not about you. I've always had escape routes. It's how I feel safe."

"An escape route from us?"

He struggled to explain. "From anything. Everywhere. It's not personal."

"It feels personal." She sat on the bed, defeated. "I want all of you. You want all your options."

He sat beside her. "I want you. I also want to know I could leave if I needed to. The leaving isn't the point—the freedom to leave is."

"Can you understand how terrifying that is for me?"

"Can you understand that your total devotion is equally terrifying for me?"

They sat with that—two terrors meeting, neither wrong.

"What if," she said slowly, "I accept that you need exits. And you accept that I need reassurance you won't use them?"

"Deal." He moved the go-bag to the closet. Still there. But less visible.

Progress wasn't always dramatic. Sometimes it was twelve inches of carpet.`,
    dynamicDescription: "Consuming devotion meets preserved freedom, creating intensity versus independence tension.",
    growthPath: "Seven choosing commitment despite fear, Two accepting that love includes freedom.",
    watchOut: "Two feeling abandoned by Seven's independence, Seven feeling suffocated by Two's intensity."
  },
  {
    type1: 2, subtype1: 'sx', type2: 7, subtype2: 'so',
    title: "The Devoted Lover and The Social Entertainer",
    subtitle: "Intimate intensity meets group excitement",
    narrative: `She burned brightest one-on-one. He burned brightest in a crowd.

"Stay home tonight," she whispered. "It's been a week of parties."

"The Hendersons are expecting us. And the rooftop thing is tomorrow, and—"

"And you'd rather be anywhere but alone with me."

He stopped. "That's not fair."

"Isn't it? When's the last time we had a night that was just us? Where you weren't already planning the next thing?"

He tried to remember and couldn't. That frightened him.

"I need people," he admitted. "Social energy fills me up. But—" He sat beside her. "I didn't realize I was starving us in the process."

"I can share you with the world. But I need you to choose me sometimes. Deliberately. Not because nothing else is happening."

"What about Saturdays?" he offered. "Our sacred night. No parties. No events. Just us."

"Can you actually do that?"

"I want to try." He took her phone, silenced it, set his own aside. "Starting now."

The night felt smaller. And somehow larger than any party.`,
    dynamicDescription: "Intimate focus meets social needs, creating jealousy versus freedom tension.",
    growthPath: "Two accepting Seven's social nature, Seven prioritizing intimate connection.",
    watchOut: "Two jealous of Seven's social energy, Seven feeling trapped by Two's exclusive demands."
  },
  {
    type1: 2, subtype1: 'sx', type2: 7, subtype2: 'sx',
    title: "The Seductive Giver and The Fascinated Explorer",
    subtitle: "Passionate devotion meets intense curiosity",
    narrative: `When he looked at her, she felt like the only thing in the universe. She understood the feeling.

"You're fascinating," he said, three weeks in. "The way your mind works. I could study you forever."

She glowed. Finally, someone who matched her intensity, who wanted to go deep.

But she'd seen his bookshelf. Half-read volumes on everything—astronomy, cooking, philosophy, jazz. Each one a former fascination, now abandoned.

"Will I become one of those?" she asked one night, gesturing at the books.

His face fell. "You noticed."

"I notice everything about you. It's what I do."

"I don't want that to happen," he said carefully. "But I can't promise it won't. My interest just... shifts sometimes."

"Then tell me when it shifts. Don't pretend. Don't fade. If I become a half-read book, at least let me know."

"That's fair." He pulled her close. "You're the first person who's asked for honesty instead of promises I can't keep."

"Honesty is all I want. Well—" she smiled. "Honesty and tonight."

"Tonight," he agreed, "you have all of me."`,
    dynamicDescription: "Intense devotion meets intense fascination, creating deep connection with impermanence risk.",
    growthPath: "Seven sustaining interest beyond initial fascination, Two tolerating Seven's curiosity about world.",
    watchOut: "Seven's fascination shifting away from Two, Two feeling like temporary interest rather than lasting love."
  },

  // === TYPE 2 WITH TYPE 8 ===
  {
    type1: 2, subtype1: 'sp', type2: 8, subtype2: 'sp',
    title: "The Practical Helper and The Territorial Protector",
    subtitle: "Careful nurturing meets survivalist strength",
    narrative: `She built safety through care. He built safety through concrete.

"The back fence needs reinforcing," he said, already calculating materials. "And the security system could use another camera."

"Or we could just get to know the neighbors."

He looked at her like she'd suggested inviting wolves to dinner.

"I'll bring them cookies," she continued. "Mrs. Patterson next door knows everything that happens on this street. Better than any camera."

He crossed his arms. "Cookies aren't security."

"Neither is isolation." She handed him the baking sheet. "Help me, and I'll help you mount that camera afterward."

Two hours later, they'd delivered cookies to four houses and installed one camera. Mrs. Patterson had already texted them about a suspicious car she'd seen last week.

"Your way has merit," he admitted grudgingly.

"So does yours." She leaned into him. "Fortress plus community. Nobody's getting through that."

He almost smiled. "We make a practical team."

"The most practical." She kissed his cheek. "Now—about that fence."`,
    dynamicDescription: "Practical care meets survivalist strength, creating potentially complementary security approaches.",
    growthPath: "Two trusting Eight's protection, Eight appreciating Two's practical care.",
    watchOut: "Eight's intensity overwhelming Two's boundaries, Two's emotional needs unmet by practical Eight."
  },
  {
    type1: 2, subtype1: 'sp', type2: 8, subtype2: 'so',
    title: "The Boundaried Nurturer and The Group Protector",
    subtitle: "Strategic helping meets social leadership",
    narrative: `He stood at the front of the town hall, voice booming. She sat in the back, taking notes.

"They're cutting the shelter's funding!" he thundered. "We won't stand for it."

The crowd roared. She watched him work—all force and conviction—and calculated what the shelter actually needed: volunteers, meal schedules, winter supplies.

Afterward, he found her at her table. "You didn't speak up."

"I was organizing." She showed him her lists. "You rally people. I figure out what they should do."

He studied the spreadsheet, surprised. "This is... thorough."

"Someone has to turn your outrage into action."

He sat down heavily. "I get people fired up. But I'm not always sure what comes next."

"That's what I'm for." She handed him the volunteer signup sheet. "Within my limits. I can give ten hours a week, not forty."

"Ten hours of this?" He tapped the spreadsheet. "Worth more than forty of chaos."

They looked at each other—general and quartermaster, finally understanding they needed both.`,
    dynamicDescription: "Careful nurturing meets strong social leadership, with potential for protective partnership.",
    growthPath: "Eight respecting Two's boundaries, Two supporting Eight's group protection.",
    watchOut: "Eight's forcefulness overwhelming Two, Two seeming weak to decisive Eight."
  },
  {
    type1: 2, subtype1: 'sp', type2: 8, subtype2: 'sx',
    title: "The Careful Giver and The Passionate Possessor",
    subtitle: "Boundaried nurturing meets intense claiming",
    narrative: `His desire was a furnace. Her boundaries were the only walls that held.

"I want you with me tonight," he growled. "Cancel dinner with your sister."

"No."

The word stopped him cold. Most people flinched when he demanded things.

"I have limits," she said calmly. "I need my people. I'll be back by nine."

He paced like a caged thing. "I hate when you're not here."

"I know." She touched his face. "That's why I always come back. But I won't dissolve into you. I can't."

"Everyone else does."

"That's why they leave." She held his gaze. "I'm staying. But you have to let me stay as myself."

Something in him released—not surrender, but relief. Her walls didn't mean rejection. They meant containment. A safe shape for his overwhelming fire.

"Nine o'clock," he repeated.

"Nine o'clock." She kissed him. "I'll be here."

She was. And for once, her limits felt like the only thing standing between his intensity and destruction.`,
    dynamicDescription: "Boundaried care meets possessive intensity, testing whether limits can contain intensity.",
    growthPath: "Eight respecting Two's limits, Two feeling wanted rather than overwhelmed.",
    watchOut: "Eight pushing through Two's boundaries, Two shutting down Eight's intensity."
  },
  {
    type1: 2, subtype1: 'so', type2: 8, subtype2: 'sp',
    title: "The Social Helper and The Survivalist",
    subtitle: "Community care meets territorial strength",
    narrative: `She cultivated a garden of friends. He cultivated a fortress of resources.

"Why do you need all these people?" he asked, watching her prepare for another dinner party.

"Why do you need all those investments?" she countered.

"Security." The word was non-negotiable.

"Same." She arranged flowers. "Friends are security too. When the money runs out, people don't."

He snorted. "Money is more reliable than people."

"Has anyone ever brought you soup when you were sick? Sat with you when you were afraid?"

He had no answer. He'd never let anyone close enough to try.

"Come to dinner tonight," she said. "Not as my partner. As yourself. Let them see you."

"They won't like what they see."

"I like what I see." She handed him a plate to carry. "Maybe they will too."

He attended. Awkwardly, defensively, in his own way. But by evening's end, Mrs. Chen had given him her accountant's number, and Tom had offered to help with the roof.

"Your garden," he said later, "might have some uses after all."`,
    dynamicDescription: "Social warmth meets territorial strength, with potential for protective partnership.",
    growthPath: "Eight protecting Two's community, Two bringing warmth to Eight's fortress.",
    watchOut: "Eight dismissing social warmth as weak, Two finding Eight too isolating."
  },
  {
    type1: 2, subtype1: 'so', type2: 8, subtype2: 'so',
    title: "The Community Nurturer and The Social Champion",
    subtitle: "Warm helping meets powerful advocacy",
    narrative: `She warmed the community center with homemade soup. He stormed the city council meeting demanding they fix the heating.

"You could've asked nicely," she said afterward.

"Nice doesn't get results." He was still fired up. "They've been ignoring us for months."

"They were ignoring complaints. They weren't ignoring Mrs. Rodriguez, who I've been helping with her grandkids. Her nephew works in the mayor's office."

He stopped. "You have an inside contact?"

"I have relationships. That's different." She handed him soup. "Your way gets attention. My way gets cooperation."

"We needed attention. They weren't cooperating."

"Now they have to. But after the battle, someone has to build the peace."

He sat down, finally eating. "You're saying I start the fires and you rebuild the village?"

"I'm saying the village needs both." She sat beside him. "You fight for what I nurture. I heal what your fighting breaks. Together, we're unstoppable."

He clinked his soup bowl against hers. "To the village."

"To the village."`,
    dynamicDescription: "Soft and hard approaches to community creating potentially powerful combination.",
    growthPath: "Eight valuing Two's warming influence, Two appreciating Eight's protective power.",
    watchOut: "Eight's forcefulness alienating Two, Two seeming ineffective to action-oriented Eight."
  },
  {
    type1: 2, subtype1: 'so', type2: 8, subtype2: 'sx',
    title: "The Social Giver and The Possessive Force",
    subtitle: "Community warmth meets intense claiming",
    narrative: `He wanted her entire universe. She'd already populated it with dozens of people.

"Who's David?" he demanded after the party, voice edged.

"A friend. From the charity board."

"He touched your arm."

"We're friendly. That's what friends do." She sighed. "I can't just... stop being warm because it bothers you."

"I want your warmth. For me."

"You have it. But there's not a limited supply." She sat on the bed, suddenly tired. "My heart doesn't work like yours. I love broadly. You love fiercely. Neither is wrong."

He paced, wrestling with something he couldn't punch. "I don't know how to share you."

"You're not sharing me. You're trusting me." She reached for him. "I come home to you. Every night. I choose you. Every day. But I won't cut off the rest of the world to prove it."

He knelt in front of her, suddenly vulnerable. "I'm not used to trusting."

"I know." She held his face. "Practice on me."

It wasn't easy. It was never easy. But trust could be learned, one painful night at a time.`,
    dynamicDescription: "Social warmth meets possessive intensity, creating jealousy versus connection tension.",
    growthPath: "Eight tolerating Two's social nature, Two giving Eight needed exclusive attention.",
    watchOut: "Eight's possessiveness curtailing Two's social warmth, Two feeling suffocated."
  },
  {
    type1: 2, subtype1: 'sx', type2: 8, subtype2: 'sp',
    title: "The Passionate Helper and The Territorial Protector",
    subtitle: "Intense devotion meets survivalist strength",
    narrative: `She offered him everything. He built walls around it.

"I love you with my whole heart," she said, pressing close. "Let me in."

"You're in." He gestured at the house, the security system, the life he'd built. "This is in."

"That's not what I mean." She pulled back, frustrated. "I mean emotionally. Fully. The way I love you."

He didn't know how to explain that her intensity scared him more than any threat. He'd survived by building fortresses. How did you build a fortress around something that wanted to merge?

"I protect what matters," he said finally. "That's how I love."

"Protection isn't the same as intimacy."

"It's all I have."

She looked at him for a long moment. "Then I'll meet you there. Show me what you're protecting. Show me why."

He hesitated, then took her to his office. The safe. The investments. The contingency plans for every disaster.

"This is my love language," he said quietly. "Survival."

"Then teach me." She sat in his chair. "I want to know every wall you've built."

He'd never shown anyone before. But for her, maybe he could try.`,
    dynamicDescription: "Passionate devotion meets practical power, with potential for protected intimacy.",
    growthPath: "Eight receiving Two's devotion, Two appreciating Eight's practical protection.",
    watchOut: "Two feeling emotionally unseen by practical Eight, Eight feeling overwhelmed by Two's intensity."
  },
  {
    type1: 2, subtype1: 'sx', type2: 8, subtype2: 'so',
    title: "The Devoted Lover and The Social Champion",
    subtitle: "Intimate intensity meets public power",
    narrative: `She wanted to be his world. He was already trying to save one.

"Another rally?" She tried to hide her disappointment. "You said this weekend was ours."

"The housing vote is Monday. People are counting on me."

"I'm counting on you too." The words came out sharper than intended.

He turned, suddenly aware of her. Really seeing her. The woman who'd supported every campaign, attended every event, stood behind him at every press conference.

"I'm not choosing them over you," he said.

"Aren't you?"

He sat down, conflicted in a way he rarely allowed himself to be. "The cause matters. But so do you. I don't know how to balance both."

"I don't want balance." She sat across from him. "I want to matter. To be your cause too."

"You are." He reached for her hand. "The world's never seen me fight for anything as hard as I'd fight for you."

"Then show me. Cancel the rally. One time. Choose me."

He hesitated. Then he picked up the phone. "Marcus? I need you to cover tomorrow. Something more important came up."

She exhaled—relief and disbelief mixed. "You did that for me?"

"I'd do more." He pulled her close. "But you have to tell me when you need it. I'm not good at seeing."`,
    dynamicDescription: "Intimate focus meets public power, creating tension over attention and priorities.",
    growthPath: "Two supporting Eight's social mission, Eight prioritizing intimate connection.",
    watchOut: "Two jealous of Eight's public focus, Eight feeling private demands limit impact."
  },
  {
    type1: 2, subtype1: 'sx', type2: 8, subtype2: 'sx',
    title: "The Seductive Giver and The Possessive Claimer",
    subtitle: "Consuming devotion meets consuming possession",
    narrative: `They consumed each other like fire consumes oxygen—necessary, destructive, essential.

"You're mine," he breathed against her neck.

"I've always been yours," she whispered back. "The question is whether you're mine."

"I don't belong to anyone."

"Then what are we doing here?"

The challenge hung between them. Two forces of nature, neither willing to yield. She gave everything; he took everything. But giving wasn't the same as surrendering, and taking wasn't the same as owning.

"I could destroy you," he admitted one night, frightened by his own power.

"You won't." She met his eyes without flinching. "Because I could destroy you too. My giving isn't weakness. It's strategy. It's strength. Don't mistake devotion for submission."

He'd never seen himself so clearly—reflected in someone as intense as himself.

"Then what is this?" he asked.

"Equals." She pulled him closer. "Two forces that could annihilate each other, choosing fusion instead."

"Dangerous."

"The best things are." She smiled, fierce. "Now—show me what you've got."

They chose each other. Over and over. Not from weakness, but from power meeting power, finally recognizing itself.`,
    dynamicDescription: "Two consuming intensities with different orientations, creating maximum passion with power risks.",
    growthPath: "Eight receiving as gift rather than taking, Two giving from strength not desperation.",
    watchOut: "Power imbalance—Eight dominating, Two losing self; or Two manipulating Eight through giving."
  },

  // === TYPE 2 WITH TYPE 9 ===
  {
    type1: 2, subtype1: 'sp', type2: 9, subtype2: 'sp',
    title: "The Practical Nurturer and The Comfortable Settler",
    subtitle: "Boundaried helping meets peaceful comfort",
    narrative: `Their apartment was perfectly comfortable. Maybe too comfortable.

"I made your lunch," she said, sliding the container across the counter.

"Thanks." He settled deeper into the couch, remote already in hand.

This had been their routine for three years. She helped; he received. No conflict. No growth. No waves.

"We should do something different this weekend," she said suddenly.

He looked up, mildly alarmed. "Different how?"

"I don't know. Take a class? Go somewhere new? I feel like we're..."

"Comfortable?" He offered the word hopefully.

"Stuck." She sat beside him. "I love taking care of you. But I don't know if I'm taking care of us."

He considered this. Comfort had always been the goal. Why reach for more?

"What if we're fine just like this?" he asked.

"What if we could be better?"

They sat with the question—two people who'd built the most peaceful, stagnant life imaginable.

"One new thing," he said finally. "Per month. We can handle one."

"One." She smiled. "That's a start."

Progress, they were learning, didn't require drama. Just movement. Even small movement counted.`,
    dynamicDescription: "Practical helping meets peaceful receiving, creating comfortable but potentially stagnant partnership.",
    growthPath: "Two helping Nine toward goals, Nine appreciating Two's practical support.",
    watchOut: "Comfortable stagnation, neither pushing for growth, relationship becoming too easy."
  },
  {
    type1: 2, subtype1: 'sp', type2: 9, subtype2: 'so',
    title: "The Boundaried Helper and The Social Peacemaker",
    subtitle: "Strategic nurturing meets group harmony",
    narrative: `She helped individuals. He smoothed groups. Together they served everyone but themselves.

"The Petersons need dinner tomorrow," she said, checking her list. "And Mrs. Cho's daughter is struggling."

"The neighborhood association meeting got heated," he added. "I told them I'd facilitate."

They crossed paths in the kitchen, both headed somewhere else.

"Wait." She stopped. "When did we last eat dinner together? Just us?"

He tried to remember. The community garden event? No, that was a function. The block party? Also public.

"I don't know," he admitted.

"We're so busy serving others we forgot to be a couple." She set down her keys. "I'm canceling the Petersons."

"I can't cancel the meeting. People are counting on—"

"People are always counting on you. On us." She took his hand. "But if we don't count on each other, what are we even building?"

He saw it then—the irony of creating harmony everywhere except home.

"Tuesday," he said. "Tuesdays are ours. No service. No helping. Just dinner."

"Just dinner," she agreed. "And maybe a conversation that isn't about anyone else."

They'd been so good at caring for others. Now they had to learn to care for themselves.`,
    dynamicDescription: "Helping and harmonizing both serving others, with risk of losing the relationship itself.",
    growthPath: "Focusing on each other alongside serving others, being served as well as serving.",
    watchOut: "Both disappearing into service roles, relationship becoming incidental to helping others."
  },
  {
    type1: 2, subtype1: 'sp', type2: 9, subtype2: 'sx',
    title: "The Careful Giver and The Merged Soul",
    subtitle: "Boundaried nurturing meets complete fusion",
    narrative: `She had clear edges. He didn't know where he ended.

"What do you want for dinner?" she asked.

"Whatever you want."

"No, what do you want? Specifically. Your preference."

He blinked. The question felt foreign. His preferences had always adapted to whoever he was with. With her, he wanted what she wanted. That was the point.

"I'm not trying to trick you," she said gently. "I'm trying to find you."

"I'm right here."

"Are you? Or are you just... matching me?"

He didn't have an answer. Merging was all he knew. It felt like love—becoming one with someone, disappearing into them.

"I love you," she said carefully. "But I need there to be a you to love. My boundaries aren't rejection. They're invitations for you to exist separately."

"That sounds lonely."

"It sounds healthy." She took his hand. "What if we practiced? Start small. What's your favorite color? Not mine. Yours."

He thought for a long time. "Blue," he said finally. "I think I like blue."

"Blue." She smiled. "That's a start."

Finding himself would take time. But she'd be there—close enough to love, separate enough to see.`,
    dynamicDescription: "Boundaried giving meets boundary-less merger, creating questions about where each person ends.",
    growthPath: "Two's limits helping Nine maintain self, Nine's warmth softening Two's boundaries appropriately.",
    watchOut: "Nine lost in Two despite Two's limits, Two struggling with Nine's boundary dissolution."
  },
  {
    type1: 2, subtype1: 'so', type2: 9, subtype2: 'sp',
    title: "The Social Helper and The Comfortable Retreater",
    subtitle: "Community warmth meets peaceful withdrawal",
    narrative: `She collected people. He collected quiet hours.

"The Hendersons invited us for brunch," she announced. "And the book club meets tomorrow, and—"

He pulled the blanket higher over his head.

"You can't just... hibernate," she said, frustrated. "People want to see you."

"People exhaust me." His voice was muffled. "Can't you go without me?"

"I want to share my life with you. That includes my people."

He emerged enough to look at her. "I share your life. Just... from home."

"That's not sharing. That's adjacent."

They'd reached this impasse before. She felt abandoned by his withdrawal; he felt invaded by her social world.

"What if you picked one?" he offered. "One event per week. I'll show up fully. But the rest of the time, you let me recharge."

"One event?" She considered. "The book club. It's small. Quiet people."

"Quiet people I can do."

"And the rest?"

"Tell them I said hi." He opened the blanket. "Come hibernate with me for an hour first?"

She slid in beside him. This was his intimacy—not a crowd, but a cocoon. Maybe she could learn to love it too.`,
    dynamicDescription: "Social engagement meets peaceful retreat, creating tension around energy direction.",
    growthPath: "Two respecting Nine's need for retreat, Nine engaging with Two's social world selectively.",
    watchOut: "Two exhausting Nine with social demands, Nine frustrating Two with withdrawal."
  },
  {
    type1: 2, subtype1: 'so', type2: 9, subtype2: 'so',
    title: "The Community Nurturer and The Social Harmonizer",
    subtitle: "Warm helping meets group peace",
    narrative: `They were the perfect hosts. She warmed the room; he kept the peace. But after the party, silence.

"Great event," she said, loading dishes.

"Everyone seemed happy," he agreed, straightening chairs.

They moved around each other like well-rehearsed dancers—efficient, coordinated, distant.

"We're good together," she said suddenly. "At this. Serving people. Making things nice."

"We are."

"But what about us? When it's just us?"

He stopped mid-stack. The question felt dangerous. When had they last been just them, without a purpose, without an audience to serve?

"I don't know what we'd talk about," he admitted.

"Me neither." She sat down, suddenly exhausted. "We've built our whole life around being useful to others. What happens when no one needs us?"

"Maybe we need us?" He sat across from her. "Maybe that counts too?"

"Does it feel like enough?"

"I don't know." He reached for her hand. "But I'd like to find out. No guests tomorrow. No harmony to maintain. Just breakfast and... figuring out who we are together."

She squeezed back. "That sounds terrifying."

"It does." He smiled. "Let's try anyway."`,
    dynamicDescription: "Two forms of social service creating harmonious contribution with self-neglect risk.",
    growthPath: "Caring for each other alongside caring for groups, receiving as well as giving.",
    watchOut: "Both lost in service to others, intimate relationship neglected for group harmony."
  },
  {
    type1: 2, subtype1: 'so', type2: 9, subtype2: 'sx',
    title: "The Social Giver and The Merged Lover",
    subtitle: "Community warmth meets intimate fusion",
    narrative: `He was her universe. She was everyone's sun.

"You were at the Hendersons' for three hours," he said, not accusingly, but wounded.

"They needed me. Their daughter's struggling."

"I needed you too."

She sat beside him, recognizing the hurt. He didn't complain often—he rarely complained at all—but his absorption into her was total. When she left, part of him went missing.

"I love that you love me this completely," she said carefully. "But I can't be your only source of... everything."

"Why not? You're my person."

"Because I need more than one person. That's how I'm built. And because—" She paused. "Because if I'm your whole world, what happens to your world when I'm at the Hendersons'?"

He had no answer. Merging had always been the goal. But she couldn't merge back—not the way he needed.

"I'll always come home to you," she promised. "But I need you to have a home that exists even when I'm not in it."

"I don't know how."

"Then let's figure it out." She pulled him close. "I want to be your anchor, not your oxygen. There's a difference."

He breathed her in—not disappearing this time, but arriving.`,
    dynamicDescription: "Social warmth meets intimate merger, creating tension over attention breadth.",
    growthPath: "Two giving Nine focused attention, Nine tolerating Two's social engagement.",
    watchOut: "Nine feeling abandoned by Two's social warmth, Two feeling suffocated by Nine's merger."
  },
  {
    type1: 2, subtype1: 'sx', type2: 9, subtype2: 'sp',
    title: "The Passionate Helper and The Comfortable Retreater",
    subtitle: "Intense devotion meets peaceful withdrawal",
    narrative: `Her love was a tidal wave. His peace was a still pond.

"I need to know you love me," she said, pressing close. "Show me. Tell me. Again."

He blinked sleepily from the couch. "I'm here, aren't I?"

"Being here isn't the same as wanting to be here."

He struggled to explain. His love was quiet—a comfortable presence, a steady warmth. He didn't know how to perform the intensity she craved.

"Your passion exhausts me sometimes," he admitted. "Not because I don't love you. Because I can't match it."

She pulled back, stung. "Is calm all you can give?"

"Calm is what I have." He sat up, reaching for her. "But maybe that's what you need too? Somewhere to land after all that intensity?"

She hadn't considered that. Her whole life had been about giving fiercely, receiving fiercely. But here was someone offering something different—not fireworks, but harbor.

"Can you handle how much I love you?" she asked.

"Can you handle how quietly I love you back?"

They weren't the same. They'd never be the same. But maybe that was the point—tidal wave finding still pond, finally learning to rest.`,
    dynamicDescription: "Consuming devotion meets tranquil withdrawal, creating intensity versus peace tension.",
    growthPath: "Two tempering intensity for Nine, Nine engaging with Two's passion.",
    watchOut: "Two overwhelming Nine's peace, Nine's withdrawal wounding Two."
  },
  {
    type1: 2, subtype1: 'sx', type2: 9, subtype2: 'so',
    title: "The Devoted Lover and The Group Harmonizer",
    subtitle: "Intimate intensity meets social peacemaking",
    narrative: `She wanted to be his priority. He wanted everyone to get along.

"The committee meeting ran late," he said, dropping his keys. "The Wilson-Garcia thing needed mediating."

"Again?" She didn't hide her frustration. "You spent all day smoothing their feud."

"Someone has to."

"Does it have to be you? Does their peace matter more than ours?"

He stood in the doorway, caught between the group harmony he'd spent all day maintaining and the intimate storm gathering at home.

"I don't prioritize them over you," he said carefully.

"Then why does it feel like I'm competing with every committee you're on? Every argument you referee?"

He had no good answer. Harmony was his purpose. Keeping peace was how he showed love—to everyone, equally, all the time.

"What if I'm not a group to harmonize?" she asked. "What if I'm a person who needs you to fight for me? Not fight with me—fight for us?"

The distinction landed. He'd been spreading thin, keeping everything smooth. But smooth wasn't the same as deep.

"Tomorrow," he said. "I'm telling them to solve their own problems. Tomorrow is yours."

"Just tomorrow?"

"Let's start there." He held her. "I'm learning. Be patient?"

She would try. Learning together was its own kind of harmony.`,
    dynamicDescription: "Intimate passion meets social harmony, creating competition between relationship and groups.",
    growthPath: "Nine prioritizing relationship, Two appreciating Nine's peacemaking gifts.",
    watchOut: "Two jealous of Nine's social focus, Nine feeling torn between relationship and group harmony."
  },
  {
    type1: 2, subtype1: 'sx', type2: 9, subtype2: 'sx',
    title: "The Passionate Giver and The Complete Merger",
    subtitle: "Consuming devotion meets total fusion",
    narrative: `She gave with everything she had. He received with everything he was. At first, it felt like destiny.

"I love you," she breathed, again and again. "You're everything to me."

"I'm whatever you need me to be," he whispered back. And he meant it—literally. His preferences, his desires, his very self dissolved into hers.

Six months in, she realized she was alone.

"What do you think?" she asked about the apartment.

"Whatever you think."

"What do you want for your birthday?"

"Whatever makes you happy."

"What do you feel? Right now? Your actual feelings?"

He blinked. The question was foreign. He'd merged so completely he couldn't locate where she ended and he began.

"I don't know anymore," he admitted.

She'd wanted total devotion. She'd gotten total disappearance. It wasn't the same thing.

"I need you to come back," she said. "I need there to be someone to love. Not a mirror. A person."

"I don't know who I am without you."

"Then let's find out together." She held his face. "I'll give you less, so you can become more. Is that okay?"

It would have to be. Love couldn't survive in an empty room, no matter how devoted the giver.`,
    dynamicDescription: "Intense giving meets complete receiving, with risk of Nine's self disappearing entirely.",
    growthPath: "Nine maintaining self within merger, Two appreciating Nine's unique presence.",
    watchOut: "Nine completely lost in Two's loving, Two loving someone who's no longer there."
  },

  // ============================================
  // TYPE 3 CROSS-TYPE PAIRINGS
  // ============================================

  // === TYPE 3 WITH TYPE 4 ===
  {
    type1: 3, subtype1: 'sp', type2: 4, subtype2: 'sp',
    title: "The Diligent Worker and The Stoic Sufferer",
    subtitle: "Hard-earned success meets endured pain",
    narrative: `He arrived at the office at 6 AM and left at 9 PM. She worked the same hours but carried a weight he couldn't see.

"You finished the Henderson report early," he said, genuinely impressed. "How do you stay so focused?"

She looked up, eyes tired in ways that had nothing to do with work. "Some of us learned to be productive through pain, not despite it."

He didn't understand. Work was work. You showed up, you delivered, you earned your place. Feelings were separate—or should be.

But one evening, he found her still at her desk, staring at nothing. "The anniversary," she said quietly. "My mother. Five years."

"I'm sorry. Do you need to go home?"

"I need to finish this." Her voice was steady. "Work doesn't stop for grief."

Something in him recognized that discipline—the same muscle he used, just trained on different weight. She wasn't weak. She was carrying more than he'd ever lifted.

"Let me help," he offered. And for the first time, his productivity felt like something other than performance.`,
    dynamicDescription: "Practical achievement meets practical suffering, with shared groundedness but different value systems.",
    growthPath: "Three appreciating emotional depth, Four appreciating practical achievement.",
    watchOut: "Three dismissing Four's feelings as unproductive, Four seeing Three as superficially driven."
  },
  {
    type1: 3, subtype1: 'sp', type2: 4, subtype2: 'so',
    title: "The Quiet Achiever and The Social Outsider",
    subtitle: "Modest success meets visible difference",
    narrative: `She wore all black to the company picnic—vintage lace, silver rings, hair streaked violet. He wore khakis and a polo like everyone else.

"Don't you ever get tired of blending in?" she asked, genuinely curious.

"Don't you ever get tired of standing out?" he replied.

She laughed, but it stung. Standing out wasn't a choice—it was who she was. The difference announced itself whether she wanted it to or not.

He watched her navigate the crowd, noticed how people either gravitated toward her or stepped away. Nobody was neutral. Meanwhile, he moved invisibly, competent, reliable, forgettable.

"They don't see you," she said later, almost sadly. "You do good work and nobody notices."

"That's the point. I don't need to be seen. I need to be valued."

"But what if being seen IS being valued?"

He considered this. His invisibility was armor, just like her visibility was hers. Neither could imagine the other's strategy for survival.

"Maybe," he said slowly, "I could learn to be a little more visible."

"And maybe," she smiled, "I could learn that invisibility isn't the same as inauthenticity."

They were speaking different languages, but starting to translate.`,
    dynamicDescription: "Invisible competence meets visible difference, creating opposing strategies for social navigation.",
    growthPath: "Three allowing more authentic expression, Four appreciating humble competence.",
    watchOut: "Three finding Four's differentiation exhausting, Four seeing Three as inauthentic conformist."
  },
  {
    type1: 3, subtype1: 'sp', type2: 4, subtype2: 'sx',
    title: "The Practical Achiever and The Passionate Feeler",
    subtitle: "Work-focused success meets emotional intensity",
    narrative: `She loved like a storm—every feeling a thunderclap, every disappointment a flood. He built levees against emotion, channeling everything into the steady river of work.

"You're always busy," she said, her voice trembling with something larger than the words. "Do you even notice I'm here?"

He looked up from his laptop. "I'm providing for us. Isn't that noticing?"

"Providing isn't seeing. Providing isn't feeling."

He didn't know what to do with her intensity. It was beautiful and terrifying, like standing too close to lightning. His work made sense. Feelings didn't.

But one night, his project failed spectacularly. Months of effort, gone. He sat in the dark, unable to process it.

She found him there and didn't say anything. Just sat beside him, letting the storm of his failure exist without trying to fix it.

"How do you do this?" he whispered. "Feel this much?"

"Practice," she said. "Unwanted practice."

For the first time, he understood: her intensity wasn't weakness—it was a skill he'd never developed. And maybe he needed it. Maybe he needed her to teach him that some things were worth more than getting done.`,
    dynamicDescription: "Work productivity meets emotional intensity, creating practical versus feeling tension.",
    growthPath: "Three creating space for emotional connection, Four appreciating Three's stability.",
    watchOut: "Three dismissing Four's emotions as impractical, Four feeling unseen by work-focused Three."
  },
  {
    type1: 3, subtype1: 'so', type2: 4, subtype2: 'sp',
    title: "The Social Star and The Private Sufferer",
    subtitle: "Public success meets hidden pain",
    narrative: `He came home from the gala glowing, phone buzzing with congratulations. She sat in the dark living room, a half-finished painting turned toward the wall.

"You wouldn't believe it—two investors want to meet. The mayor himself mentioned my name."

She nodded, tried to smile. The chasm between his glittering world and her quiet one seemed unbridgeable tonight.

"You could have come," he said, sensing the distance.

"Your world exhausts me." She wasn't complaining—just stating fact.

He sat beside her, still in his tuxedo. "What happened today?"

"Nothing. Everything. The painting won't come right. My father's birthday would have been today." She didn't elaborate. She never did.

"You carry so much alone," he said quietly.

"You carry so much publicly. Doesn't that exhaust you?"

He considered. The performance did exhaust him. But he didn't know any other way to matter.

"Come here," she said, pulling him toward the couch. "Leave your phone. Just... be nobody with me for a while."

He let the notifications pile up. In the dark, with her, he discovered that being nobody felt surprisingly like being real. And she discovered that being known, even a little, felt less lonely than enduring alone.`,
    dynamicDescription: "Public visibility meets private endurance, creating challenge around exposure and intimacy.",
    growthPath: "Three valuing Four's grounding depth, Four allowing Three's social success.",
    watchOut: "Three neglecting Four for public life, Four resenting Three's need for external validation."
  },
  {
    type1: 3, subtype1: 'so', type2: 4, subtype2: 'so',
    title: "The Social Winner and The Social Outsider",
    subtitle: "Success through winning meets success through difference",
    narrative: `They were both watching the room—he calculating who to impress, she calculating how to escape.

"You're networking wrong," he said, half-joking. "You're supposed to make them like you, not intimidate them with how different you are."

"And you're supposed to have a personality, not just a strategy."

They'd clashed like this since college. He climbed every ladder; she refused to acknowledge ladders existed. He won awards; she won admirers who appreciated her refusal to compete.

"Don't you ever get tired of winning?" she asked.

"Don't you ever get tired of losing?"

"I'm not losing. I'm opting out."

"Same result."

But late one night, both of them exhausted by the same party for different reasons, something cracked.

"I don't know who I am without the wins," he admitted.

"I don't know who I am without the difference," she replied.

They looked at each other—two people obsessed with how they were seen, terrified of being seen clearly.

"Maybe," she offered, "you could teach me how to win sometimes."

"Maybe," he replied, "you could teach me that losing isn't the same as disappearing."

They didn't solve it that night. But they started speaking the same language—the language of people who knew that image was everything, and that everything was never enough.`,
    dynamicDescription: "Winning and differentiation as opposite responses to social environment.",
    growthPath: "Three finding authenticity beyond winning, Four finding belonging beyond difference.",
    watchOut: "Three dismissing Four's differentiation as failure to compete, Four seeing Three as hollow achiever."
  },
  {
    type1: 3, subtype1: 'so', type2: 4, subtype2: 'sx',
    title: "The Public Success and The Intense Artist",
    subtitle: "Social achievement meets passionate depth",
    narrative: `He showed her the magazine feature, his face on the cover. She looked at it, then at him, waiting for something more.

"Isn't this amazing? This is everything I've worked for."

"It's a picture of you," she said. "But it's not you."

He deflated. "You never celebrate with me."

"I celebrate you. I don't celebrate your image."

To him, the image was everything—the proof he existed, mattered, had made it. To her, the image was a wall between them, a million admirers standing where she wanted to stand alone.

"Do you know what I wish?" she said one night. "I wish you looked at me the way you look at your reviews."

"That's not fair."

"No. But it's true."

He put down his phone. Really looked at her. "What do you see when you look at me?"

"Someone brilliant who's terrified nobody will notice unless he's winning."

It landed like a blow. Because she was right. The applause was armor. Without it, he didn't know if he existed.

"What if I'm nothing without all this?" he whispered.

"Then we'd find out together." She took his hand. "That's what I want. Not your success. Your truth."

For the first time, he wondered if being truly seen by one person might be worth more than being admired by thousands.`,
    dynamicDescription: "Public success meets private depth, creating breadth versus depth tension.",
    growthPath: "Three valuing intimate depth over public recognition, Four appreciating Three's worldly success.",
    watchOut: "Four feeling secondary to Three's public, Three feeling Four doesn't value achievements."
  },
  {
    type1: 3, subtype1: 'sx', type2: 4, subtype2: 'sp',
    title: "The Magnetic Achiever and The Stoic Artist",
    subtitle: "Personal allure meets quiet endurance",
    narrative: `He entered the gallery like he owned it—charming the curator, captivating collectors, turning every conversation into an opportunity. She stood by her paintings, saying little, letting the work speak.

"Your pieces are extraordinary," he said, having finally made his way to her. "You should market yourself more."

"The art markets itself. Or it doesn't."

His charm usually worked instantly. Her indifference was both frustrating and fascinating.

"Don't you want success?" he pressed.

"I want authenticity. If success comes from that, fine. If not..." She shrugged. The gesture was devastating—a complete dismissal of everything he'd built his life around.

He kept coming back. Not to network, but to watch her work. To see someone create without caring who was watching.

"How do you do it?" he finally asked. "Not need applause?"

"Pain taught me." She put down her brush. "When you've suffered enough, approval stops mattering. You just want to be real."

He sat with that. His whole life was applause—but what was underneath it?

"Show me something real," he said quietly.

She handed him a brush. "Create something no one will ever see."

It was the hardest thing he'd ever done. And somehow, the most true.`,
    dynamicDescription: "Personal magnetism meets quiet authenticity, testing whether charm can meet depth.",
    growthPath: "Three finding value in Four's genuine reserve, Four opening to Three's energy.",
    watchOut: "Three frustrated by Four's non-response to charm, Four seeing Three as all surface."
  },
  {
    type1: 3, subtype1: 'sx', type2: 4, subtype2: 'so',
    title: "The Seductive Winner and The Creative Outsider",
    subtitle: "Personal captivation meets group differentiation",
    narrative: `He worked a room one person at a time—full attention, magnetic focus, making each feel like the only one who mattered. She worked the room by standing apart—the one who didn't belong, the fascinating outsider everyone wondered about.

"You're manipulating them," she said afterward, not entirely disapproving.

"You're performing loneliness," he countered. "How is that different?"

She bristled. "My difference is real."

"So is my interest. In the moment."

They circled each other for months, each recognizing something in the other—the same hunger to be seen as special, expressed through opposite strategies.

"Why do you need everyone to want you?" she asked one night.

"Why do you need everyone to notice you're not like them?"

Neither could answer honestly. The truth was too tender: both feared being ordinary, invisible, forgettable.

"What if," he said slowly, "we were special to each other? Just each other. No audience."

"That terrifies me."

"Me too."

They sat in that shared fear. Two people who'd built identities around being exceptional, wondering if they could find something more real than performance.

"Let's try," she said finally.

For once, he didn't charm. And for once, she didn't differentiate. They just stayed.`,
    dynamicDescription: "Individual seduction meets social differentiation, both seeking to be seen as special.",
    growthPath: "Three broadening beyond individual targets, Four focusing on intimate connection.",
    watchOut: "Competition for specialness, Three seeing Four's social focus as scattered, Four seeing Three's seduction as shallow."
  },
  {
    type1: 3, subtype1: 'sx', type2: 4, subtype2: 'sx',
    title: "The Captivating Achiever and The Passionate Soul",
    subtitle: "Seductive success meets emotional depth",
    narrative: `The attraction was instant—two intensities colliding like weather systems. He seduced with every glance; she burned with feelings she couldn't contain.

"You're incredible," he breathed, and meant it. In the moment.

"Show me who you are," she demanded. "Not the performance. You."

"This is me."

"No. This is you winning. I want to see you losing. Uncertain. Real."

He didn't know how. His whole life was curated intensity—passion as strategy, depth as technique. Hers was the opposite: intensity without filter, feeling without control.

"Your emotions terrify me," he admitted one night.

"Your performance terrifies me more," she replied. "Because I can't tell what's underneath."

"What if there's nothing underneath?"

She looked at him for a long moment. "Then we'd find nothing together."

He broke then—not performed breaking, real breaking. Tears he'd never let anyone see. Fear he'd spent a lifetime hiding.

She held him. "There you are," she whispered. "Finally."

In that moment, his seduction became surrender, and her intensity became shelter. They discovered that two fires could warm each other instead of competing to burn brightest.

"Stay broken with me," she said.

And he did.`,
    dynamicDescription: "Performed intensity meets genuine intensity, testing whether seduction can meet soul.",
    growthPath: "Three moving from performance to authenticity, Four appreciating Three's vulnerable truth.",
    watchOut: "Four seeing through Three's performance, Three overwhelmed by Four's emotional demands."
  },

  // === TYPE 3 WITH TYPE 5 ===
  {
    type1: 3, subtype1: 'sp', type2: 5, subtype2: 'sp',
    title: "The Diligent Worker and The Self-Sufficient Hermit",
    subtitle: "Hard work meets minimal needs",
    narrative: `Her calendar was a battlefield, every hour conquered. His was nearly empty—by design.

"I got the promotion," she announced, expecting celebration.

"Do you want it, or do you want them to want you to have it?"

She paused. "Both, I guess."

He nodded, returned to his book. His apartment was sparse—deliberately so. Every possession chosen, nothing excessive. Security through needing less, not earning more.

"Doesn't it bother you," she asked, "not achieving your potential?"

"This is my potential. Enough money, enough space, enough time to think." He looked around. "I don't need more. You don't either, actually. You just think you do."

"That's not fair."

"Neither is working sixty hours a week for furniture you never sit on."

They were both seeking security—she by accumulating, he by reducing. Neither understood the other's math.

But when her company collapsed and everything she'd built scattered, he was still there. Still steady. Still enough.

"How are you not panicking?" she whispered.

"I never had much to lose."

She saw it then: his minimalism wasn't failure—it was freedom. And maybe, just maybe, there was a middle path between his empty rooms and her crowded schedule.

"Teach me," she said. "Teach me how to need less."

He made her tea. "Start here," he said. "Just this. Nothing else."`,
    dynamicDescription: "Practical achievement meets practical withdrawal, with shared competence but different strategies.",
    growthPath: "Three appreciating Five's sufficiency, Five appreciating Three's productive energy.",
    watchOut: "Three pushing Five toward unwanted achievement, Five withdrawing from Three's drive."
  },
  {
    type1: 3, subtype1: 'sp', type2: 5, subtype2: 'so',
    title: "The Quiet Achiever and The Knowledge Sharer",
    subtitle: "Modest success meets intellectual community",
    narrative: `She built spreadsheets that sang. He built theories that explained the universe—to small audiences of equally fascinated minds.

"I don't understand your research," she admitted over dinner. "But I respect how much you know."

"I don't understand your quarterly reports," he replied. "But I respect how much you accomplish."

It was an odd pairing—her practical competence, his intellectual depth. She networked at industry conferences; he presented at academic symposia. Different worlds, different currencies of value.

"Why don't you publish more?" she asked once. "You could be famous in your field."

"Fame isn't the point. Understanding is."

"But how do people know you're good if you don't show them?"

He smiled. "The people who matter know. The community knows. That's enough."

She turned that over. Her whole life was proving herself to people who didn't really know her. His was being known by a few who truly understood.

"Teach me something," she said suddenly. "Something from your world."

He lit up—actually lit up—and began explaining a concept that meant nothing to her career but everything to him.

She listened. Not to use it, just to share it. And he discovered that sometimes the best audience isn't the one that understands—it's the one that cares anyway.`,
    dynamicDescription: "Practical competence meets intellectual competence, with potential for mutual respect.",
    growthPath: "Three valuing intellectual contribution, Five valuing practical achievement.",
    watchOut: "Three seeing Five's knowledge as impractical, Five seeing Three's work as intellectually shallow."
  },
  {
    type1: 3, subtype1: 'sp', type2: 5, subtype2: 'sx',
    title: "The Practical Achiever and The Romantic Hermit",
    subtitle: "Work-focused success meets hidden longing",
    narrative: `She noticed him watching her from across the office—always at a distance, always looking away when caught. He seemed cold, detached, uninterested. She forgot about him and returned to her work.

But he watched. He watched her efficiency, her quiet determination, the way she made things happen without fanfare. He was fascinated. And terrified.

One late night, both working after hours, she found him staring at a blank screen.

"Are you okay?"

He startled. "I don't know how to do what you do."

"Work?"

"Exist in the world. You make it look so easy."

She sat down, surprised. The detached intellectual was anything but detached up close. His eyes held oceans.

"I don't feel things," she admitted. "That's my secret. I just do."

"I feel everything," he whispered. "That's mine. So I hide."

It was the most intimate confession she'd ever received. From the person she'd assumed was emptiest.

"What do you feel about me?" she asked, suddenly bold.

He looked at her—really looked. "More than I can say. More than I know how to show."

She took his hand. "Then don't say. Don't show. Just stay."

He stayed. And she discovered that beneath her productivity was loneliness, and beneath his withdrawal was a heart that had been waiting for someone safe enough to see it.`,
    dynamicDescription: "Practical work meets hidden longing, with potential for surprising depth.",
    growthPath: "Three discovering Five's hidden intensity, Five trusting Three's steady presence.",
    watchOut: "Three missing Five's emotional needs, Five hiding from rather than connecting with Three."
  },
  {
    type1: 3, subtype1: 'so', type2: 5, subtype2: 'sp',
    title: "The Social Star and The Complete Hermit",
    subtitle: "Public success meets total withdrawal",
    narrative: `She was everywhere—charity boards, magazine profiles, keynote speeches. He was nowhere—a small apartment, few possessions, carefully rationed social energy.

"Come to the gala with me," she pleaded. "Just this once."

"I can't." Not wouldn't. Can't. The thought of all those people, all that noise, all that expectation—it would empty him for weeks.

"You're embarrassing me," she said, then regretted it instantly.

"I know." His voice was quiet. "I'm sorry."

She saw then how much it cost him—not just the events, but the guilt of failing her. He wanted to want what she wanted. He just... couldn't.

"What do you need?" she asked, really asking for the first time.

"Silence. Space. Time. You, without the audience."

"Is there room for me in that life?"

He thought carefully. "Yes. But not the version of you that needs the audience."

It was an impossible ask. Her whole identity was built on being seen. His was built on not being seen.

But sometimes, late at night, she'd come to his quiet apartment and they'd sit in silence together. No performance, no withdrawal. Just two people, exhausted by their own strategies, resting.

"I don't know how to make this work," she admitted.

"Neither do I," he said. "But this—right now—this works."

It wasn't enough. But it was something real.`,
    dynamicDescription: "Maximum social versus solitary contrast, creating fundamental orientation clash.",
    growthPath: "Three valuing quiet connection, Five engaging with Three's world selectively.",
    watchOut: "Three feeling rejected by Five's withdrawal, Five overwhelmed by Three's social demands."
  },
  {
    type1: 3, subtype1: 'so', type2: 5, subtype2: 'so',
    title: "The Public Achiever and The Intellectual Networker",
    subtitle: "Social status meets social intellect",
    narrative: `They met at a conference—she accepting an award, he presenting a paper. Different rooms, different audiences, different definitions of success.

"I've read your work," she said at the reception. "It's impressive. You should promote it more."

"I've seen your achievements," he replied. "They're impressive. You should deepen them more."

They circled each other for months, each recognizing something valuable in the other's approach. She had reach; he had depth. She knew everyone; he knew everything.

"Collaborate with me," she proposed eventually. "Your ideas, my platform."

"Use my work to advance your brand, you mean."

"Use your brand to advance your work."

He considered. It wasn't wrong. His ideas deserved wider audiences. Her influence needed more substance.

"I want credit," he said.

"You'll get exposure."

"I want respect."

She paused. "You have mine. Always have."

The admission surprised them both. Beneath her ambition, she genuinely admired his mind. Beneath his reserve, he genuinely admired her drive.

"Partners, then," he said. "Not user and used."

"Partners," she agreed.

They built something together—her face, his brain, both finding that contribution could be shared without being diminished. That status and expertise weren't enemies—just different languages for the same desire to matter.`,
    dynamicDescription: "Social achievement and intellectual contribution, potentially complementary in shared communities.",
    growthPath: "Three valuing intellectual depth, Five engaging with social ambition.",
    watchOut: "Three finding Five cold, Five finding Three intellectually shallow."
  },
  {
    type1: 3, subtype1: 'so', type2: 5, subtype2: 'sx',
    title: "The Social Success and The Secret Yearner",
    subtitle: "Public recognition meets hidden intensity",
    narrative: `He was everywhere—panels, podcasts, profiles. She watched from the shadows, fascinated by his ease in the spotlight, terrified of being seen herself.

He noticed her eventually—the quiet one at every event, always observing, never participating. Something about her attention felt different from the usual admiration. Deeper. More dangerous.

"Why do you come if you never speak?" he asked one evening.

"I'm studying."

"Studying what?"

"How to want what you have without becoming what you are."

The honesty stunned him. Nobody spoke to him like that—without the usual filters of networking or flattery.

"What do you want?" he asked.

"Connection." She said it like a confession. "Real connection. But I can't do what you do. All those people wanting pieces of you. I'd disappear."

"Sometimes I do too," he admitted. "Disappear, I mean. Inside the performance."

They found each other after events—her, waiting until the crowds cleared; him, exhausted from being public. In those quiet moments, she showed him depths he'd forgotten existed. He showed her that visibility didn't have to mean vulnerability.

"You make me want to be known," she whispered.

"You make me want to be real," he replied.

It was a strange exchange—her hidden intensity for his public ease. But both of them were starving for what the other had.`,
    dynamicDescription: "Public success meets hidden longing, with potential for surface-depth complementarity.",
    growthPath: "Three discovering Five's hidden depths, Five trusting Three with their longing.",
    watchOut: "Three missing Five's emotional needs for public demands, Five remaining hidden from public Three."
  },
  {
    type1: 3, subtype1: 'sx', type2: 5, subtype2: 'sp',
    title: "The Magnetic Achiever and The Self-Sufficient Hermit",
    subtitle: "Personal allure meets complete withdrawal",
    narrative: `She had never met anyone immune to her charm. He had never met anyone who wouldn't take no for an answer.

"Dinner?" she offered, her most captivating smile in place.

"I prefer to eat alone."

"Drinks?"

"I don't drink."

"Coffee?"

"I have coffee at home."

Any normal person would have given up. But his resistance fascinated her. Who was this man who needed nothing from anyone?

She stopped trying to seduce and started trying to understand. Watched from a distance. Noticed his patterns—the careful rationing of energy, the small apartment, the books that were his only companions.

"Why do you need so little?" she finally asked.

"Why do you need so much?" he replied.

It wasn't hostile. Just curious. Two aliens studying each other.

"I need people to want me," she admitted. "It's how I know I exist."

"I need people to leave me alone. It's how I stay myself."

They sat with that—the impossible distance between them.

But she kept showing up. Not seducing, just being present. And slowly, impossibly, he started leaving the door unlocked.

"I'm not going to want you the way you want to be wanted," he warned.

"I know. But you see me clearly. That might be better."

He let her in. Not far—never far. But further than he'd let anyone in years.`,
    dynamicDescription: "Personal magnetism meets impenetrable withdrawal, creating seduction versus independence standoff.",
    growthPath: "Five trusting Three enough to open, Three accepting Five's need for extensive space.",
    watchOut: "Three's charm failing against Five's walls, Five's withdrawal experienced as rejection."
  },
  {
    type1: 3, subtype1: 'sx', type2: 5, subtype2: 'so',
    title: "The Seductive Winner and The Intellectual Engager",
    subtitle: "Personal captivation meets cerebral connection",
    narrative: `She leaned in close, her signature move. He leaned back, citing a relevant study.

"The research on personal space suggests—"

"I don't want research. I want connection."

"This IS connection. For me."

They were speaking different languages entirely. She connected through chemistry, magnetism, the electric space between bodies. He connected through ideas, through the thrill of shared understanding, through intellectual communion.

"Why won't you just let yourself feel something?" she asked, frustrated.

"I am feeling something. Curiosity. Excitement about that article you mentioned. Interest in your perspective on—"

"That's not what I mean!"

"I know." He paused. "But it's what I have. I don't know how to feel the way you want me to feel. I only know how to think."

She stopped. Really looked at him. He wasn't cold—he was different. His enthusiasm, when he explained his theories, was genuine. His engagement with ideas was passionate. Just not physical.

"Teach me," she said finally. "Teach me how you connect."

His face lit up. "Really?"

"Really. Show me what excites you."

He started talking about epistemology. And somehow, watching him come alive intellectually, she felt something she'd never felt with anyone she'd seduced. Being wanted for her mind was different from being wanted for her charm. And maybe, just maybe, it was better.`,
    dynamicDescription: "Personal seduction meets intellectual engagement, testing whether different connection styles can meet.",
    growthPath: "Three appreciating intellectual connection, Five opening to personal chemistry.",
    watchOut: "Three frustrated by Five's cerebral responses, Five overwhelmed by Three's personal intensity."
  },
  {
    type1: 3, subtype1: 'sx', type2: 5, subtype2: 'sx',
    title: "The Captivating Achiever and The Secret Romantic",
    subtitle: "Seductive success meets hidden passion",
    narrative: `He saw her across the room and knew immediately: she wanted him. The question was whether she'd ever admit it.

She saw him across the room and knew immediately: he wanted her attention. The question was whether he could handle what she really wanted—which was everything, forever, completely.

He approached with his usual confidence. She retreated with her usual fear.

"Don't go," he said. "I'm not dangerous."

"You are. You're exactly what I want. And that terrifies me."

He paused, intrigued. Nobody had ever called him terrifying. Desirable, yes. Successful, certainly. But terrifying?

"What do you want?" he asked quietly.

"Your soul. Not your charm—your soul. And you don't give that to anyone."

"Neither do you."

They stood in that recognition—two people who wanted profound connection, one hiding it behind seduction, one hiding it behind withdrawal.

"I don't know how to be with someone who won't let me perform," he admitted.

"I don't know how to be with someone at all," she replied.

"Then we're both terrified."

"Yes."

He took her hand—gently, no performance. She didn't pull away.

"What if we were terrified together?" he asked.

She looked at their hands, intertwined. "I'd like that. I think."

They left the party early, neither of them performing, neither of them hiding. Just two people who wanted the same thing—connection so deep it hurt—finally brave enough to reach for it.`,
    dynamicDescription: "Open seduction meets hidden longing, with potential for profound connection through fear.",
    growthPath: "Five trusting Three's genuine interest, Three being patient with Five's fear.",
    watchOut: "Five's fear defeating their longing, Three frustrated by Five's ambivalence."
  },

  // === TYPE 3 WITH TYPE 6 ===
  {
    type1: 3, subtype1: 'sp', type2: 6, subtype2: 'sp',
    title: "The Diligent Worker and The Security Builder",
    subtitle: "Hard work meets anxious preparation",
    narrative: `He built the business from nothing—sixty-hour weeks, every dollar reinvested, success earned through relentless work. She built the contingency plans—insurance policies, emergency funds, backup systems for every scenario.

"We don't need three months of expenses in savings," he said, studying another expansion opportunity. "That capital could be working for us."

"And when something goes wrong?" She pulled up the spreadsheet she'd prepared. "Because something always goes wrong."

He saw her caution as fear wearing a practical disguise. She saw his confidence as recklessness dressed up as ambition.

Then the market crashed. Orders evaporated overnight.

She had the reserves ready. The emergency protocols. The survival plan she'd built while he'd been building the dream.

"You saved us," he admitted, humbled.

"You built something worth saving," she replied.

He learned that her worry wasn't weakness—it was wisdom wearing work clothes. She learned that his confidence wasn't naive—it was the engine that created what she protected.

Now they build together: him reaching for the next summit, her securing the rope.`,
    dynamicDescription: "Confident achievement meets cautious preparation, with potential for balanced security approach.",
    growthPath: "Three taking Six's concerns seriously, Six trusting Three's confidence.",
    watchOut: "Three dismissing Six's fears as weakness, Six undermining Three's confidence with doubt."
  },
  {
    type1: 3, subtype1: 'sp', type2: 6, subtype2: 'so',
    title: "The Quiet Achiever and The Loyal Follower",
    subtitle: "Modest success meets system loyalty",
    narrative: `She worked late every night, quietly exceeding every metric, her achievements speaking louder than self-promotion ever could. He arrived early every morning, checking that protocols were followed, ensuring the team had what it needed.

"You should take more credit," he told her once, watching her hand another success to the department. "You did the work."

"The work speaks for itself." She shrugged. "I don't need applause."

But she noticed he always credited her in meetings. Always directed attention her way when leadership visited. His loyalty to the team extended specifically to her.

"Why do you do that?" she asked.

"Because someone should fight for you," he said simply. "Even if you won't."

She'd never had a champion before. Someone who believed in systems but bent them for her.

He'd never had someone who achieved so selflessly. Someone who made the team look good without demanding recognition.

"I'll never understand your loyalty to procedures," she admitted.

"I'll never understand your indifference to credit," he replied.

They didn't need to understand. They just needed to keep showing up—her achieving, him advocating, both finally feeling seen.`,
    dynamicDescription: "Individual competence meets group loyalty, with potential for organizational partnership.",
    growthPath: "Three valuing Six's organizational loyalty, Six appreciating Three's competence.",
    watchOut: "Three feeling unsupported individually, Six feeling Three lacks team commitment."
  },
  {
    type1: 3, subtype1: 'sp', type2: 6, subtype2: 'sx',
    title: "The Practical Achiever and The Counterphobic Fighter",
    subtitle: "Steady work meets aggressive courage",
    narrative: `He built things brick by brick—steady, methodical, never dramatic. She charged at every obstacle like it had personally wronged her.

"You don't have to fight the contractor," he said wearily, watching her pace after another confrontation. "I could have negotiated."

"Negotiated?" She stopped. "He was cheating us. Someone had to call it out."

To him, her aggression felt like chaos—unnecessary, exhausting, potentially damaging to the business relationships he'd carefully cultivated. To her, his caution felt like cowardice—a willingness to be walked over in exchange for keeping the peace.

Then the supplier tried to shortchange them. Before he could craft a diplomatic email, she was on the phone, voice like steel.

He watched, half horrified, half fascinated.

The supplier backed down completely.

"You could have ruined that relationship," he said afterward.

"Or I just established that we can't be pushed around." She crossed her arms. "Now they'll respect you."

She was his sword. He was her foundation. Together, they were harder to cheat—and harder to topple.

"Just warn me next time," he said.

"Where's the fun in that?"`,
    dynamicDescription: "Steady achievement meets confrontational courage, with potential for protective partnership.",
    growthPath: "Three appreciating Six's protective strength, Six appreciating Three's stable productivity.",
    watchOut: "Six's intensity disrupting Three's work, Three seeming passive to action-oriented Six."
  },
  {
    type1: 3, subtype1: 'so', type2: 6, subtype2: 'sp',
    title: "The Social Star and The Private Worrier",
    subtitle: "Public success meets personal anxiety",
    narrative: `She thrived in the spotlight—keynote speeches, industry awards, her face on the company newsletter. He thrived in the shadows—checking the locks twice, monitoring their accounts, lying awake calculating what-ifs.

"You worry too much," she said, adjusting her outfit before another networking event.

"You don't worry enough," he replied from the couch, laptop open to their home security system.

Her confidence baffled him. How could she walk into rooms full of strangers and shine? His anxiety baffled her. How could someone so capable feel so unsafe?

But when the industry turned volatile, his preparation saved them. The emergency fund he'd insisted on. The backup plan she'd dismissed as paranoid.

"You were right," she admitted, humbled.

"And you were right that I was hiding," he said quietly. "Your success gives us options I never could have created alone."

She learned that his worry was love wearing practical clothes—preparation as devotion. He learned that her ambition was security in another form—visibility as protection.

"Come to the next event with me," she offered.

"I'll watch the door," he said. But he smiled when he said it.`,
    dynamicDescription: "Public confidence meets private worry, creating potential security through success.",
    growthPath: "Three providing security through achievement, Six trusting public engagement.",
    watchOut: "Three dismissing Six's fears, Six undermining Three's public confidence."
  },
  {
    type1: 3, subtype1: 'so', type2: 6, subtype2: 'so',
    title: "The Public Winner and The Group Loyalist",
    subtitle: "Social achievement meets systemic commitment",
    narrative: `They met at the company retreat—she accepting the rising star award, he coordinating the logistics nobody thanked him for.

"Congratulations," he said, genuine but measured. "You've worked hard."

"Thanks for making sure there was a stage to stand on," she replied, surprising him.

She climbed ladders; he maintained them. She gave the speeches; he fact-checked them. She took the glory; he took comfort in the institution that made glory possible.

"Why don't you want more?" she asked once, genuinely puzzled.

"Why do you need so much?" he countered, equally confused.

She saw his devotion to the company as a lack of personal drive. He saw her individual ambition as potential disloyalty to the team.

But when a crisis hit, she led the charge while he rallied the troops. Her vision inspired; his organizing executed. They needed each other more than either had admitted.

"You make the team believe in itself," she said afterward.

"You give them something to believe in," he replied.

She stopped seeing his loyalty as weakness. He stopped seeing her ambition as betrayal. The group needed stars and stewards both—and they'd finally realized they were playing for the same side.`,
    dynamicDescription: "Individual achievement meets group loyalty, with potential for leader-supporter dynamic.",
    growthPath: "Three valuing Six's loyal support, Six appreciating Three's leading achievement.",
    watchOut: "Three seeing Six as unambitious, Six seeing Three as self-serving."
  },
  {
    type1: 3, subtype1: 'so', type2: 6, subtype2: 'sx',
    title: "The Social Success and The Fierce Defender",
    subtitle: "Public recognition meets counterphobic strength",
    narrative: `She built her reputation with precision—every connection calculated, every appearance polished, her public image a masterpiece of careful cultivation. He built his reputation differently—by never backing down, never flinching, making sure everyone knew what happened to people who crossed him.

"You can't threaten the investor," she hissed after the meeting. "Do you know how long it took me to get that introduction?"

"He was condescending to you." His jaw was tight. "Someone had to say something."

"That's not how this works!"

To her, his aggression was a wrecking ball swinging through her carefully constructed world. To him, her image management was a performance that had forgotten how to be real.

But at the gala, when a rival tried to publicly undermine her, he didn't threaten. He simply stood beside her—fierce, protective, unmistakably dangerous—and the rival retreated.

"You didn't have to do that," she said quietly afterward.

"Yes, I did."

She realized his fire wasn't chaos—it was loyalty that burned. He realized her polish wasn't shallow—it was strategy with a purpose.

"Maybe I need a bodyguard," she admitted.

"Maybe I need someone worth protecting," he replied.`,
    dynamicDescription: "Social success and social fighting potentially combining or clashing.",
    growthPath: "Six channeling aggression to protect Three's success, Three appreciating Six's genuine courage.",
    watchOut: "Six's aggression damaging Three's social image, Three seeming fake to authentic Six."
  },
  {
    type1: 3, subtype1: 'sx', type2: 6, subtype2: 'sp',
    title: "The Magnetic Achiever and The Anxious Worrier",
    subtitle: "Personal allure meets security anxiety",
    narrative: `He walked into rooms and people leaned toward him—magnetic, accomplished, radiating the kind of confidence that made others feel safe just being near him. She watched from corners, calculating exits, mentally cataloging every possible threat.

"You're doing it again," he said gently, finding her at another party. "Watching the doors instead of enjoying yourself."

"Someone has to."

His charm had never failed him before, but her anxiety remained impervious—no amount of success or magnetism could dissolve her worry. It frustrated him at first. Wasn't he proof that things could work out?

But one evening, when his confidence cracked—a deal falling through, doubt creeping in—she was already there with backup plans, practical solutions, the security net he never knew he needed.

"How did you know?" he asked.

"I always plan for everything," she said simply. "Including you falling."

He finally understood: her worry wasn't weakness. It was the foundation that let him fly.`,
    dynamicDescription: "Confident allure meets anxious worry, testing whether charm provides security.",
    growthPath: "Three's confidence genuinely reassuring Six, Six's reality-checking grounding Three.",
    watchOut: "Six's anxiety unaffected by Three's charm, Three frustrated by Six's persistent doubt."
  },
  {
    type1: 3, subtype1: 'sx', type2: 6, subtype2: 'so',
    title: "The Seductive Winner and The System Loyalist",
    subtitle: "Personal captivation meets group commitment",
    narrative: `She could captivate anyone—a glance, a smile, and they were hers. He belonged to something bigger: the union, the committee, the cause. His loyalty wasn't to individuals but to systems.

"Why do you care more about those meetings than about us?" she asked one evening, frustrated that he'd chosen another committee gathering over dinner together.

"Because they need me. We're building something important."

"I need you too."

He looked torn, genuinely pained. "It's not that I don't want to be with you. But I can't just abandon people who are counting on me."

She started attending his meetings—not for the cause, but for him. Yet somewhere along the way, she began to care about what they were building too. And he began to see her not just as a distraction from duty, but as the passionate heart his causes had been missing.

"You make people believe," he told her one night. "Not in the system—in each other."

She'd found something worth more than captivation: belonging.`,
    dynamicDescription: "Individual seduction meets systemic loyalty, creating tension over focus.",
    growthPath: "Three engaging with Six's group commitments, Six allowing individual connection.",
    watchOut: "Three feeling neglected for Six's groups, Six feeling Three undermines systemic loyalty."
  },
  {
    type1: 3, subtype1: 'sx', type2: 6, subtype2: 'sx',
    title: "The Captivating Achiever and The Counterphobic Fighter",
    subtitle: "Seductive success meets aggressive courage",
    narrative: `Two fires burning in the same room. He drew people in with magnetic charm—seductive, successful, impossible to ignore. She pushed back against the world with fierce courage—confronting every threat, backing down from nothing.

Their first meeting was electric. "You're not afraid of me," she said, almost accusingly.

"Should I be?"

"Most people are."

"I'm not most people."

Neither backed down, neither yielded. Their arguments could shake walls, their chemistry could fill stadiums. Friends watched nervously, wondering if this would end in disaster or destiny.

"You fight everything," he said after one explosive evening. "Even me."

"And you charm everything," she shot back. "Even when it's not working."

But in that honesty, something shifted. She realized his magnetism gave her somewhere safe to land. He realized her courage would protect what he'd built.

"Together," she said finally, "we're either going to burn everything down or conquer the world."

He smiled. "Why not both?"`,
    dynamicDescription: "Seductive and confrontational power creating intense mutual respect or explosive conflict.",
    growthPath: "Three's charm softening Six's aggression, Six's courage protecting Three's success.",
    watchOut: "Explosive conflicts between strong personalities, competition for interpersonal dominance."
  },

  // === TYPE 3 WITH TYPE 7 ===
  {
    type1: 3, subtype1: 'sp', type2: 7, subtype2: 'sp',
    title: "The Diligent Worker and The Resourceful Opportunist",
    subtitle: "Hard work meets strategic networking",
    narrative: `He arrived early to every meeting, prepared every document, worked every weekend. She arrived with three business cards from people she'd met in the elevator, two potential partnership opportunities, and an idea she'd overheard at a coffee shop.

"How do you find time for all that networking?" he asked, genuinely baffled.

"How do you find time for all that working?" she countered.

They'd been assigned the same project—his discipline, her connections. At first he thought she was scattered, jumping from opportunity to opportunity. She thought he was limited, head down in details while the world offered treasures.

But when her latest opportunity needed execution, she came to him. When his meticulous work needed visibility, she knew exactly who to call.

"I found the door," she said one evening, handing him a contract.

"I built what's behind it," he replied.

They looked at each other with new understanding. His labor and her networking weren't opposites—they were the two hands that built empires.`,
    dynamicDescription: "Hard work meets opportunistic networking, with potential for complementary success strategies.",
    growthPath: "Three valuing Seven's opportunity creation, Seven valuing Three's follow-through.",
    watchOut: "Three seeing Seven as unfocused, Seven seeing Three as too narrowly focused."
  },
  {
    type1: 3, subtype1: 'sp', type2: 7, subtype2: 'so',
    title: "The Quiet Achiever and The Social Entertainer",
    subtitle: "Modest work meets group excitement",
    narrative: `She worked with her door closed, headphones on, productivity her only measure of a day well spent. He worked the room at every gathering, leaving trails of laughter and half-finished conversations behind him.

"You should come to the team happy hour," he said, leaning into her office. "People are starting to think you don't like them."

"I'm busy."

"You're always busy."

She went once, to prove a point—and found herself exhausted within an hour. So much talking, so little accomplished. But she noticed something: people lit up around him. Ideas sparked. Connections formed.

"How do you do that?" she asked afterward.

"Do what?"

"Make people feel like anything is possible."

He smiled. "How do you make anything actually happen?"

She'd never thought of it that way. His lightness wasn't frivolity—it was fuel. Her seriousness wasn't heavy—it was the engine.

"Maybe," she said slowly, "we need each other."`,
    dynamicDescription: "Quiet productivity meets social animation, testing whether work and play can balance.",
    growthPath: "Three enjoying Seven's lightness, Seven appreciating Three's solid achievement.",
    watchOut: "Three finding Seven unserious, Seven finding Three too heavy and work-focused."
  },
  {
    type1: 3, subtype1: 'sp', type2: 7, subtype2: 'sx',
    title: "The Practical Achiever and The Fascinated Explorer",
    subtitle: "Work-focused success meets deep curiosity",
    narrative: `He built things methodically—brick by brick, hour by hour, achievement by achievement. She dove into subjects like a woman possessed, emerging weeks later knowing everything about Renaissance art or quantum physics or fermentation.

"You're obsessed with that," he observed, watching her third consecutive evening lost in research.

"Fascinated," she corrected. "There's a difference."

"Is there?"

She looked up, really seeing him for the first time in days. "Obsession is compulsive. Fascination is... chosen."

When she turned that laser focus on him—his work, his process, his quiet dedication—he felt truly seen. She asked questions no one else thought to ask. She found depth in his discipline that he'd never articulated.

"You're my favorite mystery," she told him one evening.

"Mysteries end," he said carefully. "When you solve them."

"Not you." She smiled. "Every time I think I understand how you work, I find another layer. That's not a mystery—that's an infinite fascination."

He finally believed she might stay.`,
    dynamicDescription: "Practical work meets focused fascination, with potential for sustained complementary connection.",
    growthPath: "Seven sustaining interest in Three, Three allowing Seven's explorative depth.",
    watchOut: "Seven's fascination shifting away from Three, Three feeling like temporary interest."
  },
  {
    type1: 3, subtype1: 'so', type2: 7, subtype2: 'sp',
    title: "The Social Star and The Strategic Networker",
    subtitle: "Public success meets opportunity-seeking",
    narrative: `She walked red carpets while he worked back rooms. She collected awards while he collected contacts. Different games, same arena.

"I got us a meeting with the foundation board," he announced casually one evening.

"How did you—I've been trying to get that meeting for months."

He shrugged. "I know a guy who knows a guy."

She'd built her reputation brick by visible brick—every achievement documented, every success celebrated. He'd built his network invisibly—favors exchanged, doors opened, opportunities stockpiled.

"You don't care if anyone knows what you do," she observed.

"You don't care unless everyone does."

It should have been an insult, but neither took it that way. They were speaking the same language of influence, just different dialects.

"I can get you in any room," he offered. "But I can't make them remember me when I leave."

"That's what I'm for," she smiled.

Together, they were unstoppable: her status opening minds, his networks opening doors.`,
    dynamicDescription: "Status-seeking meets opportunity-seeking, with potential for powerful social alliance.",
    growthPath: "Three valuing Seven's network building, Seven valuing Three's status achievement.",
    watchOut: "Three wanting recognition Seven doesn't provide, Seven wanting freedom Three restricts."
  },
  {
    type1: 3, subtype1: 'so', type2: 7, subtype2: 'so',
    title: "The Social Winner and The Social Butterfly",
    subtitle: "Public achievement meets social enthusiasm",
    narrative: `They owned every room they entered—she through achievement, he through entertainment. She worked the crowd strategically; he worked it joyfully. Same room, different purposes.

"You're keeping score," he teased after one gala. "I saw you counting who approached you first."

"And you're not keeping score at all," she countered. "Don't you want to know if you're winning?"

"Winning what?"

She paused. She'd never considered that social life could be anything but a competition.

At the next event, she watched him differently. People gravitated toward him not because he was successful—because he was alive. Every conversation was play, not performance.

"Teach me," she said afterward.

"Teach you what?"

"How to enjoy a room without conquering it."

He laughed. "Only if you teach me how to conquer one. Sometimes I want to matter, not just sparkle."

They looked at each other, finally understanding. She brought the substance; he brought the joy. Together, they didn't just dominate the social scene—they transformed it into something worth showing up for.`,
    dynamicDescription: "Social achievement meets social play, creating potentially powerful but differently motivated partnership.",
    growthPath: "Three enjoying Seven's playfulness, Seven appreciating Three's social accomplishment.",
    watchOut: "Three finding Seven unserious about social stakes, Seven finding Three too competitive."
  },
  {
    type1: 3, subtype1: 'so', type2: 7, subtype2: 'sx',
    title: "The Public Success and The Focused Enthusiast",
    subtitle: "Social recognition meets intense fascination",
    narrative: `She lived for applause—the bigger the audience, the better. He lived for fascination—the deeper the rabbit hole, the happier. Her world was wide; his was intense.

"Come to my awards ceremony," she asked. "It would mean so much."

"Can we talk about the ceremony?" he countered. "I've been reading about how they actually select winners, and the process is fascinating—"

"I don't want to analyze it. I want you there."

He went. He stood in a crowd of hundreds, watching her shine for everyone. It felt diluted somehow—all that attention spread so thin.

But afterward, when she found him: "What did you think?"

"You were magnificent. But you already knew that."

"I know they thought I was. I wanted to know what you thought."

Something clicked. She didn't need his attendance for validation—she needed his depth. Among all her admirers, he was the only one who truly saw her.

"Tell me about that selection process," she said. "Make me fascinating, not just celebrated."`,
    dynamicDescription: "Wide social success meets focused intensity, creating breadth-depth complementarity.",
    growthPath: "Three valuing Seven's focused depth, Seven engaging with Three's broader world.",
    watchOut: "Three feeling Seven doesn't engage socially enough, Seven feeling lost in Three's social world."
  },
  {
    type1: 3, subtype1: 'sx', type2: 7, subtype2: 'sp',
    title: "The Magnetic Achiever and The Practical Adventurer",
    subtitle: "Personal allure meets resourceful freedom",
    narrative: `She was used to complete captivation—when she turned her full attention on someone, they were hers. He was used to keeping options open—a backup plan for his backup plan, freedom above all else.

"Why do you always have one foot out the door?" she asked, frustrated after he mentioned yet another potential opportunity elsewhere.

"Why do you need both of mine planted?" he countered.

She'd never met someone immune to her magnetism. He'd never met someone who made staying feel more appealing than leaving.

"I'm not trying to trap you," she said finally.

"I know. That's why it's so terrifying."

Something had to give. She started leaving space—not withdrawing, just breathing. He started closing doors—not all of them, just enough to show he was choosing this.

"I still have options," he admitted one evening.

"I know."

"But you're the one I keep choosing."

She smiled. His freedom wasn't rejection—it was the purest form of commitment he knew how to give.`,
    dynamicDescription: "Personal seduction meets preserved options, testing whether captivation allows freedom.",
    growthPath: "Three accepting Seven's need for options, Seven committing while maintaining healthy independence.",
    watchOut: "Three frustrated by Seven's uncommitment, Seven feeling trapped by Three's captivating demands."
  },
  {
    type1: 3, subtype1: 'sx', type2: 7, subtype2: 'so',
    title: "The Seductive Winner and The Social Entertainer",
    subtitle: "Personal captivation meets group excitement",
    narrative: `She wanted to be the only one in the room. He wanted to be everyone's favorite person in it. Their first party together was a disaster.

"You talked to everyone except me," she said afterward.

"I talked to you! For like ten minutes."

"Ten minutes out of four hours."

He didn't understand intensity that demanded exclusivity. She didn't understand joy that needed sharing.

But she noticed something at the next gathering—when he worked the room, he kept looking back at her. Every joke got told in her direction. Every story circled back to "my partner" this, "she always says" that.

"You made me the center," she realized afterward. "Even when you weren't with me."

"Of course," he said. "You're my favorite thing about every room. I just want everyone else to know it too."

She finally understood: his dispersion wasn't rejection—it was celebration. He wasn't ignoring her; he was showing her off.

"Next time," she said, "I'll work the room with you."`,
    dynamicDescription: "Personal seduction meets social entertainment, creating focus versus dispersion tension.",
    growthPath: "Three being Seven's fascinating focus, Seven giving Three dedicated attention.",
    watchOut: "Three jealous of Seven's social dispersion, Seven feeling smothered by Three's personal demands."
  },
  {
    type1: 3, subtype1: 'sx', type2: 7, subtype2: 'sx',
    title: "The Captivating Achiever and The Fascinated Explorer",
    subtitle: "Seductive success meets intense curiosity",
    narrative: `Their intensity matched from the first moment—she with her magnetic presence, he with his laser focus. When he turned that fascination on her, she felt truly seen. When she captivated his attention, he felt like he'd found something worth exploring forever.

"No one has ever looked at me the way you do," she admitted.

"No one has ever been worth looking at this closely," he replied.

The early days were electric. His curiosity met her depth. Her magnetism held his wandering mind still.

But she knew his history—fascinations that burned bright and faded. "What happens when I'm not fascinating anymore?" she asked one night.

He was quiet for a long time. "Every time I think I understand you, there's another layer. Most things I figure out and move on. You... you keep surprising me."

"That's not forever."

"No," he agreed. "But I've never wanted forever before. With you, I want to try."

She chose to believe him. Not because she was certain, but because his honest uncertainty was more real than anyone else's easy promises.`,
    dynamicDescription: "Seductive magnetism meets deep fascination, creating intense connection with impermanence risk.",
    growthPath: "Seven sustaining fascination with Three, Three tolerating Seven's occasional wandering interest.",
    watchOut: "Seven's fascination shifting to new objects, Three feeling abandoned when no longer fascinating."
  },

  // === TYPE 3 WITH TYPE 8 ===
  {
    type1: 3, subtype1: 'sp', type2: 8, subtype2: 'sp',
    title: "The Diligent Worker and The Territorial Protector",
    subtitle: "Hard work meets survivalist strength",
    narrative: `He built the company from nothing, arriving first, leaving last. She built walls around everything worth keeping.

"You work too hard," she said, not as criticism but concern.

"You trust too little," he replied, looking up from his spreadsheets.

She walked to the window of the office he'd earned through years of quiet competence. "I trust what I can protect. Can you protect this?"

He joined her at the window. "I built it. You guard it. Isn't that enough?"

She considered his steady hands, his reliable presence. He'd never once tried to dominate her—just worked alongside, brick by brick.

"Show me the accounts," she said finally. "All of them."

It was her way of saying: I'm staying. His way of answering was handing her the keys to everything he'd built—knowing her fortress walls would become his foundation.`,
    dynamicDescription: "Hard work meets territorial strength, with potential for complementary practical power.",
    growthPath: "Three appreciating Eight's protective strength, Eight appreciating Three's productive competence.",
    watchOut: "Eight's forcefulness disrupting Three's careful work, Three's subtlety seeming weak to direct Eight."
  },
  {
    type1: 3, subtype1: 'sp', type2: 8, subtype2: 'so',
    title: "The Quiet Achiever and The Social Champion",
    subtitle: "Modest work meets powerful advocacy",
    narrative: `She stood at the podium, voice thundering about worker rights, while he sat in the back row balancing the budget that made her nonprofit possible.

After the rally, she found him at his desk. "You never come to the front."

"Someone has to make the numbers work," he said quietly.

"You could do more. Lead something."

He looked up with tired eyes. "I do plenty. You just don't see it because you're always looking at crowds."

She paused. Sat down across from him. "Show me."

He walked her through months of his quiet work—grants secured, accounts managed, crises averted without fanfare.

"I fight," she said slowly. "You build. I never asked what I was fighting from."

"A foundation," he said. "One I've been laying for years."

She reached across the desk and squeezed his hand. "Then I'll fight for you too. Even if you won't ask."`,
    dynamicDescription: "Background competence meets foreground leadership, with potential for effective partnership.",
    growthPath: "Three supporting Eight's leadership, Eight valuing Three's quiet effectiveness.",
    watchOut: "Eight overwhelming Three with intensity, Three seeming too passive for Eight."
  },
  {
    type1: 3, subtype1: 'sp', type2: 8, subtype2: 'sx',
    title: "The Practical Achiever and The Passionate Possessor",
    subtitle: "Work-focused success meets intense claiming",
    narrative: `He came home late again, briefcase full of work he'd bring to bed. She was waiting in the dark.

"Where were you?" Not angry—something rawer.

"The Henderson project needed—"

"I needed." She crossed the room like a storm. "I needed you here."

He set down the briefcase slowly. "I'm building something for us."

"I don't want something. I want you." She pressed her palm against his chest. "All of you. Not what's left after the work takes its share."

He felt the familiar pull—her intensity like gravity, demanding everything. Part of him wanted to flee back to spreadsheets. Part of him had never felt so wanted.

"Teach me," he said finally. "How to give you what you need without losing what I've built."

Her expression softened—a crack in the storm. "Stay tonight. Just tonight. Let the work wait."

He reached for her hand instead of his briefcase. "Tonight. And tomorrow we figure out the rest."`,
    dynamicDescription: "Work dedication meets possessive intensity, creating attention competition.",
    growthPath: "Three giving Eight needed attention, Eight respecting Three's work needs.",
    watchOut: "Eight's possessiveness competing with Three's work, Three feeling consumed by Eight's intensity."
  },
  {
    type1: 3, subtype1: 'so', type2: 8, subtype2: 'sp',
    title: "The Social Star and The Survivalist",
    subtitle: "Public success meets territorial strength",
    narrative: `She collected trophies, magazine features, keynote invitations. He collected land, cash reserves, steel doors.

"Come to the gala with me," she said, adjusting her earrings in the mirror.

He looked up from reinforcing the safe room plans. "Why would I want to be seen?"

"Because I want you there." She turned to face him. "Because I'm tired of answering 'where's your husband' with 'protecting the bunker.'"

"I protect what matters."

"I matter. And so does my world, even if you think it's shallow."

He set down the blueprints. Walked to her slowly. "Your world has no walls. Anyone can get in."

"That's the point." She touched his face. "Maybe I need someone who understands walls. And maybe you need someone who knows how to open doors."

He considered her glittering world, so different from his fortified one. "One gala. I'll be there."

She kissed his cheek. "And I'll meet you in the bunker after. We'll make it ours."`,
    dynamicDescription: "Public visibility meets territorial control, creating different success orientations.",
    growthPath: "Three appreciating Eight's grounded security, Eight engaging with Three's public world.",
    watchOut: "Eight dismissing Three's need for recognition, Three finding Eight's world too limited."
  },
  {
    type1: 3, subtype1: 'so', type2: 8, subtype2: 'so',
    title: "The Public Winner and The Social Champion",
    subtitle: "Social achievement meets powerful advocacy",
    narrative: `The fundraiser was going perfectly until he stood up and called the mayor a coward to his face.

She found him afterward, fury barely contained. "Do you know how long I worked for that connection?"

"He's blocking housing for families. Someone had to say it."

"You could have said it diplomatically!"

"Diplomacy is just dressed-up silence." He met her eyes without flinching. "You want to win awards. I want to win fights. We're not the same."

She felt the sting of truth in it. "Maybe I care about how things look."

"Maybe I care about how things are."

They stood in silence. Two kinds of power, facing each other.

"Teach me to fight," she said finally, "without losing everything I've built."

"Teach me to build," he replied, "without forgetting why we fight."

She extended her hand—a truce, a beginning. "We might be unstoppable."

He took it. "That's what I'm counting on."`,
    dynamicDescription: "Social achievement meets social fighting, potentially powerful but stylistically different.",
    growthPath: "Three supporting Eight's causes, Eight channeling strength for Three's achievements.",
    watchOut: "Eight's confrontation damaging Three's image, Three seeming superficial to authentic Eight."
  },
  {
    type1: 3, subtype1: 'so', type2: 8, subtype2: 'sx',
    title: "The Social Success and The Possessive Force",
    subtitle: "Public recognition meets intimate intensity",
    narrative: `She scrolled through her mentions while he watched from the doorway, jaw tight.

"Hundreds of people telling you how amazing you are. Do any of them know you?"

She looked up from the phone. "They know my work."

"I want to know you. All of you. Not the version you perform."

"This isn't performance. This is my life."

He crossed the room, took the phone from her hands. "Look at me. Just me. For five minutes without an audience."

She felt panic rise—naked without the validation, exposed without the numbers. But his eyes held something the followers couldn't offer: demand that was also devotion.

"I don't know how to be small," she whispered.

"You're not small." He pulled her close. "You're everything. But only if you're here. Completely here."

She leaned into his fierce certainty. "I'll try. But you have to let me shine sometimes."

"Shine all you want. Just come home to me when the lights go down."`,
    dynamicDescription: "Public success meets possessive intimacy, creating jealousy versus freedom tension.",
    growthPath: "Three giving Eight exclusive intimate attention, Eight allowing Three public success.",
    watchOut: "Eight's possessiveness threatening Three's public life, Three's public focus threatening Eight's security."
  },
  {
    type1: 3, subtype1: 'sx', type2: 8, subtype2: 'sp',
    title: "The Magnetic Achiever and The Territorial Protector",
    subtitle: "Personal allure meets survivalist strength",
    narrative: `She turned her smile on him like a spotlight. He kept stacking firewood without looking up.

"Doesn't that work on everyone else?" she finally asked.

"What work?"

"The charm. The sparkle. The... me."

He set down the axe. "Pretty things get stolen. I protect what's useful."

She felt the unfamiliar sting of being invisible. "I'm useful."

"Are you? Or are you just decorative?"

Something shifted in her—not offense, but challenge. She picked up the axe, split a log badly but completely.

He watched. Said nothing. Handed her another log.

Three hours later, blistered and sweating, she looked nothing like herself. He finally smiled.

"Now you're interesting."

"Because I can chop wood?"

"Because you stopped performing." He took the axe back. "Come inside. I'll show you what I'm protecting."

She followed, leaving her sparkle at the woodpile, finding something realer waiting.`,
    dynamicDescription: "Personal magnetism meets practical power, testing whether charm complements strength.",
    growthPath: "Three appreciating Eight's protective strength, Eight appreciating Three's captivating abilities.",
    watchOut: "Eight's practicality unimpressed by Three's charm, Three finding Eight unglamorous."
  },
  {
    type1: 3, subtype1: 'sx', type2: 8, subtype2: 'so',
    title: "The Seductive Winner and The Social Champion",
    subtitle: "Personal captivation meets group leadership",
    narrative: `She wanted him at the dinner table. He was at the union hall.

"They need me," he said when she called.

"I need you."

"You want me. That's different. These people—they're fighting for their jobs."

She heard the crowd behind him, chanting something about fair wages. Her private world felt suddenly small.

"Can I come?" The words surprised her.

Silence. Then: "You'd hate it. It's loud and messy and no one's there to admire you."

"Maybe I want to admire someone else for once."

She showed up in clothes that cost more than their monthly wages. Felt every eye. But when he spoke, she understood—this wasn't his ego, it was his purpose.

Afterward, sweaty and hoarse, he found her. "You stayed."

"You're magnificent when you fight for something."

He cupped her face. "Be magnificent with me. Not just for me."

"Teach me what's worth fighting for."

"Stay," he said. "I'll show you."`,
    dynamicDescription: "Personal captivation meets group leadership, with potential for complementary power.",
    growthPath: "Three supporting Eight's group leadership, Eight giving Three personal attention.",
    watchOut: "Three jealous of Eight's group focus, Eight finding Three's personal demands limiting."
  },
  {
    type1: 3, subtype1: 'sx', type2: 8, subtype2: 'sx',
    title: "The Captivating Achiever and The Possessive Claimer",
    subtitle: "Seductive success meets consuming possession",
    narrative: `Two predators meeting in the dark, each certain they were the hunter.

"You think you can handle me?" she breathed, all magnetic danger.

"I don't handle." He stepped closer, crowding her space. "I take."

"And if I don't want to be taken?"

"Then stop looking at me like you want to be."

The room crackled. Neither stepped back. Neither broke eye contact.

"This could destroy us both," she whispered.

"Or make us legendary."

She reached for his collar, pulling him closer. "I don't surrender."

"Neither do I." His hands found her waist. "But maybe we don't have to. Maybe we conquer everything else. Together."

The kiss that followed was less romance than treaty—two empires agreeing to expand outward instead of against each other.

"Partners," she said against his mouth.

"Equals," he corrected.

"We'll see about that."

"Yes," he smiled darkly. "We will."`,
    dynamicDescription: "Seductive power meets possessive power, creating intense passion with power struggle risk.",
    growthPath: "Finding collaboration between seduction and strength, mutual respect for different powers.",
    watchOut: "Power struggle between two dominant energies, relationship becoming battleground."
  },

  // === TYPE 3 WITH TYPE 9 ===
  {
    type1: 3, subtype1: 'sp', type2: 9, subtype2: 'sp',
    title: "The Diligent Worker and The Comfortable Settler",
    subtitle: "Hard work meets peaceful comfort",
    narrative: `He woke at 5 AM to chase another promotion. She woke when she woke, content with enough.

"Don't you want more?" he asked over his third coffee.

She looked up from her crossword puzzle, genuinely puzzled. "More what?"

"More everything. Better house. Better car. Better—"

"Better mornings like this one?" She smiled. "I have those already."

He felt the familiar frustration—and beneath it, something like envy. When had he last felt content?

"You make it look easy," he admitted. "Being satisfied."

"You make it look hard. Being you."

He set down the coffee. Sat beside her. "Teach me how to rest."

"You can't learn it." She leaned against him. "You have to surrender to it."

For one morning, he did. The promotion email went unanswered. The crossword got finished. And somewhere in the stillness, he remembered why he'd been running—and what he'd been running from.

"Same time tomorrow?" she asked.

"Maybe," he said. For him, it was revolution.`,
    dynamicDescription: "Driven achievement meets peaceful contentment, testing whether ambition and ease can coexist.",
    growthPath: "Three appreciating Nine's peace, Nine supporting Three's achievement.",
    watchOut: "Three frustrated by Nine's contentment, Nine stressed by Three's constant driving."
  },
  {
    type1: 3, subtype1: 'sp', type2: 9, subtype2: 'so',
    title: "The Quiet Achiever and The Social Harmonizer",
    subtitle: "Modest work meets group peace",
    narrative: `The office was tearing itself apart. Marketing versus Sales, old war, new casualties. She walked between the factions, smoothing, soothing. He watched from his corner desk, quietly completing projects no one noticed.

"How do you do it?" he asked her after the meeting. "Make everyone feel heard?"

"How do you do it?" she countered. "Get everything done without anyone seeing?"

They sat in the empty conference room, two kinds of invisible.

"I keep the peace," she said. "That's my job."

"I keep things running. That's mine."

"Does anyone thank you?"

He laughed softly. "Does anyone thank you?"

For the first time, someone saw. Two people who'd built their lives around being useful without being noticed, finally noticing each other.

"We could be a team," she offered. "You build it. I protect it from conflict."

"No drama," he said. "Just results."

"Just peace," she agreed.

They shook hands in the fluorescent light—a quiet alliance, steady and certain.`,
    dynamicDescription: "Quiet achievement meets quiet harmonizing, with potential for undramatic effective partnership.",
    growthPath: "Three valuing Nine's harmonizing, Nine supporting Three's achievement.",
    watchOut: "Three wanting more support for personal goals, Nine lost in group service."
  },
  {
    type1: 3, subtype1: 'sp', type2: 9, subtype2: 'sx',
    title: "The Practical Achiever and The Merged Soul",
    subtitle: "Work-focused success meets complete fusion",
    narrative: `She had stopped painting the day they married. Now she organized his files, memorized his schedule, anticipated his needs before he spoke them.

"What do you want for dinner?" he asked one evening.

"Whatever you want."

"That's not what I asked."

She stared at him, genuinely confused. She had become so completely his that his wants had become hers. The boundary had dissolved somewhere between the wedding and now.

"I don't know," she admitted. "I don't know what I want anymore."

He set down his briefcase. Looked at her—really looked. "When did you stop wanting things?"

"When wanting you was enough."

The words hit him like cold water. He'd been so focused on building that he hadn't noticed she'd been disappearing.

"Paint something," he said. "Tonight. For yourself."

"What if it's terrible?"

"Then it's yours. Terribly, beautifully yours."

She found her brushes that night. The first stroke felt like remembering her own name.`,
    dynamicDescription: "Practical work meets complete merger, with Nine potentially lost in Three's goals.",
    growthPath: "Nine maintaining self while supporting Three, Three valuing Nine's unique contribution.",
    watchOut: "Nine lost in Three's work world, Three working with a partner who's disappeared."
  },
  {
    type1: 3, subtype1: 'so', type2: 9, subtype2: 'sp',
    title: "The Social Star and The Comfortable Retreater",
    subtitle: "Public success meets peaceful withdrawal",
    narrative: `The after-party glittered. She worked the room like chess, calculating handshakes, optimizing small talk. He was nowhere to be found.

She discovered him in the garden, watching the stars.

"You're missing everything," she said, irritated.

"I'm not missing this." He gestured at the sky. "You're missing this."

"This doesn't get me promoted."

"No. It gets you peaceful."

She stood beside him, feeling the quiet press against her need for more, always more. The garden had no witnesses, no one to impress.

"I don't know how to want nothing," she admitted.

"You don't have to want nothing." He took her hand. "You just have to remember that nothing is also something."

She tried to see what he saw—stars instead of networking, silence instead of strategy. For a moment, she touched it.

"Five minutes," she said. "Then I go back."

"Five minutes," he agreed. "I'll be here when you're done being seen."

It was enough. It had to be enough.`,
    dynamicDescription: "Public success meets private peace, creating engagement versus withdrawal tension.",
    growthPath: "Three valuing Nine's peaceful refuge, Nine selectively engaging with Three's world.",
    watchOut: "Three frustrated by Nine's withdrawal, Nine overwhelmed by Three's public demands."
  },
  {
    type1: 3, subtype1: 'so', type2: 9, subtype2: 'so',
    title: "The Public Winner and The Social Harmonizer",
    subtitle: "Social achievement meets group peace",
    narrative: `She needed to win. He needed everyone to get along. At the company retreat, these goals collided.

"You undermined me in that meeting," she hissed afterward.

"I didn't undermine you. I helped Marcus feel included."

"Marcus is competition."

He looked at her with genuine confusion. "Marcus is a person. With feelings. Who sits three desks from you every day."

She felt the familiar irritation—why couldn't he just support her? But something in his earnestness stopped her.

"Does winning matter if everyone hates me afterward?"

"Does everyone hating you matter if you're successful?"

They stared at each other, two opposite philosophies wearing wedding rings.

"I need you to care about my success," she said finally.

"I do. I also need you to care about the people you succeed over."

"Show me how."

He smiled—that peaceful smile that had drawn her in years ago. "I'll smooth the edges. You cut the path. Deal?"

"Deal." She took his hand. "But I'm still going to win."

"I know. I'll make sure they forgive you."`,
    dynamicDescription: "Standing out meets blending in, with potential for complementary social roles.",
    growthPath: "Three appreciating Nine's harmonizing support, Nine supporting Three's visible achievement.",
    watchOut: "Three frustrated by Nine's lack of ambition, Nine distressed by Three's competitive creating waves."
  },
  {
    type1: 3, subtype1: 'so', type2: 9, subtype2: 'sx',
    title: "The Social Success and The Merged Lover",
    subtitle: "Public recognition meets intimate fusion",
    narrative: `When she posted photos, he wasn't in them. When she told stories, they featured her colleagues, her mentors, her audience. He listened from the couch, becoming part of the furniture.

"Where am I?" he asked one night, gesturing at her phone. "In any of this?"

She looked up, genuinely startled. "You're here. You're always here."

"That's not the same as being seen."

The words hung between them. She'd been so busy being seen by the world that she'd stopped seeing the person who'd disappeared into loving her.

"I don't know how to include you without losing momentum."

"I don't know how to exist without being part of you." His voice cracked. "I've forgotten who I am when you're not looking."

She set down the phone. Actually set it down.

"Then let's remember together." She curled against him. "Tell me who you were before me."

It took hours. There was more than either expected. And somewhere in the telling, he became real again—not just her supporter, but his own strange, separate soul.`,
    dynamicDescription: "Public breadth meets intimate depth, creating tension over attention allocation.",
    growthPath: "Three giving Nine exclusive intimate attention, Nine allowing Three public engagement.",
    watchOut: "Nine feeling abandoned for Three's public, Three feeling trapped by Nine's merger demands."
  },
  {
    type1: 3, subtype1: 'sx', type2: 9, subtype2: 'sp',
    title: "The Magnetic Achiever and The Comfortable Retreater",
    subtitle: "Personal allure meets peaceful withdrawal",
    narrative: `She arrived like weather—magnetic, impossible to ignore. He was already there, comfortable in his corner booth, wishing she'd pass by.

She didn't.

"Mind if I sit?" Already sliding in across from him.

"I was enjoying the quiet."

"I can be quiet." She wasn't. But something in her eyes said she wanted to learn.

He studied her—the performance, the sparkle, the desperate energy of someone who only felt real when reflected in others' eyes.

"You're exhausted," he said finally.

She blinked. No one had ever seen beneath the dazzle. "I don't know how to stop."

"I don't know how to start." He gestured at his peaceful corner. "We could meet in the middle."

She dimmed herself—a little. He brightened—a little. They sat in something neither could name: not quite her electricity, not quite his stillness.

"Same time tomorrow?" she asked.

He surprised himself. "Okay."

She left sparkle behind when she went. He found he didn't hate it.`,
    dynamicDescription: "Personal magnetism meets peaceful withdrawal, testing whether charm can gently engage.",
    growthPath: "Three's charm gently engaging Nine, Nine opening to Three's attention.",
    watchOut: "Three's intensity overwhelming Nine, Nine's withdrawal frustrating Three."
  },
  {
    type1: 3, subtype1: 'sx', type2: 9, subtype2: 'so',
    title: "The Seductive Winner and The Group Harmonizer",
    subtitle: "Personal captivation meets social peacemaking",
    narrative: `She found him at the center of the party's calm—the one everyone gravitated toward without knowing why. He made space, smoothed tensions, kept the peace.

"Dance with me," she said, all magnetic pull.

"I'm needed here."

"I need you more."

He looked at her—really looked. "You want me. That's different."

The truth stung. She was used to being wanted, not to wanting. "What if it's both?"

He excused himself from the group. Took her hand. "One dance."

On the floor, her intensity met his steadiness. She led; he followed. She sparkled; he grounded.

"You're hard to keep," she said.

"You're hard to catch." He spun her gently. "Everyone wants a piece of you."

"I only want one piece." She pulled him closer. "Yours. The one you give to everyone else."

"It's not a piece." He held her gaze. "It's the whole thing, spread thin. Maybe I could learn to gather it back. For someone worth gathering for."

"Am I?"

He kissed her forehead. "We'll see."`,
    dynamicDescription: "Personal intensity meets social harmony, creating focus versus breadth tension.",
    growthPath: "Three focusing intensity on Nine specifically, Nine giving Three dedicated personal attention.",
    watchOut: "Three jealous of Nine's group focus, Nine feeling overwhelmed by Three's personal intensity."
  },
  {
    type1: 3, subtype1: 'sx', type2: 9, subtype2: 'sx',
    title: "The Captivating Achiever and The Complete Merger",
    subtitle: "Seductive success meets total fusion",
    narrative: `She drew him in like gravity. He fell without resistance.

Within months, he had become her mirror—wearing her colors, loving her music, dreaming her dreams. His old self faded like morning mist.

"What do you think?" she asked about the apartment she wanted.

"Whatever you think."

"No." She grabbed his shoulders. "What do you think?"

He opened his mouth. Nothing came. He'd forgotten how to have thoughts that weren't hers.

She saw it then—the hollow where a person used to be. The man she'd captivated had vanished into captivation.

"Come back," she whispered. "I don't want a reflection. I want you."

"I don't remember who that was."

"Then let's find out together." She stepped back—something that felt like death, giving up the merger. "Tell me something I don't already know. Something that's yours."

He struggled. Found a fragment. "I used to love trains. The sound of them at night."

It was small. It was his.

"Tell me more," she said.

And piece by piece, he began to reassemble.`,
    dynamicDescription: "Seductive power meets complete surrender, with risk of Nine disappearing into Three's image.",
    growthPath: "Nine maintaining self within captivation, Three valuing Nine's actual rather than imagined self.",
    watchOut: "Nine lost in Three's image, Three captivating a projection rather than a person."
  },

  // ============================================
  // TYPE 4 CROSS-TYPE PAIRINGS
  // ============================================

  // === TYPE 4 WITH TYPE 5 ===
  {
    type1: 4, subtype1: 'sp', type2: 5, subtype2: 'sp',
    title: "The Stoic Sufferer and The Self-Sufficient Hermit",
    subtitle: "Endured pain meets minimal needs",
    narrative: `They lived in adjacent apartments for three years before speaking. She painted through her grief in silence; he read through his loneliness without complaint.

One evening, a pipe burst in the hallway. Both emerged at once—he with tools, she with towels—and worked side by side without a word. When the plumber arrived, they retreated to their respective doors.

"Thank you," she said quietly.

He nodded. "You didn't need to help."

"Neither did you."

Something shifted after that. Not dramatic—a borrowed book left at her door, a sketch slipped under his. They began sharing tea on Sunday afternoons, sitting in comfortable silence more often than speaking.

"Most people exhaust me," she admitted one evening.

"Most people require too much," he agreed.

They built something rare: intimacy without invasion, connection without consumption. Two people who understood that presence doesn't require performance, and that sometimes the deepest bond is simply existing alongside someone who doesn't need you to be anything other than exactly what you are.`,
    dynamicDescription: "Private suffering meets private sufficiency, with mutual understanding but connection challenges.",
    growthPath: "Both reaching toward each other despite comfort with solitude.",
    watchOut: "Two people content alone failing to build shared connection."
  },
  {
    type1: 4, subtype1: 'sp', type2: 5, subtype2: 'so',
    title: "The Enduring Artist and The Knowledge Sharer",
    subtitle: "Private suffering meets intellectual community",
    narrative: `She worked alone in her studio, transforming heartbreak into art that no one ever saw. He taught philosophy to packed lecture halls, explaining the universe to strangers who adored him.

They met at a faculty dinner she almost skipped. He noticed her immediately—not for what she said, but for how she listened.

"You're the artist," he said later, finding her in the garden. "The one who never shows her work."

"You're the professor. The one who shows everything."

"Not everything," he said quietly.

Weeks passed. He invited her to a lecture; she actually came. She showed him a painting; he actually wept. Slowly, she began attending his intellectual circles—not participating, just present. Slowly, he began visiting her studio—not analyzing, just witnessing.

"I thought you lived for those crowds," she admitted one night.

"I thought I did too. But talking about meaning isn't the same as feeling it."

She taught him that some truths can't be spoken, only created. He taught her that some creations deserve to be shared. Together, they found a language between intellect and intuition—a place where her private depths met his public gifts, and both finally felt understood.`,
    dynamicDescription: "Private creativity meets public intellect, with potential for intellectual-creative complementarity.",
    growthPath: "Four engaging with Five's intellectual world, Five appreciating Four's creative depth.",
    watchOut: "Four finding Five's social engagement superficial, Five finding Four too withdrawn."
  },
  {
    type1: 4, subtype1: 'sp', type2: 5, subtype2: 'sx',
    title: "The Stoic Sufferer and The Secret Romantic",
    subtitle: "Endured pain meets hidden longing",
    narrative: `They worked at the same bookstore for a year, exchanging nothing but polite nods. She shelved poetry with trembling hands; he catalogued rare editions in the back, watching her through the stacks.

Neither knew the other's secret: she wrote verses about loneliness she'd never share, and he kept a journal filled with pages about her—the way she touched the spines of books like they were sacred.

One evening, closing alone, she found a note tucked in a volume of Rilke: "I see you feeling what you never say."

Her heart stopped. She wrote back, left it in the same book: "I see you watching what you never approach."

For months, they communicated only this way—anonymous intimacy, safe distance. Until the night she stayed late and found him waiting.

"I was afraid to speak," he admitted, voice barely audible.

"I was afraid to be seen," she replied.

They stood in the dim light of the poetry section, two hidden depths finally surfacing. He offered her his journal. She offered her verses. Neither had ever shown anyone.

"You kept me secret," she whispered, reading.

"You kept yourself secret too," he replied.

They learned that sometimes the deepest love begins in shadows—and that two people hiding the same thing might be the only ones who can bring each other into light.`,
    dynamicDescription: "Hidden suffering meets hidden longing, with potential for profound recognition.",
    growthPath: "Both revealing hidden depths to each other, finding safety in mutual recognition.",
    watchOut: "Both too hidden to reach each other, potential depth unrealized."
  },
  {
    type1: 4, subtype1: 'so', type2: 5, subtype2: 'sp',
    title: "The Social Outsider and The Complete Hermit",
    subtitle: "Seeking belonging meets seeking solitude",
    narrative: `She drifted through parties like a ghost who wanted to be seen—present but never belonging, always the interesting outsider. He avoided parties entirely, content in his cabin with his books and his silence.

"Why do you even go?" he asked when they met through mutual friends. "You clearly hate it."

"Because I hate being alone more. Why do you hide?"

"Because I hate performing more."

She didn't understand his retreat; he didn't understand her pursuit. But something kept drawing them together—perhaps the recognition that neither fit anywhere.

She started visiting his cabin. He started attending her events—briefly, strategically, then retreating to wait for her.

"The others don't see me," she confessed one night. "Not really. They see the image."

"I see you," he said simply.

She stared at him. "How? You barely look at people."

"I look at you."

In his solitude, she found the attention she craved—undivided, unperformed, real. In her world, he found a guide who never asked him to be anything but himself. Two outsiders who discovered that belonging isn't about fitting in—it's about finding the one person who makes everywhere else unnecessary.`,
    dynamicDescription: "Social outsider meets social avoider, with possible connection through shared marginality.",
    growthPath: "Five engaging with Four's social world selectively, Four appreciating Five's solitude.",
    watchOut: "Four frustrated by Five's withdrawal, Five overwhelmed by Four's social needs."
  },
  {
    type1: 4, subtype1: 'so', type2: 5, subtype2: 'so',
    title: "The Creative Outsider and The Intellectual Networker",
    subtitle: "Social difference meets social intellect",
    narrative: `They met at a conference where neither belonged—she was the artist invited to provoke, he was the scientist asked to explain. Both stood at the edges, watching the center from outside.

"They want me to be strange," she said, joining him at the refreshment table.

"They want me to be smart," he replied. "Neither wants us to be real."

"What would real look like?"

He considered. "Admitting I don't have all the answers. You?"

"Admitting I want to belong, not just stand out."

They began collaborating—her installations paired with his research, his data visualized through her art. The intellectual communities welcomed them as a curiosity; the creative communities admired them as pioneers. Neither community fully understood them, but together, they'd found something better.

"We're still outsiders," she observed after a joint presentation.

"But we're outsiders together now," he said. "That's different."

"Is it enough?"

He took her hand—a rare gesture for him. "I think it might be everything."

They'd found what neither expected: a partnership where her differentiation met his contribution, where standing out and standing apart merged into standing together. Not quite belonging anywhere—but absolutely belonging to each other.`,
    dynamicDescription: "Creative differentiation meets intellectual contribution, potentially complementary social marginality.",
    growthPath: "Finding shared community where both contributions are valued.",
    watchOut: "Four seeing Five as insufficiently unique, Five seeing Four as insufficiently rigorous."
  },
  {
    type1: 4, subtype1: 'so', type2: 5, subtype2: 'sx',
    title: "The Social Artist and The Secret Yearner",
    subtitle: "Visible difference meets hidden intensity",
    narrative: `She commanded attention without trying—the striking presence at every gathering, differentiated and desired. He attended the same events invisibly, watching her from corners, memorizing her gestures, never approaching.

For months, she never noticed him. Then one night, she found a letter under her door—anonymous, eloquent, describing her with a precision that made her weep.

"Someone sees me," she told a friend. "Really sees me."

The letters continued. Whoever wrote them understood things she'd never told anyone—the loneliness beneath her shine, the hunger beneath her uniqueness. She became obsessed with finding him.

When she finally did—recognizing a phrase from the letters in a quiet comment at a lecture—she confronted him.

"You've been watching me for years. Why didn't you ever speak?"

"Because watching was safer than losing you."

"You could have had me all along."

He met her eyes—finally, fully. "I was terrified of exactly that."

She saw it then: depth matching her own, passion exceeding her own, all of it hidden behind a wall of fear. She reached through.

"I've been visible my whole life," she said, "and no one ever saw me. You saw me from across rooms. You wrote me into existence."

"You are the only thing I ever wanted to be brave for," he admitted.

She drew him out; he drew her in. The one who needed to be seen finally was, by the only one who had been truly looking all along.`,
    dynamicDescription: "Visible uniqueness meets hidden passion, with potential for surface-depth meeting.",
    growthPath: "Five revealing hidden intensity to Four, Four appreciating Five's hidden depths.",
    watchOut: "Four missing Five's interior life, Five remaining hidden from expressive Four."
  },
  {
    type1: 4, subtype1: 'sx', type2: 5, subtype2: 'sp',
    title: "The Passionate Sufferer and The Self-Sufficient Hermit",
    subtitle: "Intense emotion meets complete withdrawal",
    narrative: `She loved like a storm—consuming, demanding, impossible to ignore. He lived like a fortress—self-contained, needing nothing, letting no one in.

"I need to know what you're feeling," she pleaded through his locked door.

"I don't have feelings the way you do," he replied from inside.

"Everyone has feelings!"

"I have thoughts about feelings. It's different."

She wept in the hallway. He listened from behind the door, torn between his need for solitude and something else—something terrifying that pulled him toward her chaos.

One night, she stopped coming. He didn't expect to notice. He noticed.

Days passed. He found himself at her door.

"You stopped," he said when she opened it.

"You never opened."

"I'm here now."

She searched his face. "Why?"

"Because the silence was worse. I didn't know silence could be worse."

She let him in—literally, into her messy, emotional, overwhelming life. He let her in—metaphorically, into his protected, minimal, carefully controlled world.

"This terrifies me," he admitted.

"I know," she said. "But you came anyway."

"You're worth the terror," he said, and meant it.

They built something unprecedented: her intensity tempered by his boundaries, his withdrawal broken by her persistence. Not comfortable—never comfortable—but achingly, surprisingly alive.`,
    dynamicDescription: "Maximum emotional intensity meets maximum withdrawal, creating breakthrough or frustration.",
    growthPath: "Five trusting enough to receive Four's intensity, Four accepting Five's need for space.",
    watchOut: "Four's emotions overwhelming Five, Five's withdrawal devastating Four."
  },
  {
    type1: 4, subtype1: 'sx', type2: 5, subtype2: 'so',
    title: "The Intense Individualist and The Intellectual Engager",
    subtitle: "Passionate depth meets cerebral connection",
    narrative: `She felt everything like it was the end of the world. He explained everything like it was a theorem to be solved.

"I need you to feel this with me," she said, tears streaming during what he thought was a casual conversation.

"I'm trying to understand it," he offered. "The logical structure of what you're experiencing—"

"I don't want logical structure! I want you to feel!"

He paused, genuinely confused. "I am feeling. I'm feeling curious about your emotional state, engaged by its complexity—"

She threw a pillow at him.

But something kept her coming back. His intellectual circles welcomed her emotional insights; her artistic intensity gave his theories flesh. Slowly, a bridge formed.

"When you cry," he said one night, carefully, "I notice my chest constricts. Is that feeling?"

"Yes," she breathed. "That's feeling."

"It's... uncomfortable. But not entirely unpleasant. Like a puzzle I want to solve but can't."

"Maybe you're not supposed to solve it. Maybe you're just supposed to let it exist."

He sat with that—sat with her—in silence that was neither his analysis nor her chaos but something new.

"I can't feel the way you do," he finally said. "But I can learn to be present while you feel. Is that enough?"

She took his hand. "It's more than I've ever gotten from anyone who tried to match me."

They discovered that heart and mind could meet—not by becoming each other, but by making room for what the other needed.`,
    dynamicDescription: "Emotional intensity meets intellectual engagement, testing whether heart and mind can meet.",
    growthPath: "Four appreciating intellectual connection, Five opening to emotional depth.",
    watchOut: "Four feeling intellectualized, Five overwhelmed by emotional demands."
  },
  {
    type1: 4, subtype1: 'sx', type2: 5, subtype2: 'sx',
    title: "The Passionate Soul and The Secret Romantic",
    subtitle: "Open intensity meets hidden intensity",
    narrative: `She burned openly—a flame everyone could see, all passion and yearning displayed. He burned secretly—a fire behind walls so thick no one knew it existed.

"I know you feel more than you show," she said, refusing to leave his doorstep.

"You don't know anything about me."

"I know longing when I see it. Even hidden."

He opened the door. Not because he wanted to—because he couldn't not.

For weeks, she pursued and he retreated, she revealed and he concealed. Until the night she stopped.

"I can't keep giving everything while you give nothing," she said, finally exhausted.

"You think I give nothing?" His voice cracked—the first crack she'd ever heard. "I lie awake thinking about you. I write letters I never send. I dream conversations we'll never have. I feel everything you feel—I just feel it alone."

"Why alone?"

"Because wanting anything this much means it can be taken away."

She understood then. His distance wasn't coldness—it was terror of the very intensity she expressed so freely.

"Show me one letter," she said softly.

He hesitated, then handed her a notebook. Pages and pages of longing, equal to her own, hidden where no one could touch it.

"You feel as much as I do," she whispered, awed.

"More," he admitted. "I just don't know how to survive feeling it out loud."

"Let me teach you," she said. "Let me be the one place where you don't have to hide."

It was the only offer that could have reached him—and the one thing she'd been searching for: someone whose depths matched her own, even if they spoke a different language of love.`,
    dynamicDescription: "Open passion meets hidden passion, with potential for profound mutual recognition.",
    growthPath: "Five trusting Four with hidden yearning, Four being patient with Five's fear.",
    watchOut: "Five's fear keeping them hidden, Four frustrated by Five's concealment."
  },

  // === TYPE 4 WITH TYPE 6 ===
  {
    type1: 4, subtype1: 'sp', type2: 6, subtype2: 'sp',
    title: "The Stoic Sufferer and The Security Builder",
    subtitle: "Endured pain meets anxious preparation",
    narrative: `She carried her sorrows like stones in her pocket—heavy but hidden, endured without complaint. He carried his fears like an emergency kit—always ready, always scanning for threats.

"You're going to worry yourself to death," she said, watching him check the locks for the third time.

"And you're going to suffer yourself to death," he replied. "At least I'm doing something about my pain."

"Worrying isn't doing."

"Neither is brooding."

They stared at each other, two different flavors of coping with a world that felt unsafe.

But when her mother died, he was the one who showed up with a plan: meals prepared, bills organized, logistics handled. His anxiety became useful—she didn't have to think.

And when his fears spiraled beyond reason, she was the one who could sit with him in the darkness without needing to fix it—because she knew darkness wasn't always something to solve.

"You prepare for the worst," she observed one night. "I just experience it."

"Maybe we need both," he said. "I keep us safe. You keep us sane."

She leaned into him. "I've never thought of endurance as sanity."

"I've never thought of worry as safety. But here we are."

Two people who understood that life was hard—just navigating it with different tools. Together, those tools became enough.`,
    dynamicDescription: "Private suffering meets anxious preparation, with different strategies for coping with life's challenges.",
    growthPath: "Four appreciating Six's practical coping, Six appreciating Four's endurance.",
    watchOut: "Four seeing Six's worry as shallow, Six seeing Four's suffering as self-indulgent."
  },
  {
    type1: 4, subtype1: 'sp', type2: 6, subtype2: 'so',
    title: "The Enduring Artist and The Loyal Follower",
    subtitle: "Private creation meets system loyalty",
    narrative: `She created alone, answering to no one, her art a private rebellion against a world that wanted conformity. He built his life around belonging—the company, the community, the causes that gave him purpose and structure.

"How can you stand being so... managed?" she asked, watching him volunteer for yet another committee.

"How can you stand being so alone?" he countered.

"Alone is honest. Your committees are just organized fear."

He flinched. "And your isolation is just organized rejection."

They shouldn't have worked. But she started coming to his meetings, sitting in the back, sketching while he organized. He started visiting her studio, finding unexpected peace in her unstructured world.

"The group isn't stifling," he explained one night. "It's shelter."

"The solitude isn't rejection," she replied. "It's sanctuary."

"Can someone have both?"

She looked at him—really looked. "Maybe that's what we're building."

He brought her community without requiring conformity. She brought him depth without demanding he abandon his loyalties. Slowly, his tribe became her tribe. Slowly, her sanctuary became their sanctuary.

"You make my world richer," he admitted.

"You make my world less empty," she replied.

Two orientations that shouldn't have merged—but did, creating something neither could have built alone.`,
    dynamicDescription: "Individual creativity meets systemic loyalty, with potential for complementary orientations.",
    growthPath: "Four engaging with Six's communities, Six appreciating Four's unique perspective.",
    watchOut: "Four rejecting Six's conformity, Six finding Four's individualism destabilizing."
  },
  {
    type1: 4, subtype1: 'sp', type2: 6, subtype2: 'sx',
    title: "The Stoic Artist and The Counterphobic Fighter",
    subtitle: "Quiet endurance meets aggressive courage",
    narrative: `She suffered in silence, transforming pain into art behind closed doors. He fought everything—fears, obstacles, anyone who threatened what he loved.

"Why do you just take it?" he demanded, watching her absorb another rejection without protest.

"Why do you fight everything?" she replied. "Not every battle is worth the blood."

"Every battle is worth the blood if you're bleeding anyway!"

She went quiet. He went loud. They couldn't have been more different.

But when someone attacked her work publicly, viciously, she found him already there—fierce, protective, terrifying in his defense.

"You didn't have to do that," she said afterward.

"Someone needed to."

"I would have endured."

"You shouldn't have to."

Something shifted. His fighting wasn't just aggression—it was protection. Her endurance wasn't passivity—it was strength.

"I don't know how to let someone fight for me," she admitted.

"I don't know how to let something hurt without fighting back," he replied. "Maybe you could teach me."

"Maybe you could protect me while I learn."

He took her hand—gentle, for once. "That's exactly what I want to do."

She created; he defended. She grounded his intensity; he shielded her quiet. Two different responses to a dangerous world, finally finding their complement.`,
    dynamicDescription: "Quiet endurance meets active fighting, with potential for protected creativity.",
    growthPath: "Six's strength protecting Four's vulnerability, Four's depth grounding Six's intensity.",
    watchOut: "Six's aggression disturbing Four's peace, Four seeming too passive for Six."
  },
  {
    type1: 4, subtype1: 'so', type2: 6, subtype2: 'sp',
    title: "The Social Outsider and The Private Worrier",
    subtitle: "Visible difference meets hidden anxiety",
    narrative: `She made herself visible through differentiation—the unique one, the special one, standing out in every crowd. He made himself invisible through worry—calculating risks, avoiding attention, keeping his fears close and his profile low.

"Come to the gallery opening," she urged. "You never come to anything."

"Those events are minefields. Too many variables."

"They're connections. Opportunities. Life."

"They're exactly where things go wrong."

She didn't understand his caution; he didn't understand her exposure. But one night, she found him researching security systems—for her studio.

"What are you doing?"

"The neighborhood has had break-ins. Your work is valuable. Someone should worry about it."

"I didn't even think about that."

"I know. That's why I do."

She saw him then—not as fearful but as vigilant. He saw her—not as reckless but as brave.

"You're always thinking about what could go wrong," she said softly.

"You're always moving toward what could go right. Maybe we need both."

She pulled him to the window, pointing at the city lights. "Come with me sometimes. Into the world."

He nodded slowly. "Stay with me sometimes. Where it's safe."

Two different relationships with the unsafe world, finally finding shelter in the space between—where her visibility met his vigilance, and both felt protected.`,
    dynamicDescription: "Social differentiation meets private anxiety, with shared vulnerability beneath different expressions.",
    growthPath: "Four appreciating Six's grounding, Six engaging with Four's social world.",
    watchOut: "Four pushing Six socially, Six's worry dampening Four's expression."
  },
  {
    type1: 4, subtype1: 'so', type2: 6, subtype2: 'so',
    title: "The Creative Outsider and The Group Loyalist",
    subtitle: "Social difference meets social loyalty",
    narrative: `She made a career of not fitting in—the celebrated outsider, different by design. He made a career of belonging—loyal to institutions, committed to systems, the reliable foundation others built upon.

"How can you stand being like everyone else?" she challenged at a mutual friend's gathering.

"How can you stand being against everyone else?" he countered.

"I'm not against. I'm apart."

"And I'm not like. I'm with."

They circled each other for months, representatives of opposite philosophies. She saw his loyalty as capitulation. He saw her differentiation as abandonment.

Until the crisis came—a cause they both cared about, threatened by forces neither could fight alone.

"We need your voice," he said, swallowing his pride. "Your visibility."

"We need your structure," she admitted. "Your networks."

They worked together—her uniqueness channeled through his systems, his loyalty animated by her passion. The cause won. More importantly, they understood.

"You're not conforming," she realized. "You're connecting."

"You're not abandoning," he replied. "You're enriching."

They married their opposites: her differentiation gave his communities depth, his belonging gave her uniqueness context. Neither fully fit in, neither stood fully apart—but together, they'd found a third way.`,
    dynamicDescription: "Differentiation meets conformity, with potential clash or complementary perspectives.",
    growthPath: "Four finding value in Six's loyalty, Six finding value in Four's differentiation.",
    watchOut: "Four dismissing Six as conformist, Six finding Four threatening to group stability."
  },
  {
    type1: 4, subtype1: 'so', type2: 6, subtype2: 'sx',
    title: "The Social Artist and The Fierce Defender",
    subtitle: "Visible uniqueness meets counterphobic strength",
    narrative: `She stood out in every room—the creative visionary, celebrated and exposed. He stood guard in every room—the fierce protector, confronting any threat with aggressive courage.

"You don't need a bodyguard," she laughed when he positioned himself between her and a hostile critic.

"Everyone needs someone willing to fight for them."

"I'm not fragile."

"I know. That's why you're worth protecting."

His intensity scared others. She found it exhilarating. Her sensitivity frustrated warriors. He found it beautiful.

"My feelings aren't weakness," she said one night, after he'd dismissed her tears.

He stopped. "I never said they were."

"You act like they're problems to solve. Threats to eliminate."

"Because I don't know what else to do. When you hurt, I want to destroy whatever caused it."

"Sometimes there's nothing to destroy. Sometimes there's just pain to sit with."

He sat. It was harder than any fight.

"I can learn this," he said finally. "If you can handle the fighting."

"I can handle it," she smiled. "I might even love it."

She gave him something to protect; he gave her someone who would never back down. Her vision, his defense. Her sensitivity, his strength. They built something powerful—art shielded by armor, depth defended by fire.`,
    dynamicDescription: "Creative uniqueness meets protective strength, with potential for defended creativity.",
    growthPath: "Six protecting Four's expression, Four appreciating Six's courage.",
    watchOut: "Six's aggression overwhelming sensitive Four, Four seeming too fragile for Six."
  },
  {
    type1: 4, subtype1: 'sx', type2: 6, subtype2: 'sp',
    title: "The Passionate Sufferer and The Anxious Worrier",
    subtitle: "Intense emotion meets security anxiety",
    narrative: `She felt everything at maximum volume—her love, her grief, her rage, all consuming. He calculated everything at minimum risk—contingencies, backups, escape routes for every scenario.

"Do you ever just feel?" she asked, exasperated by his constant planning.

"Do you ever just think?" he replied, overwhelmed by her constant emotion.

They were impossible together. Her intensity destabilized his carefully constructed safety. His worry dampened her carefully expressed passion.

But when her emotions spiraled into darkness—real darkness, the kind that scared her—he didn't run.

"What are you doing?" she asked as he quietly managed her world, paying bills she'd forgotten, canceling commitments she couldn't keep.

"Creating safety so you can fall apart."

"Why?"

"Because someone has to hold the structure when the feeling takes over."

She wept—not from sadness but from the relief of being caught.

"I make your life chaotic," she admitted later.

"You make my life meaningful," he corrected. "The chaos is the price of caring about something real."

She gave him depth he never knew he needed. He gave her ground she never knew existed. Passion anchored by protection—intense, yes, but finally safe enough to feel everything without falling apart.`,
    dynamicDescription: "Emotional intensity meets practical anxiety, with potential for grounded passion.",
    growthPath: "Four appreciating Six's grounding, Six trusting Four's emotional world.",
    watchOut: "Four overwhelming Six's stability, Six's worry dampening Four's passion."
  },
  {
    type1: 4, subtype1: 'sx', type2: 6, subtype2: 'so',
    title: "The Intense Individualist and The System Loyalist",
    subtitle: "Passionate depth meets group commitment",
    narrative: `She wanted all of him—every thought, every feeling, every moment of attention. He had commitments—to the team, the organization, the community that gave his life structure and meaning.

"You're always somewhere else," she accused after another meeting took him away.

"These people depend on me," he said. "Being reliable—that's who I am."

"And who am I? Just another obligation?"

The question stung because it revealed a truth. He'd been treating their relationship like another box to check rather than the center she needed it to be.

"You're not an obligation," he said slowly. "You're the only place I actually feel things. The groups, the commitments—they're structure. But you're... you're where I'm real."

She saw his struggle then—how belonging everywhere meant belonging nowhere completely. How her intensity asked him to risk what felt like survival.

He learned to protect their intimacy within his structure. She learned to accept his loyalties as part of who he loved. Deep connection and broader belonging—not competing, but nourishing each other.`,
    dynamicDescription: "Intimate passion meets systemic loyalty, creating depth versus breadth tension.",
    growthPath: "Four accepting Six's group commitments, Six prioritizing intimate depth.",
    watchOut: "Four jealous of Six's systemic focus, Six feeling pulled from needed loyalties."
  },
  {
    type1: 4, subtype1: 'sx', type2: 6, subtype2: 'sx',
    title: "The Passionate Soul and The Counterphobic Fighter",
    subtitle: "Intense emotion meets aggressive courage",
    narrative: `Two fires burning in the same room. She blazed with emotional intensity—every feeling consuming, every moment charged with meaning. He blazed with combative courage—meeting threats head-on, never backing down from a fight.

"You're the only one who doesn't scare me," she whispered after he'd faced down someone who'd hurt her.

"You're the only one worth fighting for," he replied, surprising himself with the admission.

But intensity meeting intensity meant explosions too. Arguments that shook the walls. Passion that left them both exhausted. Neither knew how to turn down the flame.

"We're going to destroy each other," she said after one devastating fight.

"Maybe," he admitted. "Or maybe we're the only ones who can survive each other."

It was both curse and gift. Her emotional depth showed him what he was fighting for. His fierce protection created the safety her vulnerable intensity required.

They learned to fight together instead of against each other. Two intensities—one feeling, one fighting—becoming a force rather than a collision.`,
    dynamicDescription: "Emotional intensity meets confrontational intensity, creating mutual recognition or explosive conflict.",
    growthPath: "Six's strength protecting Four's depth, Four's feeling softening Six's fighting.",
    watchOut: "Explosive conflicts between two intensities, neither able to soothe the other."
  },

  // === TYPE 4 WITH TYPE 7 ===
  {
    type1: 4, subtype1: 'sp', type2: 7, subtype2: 'sp',
    title: "The Stoic Sufferer and The Resourceful Opportunist",
    subtitle: "Endured pain meets strategic planning",
    narrative: `She worked through her pain methodically—creating art in her home studio, transforming heartbreak into something beautiful while keeping the bills paid. He bounced between opportunities, always planning three moves ahead, networking his way toward the next adventure.

"You could do so much more," he said, reviewing her exquisite work. "I know people who would—"

"I don't want contacts," she interrupted. "I want depth."

"And I want solutions," he countered. "Why suffer when you could just... solve it?"

She stared at him. "Because suffering IS the depth. It's where meaning lives."

He couldn't understand why anyone would choose heaviness. She couldn't understand why anyone would avoid it. But watching her transform pain into beauty intrigued him. And his practical optimism—annoying as it was—occasionally lifted weights she'd carried too long.

"What if," he offered slowly, "your depth gave my plans meaning? And my options gave your depth... room to breathe?"

She considered this unlikely partnership. Endurance meeting opportunity. Perhaps together they could be both deep and light.`,
    dynamicDescription: "Private suffering meets opportunistic planning, with potential for depth-lightness balance.",
    growthPath: "Four appreciating Seven's solutions, Seven appreciating Four's emotional depth.",
    watchOut: "Four seeing Seven as shallow, Seven seeing Four as needlessly heavy."
  },
  {
    type1: 4, subtype1: 'sp', type2: 7, subtype2: 'so',
    title: "The Enduring Artist and The Social Entertainer",
    subtitle: "Private creation meets group excitement",
    narrative: `She emerged from her studio only when necessary—grocery runs, quiet walks, brief hellos to neighbors. He emerged from parties only when exhausted—always surrounded, always entertaining, always on.

They lived in the same building but in different worlds.

"Come out tonight," he insisted, catching her in the hallway. "It'll be fun!"

"Fun," she repeated flatly. "You mean loud music and shallow conversation."

"I mean connection. Life. Energy." He paused. "When's the last time you laughed?"

The question landed harder than he intended. She couldn't remember.

"When's the last time you cried?" she countered.

He couldn't remember either.

She finally agreed to one party. He was exhausting—but watching him light up a room, she felt something crack open. And when he found her later on the balcony, overwhelmed, he sat in silence with her—discovering that depth could be a refuge from his own scattered energy.

"Teach me to be still," he whispered.

"Teach me to be light," she replied.

Private depth and public lightness—each becoming what the other needed.`,
    dynamicDescription: "Private depth meets public entertainment, with potential for lightness-depth balance.",
    growthPath: "Four emerging into Seven's social lightness, Seven engaging with Four's depth.",
    watchOut: "Four dismissing Seven as superficial, Seven finding Four too heavy."
  },
  {
    type1: 4, subtype1: 'sp', type2: 7, subtype2: 'sx',
    title: "The Stoic Artist and The Fascinated Explorer",
    subtitle: "Quiet endurance meets intense curiosity",
    narrative: `He noticed her art first—haunting, precise, deeply felt. Then he noticed her—quiet, contained, working with an endurance that fascinated him completely.

"Tell me everything," he said, showing up at her studio uninvited. "How do you make something this... true?"

She was suspicious. His intensity felt like a spotlight, and she preferred shadows.

But this Seven was different. When he became interested, he became consumed. For three months, he was completely present—studying her process, understanding her pain, matching her depth in ways that shocked her.

"You're not like other people," she admitted. "You actually go deep."

"Into things that fascinate me," he agreed. "And you fascinate me completely."

The fear lived between those words: what happened when fascination faded? She'd seen his past enthusiasms—passionate, then abandoned.

"I can't promise forever," he said honestly. "But I can promise this moment is completely real."

She chose to trust the depth while it lasted. He chose to let one fascination become a home. Quiet endurance meeting curious intensity—more compatible than either expected.`,
    dynamicDescription: "Private creation meets focused fascination, with potential for sustained deep connection.",
    growthPath: "Seven sustaining interest in Four, Four appreciating Seven's curious depth.",
    watchOut: "Seven's fascination shifting away, Four feeling like temporary interest."
  },
  {
    type1: 4, subtype1: 'so', type2: 7, subtype2: 'sp',
    title: "The Social Outsider and The Strategic Networker",
    subtitle: "Visible difference meets opportunity-seeking",
    narrative: `She stood out in every room—deliberately different, achingly unique. He worked every room—collecting contacts, building networks, creating opportunities wherever he went.

"You're wasting yourself," he told her at a conference. "Your uniqueness could be an asset. Let me introduce you to—"

"I don't want to be an asset," she cut him off. "I want to be seen."

"Same thing, different packaging." He smiled his networker's smile. "Being seen requires an audience. I provide audiences."

She resented his shallowness. He was frustrated by her impracticality. But when he brought her into his world, something unexpected happened. Her uniqueness WAS an asset—her different perspective opened doors his charm couldn't. And his connections gave her belonging she'd desperately craved.

"You made me matter to people," she admitted.

"You made my network mean something," he replied. "Anyone can connect. You gave them something worth connecting to."

Social differentiation and social networking—each finding their place in the other's world. Her standing out and his bringing together becoming complementary rather than contradictory.`,
    dynamicDescription: "Social differentiation meets social networking, with potential for unique contributions to networks.",
    growthPath: "Four's uniqueness valued in Seven's networks, Seven giving Four meaningful connection.",
    watchOut: "Four seeing Seven as superficially connected, Seven seeing Four as impractical."
  },
  {
    type1: 4, subtype1: 'so', type2: 7, subtype2: 'so',
    title: "The Creative Outsider and The Social Butterfly",
    subtitle: "Social uniqueness meets social enthusiasm",
    narrative: `Two social animals speaking different languages. She took every gathering seriously—analyzing dynamics, feeling excluded, seeking that one person who truly saw her uniqueness. He bounced through the same gatherings lightly—collecting laughs, spreading energy, never landing anywhere too long.

"How can you be so... careless?" she asked after watching him work a party.

"How can you be so serious?" he countered. "It's just a party."

"Nothing is 'just' anything. Every interaction matters."

He laughed—then saw she wasn't joking. To her, social life was life-or-death. To him, it was play.

"Teach me to take things seriously," he offered, curious despite himself.

"Teach me to take things lightly," she replied, exhausted by her own intensity.

It was an odd exchange program. She showed him that some connections deserved weight. He showed her that not every slight was a wound. Both understood social dynamics—they just operated at different altitudes.

Serious depth and playful lightness, meeting somewhere in the middle of every room.`,
    dynamicDescription: "Serious social uniqueness meets playful social engagement, testing compatibility of orientations.",
    growthPath: "Four enjoying Seven's playfulness, Seven engaging with Four's depth.",
    watchOut: "Four finding Seven superficial, Seven finding Four too serious about social life."
  },
  {
    type1: 4, subtype1: 'so', type2: 7, subtype2: 'sx',
    title: "The Social Artist and The Focused Enthusiast",
    subtitle: "Visible uniqueness meets intense fascination",
    narrative: `When he focused on her, she felt like the only person in any room. His intensity was unexpected for someone so enthusiastic—he didn't scatter attention, he concentrated it. And she, who had spent her life seeking to be seen as uniquely special, suddenly was.

"You're not like anyone else," he said, studying her with consuming interest.

"People say that," she replied carefully. "Then they leave."

"I won't leave." But even as he said it, they both knew his history—passions that burned bright then shifted to new fascinations.

For six months, she was everything. Then she noticed his eyes wandering toward a new interest, and the familiar abandonment rose in her throat.

"I'm still here," he protested. "Can't I be interested in other things too?"

"I need to be your only fascination," she admitted. "Or I'm nothing."

It was the painful truth between them—her need for constant recognition meeting his pattern of shifting focus. Could he learn to sustain? Could she learn to share?

Intensity meeting intensity—powerful when aligned, devastating when not.`,
    dynamicDescription: "Social uniqueness meets focused fascination, with intensity but impermanence risk.",
    growthPath: "Seven sustaining fascination with Four's uniqueness, Four tolerating Seven's shifting interests.",
    watchOut: "Seven's fascination shifting, Four feeling abandoned when no longer Seven's focus."
  },
  {
    type1: 4, subtype1: 'sx', type2: 7, subtype2: 'sp',
    title: "The Passionate Sufferer and The Practical Adventurer",
    subtitle: "Intense emotion meets resourceful freedom",
    narrative: `Her love was a consuming fire—all-encompassing, intense, demanding complete surrender. He had carefully constructed his life to avoid such fires—options open, resources diversified, freedom preserved at all costs.

"You're never fully here," she accused, sensing his escape routes.

"I'm here enough," he said, one foot always near the door.

"Enough? ENOUGH?" Her intensity flared. "I don't want enough. I want everything."

Everything was exactly what he'd spent his life avoiding. Yet something in her depth called to him—a richness his scattered options never provided.

"What if," he said slowly, "you're the first thing worth staying for?"

"What if you're the first person who could ground my intensity?" she replied.

It was a terrifying negotiation. Her passion asking him to risk his freedom. His groundedness offering her something solid to hold.

"I'll try to stay," he promised. "But you have to let me breathe."

"I'll try to let go," she promised. "But you have to actually be here."

Consuming fire and careful independence—learning to coexist.`,
    dynamicDescription: "Emotional intensity meets preserved freedom, testing whether passion allows independence.",
    growthPath: "Four accepting Seven's need for space, Seven committing despite freedom fears.",
    watchOut: "Four's intensity overwhelming Seven's independence, Seven's detachment devastating Four."
  },
  {
    type1: 4, subtype1: 'sx', type2: 7, subtype2: 'so',
    title: "The Intense Individualist and The Social Entertainer",
    subtitle: "Passionate depth meets group excitement",
    narrative: `She wanted him completely—every moment, every thought, every ounce of attention. He needed everyone—parties, gatherings, the energy of groups that fed his soul.

"You're always leaving," she said as he headed out again.

"I'm always coming back," he countered. "Can't that be enough?"

"I don't want someone who comes back. I want someone who stays."

He saw her pain but couldn't abandon his need for social nourishment. The world beyond their door wasn't competition—it was oxygen.

"When I'm with people, I recharge," he explained. "So I have more to give you."

"When you're with people, I disappear," she replied. "You scatter yourself everywhere. There's nothing left for depth."

It was the classic impasse—her need for intimate focus meeting his need for social breadth. Every party was a betrayal to her. Every demand for exclusivity felt like suffocation to him.

"I'll never be your only source," he admitted.

"I'll never share you easily," she admitted.

Could depth and breadth coexist? They would have to find out.`,
    dynamicDescription: "Intimate depth meets social breadth, creating attention competition.",
    growthPath: "Four accepting Seven's social nature, Seven prioritizing intimate depth.",
    watchOut: "Four jealous of Seven's social engagement, Seven feeling trapped by Four's intensity."
  },
  {
    type1: 4, subtype1: 'sx', type2: 7, subtype2: 'sx',
    title: "The Passionate Soul and The Fascinated Explorer",
    subtitle: "Intense emotion meets intense curiosity",
    narrative: `Two intensities colliding. She felt with consuming depth—every emotion a universe, every connection life-or-death. He focused with consuming interest—when fascinated, nothing else existed.

When they found each other, the intensity was electric.

"I've never felt so seen," she breathed after hours of his undivided attention.

"I've never found someone so endlessly fascinating," he replied, meaning every word.

For months, they burned together—her emotional depth meeting his complete focus. It felt like the connection both had always craved.

Then she noticed the flicker. His attention wandering. A new interest catching his eye.

"You're leaving," she said, recognizing the pattern.

"I'm not—" But he couldn't finish the lie.

"Will you come back? Will I be fascinating again?"

He wanted to promise. She wanted to believe. But both knew the terrible truth: his intensity was real but shifting. Her intensity was real but demanding permanence.

"Stay this time," she whispered. "Let me be the fascination that becomes home."

Could he? They'd have to risk everything to find out.`,
    dynamicDescription: "Emotional intensity meets fascination intensity, creating deep connection with impermanence risk.",
    growthPath: "Seven sustaining fascination beyond initial intensity, Four trusting Seven's depth.",
    watchOut: "Seven's fascination shifting, Four feeling like temporary interest rather than lasting love."
  },

  // === TYPE 4 WITH TYPE 8 ===
  {
    type1: 4, subtype1: 'sp', type2: 8, subtype2: 'sp',
    title: "The Stoic Sufferer and The Territorial Protector",
    subtitle: "Endured pain meets survivalist strength",
    narrative: `She carried her pain like an heirloom—precious, private, polished by years of quiet suffering. He built walls around everything he owned, guarding his territory with a strength that dared anyone to challenge him.

They lived next door for months before speaking.

"You're always so quiet," he said finally, repairing her fence without asking.

"You're always so... present," she replied, watching his capable hands work.

He didn't understand her melancholy. Why dwell in darkness when you could simply overpower it? She didn't understand his aggression. Why fight when you could simply endure?

But when someone tried to take advantage of her gentle nature, he was there—immovable, terrifying in his protection.

"I didn't need saving," she said afterward, though her voice shook.

"I know. But no one touches what's mine."

She bristled at 'mine.' Then realized: in his language, that meant he cared.

"My suffering isn't weakness," she told him later.

He considered this. "I know. I just don't understand it."

"You don't have to understand it. Just don't try to fix it."

He nodded slowly. Her quiet endurance. His fierce protection. Two fortresses, standing side by side.`,
    dynamicDescription: "Private endurance meets territorial strength, with mutual self-sufficiency.",
    growthPath: "Four appreciating Eight's protection, Eight appreciating Four's depth.",
    watchOut: "Eight dismissing Four's suffering, Four overwhelmed by Eight's intensity."
  },
  {
    type1: 4, subtype1: 'sp', type2: 8, subtype2: 'so',
    title: "The Enduring Artist and The Social Champion",
    subtitle: "Private creation meets powerful advocacy",
    narrative: `She painted alone in her studio, transforming private sorrows into art that spoke truths she could never say aloud. He stood before crowds, fighting battles for people who couldn't fight for themselves, his voice a weapon against injustice.

They met when he discovered her murals—hidden in an alley, depicting the suffering of the marginalized.

"Who made these?" he demanded, moved despite himself.

"I did," she said quietly, emerging from shadow.

"These need to be seen. These need to matter."

"They matter to me. That's enough."

But it wasn't enough for him. He championed her work, brought it into galleries, onto walls where thousands would see. She watched from corners as her private pain became public cause.

"You're overwhelming my work," she told him one night. "It was mine."

He paused, unaccustomed to resistance. "I'm making it powerful."

"It was already powerful. Just... quieter."

He learned to protect without conquering. She learned to let her whispered truths be amplified.

Her brush. His megaphone. Different volumes, same song.`,
    dynamicDescription: "Private creativity meets public strength, with potential for protected creation.",
    growthPath: "Eight's strength protecting Four's vulnerable creativity, Four enriching Eight's causes.",
    watchOut: "Eight overwhelming quiet Four, Four seeming too passive for Eight."
  },
  {
    type1: 4, subtype1: 'sp', type2: 8, subtype2: 'sx',
    title: "The Stoic Artist and The Passionate Possessor",
    subtitle: "Quiet endurance meets intense claiming",
    narrative: `She kept her heart in a locked room, suffering beautifully behind closed doors. He wanted everything—complete access, total possession, her entire soul in his hands.

"Let me in," he demanded, pressing against her boundaries.

"There is no 'in,'" she replied calmly. "This is all there is."

But he could see the shadows behind her eyes. He knew there was more.

His intensity crashed against her reserve like waves against cliffs. She didn't fight back—she simply stood, immovable in her quietness, refusing to be swept away.

"Why won't you give yourself to me?" he asked one night, frustrated.

"I give what I can. You want what I can't."

Something in him recognized this: a strength that matched his own, just expressed differently. Her reserve wasn't weakness—it was a fortress as formidable as his aggression.

"I don't understand you," he admitted.

"You're not supposed to. You're supposed to respect it."

Slowly, his consuming fire learned to warm rather than burn. Her locked door learned to open, just a crack—enough for someone who could wait.`,
    dynamicDescription: "Private endurance meets possessive intensity, testing whether reserve can meet claiming.",
    growthPath: "Eight's intensity reaching Four's depths, Four grounding Eight's possession.",
    watchOut: "Eight overwhelming Four's private space, Four's reserve frustrating Eight."
  },
  {
    type1: 4, subtype1: 'so', type2: 8, subtype2: 'sp',
    title: "The Social Outsider and The Survivalist",
    subtitle: "Visible difference meets territorial strength",
    narrative: `She wore her difference like a banner—the artist among accountants, the poet among pragmatists, always set apart. He built empires of brick and steel, fortresses against a threatening world.

"Why do you care what they think of you?" he asked, watching her agonize over a gallery rejection.

"Why do you only care about things?" she countered. "Your buildings have no soul."

He bristled. She had touched something true.

"My buildings keep people safe," he said.

"Safe from what? From feeling anything?"

They circled each other for months—his practicality confounding her, her emotional needs baffling him. She seemed to want something he couldn't build with his hands. He seemed to miss everything that mattered.

But when the world rejected her difference too harshly, he gave her something unexpected: a studio, protected, permanent.

"You built this for me?" she whispered.

"You said my buildings had no soul. Maybe they needed one."

Her uniqueness gave his fortress meaning. His strength gave her difference a home. She was still an outsider—but now she had walls to paint.`,
    dynamicDescription: "Social differentiation meets territorial control, with potential for protected uniqueness.",
    growthPath: "Eight protecting Four's differentiated expression, Four bringing meaning to Eight's world.",
    watchOut: "Eight dismissing Four's emotional needs, Four finding Eight's world lacking depth."
  },
  {
    type1: 4, subtype1: 'so', type2: 8, subtype2: 'so',
    title: "The Creative Outsider and The Social Champion",
    subtitle: "Social difference meets powerful advocacy",
    narrative: `They both stood out in crowds—she through her haunting difference, he through his commanding presence. She was the voice that said what no one else would feel. He was the force that did what no one else would dare.

"Join my cause," he said, recognizing her gift. "Your art could change minds."

"I don't join causes," she replied. "I am one."

He laughed—a rare sound. "You're as stubborn as I am."

"I'm nothing like you. You use power. I use pain."

"Both get results."

They clashed constantly—his forcefulness bruising her sensitivity, her emotional demands seeming like weakness to his action-oriented mind. She wanted to be understood; he wanted to make change. She processed; he charged.

But at a rally, when her voice broke speaking of losses that still bled, his hand found her shoulder. Silent. Steady.

"You didn't fix it," she said afterward. "You just... stood there."

"Sometimes that's what strength is for."

Her poetry. His protection. Two different ways of mattering—finally fighting on the same side.`,
    dynamicDescription: "Creative uniqueness meets protective power, with potential for cause-driven alliance.",
    growthPath: "Eight channeling strength for Four's creative vision, Four appreciating Eight's protective power.",
    watchOut: "Eight's forcefulness overwhelming Four, Four seeming too fragile for Eight."
  },
  {
    type1: 4, subtype1: 'so', type2: 8, subtype2: 'sx',
    title: "The Social Artist and The Possessive Force",
    subtitle: "Visible uniqueness meets intimate intensity",
    narrative: `She needed the world to see her—galleries, audiences, recognition for her singular vision. He needed only her—completely, exclusively, every part of her attention focused on him alone.

"Where were you tonight?" he asked, his voice tight.

"At my opening. You knew that."

"You were supposed to be home hours ago."

She felt the familiar suffocation. "I can't disappear into you. I need to exist out there too."

"I don't share," he said simply. "What's mine is mine."

"I'm not a possession."

"Then what are you to me?"

The question hung between them. She wanted to be seen by everyone; he wanted to be everything to her. Her identity required witnesses; his love required exclusivity.

"Can you be proud of me?" she finally asked. "Even when I'm not looking at you?"

He struggled with this. Pride felt like letting go.

"I can try," he said at last. "But come home to me. Every night, come home."

"Always," she promised. "But let me shine first."

Her stage. His arms. Learning to share her without losing her.`,
    dynamicDescription: "Social uniqueness meets possessive intensity, creating public versus private tension.",
    growthPath: "Four giving Eight needed exclusive attention, Eight allowing Four's social expression.",
    watchOut: "Eight's possessiveness curtailing Four's social seeking, Four feeling suffocated."
  },
  {
    type1: 4, subtype1: 'sx', type2: 8, subtype2: 'sp',
    title: "The Passionate Sufferer and The Territorial Protector",
    subtitle: "Intense emotion meets survivalist strength",
    narrative: `She burned with feelings that consumed everything—love like fire, grief like drowning, passion that left her breathless and broken. He built things: businesses, properties, walls of resource and power that kept the world at bay.

"Feel something," she begged him. "Feel anything."

"I feel plenty," he replied, reviewing contracts. "I just don't let it run my life."

She thought him hollow. He thought her impractical. Her storms of emotion crashed against his practical walls, and neither gave way.

But when her intensity finally broke her—when the feeling became too much to bear alone—he was there. Not with words. With shelter. With food. With a bed that wouldn't move no matter how hard she shook.

"You can't fix this," she wept.

"I know. But you can fall apart here. Nothing will touch you."

She had never been held by something so solid.

"You don't understand me," she whispered.

"No," he agreed. "But I can protect you anyway."

His fortress. Her fire. She gave his power something worth guarding. He gave her chaos somewhere safe to land.`,
    dynamicDescription: "Emotional intensity meets practical power, with potential for protected passion.",
    growthPath: "Eight's strength protecting Four's vulnerable depth, Four giving meaning to Eight's world.",
    watchOut: "Four feeling emotionally unseen, Eight finding Four's intensity impractical."
  },
  {
    type1: 4, subtype1: 'sx', type2: 8, subtype2: 'so',
    title: "The Intense Individualist and The Social Champion",
    subtitle: "Passionate depth meets public power",
    narrative: `She wanted only him—his eyes, his attention, his soul completely intertwined with hers. He belonged to causes, to movements, to people who needed his protection. She was one among many.

"You're never here," she said, watching him prepare for another rally.

"I'm here now."

"Your body is here. You are with them."

He sighed. "They need me."

"I need you too." Her voice cracked. "More than they do."

This was their war: her consuming need for intimate connection versus his consuming need to matter in the world. She felt abandoned; he felt trapped. She wanted depth; he wanted impact.

But one night, exhausted from battle, he came home broken. She held him in silence, asking nothing, giving everything.

"How do you do that?" he whispered. "Love without needing to fix?"

"It's all I know how to do."

He started coming home differently after that. Not because the cause mattered less—but because she mattered too.

"I can't be your only world," he said finally.

"I know. But can I be your home?"

He pulled her close. "You already are."`,
    dynamicDescription: "Intimate passion meets public power, creating private versus public tension.",
    growthPath: "Four's depth fueling Eight's causes, Eight prioritizing intimate connection.",
    watchOut: "Four jealous of Eight's public focus, Eight feeling private demands limit impact."
  },
  {
    type1: 4, subtype1: 'sx', type2: 8, subtype2: 'sx',
    title: "The Passionate Soul and The Possessive Claimer",
    subtitle: "Intense emotion meets consuming possession",
    narrative: `Two fires meeting. She burned with emotional intensity that could consume worlds—yearning, passionate, desperate for complete union. He burned with possessive intensity that demanded total ownership—claiming, controlling, devouring what was his.

"You're mine," he said, and it wasn't a question.

"I was yours before you knew to claim me," she whispered.

Their love was volcanic—eruptions of passion that left them both shaken. She gave everything; he took everything. She wanted to be consumed; he wanted to consume.

But intensity without balance is destruction.

"You're crushing me," she said one night, her soul raw.

"You're drowning me," he replied, equally exposed.

They stood at the edge of annihilation—two forces too powerful to merge without rules.

"I need you to hold me without breaking me," she said.

"I need you to love me without manipulating me," he answered.

The hardest truth: their intensity was matched, but their power was not. He could destroy her with control; she could destroy him with need.

"Gentle," she asked.

"Equal," he agreed.

Two infernos learning not to burn each other down.`,
    dynamicDescription: "Emotional intensity meets possessive intensity, creating maximum passion with power risks.",
    growthPath: "Eight's strength protecting rather than dominating Four, Four's depth enriching rather than manipulating Eight.",
    watchOut: "Power imbalance crushing Four's sensitivity or controlling Eight through emotion."
  },

  // === TYPE 4 WITH TYPE 9 ===
  {
    type1: 4, subtype1: 'sp', type2: 9, subtype2: 'sp',
    title: "The Stoic Sufferer and The Comfortable Settler",
    subtitle: "Endured pain meets peaceful comfort",
    narrative: `She held her sorrow like a sacred duty—something to be felt fully, honored, never escaped. He held his comfort like a sanctuary—soft chairs, warm tea, a life arranged to avoid all sharp edges.

"Why do you suffer so much?" he asked one evening, genuinely confused.

"Why don't you feel anything?" she replied, equally puzzled.

He felt plenty—he just didn't see the point in dwelling. She couldn't imagine not dwelling. To her, his contentment looked like denial. To him, her suffering looked like a choice.

"You could just... be okay," he offered gently.

"That's not how it works for me."

"Why not?"

She had no answer he could understand.

But slowly, his quiet acceptance began to reach her. He didn't try to fix her darkness—he just sat beside it, unafraid, undisturbed.

"You're still here," she said one night, surprised.

"Where else would I be?"

She had never met someone so unmoved by her storms. He had never met someone who made stillness feel shallow.

Her depth. His peace. Two forms of private strength, learning to share the same quiet room.`,
    dynamicDescription: "Private suffering meets peaceful contentment, with potential for soothed depth.",
    growthPath: "Four finding peace in Nine's acceptance, Nine engaging with Four's depth.",
    watchOut: "Four frustrated by Nine's contentment, Nine disturbed by Four's suffering."
  },
  {
    type1: 4, subtype1: 'sp', type2: 9, subtype2: 'so',
    title: "The Enduring Artist and The Social Harmonizer",
    subtitle: "Private creation meets group peace",
    narrative: `She worked alone in her studio, transforming pain into art that no one else would ever understand. He moved through groups like water—smoothing tensions, including everyone, making peace wherever he went.

"Come to the gathering," he invited gently.

"I don't belong there."

"Everyone belongs."

She found this both naive and oddly comforting. His groups felt like blurred masses to her—where was the individual? Where was the depth? But he saw something different: connection without competition, belonging without performance.

"They don't see me," she said after one attempt.

"They see you. They just don't make a fuss about it."

This was strange to her—being accepted without being special. Being included without being understood.

"Your art could be there," he suggested. "Part of something larger."

"My art is mine."

"It could still be yours. Just... shared."

Slowly, she let her work enter his harmonious worlds. He made space for her differentness without requiring her to explain it.

She remained an individual. But now she was an individual with a place.

His community. Her uniqueness. Belonging without losing herself.`,
    dynamicDescription: "Individual creativity meets group harmony, with potential for peaceful uniqueness.",
    growthPath: "Four finding belonging in Nine's harmonious groups, Nine appreciating Four's unique contribution.",
    watchOut: "Four feeling lost in Nine's group focus, Nine disturbed by Four's differentiation."
  },
  {
    type1: 4, subtype1: 'sp', type2: 9, subtype2: 'sx',
    title: "The Stoic Artist and The Merged Soul",
    subtitle: "Quiet endurance meets complete fusion",
    narrative: `She kept herself intact through years of quiet suffering—her identity forged in private pain, fiercely her own. He dissolved into whoever he loved—their dreams becoming his dreams, their world becoming his world.

When they met, he poured himself into her life completely. Her art became his mission. Her sorrows became his cause. He anticipated her needs before she spoke them.

"What do you want?" she asked him one evening.

"I want what you want."

"But what do you want?"

He paused. He genuinely didn't know.

This disturbed her more than she expected. She had fought so hard to be someone—and here was a person who had become no one by becoming her.

"I need you to exist," she said finally. "Not just as my reflection."

"I don't know how."

"Find something that's yours. Something I didn't give you."

It was the hardest thing anyone had asked of him. To be a self when merging felt like love.

Slowly, he began to surface. A preference here. An opinion there. Small stakes in his own existence.

"There you are," she said when she finally saw him.

His presence. Her self. Two people in the room at last.`,
    dynamicDescription: "Private selfhood meets complete merger, with questions about Nine's presence.",
    growthPath: "Nine maintaining self while supporting Four, Four valuing Nine's unique presence.",
    watchOut: "Nine lost in Four's world, Four creating with a partner who's disappeared."
  },
  {
    type1: 4, subtype1: 'so', type2: 9, subtype2: 'sp',
    title: "The Social Outsider and The Comfortable Retreater",
    subtitle: "Visible difference meets peaceful withdrawal",
    narrative: `She stood at every edge—the outsider at parties, the different one in every room, seeking connection through the very thing that set her apart. He stayed home, nested in comfort, content to let the social world pass by his window.

"Come with me tonight," she asked.

"Why would I do that?"

"Because I need... someone."

"You need an audience. I'm not that."

She bristled, but he wasn't wrong. She needed witnesses to her uniqueness. He needed nothing but his couch and his quiet.

And yet, she kept returning to his peaceful retreat. Here, she didn't have to perform. Here, her difference wasn't a statement—it just was.

"You don't care that I'm strange," she observed.

"Everyone's strange. You just advertise it."

She laughed despite herself.

"Will you ever come out with me?" she asked later.

"Sometimes. When it matters to you."

"How will you know when it matters?"

"You'll tell me. And I'll believe you."

His home became her harbor. Her world became his occasional adventure. She brought him color; he gave her rest.

Two outsiders to different things, meeting in the middle.`,
    dynamicDescription: "Social differentiation meets social avoidance, with shared sense of not fitting typical social molds.",
    growthPath: "Nine selectively engaging with Four's social world, Four appreciating Nine's peaceful retreat.",
    watchOut: "Four frustrated by Nine's withdrawal, Nine overwhelmed by Four's social needs."
  },
  {
    type1: 4, subtype1: 'so', type2: 9, subtype2: 'so',
    title: "The Creative Outsider and The Social Harmonizer",
    subtitle: "Social difference meets group peace",
    narrative: `She carved her edges sharp—the one who didn't fit, who wouldn't blend, who wore her otherness like armor. He smoothed every corner—the one who connected everyone, who erased conflict, who made groups feel like home.

"You're trying too hard to disappear," she told him.

"You're trying too hard to be seen," he replied.

Neither was wrong.

She watched him work a room—not leading, not following, just... belonging. How did he do that? She had never belonged anywhere without making it a statement.

He watched her enter the same room—drawing eyes, demanding notice, refusing to be just another face. Why did she need that? He had never understood the appeal.

"Don't you ever want to matter?" she asked.

"I matter to everyone. Just not loudly."

"Don't you ever want to fit in?" he countered.

"Fitting in means disappearing. I can't do that."

But something strange happened when they stood together. Her edges softened slightly. His presence sharpened. She became unique within his harmony. He became visible through her contrast.

"We shouldn't work," she admitted.

"Most things that work shouldn't," he smiled.

Her standing out. His blending in. Together, somehow, they both got seen.`,
    dynamicDescription: "Standing out meets blending in, with potential for harmonious uniqueness.",
    growthPath: "Four finding belonging through Nine's acceptance, Nine appreciating Four's unique contribution.",
    watchOut: "Four's differentiation disturbing Nine's harmony, Nine's blending frustrating Four's need to stand out."
  },
  {
    type1: 4, subtype1: 'so', type2: 9, subtype2: 'sx',
    title: "The Social Artist and The Merged Lover",
    subtitle: "Visible uniqueness meets intimate fusion",
    narrative: `She lived for recognition—galleries, openings, moments when the world acknowledged her singular vision. He lived for her—completely, totally, his entire existence reorganized around their union.

"I have the exhibition tonight," she said, getting ready.

His face fell slightly. Another night alone while she shone for others.

"Come with me," she offered.

"I'd just be in the way."

"You wouldn't be in the way."

"I'd be invisible. And you'd be... everywhere else."

This was their tension. She needed the world to see her; he needed only her to see him. Her identity required audiences; his required only her presence.

"You're the one person who truly appreciates me," she admitted one night. "More than any of them."

"Then why do you need them?"

She couldn't explain it. The craving for recognition ran deeper than reason.

"Can you love me even when I'm looking elsewhere?" she finally asked.

He considered this. "Can you come home to me? Really home? Not just physically?"

"Yes."

"Then I can wait."

Her spotlight. His devotion. Learning that being seen by many and being known by one could coexist.`,
    dynamicDescription: "Social uniqueness meets intimate merger, creating breadth versus depth tension.",
    growthPath: "Four giving Nine focused intimate attention, Nine tolerating Four's social engagement.",
    watchOut: "Nine feeling abandoned for Four's social seeking, Four feeling suffocated by Nine's merger."
  },
  {
    type1: 4, subtype1: 'sx', type2: 9, subtype2: 'sp',
    title: "The Passionate Sufferer and The Comfortable Retreater",
    subtitle: "Intense emotion meets peaceful withdrawal",
    narrative: `She loved like a storm—overwhelming, consuming, impossible to ignore. He lived like a still pond—undisturbed, comfortable, resistant to any ripple.

"Feel this with me," she begged, her emotions crashing against his calm.

"I can't feel that intensely," he said, retreating further into his routines.

"Then feel something. Anything."

His withdrawal felt like death to her—the ultimate rejection, the proof that she was too much. Her intensity felt like assault to him—the destruction of everything that kept him safe.

"You're suffocating me," he whispered.

"You're abandoning me," she cried.

They stood at an impasse for months. Fire and water. Chaos and stillness.

But slowly, something shifted. He began to crave her intensity—the way she made him feel alive, present, real. She began to crave his peace—the way he made her storms seem survivable.

"I can't be calm," she admitted.

"I can't be intense," he replied.

"Can you stay anyway?"

"If you let me be quiet sometimes."

Her fire. His stillness. Learning that passion and peace could share the same home.`,
    dynamicDescription: "Consuming emotion meets tranquil withdrawal, creating intensity versus peace tension.",
    growthPath: "Four tempering intensity for Nine, Nine engaging with Four's passion.",
    watchOut: "Four overwhelming Nine's peace, Nine's withdrawal devastating Four."
  },
  {
    type1: 4, subtype1: 'sx', type2: 9, subtype2: 'so',
    title: "The Intense Individualist and The Group Harmonizer",
    subtitle: "Passionate depth meets social peacemaking",
    narrative: `She wanted all of him—every thought, every feeling, every moment of attention focused on their connection. He belonged to everyone—the peacemaker, the harmonizer, the one who made every group feel whole.

"You're never fully here," she said, watching him mentally tend to someone else's conflict.

"I'm here. I'm just also... there."

"I need you here. Only here."

He felt pulled in two directions. Her need for him was so intense, so consuming. But the groups needed him too—or at least, he felt they did.

"Why can't I be enough?" she asked one night, her voice raw.

"You are enough. You're more than enough. You're almost too much."

She flinched. There it was.

"I don't want to be peaceful," she said. "I want to be chosen."

Something in him shifted. All his life, he had diffused himself across many—and here was someone asking him to be concentrated. Present. Singular.

"Teach me," he said quietly. "How to choose one thing."

"Stay," she replied. "Just stay."

And for the first time, he did. Her intensity. His presence. Finally meeting in the same room.`,
    dynamicDescription: "Intimate passion meets social harmony, creating competition between relationship and groups.",
    growthPath: "Nine prioritizing intimate relationship, Four appreciating Nine's peacemaking gifts.",
    watchOut: "Four jealous of Nine's social focus, Nine torn between relationship and group harmony."
  },
  {
    type1: 4, subtype1: 'sx', type2: 9, subtype2: 'sx',
    title: "The Passionate Soul and The Complete Merger",
    subtitle: "Intense emotion meets total fusion",
    narrative: `They both wanted complete union—she through the intensity of her yearning, he through the totality of his dissolution. She burned toward him; he melted into her. It seemed, at first, like perfect complementarity.

"I've never felt so understood," she breathed.

"I've never felt so complete," he replied.

But something strange began to happen. He merged so thoroughly with her emotional world that his own disappeared. Her passions became his passions. Her sorrows became his sorrows. Her desires became his desires.

"What do you feel?" she asked one day.

"What you feel."

"No—what do you feel?"

Silence.

She had wanted to be known completely. But who was knowing her? He had become a mirror, reflecting her back to herself. Her yearning echoed in emptiness.

"I need you to exist," she said, grief in her voice. "I need someone to yearn toward."

"I don't know who I am without you," he admitted.

"Find out. Please. I'll wait."

The hardest journey of their love: him learning to be someone, so she would have someone to love. Her learning to hold space for a self that wasn't her own.

Two souls seeking merger—discovering that union requires two.`,
    dynamicDescription: "Intense yearning meets complete fusion, with risk of Nine disappearing into Four's world.",
    growthPath: "Nine maintaining self within merger, Four appreciating Nine's unique presence.",
    watchOut: "Nine completely lost in Four's emotional world, Four yearning for someone who's no longer there."
  },

  // ============================================
  // TYPE 5 CROSS-TYPE PAIRINGS
  // ============================================

  // === TYPE 5 WITH TYPE 6 ===
  {
    type1: 5, subtype1: 'sp', type2: 6, subtype2: 'sp',
    title: "The Self-Sufficient Hermit and The Security Builder",
    subtitle: "Minimal needs meets anxious preparation",
    narrative: `He had reduced his life to essentials—a small apartment, few possessions, minimal needs. She had stockpiled everything—emergency kits, backup plans, contingency strategies for scenarios he couldn't imagine worrying about.

"Why do you need so much?" he asked, genuinely puzzled by her third fire extinguisher.

"Why do you need so little?" she countered. "What happens when something breaks?"

"I fix it. Or I do without."

She stared at him like he'd spoken another language. To her, his minimalism looked like recklessness. To him, her preparation looked like imprisonment.

But slowly, she noticed something: his self-sufficiency meant he never panicked. And he noticed something too: her preparation meant she could actually help when things went wrong.

"You don't worry," she said one evening, almost accusatory.

"I've eliminated most things worth worrying about."

She considered this. "That's... actually brilliant."

He smiled slightly. "Your way has merits too. You're prepared for the things I can't eliminate."

Different fortresses—his built from subtraction, hers from addition—but both keeping the world at bay.`,
    dynamicDescription: "Withdrawal for security meets preparation for security, with different risk assessments.",
    growthPath: "Five appreciating Six's protective preparation, Six appreciating Five's self-sufficiency.",
    watchOut: "Six finding Five's withdrawal risky, Five finding Six's worry intrusive."
  },
  {
    type1: 5, subtype1: 'sp', type2: 6, subtype2: 'so',
    title: "The Complete Hermit and The Loyal Follower",
    subtitle: "Total withdrawal meets system loyalty",
    narrative: `He lived alone in his small apartment, needing nothing from anyone. She lived within a web of organizations—the neighborhood watch, the community board, the union at work.

"How can you trust those systems?" he asked, bewildered by her committee meetings.

"How can you trust being so alone?" she replied.

He saw groups as chaos—unpredictable demands, endless obligations. She saw solitude as dangerous—no backup, no belonging, no safety net.

"If something happened to you, who would even know?" she worried aloud.

He paused. He hadn't thought about that.

"If something happened to your organization, you'd have nothing," he countered.

She paused. She hadn't thought about that either.

Slowly, she introduced him to one committee—just one, the one with structure he could understand. And he taught her to sit alone sometimes, to find the quiet independence she'd never known she lacked.

Her systems gave him connection without chaos. His solitude gave her strength without dependency.`,
    dynamicDescription: "Solitary withdrawal meets systemic belonging, with opposite orientations to groups.",
    growthPath: "Five engaging with Six's organized systems, Six respecting Five's independence.",
    watchOut: "Six feeling abandoned by Five's withdrawal, Five overwhelmed by Six's social demands."
  },
  {
    type1: 5, subtype1: 'sp', type2: 6, subtype2: 'sx',
    title: "The Self-Sufficient Hermit and The Counterphobic Fighter",
    subtitle: "Complete withdrawal meets aggressive courage",
    narrative: `She came at the world fists first—every fear transformed into a fight. He retreated from the world entirely—every threat avoided by withdrawal.

"Why do you hide?" she demanded, frustrated by his locked door.

"Why do you fight everything?" he asked through it.

To him, her aggression looked exhausting, pointless, dangerous. To her, his withdrawal looked cowardly, passive, weak.

But one night, someone threatened him. Before he could retreat, she was there—fierce, protective, terrifying to behold.

"You didn't have to do that," he said afterward, shaken.

"Yes, I did."

And something in him shifted. Her strength wasn't chaos—it was shelter.

Later, when her fighting left her depleted, he offered something she'd never experienced: quiet. A room where nothing had to be conquered. A presence that asked nothing.

"How are you so calm?" she whispered.

"I've learned there's nothing here worth fighting."

Her courage protected his sanctuary. His stillness gave her somewhere to rest between battles.`,
    dynamicDescription: "Withdrawal meets confrontation, with potential for protection or overwhelm.",
    growthPath: "Six's courage protecting Five's vulnerability, Five's calm grounding Six's aggression.",
    watchOut: "Six's intensity overwhelming withdrawn Five, Five's detachment frustrating engaging Six."
  },
  {
    type1: 5, subtype1: 'so', type2: 6, subtype2: 'sp',
    title: "The Knowledge Sharer and The Private Worrier",
    subtitle: "Intellectual community meets personal anxiety",
    narrative: `He spoke at conferences, wrote papers, shared ideas with intellectual communities worldwide. She worried at home about whether the doors were locked, the savings sufficient, the insurance current.

"You spend so much energy on abstract ideas," she said, balancing her checkbook.

"You spend so much energy on things that haven't happened," he replied, preparing his next lecture.

Her practical anxiety grounded him when his theories flew too high. His intellectual confidence calmed her when her worries spiraled.

"I secured our retirement fund today," she announced.

"I published my research today," he responded.

Different contributions. Both essential.

"Your worrying actually built something," he admitted one evening, reviewing their finances.

"Your thinking actually changed something," she acknowledged, reading his latest review.

She gave him a foundation. He gave her a horizon. Together, they had both security and meaning.`,
    dynamicDescription: "Intellectual engagement meets private security, with moderate versions of both types.",
    growthPath: "Six supporting Five's intellectual work, Five appreciating Six's practical security.",
    watchOut: "Five finding Six's worry limiting, Six finding Five's intellectual focus impractical."
  },
  {
    type1: 5, subtype1: 'so', type2: 6, subtype2: 'so',
    title: "The Intellectual Networker and The Group Loyalist",
    subtitle: "Knowledge community meets organizational commitment",
    narrative: `They met at a professional organization—he was presenting research, she was chairing the committee. Same room, different reasons for being there.

"Your analysis was fascinating," she said, "but will you support the resolution?"

"I support truth," he replied. "Loyalty comes after."

She bristled. Commitment meant everything to her. He seemed to float above it all, offering insights without investment.

"You can't just observe," she argued. "You have to belong."

"You can't just belong," he countered. "You have to understand."

Months passed. His insights improved her committee's work. Her commitment gave his research a purpose.

"I've never been loyal to an organization before," he admitted.

"I've never questioned one so thoroughly," she replied.

His expertise finally had a home. Her loyalty finally had wisdom. Different currencies, exchanged until both were richer.`,
    dynamicDescription: "Intellectual contribution meets loyal commitment, with potential for organizational partnership.",
    growthPath: "Five's expertise enhancing Six's commitment, Six's loyalty supporting Five's contribution.",
    watchOut: "Six seeing Five's detachment as disloyal, Five seeing Six's loyalty as unthinking."
  },
  {
    type1: 5, subtype1: 'so', type2: 6, subtype2: 'sx',
    title: "The Knowledge Sharer and The Fierce Defender",
    subtitle: "Intellectual engagement meets counterphobic strength",
    narrative: `He analyzed problems from his study, publishing papers that influenced policy. She confronted problems in the streets, leading protests, facing down opposition.

"Your theories don't change anything," she challenged.

"Your fighting doesn't think anything through," he replied.

She thought he was weak—all mind, no courage. He thought she was reckless—all action, no strategy.

Then she faced an opponent who outmaneuvered her at every turn. She came to him, frustrated.

"I need to understand how they think."

He mapped the power structures, the pressure points, the vulnerabilities. Armed with his analysis, she returned to the fight—and won.

"You were my strategy," she said afterward.

"You were my impact," he realized.

Her courage gave his ideas consequence. His insight gave her battles precision. She fought; he aimed. Together, they hit their targets.`,
    dynamicDescription: "Cerebral engagement meets aggressive action, with potential for defended intellect.",
    growthPath: "Six's strength protecting Five's intellectual contributions, Five's analysis grounding Six's fighting.",
    watchOut: "Six's aggression overwhelming Five, Five seeming passive to action-oriented Six."
  },
  {
    type1: 5, subtype1: 'sx', type2: 6, subtype2: 'sp',
    title: "The Secret Romantic and The Anxious Worrier",
    subtitle: "Hidden longing meets security anxiety",
    narrative: `He hid himself behind books and theories, but inside burned a desperate longing no one ever saw. She worried about everything—finances, safety, what could go wrong—her anxiety a constant companion.

They recognized each other's fear.

"You're afraid all the time," he observed.

"So are you," she said quietly. "Just about different things."

His fear was intimacy—wanting it desperately, hiding from it completely. Her fear was catastrophe—preparing endlessly, never feeling safe.

She started leaving him lists. Practical kindnesses: groceries to buy, bills due, small anchors to reality.

He started leaving her thoughts. Scribbled insights about her worries: why they couldn't hurt her, how she was stronger than she knew.

"I feel safer when you explain things," she admitted.

"I feel seen when you notice I'm here," he confessed.

Her practical caring reached him without demanding too much. His hidden depth gave her something solid to trust. Two anxious souls finding unexpected ground.`,
    dynamicDescription: "Hidden romantic intensity meets practical anxiety, with potential for mutual grounding.",
    growthPath: "Five's depth giving Six emotional security, Six's grounding anchoring Five's intensity.",
    watchOut: "Five remaining hidden from worried Six, Six's anxiety amplifying Five's fear."
  },
  {
    type1: 5, subtype1: 'sx', type2: 6, subtype2: 'so',
    title: "The Secret Yearner and The System Loyalist",
    subtitle: "Hidden passion meets group commitment",
    narrative: `He loved her desperately, secretly, from behind walls no one could see. She belonged to committees, organizations, systems—always working toward group security.

"Why do you need all those groups?" he asked, jealous of her attention.

"Why do you need so much solitude?" she wondered, never seeing his longing.

Her group focus felt impersonal to him. His withdrawal felt unreliable to her. Two different security strategies, missing each other completely.

But one night, he told her something—a small truth about what he felt. She stopped. Listened. Saw past the withdrawal for the first time.

"You've been here all along," she whispered.

"Waiting for you to look," he confirmed.

She started bringing him into her world—not the chaos of it, but the meaning. Why belonging mattered. And he offered her what no group could: his complete, focused attention.

Her loyalty gave him somewhere to belong. His depth gave her someone worth belonging to.`,
    dynamicDescription: "Hidden longing meets systemic loyalty, with different orientations to security.",
    growthPath: "Five's depth enriching Six's group life, Six's loyalty giving Five belonging.",
    watchOut: "Five feeling lost in Six's systems, Six finding Five insufficiently committed."
  },
  {
    type1: 5, subtype1: 'sx', type2: 6, subtype2: 'sx',
    title: "The Secret Romantic and The Counterphobic Fighter",
    subtitle: "Hidden intensity meets confrontational intensity",
    narrative: `Two intensities, opposite expressions. She charged at every fear, confronting what terrified her. He hid from what he wanted most, his longing buried beneath walls of solitude.

"Why won't you let me in?" she demanded, beating against his doors.

"Why do you have to storm everything?" he asked from behind them.

Her courage felt invasive. His hiding felt like rejection.

But she was persistent. And he was desperate—though he'd never show it.

One night, she stopped fighting and simply waited outside his door. No demands. Just presence.

He opened it.

"I've been so afraid," he admitted, voice breaking.

"I know," she said. "I fight because I'm afraid too."

His hidden passion matched her visible fire. Her courage finally found something worth gentleness. Two warriors—one hidden, one blazing—recognizing the same fear, the same intensity, the same desperate need for connection.

She learned to approach softly. He learned to emerge bravely. Meeting somewhere in the middle, where courage and vulnerability touched.`,
    dynamicDescription: "Hidden passion meets visible aggression, testing whether courage can meet fear.",
    growthPath: "Six's courage drawing out Five's hidden intensity, Five's depth tempering Six's fighting.",
    watchOut: "Five retreating from Six's intensity, Six frustrated by Five's hiddenness."
  },

  // === TYPE 5 WITH TYPE 7 ===
  {
    type1: 5, subtype1: 'sp', type2: 7, subtype2: 'sp',
    title: "The Self-Sufficient Hermit and The Resourceful Opportunist",
    subtitle: "Minimal needs meets opportunity-seeking",
    narrative: `He owned three shirts and needed nothing else. She had seventeen side projects and was always acquiring more.

"Don't you want options?" she asked, showing him her latest venture.

"I have everything I need," he replied, content in his minimal space.

His philosophy was subtraction—remove enough, and you're free. Hers was addition—gather enough, and you're safe.

"What if an opportunity comes and you can't take it?" she worried.

"What if you're so busy with opportunities you miss what matters?" he wondered.

They puzzled each other. His sufficiency looked like deprivation to her. Her abundance looked like bondage to him.

But slowly, she noticed he never stressed about money. And he noticed she never got stuck.

"Teach me to need less," she asked one day.

"Teach me to want more," he replied.

Her resources created space for his experiments. His minimalism showed her what was actually essential. Different strategies, same goal: freedom.`,
    dynamicDescription: "Conservation meets acquisition, with shared practicality but different strategies.",
    growthPath: "Five appreciating Seven's resources, Seven appreciating Five's sufficiency.",
    watchOut: "Seven's acquiring exhausting Five, Five's minimalism frustrating Seven."
  },
  {
    type1: 5, subtype1: 'sp', type2: 7, subtype2: 'so',
    title: "The Complete Hermit and The Social Entertainer",
    subtitle: "Total withdrawal meets group excitement",
    narrative: `She was everywhere—hosting parties, leading workshops, the center of every room. He was nowhere—home alone, content in his quiet apartment, avoiding social gatherings like illness.

"You should come out more," she suggested, radiating enthusiasm.

"You should stay in more," he replied, exhausted just watching her calendar.

Her social energy drained him by proximity. His withdrawal baffled her entirely.

But she found herself stopping by his apartment sometimes. Not for a party—just to think.

"It's so quiet here," she noticed.

"That's the point," he said.

In his stillness, her scattered thoughts collected themselves. In her energy, his isolation found occasional, gentle interruption.

"You're my favorite place to be alone," she told him, which didn't make sense but did.

"You're my favorite kind of chaos," he admitted, which made even less sense but was equally true.

His withdrawal gave her depth. Her brightness gave him small adventures. An unlikely equilibrium, maintained by opposite forces.`,
    dynamicDescription: "Maximum withdrawal meets maximum social engagement, creating fundamental orientation clash.",
    growthPath: "Seven gently drawing Five into engagement, Five grounding Seven's dispersed energy.",
    watchOut: "Seven's social demands overwhelming Five, Five's withdrawal frustrating social Seven."
  },
  {
    type1: 5, subtype1: 'sp', type2: 7, subtype2: 'sx',
    title: "The Self-Sufficient Hermit and The Fascinated Explorer",
    subtitle: "Complete withdrawal meets focused curiosity",
    narrative: `She became fascinated with him the way she became fascinated with everything—intensely, completely, with her entire attention.

"What are you reading?" she asked, appearing beside him.

"The same book as yesterday," he replied. "You were interested in pottery yesterday."

"That was yesterday."

He was used to being invisible. Her focus felt like a spotlight, uncomfortable and thrilling.

"Why me?" he finally asked.

"Because you're deep," she said. "Everyone else is shallow all the way down. You have caves I haven't explored."

He wasn't sure he wanted to be explored. But her curiosity wasn't demanding—it was patient, present, genuinely captivated.

Months passed. Her fascination didn't shift.

"You're still here," he observed, surprised.

"There's still more to discover," she replied.

His depth held her attention longer than anything ever had. Her fascination made him feel, for the first time, worth knowing. He hoped it would last. She promised nothing—but she was still here.`,
    dynamicDescription: "Withdrawal meets focused fascination, with potential for sustained deep connection.",
    growthPath: "Seven's curiosity engaging Five, Five's depth sustaining Seven's interest.",
    watchOut: "Seven's fascination shifting away, Five feeling like abandoned curiosity."
  },
  {
    type1: 5, subtype1: 'so', type2: 7, subtype2: 'sp',
    title: "The Knowledge Sharer and The Strategic Networker",
    subtitle: "Intellectual community meets opportunity-seeking",
    narrative: `He lectured at universities, sharing knowledge with anyone who would listen. She networked at conferences, turning every contact into opportunity.

"You give away ideas for free," she observed. "You could monetize that."

"You monetize everything," he noted. "Do you believe in any of it?"

Her practicality grated against his intellectual purity. His idealism seemed naive to her strategic mind.

But they worked on a project together. His expertise gave her network something valuable to offer. Her connections gave his ideas reach they'd never had.

"More people read your paper because of my contacts," she said.

"More people value your network because of my content," he replied.

"We make each other matter more," she realized.

His depth, her breadth. His insight, her influence. Two different currencies, exchanged at fair rates. Neither could do alone what they accomplished together.`,
    dynamicDescription: "Intellectual contribution meets strategic networking, with potential for combined influence.",
    growthPath: "Five's expertise enhancing Seven's networks, Seven's connections expanding Five's reach.",
    watchOut: "Five finding Seven superficial, Seven finding Five impractical."
  },
  {
    type1: 5, subtype1: 'so', type2: 7, subtype2: 'so',
    title: "The Intellectual Networker and The Social Butterfly",
    subtitle: "Knowledge community meets social enthusiasm",
    narrative: `Both loved gatherings—she for the energy, he for the ideas. Same rooms, different reasons.

"Wasn't that fun?" she'd ask after a conference.

"Wasn't that enlightening?" he'd ask after the same one.

She collected people; he collected insights. She remembered names; he remembered concepts. She left with contacts; he left with questions.

"You make everything too serious," she complained.

"You make everything too superficial," he countered.

But in the right setting—intellectual salons, idea-driven meetups—their approaches merged. Her energy drew people in. His depth gave them something to stay for.

"You got them here," he acknowledged.

"You gave them something real," she admitted.

Her enthusiasm without his substance was fizz. His substance without her enthusiasm was a lecture hall. Together, they created something people actually wanted: stimulating community.`,
    dynamicDescription: "Intellectual engagement meets social enthusiasm, with potential in stimulating environments.",
    growthPath: "Five enjoying Seven's energy, Seven appreciating Five's depth.",
    watchOut: "Five dismissing Seven as superficial, Seven finding Five too heavy."
  },
  {
    type1: 5, subtype1: 'so', type2: 7, subtype2: 'sx',
    title: "The Knowledge Sharer and The Focused Enthusiast",
    subtitle: "Intellectual community meets intense fascination",
    narrative: `She became fascinated with his field of expertise. Every paper he'd written, every theory he'd proposed—she consumed them with intense focus.

"Most people find this boring," he said, surprised by her enthusiasm.

"Most people haven't discovered you yet," she replied.

Her fascination felt different from typical interest. She wasn't just curious—she was captivated, present, deeply engaged.

"Ask me anything," he offered, unaccustomed to such an eager audience.

She asked. And asked. And kept asking. Not superficially—she went deep.

"You're the first person who's ever really understood my work," he admitted.

"It's the first work that's ever really held my attention," she confessed.

His knowledge captured her wandering focus. Her intensity made his solitary scholarship feel worthwhile. He'd found a student who stayed. She'd found a subject that satisfied.

But sometimes she looked at new things. He learned to share her attention. Some depths were worth competing for.`,
    dynamicDescription: "Intellectual contribution meets focused fascination, with potential for sustained intellectual connection.",
    growthPath: "Seven's fascination engaging with Five's knowledge, Five sustaining Seven's interest.",
    watchOut: "Seven's focus shifting to new fascinations, Five feeling intellectually abandoned."
  },
  {
    type1: 5, subtype1: 'sx', type2: 7, subtype2: 'sp',
    title: "The Secret Romantic and The Practical Adventurer",
    subtitle: "Hidden longing meets resourceful freedom",
    narrative: `He loved her in secret, from a distance, terrified of the wanting. She kept all her options open, unwilling to choose just one thing—or one person.

"Why don't you date?" she asked, casual.

"Why don't you commit?" he replied, too quickly.

Her freedom looked like escape to him. His withdrawal looked like rejection to her. Neither understood what the other was protecting.

But she kept showing up. Not demanding, not committing—just present.

"I could be anywhere," she told him. "I have a thousand options. I'm here."

"Why?" he whispered.

"Because you're interesting. Because you're deep. Because something about you is worth staying for."

Her choice—active, renewed, made despite all alternatives—felt safer than demand. His depth—revealed slowly, rewarded by her continued presence—gave her something options couldn't provide.

He trusted her freedom because she kept using it to choose him. She loved his depth because it was actually worth committing to. Two commitment-phobes, choosing each other anyway.`,
    dynamicDescription: "Hidden longing meets preserved freedom, testing whether depth can meet independence.",
    growthPath: "Five trusting Seven's chosen presence, Seven committed despite having options.",
    watchOut: "Five's fear amplified by Seven's options, Seven frustrated by Five's ambivalence."
  },
  {
    type1: 5, subtype1: 'sx', type2: 7, subtype2: 'so',
    title: "The Secret Yearner and The Social Entertainer",
    subtitle: "Hidden passion meets group excitement",
    narrative: `She dazzled rooms. He disappeared into corners. She collected friends; he avoided contact. Two worlds, no overlap—until now.

"I see you," she said, finding him hiding at her party.

"I'm not here to be seen," he replied, uncomfortable in the spotlight of her attention.

But she kept looking. Past the withdrawal, past the walls, into whatever was hiding underneath.

"There's more to you than you show," she observed.

"There's more to everyone," he deflected.

"But I want to find yours."

He'd never been pursued before. Her social energy usually exhausted him, but her focus on him specifically—that was different. Personal. Intense.

"Why me?" he asked. "You have the whole room."

"The whole room has nothing to hide," she said. "You have everything to discover."

Her attention discovered his hidden depths. His depths gave her attention somewhere to land. She brought him out; he took her in. A mutual revelation, shy and bright.`,
    dynamicDescription: "Hidden depth meets social breadth, with risk of missing each other entirely.",
    growthPath: "Seven discovering Five's hidden depths, Five emerging for Seven's focused attention.",
    watchOut: "Five lost in Seven's social activity, Seven missing Five's interior life."
  },
  {
    type1: 5, subtype1: 'sx', type2: 7, subtype2: 'sx',
    title: "The Secret Romantic and The Fascinated Explorer",
    subtitle: "Hidden intensity meets focused curiosity",
    narrative: `Two intensities, one hidden and one seeking. He longed for connection with desperate secrecy. She explored everything with passionate curiosity.

"What are you looking for?" he asked as she examined his bookshelves.

"Something I haven't found yet," she replied. Then she turned. "Maybe you."

His hiddenness intrigued her. Her curiosity terrified him. What if she found what he was hiding? What if she found it and left?

But she kept exploring—gently, thoroughly, with fascination that didn't fade.

"Most people bore me," she admitted. "You don't."

"Most people don't try to know me," he confessed. "You do."

She discovered his hidden intensity. He revealed himself to her searching gaze. Two seekers—one seeking outward, one hidden within—finding each other at the depth neither expected.

"Stay," he asked, surprising himself.

"There's more to explore," she promised. "I'm not done."

His depth matched her fascination. Her persistence matched his hope. The challenge: trusting this was real, even when fear said otherwise.`,
    dynamicDescription: "Hidden passion meets curious fascination, with potential for profound discovery.",
    growthPath: "Seven's curiosity gently revealing Five, Five trusting Seven's sustained interest.",
    watchOut: "Five's fear keeping them hidden, Seven's fascination shifting despite discovery."
  },

  // === TYPE 5 WITH TYPE 8 ===
  {
    type1: 5, subtype1: 'sp', type2: 8, subtype2: 'sp',
    title: "The Self-Sufficient Hermit and The Territorial Protector",
    subtitle: "Minimal needs meets survivalist strength",
    narrative: `He had minimized his needs until he needed no one. She had built her empire until no one could threaten her. Two fortresses, different architectures.

"You call that security?" she asked, eyeing his tiny apartment. "One bad month and you're homeless."

"You call that freedom?" he countered, noting her properties and obligations. "One bad decision and you're in debt."

Her power looked like burden to him. His simplicity looked like weakness to her.

But neither could deny: both were unbreachable. No one could touch him because he needed nothing. No one could threaten her because she controlled everything.

"We're the same," she realized one day.

"We just built different walls," he agreed.

Her strength protected spaces he couldn't defend alone. His sufficiency showed her what couldn't be taken by force. Two sovereigns, discovering mutual respect.

"I could use your strategy sometimes," she admitted.

"I could use your power sometimes," he confessed.

Different methods. Same goal. Complete, inviolable independence.`,
    dynamicDescription: "Self-sufficiency through withdrawal meets self-sufficiency through power.",
    growthPath: "Five appreciating Eight's protection, Eight appreciating Five's independence.",
    watchOut: "Eight's intensity overwhelming withdrawn Five, Five seeming weak to powerful Eight."
  },
  {
    type1: 5, subtype1: 'sp', type2: 8, subtype2: 'so',
    title: "The Complete Hermit and The Social Champion",
    subtitle: "Total withdrawal meets powerful advocacy",
    narrative: `She led movements, rallied communities, championed causes with thunderous force. He retreated to his apartment, needing nothing, joining nothing, avoiding her world entirely.

"The world needs changing," she declared. "How can you just hide?"

"The world won't change," he replied. "Why should I exhaust myself trying?"

Her passion baffled him. His detachment infuriated her.

But she grew tired. The fight was endless, and her energy wasn't.

She found herself at his door one night, beaten down by battles.

"I don't know how to stop," she admitted.

"I don't know how to start," he replied. "Come in."

In his quiet apartment, she rested. Really rested. No causes, no demands, no world to save.

"This is peace," she breathed.

"This is what I protect," he said.

Her causes gave him something worth caring about, occasionally. His sanctuary gave her somewhere to recover. She fought for the world; he reminded her it wasn't all war.`,
    dynamicDescription: "Complete withdrawal meets public leadership, with fundamental orientation differences.",
    growthPath: "Eight drawing Five into meaningful engagement, Five's insight enhancing Eight's causes.",
    watchOut: "Eight's demands overwhelming withdrawn Five, Five's withdrawal frustrating engaged Eight."
  },
  {
    type1: 5, subtype1: 'sp', type2: 8, subtype2: 'sx',
    title: "The Self-Sufficient Hermit and The Passionate Possessor",
    subtitle: "Complete withdrawal meets intense claiming",
    narrative: `She claimed with possessive intensity—what was hers was hers completely. He withdrew into impenetrable solitude—what was his was his alone.

"Let me in," she demanded, hammering at his walls.

"No one gets in," he replied.

An unstoppable force met an immovable object. Her claiming could not reach his withdrawal. His withdrawal could not defeat her persistence.

Months of impasse. She kept pushing; he kept retreating. Neither won.

Then, exhausted, she stopped.

"I can't force you," she admitted. "I've never failed to take something I wanted."

"I can't hide forever," he acknowledged. "I've never let anyone this close."

In the silence after battle, something shifted. She waited. He opened—a crack, nothing more.

"Stay," he whispered. "But gently."

She entered softly. He allowed her in slowly. What force couldn't achieve, patience won.

Her intensity finally found something she couldn't just take. His withdrawal finally met someone he couldn't just escape. Breakthrough, after impasse.`,
    dynamicDescription: "Maximum withdrawal meets maximum claiming, creating breakthrough or impasse.",
    growthPath: "Eight's claiming somehow reaching Five, Five opening to Eight's intensity.",
    watchOut: "Impasse between withdrawal and claiming, neither reaching the other."
  },
  {
    type1: 5, subtype1: 'so', type2: 8, subtype2: 'sp',
    title: "The Knowledge Sharer and The Survivalist",
    subtitle: "Intellectual community meets territorial strength",
    narrative: `He shared knowledge freely, living in the world of ideas. She built territories, living in the world of power. Two kingdoms, barely overlapping.

"Your theories don't matter if you can't defend them," she said.

"Your empire doesn't matter if you don't understand it," he replied.

She respected strength; he seemed weak. He respected insight; she seemed blunt.

But she had a problem—an adversary she couldn't overpower with force.

"I need to understand how they think," she admitted.

He analyzed her enemy's strategy, finding patterns she'd missed. Armed with his insight, she won.

"You were useful," she said afterward.

"And you protected the work," he noted. Her territory had become a place where his ideas could thrive.

His knowledge informed her power. Her power protected his knowledge. Different currencies, transacted at fair rates.

"I never thought I'd need a thinker," she admitted.

"I never thought I'd need a protector," he replied. "Apparently we both did."`,
    dynamicDescription: "Intellectual contribution meets territorial building, with potential for informed strength.",
    growthPath: "Five's knowledge informing Eight's building, Eight's strength protecting Five's work.",
    watchOut: "Eight dismissing Five's intellect, Five finding Eight's territorialism limiting."
  },
  {
    type1: 5, subtype1: 'so', type2: 8, subtype2: 'so',
    title: "The Intellectual Networker and The Social Champion",
    subtitle: "Knowledge community meets powerful advocacy",
    narrative: `Both served the community—she with power, he with insight. Same mission, different methods.

"Your analysis is useless without action," she argued.

"Your action is useless without analysis," he countered.

She led; he studied. She commanded; he understood. She built movements; he built frameworks.

They clashed in every meeting. Her force overwhelmed his nuance. His complexity frustrated her directness.

But the causes they shared needed both. Power without wisdom failed. Wisdom without power remained theoretical.

"I need you to explain why we're fighting," she admitted after a loss.

"I need you to fight for what I've explained," he replied after his papers were ignored.

His expertise sharpened her campaigns. Her strength gave his ideas teeth. A powerful alliance—cerebral precision and forceful action.

"You make me smarter," she said.

"You make me matter," he replied.

Together, they changed things. Neither could have done it alone.`,
    dynamicDescription: "Intellectual contribution meets powerful leadership, with potential for cause-driven partnership.",
    growthPath: "Five's expertise serving Eight's causes, Eight's strength supporting Five's work.",
    watchOut: "Eight finding Five impractical, Five overwhelmed by Eight's forcefulness."
  },
  {
    type1: 5, subtype1: 'so', type2: 8, subtype2: 'sx',
    title: "The Knowledge Sharer and The Possessive Force",
    subtitle: "Intellectual engagement meets consuming possession",
    narrative: `He belonged to intellectual communities—sharing ideas, debating theories, living in his mind. She belonged to him—or wanted to. Possessive, consuming, demanding his complete attention.

"Your conferences matter more than I do," she accused.

"Your demands threaten my entire life," he replied.

Her possession felt like suffocation. His intellectualism felt like abandonment.

Impasse. She claimed; he retreated. She demanded; he withdrew. The pattern repeated.

Until she tried something different.

"Teach me," she said. "What you study. I want to understand."

He was surprised. Her intensity turned toward his world instead of against it.

"This is what I do," he explained, sharing his work.

"This is who you are," she realized. "I couldn't see it before."

She learned to share him with his intellectual world. He learned to give her focused intimacy she needed. Her passion found a place beside his mind. His mind found a protector in her passion.`,
    dynamicDescription: "Intellectual engagement meets possessive intensity, creating community versus intimacy tension.",
    growthPath: "Five giving Eight needed intimacy, Eight allowing Five's intellectual engagement.",
    watchOut: "Eight's possessiveness curtailing Five's intellectual life, Five feeling consumed."
  },
  {
    type1: 5, subtype1: 'sx', type2: 8, subtype2: 'sp',
    title: "The Secret Romantic and The Territorial Protector",
    subtitle: "Hidden longing meets survivalist strength",
    narrative: `He hid his desperate longing behind walls of solitude. She built fortresses of power to keep herself safe. Two people hiding—one in withdrawal, one in strength.

"Why do you need so much control?" he asked from his safe distance.

"Why do you need so much distance?" she countered from her protected empire.

But she noticed him. Really noticed—the intensity behind his withdrawal, the longing behind his isolation.

"You're hiding something," she observed.

"Everyone is," he deflected.

"Not like you. You're hiding something big."

He felt seen in a way that terrified him. Her power could destroy him. But her power could also protect him.

"If I showed you," he whispered, "would you keep it safe?"

"I protect what's mine," she answered.

He showed her. She claimed him—but gently, understanding that some treasures break under too much force.

Her strength made his vulnerability possible. His depth gave her power something precious to protect.`,
    dynamicDescription: "Hidden longing meets protective strength, with potential for sheltered revelation.",
    growthPath: "Eight's protection allowing Five to reveal depths, Five's depth giving meaning to Eight's power.",
    watchOut: "Five hiding from powerful Eight, Eight missing Five's interior life."
  },
  {
    type1: 5, subtype1: 'sx', type2: 8, subtype2: 'so',
    title: "The Secret Yearner and The Social Champion",
    subtitle: "Hidden intensity meets public power",
    narrative: `She led publicly, championed causes, commanded rooms. He watched from invisible corners, longing for connection while hiding from it.

"Why do you disappear?" she asked, finding him in the shadows of her rally.

"Why would you notice?" he replied, shocked she'd seen him.

Her public power made him feel even more invisible. But she had noticed. She kept noticing.

"There's something behind your hiding," she said. "Something intense."

He couldn't deny it. The longing was intense. Too intense to show.

"If I showed you, you'd just add me to your causes," he said bitterly.

"No." She stepped closer. "If you showed me, I'd finally have something worth all this fighting for."

Her public strength gave him a place to be visible. His private intensity gave her something beyond the crowd. She brought him into her light. He gave her light a center.

"I've never been anyone's cause before," he whispered.

"You're not a cause," she replied. "You're the reason."`,
    dynamicDescription: "Hidden passion meets public power, with visibility versus invisibility tension.",
    growthPath: "Eight noticing Five's depths, Five emerging for Eight's attention.",
    watchOut: "Five invisible behind Eight's public life, Eight missing Five's interior world."
  },
  {
    type1: 5, subtype1: 'sx', type2: 8, subtype2: 'sx',
    title: "The Secret Romantic and The Possessive Claimer",
    subtitle: "Hidden longing meets consuming possession",
    narrative: `Both craved intensity—she through possession, he through longing. She claimed with consuming force. He wanted with desperate secrecy. The same fire, different expressions.

"Let me have you," she demanded.

"You'll destroy me," he feared.

"I'll complete you," she promised.

He was terrified. What she offered was exactly what he wanted—and exactly what he'd always fled. Her possession could consume him. But his longing was consuming him anyway.

She sensed his desire beneath the fear.

"I won't break you," she said, softer now. "I'll hold you."

"How do I know?" he whispered.

"You don't. You trust."

The hardest thing for him—trusting. The hardest thing for her—gentleness. But he stepped forward. She received him without crushing.

His hidden intensity finally had somewhere to pour itself. Her claiming finally found something worth the patience. Two forces that should have destroyed each other, learning instead to sustain.

"You're still whole," she observed.

"You're still here," he marveled. "That's all I wanted."`,
    dynamicDescription: "Hidden longing meets consuming claiming, creating potential for breakthrough or deeper hiding.",
    growthPath: "Eight's claiming somehow reaching Five safely, Five revealing to possessive Eight.",
    watchOut: "Eight's intensity driving Five into hiding, Five's fear frustrating claiming Eight."
  },

  // === TYPE 5 WITH TYPE 9 ===
  {
    type1: 5, subtype1: 'sp', type2: 9, subtype2: 'sp',
    title: "The Self-Sufficient Hermit and The Comfortable Settler",
    subtitle: "Minimal needs meets peaceful comfort",
    narrative: `Two silences, sharing a room. He needed nothing from anyone. She wanted nothing from anyone. They could live parallel lives forever and be perfectly content.

"Do you want dinner?" she asked, not caring either way.

"I'm fine," he replied, equally indifferent.

Days passed without conversation. Neither minded. Both were comfortable, undisturbed, peacefully alone—together.

"Is this a relationship?" she wondered one evening.

"I'm not sure," he admitted. "But I don't want you to leave."

"I don't want to leave either."

Neither knew how to reach toward the other. Both had built lives that needed no one.

But something was missing. They could feel it in the comfortable silence—a closeness that never quite connected.

"I want to know you," she finally said. "I just don't know how to ask."

"I want to be known," he replied. "I just don't know how to show."

Two sufficient souls, choosing insufficiency. Reaching toward each other despite needing nothing, because wanting is different from needing.`,
    dynamicDescription: "Parallel withdrawal creating peaceful coexistence with intimacy risk.",
    growthPath: "Both reaching toward each other despite contentment with solitude.",
    watchOut: "Comfortable parallel lives without actual connection."
  },
  {
    type1: 5, subtype1: 'sp', type2: 9, subtype2: 'so',
    title: "The Complete Hermit and The Social Harmonizer",
    subtitle: "Total withdrawal meets group peace",
    narrative: `He lived alone, complete in his solitude. She lived for harmony—smoothing conflicts in her family, her community, her world.

"Don't you get lonely?" she asked, visiting his quiet apartment.

"Don't you get lost?" he replied, watching her dissolve into every group.

Her group focus felt exhausting to him. His solitude felt sad to her. Different comforts, different fears.

But she found something in his withdrawal—a place no one needed her to harmonize anything.

"I can just be here," she realized, surprised. "I don't have to fix anything."

"That's all I do," he said. "Just be here."

And he found something in her warmth—a connection that didn't demand, didn't consume, just existed.

"You make me feel like I belong," he admitted, "without asking me to join."

"You make me feel like myself," she replied, "without asking me to smooth anything."

Her harmony reached him gently. His solitude gave her somewhere to rest from peacemaking. Two different withdrawals, finding each other.`,
    dynamicDescription: "Withdrawal meets group harmony, with different social comfort zones.",
    growthPath: "Nine's gentle harmony reaching withdrawn Five, Five engaging with Nine's world selectively.",
    watchOut: "Five withdrawing from Nine's social concerns, Nine feeling abandoned."
  },
  {
    type1: 5, subtype1: 'sp', type2: 9, subtype2: 'sx',
    title: "The Self-Sufficient Hermit and The Merged Soul",
    subtitle: "Complete withdrawal meets complete fusion",
    narrative: `He maintained rigid boundaries. She had none—merging completely with whomever she loved, becoming them, losing herself.

"I can't let you in," he said, sensing her approach.

"I don't know how to stay out," she admitted, already flowing toward him.

His walls terrified her. Her merger terrified him. Maximum contrast—the most defended meets the most dissolved.

But her merging had no force. It was gentle, patient, more like water than flood.

"I'm not demanding anything," she whispered through his walls. "I just want to be close."

He felt it—her presence seeping through, not breaking but flowing.

"You're already in," he realized, surprised he didn't mind.

"I know," she said, having found her way without force.

Her merger reached him because it asked for nothing. His boundaries protected her from losing herself completely—someone distinct to merge toward.

"Don't disappear into me," he cautioned.

"You keep me separate enough," she smiled. "That's new."

Gentle fusion, careful boundaries. She taught him connection. He taught her shape.`,
    dynamicDescription: "Rigid boundaries meet boundary dissolution, creating complex merger dynamics.",
    growthPath: "Nine's gentle merging reaching Five, Five opening to Nine without Nine losing self.",
    watchOut: "Five resisting even Nine's merger, Nine lost trying to merge with withdrawal."
  },
  {
    type1: 5, subtype1: 'so', type2: 9, subtype2: 'sp',
    title: "The Knowledge Sharer and The Comfortable Retreater",
    subtitle: "Intellectual community meets peaceful withdrawal",
    narrative: `He engaged with intellectual communities—ideas, debates, the life of the mind. She retreated to her comfortable chair, wanting nothing more than peaceful routine.

"Don't you want to understand things?" he asked, excited about his latest research.

"I understand enough," she replied, content with her tea.

His intellectual energy sometimes felt like disturbance. Her peaceful contentment sometimes felt like stagnation.

But they found meeting ground: quiet afternoons where he read and she rested, sharing space without demands.

"You're peaceful," he observed.

"You're interesting," she replied.

His ideas entertained her without overwhelming. Her calm grounded him without limiting.

"I feel smarter around you," he admitted.

"I feel more curious around you," she confessed.

Different orientations—his toward engagement, hers toward rest—finding rhythm together. His enthusiasm, her acceptance. His complexity, her simplicity. A peaceful intellectual companionship neither had expected.`,
    dynamicDescription: "Intellectual engagement meets peaceful retreat, with potential for quiet companionship.",
    growthPath: "Sharing intellectual interests in peaceful context.",
    watchOut: "Five's engagement disturbing Nine's peace, Nine's contentment boring Five."
  },
  {
    type1: 5, subtype1: 'so', type2: 9, subtype2: 'so',
    title: "The Intellectual Networker and The Social Harmonizer",
    subtitle: "Knowledge community meets group peace",
    narrative: `Both engaged with groups—he through knowledge, she through harmony. Same communities, different contributions.

"Your ideas cause conflict," she observed.

"Your peacekeeping avoids truth," he replied.

She smoothed what he stirred up. He complicated what she simplified. Different gifts, often clashing.

But together, they created balanced spaces. His ideas had substance; her harmony made them palatable. Her peace had depth; his knowledge gave it content.

"You make my ideas accessible," he realized.

"You make my harmony meaningful," she replied.

She created the atmosphere; he provided the content. Peaceful intellectual communities that satisfied both.

"I never thought harmony and truth could coexist," he admitted.

"I never thought I could care about ideas this much," she confessed.

His mind, her heart. His insight, her acceptance. Together, they built gatherings worth attending—stimulating and welcoming, challenging and safe.`,
    dynamicDescription: "Intellectual contribution meets peaceful harmonizing, with potential in calm intellectual settings.",
    growthPath: "Creating peaceful intellectual environment together.",
    watchOut: "Five finding Nine intellectually passive, Nine's peace disturbed by Five's ideas."
  },
  {
    type1: 5, subtype1: 'so', type2: 9, subtype2: 'sx',
    title: "The Knowledge Sharer and The Merged Lover",
    subtitle: "Intellectual engagement meets intimate fusion",
    narrative: `He lived in intellectual communities, sharing knowledge freely. She lived in him—merged completely, wanting only to be one with the person she loved.

"Your conferences take you away," she said, feeling his absence like amputation.

"Your merger follows me everywhere," he replied, feeling somewhat smothered.

His intellectual engagement felt like abandonment to her. Her complete focus felt like demand to him.

But her merger wasn't demanding—it was devotional. She didn't want to change him; she wanted to become him.

"I just want to be part of your world," she whispered.

He considered this. "Then learn what I love."

She immersed herself in his ideas, not critically but completely. And he found that her unconditional acceptance was something he'd always craved.

"You don't judge my work," he marveled.

"I don't judge you," she corrected. "I'm part of you."

His intellectual engagement expanded to include her. Her merger found meaningful direction. He gave her something to fuse toward. She gave him someone who stayed.`,
    dynamicDescription: "Intellectual engagement meets intimate merger, creating breadth versus depth tension.",
    growthPath: "Five giving Nine focused intimate attention, Nine allowing Five's intellectual engagement.",
    watchOut: "Nine feeling abandoned for Five's intellectual world, Five feeling smothered."
  },
  {
    type1: 5, subtype1: 'sx', type2: 9, subtype2: 'sp',
    title: "The Secret Romantic and The Comfortable Retreater",
    subtitle: "Hidden longing meets peaceful withdrawal",
    narrative: `He hid desperate intensity behind careful withdrawal. She rested in comfortable peace, wanting nothing to disturb her equilibrium.

Different depths—his turbulent, hers still. Different silences—his protective, hers content.

"You're hiding something," she observed, sensing it without pushing.

"You're not curious," he noticed, grateful for the space.

Her acceptance was unusual. She didn't probe, didn't demand, just existed peacefully beside his walls.

He found himself relaxing. Her peace soothed his terror.

"I feel safe with you," he admitted, surprised.

"Good," she replied simply. "Stay as long as you want."

In her undemanding presence, he began to emerge. Not all at once—he couldn't manage that. But slowly, in pieces, he revealed himself.

"There's so much in you," she discovered.

"There's so much peace in you," he replied. "It makes showing possible."

Her calm acceptance created space for his intensity. His hidden depth gave her contentment something to appreciate. Gentle revelation, patient receiving.`,
    dynamicDescription: "Hidden intensity meets peaceful acceptance, with potential for safe revelation.",
    growthPath: "Five revealing depths in Nine's accepting peace, Nine discovering Five's interior world.",
    watchOut: "Five remaining hidden even in safety, Nine's peace disturbed by Five's eventual intensity."
  },
  {
    type1: 5, subtype1: 'sx', type2: 9, subtype2: 'so',
    title: "The Secret Yearner and The Group Harmonizer",
    subtitle: "Hidden passion meets social peacemaking",
    narrative: `She harmonized groups—smoothing conflicts, maintaining peace, always focused outward. He longed for connection—hiding his intensity, watching from the margins, always invisible.

"Why do you work so hard for everyone else?" he asked, envious of the attention she gave the world.

"Why do you hide from everyone?" she wondered, finally noticing him.

Her social focus made him feel irrelevant. His withdrawal made him invisible even to her gentle attention.

But one evening, the groups were gone, and she finally looked directly at him.

"There's something in you," she said softly. "Something deep."

"You're the first person who looked," he admitted.

Her gentle nature didn't demand—it invited. And something in him responded to her warmth.

"I've been watching you for months," he confessed.

"I've been looking everywhere but here," she realized.

Her attention, once focused on him, was like sunlight. His hidden depth gave her social warmth something to nurture. He emerged into her gentle notice. She discovered someone worth her attention.`,
    dynamicDescription: "Hidden intimacy meets social harmony, with visibility versus hiddenness tension.",
    growthPath: "Nine's attention discovering Five's depths, Five emerging for Nine's gentle acceptance.",
    watchOut: "Five invisible behind Nine's group focus, Nine missing Five's interior world."
  },
  {
    type1: 5, subtype1: 'sx', type2: 9, subtype2: 'sx',
    title: "The Secret Romantic and The Complete Merger",
    subtitle: "Hidden intensity meets total fusion",
    narrative: `Both wanted complete connection—he through hidden longing, she through total merger. The same desire, expressed opposite ways.

"Come out," she whispered, merging toward his walls.

"Come in," he wished, hiding behind them.

She dissolved boundaries naturally, wanting only to become one. He built boundaries desperately, terrified of the very union he craved.

"I want all of you," she said, pressing closer.

"I want to give all of me," he admitted, "but I don't know how."

Her merger wasn't demanding—it was surrendering. She offered herself completely, asking nothing he couldn't give.

And slowly, he realized something: she wasn't trying to invade. She was trying to join.

"You're not attacking my walls," he understood.

"I'm becoming part of them," she explained. "I become part of everything I love."

His hidden passion finally had somewhere safe to land. Her merger finally had depth worth dissolving into.

"I've never let anyone this close," he breathed.

"I've never found anyone worth getting this close to," she replied.

Two paths to the same destination—his walls becoming their shared shelter, her merger becoming their shared being.`,
    dynamicDescription: "Hidden longing meets gentle fusion, with potential for profound acceptance if fear allows.",
    growthPath: "Nine's gentle merging coaxing out Five's hidden depths, Five trusting Nine enough to reveal.",
    watchOut: "Five's fear keeping them hidden, Nine lost trying to merge with someone who won't emerge."
  },

  // ============================================
  // TYPE 6 CROSS-TYPE PAIRINGS
  // ============================================

  // === TYPE 6 WITH TYPE 7 ===
  {
    type1: 6, subtype1: 'sp', type2: 7, subtype2: 'sp',
    title: "The Security Builder and The Resourceful Opportunist",
    subtitle: "Anxious preparation meets strategic networking",
    narrative: `She checked the locks twice before bed. He checked three new investment apps. Both wanted security, but she built walls while he built escape routes.

"What if everything goes wrong?" she asked, reviewing their emergency fund spreadsheet.

"What if everything goes right?" he countered, showing her a side hustle opportunity.

She saw threats everywhere. He saw possibilities in the same places. Her worry exhausted him. His optimism terrified her.

Then the layoff came. Her savings kept them afloat. His networking landed him a better job within weeks.

"I prepared us for disaster," she said.

"I prepared us for opportunity," he replied.

In the aftermath, she started asking "what if things work out?" more often. He started checking the locks. Not twice—but once felt like progress.

Same goal. Different strategies. Together, they had both the safety net and the ladder.`,
    dynamicDescription: "Cautious preparation meets optimistic opportunity, with potential for balanced approach.",
    growthPath: "Six's caution protecting Seven's opportunities, Seven's optimism lightening Six's worry.",
    watchOut: "Six's worry dampening Seven's plans, Seven's optimism dismissing Six's concerns."
  },
  {
    type1: 6, subtype1: 'sp', type2: 7, subtype2: 'so',
    title: "The Private Worrier and The Social Entertainer",
    subtitle: "Personal anxiety meets group excitement",
    narrative: `She sat in the corner at parties, counting exits. He worked the room like a hummingbird, pollinating conversations with laughter.

"Come meet the Hendersons," he urged, tugging her hand.

"I'm fine here," she said, scanning for threats she couldn't name.

Her quiet exhausted his energy. His energy exhausted her reserves.

"Why do you always look for what could go wrong?" he asked one night.

"Why do you never see it?" she countered.

The shift came at his company's holiday party. She noticed his boss's passive-aggressive comments before he did, steered him away from a political landmine.

"You protected me," he said, surprised.

"Someone has to watch while you fly," she replied.

Now she comes to his parties—not to socialize, but to guard. And he brings the world's lightness home to her, story by story, until some of it stays.`,
    dynamicDescription: "Private worry meets public entertainment, with potential for worry relief.",
    growthPath: "Seven's lightness soothing Six's worry, Six's grounding steadying Seven.",
    watchOut: "Seven's social demands exhausting Six, Six's worry dampening Seven's fun."
  },
  {
    type1: 6, subtype1: 'sp', type2: 7, subtype2: 'sx',
    title: "The Anxious Worrier and The Fascinated Explorer",
    subtitle: "Security anxiety meets focused curiosity",
    narrative: `She kept a spreadsheet of everything that could go wrong. He fell down rabbit holes of whatever captured him that week.

"I found the most amazing documentary about deep sea creatures," he announced, eyes bright.

"Did you pay the electric bill?" she asked.

He hadn't. He never did. His mind was always elsewhere—somewhere fascinating, somewhere deep.

"How can you live in your head when the real world needs attending?" she demanded.

"How can you live in spreadsheets when the world is full of wonders?" he countered.

Then one night, she couldn't sleep—too worried about too many things. He sat with her until dawn, asking questions about each fear, diving deep into her anxiety like it was the ocean floor.

"This is fascinating," he said. "The architecture of your worry—it's intricate."

"You're not supposed to find my fear interesting," she said.

"I find you interesting," he replied. "All of you."

She finally slept. And somehow, when he paid attention to her fears, they shrank.

His fascination had found a home—in helping her.  What she worried about became what he explored together with her.`,
    dynamicDescription: "Practical worry meets focused fascination, with potential for engaged problem-solving.",
    growthPath: "Seven's fascination engaging with Six's concerns, Six trusting Seven's focus.",
    watchOut: "Seven's focus shifting away, Six's worry not interesting enough to fascinate."
  },
  {
    type1: 6, subtype1: 'so', type2: 7, subtype2: 'sp',
    title: "The Loyal Follower and The Strategic Networker",
    subtitle: "System loyalty meets opportunity-seeking",
    narrative: `She'd been with the company fifteen years. He'd been with three companies in three years—always moving toward the next opportunity.

"There's an opening at Meridian," he said over dinner. "Better pay, better options."

"You just got here," she said. "How can they trust you if you keep leaving?"

To her, loyalty was currency. You invested years, built reputation, earned trust. To him, loyalty was a trap—staying too long meant missing the next door.

"They're going to lay people off," she said. "My manager told me confidentially."

He paused. "Then you need options too."

"I can't just leave. These people depend on me."

"And what happens when they let you go anyway?"

She didn't have an answer. But when the layoffs came, his network caught her. Three phone calls, two interviews, a better position.

"I didn't betray anyone," she realized. "I just... had options."

"Loyalty and options," he said. "Maybe you don't have to choose."

She kept her work ethic. He learned to stay a little longer. Somewhere in the middle, they found balance.`,
    dynamicDescription: "Systemic loyalty meets strategic opportunism, with different organizational orientations.",
    growthPath: "Six providing stable loyalty to Seven's networks, Seven creating opportunities within Six's systems.",
    watchOut: "Six seeing Seven as disloyal, Seven finding Six's loyalty constraining."
  },
  {
    type1: 6, subtype1: 'so', type2: 7, subtype2: 'so',
    title: "The Group Loyalist and The Social Butterfly",
    subtitle: "Organizational commitment meets social enthusiasm",
    narrative: `They both loved the neighborhood association—for completely different reasons.

She attended every meeting, took minutes, followed up on action items. He showed up late with snacks, made everyone laugh, proposed wild ideas that somehow got people excited.

"You're not taking this seriously," she whispered during the budget discussion.

"I'm taking it exactly seriously enough," he replied, making the treasurer snort-laugh.

She saw the group as a system of responsibilities. He saw it as a party with occasional agendas. Her commitment was duty; his was entertainment.

"We need someone to chair the spring cleanup," the president announced.

She raised her hand. So did he—but for vice-chair. "Someone has to keep it fun," he winked.

They worked together: her organizing, him motivating. She kept people on task; he kept people engaged. Her structure. His spark.

"You know," the president said afterward, "you two are the best team we've ever had."

She took the compliment seriously. He took it as permission to suggest a post-cleanup barbecue.

Both responses were exactly right.`,
    dynamicDescription: "Loyal commitment meets playful engagement, with different orientations to groups.",
    growthPath: "Six's commitment grounding Seven, Seven's enthusiasm lightening Six.",
    watchOut: "Six finding Seven uncommitted, Seven finding Six too rule-bound."
  },
  {
    type1: 6, subtype1: 'so', type2: 7, subtype2: 'sx',
    title: "The System Loyalist and The Focused Enthusiast",
    subtitle: "Group commitment meets intense fascination",
    narrative: `She served on four committees. He was obsessed with exactly one thing at a time—and this month, that thing was her.

"You're fascinating," he said, watching her navigate a contentious PTA meeting with diplomatic precision.

"I'm just doing my job," she replied, flustered by his intensity.

His focus was a spotlight. When it landed on her, she felt seen in a way she never had. He studied her like she was the ocean floor—every detail worthy of exploration.

But she'd seen his old obsessions: the guitar gathering dust, the telescope in the closet, the half-finished novel.

"What happens when I stop being interesting?" she asked.

He paused. "I don't know. I've never met anyone like you."

"Everyone's interesting until they're not."

The test came when she got deeply involved in a community crisis—weeks of meetings, calls, late nights. He wasn't the center of her attention.

And he stayed. Not fascinated by her, exactly—fascinated by watching her in her element, doing what she was built to do.

"This is who you are," he said. "Why would I want you to be anything else?"

His focus had matured into something steadier. Her committees had room for one more member.`,
    dynamicDescription: "Group loyalty meets focused intensity, with potential for committed depth.",
    growthPath: "Seven's fascination engaging with Six's commitments, Six's loyalty anchoring Seven.",
    watchOut: "Seven's focus shifting beyond Six's systems, Six feeling abandoned."
  },
  {
    type1: 6, subtype1: 'sx', type2: 7, subtype2: 'sp',
    title: "The Counterphobic Fighter and The Practical Adventurer",
    subtitle: "Aggressive courage meets resourceful freedom",
    narrative: `She punched first and asked questions later. He always had three exit strategies and a backup plan.

"You're going to get us both killed," he muttered, watching her confront yet another perceived threat.

"Better than running away," she shot back.

His freedom felt like cowardice to her—always ready to leave, never ready to fight. Her aggression felt reckless to him—charging into battles that could simply be avoided.

"There's a guy at work spreading rumors about me," she announced.

"So find another job," he suggested. "I know people at two other firms who—"

"I'm not running. I'm handling it."

She confronted the guy directly. It got ugly. HR got involved. For a terrifying week, her job hung in the balance.

"I have options lined up for you," he said quietly. "Just in case."

She'd never had a safety net before. Always fighting because losing meant annihilation.

"You built me a parachute," she realized.

"Someone has to," he said, "while you're up there fighting."

Her courage. His options. She fought knowing she could fall. He planned knowing she might win. Together, they were dangerous—in the best possible way.`,
    dynamicDescription: "Counterphobic aggression meets preserved options, with potential for protected freedom.",
    growthPath: "Six's courage protecting Seven's options, Seven's freedom giving Six choices.",
    watchOut: "Six's intensity threatening Seven's freedom, Seven's options triggering Six's anxiety."
  },
  {
    type1: 6, subtype1: 'sx', type2: 7, subtype2: 'so',
    title: "The Fierce Defender and The Social Entertainer",
    subtitle: "Counterphobic strength meets group excitement",
    narrative: `She stood guard at parties while he worked the room. Her eyes tracked threats; his sparked with connection.

"You scared the Hendersons," he said after one gathering.

"They were asking too many questions about our finances."

"They were making small talk!"

To her, every social space was a battlefield. To him, it was a playground. Her vigilance drained the fun from his fun.

"Why do you have to fight everything?" he asked.

"Why do you trust everyone?" she countered.

The answer came at a networking event. A man kept pushing into her space, ignoring her discomfort. She was about to explode when he smoothly interrupted, redirected the conversation, extracted her without a scene.

"You handled that," she said, surprised.

"Social judo," he grinned. "You don't have to punch when you can redirect."

"And if redirecting doesn't work?"

"Then I let you punch."

She laughed—actually laughed. Maybe not every battle required force. Maybe some required charm.

He taught her to play. She taught him to watch. Between them, no threat went unnoticed and no party went un-enjoyed.`,
    dynamicDescription: "Aggressive defending meets social entertaining, with different social energies.",
    growthPath: "Six's strength protecting Seven's social space, Seven's lightness softening Six.",
    watchOut: "Six's aggression disrupting Seven's fun, Seven seeming naive to vigilant Six."
  },
  {
    type1: 6, subtype1: 'sx', type2: 7, subtype2: 'sx',
    title: "The Counterphobic Fighter and The Fascinated Explorer",
    subtitle: "Aggressive courage meets intense curiosity",
    narrative: `Two intensities collided like weather systems. She ran toward what scared her; he dove into what fascinated him.

"You're not afraid of anything," he said, watching her confront a hostile stranger.

"I'm afraid of everything," she corrected. "I just fight it."

Her courage fascinated him the way deep sea creatures fascinated him—strange, beautiful, worthy of study. She became his latest obsession.

"What if you get bored of me?" she asked.

"What if you stop fighting?" he countered.

Both questions carried the same fear: that their essence would become ordinary.

They didn't get ordinary. They got intense. His fascination dove into her fears, exploring them with her, finding the architecture of her anxiety as interesting as any rabbit hole. Her courage protected his explorations, standing guard while he got lost in the deep.

"I've never stayed this long," he admitted one night.

"I've never let anyone this close," she replied.

"Maybe we're both doing something new."

His fascination found its home. Her fighting found its cause. Two intensities that finally fit—not burning each other out, but burning together.`,
    dynamicDescription: "Confrontational intensity meets curious intensity, with potential for dynamic partnership.",
    growthPath: "Seven's fascination engaging with Six's courage, Six appreciating Seven's depth.",
    watchOut: "Seven's fascination shifting, Six's aggression clashing with Seven's exploration."
  },

  // === TYPE 6 WITH TYPE 8 ===
  {
    type1: 6, subtype1: 'sp', type2: 8, subtype2: 'sp',
    title: "The Security Builder and The Territorial Protector",
    subtitle: "Anxious preparation meets survivalist strength",
    narrative: `She built bunkers with spreadsheets. He built them with his fists.

"We need to reinforce the perimeter," she said, reviewing their home security options.

"The perimeter is me," he replied.

Her preparation was calculation—threats assessed, contingencies planned, escape routes mapped. His was presence—anyone who threatened his territory would regret it.

"Your worry is exhausting," he said one night.

"Your confidence is terrifying," she countered. "What if something you can't fight comes?"

He had no answer. He'd never met anything he couldn't fight.

Then the medical scare came. Nothing he could punch, nothing he could intimidate. Just test results and waiting rooms and fear.

She had a plan. Doctors researched. Treatments compared. Questions prepared.

"How do you know all this?" he asked.

"I prepare for everything," she said. "Including things that can't be fought."

He sat with that. Her worry wasn't weakness—it was reconnaissance. His strength wasn't enough—but combined with her preparation, they were fortress and general both.

"I'll guard outside," he said finally. "You guard the plans."

"Deal," she replied. And meant it.`,
    dynamicDescription: "Anxious preparation meets powerful control, with potential for complementary security.",
    growthPath: "Eight's strength reassuring Six, Six's preparation informing Eight.",
    watchOut: "Six's worry seeming weak to Eight, Eight's intensity triggering Six's anxiety."
  },
  {
    type1: 6, subtype1: 'sp', type2: 8, subtype2: 'so',
    title: "The Private Worrier and The Social Champion",
    subtitle: "Personal anxiety meets powerful advocacy",
    narrative: `She worried in corners. He commanded rooms.

"Why are you always hiding?" he asked, finding her in the back at another community meeting.

"Why are you always in front?" she countered.

His leadership was a beacon—people rallied around his strength, his conviction, his willingness to fight for them. Her anxiety was a shadow—always scanning for what could go wrong while he charged forward.

"The council proposal has three major flaws," she told him one night.

"Then we'll fight through them."

"Or we could prepare for them. Anticipate the objections. Have answers ready."

He paused. His approach was to overwhelm opposition with force. Hers was to dismantle it before it formed.

At the next meeting, she fed him her concerns as whispered notes. He addressed each one with commanding authority. The proposal passed unanimously.

"I didn't see those problems coming," he admitted afterward.

"That's my job," she said. "Seeing them."

"And mine is making sure no one else does."

She found safety behind his power. He found wisdom in her worry. The champion and the strategist—an unstoppable team.`,
    dynamicDescription: "Private worry meets public strength, with potential for protected security.",
    growthPath: "Eight's leadership providing Six's security, Six's caution grounding Eight.",
    watchOut: "Eight's intensity overwhelming Six, Six seeming weak to Eight."
  },
  {
    type1: 6, subtype1: 'sp', type2: 8, subtype2: 'sx',
    title: "The Anxious Worrier and The Passionate Possessor",
    subtitle: "Security anxiety meets intense claiming",
    narrative: `She hoarded safety. He hoarded everything—including her.

"You're mine," he said with an intensity that should have frightened her.

Instead, something in her exhaled. Finally, someone strong enough to hold all her fears.

His possession was absolute. When she worried, he claimed the problem. When she feared, he consumed the threat. Her anxiety became his territory to defend.

"What if something happens to the house?" she asked one night.

"Then I'll burn down whatever did it," he replied.

"That's not a plan."

"It's a promise."

She needed plans. He needed to claim. Somehow, they had to meet in the middle.

"I'll make the contingency plans," she offered. "You make sure nothing gets close enough to need them."

His eyes lit with possessive fire. "Deal."

She'd never felt so owned—or so safe. Her spreadsheets had backup. Her backup had teeth.

"Is this healthy?" she asked one night.

"Who cares?" he replied. "Is it working?"

It was working. Her worry had found its fortress. His possession had found its purpose. They were excessive together—but excessively secure.`,
    dynamicDescription: "Security seeking meets possessive claiming, with potential for secured intimacy.",
    growthPath: "Eight's claiming providing Six's sought security, Six trusting Eight's possession.",
    watchOut: "Eight's intensity overwhelming Six's anxiety, Six's worry frustrating Eight."
  },
  {
    type1: 6, subtype1: 'so', type2: 8, subtype2: 'sp',
    title: "The Loyal Follower and The Survivalist",
    subtitle: "System loyalty meets territorial strength",
    narrative: `She served the institution. He owned the ground it stood on.

"The board has concerns about your expansion plans," she said, delivering unwelcome news.

"The board can go to hell," he replied.

Her loyalty was to systems—the rules, the protocols, the collective agreements that kept things running. His loyalty was to himself and his territory. She saw structures; he saw obstacles.

"You can't just ignore governance," she insisted.

"Watch me."

But he watched instead—watched her navigate the bureaucracy with quiet competence, earning trust where he burned bridges.

"How did you get them to approve the Morrison deal?" he asked.

"I followed the process. Built consensus. Made everyone feel heard."

"That sounds exhausting."

"Your way sounds like war."

"War is simple."

"Simple loses eventually."

He chewed on that. Her systems weren't constraints—they were infrastructure. His territory needed foundations.

"Teach me," he said finally.

"Only if you protect the process," she countered. "No more board tantrums."

His jaw tightened. Then relaxed. "Deal."

Her systems had found their champion. His territory had found its framework. Together, they built something that would last.`,
    dynamicDescription: "Systemic loyalty meets territorial control, with potential for organizational partnership.",
    growthPath: "Six's loyalty supporting Eight's territory, Eight's strength protecting Six's systems.",
    watchOut: "Six's system loyalty conflicting with Eight's independence, Eight dismissing Six's group focus."
  },
  {
    type1: 6, subtype1: 'so', type2: 8, subtype2: 'so',
    title: "The Group Loyalist and The Social Champion",
    subtitle: "Organizational commitment meets powerful advocacy",
    narrative: `She followed the leader. He was the leader. It should have been simple.

"The cause needs soldiers, not skeptics," he said, frustrated by her questions.

"The cause needs someone to ask if we're going the right direction," she replied.

His advocacy was fire—passionate, consuming, demanding total loyalty. Hers was steadier—committed but questioning, supportive but vigilant.

"You're with me or against me," he declared.

"I'm with the mission. Are you?"

He stopped. No one questioned him like that—challenged his direction while standing firmly at his side.

"The Thompson approach won't work," she said. "I've run the numbers."

"Then what will?"

She had alternatives. She always had alternatives. Not because she doubted him—because she wanted him to succeed.

"You're not undermining me," he realized slowly. "You're... covering my flanks."

"Someone has to see what you miss while you're charging forward."

His leadership found its anchor. Her loyalty found its purpose. Champion and strategist, not in opposition but in tandem.

"I'll lead," he said.

"I'll make sure we don't walk off a cliff," she replied.

Both smiled. It wasn't simple anymore. It was better.`,
    dynamicDescription: "Loyal supporting meets powerful leading, with potential for effective partnership.",
    growthPath: "Six's loyalty supporting Eight's leadership, Eight's strength serving Six's groups.",
    watchOut: "Conflicts between Six's existing loyalties and Eight's direction."
  },
  {
    type1: 6, subtype1: 'so', type2: 8, subtype2: 'sx',
    title: "The System Loyalist and The Possessive Force",
    subtitle: "Group commitment meets consuming possession",
    narrative: `She belonged to many. He wanted her to belong only to him.

"You have another meeting tonight?" he asked, an edge in his voice.

"The committee needs me."

"I need you."

His possession demanded exclusivity. Her loyalty spread across systems—each one claiming a piece of her. His intensity saw rivals everywhere.

"They're not more important than you," she tried to explain.

"Then prove it. Skip the meeting."

"I can't. People are depending on me."

"And what about me? I'm depending on you too."

The standoff lasted weeks. His possessiveness growing; her resentment building.

"I'm not choosing between you and my commitments," she finally said. "That's not fair."

"Life isn't fair. I'm not fair."

"No. But you could be."

He sat with that. His demanding wasn't getting him more of her—it was getting him less.

"One night a week," he offered. "Just us. Non-negotiable."

"And the other nights?"

"You do your thing. But that one night—you're completely mine."

It wasn't perfect. He wanted more. She felt constrained. But within those boundaries, something unexpected happened: she started protecting that night as fiercely as he demanded it.

Her commitments had room for one more—the most important one.`,
    dynamicDescription: "Group loyalty meets possessive intimacy, creating commitment tensions.",
    growthPath: "Six balancing Eight's needs with group commitments, Eight allowing Six's loyalties.",
    watchOut: "Eight's possessiveness curtailing Six's group life, Six's loyalties frustrating Eight."
  },
  {
    type1: 6, subtype1: 'sx', type2: 8, subtype2: 'sp',
    title: "The Counterphobic Fighter and The Territorial Protector",
    subtitle: "Aggressive courage meets survivalist strength",
    narrative: `Two forces that refused to yield met in the same space.

"Move," he said, blocking her path.

"Make me," she replied.

They'd been circling each other for months—two territorial animals testing boundaries. His power was physical, territorial, absolute. Her courage was psychological, confrontational, relentless.

"You don't back down," he observed.

"Neither do you."

"That's going to be a problem."

"Or a solution."

They found each other in the collision. Not soft or gentle—that wasn't who they were. Intense, challenging, pushing each other toward their edges.

"Why don't you submit?" he asked one night.

"Why don't you?" she countered.

The answer was the same: neither knew how. Neither wanted to.

So they built something different. Not one dominating the other, but both standing together—two walls forming a corner, stronger for the angle.

"I'll fight outward," she offered.

"I'll hold the ground," he agreed.

When threats came, she ran toward them while he fortified behind. When enemies probed, he absorbed the impact while she counterattacked.

Not submission. Not dominance. Partnership—the only thing either could accept.`,
    dynamicDescription: "Confrontational courage meets territorial power, creating strong alliance or conflict.",
    growthPath: "Combined strength creating powerful security, mutual respect for each other's power.",
    watchOut: "Two strong wills clashing, explosive conflicts between confrontational energies."
  },
  {
    type1: 6, subtype1: 'sx', type2: 8, subtype2: 'so',
    title: "The Fierce Defender and The Social Champion",
    subtitle: "Counterphobic strength meets powerful advocacy",
    narrative: `Two warriors met on the same battlefield—unsure if they were allies or rivals.

"I don't need protection," she said when he tried to champion her cause.

"I'm not protecting you. I'm leading the charge."

"Who said you're in charge?"

Their friction was immediate. Both commanding presence. Both unwilling to follow. The community watched, fascinated and nervous.

"You're causing a scene," he said.

"You started it by assuming leadership."

"Someone has to lead."

"Someone, yes. Not necessarily you."

They tested each other relentlessly. Her courage challenging his authority. His power challenging her autonomy. Neither willing to be second.

Then the real threat emerged—a development project that would destroy the neighborhood. Suddenly, their battles seemed petty.

"Truce?" he offered.

"Alliance," she countered. "Equals."

He fought the political battles—commanding, charismatic, relentless. She fought the street battles—confrontational, fearless, visible. Where he convinced, she demanded. Where he led, she pushed.

The project died. The neighborhood celebrated. And two warriors discovered something unexpected: fighting together felt better than fighting each other.

"Same side?" he asked.

"Always was," she admitted. "Just took us a while to figure it out."`,
    dynamicDescription: "Two forms of public strength, potentially powerful alliance or competitive clash.",
    growthPath: "Six's courage supporting Eight's causes, Eight's leadership directing Six's fighting.",
    watchOut: "Competition for dominance, explosive conflicts between two powerful personalities."
  },
  {
    type1: 6, subtype1: 'sx', type2: 8, subtype2: 'sx',
    title: "The Counterphobic Fighter and The Possessive Claimer",
    subtitle: "Aggressive courage meets consuming possession",
    narrative: `Two infernos in one room. The fire marshal would have objected.

"You're mine," he growled, possessive to the bone.

"Make me," she challenged, fear transformed to fury.

They crashed together like competing storms—his possession against her confrontation, his claiming against her fighting. Neither yielded. Neither wanted to.

"This is insane," she gasped.

"This is us," he replied.

Their intensity had nowhere to go but toward each other. His possessiveness found its match in someone who wouldn't be consumed. Her counterphobia found its match in someone who couldn't be intimidated.

"What happens when we fight?" she asked.

"We burn."

"And afterward?"

"We burn hotter."

It wasn't healthy by any standard measure. Two maximum intensities creating fusion or fission—sometimes both in the same hour.

But in the fire, something unexpected: recognition. Neither had ever met someone who could meet their intensity without flinching.

"Don't you dare soften," she warned.

"Don't you dare back down," he countered.

They swore fierce promises to stay fierce. To never gentle into something ordinary.

The neighbors complained about the noise. They didn't care. They were busy being volcanoes—dangerous, consuming, absolutely alive.`,
    dynamicDescription: "Two maximum intensities creating powerful bond or explosive battleground.",
    growthPath: "Mutual respect for each other's power, passion channeled constructively.",
    watchOut: "Power struggle between two dominant energies, relationship becoming battle."
  },

  // === TYPE 6 WITH TYPE 9 ===
  {
    type1: 6, subtype1: 'sp', type2: 9, subtype2: 'sp',
    title: "The Security Builder and The Comfortable Settler",
    subtitle: "Anxious preparation meets peaceful comfort",
    narrative: `She checked the weather app twelve times before the picnic. He fell asleep on the blanket within minutes.

"Aren't you worried about rain?" she asked, scanning the horizon.

"If it rains, we get wet," he murmured. "Then we dry."

His peace was infuriating. Her worry was exhausting. She needed to prepare; he needed to rest. She saw threats everywhere; he saw napping opportunities.

"How can you be so calm?" she demanded.

"How can you be so worried?" he countered, not opening his eyes.

Then the storm came—sudden, violent, unexpected. She had already identified shelter, packed extra towels, noted the car's location. Within minutes, they were dry and safe.

"You knew," he said, surprised.

"I always know. That's the point."

He was quiet for a while. "Your worry... it kept us safe."

"Your calm... it keeps me sane."

She prepared the fortress. He made it feel like home. Her anxiety scanned for threats. His peace made the scanning bearable.

"I'll handle the dangers," she offered.

"I'll handle the rest," he replied, and pulled her close.

She let herself be still, just for a moment. It felt like exhaling after holding her breath for years.`,
    dynamicDescription: "Anxious preparing meets peaceful settling, with potential for secured peace.",
    growthPath: "Six's preparation creating security for Nine, Nine's peace soothing Six's worry.",
    watchOut: "Six's worry disturbing Nine's peace, Nine's contentment frustrating Six's preparation."
  },
  {
    type1: 6, subtype1: 'sp', type2: 9, subtype2: 'so',
    title: "The Private Worrier and The Social Harmonizer",
    subtitle: "Personal anxiety meets group peace",
    narrative: `She kept lists of everything that could go wrong. He kept the peace like a gardener keeps a lawn.

"The neighbor's fence is encroaching," she said, measuring with anxious precision.

"It's three inches. They've been here twenty years."

"Three inches now. Where does it end?"

His harmony smoothed every conflict she tried to raise. Her worry disrupted every peace he tried to maintain. She saw problems; he saw relationships.

"You have to confront them," she insisted.

"I have to live next to them," he replied.

But he listened. And one evening, he wandered over—not confrontational, just neighborly—and mentioned the fence. By the next weekend, it was fixed.

"How did you do that?" she asked, astonished.

"People want to do the right thing. You just have to help them want it."

Her worry found his translation. His harmony found her causes. She identified what was wrong; he fixed it without breaking the peace.

"I'll spot the problems," she offered.

"I'll solve them without making new ones," he agreed.

Her vigilance. His diplomacy. Together, they kept the neighborhood safe and happy—though only she knew how much danger they'd averted.`,
    dynamicDescription: "Private worry meets social harmony, with potential for soothed anxiety.",
    growthPath: "Nine's harmony soothing Six's worry, Six's concerns addressed peacefully.",
    watchOut: "Six's worry feeling like conflict to Nine, Nine's peace seeming avoidant to Six."
  },
  {
    type1: 6, subtype1: 'sp', type2: 9, subtype2: 'sx',
    title: "The Anxious Worrier and The Merged Soul",
    subtitle: "Security anxiety meets complete fusion",
    narrative: `She worried enough for two people. He absorbed her worry like a sponge.

"The roof needs checking," she said for the third time that week.

"I'll look at it," he murmured, already half-asleep in her concerns.

His merging was total. Where she ended, he began—or rather, he forgot where those lines were supposed to be. Her anxieties became his anxieties. Her fears became his fears.

"You're not supposed to absorb my worry," she said. "You're supposed to calm it."

"I am calm," he replied, now also worried about the roof.

The danger was real. Two anxious people where only one had been. Her vigilance doubled into paranoia; his peace dissolved into shared fear.

"This isn't working," she admitted.

"What if I listen without absorbing?" he offered. "What if I stay... me?"

It was harder than it sounded. But he practiced holding space for her worry without claiming it as his own. She practiced letting him be peaceful while she was anxious.

"The roof," she said one night.

"Is fine," he replied. "I checked. Come rest."

She had someone to worry with. He had someone to be present for. Not merged into one anxious mass—but two people, side by side, each doing what they did best.`,
    dynamicDescription: "Security anxiety meets accepting merger, with potential for soothed worry.",
    growthPath: "Nine's acceptance finally soothing Six's anxiety, Six giving Nine meaningful focus.",
    watchOut: "Nine merging with Six's anxiety rather than soothing it."
  },
  {
    type1: 6, subtype1: 'so', type2: 9, subtype2: 'sp',
    title: "The Loyal Follower and The Comfortable Retreater",
    subtitle: "System loyalty meets peaceful withdrawal",
    narrative: `She joined everything. He joined nothing.

"The neighborhood association is meeting Tuesday," she announced.

"I'll be here," he replied from his comfortable chair.

Her life was committees and causes, loyalties and obligations. His life was the couch, his books, his carefully cultivated peace. She built community; he avoided it.

"Don't you want to be involved?" she asked.

"I'm involved with you. Isn't that enough?"

It wasn't. She needed him present, visible, part of her world. His absence felt like abandonment; his withdrawal felt like rejection.

"One meeting," she bargained. "Just to see."

He went. He hated it—the politics, the personalities, the endless talking. But he saw something else too: her, in her element, competent and trusted and necessary.

"You were amazing," he admitted afterward.

"You were miserable."

"Both can be true."

They found a rhythm. She attended; he supported from home. She reported back; he listened. She fought the battles; he kept the home fires burning.

"I wish you were more involved," she said sometimes.

"I'm involved in the part that matters," he replied. "I'm involved in you."

And somehow, that became enough—her out in the world, him holding down the center.`,
    dynamicDescription: "Group engagement meets peaceful withdrawal, with different social orientations.",
    growthPath: "Six providing organized structure for Nine's peace, Nine supporting Six's commitments.",
    watchOut: "Six's group demands disturbing Nine, Nine's withdrawal frustrating engaged Six."
  },
  {
    type1: 6, subtype1: 'so', type2: 9, subtype2: 'so',
    title: "The Group Loyalist and The Social Harmonizer",
    subtitle: "Organizational commitment meets group peace",
    narrative: `She took minutes. He took temperatures.

"The committee is fracturing," she reported, documents spread before her.

"The committee is tired," he observed. "Too many meetings."

Both served the same groups—differently. Her loyalty was active: showing up, following through, holding people accountable. His was passive: smoothing tensions, mediating disputes, making everyone feel heard.

"You don't take this seriously enough," she said.

"You take it too seriously," he countered.

But in the same room, they were unstoppable. She tracked the tasks; he tracked the moods. She kept people on schedule; he kept people engaged. Her commitment gave structure; his harmony gave comfort.

"Motion to adjourn?" he asked with a smile.

"Second," someone called, relieved.

"We haven't finished the agenda," she protested.

"We've finished what people can handle today. The rest can wait."

She started to argue—then saw the exhausted faces around the table. He was right. Progress mattered, but so did sustainability.

"Fine," she conceded. "But we're meeting again Thursday."

"I'll bring snacks," he offered.

Her structure. His softness. Together, they built groups that actually lasted.`,
    dynamicDescription: "Loyal commitment meets peaceful harmonizing, with complementary group orientations.",
    growthPath: "Six's commitment grounded by Nine's harmony, Nine's peace supported by Six's loyalty.",
    watchOut: "Six finding Nine uncommitted, Nine finding Six too serious about groups."
  },
  {
    type1: 6, subtype1: 'so', type2: 9, subtype2: 'sx',
    title: "The System Loyalist and The Merged Lover",
    subtitle: "Group commitment meets intimate fusion",
    narrative: `She belonged to many groups. He wanted to belong only to her.

"Another meeting?" he asked, watching her gather her things.

"The foundation board needs me."

"I need you."

His merger was total—she was his world, his center, his everything. Her loyalties were distributed—the board, the committee, the association, each claiming time she could have spent with him.

"Can't you just... choose me?" he asked.

"I do choose you. I also choose them."

"It doesn't feel that way."

His absorption in her felt suffocating. Her dispersal among many felt like abandonment. They were drowning and dying of thirst at the same time.

"I can't be your only thing," she finally said. "It's too much pressure."

"And I can't be one of many," he replied. "It's too little presence."

The compromise came slowly. She carved out sacred time—just them, uninterrupted. He built interests beyond her—slowly, painfully, but real.

"Tell me about the meeting," he said one evening.

"Really?"

"You care about it. That means I care about it."

She talked. He listened. Not merged into her, but present with her. Not one of many, but the one she came home to.

"Is this enough?" she asked.

"It's becoming enough," he admitted. "More every day."`,
    dynamicDescription: "Group loyalty meets intimate merger, creating commitment tensions.",
    growthPath: "Six balancing Nine's needs with group commitments, Nine allowing Six's loyalties.",
    watchOut: "Nine feeling abandoned for Six's groups, Six's loyalties frustrating merging Nine."
  },
  {
    type1: 6, subtype1: 'sx', type2: 9, subtype2: 'sp',
    title: "The Counterphobic Fighter and The Comfortable Retreater",
    subtitle: "Aggressive courage meets peaceful withdrawal",
    narrative: `She was a tornado. He was a nap.

"How can you sleep at a time like this?" she demanded.

"What time is it?" he murmured, not opening his eyes.

Her counterphobic energy needed targets, threats, battles to fight. His comfortable peace needed cushions, quiet, and the absence of conflict. She charged; he retreated. She confronted; he withdrew.

"You're infuriating," she said.

"You're exhausting," he replied.

But when the real threat came—a stalker, a danger she couldn't simply fight—his peace became her anchor. While she paced and planned and prepared to attack, he pulled her to the couch.

"Come here," he said.

"I can't rest. There's a—"

"You can rest. Just for a minute. I've got you."

She fought it. Then she didn't. In his stillness, her storm found its eye.

"I'll protect us," she said from his arms.

"I know. But you need somewhere to rest between battles."

His peace was her fortress's inner chamber. Her fight was his comfort's outer wall. Together, they built something that could both defend and restore.

"I'll be fierce," she promised.

"I'll be soft," he replied.

Both were exactly what they needed.`,
    dynamicDescription: "Confrontational intensity meets tranquil withdrawal, testing compatibility.",
    growthPath: "Six's strength protecting Nine's peace, Nine's calm soothing Six's aggression.",
    watchOut: "Six's intensity overwhelming Nine, Nine's withdrawal frustrating Six."
  },
  {
    type1: 6, subtype1: 'sx', type2: 9, subtype2: 'so',
    title: "The Fierce Defender and The Group Harmonizer",
    subtitle: "Counterphobic strength meets social peacemaking",
    narrative: `She burned bridges. He built them.

"You can't just attack everyone who disagrees with you," he said after another confrontation.

"You can't just smooth over everything that's wrong," she shot back.

Her courage was a weapon, wielded without hesitation. His harmony was a balm, applied liberally to every wound. She created problems (she called them solutions). He solved them (she called it avoiding).

"The council is going to ban you from meetings," he warned.

"Let them try."

"I'd rather not. I have to work with these people."

She paused. She'd never thought about aftermath—the relationships that continued after battles were won or lost.

"What if..." he offered slowly, "what if you chose your battles more carefully?"

"What if you stopped trying to keep peace that doesn't deserve keeping?"

They looked at each other. Both had points. Both needed the other's perspective.

She learned to check with him before charging in. He learned to step aside when battles were truly necessary. Her fighting became surgical; his peacemaking became strategic.

"I defended the park," she reported.

"I smoothed over the council member you offended," he replied.

"Good. They needed offending."

"They also need to vote with us next month."

Her sword. His shield. Different tools, same protection.`,
    dynamicDescription: "Aggressive defending meets peaceful harmonizing, with potential for protected peace.",
    growthPath: "Six's strength protecting Nine's harmony, Nine's peace tempering Six's fighting.",
    watchOut: "Six's aggression disturbing Nine's harmony, Nine seeming weak to Six."
  },
  {
    type1: 6, subtype1: 'sx', type2: 9, subtype2: 'sx',
    title: "The Counterphobic Fighter and The Complete Merger",
    subtitle: "Aggressive courage meets total fusion",
    narrative: `He wanted to become her. She wasn't sure that was survivable.

"I feel everything you feel," he said, absorbing her rage at the world.

"That's too much," she replied. "I'm too much."

Her counterphobic intensity was a furnace. His merger drew him directly into the flames. She fought everything; he became everything she was fighting for.

"You're losing yourself," she warned.

"I'm finding us," he countered.

But "us" increasingly looked like "her." His peace dissolved into her battles. His calm transformed into her vigilance. Two people becoming one—and the one was all fight.

"Stop," she finally demanded. "Stop merging."

"I don't know how. You're all I see."

The work was hard—boundaries in the middle of fusion, separation in the midst of surrender. She learned to fight quieter, to give him space. He learned to maintain an island of self, no matter how strong the current.

"I still feel everything you feel," he admitted.

"But you feel yourself too now?"

"Starting to. It's harder than I thought."

"Most things worth doing are."

Her intensity had found its home. His merging had found its limits. Not consumed by each other, but completely present—two infernos that learned to burn together without becoming ash.`,
    dynamicDescription: "Counterphobic intensity meets complete merger, testing whether fusion can meet strength.",
    growthPath: "Nine's acceptance receiving Six's intensity, Six appreciating Nine's devoted merging.",
    watchOut: "Nine lost in Six's aggressive energy, Six overwhelming fused Nine."
  },

  // ============================================
  // TYPE 7 CROSS-TYPE PAIRINGS
  // ============================================

  // === TYPE 7 WITH TYPE 8 ===
  {
    type1: 7, subtype1: 'sp', type2: 8, subtype2: 'sp',
    title: "The Resourceful Opportunist and The Territorial Protector",
    subtitle: "Strategic networking meets survivalist strength",
    narrative: `He collected keys to doors he might never open. She built walls around everything she already owned.

They met at a real estate conference—him scouting possibilities, her defending holdings. Their business partnership made perfect sense on paper.

"I found three undervalued properties downtown," he announced, spreading maps across her conference table.

She studied them, then him. "Why three? Pick the best one. Commit."

"Options," he shrugged. "You never know which door opens."

"I know exactly which doors open," she replied. "The ones I control."

Their alliance worked beautifully—his network feeding opportunities into her protected empire. But friction built slowly. He'd negotiate access to her properties; she'd demand exclusive rights to his contacts.

"You're hoarding my options," he finally said.

"You're scattering my resources," she fired back.

Both wanted abundance. He wanted it as possibility; she wanted it as possession. They learned that partnership meant neither hoarding keys nor building prisons—but choosing which doors to walk through together.`,
    dynamicDescription: "Opportunistic networking meets territorial control, with potential for practical power alliance.",
    growthPath: "Seven's opportunities enhanced by Eight's protection, Eight's territory enriched by Seven's options.",
    watchOut: "Conflicts over who controls what, Seven's options threatening Eight's territory."
  },
  {
    type1: 7, subtype1: 'sp', type2: 8, subtype2: 'so',
    title: "The Practical Adventurer and The Social Champion",
    subtitle: "Resourceful freedom meets powerful advocacy",
    narrative: `She stood at the podium, fist raised, voice carrying across the crowd. "This community deserves better. Who stands with me?"

He watched from the back, calculating. Her cause was righteous. It was also an opportunity—connections, visibility, access.

They started working together. She provided the mission; he provided the resources. Her passion drew followers; his networks multiplied them.

"You're brilliant," she told him after a successful fundraiser. "Where did you learn to work a room like that?"

He smiled. "I keep my options open."

Her eyes narrowed. "Options. That word again. We're building something permanent here."

The crack appeared slowly. She needed soldiers; he wanted to remain a free agent. She demanded loyalty; he offered conditional support.

"Either you're with us," she finally said, "or you're using us."

He wanted to protest. But wasn't she right? He'd preserved every exit while asking her to burn bridges for both of them. True alliance required choosing—not keeping options, but becoming one.`,
    dynamicDescription: "Preserved freedom meets powerful commitment, with potential alignment or conflict.",
    growthPath: "Seven's resources serving Eight's causes, Eight's leadership creating options for Seven.",
    watchOut: "Eight's commitment limiting Seven's freedom, Seven's non-commitment frustrating Eight."
  },
  {
    type1: 7, subtype1: 'sp', type2: 8, subtype2: 'sx',
    title: "The Resourceful Opportunist and The Passionate Possessor",
    subtitle: "Preserved freedom meets intense claiming",
    narrative: `She wanted to consume him whole. He wanted to taste everything but commit to nothing.

Their affair burned hot from the start—her intensity magnetized him, his elusiveness maddened her.

"Stay," she demanded after another electric night. "Not just tonight. Stay."

He traced patterns on her shoulder. "I'm here, aren't I?"

"Your body is here. But you've got one foot toward the door. I can feel it."

He didn't deny it. Couldn't. The exit signs glowed in his peripheral vision even in ecstasy.

She gripped his chin, forced his gaze to meet hers. "I don't share. I don't do halfway. Either you're mine completely, or you're nothing to me."

"That's not how I—"

"I know. That's exactly the problem."

He craved her fire but feared being consumed. She craved his sparkle but couldn't hold smoke. Every time she tightened her grip, he slipped further away. Every time he created space, she burned hotter.

They learned that possession and freedom could coexist—but only if she loosened her hold and he stopped counting exits.`,
    dynamicDescription: "Preserved options meets possessive claiming, creating freedom versus possession tension.",
    growthPath: "Seven choosing Eight despite options, Eight allowing some freedom within possession.",
    watchOut: "Eight's possession eliminating Seven's freedom, Seven's options triggering Eight's insecurity."
  },
  {
    type1: 7, subtype1: 'so', type2: 8, subtype2: 'sp',
    title: "The Social Entertainer and The Survivalist",
    subtitle: "Group excitement meets territorial strength",
    narrative: `He threw the best parties in the city—everyone knew his name, his laugh, his ability to make any gathering electric.

She owned the building where the parties happened. And the block. And increasingly, him.

"Another event?" she asked, watching him prepare. "You had fifty people here last weekend."

"That's the point! Connection, community, celebration—"

"Strangers in my home."

He paused, finally hearing the edge. "Our home."

"My fortress," she corrected quietly. "That I've let you fill with people I don't know, who take things, who leave messes, who—"

"Who make life worth living!"

She stared at him. "I make life worth surviving. There's a difference."

The parties continued, but smaller now. He learned to ask permission. She learned to see guests as possibilities rather than threats. He brought the light; she kept it safe.

"Maybe," she said after one gathering, watching friends leave, "the fortress needs some windows."

He kissed her forehead. "And maybe the carnival needs some walls."

They found it together—territory that breathed, entertainment that respected boundaries.`,
    dynamicDescription: "Social entertainment meets territorial control, with potential for protected social space.",
    growthPath: "Eight's territory hosting Seven's social activity, Seven's entertainment enlivening Eight's fortress.",
    watchOut: "Seven's sociability threatening Eight's territory, Eight's control limiting Seven's social needs."
  },
  {
    type1: 7, subtype1: 'so', type2: 8, subtype2: 'so',
    title: "The Social Butterfly and The Social Champion",
    subtitle: "Group enthusiasm meets powerful advocacy",
    narrative: `They ruled every room they entered—together, they were unstoppable.

He brought the charm, the wit, the ideas that sparkled. She brought the power, the conviction, the force that moved mountains.

"We make an incredible team," he said after another successful event.

"Team?" She smiled, but her eyes were sharp. "I thought we were partners. Partners fight for the same things."

"We do! I'm totally with you on—"

"Which cause? Name one you'd bleed for."

He opened his mouth. Closed it. He'd championed a dozen causes this month. Passionately, briefly, before the next shiny purpose appeared.

"You're the fireworks," she said, not unkindly. "Beautiful, exciting. But when the smoke clears, I'm still standing there, holding the line."

"That's not fair. I bring people in—"

"And I keep them fighting after you've moved on."

The truth sat between them. She needed his ability to attract; he needed her ability to hold. Separately, she was a general without troops; he was a parade without purpose.

"Teach me to stay," he finally said.

"Teach me to sparkle," she answered.`,
    dynamicDescription: "Social entertainment meets social power, with potential for combined influence.",
    growthPath: "Seven's enthusiasm supporting Eight's causes, Eight's strength protecting Seven's social space.",
    watchOut: "Seven finding Eight too serious, Eight finding Seven uncommitted."
  },
  {
    type1: 7, subtype1: 'so', type2: 8, subtype2: 'sx',
    title: "The Social Entertainer and The Possessive Force",
    subtitle: "Group excitement meets consuming possession",
    narrative: `He was the life of every party. She wanted him to be the death of his social life.

"Why do you need them?" she demanded after another gathering where he'd charmed everyone. "You have me."

"It's not about need. I love people. I love connecting—"

"You love attention."

He flinched. "That's not fair."

"Isn't it? Watch yourself sometime. The way you light up for strangers. The way you collect admirers. The way everyone gets a piece of you."

"You get the real piece. The best piece."

"I want the only piece."

The words hung between them. He couldn't imagine life without crowds, laughter, the energy of people. She couldn't imagine sharing what she'd claimed.

At the next party, she watched him work the room. Saw how he never quite gave himself away—always performing, never landing. Maybe she did have the real piece. Maybe his social self was just sparkling armor.

"Okay," she said when they got home. "Keep your crowds."

"Really?"

"But when you come home, you come all the way home. No performing here."

He kissed her. "That's exactly what I want."`,
    dynamicDescription: "Social entertainment meets possessive intimacy, creating jealousy versus freedom tension.",
    growthPath: "Seven prioritizing intimacy with Eight, Eight tolerating Seven's social nature.",
    watchOut: "Eight's possessiveness curtailing Seven's social life, Seven's sociability triggering Eight's jealousy."
  },
  {
    type1: 7, subtype1: 'sx', type2: 8, subtype2: 'sp',
    title: "The Fascinated Explorer and The Territorial Protector",
    subtitle: "Focused curiosity meets survivalist strength",
    narrative: `She had never seen anyone look at her compound like that—like it was a wonder, not a weapon.

"This is incredible," he breathed, running his hand along the stone walls. "The engineering, the history, the sheer... intention of it all."

She watched him, wary. People usually wanted to breach her walls, not admire them.

He stayed for hours, asking questions, genuinely fascinated by every defense mechanism, every hidden passage, every strategic decision that had built her fortress.

"You could stay," she offered, surprising herself. "There's more to see."

He moved in that week. For three months, he was utterly captivated—by her world, her strength, her secrets.

Then she noticed his gaze wandering toward the horizon.

"There's a castle in Scotland," he mentioned casually. "Medieval fortifications, completely different approach..."

Her jaw tightened. "Go, then."

"Come with me. Imagine what we could learn—"

"I don't leave my territory."

He looked torn—caught between fascination with new wonders and connection to this one.

"Then I'll bring the wonders back to you," he decided. "Your fortress can be my home base."

She almost smiled. A wanderer who kept returning might be better than a settler who secretly dreamed of leaving.`,
    dynamicDescription: "Focused fascination meets territorial protection, with potential for sustained depth.",
    growthPath: "Seven's fascination engaging with Eight's world, Eight's protection supporting Seven's exploration.",
    watchOut: "Seven's fascination shifting, Eight's territory limiting Seven's exploration."
  },
  {
    type1: 7, subtype1: 'sx', type2: 8, subtype2: 'so',
    title: "The Focused Enthusiast and The Social Champion",
    subtitle: "Intense fascination meets powerful advocacy",
    narrative: `When he discovered her cause, he dove in completely—researching, advocating, becoming her most passionate convert overnight.

"You're incredible," she said, watching him mobilize supporters. "Where has this fire been hiding?"

"I just needed something worth burning for."

For six months, they were unstoppable. His intensity matched her power. His fascination fueled her mission.

Then the environmental summit happened. A speaker from another movement caught his attention—ocean conservation, completely different cause.

She found him afterward, eyes bright with new purpose. "Did you hear her? The coral reefs, the plastic—"

"We have our own crisis to fight."

"But this is so urgent—"

"So is ours! What happened to being passionate about our cause?"

He blinked, confused. "I still am. But there's so much that matters—"

"I need someone who stays. Who fights until we win."

He looked stricken. His fascination was genuine but fragmented—a spotlight that could only illuminate one thing at a time, and it kept moving.

"What if," he said slowly, "I bring what I learn back to strengthen our work? Cross-pollination instead of abandonment?"

She considered. Maybe focused intensity didn't have to mean tunnel vision. Maybe passion could be both deep and wide—if it always came home.`,
    dynamicDescription: "Intense fascination meets powerful leadership, with potential for cause-driven depth.",
    growthPath: "Seven's fascination sustaining commitment to Eight's causes, Eight's power directing Seven's depth.",
    watchOut: "Seven's fascination shifting to new causes, Eight wanting more consistent commitment."
  },
  {
    type1: 7, subtype1: 'sx', type2: 8, subtype2: 'sx',
    title: "The Fascinated Explorer and The Possessive Claimer",
    subtitle: "Intense curiosity meets consuming possession",
    narrative: `Two flames—one that burned everything it touched, one that flickered toward the next light.

Their first months were inferno. His fascination locked onto her with laser intensity. Her possession consumed him completely. Neither had ever felt so seen, so claimed, so alive.

"You're the only thing I see," he told her. And meant it.

"You're mine," she answered. "Completely mine."

The trouble came gradually. A new art exhibit caught his eye. A fascinating stranger at a dinner party. His attention would wander—just for a moment—and she would notice.

"Where did you go?" she demanded.

"Nowhere! I'm right here—"

"Your mind left. I felt it."

He couldn't deny it. His fascination was total but not permanent. New wonders kept calling.

"I need all of you," she said. "Not most. Not almost. All."

"You have more of me than anyone ever has."

"Then why isn't it enough?"

The question pierced him. Perhaps because 'enough' required constancy, and his attention was a searchlight, not a fixed star.

"Teach me to stay," he whispered.

She pulled him close. "Only if you want to be caught."

For the first time, he did.`,
    dynamicDescription: "Intense fascination meets possessive intensity, creating powerful but impermanent risk.",
    growthPath: "Seven's fascination sustained by Eight's power, Eight's claiming met by Seven's depth.",
    watchOut: "Seven's fascination shifting despite Eight's possession, Eight's claiming not holding Seven."
  },

  // === TYPE 7 WITH TYPE 9 ===
  {
    type1: 7, subtype1: 'sp', type2: 9, subtype2: 'sp',
    title: "The Resourceful Opportunist and The Comfortable Settler",
    subtitle: "Strategic networking meets peaceful comfort",
    narrative: `He filled their home with stuff he might need someday—equipment for hobbies he hadn't started, supplies for trips he hadn't planned, backup resources for problems he hadn't faced.

She had her corner—exactly as she liked it. Her chair, her lamp, her view of the garden. Perfect peace.

"I found a great deal on a kayak," he announced, dragging another purchase inside.

She watched the chaos expand. "Where will it go?"

"I'll figure it out. Think of the possibilities!"

"I was thinking of the quiet."

He stopped, finally noticing her expression. "This bothers you."

"It's not the stuff. It's the... restlessness. You're always acquiring the next thing. I'm trying to enjoy what we have."

"But what we have could be so much more—"

"What we have is enough."

The word 'enough' hit him strangely. He'd never understood it.

They compromised. She made space for his possibilities; he created stillness for her peace. His acquisitions funded comforts she'd never have sought herself. Her contentment taught him that having everything meant nothing if you couldn't enjoy it.

"This is nice," he admitted one evening, settled beside her. Just sitting.

She smiled. "It's enough."`,
    dynamicDescription: "Opportunity-seeking meets contentment, with potential for grounded abundance.",
    growthPath: "Seven's options enhancing Nine's comfort, Nine's peace grounding Seven's restlessness.",
    watchOut: "Seven's acquiring disturbing Nine's peace, Nine's contentment limiting Seven."
  },
  {
    type1: 7, subtype1: 'sp', type2: 9, subtype2: 'so',
    title: "The Practical Adventurer and The Social Harmonizer",
    subtitle: "Resourceful freedom meets group peace",
    narrative: `Every gathering she touched became peaceful—conflicts melted, tensions eased, people left feeling connected.

He watched her work, fascinated. "How do you do that?"

"Do what?"

"Make everyone... calm. Comfortable. Together."

She shrugged. "I just listen to what everyone needs."

"And you always give it to them." He said it like a question.

Their partnership worked beautifully in social settings. She created the harmony; he saw opportunities within it. Her peacekeeping opened doors his charm could walk through.

But sometimes his opportunism disrupted her carefully balanced groups.

"You can't just recruit people at my family reunion," she said quietly.

"I wasn't recruiting—I was networking. Your cousin has connections—"

"He felt used. My aunt noticed. Now everyone's uncomfortable."

He stopped. He'd been so focused on possibilities that he'd missed the harmony he was destroying.

"I'm sorry," he said. "I didn't see it."

"You never see it. You see what could be, not what is."

He reached for her hand. "Teach me to see what is."

She smiled—her peacemaking extending to him. "Start by just being here. No agendas. Just... present."

For him, it was the hardest option to choose.`,
    dynamicDescription: "Preserved freedom meets group harmony, with potential for peaceful opportunities.",
    growthPath: "Seven's opportunities in Nine's harmonious contexts, Nine's peace grounding Seven's freedom.",
    watchOut: "Seven's opportunism disturbing Nine's harmony, Nine's peacemaking limiting Seven."
  },
  {
    type1: 7, subtype1: 'sp', type2: 9, subtype2: 'sx',
    title: "The Resourceful Opportunist and The Merged Soul",
    subtitle: "Preserved freedom meets complete fusion",
    narrative: `She poured herself into him like water into a vessel—filling every space, taking his shape, forgetting she'd ever had her own form.

He barely noticed. He was too busy keeping his exits clear.

"I love everything you love," she told him.

"That's... nice." He glanced toward the door.

"I want to be wherever you are."

"Also nice." He checked his phone.

She didn't understand. She'd given him everything. Why wasn't he dissolving into her the way she had into him?

"Do you even want me here?" she finally asked.

He looked up, surprised. "Of course. You're great. Easy. Comfortable."

"Comfortable." The word stung.

"What's wrong with comfortable?"

Everything, she wanted to say. I gave you my whole self. You gave me a space in your schedule.

"I keep options open," he admitted when she stayed silent. "It's not about you. It's about... safety."

"I don't want to be an option."

He studied her—really looked for the first time. "And I don't want to be consumed."

They sat with it. Perhaps love wasn't fusion or freedom. Perhaps it was two people choosing each other—without disappearing, without escaping.`,
    dynamicDescription: "Preserved options meets complete merger, with different intimacy orientations.",
    growthPath: "Seven choosing Nine despite options, Nine accepting Seven's need for freedom within fusion.",
    watchOut: "Seven's options seeming like rejection to Nine, Nine's fusion feeling suffocating to Seven."
  },
  {
    type1: 7, subtype1: 'so', type2: 9, subtype2: 'sp',
    title: "The Social Entertainer and The Comfortable Retreater",
    subtitle: "Group excitement meets peaceful withdrawal",
    narrative: `He burst through the door after every social event like a firework—bright, loud, explosive with stories.

She sat in her reading nook, absorbing the impact.

"You should have been there! The energy, the conversations, the ideas—"

"I'm glad you had fun."

"Come next time? Please?"

She looked at her book, her tea, her perfect quiet evening. "Maybe."

They both knew what 'maybe' meant.

"Why don't you ever want to come?" He finally asked.

"Why do you always need to go?"

They stared at each other across a chasm of temperament.

"The world is so full of life," he said. "Don't you want to taste it?"

"I'm tasting this," she replied. "Right here. This is life too."

He sat down beside her—unusual stillness for him. The quiet pressed against him uncomfortably. Then, gradually, settled.

"This is nice," he admitted.

"Welcome to my world."

"It's so... empty."

"It's so full. You just can't see it yet."

He tried. She tried. He brought small gatherings home; she attended his quiet events. Their worlds overlapped at the edges—his energy softening, her peace expanding to include him.

"I'll always need people," he said.

"And I'll always need quiet," she answered.

"Then we'll need a very large house."`,
    dynamicDescription: "Social entertainment meets peaceful retreat, creating engagement versus withdrawal tension.",
    growthPath: "Seven's energy enlivening Nine's world, Nine's peace grounding Seven's social exhaustion.",
    watchOut: "Seven's social demands overwhelming Nine, Nine's withdrawal frustrating social Seven."
  },
  {
    type1: 7, subtype1: 'so', type2: 9, subtype2: 'so',
    title: "The Social Butterfly and The Social Harmonizer",
    subtitle: "Group enthusiasm meets group peace",
    narrative: `At every party, they played their roles perfectly. He lit the fireworks; she swept up the ashes.

"That was incredible!" he said after another successful gathering. "The energy—"

"The energy was a lot." She smiled tiredly. "Do you know how many conflicts I smoothed over?"

"What conflicts?"

"Exactly."

He looked at her—really looked—for the first time in a while. She was exhausted. While he'd been creating waves of excitement, she'd been managing the undertow.

"I make the fun," he said slowly. "You make it possible."

"Someone has to."

"But you're not having any."

She shrugged—her signature move, neither agreement nor disagreement. Just... acceptance.

"What if you didn't smooth everything?" he asked. "What if some conflicts just... happened?"

"Then people would leave upset."

"Would that be so terrible?"

She considered it. The question had never occurred to her.

They experimented. He turned down his voltage; she let small tensions exist. The parties were less electric but more genuine. He learned that calm could be exciting. She learned that not every ripple required smoothing.

"This is nice," she said after a quieter gathering.

He grinned. "Not as fun though."

"Maybe fun isn't everything."

"Blasphemy," he laughed. But he was learning.`,
    dynamicDescription: "Social excitement meets social peace, with potential for balanced social presence.",
    growthPath: "Seven's excitement balanced by Nine's calming, Nine's harmony enlivened by Seven's energy.",
    watchOut: "Seven's excitement creating waves Nine must smooth, Nine dampening Seven's fun."
  },
  {
    type1: 7, subtype1: 'so', type2: 9, subtype2: 'sx',
    title: "The Social Entertainer and The Merged Lover",
    subtitle: "Group excitement meets intimate fusion",
    narrative: `She wanted to dissolve into him. He wanted to sparkle for everyone.

When they were alone, it was perfect—she merged into his world, becoming an extension of his joy.

Then the party started.

She watched him light up a room full of strangers. Watched him distribute pieces of himself to everyone. Felt herself fade as his attention scattered.

"You were amazing tonight," she said afterward, quietly.

"Thanks! That was so fun—"

"For you."

He paused. "You didn't have fun?"

"I was alone. In a crowd of people getting pieces of you."

"But you were right there—"

"Was I? Did you see me?"

He thought back. He'd made everyone laugh, charmed every guest, created connections everywhere. Except with her.

"I can't just... not socialize," he said.

"I know." She looked away. "I'm not asking you to stop being you."

"Then what are you asking?"

"To be seen. Even when there are other people to see."

He took her hands. "What if I check in with you? Throughout the night? Come back to you?"

"Would you remember?"

"I'll try."

It wasn't fusion. But it was something—breadth that included depth, sparkle that remembered to shine on her too.`,
    dynamicDescription: "Social entertainment meets intimate fusion, creating breadth versus depth tension.",
    growthPath: "Seven prioritizing intimacy with Nine, Nine allowing Seven's social engagement.",
    watchOut: "Nine feeling abandoned for Seven's social world, Seven feeling trapped by Nine's fusion."
  },
  {
    type1: 7, subtype1: 'sx', type2: 9, subtype2: 'sp',
    title: "The Fascinated Explorer and The Comfortable Retreater",
    subtitle: "Focused curiosity meets peaceful withdrawal",
    narrative: `She had built the perfect nest—every pillow arranged, every light softened, every comfort calibrated.

He found her there, and for a while, she became his fascination.

"How do you do this?" he asked, studying her peaceful world. "Create this... calm?"

"I just let things be."

"I've never let anything just be."

She showed him stillness. He showed her intensity. For months, her quiet depths held his searching gaze.

Then one morning, she noticed his attention wandering toward the window.

"There's a monastery in Japan," he said. "The gardens are designed for perfect peace—"

"You want to leave."

"I want to explore. Understand. Find other versions of what you have."

She felt the familiar disappointment settle. Another person for whom she wasn't quite enough.

"Go," she said softly.

But he didn't move. "What if I studied you instead? What if the exploration was... here?"

"I'm not that interesting."

"You're a mystery I haven't solved. Peace I haven't understood."

She looked at him skeptically. Could restless intensity find fascination in stillness?

"I'll try," he said. "To stay curious about quiet. About you."

It was a beginning—depth seeking depth, instead of breadth.`,
    dynamicDescription: "Focused intensity meets peaceful contentment, testing whether depth finds peace fascinating.",
    growthPath: "Seven finding Nine's peace fascinating, Nine opening to Seven's focused attention.",
    watchOut: "Seven's fascination shifting away from peaceful Nine, Nine not engaging Seven's interest."
  },
  {
    type1: 7, subtype1: 'sx', type2: 9, subtype2: 'so',
    title: "The Focused Enthusiast and The Group Harmonizer",
    subtitle: "Intense fascination meets social peacemaking",
    narrative: `He studied her the way a scientist studies a rare phenomenon—completely absorbed, utterly focused.

"You're looking at me again," she said, uncomfortable under his intensity.

"You're fascinating. The way you balance everyone's needs—"

"I'm not doing anything special."

"You're doing something impossible. I can barely track one conversation. You're managing fifteen."

She shrugged. Managing the group was automatic—checking tensions, adjusting dynamics, keeping everyone comfortable. She barely noticed anymore.

"But who's taking care of you?" he asked.

"That's not how it works."

"Make it how it works. I'll take care of you. Let me study you. Understand you. Focus on you the way you focus on everyone else."

She wasn't sure she knew how to receive that. Her whole self was built around attending to others.

"It makes me nervous," she admitted.

"Being seen?"

"Being... singular. Separate from the group."

He took her hand. "What if you could be both? Part of the harmony and also seen? What if my intensity could hold you while you hold everyone else?"

She considered it. His spotlight was unnerving. But also... warm.

"We can try," she said. "But gently. I'm not used to being the focus."

"I'll be gentle," he promised. "But I won't look away."`,
    dynamicDescription: "Focused intensity meets broad harmony, creating focus versus breadth tension.",
    growthPath: "Seven's fascination focusing on Nine, Nine giving Seven dedicated attention alongside group care.",
    watchOut: "Seven feeling lost in Nine's group focus, Nine overwhelmed by Seven's focused intensity."
  },
  {
    type1: 7, subtype1: 'sx', type2: 9, subtype2: 'sx',
    title: "The Fascinated Explorer and The Complete Merger",
    subtitle: "Intense curiosity meets total fusion",
    narrative: `When his spotlight found her, she dissolved into it gratefully—finally, someone who truly saw her.

When she merged into him, he felt complete for the first time—finally, someone who received everything he gave.

Their connection was oceanic. His fascination poured into her; she absorbed it all. They became one continuous being.

"I don't know where I end and you begin," she whispered.

"That's the point," he answered.

But fascination, by nature, hunts new wonders. One morning, his attention flickered toward something beyond her—a book, an idea, a question she couldn't answer.

She felt the withdrawal like a physical pain. "Where are you going?"

"Just thinking about—"

"You're leaving me."

"I'm right here."

"Your attention isn't. And without your attention, I'm not... anything."

The words hung between them. She had merged so completely that his gaze was her only mirror. When he looked away, she disappeared.

"You need to exist when I'm not looking," he said gently.

"I don't know how."

He took her face in his hands. "Then we learn together. My fascination will always come back. But you need to be here when it does—you, not just a space waiting to be filled."

She closed her eyes. "Show me how to stay."

"Show me how to return."

Two dissolving selves, learning to hold their own shape.`,
    dynamicDescription: "Intense fascination meets complete fusion, with potential for profound but impermanent connection.",
    growthPath: "Seven's fascination sustained by Nine's depth, Nine maintaining self within receiving Seven's intensity.",
    watchOut: "Seven's fascination shifting despite Nine's fusion, Nine lost trying to merge with inconstant Seven."
  },

  // ============================================
  // TYPE 8 CROSS-TYPE PAIRINGS
  // ============================================

  // === TYPE 8 WITH TYPE 9 ===
  {
    type1: 8, subtype1: 'sp', type2: 9, subtype2: 'sp',
    title: "The Fortress and The Hearth",
    subtitle: "When walls meet warmth",
    narrative: `She built walls; he built nests. Both wanted safety, but their blueprints couldn't have been more different.

Her home was a fortress—security systems, stockpiled supplies, every vulnerability accounted for. "You can never be too prepared," she'd say, testing the locks again.

His home was a cocoon—soft blankets, favorite snacks, the same comfortable routine each evening. "Why would anyone want to leave this?" he'd murmur, sinking deeper into the couch.

"You're not prepared for anything," she said one night, frustrated by his contentment.

"And you're not enjoying anything," he replied quietly.

The silence that followed held a question neither had asked: What if her walls could protect his warmth? What if his peace could exist inside her fortress?

They learned: she didn't need to guard against everything, and he didn't need to hide from everything. The strongest home has both walls and hearth.`,
    dynamicDescription: "Two different approaches to security discovering they're not opposites but complements.",
    growthPath: "Her protection creating space for his peace. His contentment softening her vigilance.",
    watchOut: "Her intensity disturbing his peace. His passivity frustrating her need for readiness."
  },
  {
    type1: 8, subtype1: 'sp', type2: 9, subtype2: 'so',
    title: "The Provider and The Peacekeeper",
    subtitle: "When protection meets harmony",
    narrative: `She protected what was hers with fierce practicality—resources secured, territory defended, family provided for. He kept peace wherever people gathered—smoothing tensions, finding common ground, making everyone comfortable.

"Why do you waste energy on people who don't matter?" she asked, watching him mediate yet another friend's conflict.

"Why do you only care about what's inside your walls?" he wondered.

She saw his peacemaking as soft. He saw her boundaries as harsh. But at his family reunion, when tensions erupted and he froze, she stepped in—not with aggression, but with the practical authority that settled things.

"You protected them," he said afterward, surprised.

"They're yours," she shrugged. "So they're mine."

He realized her protection could extend to his people. She realized his people could become her territory.`,
    dynamicDescription: "Practical protection extending to include social harmony.",
    growthPath: "Her strength sheltering his communities. His warmth expanding her definition of territory.",
    watchOut: "Her intensity disrupting his careful peace. His social focus seeming scattered to her."
  },
  {
    type1: 8, subtype1: 'sp', type2: 9, subtype2: 'sx',
    title: "The Stronghold and The Devoted",
    subtitle: "When fortress meets fusion",
    narrative: `She built her life like a fortress—controlled, resourced, impenetrable. He dissolved into love like morning mist—boundaries forgotten, self surrendered, two becoming one.

He moved into her world completely. Her priorities became his. Her enemies became his. Her fortress became his universe.

At first, she loved it. Finally, someone who was fully hers.

Then she noticed: when she asked what he wanted for dinner, he said whatever she wanted. When she asked about his dreams, he described hers. When she looked for him, she only saw her own reflection.

"Where did you go?" she demanded.

He blinked. "I'm right here. I'm with you."

"No—where did YOU go?"

The question terrified him, because he couldn't remember.

She learned that possessing someone means nothing if they've disappeared. He learned that merger without self isn't love—it's erasure.`,
    dynamicDescription: "Complete devotion revealing the danger of losing oneself in another's world.",
    growthPath: "Him maintaining identity within devotion. Her valuing his distinct presence.",
    watchOut: "Him disappearing into her practical concerns. Her possessing an empty vessel."
  },
  {
    type1: 8, subtype1: 'so', type2: 9, subtype2: 'sp',
    title: "The Champion and The Sanctuary",
    subtitle: "When crusade meets retreat",
    narrative: `She fought battles—led movements, confronted injustice, gathered armies for causes that mattered. He tended his garden—literally and figuratively—cultivating a small peaceful world where nothing needed fighting.

"Come to the rally," she urged. "Your voice matters."

"I'll make dinner for when you get home," he offered.

She saw his retreat as cowardice. He saw her crusades as exhausting chaos. They nearly ended over it.

But one night she came home devastated—a battle lost, her fire nearly extinguished. He didn't offer strategy or solutions. He made her tea. Drew her a bath. Held silence with her.

"How do you do this?" she whispered. "Make everything quiet?"

"How do you do that?" he asked. "Fight when everything's loud?"

She was the warrior; he was the sanctuary she returned to. Not every soldier needs another soldier. Some need a home.`,
    dynamicDescription: "The crusader discovering the necessity of retreat. The retreater discovering the value of being someone's peace.",
    growthPath: "Her battles protecting his sanctuary. His peace restoring her strength.",
    watchOut: "Her intensity invading his refuge. His withdrawal feeling like abandonment."
  },
  {
    type1: 8, subtype1: 'so', type2: 9, subtype2: 'so',
    title: "The General and The Diplomat",
    subtitle: "When power meets peace in public",
    narrative: `Both cared about the group. But she led like a general—decisive, confrontational, willing to fight for what the group needed. He led like a diplomat—soothing, mediating, keeping everyone comfortable.

"You're too soft," she said after he let a bully dominate the meeting.

"You're too aggressive," he said after she made three people cry.

The community needed both, but they couldn't see it. Not until the crisis—when aggression would have shattered the fragile coalition and diplomacy alone couldn't stop the threat.

She confronted the problem. He held the people together through it. Her sword, his shield. His bridge, her fortress.

"I fight for them," she said finally.

"I hold them together so you have something to fight for," he replied.

Same love. Different languages.`,
    dynamicDescription: "Two forms of group leadership discovering their complementary nature.",
    growthPath: "Her strength protected by his coalition-building. His harmony defended by her willingness to fight.",
    watchOut: "Her aggression shattering what he builds. His peacemaking seeming weak to her."
  },
  {
    type1: 8, subtype1: 'so', type2: 9, subtype2: 'sx',
    title: "The Public Force and The Private Devotion",
    subtitle: "When causes compete with connection",
    narrative: `She belonged to the world—leading movements, protecting communities, fighting battles that mattered. He belonged to her—completely, utterly, wanting nothing more than to merge with her life.

But her life was public, and he wanted private.

"Come home," he'd text during her late meetings.

"This matters," she'd reply, adding another hour to the cause.

He'd wait, merging with her absence, wondering if the movement was her true partner and he was just the supporting role. She'd return to find him dissolved into accommodation, agreeing with everything, wanting nothing except her.

"I need you to want something," she finally said. "Something that's yours."

"I want you."

"That's not enough. I need you to be someone I come home to—not just someone who waits."

He had to find himself so she'd have someone to return to. She had to return so he'd have reason to stay found.`,
    dynamicDescription: "Public purpose and private devotion negotiating their competing claims.",
    growthPath: "Her prioritizing intimate connection. His developing independent selfhood.",
    watchOut: "Him feeling abandoned for causes. Her finding no one home when she returns."
  },
  {
    type1: 8, subtype1: 'sx', type2: 9, subtype2: 'sp',
    title: "The Consuming Fire and The Still Water",
    subtitle: "When intensity meets tranquility",
    narrative: `She loved like wildfire—consuming, possessive, demanding everything. He loved like a still pond—peaceful, undisturbed, asking nothing.

"Feel something!" she demanded, her intensity crashing against his calm.

"I do feel," he said quietly. "I just don't burn."

Her passion overwhelmed his peace. His stillness frustrated her fire. She wanted to be met with equal intensity; he wanted to be left in comfortable quiet.

But sometimes, late at night, he'd admit: her fire warmed something in him that had gone cold. And sometimes, after the burning, she'd admit: his stillness was the only thing that didn't turn to ash.

"I don't want to destroy you," she whispered.

"You won't," he promised. "Water doesn't burn. But it can hold fire's reflection."

She learned to burn without consuming. He learned to reflect without disappearing. The fire and the water found their edge.`,
    dynamicDescription: "Consuming intensity discovering the strength in stillness. Peaceful withdrawal discovering desire.",
    growthPath: "Her passion gentled by his calm. His stillness enlivened by her fire.",
    watchOut: "Her intensity extinguishing his peace. His withdrawal starving her need for connection."
  },
  {
    type1: 8, subtype1: 'sx', type2: 9, subtype2: 'so',
    title: "The Possessor and The Belonging",
    subtitle: "When claiming meets community",
    narrative: `She wanted him completely—possessed, claimed, undeniably hers. He wanted to belong everywhere—connected, harmonized, part of every circle.

"Why do you need so many people?" she demanded after another night of him tending to friends' needs.

"Why do you need so much of me?" he wondered.

Her possessiveness felt like prison. His dispersal felt like betrayal. She wanted exclusive intensity; he wanted inclusive peace.

The breaking point came at a party: she pulled him away from a conversation, he resisted, and in that moment they both saw it clearly.

"I can't be your only person," he said.

"I can't share you with everyone," she replied.

The negotiation was painful: she learned that belonging to her didn't mean belonging only to her. He learned that maintaining connection to her meant sometimes choosing her over the crowd.`,
    dynamicDescription: "Possessive intimacy and social belonging finding their difficult balance.",
    growthPath: "Her tolerating his community. His prioritizing her without abandoning himself.",
    watchOut: "Her possessiveness isolating him. His social diffusion making her feel unpossessed."
  },
  {
    type1: 8, subtype1: 'sx', type2: 9, subtype2: 'sx',
    title: "The Claim and The Surrender",
    subtitle: "When possession meets dissolution",
    narrative: `She claimed like a conquering force—possessive, consuming, demanding total surrender. He surrendered like water returning to the sea—boundaries dissolving, self disappearing, two becoming indistinguishable one.

At first, it felt like destiny. Her claiming met his yielding perfectly. She took; he gave. She possessed; he dissolved. No resistance, no friction, no self.

But slowly she noticed she was holding nothing. When she grasped, her hands closed on mist. When she called his name, no one answered. He had merged so completely that there was no "him" left to possess.

"Where are you?" she demanded.

"I'm yours," he answered.

"That's not what I asked. Where. Are. YOU?"

Silence. Because he didn't know anymore.

The most intense merger had produced the deepest absence. She had to learn that love requires someone to love. He had to learn that surrender without self isn't devotion—it's death.`,
    dynamicDescription: "The ultimate merger revealing its ultimate danger: possessing someone who has disappeared.",
    growthPath: "Him maintaining self within surrender. Her valuing his presence, not just his yielding.",
    watchOut: "Complete fusion producing complete absence. Claiming an empty vessel."
  }
];

// Helper to get a subtype story by type pair and subtypes
export const getSubtypeRelationshipStory = (
  type1: TypeNumber,
  subtype1: InstinctType,
  type2: TypeNumber,
  subtype2: InstinctType
): SubtypeRelationshipStory | undefined => {
  const key = getSubtypeStoryKey(type1, subtype1, type2, subtype2);
  return subtypeRelationshipStories.find(s =>
    getSubtypeStoryKey(s.type1, s.subtype1, s.type2, s.subtype2) === key
  );
};

// Get all stories for a particular type-subtype combination
export const getStoriesForSubtype = (
  type: TypeNumber,
  subtype: InstinctType
): SubtypeRelationshipStory[] => {
  return subtypeRelationshipStories.filter(
    s => (s.type1 === type && s.subtype1 === subtype) ||
         (s.type2 === type && s.subtype2 === subtype)
  );
};
