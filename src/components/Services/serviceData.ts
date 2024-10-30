import { Brain, Workflow, LineChart, Shield, Mail, ClipboardList, Users, Link as LinkIcon } from 'lucide-react';
import type { Service } from './types';

export const services: Service[] = [
  {
    title: 'AI Process Automation',
    description: 'Streamline workflows and eliminate repetitive tasks with intelligent automation solutions. Our AI systems handle complex processes, reducing manual work by up to 80%.',
    details: `Transform your business operations with our cutting-edge AI Process Automation solutions. We specialize in identifying, optimizing, and automating complex workflows across your organization, enabling unprecedented efficiency and accuracy.

Our AI-powered platform analyzes your existing processes, identifies bottlenecks, and implements intelligent workflows that continuously adapt and improve. By combining advanced machine learning algorithms with robotic process automation (RPA), we create solutions that not only automate tasks but evolve with your business needs.`,
    icon: Workflow,
    gradient: 'from-blue-400 to-indigo-600',
  },
  {
    title: 'Machine Learning Integration',
    description: 'Implement custom ML models to derive actionable insights from your data. Leverage deep learning and neural networks for intelligent decision-making.',
    details: `Harness the full potential of your data with our comprehensive Machine Learning Integration services. We specialize in developing and implementing custom ML models that transform raw data into actionable business intelligence.

Our team leverages state-of-the-art deep learning and neural networks to create sophisticated solutions tailored to your specific needs. From data preprocessing to model deployment and optimization, we ensure seamless integration of ML capabilities into your existing infrastructure.`,
    icon: Brain,
    gradient: 'from-purple-400 to-indigo-600',
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions with advanced analytics. Utilize pattern recognition and statistical modeling for accurate predictions.',
    details: `Empower your decision-making process with our advanced Predictive Analytics solutions. We combine sophisticated statistical modeling with machine learning algorithms to help organizations forecast trends, identify opportunities, and mitigate risks with unprecedented accuracy.

Our platform processes both historical and real-time data to generate actionable insights that drive business growth. Using advanced pattern recognition techniques and statistical modeling, we create reliable forecasts that inform strategic planning and operational decisions.`,
    icon: LineChart,
    gradient: 'from-indigo-400 to-blue-600',
  },
  {
    title: 'Secure AI Solutions',
    description: 'Enterprise-grade security measures to protect your AI implementations. Features end-to-end encryption and compliance with industry standards.',
    details: `Deploy AI with complete confidence using our Secure AI Solutions. We prioritize the security and integrity of your AI implementations with enterprise-grade protection measures that ensure your data and algorithms remain protected while delivering powerful results.

Our comprehensive security framework covers every aspect of AI deployment, from data encryption and access control to model protection and compliance monitoring. We implement robust security measures that align with industry standards and regulatory requirements.`,
    icon: Shield,
    gradient: 'from-green-400 to-emerald-600',
  },
  {
    title: 'Smart Lead Generation',
    description: 'AI-powered email outreach and lead enrichment to identify and engage high-value prospects. Includes automated follow-ups and sentiment analysis.',
    details: `Revolutionize your lead generation process with our AI-powered outreach and enrichment solutions. Our platform combines advanced data analytics with automated engagement tools to identify, qualify, and nurture high-value prospects with unprecedented efficiency.

Our system leverages machine learning algorithms to analyze prospect data, predict conversion likelihood, and personalize outreach strategies. By automating repetitive tasks while maintaining a personal touch, we help you scale your lead generation efforts effectively.`,
    icon: Mail,
    gradient: 'from-orange-400 to-pink-600',
  },
  {
    title: 'Project Intelligence',
    description: 'Automated project tracking, resource allocation, and risk assessment using AI algorithms. Real-time monitoring and predictive project analytics.',
    details: `Elevate your project management capabilities with our Project Intelligence solutions. Our AI-powered platform provides comprehensive project tracking, resource allocation, and risk assessment tools that help organizations deliver projects on time and within budget.

By leveraging advanced algorithms and real-time analytics, our system provides actionable insights for project planning, execution, and monitoring. We help project managers make data-driven decisions while automating routine tasks and identifying potential issues before they impact project timelines.`,
    icon: ClipboardList,
    gradient: 'from-red-400 to-rose-600',
  },
  {
    title: 'HR Process Automation',
    description: 'Streamline recruitment, onboarding, and employee management with AI-driven workflows. Includes resume screening and performance analytics.',
    details: `Transform your human resources operations with our HR Process Automation solutions. Our AI-powered platform streamlines recruitment, onboarding, and employee management processes, enabling HR teams to focus on strategic initiatives rather than administrative tasks.

Our system combines advanced machine learning algorithms with workflow automation to create efficient, scalable HR processes. From initial candidate screening to ongoing performance management, our solutions help organizations optimize their human capital management.`,
    icon: Users,
    gradient: 'from-teal-400 to-emerald-600',
  },
  {
    title: 'System Integration',
    description: 'Seamlessly connect and automate interactions between various tools and platforms. Custom API development and middleware solutions.',
    details: `Achieve seamless connectivity across your technology stack with our System Integration solutions. We specialize in creating robust connections between various tools and platforms, enabling smooth data flow and process automation across your organization.

Our integration expertise encompasses custom API development, middleware solutions, and automated workflows that connect disparate systems into a cohesive ecosystem. We ensure reliable data synchronization while maintaining security and performance.`,
    icon: LinkIcon,
    gradient: 'from-cyan-400 to-blue-600',
  },
];