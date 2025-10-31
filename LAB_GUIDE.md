# Student Lab Guide (Step-by-Step)

## Objective
Migrate one screen from **MUI → AntD**, measure a11y/perf via **Lighthouse**, and write a **trade-off memo**.

## Step 0 — Setup
1. `npm install`
2. Start: `npm run dev`
3. In `src/main.tsx`, pick your starting App (uncomment one import).

## Step 1 — Baseline (MUI)
1. Use `App_mui.tsx`; open `MUI_Login.tsx` or `MUI_TableDemo.tsx`
2. Run Lighthouse (Mobile + Desktop) → save screenshots

## Step 2 — RHF + Zod (Optional if time)
1. Swap in `MUI_Login_RHF_Zod.tsx` in `App_mui.tsx`
2. Add a password rule (include a number) and a confirm password field
3. Re-run Lighthouse and note changes

## Step 3 — Migrate to AntD
1. Switch to `App_antd.tsx`
2. Replace MUI components with AntD equivalents
   - TextField → Form.Item + Input
   - Table → Table (sorting/pagination builtin)
3. Add one `rules` validation to the login email/password

## Step 4 — Improve Contrast via Tokens
1. Use `App_antd_themed.tsx` (ConfigProvider)
2. Tweak `token.colorText` or `token.fontSize` to address any contrast warnings
3. Re-run Lighthouse and capture before/after

## Step 5 — Memo
- Use the provided template from the earlier bundle or your own:
  - Context (what migrated)
  - Observations (a11y, perf, DX, density)
  - Recommendation (when to choose which and why)
- Attach screenshots (before/after scores)

## Deliverables
- Running AntD screen
- Lighthouse screenshots (before/after)
- 1-page trade-off memo

**Timebox:** 25–35 minutes total.
