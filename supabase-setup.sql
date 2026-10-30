-- Run once in Supabase > SQL Editor
create table categories(id bigint generated always as identity primary key, name text unique not null);
create table products(
  id bigint generated always as identity primary key,
  title text not null, description text, price text,
  category_id bigint references categories(id) on delete set null,
  images text[] default '{}', affiliate_url text not null,
  created_at timestamptz default now());
alter table categories enable row level security;
alter table products enable row level security;
create policy "public read cats" on categories for select using (true);
create policy "public read products" on products for select using (true);
create policy "admin write cats" on categories for all to authenticated using (true) with check (true);
create policy "admin write products" on products for all to authenticated using (true) with check (true);
insert into storage.buckets(id,name,public) values('products','products',true);
create policy "public read images" on storage.objects for select using (bucket_id='products');
create policy "admin upload images" on storage.objects for insert to authenticated with check (bucket_id='products');
create policy "admin delete images" on storage.objects for delete to authenticated using (bucket_id='products');
