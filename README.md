# 🎨 Portfolio - Personal Portfolio Website# 🎨 Portfolio - Personal Portfolio Website# 🎨 Portfolio - تطبيق معرض أعمالي# Portfolio

An advanced web application for displaying personal information, projects, and services with a complete admin dashboard. Built with **Angular 20** and modern technologies.An advanced web application for displaying personal information, projects, and services with a complete admin dashboard. Built with **Angular 20** and modern technologies.

------تطبيق ويب متقدم لعرض المعلومات الشخصية والأعمال والخدمات مع لوحة تحكم إدارية كاملة. مبني بـ **Angular 20** والتقنيات الحديثة.This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.13.

## 📋 Table of Contents## 📋 Table of Contents

- [Features](#-features)- [Features](#-features)---## Development server

- [Architecture](#-architecture)

- [Requirements](#-requirements)- [Architecture](#-architecture)

- [Installation & Setup](#-installation--setup)

- [Project Structure](#-project-structure)- [Requirements](#-requirements)

- [Components & Services](#-components--services)

- [Routing System](#-routing-system)- [Installation & Setup](#-installation--setup)

- [Technologies Used](#-technologies-used)

- [Customization](#-customization)- [Project Structure](#-project-structure)## 📋 الجدول المحتوياتTo start a local development server, run:

- [Security](#-security)

- [Testing](#-testing)- [Components & Services](#-components--services)

- [Production & Deployment](#-production--deployment)

- [Troubleshooting](#-troubleshooting)- [Routing System](#-routing-system)

- [Contributing](#-contributing)

- [License](#-license)- [Technologies Used](#-technologies-used)

- [Support](#-support)

- [المميزات](#-المميزات)```bash

---

---

## ✨ Features

- [الهيكل المعماري](#-الهيكل-المعماري)ng serve

### 🌐 Public Visitors (Frontend):

## ✨ Features

- **Home Page** - Display basic information and welcome message

- **About Page** - Detailed information about the author- [المتطلبات](#-المتطلبات)```

- **Services** - List of offered services

- **Portfolio** - Showcase previous projects and works### 🌐 Public Visitors (Frontend):

- **Clients** - Display partner companies and clients

- **Contact** - Contact form and business information- **Home Page** - Display basic information and welcome message- [التثبيت والتشغيل](#-التثبيت-والتشغيل)

- **Header & Footer** - Unified design and easy navigation

- **Responsive Design** - Works perfectly on all devices- **About Page** - Detailed information about the author

### 🔐 Admin Dashboard:- **Services** - List of offered services- [البنية المشروع](#-البنية-المشروع)Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

- **Secure Login System** - Protected access to admin panel- **Portfolio** - Showcase previous projects and works

- **Home Editor** - Edit and manage homepage content

- **About Editor** - Update personal and professional information- **Clients** - Display partner companies and clients- [المكونات والخدمات](#-المكونات-والخدمات)

- **Services Manager** - Add, edit, and delete services with full CRUD operations

- **Portfolio Manager** - Manage projects and portfolio items- **Contact** - Contact form and business information

- **Contact Editor** - Customize contact information and details

- **Modern Admin Interface** - Professional and user-friendly UI- **Header & Footer** - Unified design and easy navigation- [نظام التوجيه](#-نظام-التوجيه)## Code scaffolding

- **Sidebar Navigation** - Easy access to all admin features

- **Real-time Updates** - Changes reflect immediately### 🔐 Admin Dashboard:- [التكنولوجيا المستخدمة](#-التكنولوجيا-المستخدمة)

---- **Login System** - Secure access to admin panel

## 🏗️ Architecture- **Home Editor** - Edit homepage contentAngular CLI includes powerful code scaffolding tools. To generate a new component, run:

The project follows a **Component-Based Architecture** with clear separation between public interface and admin dashboard:- **About Editor** - Update personal information

````- **Services Manager** - Add, edit, and delete services---

App Root

├── Header & Footer (Shared across all pages)- **Portfolio Manager** - Manage projects and portfolio items

├── Public Layout Routes

│   ├── Home Component- **Contact Editor** - Customize contact information```bash

│   ├── About Component

│   ├── Services Component- **Modern Admin Interface** - Professional and user-friendly UI

│   ├── Portfolio Component

│   ├── Clients Component## ✨ المميزاتng generate component component-name

│   └── Contact Component

│---

├── Admin Dashboard Routes

│   ├── Login Component (Authentication)```

│   └── Admin Dashboard Container

│       ├── Admin Header## 🏗️ Architecture

│       ├── Admin Sidebar

│       └── Admin Child Routes### 🌐 للزوار (الواجهة العامة):

│           ├── Home Editor

│           ├── About EditorThe project follows a **Component-Based Architecture** with a clear separation between public interface and admin dashboard:

│           ├── Services Editor

│           ├── Portfolio Editor- **الصفحة الرئيسية** - عرض المعلومات الأساسية والترحيبFor a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

│           └── Contact Editor

│```

└── Core Services

    └── Admin Service (API Communication)App Root- **صفحة عني** - معلومات تفصيلية عن المؤلف

````

├── Header & Footer (Shared)

### Key Design Principles:

├── Layout Routes (Public)- **الخدمات** - قائمة بالخدمات المقدمة```bash

- **Separation of Concerns** - Public and admin sections are completely separated

- **Reusable Components** - Shared components for header and footer│ ├── Home

- **Service-Based Architecture** - Centralized API communication through admin service

- **Modular Structure** - Each feature is self-contained and maintainable│ ├── About- **المحفظة** - عرض الأعمال والمشاريع السابقةng generate --help

---│ ├── Services

## 📦 Requirements│ ├── Portfolio- **العملاء** - عرض العملاء الذين تم التعاون معهم```

- **Node.js** version 18 or higher│ ├── Clients

- **npm** (Node Package Manager) version 8 or higher

- **Angular CLI** version 20.3.13 or higher│ └── Contact- **التواصل** - نموذج للتواصل المباشر

- **TypeScript** version 5.9 or higher

- Modern web browser (Chrome, Firefox, Safari, Edge)├── Admin Routes (Admin Panel)

---│ ├── Login- **Header و Footer** - تصميم موحد وسهل التنقل## Building

## 🚀 Installation & Setup│ └── Dashboard

### Step 1: Clone the Repository│ ├── Home Editor

`````bash│ ├── About Editor

# Clone the project from GitHub

git clone <repository-url>│ ├── Services Editor### 🔐 لوحة التحكم (Admin Dashboard):To build the project run:



# Navigate to the project directory│ ├── Portfolio Editor

cd Frontend

```│ ├── Contact Editor- **نظام تسجيل الدخول** - حماية الوصول للوحة التحكم



### Step 2: Install Dependencies│ └── Admin Sidebar & Header



```bash└── Services (Admin Service)- **محرر الصفحة الرئيسية** - تعديل محتوى الصفحة الرئيسية```bash

# Install all required npm packages

npm install    └── API Calls



# If you encounter any issues, try clearing the npm cache````- **محرر صفحة عني** - تحديث المعلومات الشخصيةng build

npm cache clean --force

npm install

`````

---- **مدير الخدمات** - إضافة وتعديل وحذف الخدمات```

### Step 3: Configure the Application

Before running the application, ensure:

- The backend API is running on `http://localhost:5000/api`## 📦 Requirements- **مدير المحفظة** - إدارة الأعمال والمشاريع

- Your environment configuration is correct

- All dependencies are installed

### Step 4: Run Development Server- **Node.js** (version 18 or higher)- **محرر صفحة التواصل** - تخصيص معلومات التواصلThis will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

````bash- **npm** or **yarn**

# Start the development server

npm start- **Angular CLI** (version 20.3.13 or higher)- **واجهة إدارية حديثة** - تصميم احترافي وسهل الاستخدام



# Or alternatively, use the Angular CLI directly

ng serve

```---## Running unit tests



The application will now be available at:

- **Public Interface**: `http://localhost:4200`

- **Admin Panel**: `http://localhost:4200/admin/login`## 🚀 Installation & Setup---

- **Auto-reload**: The application will automatically reload on file changes



### Step 5: Build for Production

### 1️⃣ Install the ProjectTo execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash

# Build the application for production

npm run build

```bash## 🏗️ الهيكل المعماري

# With specific configuration

npm run build -- --configuration production# Clone the repository

````

git clone <repository-url>```bash

This creates a `dist/` folder with optimized and minified files ready for deployment.

cd Frontend

### Step 6: Run Tests

المشروع يتبع **معمارية Component-Based** مع فصل واضح بين الواجهة العامة ولوحة التحكم:ng test

`````bash

# Execute all unit tests# Install dependencies

npm test

npm install```

# Run tests with code coverage

ng test -- --code-coverage````

`````

```````

### Step 7: Watch Mode (Development)

### 2️⃣ Run Development Server

```bash

# Watch for file changes and rebuild automaticallyApp Root## Running end-to-end tests

npm run watch

``````bash



---npm start├── Header & Footer (مشترك)



## 📁 Project Structure````



```├── Layout Routes (للزوار)For end-to-end (e2e) testing, run:

Frontend/

│The application will be available at:

├── src/

│   ├── app/- **Public Interface**: `http://localhost:4200`│ ├── Home

│   │   │

│   │   ├── layout/                          # Public Interface Components- **Admin Dashboard**: `http://localhost:4200/admin/login`

│   │   │   ├── home/

│   │   │   │   ├── home.ts                  # Home component class│ ├── About```bash

│   │   │   │   ├── home.html                # Home template

│   │   │   │   ├── home.css                 # Home styles### 3️⃣ Build for Production

│   │   │   │   └── home.spec.ts             # Home tests

│   │   │   ││ ├── Servicesng e2e

│   │   │   ├── about/

│   │   │   │   ├── about.ts````bash

│   │   │   │   ├── about.html

│   │   │   │   ├── about.cssnpm run build│   ├── Portfolio```

│   │   │   │   └── about.spec.ts

│   │   │   │````

│   │   │   ├── services/

│   │   │   │   ├── services.ts│ ├── Clients

│   │   │   │   ├── services.html

│   │   │   │   ├── services.cssThis creates a `dist/` folder with optimized files ready for deployment

│   │   │   │   └── services.spec.ts

│   │   │   ││ └── ContactAngular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

│   │   │   ├── portfolio/

│   │   │   │   ├── portfolio.ts### 4️⃣ Run Tests

│   │   │   │   ├── portfolio.html

│   │   │   │   ├── portfolio.css├── Admin Routes (لوحة التحكم)

│   │   │   │   └── portfolio.spec.ts

│   │   │   │```bash

│   │   │   ├── clients/

│   │   │   │   ├── clients.tsnpm test│   ├── Login## Additional Resources

│   │   │   │   ├── clients.html

│   │   │   │   ├── clients.css```

│   │   │   │   └── clients.spec.ts

│   │   │   ││ └── Dashboard

│   │   │   ├── contact/

│   │   │   │   ├── contact.ts### 5️⃣ Watch Mode (Live Reload)

│   │   │   │   ├── contact.html

│   │   │   │   ├── contact.css│ ├── Home EditorFor more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

│   │   │   │   └── contact.spec.ts

│   │   │   │````bash

│   │   │   └── shared/

│   │   │       ├── header/npm run watch│       ├── About Editor

│   │   │       │   ├── header.ts

│   │   │       │   ├── header.html```│       ├── Services Editor

│   │   │       │   ├── header.css

│   │   │       │   └── header.spec.ts│       ├── Portfolio Editor

│   │   │       │

│   │   │       └── footer/---│       ├── Contact Editor

│   │   │           ├── footer.ts

│   │   │           ├── footer.html│       └── Admin Sidebar & Header

│   │   │           ├── footer.css

│   │   │           └── footer.spec.ts## 📁 Project Structure└── Services (Admin Service)

│   │   │

│   │   ├── dashboard/                       # Admin Dashboard    └── API Calls

│   │   │   │

│   │   │   ├── admin/````

│   │   │   │   ├── admin.ts                 # Admin dashboard component

│   │   │   │   ├── admin.htmlFrontend/

│   │   │   │   ├── admin.css

│   │   │   │   ├── admin.spec.ts├── src/---

│   │   │   │   │

│   │   │   │   ├── home-editor/│ ├── app/

│   │   │   │   │   └── home-editor.component.ts

│   │   │   │   ││ │ ├── layout/ # Public interface## 📦 المتطلبات

│   │   │   │   ├── about-editor/

│   │   │   │   │   └── about-editor.component.ts│ │ │ ├── home/ # Home page

│   │   │   │   │

│   │   │   │   ├── services-editor/│ │ │ ├── about/ # About page- **Node.js** (الإصدار 18 أو أحدث)

│   │   │   │   │   └── services-editor.component.ts

│   │   │   │   ││ │ │ ├── services/ # Services page- **npm** أو **yarn**

│   │   │   │   ├── portfolio-editor/

│   │   │   │   │   └── portfolio-editor.component.ts│ │ │ ├── portfolio/ # Portfolio page- **Angular CLI** (الإصدار 20.3.13 أو أحدث)

│   │   │   │   │

│   │   │   │   ├── contact-editor/│ │ │ ├── clients/ # Clients page

│   │   │   │   │   └── contact-editor.component.ts

│   │   │   │   ││ │ │ ├── contact/ # Contact page---

│   │   │   │   ├── dashboard/

│   │   │   │   │   └── dashboard.component.ts│ │ │ └── shared/ # Shared components

│   │   │   │   │

│   │   │   │   └── shared/│ │ │ ├── header/ # Page header## 🚀 التثبيت والتشغيل

│   │   │   │       ├── header/

│   │   │   │       │   ├── header.ts│ │ │ └── footer/ # Page footer

│   │   │   │       │   ├── header.html

│   │   │   │       │   ├── header.css│ │ │### 1️⃣ تثبيت المشروع

│   │   │   │       │   └── header.spec.ts

│   │   │   │       ││ │ ├── dashboard/ # Admin dashboard

│   │   │   │       └── sidebar/

│   │   │   │           ├── sidebar.ts│ │ │ ├── admin/ # Admin interface```bash

│   │   │   │           ├── sidebar.html

│   │   │   │           ├── sidebar.css│ │ │ │ ├── home-editor/# استنساخ المشروع

│   │   │   │           └── sidebar.spec.ts

│   │   │   ││ │ │ │ ├── about-editor/git clone <repository-url>

│   │   │   └── auth/

│   │   │       ├── login.component.ts       # Login authentication│ │ │ │ ├── services-editor/cd Frontend

│   │   │       └── login.component.html

│   │   ││ │ │ │ ├── portfolio-editor/

│   │   ├── services/

│   │   │   └── admin.service.ts             # API service for backend communication│ │ │ │ ├── contact-editor/# تثبيت المكتبات

│   │   │

│   │   ├── app.routes.ts                    # Application routing configuration│ │ │ │ ├── dashboard/npm install

│   │   ├── app.ts                           # Root component

│   │   ├── app.html                         # Root template│ │ │ │ └── shared/ # Admin shared components```

│   │   ├── app.css                          # Root component styles

│   │   ├── app.config.ts                    # Application configuration│ │ │ │ ├── header/

│   │   └── app.spec.ts                      # Root component tests

│   ││ │ │ │ └── sidebar/### 2️⃣ تشغيل خادم التطوير

│   ├── index.html                           # Main HTML entry point

│   ├── main.ts                              # Application bootstrap│ │ │ │

│   ├── styles.css                           # Global styles

│   └── favicon.ico                          # Favicon│ │ │ └── auth/ # Authentication system```bash

│

├── public/                                  # Static assets│ │ │ └── login.component.tsnpm start

│   └── favicon.ico

││ │ │```

├── angular.json                             # Angular CLI configuration

├── tsconfig.json                            # TypeScript configuration│ │ ├── services/ # Services

├── tsconfig.app.json                        # TypeScript app configuration

├── tsconfig.spec.json                       # TypeScript test configuration│ │ │ └── admin.service.ts # API serviceسيكون التطبيق متاحاً على:

├── package.json                             # Project dependencies

├── package-lock.json                        # Dependency versions lock│ │ │- **الواجهة العامة**: `http://localhost:4200`

├── README.md                                # This documentation file

└── .gitignore                               # Git ignore rules│ │ ├── app.routes.ts # Routing configuration- **لوحة التحكم**: `http://localhost:4200/admin/login`

```

│ │ ├── app.ts # Root component

---

│ │ ├── app.html # Root template### 3️⃣ البناء للإنتاج

## 🎯 Components & Services

│ │ └── app.css # Global styles

### 📄 Public Components

│ │```bash

#### Layout Components:

│ ├── index.html # Main HTML filenpm run build

| Component | Purpose | Location | Status |

|-----------|---------|----------|--------|│ ├── main.ts # Entry point```

| **Home** | Display homepage content and introduction | `layout/home/` | ✅ Complete |

| **About** | Show detailed information about the author | `layout/about/` | ✅ Complete |│ └── styles.css # Global styles

| **Services** | Display list of services offered | `layout/services/` | ✅ Complete |

| **Portfolio** | Showcase projects and previous work | `layout/portfolio/` | ✅ Complete |│سيتم إنشاء مجلد `dist/` يحتوي على الملفات المحسّنة للنشر

| **Clients** | Show client companies and testimonials | `layout/clients/` | ✅ Complete |

| **Contact** | Display contact form and information | `layout/contact/` | ✅ Complete |├── angular.json # Angular CLI configuration

| **Header** | Navigation bar and branding | `layout/shared/header/` | ✅ Complete |

| **Footer** | Page footer with links and info | `layout/shared/footer/` | ✅ Complete |├── tsconfig.json # TypeScript configuration### 4️⃣ تشغيل الاختبارات



#### Admin Components:├── package.json # Project dependencies



| Component | Purpose | Location | Status |└── README.md # This file```bash

|-----------|---------|----------|--------|

| **Login** | User authentication and access control | `dashboard/auth/login.component.ts` | ✅ Complete |npm test

| **Dashboard** | Main admin dashboard landing page | `dashboard/admin/dashboard/` | ✅ Complete |

| **Home Editor** | Edit and manage homepage content | `dashboard/admin/home-editor/` | ✅ Complete |````

| **About Editor** | Manage author information | `dashboard/admin/about-editor/` | ✅ Complete |

| **Services Editor** | CRUD operations for services | `dashboard/admin/services-editor/` | ✅ Complete |

| **Portfolio Editor** | Manage portfolio projects | `dashboard/admin/portfolio-editor/` | ✅ Complete |

| **Contact Editor** | Update contact information | `dashboard/admin/contact-editor/` | ✅ Complete |---### 5️⃣ المراقبة الحية (Watch Mode)

| **Admin Header** | Admin panel navigation header | `dashboard/admin/shared/header/` | ✅ Complete |

| **Admin Sidebar** | Admin navigation sidebar menu | `dashboard/admin/shared/sidebar/` | ✅ Complete |



### 🔧 Services## 🎯 Components & Services```bash



#### Admin Service (`admin.service.ts`)npm run watch



Centralized service for all backend API communication:### 📄 Public Components```



```typescript

// Home Section Management

getHome(): Observable<any>#### Layout Components:---

updateHome(homeData: any): Observable<any>



// About Section Management

getAbout(): Observable<any>| Component | Description | Path |## 📁 البنية المشروع

updateAbout(aboutData: any): Observable<any>

|-----------|-------------|------|

// Services Management (CRUD)

getServices(): Observable<any>| **Home** | Homepage with main content | `layout/home/` |```

addService(serviceData: any): Observable<any>

updateService(serviceId: string, serviceData: any): Observable<any>| **About** | Author information page | `layout/about/` |Frontend/

deleteService(serviceId: string): Observable<any>

updateServicesSection(sectionData: any): Observable<any>| **Services** | Services list page | `layout/services/` |├── src/



// Portfolio Management (CRUD)| **Portfolio** | Projects and portfolio showcase | `layout/portfolio/` |│   ├── app/

getPortfolio(): Observable<any>

addPortfolioItem(itemData: any): Observable<any>| **Clients** | Client companies display | `layout/clients/` |│   │   ├── layout/              # الواجهة العامة

updatePortfolioItem(itemId: string, itemData: any): Observable<any>

deletePortfolioItem(itemId: string): Observable<any>| **Contact** | Contact information and form | `layout/contact/` |│   │   │   ├── home/            # الصفحة الرئيسية



// Contact Information Management| **Header** | Shared page header | `layout/shared/header/` |│   │   │   ├── about/           # صفحة عني

getContact(): Observable<any>

updateContact(contactData: any): Observable<any>| **Footer** | Shared page footer | `layout/shared/footer/` |│   │   │   ├── services/        # صفحة الخدمات



// Clients Management│   │   │   ├── portfolio/       # صفحة المحفظة

getClients(): Observable<any>

addClient(clientData: any): Observable<any>#### Admin Components:│   │   │   ├── clients/         # صفحة العملاء

updateClient(clientId: string, clientData: any): Observable<any>

deleteClient(clientId: string): Observable<any>│   │   │   ├── contact/         # صفحة التواصل

```

| Component | Description | Path |│   │   │   └── shared/          # المكونات المشتركة

**API Base URL**: `http://localhost:5000/api`

|-----------|-------------|------|│   │   │       ├── header/      # رأس الصفحة

**API Communication**:

- Uses Angular `HttpClient` for HTTP requests| **Login** | Admin login page | `dashboard/auth/login.component.ts` |│   │   │       └── footer/      # تذييل الصفحة

- Implements RxJS `Observable` pattern

- Handles async operations efficiently| **Dashboard** | Admin main dashboard | `dashboard/admin/dashboard/` |│   │   │



---| **Home Editor** | Edit homepage content | `dashboard/admin/home-editor/` |│   │   ├── dashboard/           # لوحة التحكم



## 🛣️ Routing System| **About Editor** | Edit about page content | `dashboard/admin/about-editor/` |│   │   │   ├── admin/           # واجهة الإدارة



### Public Routes Configuration:| **Services Editor** | Manage services (CRUD) | `dashboard/admin/services-editor/` |│   │   │   │   ├── home-editor/



```typescript| **Portfolio Editor** | Manage portfolio items | `dashboard/admin/portfolio-editor/` |│   │   │   │   ├── about-editor/

/                    → Redirect to /home (default landing page)

/home                → Homepage (company introduction)| **Contact Editor** | Edit contact information | `dashboard/admin/contact-editor/` |│   │   │   │   ├── services-editor/

/about               → About page (detailed company info)

/services            → Services page (list of offerings)| **Admin Header** | Admin panel header | `dashboard/admin/shared/header/` |│   │   │   │   ├── portfolio-editor/

/portfolio           → Portfolio page (projects showcase)

/clients             → Clients page (partner companies)| **Admin Sidebar** | Admin navigation sidebar | `dashboard/admin/shared/sidebar/` |│   │   │   │   ├── contact-editor/

/contact             → Contact page (contact information)

```│   │   │   │   ├── dashboard/



### Admin Dashboard Routes:### 🔧 Services│   │   │   │   └── shared/      # مكونات لوحة التحكم المشتركة



```typescript│   │   │   │       ├── header/

/admin/login         → Admin authentication page

/admin               → Admin dashboard home (redirect to /admin/home)#### Admin Service (`admin.service.ts`)│   │   │   │       └── sidebar/

/admin/home          → Homepage content editor

/admin/about         → About page editorHandles all API requests to communicate with the backend:│   │   │   │

/admin/services      → Services CRUD interface

/admin/portfolio     → Portfolio CRUD interface│   │   │   └── auth/            # نظام المصادقة

/admin/contact       → Contact information editor

``````typescript│   │   │       └── login.component.ts



### Route Protection:// Home section│   │   │



```typescriptgetHome(): Observable<any>│   │   ├── services/            # الخدمات

/**                  → Wildcard route - redirects unmatched URLs to /home

```updateHome(homeData: any): Observable<any>│   │   │   └── admin.service.ts # خدمة الاتصال بـ API



### Navigation Flow:│   │   │



1. User visits application → lands on `/home`// About section│   │   ├── app.routes.ts        # ملف التوجيه الرئيسي

2. User navigates using header menu → different public pages

3. Admin clicks login link → `/admin/login`getAbout(): Observable<any>│   │   ├── app.ts              # المكون الجذر

4. After authentication → `/admin` dashboard

5. Invalid routes → automatically redirect to `/home`updateAbout(aboutData: any): Observable<any>│   │   ├── app.html            # قالب المكون الجذر



---│   │   └── app.css             # أنماط عامة



## 💻 Technologies Used// Services│   │



### Frontend Framework & Language:getServices(): Observable<any>│   ├── index.html              # ملف HTML الرئيسي



- **Angular 20.3.0** - Modern component-based frameworkaddService(serviceData: any): Observable<any>│   ├── main.ts                 # نقطة البداية

- **TypeScript 5.9** - Strongly typed JavaScript superset

- **Angular Router** - Client-side navigation and routingupdateService(serviceId: string, serviceData: any): Observable<any>│   └── styles.css              # الأنماط العامة

- **RxJS 7.8** - Reactive programming library

deleteService(serviceId: string): Observable<any>│

### UI & Styling:

updateServicesSection(sectionData: any): Observable<any>├── angular.json                # إعدادات Angular CLI

- **Bootstrap 5.3.8** - Responsive CSS framework

- **Font Awesome 7.1.0** - Icon library (6000+ icons)├── tsconfig.json               # إعدادات TypeScript

- **CSS3** - Custom styling and animations

// Portfolio├── package.json                # اعتماديات المشروع

### Development & Build:

getPortfolio(): Observable<any>└── README.md                   # هذا الملف

- **Angular CLI 20.3.13** - Command-line tools for development

- **Node.js 18+** - JavaScript runtimeaddPortfolioItem(itemData: any): Observable<any>

- **npm** - Package manager

updatePortfolioItem(itemId: string, itemData: any): Observable<any>```

### Testing & Quality:

deletePortfolioItem(itemId: string): Observable<any>

- **Karma 6.4** - Test runner

- **Jasmine 5.9** - Testing framework```---

- **Prettier** - Code formatter

- **TypeScript Compiler** - Type checking



### Package Dependencies:**API Base URL**: `http://localhost:5000/api`## 🎯 المكونات والخدمات



```json

{

  "@angular/common": "^20.3.0",---### 📄 المكونات الرئيسية

  "@angular/compiler": "^20.3.0",

  "@angular/core": "^20.3.0",

  "@angular/forms": "^20.3.0",

  "@angular/platform-browser": "^20.3.0",## 🛣️ Routing System#### الواجهة العامة (Layout Components):

  "@angular/router": "^20.3.0",

  "@fortawesome/fontawesome-free": "^7.1.0",

  "bootstrap": "^5.3.8",

  "rxjs": "~7.8.0",### Public Routes:| المكون | الوصف | الملف |

  "tslib": "^2.3.0",

  "zone.js": "~0.15.0"|--------|-------|------|

}

``````typescript| **Home** | الصفحة الرئيسية مع المعلومات والترحيب | `layout/home/` |



### Backend API:/              → Redirect to /home| **About** | معلومات تفصيلية عن المؤلف | `layout/about/` |



- **Base URL**: `http://localhost:5000/api`/home          → Homepage| **Services** | قائمة الخدمات المقدمة | `layout/services/` |

- **Supported Methods**: GET, POST, PUT, DELETE

- **Data Format**: JSON/about         → About page| **Portfolio** | عرض الأعمال والمشاريع | `layout/portfolio/` |

- **Authentication**: To be implemented (JWT recommended)

/services      → Services page| **Clients** | عرض العملاء والشركات | `layout/clients/` |

---

/portfolio     → Portfolio page| **Contact** | نموذج التواصل والبيانات | `layout/contact/` |

## 🎨 Customization

/clients       → Clients page| **Header** | رأس الصفحة المشترك | `layout/shared/header/` |

### Modify Application Theme

/contact       → Contact page| **Footer** | تذييل الصفحة المشترك | `layout/shared/footer/` |

Edit global styles in these files:

- `src/styles.css` - Main global styles```

- `src/app/app.css` - Root component styles

- Individual component `.css` files for specific styling#### لوحة التحكم (Admin Components):



### Customize Color Scheme### Admin Routes:



```css| المكون | الوصف | الملف |

/* Example: Update primary color */

:root {```typescript|--------|-------|------|

  --primary-color: #007bff;

  --secondary-color: #6c757d;/admin/login               → Admin login page| **Login** | صفحة تسجيل الدخول | `dashboard/auth/login.component.ts` |

  --success-color: #28a745;

}/admin                     → Admin dashboard home| **Dashboard** | الصفحة الرئيسية لوحة التحكم | `dashboard/admin/dashboard/` |

```

/admin/home                → Home page editor| **Home Editor** | محرر محتوى الصفحة الرئيسية | `dashboard/admin/home-editor/` |

### Create New Component

/admin/about               → About page editor| **About Editor** | محرر محتوى صفحة عني | `dashboard/admin/about-editor/` |

```bash

# Generate a new component using Angular CLI/admin/services            → Services manager| **Services Editor** | مدير الخدمات (إضافة/تعديل/حذف) | `dashboard/admin/services-editor/` |

ng generate component component-name

/admin/portfolio           → Portfolio manager| **Portfolio Editor** | مدير المحفظة | `dashboard/admin/portfolio-editor/` |

# Or with options

ng generate component path/to/component-name --skip-tests/admin/contact             → Contact editor| **Contact Editor** | محرر بيانات التواصل | `dashboard/admin/contact-editor/` |

```

```| **Admin Header** | رأس لوحة التحكم | `dashboard/admin/shared/header/` |

### Create New Service

| **Admin Sidebar** | القائمة الجانبية | `dashboard/admin/shared/sidebar/` |

```bash

# Generate a new service### Wildcard Route:

ng generate service service-name

### 🔧 الخدمات (Services)

# With options

ng generate service path/to/service-name --skip-tests```typescript

```

/**            → Redirect to /home for unknown routes#### Admin Service (`admin.service.ts`)

### Modify Routes

```تتعامل مع جميع طلبات API للتواصل مع الخادم الخلفي:

Edit routes in `src/app/app.routes.ts`:

- Add new routes to the routes array

- Update path mappings

- Configure route guards (if needed)---```typescript



### Update API Endpoints// الصفحة الرئيسية



Modify base URL in `src/app/services/admin.service.ts`:## 💻 Technologies UsedgetHome(): Observable<any>

```typescript

private apiUrl = 'http://localhost:5000/api';updateHome(homeData: any): Observable<any>

```

### Frontend Framework:

---

- **Angular 20.3.0** - Core framework// صفحة عني

## 🔒 Security

- **TypeScript 5.9** - Programming languagegetAbout(): Observable<any>

### Current Security Status: ⚠️ Development Only

- **RxJS 7.8** - Reactive programming libraryupdateAbout(aboutData: any): Observable<any>

**Important**: This application requires significant security improvements before production deployment.

- **Angular Routing** - Navigation system

### Security Checklist:

// الخدمات

- [ ] **Authentication** - Implement JWT (JSON Web Tokens) or OAuth2

- [ ] **Authorization** - Add role-based access control (RBAC)### Styling & UI:getServices(): Observable<any>

- [ ] **HTTPS** - Use HTTPS instead of HTTP

- [ ] **CSRF Protection** - Implement CSRF token validation- **Bootstrap 5.3** - CSS frameworkaddService(serviceData: any): Observable<any>

- [ ] **Input Validation** - Validate all user inputs

- [ ] **Output Encoding** - Prevent XSS attacks- **Font Awesome 7.1** - Icon libraryupdateService(serviceId: string, serviceData: any): Observable<any>

- [ ] **SQL Injection** - Use parameterized queries

- [ ] **Rate Limiting** - Implement API rate limiting- **CSS3** - Custom stylesdeleteService(serviceId: string): Observable<any>

- [ ] **Secure Headers** - Add security headers (CSP, X-Frame-Options, etc.)

- [ ] **Encryption** - Encrypt sensitive dataupdateServicesSection(sectionData: any): Observable<any>

- [ ] **Logging** - Implement security event logging

- [ ] **Error Handling** - Don't expose sensitive info in error messages### Development Tools:



### Recommended Security Measures:- **Angular CLI 20.3.13** - Command line tools// المحفظة



1. **Backend Authentication**- **Karma** - Test runnergetPortfolio(): Observable<any>

   ```typescript

   // Use JWT tokens for stateless authentication- **Jasmine 5.9** - Testing frameworkaddPortfolioItem(itemData: any): Observable<any>

   // Validate tokens on every API request

   // Implement refresh token mechanism- **Prettier** - Code formatterupdatePortfolioItem(itemId: string, itemData: any): Observable<any>

   ```

deletePortfolioItem(itemId: string): Observable<any>

2. **API Security**

   ```typescript### Backend:```

   // Use HTTPS only

   // Implement CORS properly- API running on `http://localhost:5000/api`

   // Add rate limiting

   // Validate all inputs- Supports **GET**, **POST**, **PUT**, **DELETE** operations**مسار الـ API**: `http://localhost:5000/api`

   ```



3. **Frontend Security**

   ```typescript------

   // Store tokens securely (not in localStorage)

   // Implement logout functionality

   // Validate user permissions before showing admin panel

   ```## 🎨 Customization## 🛣️ نظام التوجيه



---



## 📝 Testing### Styling & Theme:### المسارات العامة (Public Routes):



### Run All TestsModify styles in the following files:



```bash- `src/styles.css` - Global styles```

# Execute all unit tests

npm test- `src/app/app.css` - Root component styles/              → الصفحة الرئيسية (تحويل إلى /home)



# Run tests in headless mode- Component-specific `.css` files/home          → الصفحة الرئيسية

ng test --watch=false

/about         → صفحة عني

# Generate code coverage report

ng test -- --code-coverage### Generate New Component:/services      → الخدمات

```

```bash/portfolio     → المحفظة

### Test Coverage

ng generate component component-name/clients       → العملاء

Tests should cover:

- ✅ Component rendering and lifecycle```/contact       → التواصل

- ✅ Component user interactions

- ✅ Service method calls```

- ✅ HTTP request handling

- ✅ Route navigation### Generate New Service:

- ✅ Form validation

- ✅ Error handling```bash### مسارات لوحة التحكم (Admin Routes):



### Writing Testsng generate service service-name



Tests are located in `*.spec.ts` files:````

```typescript

describe('Component', () => {/admin/login → صفحة تسجيل الدخول

  it('should create', () => {

    // Test implementation---/admin → لوحة التحكم الرئيسية

  });

});/admin/home → محرر الصفحة الرئيسية

```

## 🔒 Security/admin/about → محرر صفحة عني

---

/admin/services → محرر الخدمات

## 🚀 Production & Deployment

⚠️ **Important Note**: The application requires security improvements before production deployment:/admin/portfolio → محرر المحفظة

### Build for Production

/admin/contact → محرر التواصل

```bash

# Build with production optimization- [ ] Implement proper authentication (JWT or OAuth)```

npm run build

- [ ] Add CSRF protection

# Alternative with explicit configuration

npm run build -- --configuration production- [ ] Encrypt sensitive data### التوجيه الخاص:



# Build output location- [ ] Use HTTPS instead of HTTP

# Files created in: dist/portfolio/

```- [ ] Implement input validation```



### Production Build Features:- [ ] Add authorization checks/\*\* → تحويل لأي مسار غير معروف إلى /home



- Minified JavaScript and CSS````

- Optimized bundle sizes

- Source maps disabled---

- AOT (Ahead-of-Time) compilation

- Tree shaking enabled---



### Deployment Platforms## 📝 Testing



#### Option 1: Vercel (Recommended for Angular)## 💻 التكنولوجيا المستخدمة

```bash

# Install Vercel CLI### Run All Tests:

npm i -g vercel

```bash### Frontend Framework:

# Deploy

vercelnpm test- **Angular 20.3.0** - الإطار الأساسي

```

```- **TypeScript 5.9** - لغة البرمجة الموضوعة

#### Option 2: Netlify

```bash- **RxJS 7.8** - المكتبة التفاعلية

# Install Netlify CLI

npm i -g netlify-cli### Test Coverage:- **Angular Routing** - نظام التوجيه



# Deploy- Component testing

netlify deploy --prod --dir=dist/portfolio

```- Service testing### التنسيق والمظهر:



#### Option 3: AWS S3 + CloudFront- Routing testing- **Bootstrap 5.3** - إطار عمل CSS

1. Build the project: `npm run build`

2. Upload `dist/` to S3 bucket- Integration tests- **Font Awesome 7.1** - أيقونات

3. Create CloudFront distribution

4. Configure cache policies- **CSS3** - أنماط مخصصة



#### Option 4: GitHub Pages---

```bash

# Requires gh-pages package### أدوات التطوير:

npm install --save-dev gh-pages

## 🚀 Production Build & Deployment- **Angular CLI 20.3.13** - أدوات سطر الأوامر

# Add deployment scripts to package.json

# Deploy: npm run deploy- **Karma** - محرك الاختبار

```

### Build for Production:- **Jasmine 5.9** - مكتبة الاختبار

### Environment Configuration

```bash- **Prettier** - تنسيق الكود

Create environment files:

- `src/environments/environment.ts` - Developmentnpm run build -- --configuration production

- `src/environments/environment.prod.ts` - Production

```### الخادم الخلفي:

Update API URL based on environment:

```typescript- API على `http://localhost:5000/api`

import { environment } from '../environments/environment';

### Output:- يدعم **GET**, **POST**, **PUT**, **DELETE**

private apiUrl = environment.apiUrl;

```- Creates `dist/portfolio/` folder with optimized files



---- Ready for web server deployment---



## 🐛 Troubleshooting



### Issue: Server Not Starting### Recommended Deployment Platforms:## 🎨 تخصيص المشروع



**Symptoms**: Port 4200 already in use or npm error- **Vercel** - Direct GitHub integration



**Solutions**:- **Netlify** - Easy Angular deployment### تغيير ألوان ومظهر التطبيق:

```bash

# Clear npm cache- **AWS** - S3 & CloudFront servicesيمكن تعديل الأنماط في:

npm cache clean --force

- **GitHub Pages** - Free static hosting- `src/styles.css` - الأنماط العامة

# Reinstall dependencies

rm -rf node_modules package-lock.json- `src/app/app.css` - أنماط المكون الجذر

npm install

---- ملفات `.css` في كل مكون

# Use different port

ng serve --port 4300



# Kill process on port 4200 (Windows)## 🐛 Troubleshooting### إضافة مكون جديد:

netstat -ano | findstr :4200

taskkill /PID <PID> /F```bash

```

### Issue: Server not startingng generate component component-name

### Issue: Changes Not Reflecting

```bash```

**Symptoms**: File changes don't trigger hot reload

# Ensure dependencies are installed

**Solutions**:

```bashnpm install### إضافة خدمة جديدة:

# Stop and restart dev server

npm start```bash



# Check file is saved# Clear cache and reinstallng generate service service-name

# Verify no TypeScript errors

ng buildnpm cache clean --force```



# Try watch modenpm install

npm run watch

``````---



### Issue: TypeScript Compilation Errors



**Symptoms**: Red squiggly lines in IDE or build errors### Issue: Changes not reflecting## 🔒 الأمان



**Solutions**:```bash

```bash

# Check for type errors# Restart development server⚠️ **ملاحظة مهمة**: التطبيق الحالي يحتاج إلى تحسينات أمنية قبل النشر:

ng build

npm start

# Verify TypeScript version

ng version```- [ ] تثبيت نظام مصادقة حقيقي (JWT أو OAuth)



# Update type definitions- [ ] إضافة حماية CSRF

npm install --save-dev @types/node

```### Issue: TypeScript errors- [ ] تشفير البيانات الحساسة



### Issue: API Connection Failed```bash- [ ] استخدام HTTPS بدلاً من HTTP



**Symptoms**: Cannot connect to backend API# Check for errors- [ ] التحقق من صحة الإدخال (Validation)



**Solutions**:ng build

1. Verify backend server is running on `http://localhost:5000`

2. Check API base URL in `admin.service.ts`---

3. Check browser console for CORS errors

4. Verify backend CORS configuration# Fix errors in src/ files



### Issue: High Bundle Size```## 📝 الاختبار



**Symptoms**: Slow initial load time



**Solutions**:---### تشغيل جميع الاختبارات:

```bash

# Analyze bundle```bash

npm run build -- --stats-json

ng build --stats-json## 🤝 Contributingnpm test



# Use bundle analyzer````

npm install --save-dev webpack-bundle-analyzer

```### How to Contribute:



### Issue: 404 Errors on Routes### الاختبارات تغطي:



**Symptoms**: Page not found when accessing routes directly1. **Fork** the repository- مكونات العرض (Components)



**Solutions**:2. Create a **Feature Branch** (`git checkout -b feature/AmazingFeature`)- الخدمات والطلبات

1. Ensure server is configured for SPA (Single Page Application)

2. Configure fallback to `index.html`3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)- التوجيه والملاحة

3. Check route definitions in `app.routes.ts`

4. **Push** to the branch (`git push origin feature/AmazingFeature`)- التكاملات

---

5. Open a **Pull Request**

## 🤝 Contributing

---

### How to Contribute to the Project

---

1. **Fork the Repository**

   ```bash## 🚀 النشر والإنتاج

   # Create your own copy on GitHub

   ```## 📄 License



2. **Create Feature Branch**### بناء للإنتاج:

   ```bash

   git checkout -b feature/AmazingFeatureThis project is licensed under the **MIT License** - see the `LICENSE` file for details.```bash

   ```

npm run build -- --configuration production

3. **Make Your Changes**

   - Write clean, readable code---```

   - Follow project conventions

   - Add tests for new features## 📞 Support & Contact### النتيجة:



4. **Commit Your Changes**- يتم إنشاء مجلد `dist/portfolio/` بالملفات المحسّنة

   ```bash

   git commit -m 'Add some AmazingFeature'For questions, issues, or suggestions:- جاهز للنشر على أي خادم ويب

   ```

- 📧 Email: `your-email@example.com`### منصات النشر الموصى بها:

5. **Push to Branch**

   ```bash- 🔗 LinkedIn: `your-linkedin-profile`- **Vercel** - النشر المباشر من GitHub

   git push origin feature/AmazingFeature

   ```- 🐙 GitHub: `your-github-profile`- **Netlify** - سهل التكامل مع Angular



6. **Open Pull Request**- **AWS** - خدمات S3 و CloudFront

   - Describe your changes clearly

   - Reference any related issues---- **GitHub Pages** - مجاني وسهل

   - Wait for code review

## 🙏 Acknowledgments---

### Contribution Guidelines

- Thanks to **Angular** for the excellent framework## 🐛 استكشاف الأخطاء

- Follow Angular style guide

- Use meaningful commit messages- Thanks to **Bootstrap** for the great CSS library

- Add tests for new functionality

- Update documentation if needed- Thanks to all contributors and users### المشكلة: الخادم لا يعمل

- Keep commits atomic and focused

````bash

---

---# تأكد من تثبيت المكتبات

## 📄 License

npm install

This project is licensed under the **MIT License**.

## 📊 Project Statistics

**Permission**: You are free to use, modify, and distribute this software.

# امسح الكاش وأعد المحاولة

**Conditions**: Include the original license and copyright notice.

### Project Size:npm cache clean --force

For full license text, see the `LICENSE` file in the repository.

- **Total Files**: 40+npm install

---

- **Lines of Code**: 5000+```

## 📞 Support & Contact

- **Components**: 20+

### Get Help

- **Services**: 1+### المشكلة: الملفات لا تحدّث تلقائياً

If you have questions, issues, or suggestions:

```bash

- **Email**: your-email@example.com

- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)### Code Quality:# أعد تشغيل خادم التطوير

- **GitHub**: [Your GitHub Profile](https://github.com/yourprofile)

- **GitHub Issues**: [Report Issues](../../issues)- ✅ Prettier formattingnpm start

- **GitHub Discussions**: [Start Discussion](../../discussions)

- ✅ Component testing```

### Report Bugs

- ✅ Type safety (TypeScript)

When reporting issues, please include:

- Description of the bug- ✅ Modern Angular patterns### المشكلة: مشاكل في TypeScript

- Steps to reproduce

- Expected behavior```bash

- Actual behavior

- Environment details (OS, browser, Angular version)---# تحقق من الأخطاء



### Request Featuresng build



When requesting features:## 🔄 Version History

- Clear description of the feature

- Use case and benefits# صحح الأخطاء في ملفات src/

- Suggested implementation

- Any related issues| Version | Date | Notes |```



---|---------|------|-------|



## 🙏 Acknowledgments| 0.0.0 | Jan 2026 | Initial release |---



### Special Thanks To:



- **Angular Team** - For the excellent frontend framework---## 👨‍💻 هيكل الفريق والمساهمة

- **TypeScript Team** - For strong typing and modern JavaScript

- **Bootstrap** - For the responsive CSS framework

- **Font Awesome** - For the comprehensive icon library

- **RxJS** - For reactive programming capabilities**Last Updated**: January 2026 ⏰### كيفية المساهمة:

- **All Contributors** - For improvements and feedback

- **Open Source Community** - For endless resources and support



---**Current Version**: 0.0.0 📌1. **Fork** المشروع



## 📊 Project Statistics2. اصنع **Feature Branch** جديد (`git checkout -b feature/AmazingFeature`)



### Project Metrics:*Made with ❤️ for web development*3. **Commit** التغييرات (`git commit -m 'Add AmazingFeature'`)



| Metric | Value |4. **Push** إلى البراnch (`git push origin feature/AmazingFeature`)

|--------|-------|5. افتح **Pull Request**

| **Total Files** | 40+ |

| **Lines of Code** | 5000+ |---

| **Components** | 20+ |

| **Services** | 1+ |## 📄 الترخيص

| **Test Files** | 20+ |

| **Routes** | 13+ |هذا المشروع مرخص تحت **MIT License** - انظر ملف `LICENSE` للتفاصيل.



### Code Quality Metrics:---



- ✅ **Prettier Formatting** - Consistent code style## 📞 التواصل والدعم

- ✅ **Component Testing** - Unit tests included

- ✅ **Type Safety** - Full TypeScript coverageإذا كان لديك أي استفسارات أو مشاكل:

- ✅ **Modern Angular** - Latest Angular patterns

- ✅ **Responsive Design** - Mobile-friendly UI- 📧 البريد الإلكتروني: `your-email@example.com`

- ✅ **SEO Friendly** - Proper semantic HTML- 🔗 LinkedIn: `your-linkedin-profile`

- 🐙 GitHub: `your-github-profile`

---

---

## 🔄 Version History

## 🙏 شكر وتقدير

| Version | Date | Release Notes |

|---------|------|---------------|- شكراً لـ **Angular** على الإطار الممتاز

| 0.0.0 | Jan 2026 | Initial project setup and configuration |- شكراً لـ **Bootstrap** على مكتبة CSS الرائعة

- شكراً لجميع المساهمين والمستخدمين

---

---

## 📱 Browser Support

## 📊 معلومات إضافية

| Browser | Version | Support |

|---------|---------|---------|### حجم المشروع:

| Chrome | Latest | ✅ Full Support |- **إجمالي الملفات**: 40+

| Firefox | Latest | ✅ Full Support |- **سطور الكود**: 5000+

| Safari | Latest | ✅ Full Support |- **المكونات**: 20+

| Edge | Latest | ✅ Full Support |- **الخدمات**: 1+

| IE 11 | - | ❌ Not Supported |

### معايير الجودة:

---- ✅ Prettier formatting

- ✅ Component testing

## 🚀 Quick Reference- ✅ Type safety (TypeScript)

- ✅ Modern Angular patterns

### Most Common Commands

---

```bash

# Development**آخر تحديث**: يناير 2026 ⏰

npm start                    # Start dev server on port 4200

npm test                     # Run all tests**الإصدار الحالي**: 0.0.0 📌

npm run build                # Build for production

*Made with ❤️ for web development*

# Useful commands````

ng generate component name   # Create new component
ng generate service name     # Create new service
npm cache clean --force      # Clear npm cache
npm install                  # Install dependencies
npm update                   # Update packages
```

---

**Last Updated**: January 2026 ⏰

**Current Version**: 0.0.0 📌

**Maintained By**: Your Name

**Repository**: [GitHub Link]

---

*Made with ❤️ for web development enthusiasts*
```````
