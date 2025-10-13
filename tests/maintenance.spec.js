import { test, expect } from '@playwright/test';
import { MaintenancePage } from '../pages/maintenance';
import { LoginPage } from '../pages/loginpage';

let login
let maintenance
test.beforeEach(async ({ page }) => {
    login = new LoginPage(page)
    maintenance = new MaintenancePage(page)
    await login.GoToHomepage()
})

test.describe('Login - US01 - Manager secure access', () => {
    test('Maintenance - TC01 - Manager is required to sign in with password', async ({ page }) => {
        await login.ManagerSignIn()
        await maintenance.SignInMaintenance("Mihaeladobr26@")
    })

    test.only('Maintenance - TC02 - Verify if records can be downloaded', async ({ page }) => {
        await login.ManagerSignIn()
        await maintenance.SignInMaintenance("Mihaeladobr26@")
        await maintenance.DownloadRecords('john')
    })
})