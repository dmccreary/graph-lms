# Total Learning Architecture (TLA) 

Data Pillars and Their Applicability to Adaptive Instructional Systems

## Overview

The [Advanced Distributed Learning](../glossary.md#advanced-distributed-learing) (ADL) Initiative has developed the Total Learning Architecture (TLA) since 2016 as a comprehensive 4-pillar data strategy for managing lifelong learning across organizations. The TLA provides a foundational framework that enables interoperability, data-driven decision making, and adaptive instructional capabilities through standardized data management and sharing.

## The Four TLA Data Pillars

The TLA is built upon four core data pillars, each based on IEEE standards:

### 1. Experience API (IEEE P9274.1 xAPI)
- Tracks and manages learner performance both inside and outside learning activities
- Uses Learning Record Stores (LRS) to capture learning activity streams
- Includes xAPI profiles like cmi5 and the TLA Master Object Model (MOM)
- Enables detailed tracking of learner interactions and performance data

### 2. Learning Activity Metadata (IEEE P2881)
- Describes learning activities and their associated content
- Stored in the TLA's Experience Index (XI)
- Builds upon IEEE 1484.12.1 Learning Object Metadata (LOM)
- Increases granularity of learning resource definitions
- Harmonizes with multiple educational data standards

### 3. Reusable Competency Definitions (IEEE 1484.20.1 RCD)
- Describes Knowledge, Skills, Abilities, and Other behaviors (KSAOs) required in the workplace
- Enables common language for describing competencies across organizations
- Defines assessment and evaluation criteria for measuring proficiency
- Supports alignment between education/training and operational performance

### 4. Enterprise Learner Records (IEEE Study Group)
- Tracks and manages each learner's competency levels within the organization
- Built around a comprehensive data model for learner records
- Supports AI/ML solutions for intelligent tutoring and learner optimization
- Maintains evidentiary requirements for data ownership and stewardship

## TLA Reference Implementation

The TLA adopts a **core/edge paradigm** that separates:

**Core Systems:**
- Learning Event Management
- Activity and Resource Management
- Competency Management
- Learner Management
- Backend services for distributed operations

**Edge Systems:**
- Learning Management Systems (LMS)
- Mobile devices, simulators, intelligent tutors
- Any learning delivery technology
- Adaptive algorithms and visualization tools

## TLA Master Object Model (MOM)

The TLA MOM normalizes data across different learning activities through three key states:

- **Learning Activity State**: Tracks learner interactions from initialization to completion
- **Learning Event State**: Captures context before/after learning activities
- **Career State**: Manages progression through career milestones

## Five Control Loops for Adaptive Systems

The TLA enables adaptation at multiple levels through five control loops:

1. **Control Loop 1**: Optimize learning within current activity (intelligent tutoring)
2. **Control Loop 2**: Optimize progress across multiple activities toward credentials
3. **Control Loop 3**: Prioritize credentials/activities for potential jobs
4. **Control Loop 4**: Support career field management and trajectory planning
5. **Control Loop 5**: Enable establishment of new career paths

## Key Benefits

- **Interoperability**: Standardized data formats enable seamless integration across systems
- **Lifelong Learning**: Comprehensive tracking from individual activities to entire careers
- **Adaptive Capabilities**: Data-driven personalization and optimization
- **Evidence-Based**: Maintains chain of evidence for competency assertions
- **Scalability**: Supports everything from individual learner dashboards to organizational analytics

## Key Diagrams for Explaining TLA Architecture

Based on the document content, here are the most important diagrams to illustrate the TLA:

### 1. **TLA Core/Edge Systems Architecture (Figure 1)**
- Shows the relationship between core services and edge systems
- Illustrates the four data pillars integration
- Demonstrates external interfaces and data flow

### 2. **TLA Master Object Model Verbs (Figure 2)**
- Visualizes the learning event lifecycle
- Shows the three states: Learning Activity, Learning Event, and Career
- Demonstrates data normalization across different systems

### 3. **Learning Activity Metadata Structure (Figure 3)**
- Details the P2881 standard data model components
- Shows relationships between metadata elements
- Illustrates course catalog federation approach

### 4. **Reusable Competency Definitions Framework (Figure 4)**
- Maps competency relationships and frameworks
- Shows connection between competencies, credentials, and learning resources
- Demonstrates the competency development process

### 5. **TLA Control Loops (Figure 7)**

- Illustrates the five levels of adaptive capability
- Shows time horizons and adaptation scope
- Connects initial conditions to mission effectiveness

### 6. **Competency Management Data Flow (Figure 5)**

- Shows how learner data flows from activities through LRS systems
- Demonstrates competency assertion generation
- Illustrates integration between all four data pillars

### 7. **Enterprise Learner Record Model (Figure 6)**

- Details the comprehensive learner profile structure
- Shows integration of personal, employment, credential, and competency data
- Demonstrates longitudinal learning tracking

These diagrams effectively communicate the TLA's comprehensive approach to data-driven learning ecosystems and would be essential for explaining the architecture to stakeholders, developers, and educators.