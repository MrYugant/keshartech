-- Keshar Tech — enquiries table
-- Supabase Dashboard → SQL Editor → paste → Run

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 100),
  company text check (char_length(company) <= 120),
  email text not null check (char_length(email) <= 160),
  phone text check (char_length(phone) <= 20),
  service text not null check (char_length(service) <= 120),
  budget text check (char_length(budget) <= 60),
  message text not null check (char_length(message) between 20 and 5000),
  created_at timestamptz not null default now()
);

alter table public.enquiries enable row level security;

-- The website may only INSERT. It can never read, update or delete enquiries.
drop policy if exists "website can submit enquiries" on public.enquiries;
create policy "website can submit enquiries"
  on public.enquiries for insert
  to anon
  with check (true);

-- Signed-in team members can read enquiries from the Supabase dashboard or an admin tool.
drop policy if exists "team can read enquiries" on public.enquiries;
create policy "team can read enquiries"
  on public.enquiries for select
  to authenticated
  using (true);
