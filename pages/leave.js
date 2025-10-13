exports.LeavePage = class LeavePage {
    constructor(page) {
        this.page = page
        this.leave_button = page.getByRole('link', { name: 'Leave' })
        this.apply_leave_button = page.getByRole('link', { name: 'Apply' })
        this.leave_type_button = page.locator('form i').first()
        this.sick_leave_option = page.getByRole('option', { name: 'Sick' })
        this.family_problems_leave_option = page.getByRole('option', { name: 'Family problems' })
        this.from_date_select = page.locator('form i').nth(2)
        this.to_date_select = page.locator('form i').nth(3)
        this.leave_form_apply_button = page.getByRole('button', { name: 'Apply' })
        this.approve_leave_button = page.getByRole('button', { name: 'Approve' })
        this.show_leave_status_dropdown = page.locator('form i').nth(2)
        this.scheduled_option = page.getByText('Scheduled')
        this.search_leave = page.getByRole('button', { name: 'Search' })
        this.three_dots_button = page.getByRole('button', { name: '' })
        this.cancel_leave_button = page.getByText('Cancel Leave')
        this.reject_leave_button = page.getByRole('button', { name: 'Reject' })
    }


    async EmployeeApplySickLeave(from, to) {

        //Navigate to leave page and apply for leave
        await this.leave_button.click()
        await this.apply_leave_button.click()

        //Select sick leave
        await this.leave_type_button.click()
        await this.sick_leave_option.click()

        //Select the date
        await this.from_date_select.click()
        await this.page.locator(`.oxd-calendar-date >> text=${from}`).first().click()
        await this.to_date_select.click()
        await this.page.locator(`.oxd-calendar-date >> text=${to}`).first().click()

        //Apply
        await this.leave_form_apply_button.click()
        await this.leave_form_apply_button.click()
    }

    async LeaveRequestWithoutBalance(from, to) {
        await this.leave_button.click()
        await this.apply_leave_button.click()

        await this.leave_type_button.click()
        await this.family_problems_leave_option.click()

        await this.from_date_select.click()
        await this.page.locator(`.oxd-calendar-date >> text=${from}`).first().click()
        await this.to_date_select.click()
        await this.page.locator(`.oxd-calendar-date >> text=${to}`).first().click()
    }

    async ManagerApproveLeave() {
        await this.leave_button.click()
        await this.approve_leave_button.click()
    }

     async ManagerResetLeave() {
        await this.show_leave_status_dropdown.click()
        await this.scheduled_option.click()
        await this.search_leave.click()
        await this.three_dots_button.click()
        await this.cancel_leave_button.click()
    }

    
     async ManagerRejectLeave() {
       await this.leave_button.click()
       await this.reject_leave_button.click()
    }

}