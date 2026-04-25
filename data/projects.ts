export interface Project {
  title: string;
  course: string;
  goal: string;
  techStack: string[];
  outcome: string;
  repoUrl: string;
  featured?: boolean;
}

export const msAppliedAIProjects: Project[] = [
  {
    title: "Multi-Disease Outbreak Forecasting with Temporal Deep Learning",
    course: "AAI-590 — Capstone",
    goal: "Build a temporal deep learning system to forecast multiple infectious disease outbreaks using Canadian public health surveillance data.",
    techStack: ["Python", "LSTM", "Transformer", "ARIMA", "Pandas", "NumPy", "Matplotlib"],
    outcome: "Developed and evaluated multiple forecasting models across diseases including influenza and whooping cough, with geographic gap analysis validating model performance against PHAC reporting patterns.",
    repoUrl: "https://github.com/mojodean/AAI-590-capstone-canadian-health",
    featured: true,
  },
  {
    title: "VenueSignal — MLOps System",
    course: "AAI-540",
    goal: "Build, train, and deploy a fully-operational MLOps system predicting the impact of parking accessibility on new businesses using the Yelp Open Dataset.",
    techStack: ["Python", "SageMaker", "XGBoost", "S3", "Athena", "CloudWatch"],
    outcome: "Feature store with 36 features deploys a robust model with real-time monitoring and drift feedback for continuous improvement.",
    repoUrl: "https://github.com/mojodean/venuesignal",
  },
  {
    title: "Computer Vision for Reptile Detection",
    course: "AAI-521",
    goal: "Build and train a model to detect different species of reptiles in images.",
    techStack: ["Python", "PyTorch", "YOLOv10", "BioTrove-CLIP", "NumPy", "OpenCV"],
    outcome: "Model matches 531 reptile species from the BioTrove dataset at 60% accuracy.",
    repoUrl: "https://github.com/mojodean/herpeton",
  },
  {
    title: "Intelligent Investment Research Agent",
    course: "AAI-520",
    goal: "Implement an agentic workflow with prompt chaining to deliver a self-improving financial news agent.",
    techStack: ["Python", "LangChain", "LangGraph", "OpenAI"],
    outcome: "Agent retrieves news and stock price data for publicly traded companies, with sentiment analysis of news coverage and stock price trends.",
    repoUrl: "https://github.com/mojodean/aai-520-group-3-final-project",
  },
  {
    title: "MIDI Detection: Identifying Classical Composers from Sound",
    course: "AAI-511",
    goal: "Implement LSTM and CNN models against a Kaggle MIDI dataset to identify four major classical composers.",
    techStack: ["Python", "CNN", "LSTM"],
    outcome: "Models performed reasonably well at composer identification; scaling to additional composers remains an open challenge.",
    repoUrl: "https://github.com/mojodean/su25-aai511-group3",
  },
  {
    title: "Forecasting Unemployment in the San Diego MSA",
    course: "AAI-510",
    goal: "Leverage Bureau of Labor Statistics data to forecast future unemployment rates for the San Diego Metropolitan Statistical Area.",
    techStack: ["Python", "NumPy", "Pandas", "ARIMA", "DeepAR"],
    outcome: "DeepAR outperformed baseline models; analysis surfaced the need for additional economic and geopolitical factors in a production-grade model.",
    repoUrl: "https://github.com/mojodean/su25-aai510-group1",
  },
  {
    title: "Smart Home Energy Anomaly Detection and Forecasting",
    course: "AAI-530",
    goal: "Design an IoT system that detects energy consumption anomalies in a smart home.",
    techStack: ["Python", "Keras", "TensorFlow", "Jupyter Notebook"],
    outcome: "Autoencoder-based anomaly detection paired with an LSTM forecasting model achieving 99.84% accuracy across a seven-day prediction horizon.",
    repoUrl: "https://github.com/mojodean/aai-530-final-project",
  },
  {
    title: "Predicting Emotion From Speech (SER Model)",
    course: "AAI-501",
    goal: "Identify and implement a model to detect emotional states in speech audio.",
    techStack: ["Python", "scikit-learn", "librosa", "TensorFlow", "Jupyter Notebook"],
    outcome: "CNN-LSTM Enhanced model achieved 98% accuracy; HuBERT Enhanced also exceeded 90%, validating both approaches for speech emotion recognition.",
    repoUrl: "https://github.com/mojodean/MSAAI501FinalProject_Group7",
  },
  {
    title: "Predicting Obesity: Lifestyle and Dietary Factors",
    course: "AAI-500",
    goal: "Identify and implement a model to aid early detection of obesity risk from lifestyle and dietary features.",
    techStack: ["Python", "scikit-learn", "NumPy", "Pandas", "Jupyter Notebook"],
    outcome: "Random Forest model achieved 94% accuracy in detecting correlative effects of obesity from lifestyle factors.",
    repoUrl: "https://github.com/mojodean/aai-500-project-obesity-levels",
  },
];
