export interface Certification {
  name: string;
  link: string;
  image: string;
  code?: string;
}

export const certifications: Certification[] = [
  {
    name: 'AWS Cloud Practitioner',
    link: 'https://www.credly.com/badges/51f41473-69f9-4ac2-8929-ca4ebe145e71',
    image: 'https://res.cloudinary.com/dnsc6qj4i/image/upload/v1746798697/aws-cloud-practitioner_yd3fuv.png',
    code: 'CLF-C02',
  },
];
