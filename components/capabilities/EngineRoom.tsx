"use client";

import { useTelemetry } from "@/components/context/TelemetryContext";

export default function EngineRoom() {
  const { copyToClipboard } = useTelemetry();

  const rawYamlConfig = `01_runtime_and_core:
  - engine: "Python 3.12 (FastAPI, Asyncio, Pydantic v2, uvloop, Celery)"
  - low_overhead: "Go 1.22+ (Goroutines, Channels, Gin, Zero-Alloc Parsers)"
  - node_edge: "Node.js 22 LTS / TypeScript 5.4 (Express 5, WebSocket Engine)"

02_event_streaming_and_queues:
  - bus: "Apache Kafka (Partitions, Lag Synchronization, Consumer Groups)"
  - realtime: "Redis Streams & Pub/Sub, AWS SQS, RabbitMQ"

03_data_persistence:
  - rel_vector: "PostgreSQL 16 + pgvector (HNSW indexes, Connection Pooling)"
  - nosql: "MongoDB, DynamoDB (Single-Table Design, GSI/LSI, PITR-to-Parquet)"
  - cache_store: "Redis (In-Memory Caching, Distributed Session Locks)"

04_genai_and_llmops:
  - inference: "AWS Bedrock (Claude 3.5 Sonnet, AWS Strands SDK, MCP Servers)"
  - agents: "LangChain, LlamaIndex, Qdrant Vector Mesh (Sub-10ms Search)"
  - guardrails: "Presidio NLP PII Redaction, Detoxify Toxicity ML"

05_cloud_and_topology:
  - aws_fabric: "ECS Fargate, Lambda SnapStart, VPC Lattice, Step Functions, CloudWatch"
  - oci_fabric: "Oracle Cloud Infrastructure (2x Certified Architect)"
  - devops: "Terraform, Docker Compose, GitHub Actions CI/CD"`;

  const rawJsonConfig = JSON.stringify(
    {
      architect: "Krishna Kumar",
      protocols: ["HTTP/2", "gRPC", "WebSocket", "SSE"],
      runtimes: ["Python 3.12 (FastAPI)", "Go 1.22+", "Node.js 22 (Express 5)"],
      messaging: ["Apache Kafka", "Redis Streams & Pub/Sub", "AWS SQS"],
      databases: ["PostgreSQL + pgvector", "DynamoDB (Single-Table)", "MongoDB", "Redis"],
      genai_stack: [
        "AWS Bedrock (Claude 3.5)",
        "Model Context Protocol (MCP)",
        "AWS Strands SDK",
        "Presidio NLP",
        "Qdrant",
      ],
      cloud_infra: [
        "AWS (ECS Fargate, Lambda SnapStart, Step Functions, VPC Lattice)",
        "OCI (2x Certified Architect)",
      ],
    },
    null,
    2
  );

  return (
    <section
      id="capabilities"
      className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-16"
    >
      {/* Header */}
      <div className="border-b border-white/[0.08] pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="font-mono text-xs text-[#f59e0b] tracking-widest uppercase flex items-center gap-2">
            <span>03 // THE ENGINE ROOM</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b] inline-block" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Categorized Backend Capabilities &amp; Stack Config
          </h2>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() =>
              copyToClipboard(rawYamlConfig, "SYSTEM YAML CONFIG EXPORTED")
            }
            type="button"
            className="px-3 py-1.5 rounded-md bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] text-gray-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <span className="text-[#f59e0b]">⬇</span>
            <span>[Export Specs as YAML]</span>
          </button>
          <button
            onClick={() =>
              copyToClipboard(rawJsonConfig, "SYSTEM JSON CONFIG EXPORTED")
            }
            type="button"
            className="px-3 py-1.5 rounded-md bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] text-gray-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <span className="text-[#00f2fe]">&#123;&#125;</span>
            <span>[JSON]</span>
          </button>
        </div>
      </div>

      {/* Authentic Terminal Editor Window */}
      <div className="rounded-xl bg-[#08090c] border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/70">
        <div className="h-8 bg-[#0d1117] px-4 flex items-center justify-between border-b border-white/[0.06] font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">PATH:</span>
            <span className="text-gray-300 font-mono">/etc/system/capabilities.yaml</span>
          </div>
          <div className="text-[11px] text-gray-500">
            ENCODING: UTF-8 // SYNTAX: YAML 1.2
          </div>
        </div>

        <div className="p-4 sm:p-6 font-mono text-xs text-gray-300 flex gap-4 sm:gap-6 overflow-x-auto">
          {/* Line Numbers Column */}
          <div className="select-none text-gray-600 text-right pr-4 border-r border-white/[0.06] flex flex-col font-mono text-[12px] leading-6 shrink-0">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
            <span>06</span>
            <span>07</span>
            <span>08</span>
            <span>09</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
          </div>

          {/* Syntax Highlighted Config */}
          <div className="flex-1 font-mono text-[12px] leading-6 select-all min-w-[500px]">
            <div>
              <span className="text-[#10b981] font-semibold">01_runtime_and_core:</span>
            </div>
            <div className="pl-4 text-gray-400">
              - engine: <span className="text-[#00f2fe]">&quot;Python 3.12&quot;</span> (FastAPI, Asyncio, Pydantic v2, uvloop, Celery)
            </div>
            <div className="pl-4 text-gray-400">
              - low_overhead: <span className="text-[#00f2fe]">&quot;Go 1.22+&quot;</span> (Goroutines, Channels, Gin, Zero-Alloc Parsers)
            </div>
            <div className="pl-4 text-gray-400">
              - node_edge: <span className="text-[#00f2fe]">&quot;Node.js 22 LTS / TypeScript 5.4&quot;</span> (Express 5, WebSocket Engine)
            </div>

            <div className="mt-1">
              <span className="text-[#10b981] font-semibold">02_event_streaming_and_queues:</span>
            </div>
            <div className="pl-4 text-gray-400">
              - bus: <span className="text-[#00f2fe]">&quot;Apache Kafka&quot;</span> (Partitions, Lag Synchronization, Consumer Groups)
            </div>
            <div className="pl-4 text-gray-400">
              - realtime: <span className="text-[#00f2fe]">&quot;Redis Streams &amp; Pub/Sub&quot;</span> | <span className="text-[#00f2fe]">&quot;AWS SQS / RabbitMQ&quot;</span>
            </div>

            <div className="mt-1">
              <span className="text-[#10b981] font-semibold">03_data_persistence:</span>
            </div>
            <div className="pl-4 text-gray-400">
              - rel_vector: <span className="text-[#f59e0b]">&quot;PostgreSQL 16 + pgvector&quot;</span> (HNSW indexes, Connection Pooling)
            </div>
            <div className="pl-4 text-gray-400">
              - nosql: <span className="text-[#f59e0b]">&quot;MongoDB&quot;</span> | <span className="text-[#f59e0b]">&quot;DynamoDB&quot;</span> (Single-Table Design, GSI/LSI, PITR-to-Parquet)
            </div>
            <div className="pl-4 text-gray-400">
              - in_memory: <span className="text-[#f59e0b]">&quot;Redis&quot;</span> (Distributed Locks, Session States, Presence)
            </div>

            <div className="mt-1">
              <span className="text-[#10b981] font-semibold">04_genai_and_llmops:</span>
            </div>
            <div className="pl-4 text-gray-400">
              - inference: <span className="text-[#10b981]">&quot;AWS Bedrock&quot;</span> (Claude 3.5 Sonnet, AWS Strands SDK, MCP Servers)
            </div>
            <div className="pl-4 text-gray-400">
              - agents_vector: <span className="text-[#10b981]">&quot;LangChain / LlamaIndex&quot;</span> | <span className="text-[#10b981]">&quot;Qdrant / Milvus&quot;</span> (Sub-10ms Semantic Search)
            </div>

            <div className="mt-1">
              <span className="text-[#10b981] font-semibold">05_cloud_and_topology:</span>
            </div>
            <div className="pl-4 text-gray-400">
              - aws_fabric: <span className="text-gray-200">&quot;ECS Fargate, Lambda SnapStart, VPC Lattice, Step Functions, CloudWatch&quot;</span>
            </div>
            <div className="pl-4 text-gray-400">
              - oci_fabric: <span className="text-gray-200">&quot;Oracle Cloud Infrastructure (2x Certified Architect), Docker OCI Containers&quot;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
