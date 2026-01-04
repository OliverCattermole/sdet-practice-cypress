# sdet-practice-cypress

Cypress Showcase 🚀 

This repository is a dedicated showcase of my expertise in automated testing using Cypress. It serves as a comprehensive portfolio of modern QA automation techniques, moving beyond simple UI interaction to include robust, enterprise-level testing strategies.

🎯 Project Objective

The goal of this project is to demonstrate technical proficiency in the Cypress framework, focusing on creating maintainable, scalable, and high-performance test suites.

📂 Key Features & Modules

All core test scripts are located in cypress/my_tests. Key automation concepts covered include:

* End-to-End (E2E) & File Lifecycle: Automated a complex "download-to-input" workflow. This showcases proficiency in the full document lifecycle: authenticated login, drag-and-drop uploads, and using cy.request with cy.readFile to extract dynamic data for downstream UI validation.

* API Mocking & Interception: Utilising cy.intercept() to stub network requests and inject JSON fixtures. This demonstrates the ability to control test data, isolate frontend logic from backend dependencies, and verify UI state by asserting against intercepted response bodies.

* Data-Driven Testing: Implemented a fixture-based architecture using cy.fixture() and aliases to execute tests against multiple user personas. This approach maximizes coverage for scenarios like "Standard" vs. "Locked" users while maintaining a DRY (Don't Repeat Yourself) codebase.
