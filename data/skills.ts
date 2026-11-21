export interface SkillSpecTag {
  label: string;
  value: string;
}

export interface CapabilityCategory {
  id: string;
  code: string;
  title: string;
  tagline: string;
  statusBadge: {
    label: string;
    variant: "emerald" | "cyan" | "amber" | "purple";
  };
  technologies: string[];
  architectureHighlights: string[];
  specTags: SkillSpecTag[];
}

export const capabilityCategories: CapabilityCategory[] = [
  {
    id: "agentic-ai",
    code: "CAP_01 // AGENTIC AI & MCP",
    title: "Agentic AI & Model Context Protocol",
    tagline:
      "Autonomous agents, MCP Streamable HTTP servers, Bedrock extended thinking & real-time SSE streaming",
    statusBadge: {
      label: "● PROD DEPLOYED",
      variant: "emerald",
    },
    technologies: [
      "AWS Strands Agents SDK (strands-agents 1.52.0)",
      "Model Context Protocol (MCP)",
      "Amazon Bedrock (Claude 3.5 Sonnet / Opus 5.5)",
      "Amazon Nova Micro",
      "Adaptive Extended Thinking",
      "SSE Real-Time Streaming",
      "Qdrant & Milvus Vector Search",
      "LangChain & LlamaIndex",
    ],
    architectureHighlights: [
      "Stateless agent reconstruction from DynamoDB snapshots with gzip compression via strands-dynamodb-storage",
      "Standalone Fargate MCP server (Streamable HTTP transport, 15 tools, horizontal auto-scaling 1–3 tasks, no sticky sessions)",
      "SHA-256 hash pagination caching (16-char result_id, 5-min TTL, anti-poisoning validation)",
      "Automated Data Quality (DQ) hierarchy enrichment in MCP tools without redundant LLM agent roundtrips",
      "Closed-loop alert investigation write-back: agent writes structured markdown findings and summaries back to DynamoDB",
      "Runtime 7-section composite prompt assembler with dynamic industrial asset glossaries (~60 domain terms)",
    ],
    specTags: [
      { label: "transport", value: "streamable_http" },
      { label: "tools_count", value: "15" },
      { label: "stream_cadence", value: "60fps_buffer" },
      { label: "session_store", value: "gzip_dynamodb" },
    ],
  },
  {
    id: "cloud-distributed",
    code: "CAP_02 // CLOUD & DISTRIBUTED AWS",
    title: "Cloud Infrastructure & Distributed AWS",
    tagline:
      "Serverless orchestration, VPC Lattice routing, Step Functions Distributed Map & Python CDK",
    statusBadge: {
      label: "● PROD DEPLOYED",
      variant: "cyan",
    },
    technologies: [
      "AWS CDK (Python, 20+ Stacks)",
      "AWS Step Functions (Distributed Map)",
      "AWS Lambda (SnapStart, Durable SDK)",
      "AWS ECS Fargate (Container Sidecars)",
      "AWS VPC Lattice (Resource Gateways & HTTP Tasks)",
      "SageMaker Studio (Custom Linux AMD64 Kernels)",
      "AWS SQS (FIFO, Standard, DLQ)",
      "Amazon S3 & EventBridge",
      "Oracle Cloud Infrastructure (2x Certified Architect)",
      "Docker & Multi-Stage Builds",
      "Terraform",
    ],
    architectureHighlights: [
      "BatchTrainModel Step Functions with Distributed Map @ 50 concurrency reading model batches from S3 via S3JsonItemReader",
      "CDK VPC Lattice networking stack providing private routing from Step Functions HTTP Tasks to internal ALB & Fargate",
      "Hourly analytical export via AWS Lambda Durable Execution SDK with wait_for_condition (zero compute costs while waiting)",
      "SQS partial batch failure handling with batchItemFailures and Lambda SnapStart warm invocations",
      "Air-gapped SageMaker Studio environment with zero public egress, VPC endpoints, and custom Docker Linux AMD64 kernel",
      "Automated fallback DynamoUpdateItem tasks guaranteeing Step Functions jobs never get orphaned in running state",
    ],
    specTags: [
      { label: "sfn_concurrency", value: "50" },
      { label: "cdk_stacks", value: "20+" },
      { label: "lambda_start", value: "snapstart_<100ms" },
      { label: "cloud_certs", value: "2x_oci" },
    ],
  },
  {
    id: "runtime-languages",
    code: "CAP_03 // RUNTIMES & CORE CS",
    title: "Runtimes, Languages & Core CS",
    tagline:
      "High-throughput asynchronous services, low-overhead runtimes & algorithmic rigor",
    statusBadge: {
      label: "● PEAK 1563 LEETCODE",
      variant: "emerald",
    },
    technologies: [
      "Python 3.12 / 3.14 (Asyncio, uvloop, Celery)",
      "TypeScript 5.4+ / Node.js 22 LTS",
      "Go 1.22+ (Goroutines, Channels)",
      "FastAPI & Uvicorn",
      "Express 5",
      "aiohttp (Async Connection Pooling)",
      "SQL (Athena DDL, PostgreSQL, MySQL)",
      "C++ & Java",
    ],
    architectureHighlights: [
      "Asynchronous sensor data ingestion client with aiohttp shared connection pooling, backoff retries, and session leak prevention",
      "Multi-client WebSocket gateways with Socket.IO and cookie-based shared auth handshakes",
      "Shared session state synchronization across HTTP REST and real-time streaming sockets",
      "Strong algorithmic foundations with peak 1563 rating on LeetCode and zero-alloc parser design",
    ],
    specTags: [
      { label: "py_runtime", value: "3.12_asyncio" },
      { label: "node_runtime", value: "22_lts" },
      { label: "leetcode_peak", value: "1563" },
      { label: "async_driver", value: "uvloop" },
    ],
  },
  {
    id: "persistence-caching",
    code: "CAP_04 // PERSISTENCE & CACHE",
    title: "Data Persistence, Vector & Caching",
    tagline:
      "Single-Table DynamoDB, HNSW vector indexing, Redis distributed locks & E2EE persistence",
    statusBadge: {
      label: "● HIGH-THROUGHPUT",
      variant: "amber",
    },
    technologies: [
      "AWS DynamoDB (Single-Table Design, GSIs, Streams)",
      "PostgreSQL 16 + pgvector (HNSW Indexes)",
      "Redis (Streams, Pub/Sub, Distributed Locks)",
      "MongoDB (Compound Indexes, E2EE Envelope Storage)",
      "Amazon S3 (Presigned 15-min URLs, Multi-part)",
      "MySQL",
    ],
    architectureHighlights: [
      "DynamoDB Single-Table schema (BaseEntity, JOBS, SUMMARY#MODELS, atomic updates, and automatic TTL expiration)",
      "DynamoDB Streams NEW_AND_OLD_IMAGES event triggers for automated Bedrock LLM anomaly summaries",
      "Redis atomic sliding-window rate limiters, token buckets, and distributed session mutexes",
      "PostgreSQL HNSW semantic vector indexes for sub-10ms similarity search",
      "End-to-End Encryption (E2EE) envelope validation: stores ciphertext and wrapped keys without server decryption",
    ],
    specTags: [
      { label: "db_pattern", value: "single_table" },
      { label: "vector_idx", value: "hnsw" },
      { label: "cache_layer", value: "redis_streams" },
      { label: "cdc_stream", value: "ddb_streams" },
    ],
  },
  {
    id: "serialization-etl",
    code: "CAP_05 // SERIALIZATION & STREAMING ETL",
    title: "Serialization, Parsing & Streaming ETL",
    tagline:
      "PyArrow Parquet reconciliation, Pydantic v2 computed fields, orjson & industrial UOM engines",
    statusBadge: {
      label: "● ANALYTICAL SCALE",
      variant: "purple",
    },
    technologies: [
      "PyArrow (RecordBatch, Parquet Tables, Athena DDL)",
      "Pydantic v2 (@computed_field, Annotated Validators)",
      "orjson (Zero-Allocation Serialization)",
      "pint (Industrial UOM Registry, 30+ Unit Transforms)",
      "Pandas & NumPy",
    ],
    architectureHighlights: [
      "Dynamic cross-file schema reconciliation: promotes conflicting types (float to string) across heterogeneous DynamoDB rows with bounded memory",
      "Automatic Athena CREATE EXTERNAL TABLE DDL generation mapping PyArrow types to Athena SQL types",
      "30+ custom industrial sensor UOM conversions registered into pint with graceful fallback and warning propagation",
      "Grid-aligned chunked streaming with semaphore-gated concurrency (asyncio.Semaphore(10))",
      "Steady-state stream filtering, configurable smoothing thresholds (100 / 3 / 1.5), and forward-fill imputation",
    ],
    specTags: [
      { label: "format", value: "parquet" },
      { label: "schema_reconcile", value: "dynamic_promote" },
      { label: "uom_transforms", value: "30+_pint" },
      { label: "json_engine", value: "orjson" },
    ],
  },
  {
    id: "pure-python-ml",
    code: "CAP_06 // PURE PYTHON ML ALGORITHMS",
    title: "Pure Python ML & Mathematical Models",
    tagline:
      "Zero-sklearn statistical process control, polynomial curve fitting & Z-table interpolation",
    statusBadge: {
      label: "● ZERO-SKLEARN // <1MS",
      variant: "emerald",
    },
    technologies: [
      "Statistical Process Control (SQC/SPC XBar & Range Charts)",
      "Z-Table Standard Normal Percentile Control",
      "Polynomial Linear Regression (Degrees 1–10)",
      "Pure Python Decision Trees",
      "Unitless Multiplier Architecture",
      "Statistical Metrics (RMSE, R², Degrees of Freedom)",
    ],
    architectureHighlights: [
      "Zero-sklearn dependency footprint: zero cold-start latency (<1ms) inside lightweight Lambda functions",
      "Unitless multiplier architecture (StdDev = sigmaMultiplier × trainedStdDev) eliminating floating-point drift",
      "Range model UCL cascade with pairwise linear interpolation across a 15-entry standard-normal Z-table",
      "Dynamic reject guards: control-band narrowness reject guard and input feature sparsity checks",
    ],
    specTags: [
      { label: "dependencies", value: "zero_sklearn" },
      { label: "poly_degrees", value: "1_to_10" },
      { label: "z_table_interp", value: "pairwise" },
      { label: "cold_start", value: "<1ms" },
    ],
  },
  {
    id: "reliability-observability",
    code: "CAP_07 // SRE & OBSERVABILITY",
    title: "Reliability, SRE & Observability",
    tagline:
      "30+ CloudWatch composite alarms, AWS X-Ray subsegment hooks & circuit breaker patterns",
    statusBadge: {
      label: "● 99.98% SLO TARGET",
      variant: "amber",
    },
    technologies: [
      "AWS CloudWatch (30+ Composite Alarms)",
      "cdk-monitoring-constructs (CDK Synth Validation)",
      "AWS X-Ray (Subsegment Hooks, Route Sampling Rules)",
      "Counter-based Circuit Breakers",
      "Exponential Backoff with Jitter",
      "CloudWatch Synthetics Canaries",
      "Amazon SNS Dual-Tier Alerting (Critical vs Warning)",
    ],
    architectureHighlights: [
      "Boolean AndRule/OrRule composite alarm trees evaluated at CDK synth time to catch configuration bugs prior to deploy",
      "Custom X-Ray subsegment hooks capturing operation IDs, retry counts, payload sizes, and upstream errors",
      "Telemetry cost optimization: custom sampling rules dropping static asset traces (.js, .css)",
      "Counter-based circuit breaker opening after 3 consecutive retryable upstream service errors",
      "Stuck-job detection: automatic timeout catch paths updating DynamoDB states to prevent orphaned executions",
    ],
    specTags: [
      { label: "alarms_count", value: "30+" },
      { label: "trace_hooks", value: "custom_xray" },
      { label: "circuit_breaker", value: "3_retry_trip" },
      { label: "eval_stage", value: "cdk_synth" },
    ],
  },
  {
    id: "testing-tooling",
    code: "CAP_08 // TESTING & CI/CD",
    title: "Testing, Verification & CI/CD",
    tagline:
      "Session-scoped moto mocking, Hypothesis property-based testing, Ruff & Pyright strict",
    statusBadge: {
      label: "● STRICT TYPE SAFE",
      variant: "cyan",
    },
    technologies: [
      "pytest & pytest-asyncio",
      "moto (Session-Scoped AWS Mocking)",
      "Hypothesis (Property-Based Generative Testing)",
      "httpx.AsyncClient",
      "Ruff (Linter & Formatter)",
      "Pyright (Strict Type Checking)",
      "Poetry (Dependency Locking)",
      "AWS CodePipeline & GitHub Actions",
    ],
    architectureHighlights: [
      "Session-scoped moto AWS mocks with shared fixtures across Step Functions, DynamoDB, and S3 test suites",
      "Property-based generative testing with Hypothesis discovering edge cases in UOM and data filtering algorithms",
      "Async HTTP integration testing with httpx.AsyncClient and ASGI lifespan test clients",
      "Multi-stage CI/CD pipelines enforcing Ruff linting, Pyright strict typing, and full test suites on pull requests",
    ],
    specTags: [
      { label: "test_framework", value: "pytest_asyncio" },
      { label: "aws_mock", value: "moto_session" },
      { label: "generative", value: "hypothesis" },
      { label: "type_check", value: "pyright_strict" },
    ],
  },
  {
    id: "frontend-engineering",
    code: "CAP_09 // REACTIVE CLIENT SUITES",
    title: "Frontend Engineering & Operator Interfaces",
    tagline:
      "Angular 17+ Signals, OnPush architecture, 60fps SSE token streaming buffers & ZingCharts",
    statusBadge: {
      label: "● 60FPS STREAMING",
      variant: "emerald",
    },
    technologies: [
      "Angular 17+ (Signals, ChangeDetectionStrategy.OnPush)",
      "React 19 & Next.js 16 (App Router, Server Components)",
      "RxJS (expand recursive polling, forkJoin, debounce)",
      "ZingCharts (Multi-Y-Axis, Combined Graphsets)",
      "Tailwind CSS v4",
      "Web Audio API Sound Synthesis",
      "Monaco Code Editor Integration",
    ],
    architectureHighlights: [
      "60fps SSE token rendering buffer (16ms interval, adaptive catch-up, safe word/code-block boundaries)",
      "Multi-tab AI chat panel supporting up to 10 persistent conversations with collapsible thinking blocks",
      "Interactive SQC training modal and 4-step regression training wizard with step locks and RxJS polling",
      "High-performance Next.js developer portfolio with Web Audio API sound synthesis and 0 external UI bloat",
    ],
    specTags: [
      { label: "angular_version", value: "17+_signals" },
      { label: "state_strategy", value: "onpush_rxjs" },
      { label: "token_render", value: "60fps_16ms" },
      { label: "react_version", value: "19_next16" },
    ],
  },
  {
    id: "security-auth",
    code: "CAP_10 // SECURITY & GUARDRAILS",
    title: "Security, Identity & Production Guardrails",
    tagline:
      "Sub-1ms PII regex short-circuiting, Presidio NLP, Detoxify ML, HMAC webhooks & JWT RBAC",
    statusBadge: {
      label: "● ZERO TRUST",
      variant: "purple",
    },
    technologies: [
      "FastAPI Security & OAuth2",
      "JWT (Access/Refresh Tokens) & Cookie Handshakes",
      "Role-Based Access Control (RBAC)",
      "Presidio NLP (PII Redaction)",
      "Detoxify ML (Toxicity Filtering)",
      "HMAC-SHA256 Webhook Signatures",
      "AWS Secrets Manager (4-Step Rotation)",
      "Least-Privilege AWS IAM Task Roles",
    ],
    architectureHighlights: [
      "Sub-1ms regex short-circuit gate blocking credential leaks (AWS keys, JWTs, Stripe keys) before heavy NLP",
      "Shared HTTP and WebSocket cookie authentication handshakes with session invalidation",
      "HMAC-SHA256 request payload verification for secure asynchronous alert delivery",
      "Strict IAM task execution roles with zero wildcard permissions and private VPC-only ingress",
    ],
    specTags: [
      { label: "regex_latency", value: "<1ms" },
      { label: "pii_engine", value: "presidio_nlp" },
      { label: "webhook_auth", value: "hmac_sha256" },
      { label: "iam_posture", value: "least_privilege" },
    ],
  },
];

