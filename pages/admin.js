exports.AdminPage = class AdminPage {
    constructor(page) {
        this.page = page
        this.homepage_url = 'http://localhost/orangehrm/web/index.php/auth/login'
        this.username_field = page.getByPlaceholder('Username')
        this.password_field = page.getByPlaceholder('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
        this.admin_button = page.getByRole('link', { name: 'Admin' })
        this.add_button = page.getByRole('button', { name: ' Add' })
        this.user_role_dropdown_button = page.locator('form i').first()
        this.ess_button = page.getByRole('option', { name: 'ESS' })
        this.status_dropdown_button = page.locator('form i').nth(1)
        this.enabled_option = page.getByRole('option', { name: 'Enabled' })
        this.disabled_option = this.page.getByRole('option', { name: 'Disabled' })
        this.employee_name_textbox = page.getByRole('textbox', { name: 'Type for hints...' })
        this.first_user_option = page.getByText('John Doe')
        this.username_textbox = page.getByRole('textbox').nth(2)
        this.password_textbox = page.getByRole('textbox').nth(3)
        this.confirm_password_textbox = page.getByRole('textbox').nth(4)
        this.save_button = page.getByRole('button', { name: 'Save' })
        this.search_username_input = page.getByRole('textbox').nth(1)
        this.search_button = page.getByRole('button', { name: 'Search' })
        this.edit_button = page.getByRole('button', { name: '' }).nth(2)
        this.delete_button = page.getByRole('button', { name: '' }).nth(2)
        this.confirm_delete_button = page.getByRole('button', { name: 'Yes, Delete' })

        // Create employee
        this.PIM_button = page.getByRole('link', { name: 'PIM' })
        this.add_employee_button = page.getByRole('link', { name: 'Add Employee' })
        this.first_name_textbox = page.getByRole('textbox', { name: 'First Name' })
        this.last_name_textbox = page.getByRole('textbox', { name: 'Last Name' })
        this.create_login_details_button = page.locator('form span')
        this.username_create_textbox = page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input')
        this.password_create_textbox = page.locator('input[type="password"]').first()
        this.password_create_confirm_textbox = page.locator('input[type="password"]').nth(1)
        this.save_button = page.getByRole('button', { name: 'Save' })

    }

    async GoToHomepage() {
        await this.page.goto(this.homepage_url)
    }

    async SignIn(username, password) {
        await this.username_field.fill(username)
        await this.password_field.fill(password)
        await this.login_button.click()
    }

    async CreateEmployeeAccount(firstname, lastname, username, password) {
        await this.PIM_button.click()
        await this.add_employee_button.click()
        await this.first_name_textbox.click()
        await this.first_name_textbox.fill(firstname)
        await this.last_name_textbox.click()
        await this.last_name_textbox.fill(lastname)
        await this.create_login_details_button.click()
        await this.username_create_textbox.click()
        await this.username_create_textbox.fill(username)
        await this.password_create_textbox.click()
        await this.password_create_textbox.fill(password)
        await this.password_create_confirm_textbox.click()
        await this.password_create_confirm_textbox.fill(password)
        await this.save_button.click()
    }

    async EditUserStatus(username) {
        await this.admin_button.click()
        await this.search_username_input.click()
        await this.search_username_input.fill(username)
        await this.search_button.click()
        await this.search_button.click()
        await this.edit_button.click()
        await this.status_dropdown_button.click()
        await this.disabled_option.click()
        await this.save_button.click()
        await this.page.waitForTimeout(2000)
    }

    async DeleteUser(username) {
        await this.admin_button.click()
        await this.delete_button.click()
        await this.confirm_delete_button.click()
        await this.page.waitForTimeout(1500)
    }

}

