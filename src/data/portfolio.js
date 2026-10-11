// ------------------------------------------------------------------
// All site content lives here. Edit this file to update the portfolio.
// ------------------------------------------------------------------

export const PROFILE = {
  name: 'Jaswanth R',
  email: 'raminenijaswanth26@gmail.com',
  phone: '+918688086646',
  phoneDisplay: '+91 86880 86646',
  location: 'Bangalore, India',
  // TODO: replace with your real profile links
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  // The PDF lives in /public. Replace the file to update the download.
  resume: `${import.meta.env.BASE_URL}Jaswanth_SRE_DevOps_Resume.pdf`,
};

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

export const ROLES = ['DevOps Engineer', 'Site Reliability Engineer', 'Cloud DevOps Engineer'];

export const MARQUEE = [
  'AWS', 'Terraform', 'Ansible', 'CloudFormation', 'Kubernetes', 'Docker', 'Helm', 'Jenkins',
  'GitLab CI/CD', 'GitHub', 'Python', 'Bash', 'Prometheus', 'Grafana', 'Splunk', 'ELK',
  'SonarQube', 'Black Duck', 'Fortify', 'Maven', 'JFrog Artifactory', 'Linux',
];

export const SKILLS = [
  { id: 'lang', icon: 'code', title: 'Programming', items: ['Python', 'Golang (fundamentals)', 'Bash scripting', 'Python automation'] },
  { id: 'cicd', icon: 'branch', title: 'CI/CD & Version control', items: ['Jenkins', 'Git', 'GitHub', 'GitLab CI/CD', 'Pipelines', 'Release management', 'Deployment automation'] },
  { id: 'cloud', icon: 'cloud', title: 'Cloud platforms', items: ['AWS IAM', 'AWS EC2', 'AWS VPC', 'AWS S3', 'AWS CloudWatch', 'AWS Route 53', 'Microsoft Azure'] },
  { id: 'iac', icon: 'layers', title: 'Infrastructure as Code', items: ['Terraform', 'Ansible', 'CloudFormation', 'Configuration management'] },
  { id: 'cont', icon: 'box', title: 'Containers & orchestration', items: ['Docker', 'Kubernetes', 'Helm charts', 'Microservices'] },
  { id: 'obs', icon: 'activity', title: 'Observability', items: ['Prometheus', 'Grafana', 'Splunk', 'ELK', 'Application monitoring', 'Infrastructure monitoring'] },
  { id: 'build', icon: 'package', title: 'Build & packages', items: ['Maven', 'JFrog Artifactory', 'Repository management', 'NPM'] },
  { id: 'sec', icon: 'shield', title: 'Application security', items: ['SonarQube', 'Black Duck', 'Fortify (SAST/DAST)'] },
  { id: 'linux', icon: 'terminal', title: 'Linux & networking', items: ['Ubuntu', 'CentOS', 'VMware', 'Load balancing', 'Networking security', 'Troubleshooting', 'Debugging'] },
  { id: 'data', icon: 'database', title: 'Databases & support tools', items: ['MySQL', 'MongoDB', 'REST APIs', 'Zendesk', 'Zoho Desk'] },
];

export const WORK = [
  { icon: 'branch', title: 'CI/CD pipelines across environments', text: 'Built and maintained end-to-end pipelines so applications ship faster, more reliably and with less manual work.', tags: ['Jenkins', 'Git', 'GitHub', 'GitLab'] },
  { icon: 'cloud', title: 'AWS infrastructure as code', text: 'Provisioned and managed scalable AWS infrastructure with a focus on high availability, security and consistent deployments.', tags: ['Terraform', 'CloudFormation', 'Ansible', 'AWS'] },
  { icon: 'server', title: 'Configuration management', text: 'Automated server provisioning, configuration and routine maintenance with Ansible, cutting manual intervention.', tags: ['Ansible', 'Provisioning'] },
  { icon: 'terminal', title: 'Python and Bash automation', text: 'Wrote scripts that streamline deployments, infrastructure operations, monitoring tasks and system administration.', tags: ['Python', 'Bash'] },
  { icon: 'box', title: 'Containers and Kubernetes', text: 'Containerized applications with Docker and deployed microservices on Kubernetes, using Helm charts for repeatable, version-controlled releases.', tags: ['Docker', 'Kubernetes', 'Helm'] },
  { icon: 'activity', title: 'Monitoring and alerting', text: 'Implemented monitoring, logging and alerting so issues are detected early and reliability keeps improving.', tags: ['Prometheus', 'Grafana', 'Splunk', 'ELK', 'CloudWatch'] },
  { icon: 'shield', title: 'DevSecOps in the pipeline', text: 'Integrated code quality and security scanning into CI/CD to automate compliance checks.', tags: ['SonarQube', 'Black Duck', 'Fortify'] },
  { icon: 'linux', title: 'Linux operations and RCA', text: 'Managed Ubuntu and CentOS servers: troubleshooting, performance tuning, patch management and root cause analysis.', tags: ['Ubuntu', 'CentOS', 'Patching'] },
  { icon: 'package', title: 'Builds and artifact management', text: 'Worked with REST APIs, Maven, JFrog Artifactory and NPM to support builds, package deployment and release automation.', tags: ['Maven', 'JFrog', 'NPM', 'REST APIs'] },
  { icon: 'users', title: 'Cross-team delivery in Agile', text: 'Collaborated with development, QA and infrastructure teams to automate deployments and resolve production issues.', tags: ['Agile', 'Release management'] },
];

export const STAGES = [
  { icon: 'branch', label: 'Commit', cmd: 'git push origin main' },
  { icon: 'package', label: 'Build', cmd: 'mvn package && docker build' },
  { icon: 'shield', label: 'Scan', cmd: 'SonarQube, Black Duck, Fortify' },
  { icon: 'layers', label: 'Provision', cmd: 'terraform apply' },
  { icon: 'rocket', label: 'Deploy', cmd: 'helm upgrade --install' },
  { icon: 'eye', label: 'Observe', cmd: 'Prometheus + Grafana alerts' },
];

export const STATS = [
  { value: 2.2, decimals: 1, suffix: '+', label: 'Years in DevOps' },
  { value: MARQUEE.length, decimals: 0, suffix: '', label: 'Core tools and platforms' },
  { value: SKILLS.length, decimals: 0, suffix: '', label: 'Skill areas' },
  { value: 1, decimals: 0, suffix: '', label: 'Company award' },
];
