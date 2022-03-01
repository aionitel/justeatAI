import { atom } from "recoil";

export const calorieAtom = atom({
  key: 'calories',
  default: 2000 as number
})

export const currPageAtom = atom({
  key: 'currPage',
  default: 'Home'
})