========================================
ANGULAR PRACTICAL FINAL FILE
========================================

Assignment:
Create an Angular application which will:

1. Register User
2. Login User
3. Show User Data on Profile Component

========================================
STEP 1 : Open CMD
========================================

Press:
Windows + R

Type:
cmd

Press Enter.

========================================
STEP 2 : Check Node.js
========================================

Command:

node -v

Purpose:
Checks Node.js installation.

Expected Output:

v24.x.x

========================================
STEP 3 : Install Angular CLI
========================================

Command:

npm install -g @angular/cli

Purpose:
Installs Angular CLI globally.

========================================
STEP 4 : Create Angular Project
========================================

Command:

ng new user-app

---

Question:

Which stylesheet format would you like to use?

Select:

CSS

---

Question:

Do you want to enable SSR and SSG?

Select:

N

Purpose:
Creates Angular project.

========================================
STEP 5 : Open Project Folder
========================================

Command:

cd user-app

========================================
STEP 6 : Create Components
========================================

Command 1:

ng generate component register

Purpose:
Creates Register component.

---

Command 2:

ng generate component login

Purpose:
Creates Login component.

---

Command 3:

ng generate component profile

Purpose:
Creates Profile component.

========================================
STEP 7 : Run Angular Application
========================================

Command:

ng serve

Purpose:
Starts Angular development server.

========================================
STEP 8 : Open Browser
========================================

Open:

http://localhost:4200

Purpose:
Runs Angular application in browser.

========================================
OPTIONAL SIMPLE UI CODE
========================================

---

FILE :
src/app/app.html

---

<h1>Angular User Management</h1>

<app-register></app-register>
<app-login></app-login>
<app-profile></app-profile>

========================================

---

FILE :
src/app/register/register.html

---

<h2>Register User</h2>

<input type="text" placeholder="Enter Name">
<br><br>

<input type="email" placeholder="Enter Email">
<br><br>

<button>Register</button>

========================================

---

FILE :
src/app/login/login.html

---

<h2>Login User</h2>

<input type="email" placeholder="Enter Email">
<br><br>

<input type="password" placeholder="Enter Password">
<br><br>

<button>Login</button>

========================================

---

FILE :
src/app/profile/profile.html

---

<h2>User Profile</h2>

<p>Name : Pritesh</p>
<p>Email : pritesh@gmail.com</p>

========================================
IMPORTANT COMMANDS
========================================

node -v

npm install -g @angular/cli

ng new user-app

cd user-app

ng generate component register

ng generate component login

ng generate component profile

ng serve

========================================
IMPORTANT VIVA QUESTIONS
========================================

1. What is Angular?

Angular is frontend framework developed by Google.

---

2. What is Angular CLI?

CLI is Command Line Interface used to create and manage Angular projects.

---

3. What is component in Angular?

Reusable UI part of Angular application.

---

4. What does ng new do?

Creates new Angular project.

---

5. What does ng serve do?

Runs Angular application.

---

6. What does ng generate component do?

Creates Angular component.

---

7. What is localhost:4200?

Default Angular development server.

---

8. What is TypeScript?

TypeScript is superset of JavaScript used in Angular.

---

9. What is interpolation in Angular?

Used to display data using:

{{ }}

---

10. What is data binding?

Connects component data with UI.

---

11. What is SPA?

Single Page Application.

---

12. Why Angular is used?

Used for building dynamic web applications.

---

13. Difference between Angular and JavaScript?

JavaScript:
Programming language.

Angular:
Frontend framework using TypeScript.

---

14. What is module in Angular?

Container for components and services.

---

15. What is app.component?

Root component of Angular application.

---

16. What is npm?

Node Package Manager.

---

17. Why use Angular?

For scalable and component-based applications.

---

18. What is decorator in Angular?

Special TypeScript feature starting with @.

Example:

@Component

---

19. What is routing in Angular?

Navigation between pages/components.

---

20. How to stop Angular server?

Press:

CTRL + C

========================================
FINAL PRACTICAL FLOW
========================================

node -v
↓
npm install -g @angular/cli
↓
ng new user-app
↓
cd user-app
↓
ng generate component register
ng generate component login
ng generate component profile
↓
ng serve
↓
Open:
http://localhost:4200

========================================
PRACTICAL COMPLETED
========================================
