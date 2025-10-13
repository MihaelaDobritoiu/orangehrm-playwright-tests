import { LoginPage } from "../pages/login";
import { test, expect } from '@playwright/test';

let login
test.beforeEach(async ({ page }) => {
    login = new LoginPage(page)
    await login.GoToHomepage()
})

test.describe('Login - US01 - As an employee, I want to login ', () => {
    test('Login - TC01 - Employee login with valid credentials ', async ({ page }) => {
        await login.SignIn('johndoe', 'Johndoe1234@')
    })

    test('Login - TC02 - Employee login with invalid password', async ({ page }) => {
        await login.SignIn('johndoe', 'wrongpass123')
        await expect(login.error_message).toBeVisible()
    })

    test('Login - TC03 - Verify error message when logging in with blank password', async ({ page }) => {
        await login.SignIn('johndoe', '')
        await expect(login.required_password).toBeVisible()
    })
})

test.describe('Login - US02 - As a manager, I want to login', () => {
    test('Login - TC01 - Manager login with valid credentials', async ({ page }) => {
        await login.ManagerSignIn()
    })
})