const supa = require('@supabase/supabase-js');

const supaUrl = 'https://qyczohhseivxidmbqvhl.supabase.co';
const supaAnonKey = 'sb_publishable_f0grh04iyQShajp0SVU1Gw_mYhV3SjD';

const supabase = supa.createClient(supaUrl, supaAnonKey);

module.exports = supabase;