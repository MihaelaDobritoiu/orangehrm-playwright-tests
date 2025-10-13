exports.BuzzPage = class BuzzPage {
    constructor(page) {
        this.page = page
        this.homepage_url = 'http://localhost/orangehrm/web/index.php/auth/login'
        this.buzz_section_button = page.getByRole('link', { name: 'Buzz' })
        this.text_field = page.getByRole('textbox', { name: 'What\'s on your mind?' })
        this.post_button = page.getByRole('button', { name: 'Post', exact: true })
        this.like_button = page.locator('#heart').first()
        this.three_dots_button = page.getByRole('button', { name: '' })
        this.edit_post_button = page.getByText('Edit Post')
        this.edit_text_field = page.getByRole('dialog').getByRole('textbox')
        this.post_edited_text_button = page.getByRole('dialog').getByRole('button', { name: 'Post' })
        this.delete_post_button = page.getByText('Delete Post')
        this.delete_confirmation_button = page.getByRole('button', { name: ' Yes, Delete' })
    }

    async GoToHomepage() {
        await this.page.goto(this.homepage_url)
    }

    async EmployeeCreatesPost(text) {
        await this.buzz_section_button.click()
        await this.text_field.click()
        await this.text_field.fill(text)
        await this.post_button.click()
    }

    async EmployeeLikesPost(text) {
        await this.buzz_section_button.click()
        await this.like_button.click()
    }

    async EmployeeEditsPost(editedtext) {
        await this.buzz_section_button.click()
        await this.three_dots_button.click()
        await this.edit_post_button.click()
        await this.edit_text_field.click()
        await this.edit_text_field.fill(editedtext)
        await this.post_edited_text_button.click()
    }

    async ManagerDeletesPost() {
        await this.buzz_section_button.click()
        await this.three_dots_button.click()
        await this.delete_post_button.click()
        await this.delete_confirmation_button.click()
    }
}