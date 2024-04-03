//A RESTful endpoint for querying and managing your database.
const PROJECT_URL = 'https://ysvtdjwtvwdmahyaqunc.supabase.co'
//API key
//safe if you have enabled Row Level Security (RLS) for your tables and configured policies

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(PROJECT_URL, API_KEY)