export const rawYamlConfig = `01_agentic_ai_and_mcp:
  - framework: "AWS Strands Agents SDK (strands-agents 1.52.0)"
  - protocol: "Model Context Protocol (MCP Streamable HTTP transport, 15 tools)"
  - llm_engine: "Amazon Bedrock (Claude 3.5 Sonnet / Opus 5.5, Nova Micro)"
  - streaming: "FastAPI StreamingResponse (SSE, 60fps token buffer, X-Accel-Buffering: no)"
  - memory: "DynamoDB session snapshots with gzip compression via strands-dynamodb-storage"
  - caching: "SHA-256 argument hash pagination cache (16-char ID, 5-min TTL)"
  - vector_mesh: "Qdrant, Milvus, pgvector (HNSW indexing)"

02_cloud_and_distributed_aws:
  - iac: "AWS CDK (Python, 20+ stacks, custom FastLambda/FastDockerLambda constructs)"
  - orchestration: "AWS Step Functions (Distributed Map @ 50 concurrency, S3JsonItemReader)"
  - networking: "AWS VPC Lattice (Resource Gateway, private SFN HTTP Task routing)"
  - compute: "AWS Lambda (SnapStart, Durable SDK wait_for_condition), ECS Fargate"
  - studio: "SageMaker Studio (Custom Linux AMD64 Docker kernel, isolated VPC)"
  - messaging: "AWS SQS (FIFO, Standard, DLQ with batchItemFailures), EventBridge"
  - cloud_cert: "Oracle Cloud Infrastructure (2x Certified Architect)"

03_runtimes_and_core_cs:
  - python_stack: "Python 3.12 / 3.14 (FastAPI, Asyncio, Pydantic v2, uvloop, Celery)"
  - node_stack: "TypeScript 5.4+ / Node.js 22 LTS (Express 5, Socket.IO WebSockets)"
  - low_overhead: "Go 1.22+ (Goroutines, Channels, Gin, Zero-Alloc Parsers)"
  - async_client: "aiohttp (Async connection pooling, X-Ray subsegment hooks)"
  - dsa_rating: "LeetCode Peak 1563 (Algorithms & Distributed Systems)"

04_data_persistence_and_caching:
  - nosql: "AWS DynamoDB (Single-Table Design, GSIs, Streams NEW_AND_OLD_IMAGES, PITR)"
  - rel_vector: "PostgreSQL 16 + pgvector (HNSW indexes, Connection Pooling)"
  - cache_layer: "Redis (Streams, Pub/Sub, Sliding-window rate limiters, Distributed locks)"
  - doc_store: "MongoDB (Compound indexes, E2EE encrypted envelope metadata)"
  - object_store: "Amazon S3 (Presigned 15-min URLs, Multipart parallel uploads)"

05_data_serialization_and_etl:
  - parquet_engine: "PyArrow (RecordBatch, cross-file schema reconciliation, Athena DDL)"
  - validation: "Pydantic v2 (@computed_field, custom Annotated validators)"
  - json_parser: "orjson (Zero-allocation ultra-fast serialization)"
  - uom_registry: "pint (Industrial sensor UOM registry, 30+ conversions, fallback logic)"
  - stream_filter: "Steady-state enforcement, configurable smoothing, forward-fill"

06_pure_python_ml_algorithms:
  - design_goal: "Zero-sklearn dependency footprint, sub-millisecond cold starts"
  - sqc_spc: "Statistical Process Control (XBar & Range charts, unitless multipliers)"
  - percentile: "Z-table percentile control with pairwise linear interpolation (15-entry table)"
  - curve_fitting: "Polynomial Linear Regression (Degrees 1–10, least squares)"
  - logic: "Pure Python Decision Trees for discrete sensor boundary evaluation"

07_reliability_and_observability:
  - alarms: "AWS CloudWatch (30+ composite alarms with cdk-monitoring-constructs)"
  - tracing: "AWS X-Ray (Custom subsegment hooks, static route trace dropping)"
  - resilience: "Counter-based Circuit Breakers (3 retry trip), Exponential backoff"
  - canaries: "CloudWatch Synthetics Canaries (Public & Authenticated health paths)"
  - alerting: "Amazon SNS Dual-Tier Topics (Critical vs Warning with OK auto-actions)"

08_testing_and_tooling:
  - test_suite: "pytest, pytest-asyncio, httpx.AsyncClient"
  - cloud_mock: "moto (Session-scoped AWS mocking with shared fixtures)"
  - property_test: "Hypothesis (Generative testing for UOM & stream math)"
  - static_analysis: "Ruff (Lint & Format), Pyright (Strict Type Checking)"
  - ci_cd: "AWS CodePipeline (Multi-stage), GitHub Actions, Docker Compose"

09_frontend_engineering:
  - reactive_ui: "Angular 17+ (Signals, ChangeDetectionStrategy.OnPush, RxJS expand)"
  - fullstack_web: "React 19, Next.js 16 (App Router, Server Components), Tailwind v4"
  - charting: "ZingCharts (Multi-Y-Axis, Graphsets, Dynamic markers)"
  - token_stream: "60fps SSE token rendering buffer (16ms interval, adaptive catch-up)"

10_security_and_auth:
  - ai_guardrails: "Presidio NLP PII Redaction, Detoxify Toxicity ML, <1ms Regex Gate"
  - identity: "JWT (Access/Refresh), Shared Cookie Auth (HTTP & WebSockets), RBAC"
  - webhooks: "HMAC-SHA256 Signed Webhook Payloads"
  - secrets: "AWS Secrets Manager (4-Step Rotation), Least-Privilege IAM Roles"`;

