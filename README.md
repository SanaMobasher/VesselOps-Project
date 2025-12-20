 VESSELOPS: MERCHANT FLEET CREW MANAGEMENT SYSTEM

 1. OVERVIEW
VesselOps is a centralized Human Resources Management System designed for the maritime industry. The application facilitates the digital management of seafarer records, rank-specific experience tracking, and fleet-wide personnel compliance.

 2. SYSTEM SPECIFICATIONS
- Project Status: Version 1.3 is the last version
- Primary Architecture: Client-Server
- Data Integrity: SQL Server

 3. CORE FUNCTIONALITIES
- Personnel Roster: A  table displaying all active crew members retrieved from the SQL database.
- State-Aware Navigation: A sidebar management system that retains active user context during navigation between sub-modules.
- Dynamic Routing: Implementation of parameter-based URL mapping for individual profile generation 
- CRUD Operations:
    - Create: Database entry through API documentation tools.
    - Read: Dynamic data visualization in both list and detailed formats.
    - Update: Live record modification using Angular's two-way data binding.
    - Delete: Record archival functionality ensuring database cleanliness.
- Image Asset Mapping: Dynamic linking of profile assets via database-stored URL strings.

 4. TECHNICAL STACK

 BACKEND (SERVER-SIDE)
- Platform: ASP.NET Core Web API
- Language: C#
- ORM: Entity Framework Core
- Database Engine: Microsoft SQL Server
- Interface: Swagger UI

 FRONTEND (CLIENT-SIDE)
- Framework: Angular
- Logic: TypeScript
- Styling: SCSS (Sass) and Bootstrap
- Iconography: Bootstrap Icon Library
- Navigation: Angular RouterModule with Dynamic Parameters

 5. DIRECTORY STRUCTURE

VesselOps-FullStack/
|--- VesselOps/            ASP.NET Core Project (Controllers, Models, Data)
|--- VesselOpsUI/          Angular Application (Components, Services, Styling)
