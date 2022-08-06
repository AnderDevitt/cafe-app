# T3A2B-Final-Coder-Assessment-Part-B
The original T3A2A-Final-Coder-Assessment-Part-A document begins below this section.

## Team Members

- Andrew Devitt
- Raj Ranj

## GitHub Repository
### React App
https://github.com/AnderDevitt/cafe-app
### Rails Backend
https://github.com/AnderDevitt/cafe-api

## Deployment Links
### React App (Netlify)
https://wonderful-meerkat-7d4755.netlify.app
### Rails Backend (Heroku)
https://als-cafe-api.herokuapp.com/

The backend was working for testing from Postman and the App, but I started getting a Cors Header 431 error around 6pm Saturday. And it's beyond me now.

## Presentation Slides
[slides_pdf_file](./docs/presentation.pdf)

## WEBSITE DESCRIPTION

This website is an application designed for a local cafe where the manager wishes to have a system that will track staff sign-in and sign-out times for their shifts and then allow the manager to output reports based on this data. The application will not be connected to any other systems such as employee databases or payroll, and is to be a self-contained app that will run on a tablet in the cafe for staff to use when clocking in and out, and the managers PC for administrator access.

## PURPOSE - Achievement
The first purpose (recording staff shift times) has been achieved to a degree with a few ongoing issues. Unfortunately, the libraries and approaches taken caused many work-arounds to be necessary to achieve this. There are some quirks that will be fixed in the next iteration. The second purpose (admin functionality) has been partially achieved. 

## FUNCTIONALITY AND FEATURES  - Achievement and Changes

### Site Navigation
The Navbar functions pretty much as the design required. There have been some changes, such as the links to admin functions being on the Admin Panel page rather than the Navbar itself. As we were unable to complete the admin features, the planned links on pages were only partially implemented. This is something to complete after the assessment submission.  

### Main Page(s) for Staff (Cafe Page) - Achievement and Changes
The original design called for a single page which rendered each employee on a card with a form that took a pin (password) and had two buttons "start" and "stop". All of the initial code featured this, but while we could start and stop a shift (create and edit a shift in the database), we had trouble indicating when a shift was active. The eventual workaround divided this into two pages Cafe and Shifts. It's not ideal, and not as DRY as we would like, but it does achieve the required function.

What we have, it that and employee can begin a shift on the Cafe Home page, which displays a list of staff that are currently available to work. When an employee chooses to begin their shift, a popup window will open and they will be prompted to enter their username and pin to verify their id. A glitch that I was unable to solve (we tried a few times with educators assisstance) is that often any user can enter their credentials for another to begin that employee's shift.
![loading_page](./docs/cafe-home-page.png)
![loading_page](./docs/start-shift.png)

Navigating the the Shifts Page shows any shifts that are currently running. From their card, users can see the date, when they clocked-in and can choose to end their shift, again by validating with pin and username. Unfortunately, again this didn't always work. Especially if check_ownership and authenticate_employee were used in the shifts controller in the api.  
![loading_page](./docs/shifts-page.png)
![loading_page](./docs/end-shift.png)
![shifts_page](./docs/wireframe_shift.PNG)

We began the project following close to the client requirement that cafe staff only use their login to verify shifts. For most of the project we separate tables for admin and general cafe user accounts which logged into the app, and an employees table that had a password(pin) that was only used for shift start and end.

While it was working most of the time as intended, any code changes usually initiated new clashes between the passwords and authentication, and additionally it required a lot of doubling up. So at the last minute, I restructured the database to merge all user data into the one employees table. Then worked on the necessary coding in front and back ends to reflect this change and tried to remove as much of the extra components and code that were created building the old method.  

We had a react-clock rendering from a library on the cafe page as in the planning and wireframes, however the useEffect to increment the clock set off the useEffect for retrieving the list of employees from the backend every second. The advice from the troubleshooting trello was to move the clock. For a time this was working fine, but in the current code it needed to be temporarily removed. The client agreed with this as he did not want a clock on the page in the original brief.

### Admin Panel - Achievement
The admin currently can:

- Allow the Admin to open a form and create new staff.
- Allow the editing of an existing staff member's details.
- Allow staff status to be changed from active (available to work) and deactive (currently unavailable or no longer employed). Due to the nature of the database and purpose for this data, it is undesireable for staff data to be deleted at any time.

Most of the basic goals are done for the admin as required in the planning. Unfortunately the Report Generation (at the time of writing this) has not been operational.
![loading_page](./docs/admin-panel.png)
![admin_page](./docs/wireframe_admin.PNG)


### Generate Reports
This feature was not achieved to the planned degree. We will continue to work on this in future edits. It should at the least display a table of shifts for a given date range. 

