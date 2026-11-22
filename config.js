// STARBEAM — настройки бортового журнала пилотов (Supabase).
// Supabase → Project Settings → API: «Project URL» и ключ «anon public».
// anon-ключ публичный по замыслу Supabase: таблица закрыта, сайт может только вызвать регистрацию и счётчики.
// НИКОГДА не вставляй сюда service_role ключ.
// Пока поля пустые, сайт работает, а кнопка регистрации показывает «скоро откроется».
window.STARBEAM_CONFIG = {
  SUPABASE_URL: '',       // например 'https://abcdefghijkl.supabase.co'
  SUPABASE_ANON_KEY: '',  // длинная строка, начинается с eyJ...
};
