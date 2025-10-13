import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { BuzzPage } from '../pages/buzz';

let login
let buzz
test.beforeEach(async ({ page }) => {
    login = new LoginPage(page)
    await login.GoToHomepage()
    buzz = new BuzzPage(page)
})

test.describe('Buzz - US01 - Employee can access Buzz', () => {
    test('Buzz - TC01 - Employee creates post', async ({ page }) => {
        await login.EmployeeSignIn()
        await buzz.EmployeeCreatesPost('Hello, everyone!')
        await expect(page.getByText('Successfully Saved')).toBeVisible()
    })

     test('Buzz - TC02 - Employee likes post', async ({ page }) => {
        await login.EmployeeSignIn()
        await buzz.EmployeeLikesPost()
        await expect(page.getByText('1 Like')).toBeVisible()
    })

     test('Buzz - TC03 - Employee can edit post', async ({ page }) => {
        await login.EmployeeSignIn()
        await buzz.EmployeeEditsPost(' I am Joe.')
        await expect(page.getByText('Successfully Updated')).toBeVisible()
    })
})

test.describe('Buzz - US02 - Manager can access Buzz', () => {
    test('Buzz - TC01 - Manager can delete employee post', async ({ page }) => {
        await login.ManagerSignIn()
        await buzz.ManagerDeletesPost()
        await expect(page.getByText('Successfully Deleted')).toBeVisible()
    })
})

