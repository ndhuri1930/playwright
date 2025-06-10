# Playwright UI Test Framework

A UI test automation framework built using [Playwright](https://playwright.dev/) for end-to-end (E2E) testing of web applications. This framework is designed to:

- Validate UI workflows like login functionality
- Integrate with TestRail (planned)
- Store test results in a database (planned)
- Run tests via Jenkins (planned)
- Generate and publish test reports (planned)

---

## 🚀 Features Implemented

- ✅ **Login Suite**
  - Valid credentials: success path validation
  - Invalid credentials: error handling validation
- ✅ **Page Navigation**
  - Visit a page and validate its title

---

## 🛠 Setup Instructions

### Prerequisites

- Node.js 18+ recommended
- Playwright installed via npm

### Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/ndhuri1930/playwright.git
cd playwright
npm install


### Running Tests

Run all tests (headless):
  npx playwright test
Run all tests (headed mode):
  npx playwright test --headed
Run a specific test file:
  npx playwright test tests/login.spec.js

### 🎨 Code Formatting and Linting

Format with Prettier:
  npx prettier --write .
Lint with ESLint:
  npx eslint .

### 📌 Roadmap / Planned Enhancements

 Integrate with TestRail for test case management
 Store test results in database
 Configure Jenkins CI for automated test runs
 Add test result report generation
 Expand test coverage to more UI workflows

### 📁 Tech Stack

Playwright
ESLint + Prettier
Node.js
