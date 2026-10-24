// Edit this file to update the whole site.
export const site = {
  name: "Mrunal Vijay Tambe",
  role: "Full Stack Developer",
  email: "mrunaltambe22@gmail.com",
  github: "https://github.com/mrunaltam6e",
  linkedin: "https://www.linkedin.com/in/mrunaltambe/",
  // When your resume is ready, put the PDF in /public and set this to e.g. "/resume.pdf".
  resumeFile: null as string | null,
  about: [
    "I’m a full stack developer who started in Linux system administration and moved into building software. That background means I think about uptime, security and deployment from the first line of code.",
    "Right now I’m an intern at Guru Virtues, working on Dwarkamai, a multi-service temple management platform. I also have projects in machine learning and computer vision, from plant disease detection to gesture-controlled lighting.",
  ],
};

export type Entry = { title: string; when?: string; body: string; tags?: string[]; current?: boolean; featured?: boolean };

export const experience: Entry[] = [
  {
    title: "Full Stack Developer Intern, Guru Virtues LLC",
    when: "Present",
    current: true,
    body: "Core engineer on the Dwarkamai web application. I help build backend microservices, API gateway routing, secure identity and access control, relational and document databases, and the frontend screens that tie them into complete workflows.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "MongoDB", "Keycloak"],
  },
  {
    title: "Linux Administrator, SupportHives Technology Pvt Ltd",
    when: "Internship Mar to May 2024, full time Jun to Nov 2024",
    body: "Maintained a mixed Linux and Windows server estate at 99.9% uptime. Ran server migrations and patch cycles that reduced vulnerabilities and downtime, and fixed system, network and database issues within security and compliance standards.",
  },
];

export const projects: Entry[] = [
  {
    title: "Dwarkamai: temple management platform",
    when: "In progress",
    body: "A multi-domain platform built with domain-driven design and microservices. Each backend service owns its data. Keycloak handles sign-in, with JWT validation and role-based access control through custom FastAPI dependencies. Async APIs on MongoDB power dynamic navigation and feature flags, Django routes across several PostgreSQL databases, and everything runs in Docker Compose with Swagger docs for testing.",
    tags: ["Python", "FastAPI", "Django", "Next.js", "React", "PostgreSQL", "MongoDB", "Docker", "Keycloak"],
  },
  {
    title: "Lee Lab web application",
    when: "Nov 2025",
    body: "Co-built a responsive site for a university biology lab to showcase publications and handle student resource requests. Unstructured lab content became a relational schema, with archive and restore, contact workflows and a secure admin login. Live in production on Render.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    title: "PlantPal: plant leaf disease management",
    body: "A web app that identifies plant diseases from a photo and explains causes and treatments through a chatbot. A VGG19 model trained on 54,305 PlantVillage images across 38 classes reached over 97% validation accuracy. The Streamlit chat uses GPT-3.5 and LangChain memory, deployed on a cloud VPS.",
    tags: ["TensorFlow", "Keras", "OpenCV", "Streamlit", "LangChain"],
  },
  {
    title: "Gesture-controlled smart lighting",
    body: "Control LEDs by holding up one to five fingers. MediaPipe and OpenCV classify gestures from a webcam with 95% accuracy in good conditions, and Python sends commands to an Arduino Uno in 50 to 100 ms. I switched from YOLOv5 to MediaPipe when hardware limits got in the way.",
    tags: ["MediaPipe", "OpenCV", "Arduino", "Python"],
  },
  {
    title: "Sentiment analysis on Twitter data",
    body: "Tuned a Naive Bayes classifier to 81% accuracy on 74K+ cleaned tweets, then compared it with Logistic Regression, LSTM and BERT in a team. BERT reached 92%, while Naive Bayes trained in 0.02 seconds on 3.2 MB of memory.",
    tags: ["scikit-learn", "NLTK", "BERT", "LSTM"],
  },
  {
    title: "Drug effects on COVID outcomes",
    body: "Causal analysis on the N3C dataset using Word2Vec patient embeddings, DoWhy backdoor adjustment and propensity score matching. Trazodone, fluoxetine and sertraline showed small positive effects, consistent across methods.",
    tags: ["Python", "DoWhy", "Gensim"],
  },
];

export const involvement: Entry[] = [
  {
    title: "Editorial Director, Rotaract Club of Mumbai",
    when: "2018 to 2019",
    body: "Wrote and edited stories, articles and newsletters, and hosted events for school children from small sessions to large projects.",
  },
];
