// STARBEAM — настройки бортового журнала пилотов (Supabase).
// Supabase → Project Settings → API: «Project URL» и ключ «anon public».
// anon-ключ публичный по замыслу Supabase: таблица закрыта, сайт может только вызвать регистрацию и счётчики.
// НИКОГДА не вставляй сюда service_role или sb_secret_… ключ.
// Пока поля пустые, сайт работает, а кнопка регистрации показывает «скоро откроется».
window.STARBEAM_CONFIG = {
  SUPABASE_URL: 'https://fnbifhahghoblctjaosz.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_armXnP-GFS9xj7w69hOhqA_g-o3Yeni',  // публичный ключ (sb_publishable_… или старый eyJ…)
};   
