# 🚀 AI Career Intelligence Platform - Setup Instructions

## 🔧 **Environment Error Fixed!**
- ✅ **Environment Variables**: Safe access implemented with fallbacks
- ✅ **Configuration**: Centralized in `/utils/env.ts`
- ✅ **API Integration**: Updated to handle missing import.meta.env
- ✅ **Connection Monitoring**: Real-time status in dashboard

## 🏗️ Quick Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Supabase Locally (Recommended for Development)
```bash
# Install Supabase CLI if you haven't already
npm install -g supabase

# Start local Supabase services
supabase start
```

This will start:
- 🗄️ **PostgreSQL Database** on `localhost:54322`  
- 🔗 **API Gateway** on `localhost:54321`
- 🎨 **Supabase Studio** on `localhost:54323`
- 📧 **Email Testing** on `localhost:54324`

### 3. Deploy Edge Functions
```bash
supabase functions deploy server
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Verify Connection
- Open your application at `http://localhost:5173`
- Check the **Dashboard** tab
- Look for the **Connection Status** card - it should show "Connected" ✅

## 🌐 For Production Supabase

If you want to use your existing production Supabase project instead:

1. **Update `.env.local`**:
   ```env
   VITE_SUPABASE_URL=https://jqqlnejcbsvboauouhvk.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxcWxuZWpjYnN2Ym9hdW91aHZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyNjYxNjQsImV4cCI6MjA3Mzg0MjE2NH0.ATXTGtmOsP3xzxGboCrfQU2JOeCofQ9jGMmeKVA0ReU
   ```

2. **Deploy Edge Functions to Production**:
   ```bash
   supabase functions deploy server --project-ref jqqlnejcbsvboauouhvk
   ```

## 🔧 Troubleshooting

### Connection Issues?
1. Check the **Connection Status** card on your dashboard
2. Ensure Supabase services are running: `supabase status`
3. Verify your `.env.local` file has the correct values
4. Check browser console for error messages

### Edge Function Deployment Issues?
1. Make sure you're logged in: `supabase login`
2. Check function logs: `supabase functions logs server`
3. Verify your project reference is correct

## 📊 What's Working Now

Your platform includes:
- ✅ **Resume Analysis** with AI scoring
- ✅ **Job Matching** with personalized recommendations  
- ✅ **Career Path Guidance** with AI insights
- ✅ **Interview Assistant** with practice sessions
- ✅ **Real-time Connection Monitoring**

## 🎯 Next Steps

Once connected, you can:
1. Upload a resume to test the analysis feature
2. Set job preferences to get personalized matches
3. Try the interview practice tool
4. Explore AI career recommendations

---
**Need Help?** Check the Connection Status card on your dashboard - it will show you exactly what's working and what needs attention!