## TARGET AUDIENCE
Cafe Staff 
- The application can record the data for staff in the cafe clocking in/out. Multiple users can begin and end shifts from the same terminal and the data stores in the database.
Manager
- He can add and edit staff details. More work is needed on the reports to meet client requirements.

## TECH STACK

The tech stack used for this application was the following.

### Code

#### Frontend:

- HTML
- JavaScript
- React
- Material UI & Styled Components
- CSS

#### Backend:

- Ruby
- Ruby on Rails

### Database

- PostgreSQL

### Source Control and Project Management

- Git
- Github
- Trello

### Deployment

- Netlify (frontend)
- Heroku (backend and database)

## LIBRARIES USED



## USER STORIES

The user personas are: user, active staff member, admin.

User: In the context of the app, a user is a staff member with a password for the applicaion.
Active Staff Member: Staff members can be deactivated by the manager when they no longer work for the cafe or take an extended break. Active members are visible on the Web Client when staff are logging their shift times.
Admin: This is the manager for the cafe.

### User

- As a user I want to be able to log into the system with a general staff log-in, so that only staff can see the clock-in page and individual staff don't have to sign in to the system. (Changed in final version - they can now log in as themselves)
- As a user I want to log out of the system at the end of the cafe operating hours so that the app is secure. (Changed in final version - they can now log out as themselves)
- As a user I want to always see the shifts page and list of active staff during the cafe hours so that all staff can quickly begin and end their shifts from the one page. (Changed in final version - there are two distinct pages)

### Active Staff Member

- As an active staff member I want to do all the same things as a user.
- As an active staff member I want to enter my pin number so that I can authenticate my actions on the shifts screen.
- As an active staff member I want to click the start and end buttons so that I can begin or end my shift and record the correct time that I do so.
- As an active staff member I want to be able to see a system clock so that I know the exact time that will be recorded for my shift start and end. (Changed in final version - clock removed)

### Admin

- As the admin I want to do all the same things as an active staff member.
- As the admin I want to see admin options added to the shifts screen, so that I can perform additional functions (create user, edit user, generate report).
(Changed to their own Admin Panel screen)
- As the admin I want to add new staff members when people join the team.
- As the admin I want to be able to edit a staff member's details, so that I can update their information, reset forgotten pins, and change active status. 
- As the admin I want to deactivate staff members who leave and reactivate returning staff, so that only staff currently working are displayed on the shifts screen.
- As the admin I want to deactivate staff who leave so that they remain in the database and I do not need to delete their data.
- As the admin I want to be able to edit my own details so that I can change my username and password. (Changed - function was created and worked but deemed unnecessary by client at this time)
- As the admin I want to generate a report on staff work times for a given period so that I can compare times worked with payroll data. (Not achieved yet)

## PROJECT MANAGEMENT

Our team has used Trello as a project management tool.

![trello_screenshot](./docs/t1.png)
![trello_screenshot](./docs/t2.png)
![trello_screenshot](./docs/t3.png)
![trello_screenshot](./docs/t4.png)
![trello_screenshot](./docs/t5.png)
![trello_screenshot](./docs/t6.png)
![trello_screenshot](./docs/t7.png)
![trello_screenshot](./docs/t8.png)
![trello_screenshot](./docs/t9.png)
![trello_screenshot](./docs/t10.PNG)

# T3A2A-Final-Coder-Assessment-Part-A

## Team Members

- Andrew Devitt
- Raj Ranj

## GitHub Repository

https://github.com/AnderDevitt/T3A2A-Final-Coder-Assessment-Part-A

## Presentation Slides
[slides_pdf_file](./docs/presentation.pdf)

## WEBSITE DESCRIPTION

This website is an application designed for a local cafe where the manager wishes to have a system that will track staff sign-in and sign-out times for their shifts and then allow the manager to output reports based on this data. The application will not be connected to any other systems such as employee databases or payroll, and is to be a self-contained app that will run on a tablet in the cafe for staff to use when clocking in and out, and the managers PC for administrator access.

## PURPOSE

The application has two purposes. Firstly to allow staff to accurately record the start and end times of their shifts. The client brief states that this must be simple for staff to accomplish and as clear as possible. Shift data will be stored in a relational database.

The second purpose is to allow the admin to create adn edit staff data, and most importantly, generate simple reports on the shift start and end times or workers. The reports generated will allow the manager to accurately check staff work times in the cafe and compare with the payroll department.

## FUNCTIONALITY AND FEATURES

### Site Navigation

The site will have a nav bar at the top of the screen which will allow navigation to all pages for a logged-in Administrator, the staff shifts page for cafe staff, and log-in/log-off options.

Pages have links and buttons to perform actions and navigate to new pages and back.

