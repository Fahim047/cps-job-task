# 🚀 Project Task Breakdown

## 1. Setup

- Create GitHub repo (with README)
- Add /frontend & /backend folders

## 2. Backend (Strapi)

- Create Strapi app
- Create Content Types: Course, Module, Class
- Add Relations (Course → Modules, Module → Classes)
- Create Roles (Student, Social Media Manager, Developer, Normal User)
- Add Test Users (one per role)
- Enable API Permissions (find, findOne for course/module/class)
- Test API /api/courses?populate=\*

## 3. Frontend (Next.js)

- Create Next.js app in /frontend
- Setup Tailwind CSS
- Add API helper (lib/api.js)
- Test fetch courses from Strapi

## 4. Pages

- [ ]Landing page (/) with navbar + hero + course preview
- [ ]Courses list (/courses) with grid of courses
- [ ]Course detail (/courses/[slug]) with modules & classes

## 5. Auth

- Test Strapi login (POST /api/auth/local)
- Create login page (/login)
- Next.js API route for login → save JWT in cookie
- Add AuthContext + useAuth hook
- Protect pages (role-based access)

## 6. Role Features

- Student → show video player
- Normal User → hide videos, show login required
- Social Media Manager → show share button
- Developer → show raw JSON debug

## 7. Deployment

- Deploy Strapi on Railway (Postgres + env vars)
- Deploy Next.js on Vercel (add NEXT_PUBLIC_STRAPI_URL)
- Test live apps (frontend + backend)

## 8. Final

- Update README (setup, env, links, demo users)
- Record demo video (landing → login → role → deploy)
- Submit form with repo + links
