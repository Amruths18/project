# 🔧 Fix Connection Issues

## Current Problem
- ❌ API requests failing with "TypeError: Failed to fetch"
- ❌ Connection test failing 
- ❌ Supabase edge function not accessible

## ✅ Solution Steps

### 1. Start Supabase Local Environment
```bash
# Make sure you have Supabase CLI installed
npm install -g supabase

# Start local development stack
supabase start
```

This will:
- Start PostgreSQL on port 54322
- Start API Gateway on port 54321
- Start Supabase Studio on port 54323

### 2. Deploy Edge Function
```bash
# Deploy your server function
supabase functions deploy server
```

### 3. Verify Services Are Running
```bash
# Check status
supabase status

# You should see services running like:
# API URL: http://127.0.0.1:54321
# DB URL: postgresql://postgres:postgres@127.0.0.1:54322/postgres
# Studio URL: http://127.0.0.1:54323
```

### 4. Test Your Environment
```bash
# Check if your function is accessible
curl http://127.0.0.1:54321/functions/v1/make-server-e0083ddc/health

# Should return: {"status":"ok","message":"AI Career Intelligence API is running"}
```

### 5. Start Your App
```bash
npm run dev
```

## 🚨 If Supabase Start Fails

### Option A: Reset Supabase
```bash
supabase stop
supabase start --ignore-health-check
```

### Option B: Use Docker Reset
```bash
# Stop and remove containers
supabase stop
docker system prune -f

# Start fresh
supabase start
```

### Option C: Manual Docker Setup
```bash
# If supabase CLI has issues, start postgres manually
docker run -d \
  --name supabase_db \
  -p 54322:5432 \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_DB=postgres \
  postgres:15-alpine
```

## 🌐 Alternative: Use Production Supabase

If local development keeps failing, switch to production:

### Update .env.local:
```env
VITE_SUPABASE_URL=https://jqqlnejcbsvboauouhvk.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxcWxuZWpjYnN2Ym9hdW91aHZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyNjYxNjQsImV4cCI6MjA3Mzg0MjE2NH0.ATXTGtmOsP3xzxGboCrfQU2JOeCofQ9jGMmeKVA0ReU
```

### Deploy to production:
```bash
supabase functions deploy server --project-ref jqqlnejcbsvboauouhvk
```

## 🎯 Quick Test

After fixing, your Dashboard should show:
- ✅ API Server: Connected
- ✅ Database: Connected  
- 🌐 Environment: Local (or Production)