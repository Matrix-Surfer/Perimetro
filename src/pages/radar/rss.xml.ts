import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const items = await getCollection('radar');
  items.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: 'Perímetro — Radar',
    description: 'Lo más relevante de la semana en IA y ciberseguridad, curado para empresas mexicanas.',
    site: context.site!,
    items: items.map((item) => ({
      title: item.data.title,
      pubDate: item.data.pubDate,
      description: item.data.context,
      link: `/radar/${item.id}/`,
    })),
  });
}