### Main Page for Staff

The cafe will have a general user login to access the main page which staff will interact with on shift. This login will secure the app and allow it to remain open during the cafe operating hours. The client has requested that staff not have to individually take time logging in.

On this page:

- A clock will clearly display the current time for staff to see.
- For each member of staff currently 'active', a form section will be displayed with their name, a field to ewnter their pin number, and buttons to start and end their shift.
- When a pin is entered and the start button is pressed, it will clearly show as pressed and deactivated so staff know they have clocked on.

### Admin Panel

The administrator will see the same basic page generated for the cafe staff, however it will display more options and display all staff members whether their status is 'active' or 'deactive'. This view will provide basic CRUD operations for the Administrator (cafe manager).

There will be buttons and links to:

- Allow the Admin to generate reports on staff hours
- Allow the Admin to open a form and create new staff.
- Allow the editing of an existing staff member's details.
- Allow staff status to be changed from active (available to work) and deactive (currently unavailable or no longer employed). Due to the nature of the database and purpose for this data, it is undesireable for staff data to be deleted at any time.

### Generate Reports

The client has requested that the app be able to generate reports for all staff currently on the roster (active) and individual staff members over a given date range. The form will request this information from the relational SQL database and return it for display on the manager's screen.

A sprinkle feature that will be included in the application if possible, is that the data can then be exported in a format compatible with Microsoft Excel.

### Alerts and Notices

The application will display alert and notice massages at the top of the screen to inform the user about successful actions and errors.

## TARGET AUDIENCE

The cafe is a busy environment in the lobby of an office building in the Brisbane CBD. A lot of foot traffic and customers pass through the lobby throughout the day which creates an active work environment. This has been taken into account in the app design by the client and developers.

The application has two target audiences. First and foremost the client (the cafe manager) who will use the application to monitor staff shifts and assist in payroll checking. Most features of the application are for the use of the administrator. The second target group are the cafe employees, who will use it to clock in and out at work. This is the only interaction they need to perform with the app. There are a small number of employees on shift at any time, so they are occasionally very busy.

### The manager needs:

- Accurate times recorded for each employess who works on any day.
- To be able to add and edit staff details.
- Access to the data stored in the database in a clear and readable format.

### The staff need:

- Quick and simple access to the app on shift to minimise time waste.
- To see the current time that will be logged.
- Speedy authentication when they clock in/out.
- Clear indication that they have successfully clocked on/off.

## TECH STACK

The tech stack for this application will be the following.

### Code

#### Frontend:

- HTML
- JavaScript
- React
- Material UI & Styled Components

#### Backend:

- Ruby
- Ruby on Rails

### Database

- PostgreSQL

### Source Control and Project Management

- Git
- Github
- Trello

### Deployment

- Netlify (frontend)
- Heroku (backend and database)

## DATAFLOW DIAGRAM

Dataflow diagrams are separated by function.

### System log in and log out

![system_log_in](./docs/dataflow_1.png)

### Staff Start or End their Shift

![staff_shifts](./docs/dataflow_2.png)

### Administrator Creates a New User or Edits a User

![admin_cread_edit_user](./docs/dataflow_3.png)

### Administrator Generates a Report

![admin_generate_report](./docs/dataflow_4.png)

### APPLICATION ARCHITECTURE DIAGRAM

![architecture_diagram](./docs/ArchitectureDiagram.PNG)

## USER STORIES

The user personas are: user, active staff member, admin.

User: In the context of the app, a user is a staff member with a password for the applicaion.
Active Staff Member: Staff members can be deactivated by the manager when they no longer work for the cafe or take an extended break. Active members are visible on the Web Client when staff are logging their shift times.
Admin: This is the manager for the cafe.

### User

- As a user I want to be able to log into the system with a general staff log-in, so that only staff can see the clock-in page and individual staff don't have to sign in to the system.
- As a user I want to log out of the system at the end of the cafe operating hours so that the app is secure.
- As a user I want to always see the shifts page and list of active staff during the cafe hours so that all staff can quickly begin and end their shifts from the one page.

### Active Staff Member

- As an active staff member I want to do all the same things as a user.
- As an active staff member I want to enter my pin number so that I can authenticate my actions on the shifts screen.
- As an active staff member I want to click the start and end buttons so that I can begin or end my shift and record the correct time that I do so.
- As an active staff member I want to be able to see a system clock so that I know the exact time that will be recorded for my shift start and end.

### Admin

