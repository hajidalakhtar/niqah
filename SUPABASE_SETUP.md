# Setup Supabase untuk Doa & Ucapan

## 1. Setup Project Supabase

1. Buka [supabase.com](https://supabase.com) dan buat akun atau login
2. Klik "New Project" dan isi detail project
3. Tunggu hingga project siap (biasanya 1-2 menit)

## 2. Buat Tabel Database

Buka SQL Editor di dashboard Supabase dan jalankan query berikut:

```sql
-- Buat tabel wedding_wishes
CREATE TABLE wedding_wishes (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Aktifkan Row Level Security (RLS)
ALTER TABLE wedding_wishes ENABLE ROW LEVEL SECURITY;

-- Buat policy untuk membaca data (semua orang bisa baca)
CREATE POLICY "Anyone can read wedding wishes" ON wedding_wishes
  FOR SELECT USING (true);

-- Buat policy untuk insert data (semua orang bisa kirim ucapan)
CREATE POLICY "Anyone can insert wedding wishes" ON wedding_wishes
  FOR INSERT WITH CHECK (true);

-- Buat index untuk optimasi query berdasarkan created_at
CREATE INDEX idx_wedding_wishes_created_at ON wedding_wishes(created_at DESC);
```

## 3. Setup Environment Variables

Buat file `.env` di root folder `undangan-astro/` dengan content:

```env
PUBLIC_SUPABASE_URL=your_supabase_url_here
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

**Cara mendapatkan URL dan Key:**
1. Buka dashboard Supabase project Anda
2. Klik "Settings" → "API"
3. Copy "Project URL" ke `PUBLIC_SUPABASE_URL`
4. Copy "anon public" key ke `PUBLIC_SUPABASE_ANON_KEY`

## 4. Struktur Data

Tabel `wedding_wishes` memiliki kolom:
- `id`: Primary key (auto increment)
- `name`: Nama pengirim ucapan (TEXT, required)
- `message`: Isi doa/ucapan (TEXT, required)  
- `created_at`: Timestamp otomatis saat data dibuat

## 5. Fitur yang Tersedia

✅ Form input nama dan pesan
✅ Validasi input wajib
✅ Simpan ke database Supabase
✅ Tampilkan daftar ucapan real-time
✅ Responsive design
✅ Loading states dan error handling
✅ Format tanggal Indonesia

## 6. Keamanan

- Row Level Security (RLS) diaktifkan
- Policy hanya mengizinkan read dan insert
- Tidak ada update atau delete untuk mencegah abuse
- Data ter-sanitize otomatis oleh Supabase

## 7. Testing

Setelah setup:
1. Jalankan `pnpm dev`
2. Buka website dan scroll ke section "Doa & Ucapan"
3. Coba isi form dan kirim ucapan
4. Periksa di Supabase dashboard → Table Editor → wedding_wishes

## Troubleshooting

**Error "Invalid API key":**
- Pastikan environment variables sudah benar
- Restart development server setelah menambah .env

**Error "relation does not exist":**
- Pastikan tabel `wedding_wishes` sudah dibuat via SQL Editor

**Data tidak muncul:**
- Cek di Supabase dashboard apakah data tersimpan
- Periksa browser console untuk error JavaScript
