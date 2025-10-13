exports.TimesheetPage = class TimesheetPage {
    constructor(page) {
        this.page = page
        this.time_button = page.getByRole('link', { name: 'Time' })
        this.submit_timesheet_button = page.getByRole('button', { name: 'Submit' })
        this.edit_timesheet_button = page.getByRole('button', { name: 'Edit' })
        this.save_timesheet_button = page.getByRole('button', { name: 'Save' })
        this.edit_timesheet_project_field = page.getByRole('textbox', { name: 'Type for hints...' })
        this.edit_timesheet_activity_field = page.getByText('-- Select --')
        this.manager_view_timesheet_button = page.getByRole('cell', { name: 'View' }).getByRole('button')
        this.manager_search_timesheet_view_button = page.getByRole('button', { name: 'View' })
        this.manager_approve_timesheet_button = page.getByRole('button', { name: 'Approve' })
        this.manager_reset_button = page.getByRole('button', { name: 'Reset' })
        this.manager_reject_button = page.getByRole('button', { name: 'Reject' })
    }

    async LogInHours() {
        await this.time_button.click()
        await this.submit_timesheet_button.click()
    }

    async EmployeeEditTimesheet() {
        await this.time_button.click()
        await this.edit_timesheet_button.click()
        await this.edit_timesheet_project_field.click()
        await this.edit_timesheet_project_field.fill("customer")
        await this.page.getByText('Customer - Project').click()
        await this.edit_timesheet_activity_field.click()
        await this.page.getByText('Activity 1').click()
        await this.save_timesheet_button.click()
    }

    async ManagerApproveTimesheet() {
        await this.time_button.click()
        await this.manager_view_timesheet_button.click()
        await this.manager_approve_timesheet_button.click()
    }

    async ManagerResetTimesheet() {
        await this.time_button.click()
        await this.page.getByRole('textbox', { name: 'Type for hints...' }).click()
        await this.page.getByRole('textbox', { name: 'Type for hints...' }).fill('john')
        await this.page.getByText('John Doe').click()
        await this.manager_search_timesheet_view_button.click()
        await this.manager_reset_button.click()
    }

     async ManagerRejectTimesheet() {
        await this.time_button.click()
        await this.manager_view_timesheet_button.click()
        await this.manager_reject_button.click()
    }
}