import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "BTG Pactual",
    role: "AI Engineer",
    period: "Feb 2024 — Present",
    description:
      "Building production-grade AI and data systems combining software engineering, cloud infrastructure, and applied AI for scalable financial operations.",
    highlights: [
      "Developed an **LLM-powered Text-to-SQL platform** using RAG (PgVector + OpenSearch), democratizing data access across **three business areas**",
      "Designed **AI agents** for automated log analysis and anomaly detection, reducing manual monitoring by **~2 hours/day**",
      "Implemented **LLM observability pipelines** using Langfuse and architected event-driven AWS data infrastructure",
      "Led data integration during **Greytown Advisors' multi-billion AUM acquisition**, automating financial reconciliation and eliminating **~4 hours of manual work** daily",
    ],
    technologies: ["Python", "AWS", "LangChain", "Langfuse", "RAG", "LLM Agents"],
  },
  {
    company: "BOCOM BBM",
    role: "Software Engineer",
    period: "May 2023 — Feb 2024",
    description:
      "Contributed to backend development of financial systems across multiple banking divisions.",
    highlights: [
      "Built backend systems for **Treasury**, **Cash Management**, and **Wealth Management**",
      "Supported regulatory compliance with **SPB** and **Central Bank** integrations",
      "Developed international payment infrastructure with **SWIFT** and **CIPS** for cross-border **CNY transactions**",
    ],
    technologies: [".NET", "C#", "SWIFT", "SPB"],
  },
  {
    company: "Globo",
    role: "Data Engineer Intern",
    period: "Aug 2022 — Apr 2023",
    description:
      "Data science, analytics, and engineering initiatives across Globo's digital platforms.",
    highlights: [
      "Developed **analytical dashboards** and data products for platforms like **G1, Gshow, GE, and Globo.com**",
      "Applied **ML techniques** for user behavior analysis and built **RFM segmentation models** for audience targeting",
      "Designed **scalable data pipelines** on GCP, reducing manual operational effort by **~1 hour/day**",
    ],
    technologies: ["Python", "PySpark", "GCP", "BigQuery", "Machine Learning"],
  },
  {
    company: "ECOA PUC-Rio",
    role: "Full-stack Developer",
    period: "Mar 2021 — Mar 2022",
    description:
      "Multidisciplinary innovation program by PUC-Rio in partnership with Globo.",
    highlights: [
      "Built **technology-driven solutions** for real media industry challenges using **Challenge-Based Learning**",
      "Collaborated in **cross-functional teams** to design and develop end-to-end digital prototypes",
      "Recognized as **2nd Best Developer** and awarded **3rd Best Solution** among 24 teams",
    ],
    technologies: ["JavaScript", "React", "Node.js"],
  },
  {
    company: "PUC-Rio",
    role: "Programming Assistant",
    period: "Jul 2020 — Dec 2020",
    description:
      "Teaching Assistant for undergraduate programming courses.",
    highlights: [
      "Supported students in **foundational CS concepts** and **C programming**",
      "Assisted through classes, study sessions, and **one-on-one mentoring**",
      "Contributed to **teaching materials** and practical exercises",
    ],
    technologies: ["C", "Algorithms", "Data Structures"],
  },
];
