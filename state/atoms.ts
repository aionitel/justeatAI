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

interface PhotoAtom {
  uri: string,
  height: number,
  width: number,
  base64: any
}

export const photoAtom = atom({
  key: 'currPhoto',
  default: {} as PhotoAtom | null
})

export const themeAtom = atom({
  key: 'currTheme',
  default: 'dark' as string
})