// ============================================
// LAYER 1: Core Structural Elements
// ============================================

export type TypeNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type CenterType = 'gut' | 'heart' | 'head';
export type CenterEmotion = 'anger' | 'shame' | 'fear';

export interface EnneagramType {
  number: TypeNumber;
  name: string;
  coreFear: string;
  coreDesire: string;
  center: CenterType;
  briefDescription: string;
  keyMotivations: string[];
}

export interface Center {
  name: CenterType;
  displayName: string;
  types: TypeNumber[];
  coreEmotion: CenterEmotion;
  focus: string;
  description: string;
}

export type WingVariant = `${TypeNumber}w${TypeNumber}`;

export interface Wing {
  type: TypeNumber;
  wing: TypeNumber;
  variant: WingVariant;
  name: string;
  description: string;
  characteristics: string[];
}

// ============================================
// LAYER 2: Motivation & Emotional Mechanics
// ============================================

export interface ViceVirtue {
  type: TypeNumber;
  vice: string;
  viceDescription: string;
  virtue: string;
  virtueDescription: string;
}

export interface Fixation {
  type: TypeNumber;
  name: string;
  cognitiveDistortion: string;
  innerVoice: string;
  description: string;
}

export interface HolyIdea {
  type: TypeNumber;
  name: string;
  liberatingTruth: string;
  description: string;
  realization: string;
}

// ============================================
// LAYER 3: Dynamic Movement
// ============================================

export interface IntegrationPath {
  type: TypeNumber;
  movesTo: TypeNumber;
  gains: string[];
  description: string;
  practices: string[];
}

export interface DisintegrationPath {
  type: TypeNumber;
  movesTo: TypeNumber;
  exhibits: string[];
  description: string;
  warningSigns: string[];
}

// ============================================
// LAYER 4: Instinctual Architecture
// ============================================

export type InstinctType = 'sp' | 'so' | 'sx';
export type InstinctStack = `${InstinctType}/${InstinctType}` | `${InstinctType}/${InstinctType}/${InstinctType}`;

export interface Instinct {
  code: InstinctType;
  name: string;
  fullName: string;
  focus: string;
  drivingQuestion: string;
  description: string;
  keywords: string[];
}

export interface Subtype {
  type: TypeNumber;
  instinct: InstinctType;
  name: string;
  ichazoTitle: string;
  description: string;
  characteristics: string[];
  blindSpots: string[];
  growthPath: string;
}

// ============================================
// LAYER 5: Developmental Dimensions
// ============================================

export type HealthLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type HealthState = 'healthy' | 'average' | 'unhealthy';

export interface LevelOfDevelopment {
  level: HealthLevel;
  state: HealthState;
  type: TypeNumber;
  title: string;
  description: string;
  characteristics: string[];
  innerExperience: string;
}

export interface DefenseMechanism {
  type: TypeNumber;
  name: string;
  description: string;
  example: string;
  inAction: string;
}

// ============================================
// LAYER 6: Relational & Behavioral
// ============================================

export interface Shadow {
  type: TypeNumber;
  deniedAspects: string[];
  projectsOntoOthers: string;
  innerCritique: string;
  shadowWork: string[];
}

export interface TypeCompatibility {
  type1: TypeNumber;
  type2: TypeNumber;
  overallScore: number; // 1-10
  strengths: string[];
  challenges: string[];
  growthOpportunities: string[];
  communicationTips: string[];
}

// ============================================
// LAYER 7: Advanced Groupings
// ============================================

export type TritypeCode = `${TypeNumber}${TypeNumber}${TypeNumber}`;

export interface Tritype {
  code: TritypeCode;
  headType: TypeNumber;
  heartType: TypeNumber;
  gutType: TypeNumber;
  archetype: string;
  description: string;
  coreDrivers: string[];
}

export type HarmonicGroup = 'positive_outlook' | 'competency' | 'reactive';

export interface HarmonicGroupInfo {
  name: HarmonicGroup;
  displayName: string;
  types: TypeNumber[];
  responseToProblems: string;
  description: string;
  characteristics: string[];
}

export type HornevianGroup = 'assertive' | 'compliant' | 'withdrawn';

export interface HornevianGroupInfo {
  name: HornevianGroup;
  displayName: string;
  types: TypeNumber[];
  socialMovement: string;
  description: string;
  characteristics: string[];
}

export type ObjectRelationsTriad = 'frustration' | 'rejection' | 'attachment';

export interface ObjectRelationsInfo {
  name: ObjectRelationsTriad;
  displayName: string;
  types: TypeNumber[];
  earlyPattern: string;
  description: string;
  compensatoryBehavior: string;
}

// ============================================
// LAYER 8: Somatic & Energetic
// ============================================

export interface BodyPattern {
  type: TypeNumber;
  signature: string;
  tensionAreas: string[];
  energyPattern: string;
  groundingPractices: string[];
  somaticExercises: string[];
}

// ============================================
// Composite Types (Full Profile)
// ============================================

export interface FullTypeData {
  core: EnneagramType;
  wings: Wing[];
  viceVirtue: ViceVirtue;
  fixation: Fixation;
  holyIdea: HolyIdea;
  integration: IntegrationPath;
  disintegration: DisintegrationPath;
  subtypes: Subtype[];
  levels: LevelOfDevelopment[];
  defenseMechanism: DefenseMechanism;
  shadow: Shadow;
  bodyPattern: BodyPattern;
  harmonicGroup: HarmonicGroup;
  hornevianGroup: HornevianGroup;
  objectRelations: ObjectRelationsTriad;
}

export interface UserProfile {
  id: string;
  coreType: TypeNumber;
  wing: WingVariant;
  instinctStack: InstinctStack;
  tritype?: TritypeCode;
  createdAt: Date;
  updatedAt: Date;
  notes: string[];
  savedComparisons: Array<{ type1: TypeNumber; type2: TypeNumber }>;
}

// ============================================
// UI State Types
// ============================================

export type ViewMode = 'circle' | 'diagrams' | 'compare' | 'detail' | 'quiz' | 'profile' | 'transcendence';
export type CircleLayer = 'basic' | 'dynamics' | 'groups' | 'subtypes';
export type DiagramType = 'centers' | 'triads' | 'relationships';

export interface AppState {
  viewMode: ViewMode;
  circleLayer: CircleLayer;
  selectedType: TypeNumber | null;
  compareTypes: [TypeNumber, TypeNumber] | null;
  selectedSubtype: InstinctType | null;
  userProfile: UserProfile | null;
}
