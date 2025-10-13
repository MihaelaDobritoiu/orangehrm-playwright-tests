exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.homepage_url = 'http://localhost/orangehrm/web/index.php/auth/login'
        this.username_field = page.getByPlaceholder('Username')
        this.password_field = page.getByPlaceholder('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
        this.error_message = page.getByText('Invalid credentials')
        this.required_password = page.getByText('Required')
        this.manager_profile_button = page.getByRole('listitem').filter({ hasText: 'Mihaela Dobritoiu' }).locator('i')
        this.employee_profile_button = page.getByRole('listitem').filter({ hasText: 'John Doe' }).locator('i')
        this.sign_out_button = page.getByRole('menuitem', { name: 'Logout' })
    }

    async GoToHomepage() {
        await this.page.goto(this.homepage_url)
    }

    async SignIn(username, password) {
        await this.username_field.fill(username)
        await this.password_field.fill(password)
        await this.login_button.click()
    }

    async ManagerSignIn() {
        await this.username_field.fill('Admin')
        await this.password_field.fill('Mihaeladobr26@')
        await this.login_button.click()
    }

    async EmployeeSignIn() {
        await this.username_field.fill('johndoe')
        await this.password_field.fill('Johndoe1234@')
        await this.login_button.click()
    }
    
    async ManagerSignOut()
    {
        await this.manager_profile_button.click()
        await this.sign_out_button.click()
    }

    async EmployeeSignOut()
    {
        await this.employee_profile_button.click()
        await this.sign_out_button.click()
    }

    
}
