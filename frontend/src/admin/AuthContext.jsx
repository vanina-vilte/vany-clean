import { createContext, useContext, useState } from 'react'
import { getToken, setToken, clearToken, login as loginRequest } from './api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setTokenState] = useState(getToken())

  const login = async (email, password) => {
    const jwt = await loginRequest(email, password)
    setToken(jwt)
    setTokenState(jwt)
  }

  const logout = () => {
    clearToken()
    setTokenState(null)
  }

  return (
    <AuthContext.Provider value={{ token, isAuthenticated: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
