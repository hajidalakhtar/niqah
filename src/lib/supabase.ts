import { createClient } from '@supabase/supabase-js'

// Environment variables - Anda perlu menambahkan ini ke .env atau astro.config.mjs
const supabaseUrl = "https://xnmmfylviqhuiqdxenpy.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhubW1meWx2aXFodWlxZHhlbnB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4MzI2ODcsImV4cCI6MjA3MzQwODY4N30.6klR2Sapl1KUXqaL21BI586xauv9LQ-D3Q50aNXi8yc"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types untuk database
export interface WeddingWish {
  id: number
  name: string
  message: string
  created_at: string
}
