import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wltlnegvtihstdehrwhz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsdGxuZWd2dGloc3RkZWhyd2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMDg3MjcsImV4cCI6MjAxMjc4NDcyN30.zyqASnIofxeu_S2bBM2CKjad_Ikg1lBtnCQLENnHeJs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
