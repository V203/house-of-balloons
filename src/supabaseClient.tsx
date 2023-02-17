
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://awhevatsqmdgabesfhto.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3aGV2YXRzcW1kZ2FiZXNmaHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4MDk3MjUsImV4cCI6MTk5MDM4NTcyNX0.Nfc4ck9fY7uiA3T8XLfwBno2bsWiZDNk5quHfYvFenY'
export const supabase = createClient(supabaseUrl, supabaseKey);




