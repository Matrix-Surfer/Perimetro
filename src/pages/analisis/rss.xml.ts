import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articulos = await getCollection('analisis');
  articulos.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: 'Perímetro — Análisis',
    description: 'Perspectiva propia sobre IA, ciberseguridad y tecnología empresarial para empresas mexicanas.',
    site: context.site!,
    items: articulos.map((articulo) => ({
      title: articulo.data.title,
      pubDate: new Date(articulo.data.date),
      description: articulo.data.resumen,
      link: `/analisis/${articulo.id}/`,
    })),
  });
}