export const rawJsonConfig = JSON.stringify(
  {
    engineer: "Krishna Kumar",
    system_role: "Backend, GenAI & Distributed Systems Engineer",
    protocols: ["HTTP/2", "gRPC", "WebSocket", "SSE", "Streamable HTTP (MCP)"],
    runtimes: [
      "Python 3.12 / 3.14 (Asyncio, uvloop, FastAPI)",
      "TypeScript 5.4+ / Node.js 22 LTS (Express 5)",
      "Go 1.22+ (Goroutines, Channels)",
    ],
    agentic_ai: {
      framework: "AWS Strands Agents SDK 1.52.0",
      protocol: "Model Context Protocol (MCP) Streamable HTTP",
      tools_registered: 15,
      bedrock_models: ["Claude 3.5 Sonnet", "Claude Opus 5.5", "Nova Micro"],
      session_storage: "DynamoDB (gzip compressed)",
      streaming: "FastAPI StreamingResponse (SSE 60fps buffer)",
    },
    cloud_infrastructure: {
      iac: "AWS CDK Python (20+ stacks)",
      orchestration: "AWS Step Functions (Distributed Map @ 50 concurrency)",
      networking: "AWS VPC Lattice",
      compute: ["AWS Lambda SnapStart", "AWS ECS Fargate"],
      certifications: ["Oracle Cloud Infrastructure (2x Certified Architect)"],
    },
    persistence_and_caching: {
      nosql: "AWS DynamoDB (Single-Table Design, Streams NEW_AND_OLD_IMAGES, PITR)",
      relational_vector: "PostgreSQL 16 + pgvector (HNSW)",
      cache: "Redis Streams & Pub/Sub (Distributed locks, Sliding-window rate limiters)",
      document: "MongoDB",
      object_store: "Amazon S3",
    },
    data_processing: {
      parquet_engine: "PyArrow (Schema reconciliation, Athena DDL)",
      validation: "Pydantic v2",
      json_engine: "orjson",
      unit_registry: "pint (30+ UOM transforms)",
    },
    pure_python_algorithms: [
      "Statistical Process Control (SQC/SPC XBar & Range)",
      "Z-Table Pairwise Linear Interpolation",
      "Polynomial Regression (Degrees 1-10)",
      "Zero-sklearn Lambda execution",
    ],
    observability_sre: {
      monitoring: "CloudWatch 30+ Composite Alarms (cdk-monitoring-constructs)",
      tracing: "AWS X-Ray subsegment hooks",
      resilience: "Circuit Breakers & Exponential Backoff",
    },
    testing: [
      "pytest & pytest-asyncio",
      "moto (session-scoped AWS mock)",
      "Hypothesis (property-based)",
      "Pyright (strict)",
      "Ruff",
    ],
    security_guardrails: [
      "Sub-1ms Regex credential short-circuit",
      "Presidio NLP PII redaction",
      "Detoxify toxicity filter",
      "HMAC-SHA256 webhooks",
      "Shared cookie auth & JWT RBAC",
    ],
  },
  null,
  2
);

