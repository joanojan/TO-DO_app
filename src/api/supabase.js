//A RESTful endpoint for querying and managing your database.
const PROJECT_URL = 'https://ysvtdjwtvwdmahyaqunc.supabase.co'
//API key
//safe if you have enabled Row Level Security (RLS) for your tables and configured policies
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzdnRkand0dndkbWFoeWFxdW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4OTcwMjIsImV4cCI6MjAyNzQ3MzAyMn0.VBXwDxHo9Bxr58IDLmiTEPy5VEIxv2oLwYj6sTUkjws'

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(PROJECT_URL, API_KEY)
