import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tudominio.cl'; // Reemplaza con tu dominio

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/proyecto`,
      lastModified: new Date(),
    },
  ]
}