- As the admin I want to do all the same things as an active staff member.
- As the admin I want to see admin options added to the shifts screen, so that I can perform additional functions (create user, edit user, generate report).
- As the admin I want to be able to begin and end staff shifts, so that I can do this when staff have forgotten or in an emergency. 
- As the admin I want to add new staff members when people join the team.
- As the admin I want to be able to edit a staff member's details, so that I can update their information, reset forgotten pins, and change active status.
- As the admin I want to deactivate staff members who leave and reactivate returning staff, so that only staff currently working are displayed on the shifts screen.
- As the admin I want to deactivate staff who leave so that they remain in the database and I do not need to delete their data.
- As the admin I want to be able to edit my own details so that I can change my username and password.
- As the admin I want to generate a report on staff work times for a given period so that I can compare times worked with payroll data.

## WIREFRAMES

### Loading Page
This is the first page the application will open to. It is not strictly necessary to the current intended deployment of the application, but is a legacy requirement of the client for the original desired startup of the application. In the original design specification, the frontend would only be run locally in the cafe and on the manager's PC. It was intended that clicking the 'Staff" button would immediately open the Shifts Page without any authentication. Clicking on the 'Admin' button would however require authentication. The client still desires this functionality in the final product, however due to the initial Netlify deployment for this project, he has agreed that staff authentication is currently best practice. 

![loading_page](./docs/wireframe_loading.PNG)

### Sign In Page
Both staff and admin will be directed to this screen from the loading page. For staff, there will be a general cafe username and password so that the first member to arrive can start up the system and staff will therefore not have to enter individual usernames and passwords. The admin will also enter their username and password. 

Staff will then be directed to the page view titled "My Shift". The admin will be redirected to the 'Admin Panel' which is identical to the My Shift page, but has extra options for the administrator.

![sign_in](./docs/wireframe_sign_in.PNG)

### Shifts Page
All staff will interact with this page. Aside from the loading and sign in pages, this is the only view that staff will see. Here an employee can enter their pin number and then click 'start' to clock-in. They will be authenticated and their start time will be sent to the database. At the end of their shift they enter their pin and click 'end' and their finish time is sent. To log out of the system at the end of the shift they will use the log-out option in the navbar menu. 

![shifts_page](./docs/wireframe_shift.PNG)

### Admin Panel
The Admin Panel has the same list of active staff with their start and end buttons as on the My Shift page. This will allow the admin to clock staff on/off if there is an issue on the staff terminal, someone forgets to do so, or should there be an emergency such as sudden illness.

The clock is replaced with buttons to 'Add New Staff' and 'Generate Report', and 'edit' links are added to each staff member's listing.

![admin_page](./docs/wireframe_admin.PNG)

### Add New Staff Page
The admin will be directed to this page when choosing to add a new staff member. They can include the firstname, lastname, and set a new pin number. Saving an entry will return them to the Admin Panel.

![add_staff_page](./docs/wireframe_add.PNG)

### Edit Staff Page
Identical to the new staff page, this page is reached via the edit links next to staff details. The page will display the staffmember's name in the title. Saving changes will return the admin to the Admin Panel. There will also be a 'back' button added in case changes are not desired. 

![edit_staff_page](./docs/wireframe_edit.PNG)

### Generate Report Page
This page is accessed via the 'Generate Report' button on the Admin Panel. On this page, the admin can select a start and end date for the report. From a drop-down menu, they can use checkboxes to select all staff, or any staff on the list. Clicking the button to generate the report here will fetch the relevant data from the database and display it on the DisplayReport Page. 

![generate_report_page](./docs/wireframe_generate.PNG)

### Display Report Page
This page has a section at the top where the admin can conveniently adjust the date range. Below, a table is generated that will show the staff names, start and end times, of all staff who worked on the days specified in the date range. The 'Export' button is currently a sprinkle feature to export the report to a Excel format file.

![report_page](./docs/wireframe_report.PNG)

### Client Presentation
On Friday 15th, I had a meeting with the client to discuss the current progress in the application. I am including below extra wireframes with more visual design asthetics that were used for this presentation. They were made based on my earlier wireframes, with my input, but I must acknowledge that a friend drew these up for e as I didn't have access to the software suite used. The wireframes that I made above in this readme file include changes that were requested during that meeting based on the images in this pdf, and on the older versions of my wireframes that thes in turn were based on.

[styled_wireframes_pdf_file](./docs/client_wireframes.pdf)

## PROJECT MANAGEMENT

Our team has used Trello as a project management tool.

![trello_screenshot](./docs/t1.png)
![trello_screenshot](./docs/t2.png)
![trello_screenshot](./docs/t3.png)
![trello_screenshot](./docs/t4.png)
![trello_screenshot](./docs/t5.png)
![trello_screenshot](./docs/t6.png)
![trello_screenshot](./docs/t7.png)
![trello_screenshot](./docs/t8.png)
![trello_screenshot](./docs/t9.png)
![trello_screenshot](./docs/t10.PNG)