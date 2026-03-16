# CURA Healthcare Appointment Test

This project automates making an appointment on the [CURA Healthcare Demo](https://katalon-demo-cura.herokuapp.com/) website using **Cypress**. The test logs in, fills the appointment form, submits it, and verifies the confirmation. Failed tests automatically take a screenshot.

---

## Steps to Run

1. **Install Node.js and Cypress**  
2. **Clone the repo**:  
```bash
git clone <your-repo-url>
cd <your-project-folder>
npm install

npx cypress open
npx cypress run

```
## Test Flow

1. **Visit CURA Healthcare website**  
2. **Click Make Appointment**  
3. **Login** with:  
   - **Username:** John Doe  
   - **Password:** ThisIsNotAPassword  
4. **Fill the appointment form:**  
   - **Facility:** Hongkong CURA Healthcare Center  
   - **Hospital readmission:** checked  
   - **Program:** Medicaid  
   - **Visit date:** 30/03/2026  
   - **Comment:** 30/03/2026  
5. **Book appointment**  
6. **Verify confirmation page and comment**
