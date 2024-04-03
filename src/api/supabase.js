//A RESTful endpoint for querying and managing your database.
const PROJECT_URL = import.meta.env.VITE_SUPABASE_URL
//API key
const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(PROJECT_URL, API_KEY)
