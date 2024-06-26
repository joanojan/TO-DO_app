import { supabase } from '@/api/supabase'

export const fetchAllTasks = async () => {
  const { data, error } = await supabase.from('tasks').select('*')

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const addTask = async (userId, taskTitle) => {
  const { data, error } = await supabase.from('tasks').insert({
    user_id: userId,
    title: taskTitle
  }).select()

  if (error) {
    throw new Error(error.message)
  }

  return data[0]
}

export const editTask = async (taskId, newTitle) => {
  const { data, error } = await supabase
    .from('tasks')
    .update({ title: newTitle })
    .eq('id', taskId)
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data[0]
}

export const markAsCompleted = async (taskId) => {
  const { data, error } = await supabase
    .from('tasks')
    .update({ is_complete: true })
    .eq('id', taskId)
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data[0]
}

export const markAsNotCompleted = async (taskId) => {
  const { data, error } = await supabase
    .from('tasks')
    .update({ is_complete: false })
    .eq('id', taskId)
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data[0]
}

//Do you remember, we had an issue here with String?
//The mystery stll not solved. It's working both ways...
export const deleteTask = async (taskId) => {
  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', taskId)

    if (error) {
      throw new Error(error.message)
    }
}
