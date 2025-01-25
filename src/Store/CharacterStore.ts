import { create } from 'zustand'
import { ClassData } from '../Types/classTypes'
import { AncestryData } from '../Types/AncestryTypes'
import CharacterSheet from '../Pages/CharacterSheet'

interface CharacterSheet {
    class?: ClassData | null,
    ancestry?: AncestryData | null
}

interface CharacterStore {
    characterSheet : CharacterSheet

    setClass: (classData: ClassData | null) => void,
    setAncestry: (ancestryData: AncestryData | null) => void, 
    resetCharacterSheet: () => void
}

export const useCharacterStore = create<CharacterStore>((set) => ({
    characterSheet: {},
    
    setClass: (classData) => set(state => ({
      characterSheet: {
        ...state.characterSheet,
        class: classData
      }
    })),
    
    setAncestry: (ancestryData) => set(state => ({
      characterSheet: {
        ...state.characterSheet,
        ancestry: ancestryData
      }
    })),
    
    resetCharacterSheet: () => set({ characterSheet: {} })
  }))


