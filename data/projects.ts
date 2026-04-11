export const projects = [
  {
    title: "NoviConnect",
    description:
      "Engineered a real-time chat platform featuring E2EE-aware messaging and active presence tracking via WebSockets. Designed cross-origin cookie authentication, Google OAuth integration, and secure REST APIs for OTP workflows and media attachment processing.",
    highlights: [
      "Real-time WebSocket messaging",
      "E2EE-aware architecture",
      "Google OAuth + OTP auth",
      "Cross-origin cookie sessions",
      "Media attachment processing",
    ],
    stack: [
      "TypeScript",
      "React 19",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Redux Toolkit",
      "Material UI",
    ],
    github: "https://github.com/009-KumarJi/NoviConnect",
    live: "https://noviconnect-client-v2.vercel.app/",
    featured: true,
  },
  {
    title: "Smart Media Uploader",
    description:
      "Architected an event-driven media processing platform utilizing direct-to-S3 presigned uploads and stateless ECS Fargate workers. Orchestrated a secure, fault-tolerant pipeline using AWS SQS and Step Functions, strategically isolating FastAPI servers from compute-heavy transcoding tasks.",
    highlights: [
      "Event-driven architecture",
      "Direct-to-S3 presigned uploads",
      "Stateless ECS Fargate workers",
      "AWS Step Functions orchestration",
      "Fault-tolerant pipeline",
    ],
    stack: [
      "Python FastAPI",
      "AWS DynamoDB",
      "S3",
      "SQS",
      "Step Functions",
      "Lambda",
      "ECS Fargate",
      "Terraform",
    ],
    github: "https://github.com/009-KumarJi/smart-media-uploader",
    featured: true,
  },
  {
    title: "Article CMS",
    description:
      "Built a robust backend content management system utilizing Node.js and Express to drive multi-role RBAC and secure editorial workflows. Integrated MongoDB for flexible data modeling alongside Cloudinary for optimized image storage and delivery.",
    highlights: [
      "Multi-role RBAC system",
      "Secure editorial workflows",
      "Cloudinary image optimization",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/009-KumarJi/article_cms",
    featured: false,
  },
];
