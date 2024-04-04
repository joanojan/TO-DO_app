import { supabase } from '@/api/supabase'

export const fetchActualUser = async () => {
  const { data } = await supabase.auth.getSession()
  return data?.session?.user || null
}

export const createNewUser = async (email, password) => {
  console.log(email, password)
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

  switch (error) {
    case '404':
      alert('This user does not exist')
      break
    case '403':
      alert('unauthorized, please contact admin@admin.com')
      break
    case '429':
      alert('There is an issue with too many request, sorry.')
      break
    default:
      console.log(error)
      alert('Unknown error: please try again')
  }

  if(!error) {
    alert('Yay - sign in success')
    return user
  }
}

export const logOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      throw new Error(error.message)
    }
    alert('See ya next time')
    return undefined
}
