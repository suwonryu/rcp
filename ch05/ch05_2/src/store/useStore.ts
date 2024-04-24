import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './rootReducer'
import {buildGetDefaultMiddleware} from '@reduxjs/toolkit/dist/getDefaultMiddleware'

const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: buildGetDefaultMiddleware => buildGetDefaultMiddleware()
  })
  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
