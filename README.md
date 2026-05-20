# 🧡 **OrangeHRM Automation Testing Project**

![Playwright](https://img.shields.io/badge/Playwright-Testing-blue?logo=playwright)
![Automation](https://img.shields.io/badge/Automation-QA-green)
![Node.js](https://img.shields.io/badge/Node.js-LTS-brightgreen)
![GitHub](https://img.shields.io/badge/Repository-Public-blueviolet)

---

This repository contains **automated functional and regression tests** for **OrangeHRM**, developed using **Playwright** and following the **Page Object Model (POM)** design pattern.

It validates the key OrangeHRM modules, including **Login**, **Admin**, **Leave**, **Maintenance**, **Buzz**, and **Timesheet** functionalities for both **Employee** and **Manager** roles.

---

## 📋 **Project Overview**

- **Application Under Test:** OrangeHRM Demo  

- **Automation Scope:**
  - 🔐 **Login:** Valid, invalid, and blank password scenarios for Employee & Manager  
  - 👩‍💼 **Admin:** Create, edit, and delete user accounts  
  - 🌴 **Leave:** Apply for leave, approval and rejection flows  
  - 🧰 **Maintenance:** Secure manager access and employee records download  
  - 💬 **Buzz:** Employee posts, likes, and edits; Manager deletes posts  
  - ⏱ **Timesheet:** Employee logs and edits hours; Manager approves, rejects, and resets timesheets  

- **Test Approach:** Page Object Model (POM) for reusable and maintainable test scripts  

- **Test Management:** Jira for user stories, test case management, and bug tracking

  ## 🧰 **Tools & Technologies**

| Category              | Tool / Library              |
|----------------------|----------------------------|
| Automation Framework | Playwright                 |
| Language             | JavaScript                 |
| Test Runner          | Playwright Test            |
| Reporting            | Playwright HTML Reports    |
| Test Design Pattern  | Page Object Model (POM)    |
| Test Management      | Jira                       |



## 🧩 **Test Coverage & Traceability**
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
📷 Screenshot from Jira showing the structure:
<img width="1915" height="866" alt="jira-backlog" src="https://github.com/user-attachments/assets/479b6ed2-d8bc-429b-b652-1b88d20041fe" />


### 🧪 Test Case Example
📷 Screenshot from Jira showing a test case:
<img width="1911" height="875" alt="jira-testcase" src="https://github.com/user-attachments/assets/c885e337-81d9-4b5e-8e1f-af7c2329050e" />


### 🐞 Bug Report Example
📷 Here is an example of a documented bug:
<img width="1910" height="874" alt="jira-bug1" src="https://github.com/user-attachments/assets/16ae5a52-1188-406a-a0cc-40731a9ae267" />

<img width="1917" height="874" alt="jira-bug2" src="https://github.com/user-attachments/assets/0d98085e-6473-4421-8492-e00b0273cc99" />


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

