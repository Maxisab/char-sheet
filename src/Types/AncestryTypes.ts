export interface AncestryData {
    _id: string;
    img: string;
    name: string;
    system: {
      additionalLanguages: {
        count: number;
        custom: string;
        value: string[];
      };
      boosts: {
        '0': { value: string[] };
        '1': { value: string[] };
        '2': { value: string[] };
      };
      description: {
        value: string;
      };
      flaws: {
        '0': { value: string[] };
      };
      hp: number;
      items?: Record<string, {
        img: string;
        level: number;
        name: string;
        uuid: string;
      }>;
      languages: {
        custom: string;
        value: string[];
      };
      publication: {
        license: string;
        remaster: boolean;
        title: string;
      };
      reach: number;
      rules?: Array<Record<string, unknown>>;
      size: string;
      speed: number;
      traits: {
        rarity: string;
        value: string[];
      };
      vision: string;
    };
    type: string;
  }