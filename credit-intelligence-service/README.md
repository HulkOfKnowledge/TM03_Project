# Credit Intelligence Service

Python FastAPI microservice for credit analysis and recommendations.

## 🚀 Quick Start

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Set Up Environment

```bash
cp .env.example .env
# Edit .env with your configuration
```

### Run Development Server

```bash
python main.py
```

The service will run on [http://localhost:8000](http://localhost:8000)

### API Documentation

Visit [http://localhost:8000/docs](http://localhost:8000/docs) for interactive API documentation (Swagger UI).

## 📡 API Endpoints

### Health Check
- `GET /health`: Check service health

### Credit Analysis
- `POST /api/v1/analyze`: Analyze credit data and generate insights

### Payment Recommendations
- `POST /api/v1/recommendations`: Get personalized payment recommendations

### Payoff Simulation
- `POST /api/v1/simulate-payoff`: Simulate loan payoff scenarios

## 🔐 Authentication

All endpoints (except `/` and `/health`) require API key authentication:

```
X-API-Key: your-api-key-here
```

## 🧪 Testing

```bash
# TODO: Add pytest configuration
pytest
```

## 🐳 Docker

```bash
# Build
docker build -t creduman-intelligence .

# Run
docker run -p 8000:8000 --env-file .env creduman-intelligence
```

## 📦 Project Structure

```
credit-intelligence-service/
├── app/
│   ├── api/              # API routes
│   │   ├── analyze.py
│   │   ├── recommendations.py
│   │   └── simulate.py
│   ├── core/             # Configuration
│   │   ├── config.py
│   │   └── security.py
│   ├── models/           # Pydantic schemas
│   │   └── schemas.py
│   └── services/         # Business logic
│       ├── analyzer.py
│       ├── recommender.py
│       └── simulator.py
├── models/               # ML models (future)
├── main.py              # FastAPI application
├── requirements.txt     # Dependencies
└── Dockerfile          # Docker configuration
```

## 🔄 Integration with Next.js

The service communicates with the Next.js backend:

1. **Next.js → Python**: HTTP requests for analysis/recommendations
2. **Python → Next.js**: Webhooks for async results (future)

## 🛠️ TODO: Implementation

### Analyzer Service
- [ ] Implement rules-based credit scoring
- [ ] Generate multilingual insights
- [ ] Add alert prioritization logic

### Recommender Service
- [ ] Implement interest minimization strategy
- [ ] Implement score improvement strategy
- [ ] Implement balanced strategy
- [ ] Calculate impact projections

### Simulator Service
- [ ] Implement amortization calculations
- [ ] Generate multiple scenarios
- [ ] Handle edge cases

### ML Integration (Future)
- [ ] Train credit scoring model
- [ ] Train recommendation model
- [ ] Model versioning and deployment
- [ ] A/B testing framework

## 📊 Algorithm Details

### Credit Scoring (Rules-Based)
- Utilization: 35% weight
- Payment history: 30% weight
- Number of accounts: 20% weight
- Account age: 15% weight

### Payment Prioritization Strategies

**Minimize Interest:**
1. Sort by APR (highest first)
2. Pay minimums on all
3. Allocate extra to highest APR

**Improve Score:**
1. Sort by utilization (highest first)
2. Target <30% threshold
3. Balance across cards

**Balanced:**
- Weighted score: (utilization * 0.6) + (APR * 0.4)
- Optimize composite score

## 🔒 Security

- API key authentication
- Webhook signature verification (HMAC-SHA256)
- Input validation with Pydantic
- No PII stored (stateless service)

## 📝 Environment Variables

See `.env.example` for all configuration options.

## 📄 License

[Add license]
