import type { BodyPattern, TypeNumber } from '../../types';

export const bodyPatterns: BodyPattern[] = [
  {
    type: 1,
    signature: 'Held, controlled energy with underlying tension',
    tensionAreas: [
      'Jaw (clenching, grinding)',
      'Shoulders (raised, tight)',
      'Lower back (bracing)',
      'Chest (held breath)',
      'Neck (stiff)'
    ],
    energyPattern: `Ones hold energy tightly throughout the body, especially in the gut center. There's
a quality of bracing or holding back, as if containing something that wants to burst out. The body
appears controlled, upright, and proper. Movement can be precise but rigid. The held anger often
manifests as chronic tension.`,
    groundingPractices: [
      'Deep belly breathing to release held tension',
      'Shaking or tremoring practices to discharge energy',
      'Allowing imperfect, spontaneous movement',
      'Dancing without choreography',
      'Progressive muscle relaxation'
    ],
    somaticExercises: [
      'Jaw massage and release exercises',
      'Shoulder rolls and releases',
      'Cat-cow stretches for spine flexibility',
      'Breathwork emphasizing full exhale',
      'Spontaneous movement without rules'
    ]
  },
  {
    type: 2,
    signature: 'Forward-reaching, open-hearted energy',
    tensionAreas: [
      'Upper back (from reaching)',
      'Arms and hands (from giving)',
      'Chest (overexpanded)',
      'Heart area (vulnerability)',
      'Feet (ungrounded from reaching out)'
    ],
    energyPattern: `Twos lead with the heart, literally leaning forward and reaching out. The chest is
often expanded, arms ready to embrace. There's a quality of pouring energy outward toward others.
The back of the body may be underused as attention flows forward. The energy is warm and enveloping
but may lack grounded containment.`,
    groundingPractices: [
      'Drawing energy back into the body',
      'Feeling the back body and spine',
      'Grounding through feet and legs',
      'Containing energy rather than dispersing it',
      'Receiving touch rather than always giving'
    ],
    somaticExercises: [
      'Exercises that strengthen the back',
      'Feeling your own back against a wall',
      'Drawing arms and energy back',
      'Standing firmly on both feet',
      'Self-massage and self-care practices'
    ]
  },
  {
    type: 3,
    signature: 'Upright, polished presentation energy',
    tensionAreas: [
      'Face (from maintaining expression)',
      'Core (from holding posture)',
      'Heart (armored)',
      'Throat (from voice control)',
      'Legs (driven but disconnected)'
    ],
    energyPattern: `Threes present a polished, successful body. The energy is directed outward for
impression management. There's often a disconnect between the presented body and felt experience.
The energy is upward and outward—rising, achieving, performing. Inner sensations may be ignored
in service of the image.`,
    groundingPractices: [
      'Feeling internal sensations without judging',
      'Moving without performing',
      'Dropping into the body rather than presenting it',
      'Allowing messiness and imperfection',
      'Connecting with authentic physical impulses'
    ],
    somaticExercises: [
      'Body scanning with acceptance',
      'Moving with eyes closed',
      'Releasing facial muscles',
      'Breathing into the heart space',
      'Movement without mirrors or audience'
    ]
  },
  {
    type: 4,
    signature: 'Dramatic, heart-centered, sometimes collapsed energy',
    tensionAreas: [
      'Chest (constricted or collapsed)',
      'Diaphragm (restricted breathing)',
      'Throat (from unexpressed emotion)',
      'Eyes (from intense feeling)',
      'Shoulders (drooping or dramatic)'
    ],
    energyPattern: `Fours carry energy primarily in the heart and emotional body. The posture may shift
between dramatic expression and collapsed withdrawal. There's often a quality of longing in the
body, reaching for something not present. The energy can be very intense or very low, rarely
neutral. The body expresses the inner emotional landscape.`,
    groundingPractices: [
      'Grounding through legs and feet',
      'Regular steady movement (walking, swimming)',
      'Connecting with the body\'s stability',
      'Finding equilibrium in the body',
      'Physical activities that require presence'
    ],
    somaticExercises: [
      'Standing firmly on both feet',
      'Feeling the ground\'s support',
      'Expansive breathing to lift collapsed chest',
      'Moving through neutral states',
      'Physical exercise that builds steadiness'
    ]
  },
  {
    type: 5,
    signature: 'Contracted, pulled-inward, head-dominant energy',
    tensionAreas: [
      'Neck (connecting head to body)',
      'Eyes (from intense focus)',
      'Upper chest (restricted breathing)',
      'Pelvis (disconnected)',
      'Jaw (from thinking)'
    ],
    energyPattern: `Fives pull energy up into the head and away from the body. There's often a
contracted quality, as if trying to take up less space. The body may seem like a vehicle for the
head rather than a source of knowing. Breathing tends to be shallow. The energy is pulled inward
and upward, away from grounding and from others.`,
    groundingPractices: [
      'Descending attention into the whole body',
      'Feeling legs, feet, pelvis, belly',
      'Physical engagement and exercise',
      'Touch and body-based connection',
      'Activities that require full embodiment'
    ],
    somaticExercises: [
      'Deep belly breathing',
      'Feeling the weight of the body',
      'Walking with attention on feet',
      'Physical activities (sports, dance, martial arts)',
      'Body-based meditation (body scan, yoga)'
    ]
  },
  {
    type: 6,
    signature: 'Alert, scanning, ready-to-respond energy',
    tensionAreas: [
      'Eyes (from scanning)',
      'Neck (turning to check)',
      'Shoulders (raised in alertness)',
      'Stomach (anxiety)',
      'Legs (ready to run or fight)'
    ],
    energyPattern: `Sixes carry vigilant energy in the body. There's often a quality of readiness—
muscles prepared to respond to threat. The eyes and head may be active, scanning the environment.
Counterphobic Sixes may have more forward, aggressive energy, while phobic Sixes may have more
constricted, retreating energy. Both carry anxiety in the body.`,
    groundingPractices: [
      'Relaxation practices to discharge anxiety',
      'Feeling safety in the body',
      'Grounding through the feet',
      'Slow, steady breathing',
      'Activities that build body confidence'
    ],
    somaticExercises: [
      'Progressive relaxation',
      'Grounding exercises (feeling supported)',
      'Martial arts (builds confidence)',
      'Slow, controlled movement',
      'Trauma-sensitive yoga'
    ]
  },
  {
    type: 7,
    signature: 'Light, mobile, scattered, upward energy',
    tensionAreas: [
      'Breath (shallow, rapid)',
      'Feet (ungrounded)',
      'Core (uncentered)',
      'Jaw (from talking)',
      'Upper body (energy concentrated)'
    ],
    energyPattern: `Sevens carry light, mobile energy that tends to move upward and outward. There's
a quality of readiness for the next thing, feet barely touching ground. The energy may scatter
in many directions rather than concentrating. The upper body and face may be very animated while
the lower body is underused. Stillness can feel uncomfortable.`,
    groundingPractices: [
      'Slowing down movement',
      'Feeling weight and gravity',
      'Staying with one sensation',
      'Grounding through feet and legs',
      'Completing movements before starting new ones'
    ],
    somaticExercises: [
      'Slow, grounded walking',
      'Holding still positions (standing, sitting)',
      'Deep breathing into the belly',
      'Activities requiring sustained focus',
      'Body-based practices that slow down (yin yoga, tai chi)'
    ]
  },
  {
    type: 8,
    signature: 'Expansive, grounded, takes-up-space energy',
    tensionAreas: [
      'Jaw (from holding back)',
      'Chest (armored)',
      'Arms (ready for action)',
      'Core (braced)',
      'Neck (thick, protected)'
    ],
    energyPattern: `Eights carry big, expansive energy that takes up space. The body is often grounded
and planted, ready for action or defense. There's a quality of moving against or through obstacles.
The chest may be armored, protecting the vulnerable heart. Energy is direct and forward. The body
expresses power and readiness.`,
    groundingPractices: [
      'Softening and releasing armor',
      'Gentle, receptive practices',
      'Allowing vulnerability in the body',
      'Receiving rather than always doing',
      'Quiet stillness'
    ],
    somaticExercises: [
      'Heart-opening stretches',
      'Soft, receptive breathing',
      'Gentle self-touch',
      'Restorative yoga',
      'Practices that cultivate tenderness'
    ]
  },
  {
    type: 9,
    signature: 'Diffuse, merged, low-intensity energy',
    tensionAreas: [
      'Belly (from numbing)',
      'Eyes (unfocused)',
      'Spine (underactivated)',
      'Core (slack)',
      'Legs (underused)'
    ],
    energyPattern: `Nines carry diffuse, spread-out energy that may merge with the environment. There's
often a quality of pleasant numbness or fog. The body may be comfortable but underactivated. Energy
tends to be steady and low-intensity. The boundaries of the body may feel unclear. There's often
a quality of sinking or settling.`,
    groundingPractices: [
      'Activating and energizing the body',
      'Feeling clear body boundaries',
      'Engaging with physical intensity',
      'Waking up physical sensations',
      'Taking up space deliberately'
    ],
    somaticExercises: [
      'Vigorous physical exercise',
      'Practices that build heat and intensity',
      'Core-strengthening exercises',
      'Walking briskly with purpose',
      'Activities that require alertness'
    ]
  }
];

export const getBodyPattern = (typeNumber: TypeNumber): BodyPattern | undefined => {
  return bodyPatterns.find(bp => bp.type === typeNumber);
};

export const getTensionAreas = (typeNumber: TypeNumber): string[] => {
  return bodyPatterns.find(bp => bp.type === typeNumber)?.tensionAreas ?? [];
};

export const getGroundingPractices = (typeNumber: TypeNumber): string[] => {
  return bodyPatterns.find(bp => bp.type === typeNumber)?.groundingPractices ?? [];
};

export const getSomaticExercises = (typeNumber: TypeNumber): string[] => {
  return bodyPatterns.find(bp => bp.type === typeNumber)?.somaticExercises ?? [];
};
