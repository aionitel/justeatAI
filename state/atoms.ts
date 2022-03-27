import { atom } from "recoil";

// holds state for daily calories consumed
export const calorieAtom = atom({
  key: 'calories',
  default: 2000 as number
})

// holds state for current page user is on
export const currPageAtom = atom({
  key: 'currPage',
  default: 'Home' as string
})

// holds state for current prediction
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

// holds curent photo to be used for prediction
export const photoAtom = atom({
  key: 'currPhoto',
  default: {} as PhotoAtom | null
})

// neccesary for light and dark themes
export const themeAtom = atom({
  key: 'currTheme',
  default: 'light' as string
})