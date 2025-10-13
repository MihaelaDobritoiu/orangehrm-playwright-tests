import { test, expect } from '@playwright/test';
import { AdminPage } from '../pages/admin';

let admin
test.beforeEach(async ({ page }) => {
    admin = new AdminPage(page)
    await admin.GoToHomepage()
    await admin.SignIn('Admin', 'Mihaeladobr26@')
})

test.describe('Admin - US01 - As an admin, I want to manage the users', () => {
    test('Admin - TC01 - Admin can successfully add a new user', async ({ page }) => {
        await admin.CreateEmployeeAccount('Miranda', 'Kerr', 'miranda', 'Mirandakerr1234@')
        await page.waitForTimeout(3000)
    })

    test('Admin - TC02 - Edit User Status Successfully', async ({ page }) => {
        await admin.EditUserStatus('miranda')

        // Verificare că status-ul a fost schimbat
        const updatedStatus = page.getByText('Disabled')
        await expect(updatedStatus).toBeVisible()
    })

    test('Admin - TC03 - Delete User Successfully', async ({ page }) => {
        await admin.DeleteUser('miranda')

        // Verificare că user-ul nu mai apare
        const deletedUser = page.locator('tr', { hasText: 'miranda' })
        await expect(deletedUser).toHaveCount(0)
    })
})


