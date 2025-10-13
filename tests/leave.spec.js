import { test, expect } from '@playwright/test';
import { LeavePage } from '../pages/leave';
import { LoginPage } from '../pages/loginpage';

let leave
let login
test.beforeEach(async ({ page }) => {
    leave = new LeavePage(page)
    login = new LoginPage(page)
    await login.GoToHomepage()
})

test.describe('Leave - US01 - Employee Leave Request', () => {

    test('Leave - TC01 - Employee apply for sick leave', async ({ page }) => {
        await login.EmployeeSignIn()
        await leave.EmployeeApplySickLeave("14", "15")
    })

    test('Leave - TC02 - Attempt to leave request without balance', async ({ page }) => {
        await login.EmployeeSignIn()
        await leave.LeaveRequestWithoutBalance("13", "17")
        await expect(page.getByText('Balance not sufficient')).toBeVisible();
    })

})

test.describe('Leave - US02 - Manager Leave Request', () => {

    test('Leave - TC01 - Approve leave', async ({ page }) => {
        await login.ManagerSignIn()
        await leave.ManagerApproveLeave()

        //Manager resets leave
        await leave.ManagerResetLeave()
    })

    test('Leave - TC02 - Reject leave', async ({ page }) => {
        await login.EmployeeSignIn()
        await leave.EmployeeApplySickLeave("8", "12")
        await login.EmployeeSignOut()
        await login.ManagerSignIn()
        await leave.ManagerRejectLeave()
    })


})