import type { Instinct, InstinctType } from '../../types';

export const instincts: Instinct[] = [
  {
    code: 'sp',
    name: 'Self-Preservation',
    fullName: 'Self-Preservation Instinct',
    focus: 'Safety, resources, comfort, health, and material security',
    drivingQuestion: 'Am I safe and secure? Do I have enough?',
    description: `The Self-Preservation instinct focuses on physical survival and wellbeing. People with
SP as dominant are primarily concerned with having adequate resources, maintaining health, ensuring
safety, and creating comfortable environments. They are practical and grounded, often excellent at
managing material affairs. They tend to be more introverted, cautious about taking risks that could
threaten security, and focused on building a stable foundation.`,
    keywords: [
      'Security', 'Resources', 'Comfort', 'Health', 'Home',
      'Survival', 'Practical', 'Grounded', 'Self-care', 'Boundaries',
      'Material', 'Routine', 'Conservation', 'Protection', 'Physical'
    ]
  },
  {
    code: 'so',
    name: 'Social',
    fullName: 'Social Instinct',
    focus: 'Belonging, status, group dynamics, and social impact',
    drivingQuestion: 'Do I belong? What is my role in the group?',
    description: `The Social instinct focuses on group dynamics, belonging, and social participation.
People with SO as dominant are primarily concerned with their place in groups, their contribution
to community, status within social hierarchies, and connecting people with each other. They are
often good at reading social dynamics, building networks, and understanding how groups function.
They tend toward involvement in causes, communities, and collective activities.`,
    keywords: [
      'Belonging', 'Status', 'Community', 'Groups', 'Connection',
      'Participation', 'Contribution', 'Recognition', 'Networking', 'Causes',
      'Hierarchy', 'Tribe', 'Social', 'Collective', 'Influence'
    ]
  },
  {
    code: 'sx',
    name: 'Sexual',
    fullName: 'Sexual/One-to-One Instinct',
    focus: 'Intensity, bonding, attraction, and transmissive energy',
    drivingQuestion: 'Am I connected? Is this alive and vital?',
    description: `The Sexual (or One-to-One) instinct focuses on intensity, chemistry, and deep
connection with individuals. This isn't only about sexuality but about vital energy, fusion, and
transformative encounters. People with SX as dominant seek intense experiences and connections.
They are drawn to edge experiences, passionate bonds, and anything that feels alive. They tend to
have strong magnetism and seek depth over breadth in relationships.`,
    keywords: [
      'Intensity', 'Chemistry', 'Passion', 'Fusion', 'Attraction',
      'Vitality', 'Magnetism', 'Bonding', 'Energy', 'Edge',
      'Transformation', 'Intimate', 'Charisma', 'One-to-one', 'Depth'
    ]
  }
];

export const getInstinctByCode = (code: InstinctType): Instinct | undefined => {
  return instincts.find(i => i.code === code);
};

export const getInstinctName = (code: InstinctType): string => {
  const instinct = instincts.find(i => i.code === code);
  return instinct?.name ?? '';
};

export const parseInstinctStack = (stack: string): InstinctType[] => {
  return stack.split('/') as InstinctType[];
};

export const getBlindSpot = (stack: string): InstinctType | undefined => {
  const parts = parseInstinctStack(stack);
  const allInstincts: InstinctType[] = ['sp', 'so', 'sx'];
  return allInstincts.find(i => !parts.includes(i));
};

export const instinctStackDescriptions: Record<string, string> = {
  'sp/so': 'Self-Preservation dominant with Social secondary. Security through community involvement. The blind spot is Sexual—may struggle with intense one-to-one connections.',
  'sp/sx': 'Self-Preservation dominant with Sexual secondary. Security through intimate bonds. The blind spot is Social—may be less concerned with group belonging.',
  'so/sp': 'Social dominant with Self-Preservation secondary. Belonging through practical contribution. The blind spot is Sexual—may miss depth of individual chemistry.',
  'so/sx': 'Social dominant with Sexual secondary. Belonging through charismatic connection. The blind spot is Self-Preservation—may neglect practical self-care.',
  'sx/sp': 'Sexual dominant with Self-Preservation secondary. Intensity grounded in security. The blind spot is Social—may be indifferent to group dynamics.',
  'sx/so': 'Sexual dominant with Social secondary. Intensity seeking audience. The blind spot is Self-Preservation—may neglect material and health needs.'
};
