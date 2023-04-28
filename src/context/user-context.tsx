import * as React from 'react'

type Action = { type: 'set'; payload: { name: string } }
type Dispatch = (action: Action) => void
type State = { name: string }
type UserProviderProps = { children: React.ReactNode }

const UserStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function userReducer(state: State, action: Action) {
  switch (action.type) {
    case 'set': {
      return { name: action.payload.name }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function UserProvider({ children }: UserProviderProps) {
  const [state, dispatch] = React.useReducer(userReducer, { name: '' })

  const value = { state, dispatch }
  return (
    <UserStateContext.Provider value={value}>
      {children}
    </UserStateContext.Provider>
  )
}

function useUser() {
  const context = React.useContext(UserStateContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export { UserProvider, useUser }
