export interface ClassData {
  _id: string;
  img: string;
  name: string;
  system: {
    ancestryFeatLevels: {
      value: number[];
    };
    attacks: {
      advanced: number;
      martial: number;
      other?: {
        name: string;
        rank: number;
      };
      simple: number;
      unarmed: number;
    };
    classFeatLevels: {
      value: number[];
    };
    defenses: {
      heavy: number;
      light: number;
      medium: number;
      unarmored: number;
    };
    description: {
      value: string;
    };
    generalFeatLevels: {
      value: number[];
    };
    hp: number;
    items: {
      [key: string]: {
        img: string;
        level: number;
        name: string;
        uuid: string;
      }
    };
    keyAbility: {
      value: string[];
    };
    perception: number;
    publication: {
      license: string;
      remaster: boolean;
      title: string;
    };
    rules: Array<{
      key: string;
      mode: string;
      path: string;
      value: number;
    }>;
    savingThrows: {
      fortitude: number;
      reflex: number;
      will: number;
    };
    skillFeatLevels: {
      value: number[];
    };
    skillIncreaseLevels: {
      value: number[];
    };
    spellcasting: number;
    trainedSkills: {
      additional: number;
      value: string[];
    };
    traits: {
      rarity: string;
      value: string[];
    };
  };
  type: string;
}