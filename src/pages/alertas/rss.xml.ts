import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const alertas = await getCollection('alertas');
  alertas.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: 'Perímetro — Alertas',
    description: 'Incidentes de ciberseguridad relevantes para empresas mexicanas.',
    site: context.site!,
    items: alertas.map((alerta) => ({
      title: alerta.data.title,
      pubDate: new Date(alerta.data.date),
      description: alerta.data.resumen,
      link: `/alertas/${alerta.id}/`,
    })),
  });
}
