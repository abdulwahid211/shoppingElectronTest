# ⚡ Automation Framework: Playwright + Cucumber (BDD) + Electron

This folder contains the automation part of the **Shopping Electron Test**.  
The framework is built with **Playwright**, **Cucumber.js (BDD)**, and integrates with the provided **Electron app**.

---

## 🎯 Automated Scenarios

For this attempt I automated two scenarios from the manual test suite:

- **@Checkout-001** → Successful checkout with valid details  
- **@Checkout-002** → Checkout with invalid email (error displayed)  

You can find these scenarios in:  
[`features/checkout.feature`](./features/checkout.feature)

---

## 💡 Why BDD (Gherkin)?

I chose to use **BDD with Gherkin** because:

- Test cases are **easy for stakeholders to read and understand**  
- Steps are **reusable** across multiple scenarios  
- The style supports **collaboration** between QA, Dev, and Product teams  

This was implemented using **Cucumber.js** integrated with Playwright.

---

## 📂 Folder Structure

- **`features/`** → Feature files written in Gherkin syntax (`.feature`).  
- **`features/steps/`** → Step definitions for Gherkin steps.  
- **`features/support/`** → Hooks and custom Cucumber world.  
- **`src/pages/`** → Page Object Model (POM) classes for different screens.  
- **`src/helper/`** → Helper utilities (e.g. Electron app launcher, base page).  
- **`reports/`** → Cucumber JSON + generated HTML reports.  

---

## ▶️ Usage (Local Run)

### 1. Install dependencies
```bash
npm install
```

### 2. Run tests
```bash
npx cucumber-js
```

### 3. Generate HTML Report (reports folder)
```bash
node report.js
```

### Debug tests (Playwright Inspector)
```bash
PWDEBUG=1 npx cucumber-js
```