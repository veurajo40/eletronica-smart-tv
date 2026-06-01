#!/usr/bin/env node
// Uso: node --env-file=.env scripts/postar-instagram.js <pasta-carrossel>

const fs = require('fs');
const path = require('path');

const IG_USER_ID = process.env.META_IG_USER_ID;
const ACCESS_TOKEN = process.env.META_IG_ACCESS_TOKEN;
const SITE_URL = process.env.SITE_URL?.replace(/\/$/, '');

async function api(endpoint, body) {
  const res = await fetch(`https://graph.instagram.com/v21.0/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...body, access_token: ACCESS_TOKEN }),
  });
  const data = await res.json();
  if (data.error) throw new Error(`Instagram API: ${data.error.message} (código ${data.error.code})`);
  return data;
}

async function main() {
  const pastaCarrossel = process.argv[2];

  if (!pastaCarrossel) {
    console.error('Uso: node --env-file=.env scripts/postar-instagram.js <pasta-carrossel>');
    process.exit(1);
  }

  if (!IG_USER_ID || !ACCESS_TOKEN || !SITE_URL) {
    console.error('Erro: variáveis META_IG_USER_ID, META_IG_ACCESS_TOKEN e SITE_URL são obrigatórias no .env');
    process.exit(1);
  }

  const legendaPath = path.join(pastaCarrossel, 'legenda.md');
  if (!fs.existsSync(legendaPath)) {
    console.error(`Legenda não encontrada: ${legendaPath}`);
    process.exit(1);
  }
  const legenda = fs.readFileSync(legendaPath, 'utf-8').trim();

  const instagramFolder = path.join(pastaCarrossel, 'instagram');
  if (!fs.existsSync(instagramFolder)) {
    console.error(`Pasta de slides não encontrada: ${instagramFolder}`);
    process.exit(1);
  }

  const slides = fs.readdirSync(instagramFolder)
    .filter(f => /^slide-\d+\.png$/.test(f))
    .sort();

  if (slides.length < 2) {
    console.error(`Carrossel precisa de ao menos 2 slides. Encontrados: ${slides.length}`);
    process.exit(1);
  }

  const slug = path.basename(pastaCarrossel).replace(/-\d{4}-\d{2}-\d{2}$/, '');

  console.log(`\nPostando no Instagram: ${slug} (${slides.length} slides)\n`);

  // Passo 1 — enviar cada slide como item de carrossel
  const containerIds = [];
  for (const slide of slides) {
    const nome = path.basename(slide, '.png');
    const imageUrl = `${SITE_URL}/img/posts/${slug}/${nome}.png`;
    process.stdout.write(`  Enviando ${slide}... `);
    const resultado = await api(`${IG_USER_ID}/media`, {
      image_url: imageUrl,
      is_carousel_item: true,
    });
    containerIds.push(resultado.id);
    console.log('✓');
  }

  // Passo 2 — criar container do carrossel com legenda
  process.stdout.write('  Criando container do carrossel... ');
  const carouselContainer = await api(`${IG_USER_ID}/media`, {
    media_type: 'CAROUSEL',
    children: containerIds.join(','),
    caption: legenda,
  });
  console.log('✓');

  // Passo 3 — publicar
  process.stdout.write('  Publicando no feed... ');
  const publicado = await api(`${IG_USER_ID}/media_publish`, {
    creation_id: carouselContainer.id,
  });
  console.log('✓');

  console.log(`\n✓ Publicado no Instagram — ID do post: ${publicado.id}\n`);
}

main().catch(err => {
  console.error('\nErro:', err.message);
  process.exit(1);
});
