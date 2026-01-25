/**
 * Dao Tradition Types
 *
 * Data structures for integrating Taoist/Daoist wisdom with the Enneagram.
 * Based on David Hiley's "The Enneagram and the Tao Te Ching" and
 * Dr. David Daniels' work on the Three Life Energies.
 */

export type DaoEnergy = 'yin' | 'yang' | 'yin-yang';

export type HexadPosition = 1 | 4 | 2 | 8 | 5 | 7;
export type TrianglePosition = 3 | 6 | 9;
export type EnneagramPoint = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface WuWeiPractice {
  typeNumber: EnneagramPoint;
  corePractice: string;
  description: string;
  challenge: string;
  yinYangBalance: string;
  dailyPractice: string;
  quote?: string;
}

export interface TTCChapterMapping {
  chapter: number;
  title: string;
  keyVerse: string;
  enneagramPoint: EnneagramPoint;
  stage: number; // 1-9 column in matrix
  theme: string;
  reflection: string;
}

export interface HexadJourneyStep {
  position: HexadPosition;
  chapterRange: string;
  theme: string;
  teaching: string;
  transition: string;
}

export interface DaoTypeProfile {
  typeNumber: EnneagramPoint;
  energy: DaoEnergy;
  energyDescription: string;
  coreChallenge: string;
  wuWeiPath: string;
  yinQuality: string;
  yangQuality: string;
  balancePractice: string;
  ttcChapters: number[]; // The 9 chapters mapped to this type
  keyTeaching: string;
}

export interface DaoOverview {
  title: string;
  introduction: string;
  threeEnergies: {
    yin: { types: EnneagramPoint[]; description: string; quality: string };
    yang: { types: EnneagramPoint[]; description: string; quality: string };
    yinYang: { types: EnneagramPoint[]; description: string; quality: string };
  };
  hexadPath: string;
  innerTriangle: string;
  wuWeiEssence: string;
}

export interface DaoTradition {
  id: 'dao';
  name: string;
  overview: DaoOverview;
  typeProfiles: DaoTypeProfile[];
  wuWeiPractices: WuWeiPractice[];
  ttcChapters: TTCChapterMapping[];
  hexadJourney: HexadJourneyStep[];
}
