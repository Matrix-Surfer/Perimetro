interface Env {
  DASHBOARD_PASSWORD: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const password = context.env.DASHBOARD_PASSWORD;

  if (!password) {
    return new Response('Dashboard no configurado: falta DASHBOARD_PASSWORD', { status: 503 });
  }

  const auth = context.request.headers.get('Authorization');

  if (auth?.startsWith('Basic ')) {
    const encoded = auth.slice(6);
    const decoded = atob(encoded);
    const colonIdx = decoded.indexOf(':');
    const provided = colonIdx !== -1 ? decoded.slice(colonIdx + 1) : decoded;

    if (provided === password) {
      return context.next();
    }
  }

  return new Response('Acceso no autorizado', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Perímetro Dashboard", charset="UTF-8"',
    },
  });
};
