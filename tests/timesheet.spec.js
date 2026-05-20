import { test, expect } from '@playwright/test';
import { TimesheetPage } from '../pages/timesheet';
import { LoginPage } from '../pages/loginpage';
import { time } from 'console';

let timesheet
let login
test.beforeEach(async ({ page }) => {
    timesheet = new TimesheetPage(page)
    login = new LoginPage(page)
    await login.GoToHomepage()
})

test.describe('Timesheet - US01 - Employee Timesheet', () => {

    test('Timesheet - TC01 - Employee can log in hours', async ({ page }) => {
        await login.EmployeeSignIn()
        await timesheet.LogInHours()
    })

    test('Timesheet - TC02 - Edit timesheet before approval', async ({ page }) => {
        await login.EmployeeSignIn()
        await timesheet.EmployeeEditTimesheet()
    })

    test('Timesheet - TC03 - Attempt to edit after Admin approval', async ({ page }) => {
        //Manager approves Timesheet
        await login.ManagerSignIn()
        await timesheet.ManagerApproveTimesheet()
        await login.ManagerSignOut()

        //Employee verify edit button
        await login.EmployeeSignIn()
        await timesheet.time_button.click()
        await expect(timesheet.edit_timesheet_button).toHaveCount(0)
    })
})

test.describe('Timesheet - US02 - Manager Timesheet', () => {

    test('Timesheet - TC01 - Manager can reset timesheet', async ({ page }) => {
        await login.ManagerSignIn()
        await timesheet.ManagerResetTimesheet()
    })

    test('Timesheet - TC02 - Manager rejects timesheet', async ({ page }) => {
        await login.ManagerSignIn()
        await timesheet.ManagerRejectTimesheet()
    })
})
