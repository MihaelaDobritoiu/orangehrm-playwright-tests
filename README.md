# 🧡 **OrangeHRM Automation Testing Project**

![Playwright](https://img.shields.io/badge/Playwright-Testing-blue?logo=playwright)
![Automation](https://img.shields.io/badge/Automation-QA-green)
![Node.js](https://img.shields.io/badge/Node.js-LTS-brightgreen)
![GitHub](https://img.shields.io/badge/Repository-Public-blueviolet)

---

This repository contains **automated functional and regression tests** for **OrangeHRM**, developed using **Playwright** and following the **Page Object Model (POM)** design pattern.

It validates the key OrangeHRM modules, including **Login**, **Admin**, **Leave**, **Maintenance**, **Buzz**, and **Timesheet** functionalities for both **Employee** and **Manager** roles.

---

## 🧾 **Project Overview**

- **Application Under Test:**  
  https://opensource-demo.orangehrmlive.com/

- **Test Approach:** Page Object Model (POM)

- **Test Management:** Jira (User Stories, Test Cases, Bug Tracking)

- **Tools:**  
  Playwright · Node.js · Visual Studio Code · GitHub

---

## 🗂️ **Project Structure**
```
├── pages/
│ ├── admin.js
│ ├── loginpage.js
│ ├── leave.js
│ ├── maintenance.js
│ ├── buzz.js
│ └── timesheet.js
├── tests/
│ ├── admin.spec.js
│ ├── login.spec.js
│ ├── leave.spec.js
│ ├── maintenance.spec.js
│ ├── buzz.spec.js
│ └── timesheet.spec.js
├── playwright.config.js
├── package.json
└── README.md
```

---

## ⚙️ **Installation & Setup**

### 1️⃣ Clone the repository
```bash
git clone https://github.com/MihaelaDobritoiu/orangehrm-playwright-tests.git
cd orangehrm-playwright-tests
```

### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Install browsers
```
npx playwright install
```
### 🚀 Running Tests
▶ Run all tests
```
npx playwright test
```

### 🧩 Run a specific test file
```
npx playwright test tests/login.spec.js
```

### 🧠 Run tests in UI mode
```
npx playwright test --ui
```

### 📊 View HTML Report
```
npx playwright show-report
```
## 🧪 **Test Coverage by User Stories**

Each module is structured around **User Stories**, ensuring clear traceability between business requirements and automated test coverage.

---

### 🔐 **Login Module**

**User Story 1:**  
_As an employee, I want to login_

- TC01 – Employee login with valid credentials  
- TC02 – Employee login with invalid password  
- TC03 – Verify error message for blank password  

**User Story 2:**  
_As a manager, I want to login_

- TC01 – Manager login with valid credentials  

---

### 👩‍💼 **Admin Module**

**User Story:**  
_As an admin, I want to manage users_

- TC01 – Admin can successfully add a new user  
- TC02 – Edit user status successfully  
- TC03 – Delete user successfully  

---

### 💬 **Buzz Module**

**User Story 1:**  
_Employee can access Buzz_

- TC01 – Employee creates a post  
- TC02 – Employee likes a post  
- TC03 – Employee edits a post  

**User Story 2:**  
_Manager can access Buzz_

- TC01 – Manager deletes employee post  

---

### 🌴 **Leave Module**

**User Story 1:**  
_Employee leave request_

- TC01 – Employee applies for sick leave  
- TC02 – Attempt leave request without balance  

**User Story 2:**  
_Manager leave request_

- TC01 – Manager approves leave  
- TC02 – Manager rejects leave  

---

### 🧰 **Maintenance Module**

**User Story:**  
_Manager secure access_

- TC01 – Manager signs in with password  
- TC02 – Verify records can be downloaded  

---

### ⏱ **Timesheet Module**

**User Story 1:**  
_Employee timesheet_

- TC01 – Employee logs hours  
- TC02 – Edit timesheet before approval  
- TC03 – Attempt to edit after approval  

**User Story 2:**  
_Manager timesheet_

- TC01 – Manager resets timesheet  
- TC02 – Manager rejects timesheet  
---

## 📌 **Jira Test Management & Bug Tracking**

This project includes structured **test management in Jira**, covering:

- 📋 User Stories & backlog organization  
- ✅ Detailed test cases linked to requirements  
- 🐞 Bug tracking with full documentation  

### 🗂️ Backlog Overview
![Jira Backlog](./screenshots/jira-backlog.png)

### 🧪 Test Case Example
![Test Case](./screenshots/jira-testcase.png)

### 🐞 Bug Report Example
![Bug 1](./screenshots/jira-bug1.png)
![Bug 2](./screenshots/jira-bug2.png)

---

## 🧱 **Page Object Model (POM)**

Each file in `/pages/` encapsulates:

- 🎯 Locators for UI elements  
- ⚙️ Methods for user actions (click, fill, submit)  
- ✅ Assertions for validation  

This design ensures:

- High reusability  
- Maintainability  
- Clean and readable test scripts  

---

## 🔑 **Test Data**

| Role     | Username   | Password         |
|----------|------------|------------------|
| Admin    | `Admin`    | `Mihaeladobr26@` |
| Employee | `johndoe`  | `Johndoe1234@`   |

---

## 👩‍💻 **Author**

**Mihaela Dobrițoiu**  
QA Automation Engineer  
Playwright · JavaScript · Manual & Automated Testing  

🌐 https://github.com/MihaelaDobritoiu  

---

## 📚 **References**

- https://playwright.dev/  
- http://localhost/orangehrm/web/index.php/  
- https://nodejs.org/en  
- https://docs.github.com/en  
[GitHub Guides](https://docs.github.com/en)

