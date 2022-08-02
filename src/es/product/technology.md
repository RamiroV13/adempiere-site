---
title: Technology
category: Product
star: 9
sticky: 9
tag:
  - Software
article: false
---

![Technology](/assets/img/product/technology.jpg)

## Technology Elements

- ADempiere is a 100% pure Java solution.
- It is based upon Oracle Database technology
- It natively supports Postgresql Open Source Database
- Features a 100% Java client
- It leverages a HTML client allowing access to the application where a local client is not appropriate (e.g. self-service functionality for suppliers, customers and employees). (Java Servlets and Java Server Pages).
- It features J2EE JBOSS application server.
- Server intensive processes are designed to run in background mode with PL/SQL as native language

## Application Dictionary

- The data dictionary contains definitions of the entity type (type, validation, etc.)
- It determines how it should be displayed e.g. labels on screens and reports, context help, sequence and position relative to other fields, and the rules for rollout.
- Safety Access Rules
- The Data Dictionary is managed and extended by the user it contains rules and user defined information.

## Intelligent User Interface

- A consistent User Interface allows users to quickly navigate through the system even on sections unfamiliar for them.
- The Graphical User Interface uses the power of today's modern devices where a quick reaction and navigation is important.
- The HTML User Interface allows access to the application from anywhere as long as it has a compliant browser.
- You can enable Zoom functions from any type drop-down list.
- You can check records. The query reduces the number of records in a window to allow the entry criteria in an improved "query by example" (query by example) style.
- The users themselves can adjust the outline of the window and can define special screens for a specific customer situation or when so required.

## Intelligent Reports

- Reports Listings through the system viewer are based on the data dictionary, since the report viewer has access to data definitions, it natively allows Drill down and drill-across searches.
- Data linkages are generated automatically, adhering to security access definitions in real time.
- All report outputs can be previewed on screen before printing or generating files in several standard formats (eg. Excel, HTML, XML, Word and PDF).
- Drill (Drill-down) a new report is generated based on the selected entity, reports where the number is a sum of numbers or accessed from an accrued monthly to the original transaction amount.
- Browse References (Drill-across) allows the user to create a new report in which a specific entity being used.
- The lists are based on information from the windows. You can generate a report for each system screen.
- The reports are usually based on summarized information based on reports views.
- The OLAP Viewer can display different dimensions in a table or a graph.

## Sustainable Architecture

Business applications change over time. They need to leverage new technologies and provide additional smarter functionality. Even canned applications should even support additional functionality, although usually not appropriate for integration with the functional core of a growing business.

Adempiere uses the following design principles to create a sustainable architecture:

Smalltalk MVC Architecture which is a derivation of the Model-View-Controller approach. Explicit Rules Engine for complex Transaction Logic and transaction safe fail recovery.

ERP has an object architecture each object is as independent as possible from other objects, including transactional derivation.

## Safe-Fail

Usually the applications are designed to be free of faults (fail-safe): It is assumed that everything works and that all data are entered correctly and are consistent. In case of failure, experts must find the cause and check if there was damage. The user usually notices the problem. The reality is that applications sometimes fail.

In contrast ADempiere is designed to be safe-fail. Each transaction can be repeated and regenerated. Most failures are identified by the system and the user can try to solve the problem. If recovery is not possible, the error is isolated and the rest of the system continues to work. Decoupled design is based transaction is enabled.

The system checks regularly whether a transaction is complete. If a transaction is not complete and consistent due to a system failure, the administrator and the user is informed.

As applications become more complex with ever increasing combinations, the errors grow exponentially. ERP provides a framework for extensive validation and in case of failure, isolate the problem by ensuring high availability of the central functions (application kernel).

## Security

ADempiere supports data security and functions. The safety function is based on User Roles and Access Controls Windows, Reports and Processes.

The data security for customer information and the Organization is maintained at the level of the database through the security context. This is an additional level of security beyond identification (login) regular user of the database. This allows the use of third-party tools based on SQL to access the database. Before accessing any data the user must be identified through a stored procedure (stored procedure) with username, password and optionally language role. This provides the same access rules for third-party tools that may exist in the application.

Most applications do not have a layer of security beyond the user ID of the database and have difficulty restricting access through third-party SQL tools.

The Customer Passwords are stored in encrypted form.
