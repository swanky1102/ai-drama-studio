create table if not exists public.drama_projects (
 id uuid primary key default gen_random_uuid(),
 owner_id uuid not null references auth.users(id) on delete cascade,
 project_key text not null,
 project jsonb not null,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now(),
 unique(owner_id,project_key)
);
alter table public.drama_projects enable row level security;
drop policy if exists "Users can read own drama projects" on public.drama_projects;
drop policy if exists "Users can insert own drama projects" on public.drama_projects;
drop policy if exists "Users can update own drama projects" on public.drama_projects;
drop policy if exists "Users can delete own drama projects" on public.drama_projects;
create policy "Users can read own drama projects" on public.drama_projects for select using (auth.uid()=owner_id);
create policy "Users can insert own drama projects" on public.drama_projects for insert with check (auth.uid()=owner_id);
create policy "Users can update own drama projects" on public.drama_projects for update using (auth.uid()=owner_id) with check (auth.uid()=owner_id);
create policy "Users can delete own drama projects" on public.drama_projects for delete using (auth.uid()=owner_id);
create index if not exists drama_projects_owner_updated_idx on public.drama_projects(owner_id,updated_at desc);