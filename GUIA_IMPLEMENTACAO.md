# GUIA DE IMPLEMENTAÇÃO - CWBRONZE

## ESTRUTURA DO PROJETO
O projeto está em: `cwbronze-lovable-final/lovable-design/`

**NÃO MOVA ARQUIVOS DA PASTA!** O Vercel está configurado para ler dessa estrutura.

---

## ARQUIVOS PARA ATUALIZAR

### 1. FAVICON
**Arquivo:** `cwbronze-lovable-final/lovable-design/public/favicon.ico`
- Substituir pelo arquivo `favicon.ico` fornecido

### 2. HEADER (Menu)
**Arquivo:** `cwbronze-lovable-final/lovable-design/src/components/Header.tsx`
- Substituir pelo arquivo `Header.tsx` fornecido
- Mudança: "SERVIÇOS" → "MÁQUINAS" + adiciona "OUTROS SERVIÇOS"

### 3. APP (Rotas)
**Arquivo:** `cwbronze-lovable-final/lovable-design/src/App.tsx`
- Substituir pelo arquivo `App.tsx` fornecido
- Adiciona rota `/outros-servicos`

### 4. PÁGINA OUTROS SERVIÇOS (NOVA)
**Arquivo:** `cwbronze-lovable-final/lovable-design/src/pages/OutrosServicos.tsx`
- Criar novo arquivo com conteúdo fornecido

### 5. PÁGINA SERVIÇOS (Atualizada)
**Arquivo:** `cwbronze-lovable-final/lovable-design/src/pages/Servicos.tsx`
- Substituir pelo arquivo `Servicos.tsx` fornecido
- Mudança: Título "Nossos Serviços" → "Nossas Máquinas"

### 6. AGENDAMENTO (Validação)
**Arquivo:** `cwbronze-lovable-final/lovable-design/src/pages/Agendamento.tsx`
- Substituir pelo arquivo `Agendamento.tsx` fornecido
- Adiciona validação de formulário

---

## COMO FAZER O COMMIT

```bash
cd /caminho/para/lovable-design
git add .
git commit -m "UPDATE: Todas as melhorias implementadas"
git push origin main
```

---

## VERIFICAR DEPLOY
Após o push, acesse: https://vercel.com/cwbronze/lovable-design/deployments
Aguarde o deploy ficar "Ready" (verde)
