# Instructor Demo Script (10–12 min)

**Goal:** Show the *feel* of both frameworks and how small changes cascade via tokens/validation.

1) Open `App_mui.tsx` (MUI)
   - Show `MUI_Login.tsx` (basic)
   - Swap to `MUI_Login_RHF_Zod.tsx`, add rule live:
     ```ts
     password: z.string().min(8).regex(/\d/, 'Include a number')
     ```
   - Submit a bad password → observe helper text

2) Run Lighthouse (Mobile)
   - Screenshot Accessibility score

3) Switch to `App_antd.tsx` (AntD)
   - Highlight `Form.Item` rules; add `min: 8` rule live

4) Switch to `App_antd_themed.tsx`
   - Change `colorText` or `fontSize` and re-run Lighthouse
   - Discuss contrast + token-level fixes

**Transition line:** “Now you’ll migrate a screen yourselves, measure with Lighthouse, and write a short memo.”