// Backwards-compatible legacy export
export const skills = {
  languages: [
    "Python 3.12 / 3.14",
    "TypeScript",
    "JavaScript",
    "SQL (Athena / PostgreSQL)",
    "C++",
    "Java",
    "Go",
  ],
  aiSystems: [
    "AWS Strands Agents SDK",
    "Model Context Protocol (MCP)",
    "Amazon Bedrock (Claude, Nova)",
    "SSE Real-Time Streaming (60fps)",
    "Adaptive Extended Thinking",
    "Qdrant & Milvus Vector Search",
    "LangChain & LlamaIndex",
  ],
  cloud: [
    "AWS CDK (Python, 20+ Stacks)",
    "AWS Step Functions (Distributed Map @ 50 concurrency)",
    "AWS Lambda (SnapStart, Durable SDK)",
    "AWS ECS Fargate",
    "AWS VPC Lattice",
    "SageMaker Studio (Custom Docker Kernel)",
    "AWS SQS (FIFO/Standard/DLQ)",
    "CloudWatch Composite Alarms",
    "AWS X-Ray",
    "Terraform",
    "OCI (2x Certified Architect)",
  ],
  backend: [
    "Python",
    "FastAPI",
    "Node.js 22 LTS",
    "Express 5",
    "aiohttp",
    "Pydantic v2",
    "PyArrow (Parquet)",
    "RESTful APIs",
    "WebSockets",
    "Socket.IO",
    "JWT",
    "OAuth2",
    "RBAC",
  ],
  databases: [
    "AWS DynamoDB (Single-Table Design, Streams)",
    "PostgreSQL 16 + pgvector (HNSW)",
    "MongoDB",
    "Redis (Streams, Distributed Locks)",
    "MySQL",
  ],
  reliability: [
    "Event-Driven Workflows",
    "Rate Limiting (Token Bucket & Sliding Window)",
    "Connection Pooling",
    "Circuit Breakers",
    "PITR & Disaster Recovery",
    "CloudWatch Synthetics Canaries",
  ],
  tools: [
    "pytest & pytest-asyncio",
    "moto (AWS Mocking)",
    "Hypothesis (Property-Based)",
    "Ruff",
    "Pyright (Strict)",
    "Docker & Docker Compose",
    "Git",
    "AWS CodePipeline",
    "GitHub Actions",
    "Postman",
  ],
  concepts: [
    "Distributed Systems",
    "Microservices Architecture",
    "Event-Driven Architecture",
    "Agentic AI Architecture",
    "Single-Table DynamoDB Design",
    "Cloud Security & IAM Least-Privilege",
    "Data Structures & Algorithms (LeetCode 1563)",
  ],
  frontend: [
    "Angular 17+ (Signals, OnPush)",
    "React 19",
    "Next.js 16",
    "ZingCharts (Multi-Y-Axis)",
    "Tailwind CSS v4",
    "Web Audio API",
  ],
};
