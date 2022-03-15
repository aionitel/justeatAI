import React from 'react'
import { View, Text, Button } from 'react-native'
import { useRecoilState } from 'recoil'
import { themeAtom } from '../../state/atoms'

const Settings = () => {
  const [currTheme, setCurrTheme] = useRecoilState(themeAtom)

  const switchTheme = () => {
    if (currTheme === 'light') {
      setCurrTheme('dark')
    } else {
      setCurrTheme('light')
    }
  }

  return (
    <Button title='Switch themes' onPress={() => switchTheme()} />
  )
}

export default Settings
