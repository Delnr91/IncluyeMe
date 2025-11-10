import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tudominio.cl'; // Reemplaza con dominio

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/proyecto`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/donar`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/politica-privacidad`, 
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date(),
    },
  ]
}