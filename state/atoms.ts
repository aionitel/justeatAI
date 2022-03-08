import { atom } from "recoil";

export const calorieAtom = atom({
  key: 'calories',
  default: 2000 as number
})

export const currPageAtom = atom({
  key: 'currPage',
  default: 'Home' as string
})

export const predictionAtom = atom({
  key: 'currPrediction',
  default: null as string | null
})

export const photoAtom = atom({
  key: 'currPhoto',
  default: '' as string | null
})