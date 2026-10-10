My name is OBAME Videlina Ketsia.

**Registration Number:** 25/27671  
**App Name:** OBAMEPortfolio  
**Verification Code:** MOB-A2-7671  
**Version:** 1.0.0  
**Release Link:** https://github.com/videlinaobame23-svg/MOB_A2_2527671/releases/tag/v1.0.0  
**APK Link:** https://github.com/videlinaobame23-svg/MOB_A2_2527671/releases/download/v1.0.0/MOB_A2_2527671.apk  
**Demo Video Link:** https://github.com/videlinaobame23-svg/MOB_A2_2527671/releases/download/v1.0.0/MOB_A2_2527671_DEMO.mp4  

---
phone infos 

- Model: Samsung Galaxy S20 5G
- Android version: Android 13
---

## Purpose

A personal portfolio Android application that presents my identity, skills, education, and student projects. It is designed to be shown to a recruiter during an internship interview, and works fully offline. Built with React Native, Expo, and TypeScript for SWE 3409 Individual Assignment 2.

## Features

- **Home introduction** — shows the exact statement "My name is OBAME Videlina Ketsia.", profile image (or letter avatar), professional headline, short biography, and verification code `MOB-A2-7671`
- **Skills and education** — five genuine skills with proficiency levels, plus an education/training timeline using reusable card components
- **Project portfolio** — two genuine student projects, each with title, problem, personal contribution, and technology used, plus a dedicated detail screen
- **Profile editor** — controlled inputs for headline, short biography, primary skill, and availability status. Includes three validation rules with field-level error messages and blocked invalid save
- **Navigation** — bottom tab navigation for major sections and a native stack route for Project Details. Android Back button preserves the current session
- **Profile media** — capture from camera or pick from gallery. Shows preview, replace, and remove actions with safe permission-denial and cancellation handling
- **Local persistence** — all editable profile data and the profile image reference are saved with AsyncStorage and restored after an app restart
- **Offline behavior** — the core portfolio runs fully in Airplane Mode. No feature requires an internet connection
- **About screen** — shows app name, student name, registration number, verification code, version, and a short data-use statement

## Setup and Run

```bash
npm install
npx expo start

EAS Build Command
bash
eas build --platform android --profile preview


OBAME_Videlina_Portfolio/
├── App.tsx
├── index.js
├── app.json
├── eas.json
├── package.json
├── tsconfig.json
├── src/
│   ├── components/        Reusable UI (ProfileCard, SkillCard, EducationCard, ProjectCard, ValidatedInput)
│   ├── screens/           HomeScreen, SkillsScreen, ProjectsScreen, ProjectDetailScreen, ProfileEditorScreen, AboutScreen
│   ├── navigation/        AppNavigator, types
│   ├── context/           ProfileContext (AsyncStorage-backed)
│   ├── constants/         theme, data
│   ├── types/             TypeScript interfaces
│   └── utils/
├── assets/
├── docs/
│   └── MOB_A2_2527671_UIUX.pdf
└── evidence/
    ├── MOB_A2_2527671_TEST_LOG.pdf
    ├── MOB_A2_2527671_DECLARATION.pdf
    └── AI_USE.md 
    