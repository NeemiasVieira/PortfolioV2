export interface Project {
  id: number;
  title: string;
  description: string;
  isOpenSource: boolean;
  coverImage?: string;
  image?: string;
  repositoryLink?: string;
  projectLink?: string;
  initialDate: Date;
  finalDate?: Date;
  tecnologies: string[];
}

const Data = (mes: number, ano: number) => new Date(ano, mes - 1);

export const projects: Project[] = [
  {
    id: 1,
    title: 'DK Pedras Decorativas',
    description:
      'Projeto Freelance: Desenvolvimento de site para loja com catálogo de produtos. Responsável por prototipação, design, implementação de funcionalidades e manutenção. Otimizei a latência das imagens utilizando o Cloudinary com CDN para carregamento eficiente, maximizando recursos do plano gratuito',
    projectLink: 'https://dkpedrasdecorativas.com.br',
    isOpenSource: false,
    initialDate: Data(9, 2025),
    finalDate: Data(12, 2025),
    tecnologies: ['React', 'TypeScript', 'Cloudinary', 'Vercel'],
    coverImage: 'https://res.cloudinary.com/dnsc6qj4i/image/upload/v1739128193/dkpedras-cover-image_vfcp4y.png',
  },
  {
    id: 2,
    title: 'Plataforma Digital Nutrien',
    description:
      'Desenvolvimento de um produto de gestão e varejo de insumos agrícolas, com arquitetura baseada em microserviços e micro frontends, além de uma API Gateway. Responsável pelo refinamento de tarefas, implementação de novas funcionalidades, correção de bugs, integração com Microsoft Teams, processamento de planilhas de preços em Excel e PDFs, além de desenvolver fluxos de negociação de pedidos, catálogo de produtos e carrinho de compras.',
    isOpenSource: false,
    initialDate: Data(3, 2024),
    tecnologies: [
      'React-Native com Expo para Web',
      'TypeScript',
      'Node',
      'GraphQL',
      'Mikro-ORM',
      'PostgreSQL',
      'Docker',
      'AWS Services',
    ],
    coverImage: 'https://res.cloudinary.com/dnsc6qj4i/image/upload/v1739127610/nutrien-solucoes-agricolas2_ef7qgo.jpg',
  },
  {
    id: 3,
    title: 'Sistema de Monitoramento do Solo',
    description:
      'Projeto focado no controle e cuidado de plantas domésticas, utilizando sensores de NPK, temperatura, pH, luminosidade e captura de imagem para avaliar a saúde das plantas. Inclui uma plataforma digital moderna para análise de dados, gráficos, relatórios de saúde, histórico de registros, exportação para PDF, modo escuro (dark mode) e um painel administrativo com parametrização de espécies, modo simulação, entre outras funcionalidades.',
    isOpenSource: true,
    initialDate: Data(2, 2023),
    finalDate: Data(12, 2024),
    tecnologies: [
      'React',
      'TypeScript',
      'NestJs',
      'GraphQL',
      'MongoDb',
      'Docker',
      'NgInx',
      'VM Azure',
      'Python',
      'Flask',
      'TensorFlow',
    ],
    coverImage: 'https://res.cloudinary.com/dnsc6qj4i/image/upload/v1739129069/sms-cover-image_d6qazf.png',
  },
  {
    id: 4,
    title: 'TimeKeeping',
    description: 'Sistema interno de apontamentos de horas trabalhadas.',
    isOpenSource: false,
    initialDate: Data(1, 2024),
    finalDate: Data(3, 2024),
    tecnologies: ['Angular', 'TypeScript', 'Material-UI', 'SQL Server'],
    coverImage: 'https://res.cloudinary.com/dnsc6qj4i/image/upload/v1739129148/modalgr_f5pssd.jpg',
  },
  {
    id: 5,
    title: 'Transferência de Dados entre Sistemas Hospitalares',
    description:
      'Desenvolvimento de integração entre os sistemas médicos Tasy e PEP, correlacionando eventos e dados em um banco de dados unificado. Implementação de arquitetura hexagonal para otimizar a performance e a comunicação entre as aplicações, além de criação de testes unitários para garantir a confiabilidade do sistema.',
    isOpenSource: false,
    initialDate: Data(9, 2023),
    finalDate: Data(12, 2023),
    tecnologies: ['Java', 'Quarkus', 'Kafka', 'Docker', 'MongoDB'],
    coverImage: 'https://res.cloudinary.com/dnsc6qj4i/image/upload/v1739129334/mv_ndauqt.jpg',
  },
];
