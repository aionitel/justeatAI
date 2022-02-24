import { atom } from "recoil";

const calorieAtom = atom({
  key: 'calories',
  default: 2000 as number
})

export default calorieAtom