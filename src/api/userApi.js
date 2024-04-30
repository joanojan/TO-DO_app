import { supabase } from '@/api/supabase'

export const fetchActualUser = async () => {
  const { data, error } = await supabase.auth.getSession()

  if (error) {
    throw new Error(error.message)
  }

  return data?.session?.user || null
}

export const createNewUser = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const logIn = async (email, password) => {
  const {
    data: { user },
    error
  } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    throw new Error(error.message)
  }

  return user
}

export const logOut = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    throw new Error(error.message)
  }

  return undefined
}

export const loginWithProvider = async (provider) => {
  const { user, error } = await supabase.auth.signInWithOAuth({
    provider: provider
  })
  if (error) {
    throw new Error(error.message)
  }
  return user
}

//TODO: CHECK THIS IS WORKING
export const resetPassword = async (email) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:5173/update-password'
    //redirectTo: 'https://todo-app-by-jvv.netlify.app/update-password',
  })
  if (error) {
    throw new Error(error.message)
  }
  return data || undefined
}
//Check that it works
export const updatePassword = async (newPassword) => {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword
  })
  if (error) {
    throw new Error(error.message)
  }
  return data || undefined
}

export const updateRecoveringPassword = async (isRecoveringPassword) => {
  const { error } = await supabase.auth.updateUser({
    data: {
      isRecoveringPassword: isRecoveringPassword
    }
  })
  if (error) {
    throw new Error(error.message)
  }
}

export const updateDarkModePreference = async (isDarkMode) => {
  const { error } = await supabase.auth.updateUser({
    data: {
      isDarkMode: isDarkMode
    }
  })
  if (error) {
    throw new Error(error.message)
  }
}