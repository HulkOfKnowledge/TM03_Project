# Creduman - Quick Start Guide

## 🚀 Installation (5 minutes)

### 1. Install Dependencies
```bash
# Next.js
npm install

# Python service
cd credit-intelligence-service
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cd ..
```

### 2. Configure Environment Variables
```bash
# Copy templates
cp .env.example .env
cp credit-intelligence-service/.env.example credit-intelligence-service/.env

# Edit .env files with your credentials
```

**Required Credentials:**
- Supabase: URL, anon key, service role key
- Flinks: Customer ID, instance name
- Generate secure secrets for API keys and webhook secrets

### 3. Set Up Database
```bash
# If using Supabase CLI
npx supabase link --project-ref YOUR_PROJECT_REF
npx supabase db push

# Or manually: Run SQL in Supabase dashboard
# File: supabase/migrations/20260129000000_initial_schema.sql
```

### 4. Install UI Components
```bash
# Initialize shadcn/ui (select default options)
npx shadcn-ui@latest init

# Install essential components
npx shadcn-ui@latest add button card input label toast select tabs progress
```

### 5. Start Development Servers
```bash
# Terminal 1 - Next.js (port 3000)
npm run dev

# Terminal 2 - Python service (port 8000)
cd credit-intelligence-service
source venv/bin/activate  # Windows: venv\Scripts\activate
python main.py
```

Visit:
- **Next.js**: http://localhost:3000
- **Python API docs**: http://localhost:8000/docs

---

## 📋 Development Checklist

### Phase 1: Authentication (Week 1)
- [ ] Implement signup endpoint (`app/api/auth/signup/route.ts`)
- [ ] Implement login endpoint (`app/api/auth/login/route.ts`)
- [ ] Build signup UI (`app/signup/page.tsx`)
- [ ] Build login UI (`app/login/page.tsx`)
- [ ] Test authentication flow
- [ ] Implement logout

### Phase 2: User Profile & Onboarding (Week 1-2)
- [ ] Implement UserService methods (`services/user.service.ts`)
- [ ] Build onboarding flow (`app/onboarding/page.tsx`)
- [ ] Create profile update endpoint
- [ ] Test onboarding completion

### Phase 3: Flinks Integration (Week 2-3)
- [ ] Implement FlinksService methods (`services/flinks.service.ts`)
- [ ] Build connect card flow (API routes)
- [ ] Handle Flinks OAuth callback
- [ ] Implement data sync
- [ ] Test card connection

### Phase 4: Credit Data & Dashboards (Week 3-4)
- [ ] Build card dashboard UI (`app/card-dashboard/page.tsx`)
- [ ] Display connected cards
- [ ] Show credit metrics
- [ ] Implement sync functionality
- [ ] Add card management features

### Phase 5: Python Intelligence Service (Week 4-5)
- [ ] Implement CreditAnalyzer (`credit-intelligence-service/app/services/analyzer.py`)
- [ ] Implement PaymentRecommender
- [ ] Implement PayoffSimulator
- [ ] Build API routes
- [ ] Test Python endpoints

### Phase 6: Insights & Recommendations (Week 5-6)
- [ ] Integrate Python service with Next.js
- [ ] Display insights in dashboard
- [ ] Show payment recommendations
- [ ] Add payoff calculator
- [ ] Implement webhook handling

### Phase 7: Learning Platform (Week 6-7)
- [ ] Create learning modules (content)
- [ ] Build learn dashboard UI
- [ ] Implement progress tracking
- [ ] Add module viewer
- [ ] Test learning flow

### Phase 8: Polish & Testing (Week 8)
- [ ] Add loading states
- [ ] Implement error boundaries
- [ ] Add success notifications
- [ ] Write tests
- [ ] Performance optimization
- [ ] Security audit

---

## 🛠️ Common Commands

### Development
```bash
npm run dev              # Start Next.js dev server
npm run lint             # Run ESLint
npm run type-check       # TypeScript check
npm run format           # Format code with Prettier
```

### Database
```bash
npx supabase db push     # Apply migrations
npx supabase db reset    # Reset database (destructive!)
```

### Python Service
```bash
cd credit-intelligence-service
python main.py           # Start service
pytest                   # Run tests (TODO: add tests)
```

---

## 🔍 Key Files to Start With

### Implementing Authentication
1. `lib/validations.ts` - Validation schemas (already defined)
2. `app/api/auth/signup/route.ts` - Signup endpoint
3. `app/signup/page.tsx` - Signup UI
4. `services/user.service.ts` - User management

### Implementing Flinks
1. `types/flinks.types.ts` - Type definitions (already defined)
2. `services/flinks.service.ts` - Flinks service methods
3. `app/api/flinks/connect/route.ts` - Connection endpoint
4. `app/api/flinks/callback/route.ts` - OAuth callback

### Implementing Credit Intelligence
1. `credit-intelligence-service/app/services/analyzer.py` - Analysis logic
2. `credit-intelligence-service/app/api/analyze.py` - API endpoint
3. `services/credit-intelligence.service.ts` - Next.js client
4. `app/api/credit-intelligence/analyze/route.ts` - Integration endpoint

---

## 📚 Documentation

- **Main README**: `README.md`
- **Project Structure**: `PROJECT_STRUCTURE.md`
- **Python Service**: `credit-intelligence-service/README.md`
- **This Guide**: `QUICKSTART.md`

---

## 🐛 Troubleshooting

### "Module not found"
- Run `npm install` to install dependencies
- Check `tsconfig.json` paths configuration

### Database errors
- Verify Supabase credentials in `.env`
- Run migrations: `npx supabase db push`
- Check RLS policies are active

### Python service won't start
- Activate virtual environment
- Install dependencies: `pip install -r requirements.txt`
- Check port 8000 is not in use

### Supabase Auth errors
- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Check Supabase project is active
- Verify RLS policies on `user_profiles` table

---

## 💡 Tips

1. **Start Small**: Implement one feature at a time
2. **Use Types**: TypeScript types are already defined - use them!
3. **Follow TODOs**: Every file has TODO comments showing what to implement
4. **Test Often**: Test each endpoint as you build it
5. **Use shadcn/ui**: Pre-built accessible components
6. **Read the Docs**: Check service layer method signatures

---

## 🎯 Success Criteria

You'll know the skeleton is working when:
- ✅ Both servers start without errors
- ✅ You can navigate to all routes (empty pages are OK)
- ✅ Database tables exist with proper RLS
- ✅ Environment variables are loaded
- ✅ TypeScript compiles without errors
- ✅ Python service health check returns 200

---

**Ready to build Creduman! 🚀**
