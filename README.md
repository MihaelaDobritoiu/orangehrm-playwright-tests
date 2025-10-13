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

- **Application Under Test:** [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/)
- **Automation Scope:**
  - 🔐 **Login:** Valid, invalid, and blank password logins for Employee & Manager
  - 👩‍💼 **Admin:** Create, edit, and delete user accounts
  - 🌴 **Leave:** Apply for, approve, reject, and reset leave requests
  - 🧰 **Maintenance:** Manager-only secure access and record download
  - 💬 **Buzz:** Employees post, like, and edit posts; Manager deletes posts
  - ⏱ **Timesheet:** Employee log/edit hours; Manager approve/reject/reset timesheets
- **Test Approach:** Page Object Model (POM)
- **Test Management:** Jira (for manual test tracking)
- **Tools:** Playwright · Node.js · Visual Studio Code · GitHub

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
### 🧪 Test Cases Overview
### 🔐 Login Module
| Test Case ID | Description                             |
| ------------ | --------------------------------------- |
| **TC01**     | Employee login with valid credentials   |
| **TC02**     | Employee login with invalid password    |
| **TC03**     | Verify error message for blank password |
| **TC04**     | Manager login with valid credentials    |

### 👩‍💼 Admin Module
| Test Case ID | Description             |
| ------------ | ----------------------- |
| **TC01**     | Admin adds a new user   |
| **TC02**     | Admin edits user status |
| **TC03**     | Admin deletes a user    |

### 🌴 Leave Module
| Test Case ID | Description                     |
| ------------ | ------------------------------- |
| **TC01**     | Employee applies for sick leave |
| **TC02**     | Leave request without balance   |
| **TC03**     | Manager approves leave          |
| **TC04**     | Manager rejects leave           |

### 🧰 Maintenance Module
| Test Case ID | Description                             |
| ------------ | --------------------------------------- |
| **TC01**     | Manager signs in to Maintenance section |
| **TC02**     | Manager downloads employee records      |

### 💬 Buzz Module
| Test Case ID | Description                   |
| ------------ | ----------------------------- |
| **TC01**     | Employee creates a post       |
| **TC02**     | Employee likes a post         |
| **TC03**     | Employee edits a post         |
| **TC04**     | Manager deletes employee post |

### ⏱ Timesheet Module
| Test Case ID | Description                              |
| ------------ | ---------------------------------------- |
| **TC01**     | Employee logs hours                      |
| **TC02**     | Employee edits timesheet before approval |
| **TC03**     | Employee cannot edit after approval      |
| **TC04**     | Manager resets timesheet                 |
| **TC05**     | Manager rejects timesheet                |

### 🧱 Page Object Model (POM)

Each page file in /pages/ encapsulates:

🎯 Locators for UI elements

⚙️ Methods for performing actions (click, fill, select, submit)

✅ Assertions for verifying expected outcomes

This modular design ensures high reusability, maintainability, and readability of test scripts.

### 🔑 Test Data
| Role     | Username    | Password         |
| -------- | ----------- | ---------------- |
| Admin    | `Admin`     | `Mihaeladobr26@` |
| Employee | `johndoe`   | `Johndoe1234@`   |

### 👩‍💻 Author

Mihaela Dobrițoiu
🎯 QA Automation Engineer | Playwright | JavaScript | Manual & Automated Testing

🌐 [Open Repository on GitHub](https://github.com/MihaelaDobritoiu)

### 📚 References
[Playwright Official Docs](https://playwright.dev/)

[OrangeHRM Local Host](http://localhost/orangehrm/web/index.php/)

[Node.js Downloads](https://nodejs.org/en)

[GitHub Guides](https://docs.github.com/en)

