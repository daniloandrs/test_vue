import { defineStore } from "pinia"

export type StoreState = {
  isLoading: boolean
  appIsMounted: boolean
  token: string|null
  navbar :Navbar
}

export type FixedStoreDefinition = {
  $patch: (payload: Partial<StoreState>) => void
} & StoreState

export const useStore = defineStore('session-store', {
  state(): StoreState {
    return {
      isLoading: false,
      appIsMounted: false,
      token: localStorage.getItem('token'),
      navbar : {
        title:''
      }
    }
  }
}) as () => FixedStoreDefinition


export type Navbar = {
  title : string
}