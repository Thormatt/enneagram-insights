const fs = require('fs');

const filePath = '/Users/thormatthiasson/Documents/GitHub/enneagram-sync/src/data/stories/subtype-relationship-stories.ts';

let content = fs.readFileSync(filePath, 'utf8');

// Type 4 + Type 5 stories (stories 2-9, story 1 already done)
const replacements = [
  // Story 2: SP Four + SO Five
  {
    old: `The SP Four suffers and creates privately—reserved, enduring. The SO Five engages with intellectual communities—sharing knowledge, connecting through ideas. Five is more social than Four might expect. Four might appreciate Five's intellectual engagement. Five might find Four's creative depth intriguing. Possible connection through shared intellectual-creative interests if Four engages with Five's community and Five appreciates Four's private depth.`,
    new: `She worked alone in her studio, transforming heartbreak into art that no one ever saw. He taught philosophy to packed lecture halls, explaining the universe to strangers who adored him.

They met at a faculty dinner she almost skipped. He noticed her immediately—not for what she said, but for how she listened.

"You're the artist," he said later, finding her in the garden. "The one who never shows her work."

"You're the professor. The one who shows everything."

"Not everything," he said quietly.

Weeks passed. He invited her to a lecture; she actually came. She showed him a painting; he actually wept. Slowly, she began attending his intellectual circles—not participating, just present. Slowly, he began visiting her studio—not analyzing, just witnessing.

"I thought you lived for those crowds," she admitted one night.

"I thought I did too. But talking about meaning isn't the same as feeling it."

She taught him that some truths can't be spoken, only created. He taught her that some creations deserve to be shared. Together, they found a language between intellect and intuition—a place where her private depths met his public gifts, and both finally felt understood.`
  },
  // Story 3: SP Four + SX Five
  {
    old: `Both private, both intense beneath the surface. The SP Four endures pain silently—not dramatic but deeply feeling. The SX Five hides intense romantic longing—desperate for connection while remaining invisible. Two hidden depths meeting. They might recognize each other's concealed intensity. Four's steadiness could feel safe to Five's fear. Five's hidden passion could match Four's private depth. Connection requires both risking revelation.`,
    new: `They worked at the same bookstore for a year, exchanging nothing but polite nods. She shelved poetry with trembling hands; he catalogued rare editions in the back, watching her through the stacks.

Neither knew the other's secret: she wrote verses about loneliness she'd never share, and he kept a journal filled with pages about her—the way she touched the spines of books like they were sacred.

One evening, closing alone, she found a note tucked in a volume of Rilke: "I see you feeling what you never say."

Her heart stopped. She wrote back, left it in the same book: "I see you watching what you never approach."

For months, they communicated only this way—anonymous intimacy, safe distance. Until the night she stayed late and found him waiting.

"I was afraid to speak," he admitted, voice barely audible.

"I was afraid to be seen," she replied.

They stood in the dim light of the poetry section, two hidden depths finally surfacing. He offered her his journal. She offered her verses. Neither had ever shown anyone.

"You kept me secret," she whispered, reading.

"You kept yourself secret too," he replied.

They learned that sometimes the deepest love begins in shadows—and that two people hiding the same thing might be the only ones who can bring each other into light.`
  },
  // Story 4: SO Four + SP Five
  {
    old: `The SO Four seeks belonging while feeling fundamentally different—wanting social connection but not fitting in. The SP Five withdraws from social world—minimizing needs, avoiding engagement. Four seeks what Five flees. Four may not understand Five's withdrawal; Five may find Four's social seeking exhausting. But Four's outsider status might feel less threatening to Five than social conformists. Potential connection through shared sense of not fitting conventional social molds.`,
    new: `She drifted through parties like a ghost who wanted to be seen—present but never belonging, always the interesting outsider. He avoided parties entirely, content in his cabin with his books and his silence.

"Why do you even go?" he asked when they met through mutual friends. "You clearly hate it."

"Because I hate being alone more. Why do you hide?"

"Because I hate performing more."

She didn't understand his retreat; he didn't understand her pursuit. But something kept drawing them together—perhaps the recognition that neither fit anywhere.

She started visiting his cabin. He started attending her events—briefly, strategically, then retreating to wait for her.

"The others don't see me," she confessed one night. "Not really. They see the image."

"I see you," he said simply.

She stared at him. "How? You barely look at people."

"I look at you."

In his solitude, she found the attention she craved—undivided, unperformed, real. In her world, he found a guide who never asked him to be anything but himself. Two outsiders who discovered that belonging isn't about fitting in—it's about finding the one person who makes everywhere else unnecessary.`
  },
  // Story 5: SO Four + SO Five
  {
    old: `Both engaged with social world but as outsiders. The SO Four differentiates—being unique, standing out through specialness. The SO Five contributes to intellectual communities—sharing knowledge, being the expert. Both understand social dynamics from marginal positions. They might find overlap in intellectual-creative communities. Four brings creative differentiation; Five brings intellectual contribution. Possible alliance between two who engage socially without fully belonging.`,
    new: `They met at a conference where neither belonged—she was the artist invited to provoke, he was the scientist asked to explain. Both stood at the edges, watching the center from outside.

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

They'd found what neither expected: a partnership where her differentiation met his contribution, where standing out and standing apart merged into standing together. Not quite belonging anywhere—but absolutely belonging to each other.`
  },
  // Story 6: SO Four + SX Five
  {
    old: `The SO Four seeks recognition for uniqueness in groups—different but belonging. The SX Five hides intense romantic longing behind withdrawn exterior. Four is visible in differentiation; Five is invisible in longing. Four might not initially see Five's depths. Five might observe Four from distance, drawn to Four's emotional expressiveness. If connection forms, Five could offer Four the depth Four craves, and Four could draw Five into more visible expression.`,
    new: `She commanded attention without trying—the striking presence at every gathering, differentiated and desired. He attended the same events invisibly, watching her from corners, memorizing her gestures, never approaching.

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

She drew him out; he drew her in. The one who needed to be seen finally was, by the only one who had been truly looking all along.`
  },
  // Story 7: SX Four + SP Five
  {
    old: `Maximum contrast in intimacy style. The SX Four feels with overwhelming intensity—emotions large, consuming, demanding. The SP Five withdraws into self-sufficiency—minimizing needs, avoiding dependency. Four's emotional demands are exactly what Five fears; Five's withdrawal is exactly what Four dreads. Yet some Fives secretly crave emotional intensity, and some Fours need the challenge of reaching withdrawn souls. High-risk, potential high-reward pairing.`,
    new: `She loved like a storm—consuming, demanding, impossible to ignore. He lived like a fortress—self-contained, needing nothing, letting no one in.

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

They built something unprecedented: her intensity tempered by his boundaries, his withdrawal broken by her persistence. Not comfortable—never comfortable—but achingly, surprisingly alive.`
  },
  // Story 8: SX Four + SO Five
  {
    old: `The SX Four feels with consuming emotional intensity—depth, yearning, passion. The SO Five engages through intellectual communities—ideas, knowledge, cerebral connection. Four wants emotional depth; Five offers intellectual engagement. Four may feel Five doesn't meet their emotional needs. Five may feel overwhelmed by Four's intensity. But Five's social intellectual orientation is less withdrawn, creating possible meeting ground if Four values intellect and Five allows emotion.`,
    new: `She felt everything like it was the end of the world. He explained everything like it was a theorem to be solved.

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

They discovered that heart and mind could meet—not by becoming each other, but by making room for what the other needed.`
  },
  // Story 9: SX Four + SX Five
  {
    old: `Both intensely focused on intimate connection but expressing it oppositely. The SX Four expresses emotional intensity openly—yearning, passionate, dramatic. The SX Five hides equally intense longing—desperate for connection while terrified of it. Four's open expression meets Five's hidden depths. If Five can trust Four with their hidden intensity, profound recognition is possible. Four finally finds someone with matching emotional depth; Five finally finds someone who understands longing. The challenge: Five's fear of the very intensity they crave.`,
    new: `She burned openly—a flame everyone could see, all passion and yearning displayed. He burned secretly—a fire behind walls so thick no one knew it existed.

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

It was the only offer that could have reached him—and the one thing she'd been searching for: someone whose depths matched her own, even if they spoke a different language of love.`
  },
  // Type 4 + Type 6: Story 1: SP Four + SP Six
  {
    old: `Both deal with difficulty but differently. The SP Four endures pain privately—suffering with dignity, maintaining productivity. The SP Six prepares for dangers—worried about what could go wrong, securing against threats. Four suffers internally; Six worries externally. They could understand each other's struggles. But Four may find Six's anxiety exhausting while Six may find Four's suffering indulgent. Different relationships to difficulty.`,
    new: `She carried her sorrows like stones in her pocket—heavy but hidden, endured without complaint. He carried his fears like a emergency kit—always ready, always scanning for threats.

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

Two people who understood that life was hard—just navigating it with different tools. Together, those tools became enough.`
  },
  // Story 2: SP Four + SO Six
  {
    old: `The SP Four creates and endures privately—reserved, self-contained. The SO Six commits loyally to groups and systems—finding security through belonging and rules. Different orientations: Four is individualistic, Six is systemic. Four may find Six's group loyalty stifling. Six may find Four's individualism threatening to order. But Four could provide depth to Six's commitments, and Six could provide community for Four's isolation.`,
    new: `She created alone, answering to no one, her art a private rebellion against a world that wanted conformity. He built his life around belonging—the company, the community, the causes that gave him purpose and structure.

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

Two orientations that shouldn't have merged—but did, creating something neither could have built alone.`
  },
  // Story 3: SP Four + SX Six
  {
    old: `The SP Four endures privately—suffering with dignity, not dramatic. The SX Six confronts fears aggressively—counterphobic, meeting threats head-on. Different energies: Four's quiet suffering, Six's active fighting. Six might protect what Four creates. Four might ground Six's aggression. But Six's intensity might overwhelm quiet Four. Four's reserve might seem passive to fighting Six.`,
    new: `She suffered in silence, transforming pain into art behind closed doors. He fought everything—fears, obstacles, anyone who threatened what he loved.

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

She created; he defended. She grounded his intensity; he shielded her quiet. Two different responses to a dangerous world, finally finding their complement.`
  },
  // Story 4: SO Four + SP Six
  {
    old: `The SO Four seeks belonging through uniqueness—standing out, being different. The SP Six worries privately—personal safety, material concerns, inner anxiety. Four's visible differentiation meets Six's hidden worry. Four may want Six to engage more socially. Six may find Four's social seeking risky. But both know what it's like to feel unsafe in the world. Possible connection through shared vulnerability beneath different surfaces.`,
    new: `She made herself visible through differentiation—the unique one, the special one, standing out in every crowd. He made himself invisible through worry—calculating risks, avoiding attention, keeping his fears close and his profile low.

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

Two different relationships with the unsafe world, finally finding shelter in the space between—where her visibility met his vigilance, and both felt protected.`
  },
  // Story 5: SO Four + SO Six
  {
    old: `Both focused on groups but oppositely. The SO Four differentiates—being unique, standing out, not fitting in. The SO Six commits—being loyal, fitting in, supporting systems. Four stands out; Six fits in. They might clash or complement. Four may see Six as conformist. Six may see Four as destabilizing. But both understand the weight of social belonging. They might find meeting ground in shared awareness of social dynamics.`,
    new: `She made a career of not fitting in—the celebrated outsider, different by design. He made a career of belonging—loyal to institutions, committed to systems, the reliable foundation others built upon.

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

They married their opposites: her differentiation gave his communities depth, his belonging gave her uniqueness context. Neither fully fit in, neither stood fully apart—but together, they'd found a third way.`
  },
  // Story 6: SO Four + SX Six
  {
    old: `The SO Four seeks recognition for uniqueness in groups. The SX Six confronts threats aggressively—defending with strength. Four differentiates; Six fights. They might form powerful alliance: Four's creative vision, Six's protective strength. Six could defend Four's differentiated expression. But Six's aggression might clash with Four's more sensitive nature. Four's emotional needs might seem weak to fighting Six.`,
    new: `She stood out in every room—the creative visionary, celebrated and exposed. He stood guard in every room—the fierce protector, confronting any threat with aggressive courage.

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

She gave him something to protect; he gave her someone who would never back down. Her vision, his defense. Her sensitivity, his strength. They built something powerful—art shielded by armor, depth defended by fire.`
  },
  // Story 7: SX Four + SP Six
  {
    old: `The SX Four feels with overwhelming intensity—emotional, yearning, consuming. The SP Six worries about security—personal safety, practical concerns. Four's intensity meets Six's worry. Four may feel Six doesn't match their emotional depth. Six may feel Four's intensity is destabilizing. But Four's passion could give Six something worth protecting, and Six's grounding could anchor Four's intensity.`,
    new: `She felt everything at maximum volume—her love, her grief, her rage, all consuming. He calculated everything at minimum risk—contingencies, backups, escape routes for every scenario.

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

She gave him depth he never knew he needed. He gave her ground she never knew existed. Passion anchored by protection—intense, yes, but finally safe enough to feel everything without falling apart.`
  },
  // Story 8: SX Four + SO Six
  {
    old: `The SX Four focuses intense emotion on intimate connection—depth, yearning, passion. The SO Six commits to groups and systems—finding security through loyalty. Four wants intimate depth; Six has systemic commitments. Four may feel Six's group loyalties compete with relationship. Six may feel Four's intensity threatens needed stability. Tension between intimate depth and systemic belonging.`,
    new: `She wanted all of him—every thought, every feeling, every moment of attention. He had commitments—to the team, the organization, the community that gave his life structure and meaning.

"You're always somewhere else," she accused after another meeting took him away.

"I have responsibilities. People depend on me."

"I depend on you!"

"It's not the same."

"Why not? Why does the group get more of you than I do?"

He struggled to explain what she couldn't feel: that belonging to something larger made him feel safe in ways intimacy alone couldn't.

But when her intensity finally overwhelmed her—when she needed him and only him—he was there. The meetings waited. The commitments paused.

"I thought the system came first," she said, surprised.

"The system exists so I have something to offer you," he realized aloud. "You were always first. I just didn't know how to say it."

She softened. "I don't want to compete with your world. I just want to know I matter more."

"You do. You always did."

He learned to protect their intimacy within his structure. She learned to accept his loyalties as part of who he loved. Deep connection and broader belonging—not competing, but nourishing each other.`
  },
  // Story 9: SX Four + SX Six
  {
    old: `Two intensities meeting. The SX Four feels with consuming emotional depth—yearning, passionate, intense. The SX Six confronts with aggressive courage—counterphobic, meeting threats head-on. Different expressions of intensity: Four through feeling, Six through fighting. They might recognize each other's intensity. Six could protect Four's vulnerable depth; Four could give Six emotional depth beneath the fight. But conflicts could be explosive—intensity meeting intensity.`,
    new: `She burned with emotion—every feeling amplified, every longing urgent, every heartbreak catastrophic. He burned with defiance—every fear confronted, every threat challenged, every danger met with aggressive courage.

Their first fight nearly ended them. She sobbed; he shouted. She felt; he fought. Neither knew how to de-escalate.

"You're impossible!" she screamed.

"You're overwhelming!" he roared back.

They stood in the wreckage of their intensity, both too much for anyone else, both finally matched.

"No one's ever been able to take my feelings," she said finally, hoarse.

"No one's ever been able to take my fight," he admitted.

"Maybe that's why we keep coming back."

The fights continued—explosive, passionate, terrifying to observers. But so did the reconciliations—deep, connected, equally intense.

"I need your fire," she confessed one night.

"I need your depth," he replied. "The fighting is meaningless without something real beneath it."

"I can be your real."

"And I can be your protector."

She gave him something worth fighting for beyond the fear. He gave her someone strong enough to hold her storm. Two intensities that should have destroyed each other—instead creating a bond no lesser force could break.`
  },
  // Type 4 + Type 7: Story 1: SP Four + SP Seven
  {
    old: `The SP Four endures pain privately—suffering with dignity while maintaining productivity. The SP Seven networks for opportunities—gathering resources, creating options. Both practical. Four may find Seven's opportunism avoiding real depth. Seven may find Four's suffering unnecessary—why not just find solutions? But Four's depth could give weight to Seven's plans, and Seven's options could lighten Four's heaviness.`,
    new: `She worked through her pain with quiet dignity—no complaints, just steady creation born from suffering. He worked through opportunity—networking, pivoting, always finding the next open door.

"You could just... not be sad," he suggested, genuinely puzzled by her melancholy.

"You could just... stay still," she replied, equally puzzled by his constant motion.

He saw her suffering as a problem with solutions she refused to implement. She saw his optimism as avoidance of anything real.

But when his endless options led nowhere—when the opportunities dried up and the network failed—she was still there. Steady. Not offering solutions. Just present.

"How do you do this?" he asked, finally still, finally stuck. "How do you just... sit with it?"

"Practice," she said simply. "Years of learning that some things can't be fixed. Only felt."

He tried. It was harder than any hustle.

And when her suffering threatened to drown her, he was there with options she hadn't seen—doors she hadn't known existed.

"You don't have to stay stuck," he offered gently.

"Sometimes stuck is where the art comes from."

"Sometimes. But not always."

She learned from his lightness; he learned from her depth. Together, they built a life that held both—practical enough to survive, deep enough to matter.`
  },
  // Story 2: SP Four + SO Seven
  {
    old: `The SP Four creates privately—reserved, enduring, working through pain. The SO Seven entertains groups—bringing excitement, ideas, energy. Maximum contrast: Four's private depth, Seven's public lightness. Four may find Seven's social energy exhausting and shallow. Seven may find Four's withdrawal boring and heavy. But Four could ground Seven's dispersed energy, and Seven could bring lightness to Four's heaviness.`,
    new: `She created in solitude, transforming sorrow into beauty that no one would see until she chose. He entertained the world, sparkling in every crowd, leaving a trail of laughter and half-finished ideas.

"Come out with us!" he called through her studio door. "Life is happening!"

"Life is happening here too," she replied, not opening it. "You just can't hear it."

He found her incomprehensible—all that feeling, all that depth, wasted in isolation. She found him exhausting—all that energy, all that sparkle, avoiding anything real.

But one night, the party emptied out and the sparkle faded, and he found himself at her door.

"Everyone's gone," he said, surprisingly small.

"They always go. That's what people do."

"Not you."

"I never came in the first place."

She let him into her quiet world. He was stunned by what he found—not emptiness but fullness, not depression but depth.

"I didn't know silence could feel like this," he whispered.

"I didn't know company could feel like this," she admitted.

He brought light to her shadows. She brought weight to his air. The entertainer learned to be still; the hermit learned to play. Together, they found a rhythm—sometimes quiet, sometimes bright, always balanced.`
  },
  // Story 3: SP Four + SX Seven
  {
    old: `The SP Four endures and creates privately—reserved, self-contained. The SX Seven dives deep into fascinating things—focused intensity unusual for Sevens. More compatible than typical Four-Seven: Seven's depth can match Four's. If Four becomes one of Seven's fascinations, sustained connection is possible. Seven brings curiosity and depth; Four brings creative endurance. Risk: Seven's fascination eventually shifting.`,
    new: `She created with quiet persistence—one project for years, one vision refined endlessly. He dove deep into whatever fascinated him—not skimming the surface like other Sevens, but exploring thoroughly until the curiosity was satisfied.

She became his fascination.

"Tell me everything about your process," he said, arriving uninvited at her studio. "I want to understand how you sustain focus for so long."

"Why?" She was suspicious of enthusiasm.

"Because I've never met anyone who could. It's extraordinary."

His interest wasn't shallow—he genuinely wanted to understand. She let him watch, then participate, then collaborate. His curiosity illuminated aspects of her work she'd never noticed.

But she waited for him to lose interest. They always did.

"When do you move on?" she asked one night.

"What do you mean?"

"To the next fascination. When does my novelty wear off?"

He considered seriously. "I don't think you have a bottom. I keep going deeper and finding more."

"That's not how fascination works."

"Maybe it is when the person is genuinely inexhaustible."

She wasn't sure whether to believe him. But months turned to years, and his curiosity never faded—it just evolved. Different questions, deeper explorations, the same sustained focus.

He'd finally found something worth his depth. She'd finally found someone who wouldn't leave when the newness faded.`
  },
  // Story 4: SO Four + SP Seven
  {
    old: `The SO Four seeks belonging through uniqueness—standing out, being different. The SP Seven works networks for opportunities—creating options, gathering resources. Four differentiates; Seven connects. They might find unexpected complementarity: Four's uniqueness could be an asset in Seven's networks. Seven's connections could give Four the belonging they seek. But Four may find Seven's networking superficial. Seven may find Four's differentiation impractical.`,
    new: `She was the interesting one at every gathering—differentiated, unique, standing out by design. He was the connected one—knowing everyone, opening doors, making things happen.

"You could use your uniqueness," he said, seeing opportunity where she saw identity. "It's an asset."

"It's not an asset. It's who I am."

"Can't it be both?"

She resisted his commodification of her specialness. He resisted her impractical attachment to standing apart.

But when she needed the world to see her art, his connections delivered. And when he needed something real to offer his networks, her depth provided.

"I'm not just introducing you as a product," he promised. "I'm introducing you as the most interesting person I've ever met."

"And I'm not just tolerating your schmoozing. I'm watching someone build bridges I never could."

She found belonging through his connections—not by fitting in, but by being collected. He found depth through her differentiation—not by slowing down, but by appreciating what couldn't be networked.

"You make me visible," she admitted.

"You make me valuable," he replied. "Not just useful—actually valuable."

The unique and the connected, finally discovering that standing out and reaching out weren't opposites at all.`
  },
  // Story 5: SO Four + SO Seven
  {
    old: `Both socially engaged but differently. The SO Four seeks belonging through difference—being special, unique. The SO Seven seeks stimulation through connection—excitement, ideas, fun. Four is intense about social perception; Seven is light about social engagement. They might seem incompatible—Four taking social life seriously while Seven takes it playfully. But both understand social dynamics. Possible connection if Four lightens up and Seven goes deeper.`,
    new: `She navigated social worlds with serious purpose—seeking recognition for her uniqueness, curating her differentiated image. He floated through the same worlds with effortless joy—collecting stimulating connections, leaving laughter in his wake.

"It's not a game," she said, watching him charm another room.

"Everything's a game if you play it right."

"That's why nothing you do matters."

"That's why nothing you do feels good."

They clashed constantly—her weight against his lightness, her meaning against his fun. Until the night both their masks failed.

Her uniqueness didn't land; the room ignored her. His charm fell flat; the crowd moved on.

They found each other outside, refugees from their own strategies.

"Even specialness gets boring," she admitted.

"Even sparkle gets hollow," he agreed.

"What if we stopped performing?"

They tried it—together, just two people without roles. It was awkward. It was honest. It was better.

"I don't hate your lightness," she discovered. "I envy it."

"I don't hate your depth," he replied. "I need it."

She taught him that social engagement could have meaning. He taught her that meaning didn't require weight. Together, they found a way to belong that was both special and joyful—and finally, genuinely theirs.`
  },
  // Story 6: SO Four + SX Seven
  {
    old: `The SO Four seeks recognition for uniqueness in groups. The SX Seven focuses intense interest on particular things and people—depth unusual for Sevens. If Four captures Seven's fascination, powerful connection is possible—Seven's depth meeting Four's need to be seen as unique. But Four wants consistent recognition; Seven's intense interest may shift. Four may feel deeply seen—then suddenly not.`,
    new: `She wanted to be seen as unique—the recognized different one, special among the ordinary. He saw with extraordinary intensity—whoever fascinated him became his entire world. For a time.

When his fascination landed on her, it was like being illuminated by a spotlight she'd craved forever.

"You're unlike anyone I've ever met," he said, studying her with fierce attention.

"Really?" She basked in the recognition.

"Your particular combination of talent and pain and beauty—I could examine it forever."

She bloomed under his gaze. No one had ever looked so closely, appreciated so specifically. His interest validated everything she believed about her uniqueness.

Then she noticed him looking at someone else with the same intensity.

"I thought I was special," she said, crushed.

"You are. But so is she. And him. The world is full of fascinating people."

"Then I'm not unique. I'm just... next in line."

He heard the devastation he hadn't intended. "You're not a fascination to me. You're the fascination. The one that changes everything."

"How do I believe that?"

"Because I keep coming back. The others are interesting. You're essential."

She tested him, waited for the shift. It never came. His intensity evolved, deepened, but the focus remained.

"I've never stayed," he admitted one night. "You're the only one who makes staying more interesting than going."

The one who needed to be seen as unique had found the one who truly saw her that way—and stayed.`
  },
  // Story 7: SX Four + SP Seven
  {
    old: `The SX Four feels with overwhelming intensity—emotional, yearning, consuming. The SP Seven maintains practical freedom—resources, options, independence. Four's emotional demands meet Seven's freedom needs. Four may feel Seven doesn't match their depth. Seven may feel Four's intensity threatens carefully maintained independence. But Four's passion could give Seven something worth staying for, and Seven's groundedness could balance Four's intensity.`,
    new: `She loved with consuming intensity—all or nothing, total devotion demanded and offered. He loved with careful freedom—maintaining options, protecting independence, never quite surrendering.

"You're never fully here," she accused.

"You're always too here," he replied. "It's overwhelming."

"Love should be overwhelming."

"Love should be sustainable."

They couldn't find a rhythm. Her intensity made him want to run; his distance made her want to consume him entirely just to prove he could be held.

But when she needed help—real, practical help—he appeared with resources she hadn't known existed.

"I thought you were too detached to care," she said, surprised.

"I care. I just care efficiently."

"That's not how I understand caring."

"I know. I'm trying to learn your way. But you might need to learn mine too."

She tried demanding less. He tried giving more. Neither was natural, but both were possible.

"I can't be your only source of meaning," he said finally. "But I can be your most important one."

"I can't be free the way you are," she replied. "But I can make space for you to breathe."

Passion met practicality. Intensity met independence. Not a compromise—a creation. Something that held both depths and options, both devotion and freedom.`
  },
  // Story 8: SX Four + SO Seven
  {
    old: `The SX Four focuses intense emotion on intimate connection—depth, yearning, passion. The SO Seven entertains groups—social stimulation, fun, ideas. Four wants complete intimate focus; Seven needs social stimulation. Four may feel Seven is too dispersed, doesn't give enough attention. Seven may feel Four's demands interfere with needed social nourishment. Classic depth-breadth tension.`,
    new: `She wanted everything—all his attention, all his focus, all his presence concentrated on her alone. He wanted everyone—every party, every gathering, every stimulating connection the social world offered.

"You're never just with me," she said after another evening shared with his countless friends.

"I'm always with you," he protested. "You're always invited."

"Invited isn't chosen. I want to be the only one you want to be with."

"That's not how I work. I need people."

"I need depth."

They were impossible. Her jealousy of every social engagement. His claustrophobia at her exclusive demands. One wanted a universe; the other wanted a world of two.

But slowly, they found the edges. She came to his gatherings, saw the joy he radiated, understood it wasn't competition—it was nourishment. He came to her intimate evenings, discovered the depth she craved, realized it wasn't imprisonment—it was sanctuary.

"I can give you focus," he offered. "Not all the time, but sacred times. Just us."

"I can give you freedom," she conceded. "Not all the time, but trusted times. Without guilt."

They built a rhythm—breadth and depth alternating like breathing. His social world and her intimate world, not competing but completing.

"You're still my favorite," he whispered at a crowded party.

"I know," she smiled. "I can finally feel it."

Intense devotion met expansive connection. Neither fully satisfied, both fully loved. It was enough. It was more than enough.`
  },
  // Story 9: SX Four + SX Seven
  {
    old: `Both bring intensity to connection. The SX Four feels with consuming emotional depth—yearning, passionate, intense. The SX Seven focuses intensely on fascinating things—when interested, they're fully present. Potentially powerful connection: Four's depth meeting Seven's fascination. If Four captivates Seven's interest, the engagement is complete. But will Seven stay fascinated? Four risks being another abandoned fascination. Seven risks losing real depth through inconstancy.`,
    new: `She burned with emotional intensity—every feeling magnified, every connection life-or-death. He burned with fascinated intensity—whatever captured his interest received complete, focused devotion.

When they collided, it was explosive. His fascination landed on her; her intensity matched his.

"I've never met anyone like you," he said, examining her like a discovered treasure.

"Everyone says that," she replied. "Then they leave."

"I won't leave."

"They all say that too."

For months, she waited for his interest to shift—the pattern she knew, the abandonment she anticipated. He remained, fascinated not just by who she was but by who she was becoming.

"Why do you stay?" she finally asked.

"Because you're infinite. Every time I think I've understood you, there's more."

"And when you've seen it all?"

"Then I'll watch you become more. That's what living things do."

She tested him with her darkness. He met it with curiosity. She challenged him with her demands. He rose to meet them.

"I'm your most intense fascination," she realized.

"You're my only fascination that matters," he corrected. "The others were practice. You're the point."

Two intensities that should have burned each other out instead created a fire that sustained itself—passionate, fascinated, deep, and finally, unquestionably permanent.`
  }
];

let count = 0;
for (const r of replacements) {
  if (content.includes(r.old)) {
    content = content.replace(r.old, r.new);
    count++;
  } else {
    console.log('Could not find:', r.old.substring(0, 50) + '...');
  }
}

fs.writeFileSync(filePath, content);
console.log(`Applied ${count} of ${replacements.length} narrative replacements.`);
