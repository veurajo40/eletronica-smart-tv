# Painel do Google Ads no Looker Studio
## Guia passo a passo — Eletrônica Smart TV

---

## Parte 1 — Criar e conectar

1. Acesse **lookerstudio.google.com**
2. Clique em **Criar → Relatório**
3. Na tela de fontes de dados, pesquise **Google Ads** e clique nele
4. Clique em **Autorizar** e faça login com a conta que tem o Google Ads
5. Selecione sua conta do Google Ads na lista
6. Clique em **Adicionar** no canto superior direito
7. Quando perguntar "Deseja adicionar esta fonte ao relatório?", clique em **Adicionar ao relatório**

O painel em branco vai abrir. Agora é só montar os blocos.

---

## Parte 2 — Configurar o período padrão

No menu superior: **Recurso → Configurações do relatório**
- Período padrão: **Últimos 30 dias**
- Clique em **Salvar**

---

## Parte 3 — Montar o painel (bloco por bloco)

### Bloco 1 — Números do resumo (linha de cima)

Esses são os "placares" que aparecem em destaque.

Clique em **Adicionar um gráfico → Scorecard (Cartão de pontuação)**

Criar 5 cartões, um de cada vez, com estas métricas:

| Cartão | Métrica | Nome para exibir |
|--------|---------|-----------------|
| 1 | Clicks | Cliques |
| 2 | Impressions | Impressões |
| 3 | CTR | Taxa de cliques |
| 4 | Average CPC | Custo por clique |
| 5 | Cost | Gasto total |

**Como criar cada cartão:**
1. Clique em **Adicionar um gráfico → Scorecard**
2. No painel da direita, em **Métrica**, clique no campo e pesquise o nome em inglês da tabela acima
3. Em **Nome do campo**, troque para o nome em português da tabela
4. Arraste o cartão para posicionar na linha de cima

---

### Bloco 2 — Gasto e cliques ao longo do tempo (gráfico de linha)

Mostra se a campanha está acelerando ou caindo.

1. **Adicionar um gráfico → Gráfico de linhas**
2. **Dimensão:** Date (Data)
3. **Métricas:** Cost (Gasto) + Clicks (Cliques)
4. Título: **Evolução diária**

---

### Bloco 3 — Palavras-chave que mais gastam (tabela)

Essencial para saber onde o dinheiro está indo.

1. **Adicionar um gráfico → Tabela**
2. **Dimensão:** Keyword (Palavra-chave)
3. **Métricas (nessa ordem):**
   - Cost (Gasto)
   - Clicks (Cliques)
   - Impressions (Impressões)
   - CTR
   - Conversions (Conversões)
   - Cost/Conv. (Custo por conversão)
4. **Ordenar por:** Cost — decrescente
5. **Linhas:** 10
6. Título: **Palavras-chave — top 10 por gasto**

---

### Bloco 4 — Desempenho por grupo de anúncio (tabela)

Mostra qual grupo (TV Geral, Micro-ondas, etc.) está performando melhor.

1. **Adicionar um gráfico → Tabela**
2. **Dimensão:** Ad group (Grupo de anúncio)
3. **Métricas:** Cost, Clicks, CTR, Conversions, Cost/Conv.
4. **Ordenar por:** Cost — decrescente
5. Título: **Grupos de anúncio**

---

### Bloco 5 — Por dispositivo (gráfico de pizza)

Mostra se os cliques vêm mais do celular ou computador.

1. **Adicionar um gráfico → Gráfico de pizza**
2. **Dimensão:** Device (Dispositivo)
3. **Métrica:** Clicks (Cliques)
4. Título: **Cliques por dispositivo**

---

### Bloco 6 — Por horário (gráfico de barras)

Mostra em que horário as pessoas mais clicam — útil para ajustar a programação dos anúncios.

1. **Adicionar um gráfico → Gráfico de barras**
2. **Dimensão:** Hour of day (Hora do dia)
3. **Métrica:** Clicks (Cliques)
4. Título: **Cliques por hora do dia**

---

### Bloco 7 — Termos de pesquisa reais (tabela)

Mostra exatamente o que as pessoas digitaram antes de clicar no seu anúncio. Essencial para descobrir palavras-chave negativas.

1. **Adicionar um gráfico → Tabela**
2. Clique em **Adicionar dados** → escolha a mesma conta do Google Ads, mas desta vez selecione a tabela **Search terms** (Termos de pesquisa) em vez de Keywords
3. **Dimensão:** Search term (Termo de pesquisa)
4. **Métricas:** Impressions, Clicks, CTR, Cost
5. **Ordenar por:** Impressions — decrescente
6. **Linhas:** 20
7. Título: **O que as pessoas pesquisaram**

---

## Parte 4 — Organização visual

Sugestão de layout:

```
[ Cliques ] [ Impressões ] [ CTR ] [ CPC médio ] [ Gasto total ]

[ Evolução diária — gráfico de linha                           ]

[ Palavras-chave top 10      ] [ Grupos de anúncio             ]

[ Por dispositivo ] [ Por horário do dia                       ]

[ O que as pessoas pesquisaram — tabela completa               ]
```

---

## Parte 5 — Compartilhar e salvar

1. Clique em **Compartilhar** no canto superior direito
2. Adicione o e-mail **rajovendas@gmail.com** como visualizador
3. Clique em **Gerenciar acesso → Qualquer pessoa com o link pode visualizar**
4. Copie o link e salve num lugar fácil de achar (WhatsApp, favoritos do navegador)

---

## Parte 6 — O que olhar toda semana (checklist)

Toda segunda-feira, abrir o painel e verificar:

- [ ] **Gasto total** está dentro do orçamento planejado?
- [ ] **CTR** está acima de 3%? Se não, os anúncios precisam de ajuste
- [ ] **Custo por conversão** está abaixo de R$ 30?
- [ ] **Termos de pesquisa** tem algum irrelevante aparecendo? → adicionar como negativo
- [ ] Alguma **palavra-chave** gastou muito sem gerar conversão? → pausar

---

## Dica rápida — filtro de período

No canto superior direito do painel vai aparecer um seletor de datas.
Use esses períodos para comparar:
- **Esta semana vs semana passada** — ver tendência
- **Este mês vs mês passado** — ver crescimento
- **Últimos 30 dias** — visão geral
