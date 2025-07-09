export const cvData = {
  name: "Michael Marwa",
  title: "Cloud Support Engineer",
  email: "marwakmichael@gmail.com",
  phone: "+268 79 46 2012",
  location: "1 Athel Estate, Eswatini",
  linkedin: "/michael-k-marwa",
  github: "MichaelKMarwa",

  skills: {
    aws: ["EC2", "Lambda", "S3", "IAM", "Route 53", "CloudWatch", "RDS", "VPC"],
    tools: [
      "Terraform",
      "CloudFormation",
      "Git",
      "REST APIs",
      "CI/CD Pipelines",
    ],
    os: ["Ubuntu (Linux)", "Windows Server"],
    networking: ["Route 53", "VPC", "Elastic Load Balancing (ELB)"],
    security: [
      "SSL/TLS",
      "Network Firewalls",
      "Web Application Firewalls (WAF)",
    ],
    troubleshooting: [
      "traceroute",
      "mtr",
      "ping",
      "iperf",
      "dig/nslookup",
      "cURL",
    ],
  },

  projects: [
    {
      title: "AWS Cloud Resume Challenge",
      description:
        "Static frontend hosted on Amazon S3 with CloudFront for HTTPS and global content delivery. Lambda + DynamoDB for serverless visitor counter.",
      tech: [
        "S3",
        "CloudFront",
        "Lambda",
        "DynamoDB",
        "API Gateway",
        "GitHub Actions",
      ],
      type: "web",
    },
    {
      title: "Cost-Optimized Wallet App",
      description:
        "Reduced monthly costs to R602.03 by switching from EC2 to Fargate and negotiating Reserved Instance discounts.",
      tech: ["AWS Fargate", "EC2", "CloudWatch", "Auto Scaling"],
      type: "web",
    },
    {
      title: "Taxi App Architecture",
      description:
        "Designed architecture for a client building a Taxi App similar to Lyft, solving the challenge of Google Maps not working in Eswatini.",
      tech: ["AWS LEX", "SNS", "S3"],
      type: "web",
    },
    {
      title: "UK-based App Backend",
      description:
        "Currently building backend using Encore.ts + AWS, handling all endpoints and backend architecture.",
      tech: ["Encore.ts", "AWS", "REST APIs"],
      type: "web",
    },
  ],
};

export const projectImages = [
  "/gallery/miboard-dark.png",
  "/gallery/qrtz.png",

  "/gallery/miboard-menu.png",
  "/gallery/voruna.png",
  "/gallery/app.png",
];
