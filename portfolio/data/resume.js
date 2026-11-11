// Edit everything here — the page reads from this file.
export const profile = {
  name: "Jeffrey Tom Shaji",
  role: "Spring Boot Backend Developer",
  summary:
    "I build backend services at TCS on the Apple account. Outside work I build RAG pipelines and language models, and I'm going deeper into neural networks.",
  email: "jeffreytomshaji29@gmail.com",
  github: "https://github.com/Jeffrey18276",
  linkedin: "https://www.linkedin.com/in/jeffrey-tom-shaji-0b95b521b",
  location: "Kerala, India",
};

// Replace with the full certification name if it differs.
export const anthropicCert = { short: "CCDVF", full: "Anthropic Certified — CCDVF" };

export const experience = [
  {
    company: "Tata Consultancy Services (TCS)",
    title: "Spring Boot Backend Developer",
    note: "Apple account",
    period: "29 Dec 2025 – Present",
    points: ["Developing and maintaining backend services with Spring Boot for the Apple account."],
  },
  {
    company: "OWL Cyber Defense (U.A.E.)",
    title: "Engineering Intern",
    period: "Aug 15 – Sep 16, 2023",
    points: [
      "Configured and tested OWL data diodes for secure data transfer.",
      "Ran packet transfer simulations over TCP and UDP.",
      "Connected servers running on ESXi to the data diodes and completed data transfers.",
    ],
  },
];

export const projects = [
  {
    name: "RAG pipeline with LangChain",
    points: [
      "Ollama embeddings and Groq LLM for semantic document retrieval and question answering.",
      "PDF loaders and vector stores to build a knowledge base from technical documentation.",
      "Tuned prompt templates and retrieval chains for more accurate, relevant answers.",
    ],
  },
  {
    name: "Next word prediction model",
    points: [
      "Built from scratch: custom preprocessing, Byte Pair Encoding tokenizer, text generation pipeline.",
      "Loaded GPT pretrained weights to improve accuracy and fluency.",
      "Optimized for real-time text suggestion using transformer and transfer learning techniques.",
    ],
  },
];

export const publication = {
  title: "RangeShield ZKP",
  venue: "IGI Global",
  text: "A zero-knowledge proof system that keeps federated learning on sensitive healthcare data private and correct. Pedersen Commitments make proofs of model updates binding and non-reversible.",
  link: "https://www.igi-global.com/article/rs-zkp/394815",
};

export const skills = {
  "Backend": ["Java", "Spring Boot", "SQL", "Firebase"],
  "AI / ML": ["LLMs", "Neural Networks", "Deep Learning", "LangChain"],
  "Mobile": ["Flutter", "Dart"],
  "Blockchain": ["Zero-Knowledge Proofs", "PLONK"],
  "Tools": ["Git", "Canva"],
};

export const certifications = [
  "Anthropic Certified — CCDVF",
  "Neural Networks and Deep Learning — DeepLearning.AI (Coursera)",
  "Introduction to Large Language Models",
  "Introduction to Generative AI",
  "The Complete Flutter Development Bootcamp with Dart",
  "Internship certificate — OWL Cyber Defense",
];

export const education = {
  school: "Vellore Institute of Technology, Chennai",
  degree: "B.Tech, Computer Science and Engineering",
  grade: "CGPA 8.76",
  period: "Aug 2021 – May 2025",
};
