exports.MaintenancePage = class MaintenancePage {
    constructor(page) {
        this.page = page
        this.homepage_url = 'http://localhost/orangehrm/web/index.php/auth/login'
        this.maintenance_button = page.getByRole('link', { name: 'Maintenance' })
        this.password_field = page.locator('input[name="password"]')
        this.confirm_button = page.getByRole('button', { name: 'Confirm' })
        this.access_records_button = page.getByRole('link', { name: 'Access Records' })
        this.employee_name_field = page.getByRole('textbox', { name: 'Type for hints...' })
        this.search_button = page.getByRole('button', { name: 'Search' })
        this.download_button = page.getByRole('button', { name: 'Download' })
    }

    async GoToHomepage() {
        await this.page.goto(this.homepage_url)
    }

    async SignInMaintenance(password) {
        await this.maintenance_button.click()
        await this.password_field.click()
        await this.password_field.fill(password)
        await this.confirm_button.click()
    }

    async DownloadRecords(employee_name) {
        await this.access_records_button.click()

        //Search the employee name
        await this.employee_name_field.click()
        await this.employee_name_field.fill('john')
        await this.page.getByText('john').click()
        await this.search_button.click()

        await this.download_button.click()
        await this.page.waitForTimeout(1500)
    }

}