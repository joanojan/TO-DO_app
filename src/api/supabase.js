//A RESTful endpoint for querying and managing your database.

//Vite exposes env variables on the special import.meta.env object.
const PROJECT_URL = import.meta.env.VITE_SUPABASE_URL
const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(PROJECT_URL, API_KEY)
