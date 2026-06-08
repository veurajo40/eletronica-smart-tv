# Como importar essa campanha no Google Ads

## Antes de tudo — o que você precisa

- Conta no Google Ads criada em **modo especialista** (não o modo fácil)
- Google Ads Editor instalado no computador: https://ads.google.com/intl/pt-BR/home/tools/ads-editor/
- Conversões configuradas no site (ver `configuracoes.md`)

---

## Passo a passo de importação no Google Ads Editor

### 1. Abrir o Editor e conectar à sua conta
- Abrir o Google Ads Editor
- Clicar em **Adicionar conta** e fazer login

### 2. Criar a campanha — importar na ordem correta

A ordem importa. Cada arquivo depende do anterior.

| Ordem | Arquivo | O que cria |
|-------|---------|-----------|
| 1 | `campanhas.csv` | A campanha principal |
| 2 | `grupos.csv` | Os 5 grupos de anúncio |
| 3 | `keywords.csv` | As 44 palavras-chave |
| 4 | `keywords-negativas.csv` | As 30 palavras-chave negativas |
| 5 | `anuncios.csv` | Os 5 anúncios responsivos (RSA) |
| 6 | `extensoes-sitelinks.csv` | Os 5 sitelinks |
| 7 | `extensoes-chamadas.csv` | Extensão de telefone |
| 8 | `extensoes-snippets.csv` | Lista de serviços e marcas |

### 3. Como importar cada arquivo

Para cada arquivo:
1. No Editor, ir em **Conta → Importar → CSV**
2. Selecionar o arquivo
3. Verificar se não há erros na pré-visualização
4. Clicar em **Importar**

### 4. Antes de publicar — checklist obrigatório

- [ ] Substituir `[SUBSTITUIR PELO SEU NÚMERO]` no arquivo `extensoes-chamadas.csv` pelo número real
- [ ] Verificar se todas as headlines têm no máximo 30 caracteres
- [ ] Verificar se todas as descriptions têm no máximo 90 caracteres
- [ ] Confirmar que NÃO há extensão de localização configurada
- [ ] Configurar conversões no Google Tag Manager (clique WhatsApp + clique ligar)
- [ ] Vincular conta do Google Ads ao Google Analytics (não ao Google Meu Negócio)
- [ ] Confirmar orçamento diário: R$ 25,00
- [ ] Confirmar que os anúncios estão com status **Pausado**
- [ ] Criar manualmente as frases de destaque (ver `configuracoes.md`) — esse tipo de extensão não tem formato CSV padrão no Editor

### 5. Ativar a campanha

Só ativar após confirmar toda a checklist:
1. No Editor, selecionar a campanha
2. Mudar status de **Pausado** para **Ativo**
3. Clicar em **Publicar alterações**

---

## O que monitorar na primeira semana

Acessar o Google Ads diariamente nos primeiros 7 dias:

| Métrica | Onde ver | O que fazer se estiver ruim |
|---------|----------|----------------------------|
| Impressões = 0 | Visão geral | Verificar se campanha está ativa e orçamento suficiente |
| CTR < 2% | Palavras-chave | Reescrever headlines do grupo com baixo CTR |
| Cliques sem conversão | Conversões | Revisar se o botão WhatsApp do site está funcionando |
| Gasto muito alto | Orçamento | Pausar palavras-chave de correspondência ampla |

## Revisão da semana 2

- Ir em **Palavras-chave → Termos de pesquisa**
- Verificar quais buscas reais dispararam os anúncios
- Adicionar termos irrelevantes como palavras-chave negativas
- Pausar palavras com muita impressão e zero clique

---

## Estrutura criada

- 1 campanha
- 5 grupos de anúncio: TV Geral, TV Marca, Micro-ondas, A Domicílio, Região
- 44 palavras-chave positivas
- 30 palavras-chave negativas
- 5 anúncios responsivos de pesquisa (RSA)
- 5 sitelinks
- 1 extensão de chamada
- 2 extensões de snippet
