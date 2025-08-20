# IEEE TLA Standards Glossary

## Core Standards Overview

This glossary covers terminology from the key IEEE TLA (Total Learning Architecture) standards and related learning technology specifications:

- **IEEE 9274.1.1-2023**: Experience API (xAPI) Base Standard
- **IEEE P9274.2.1**: xAPI Profiles Standard  
- **IEEE P9274.3.1**: cmi5 Profile for xAPI
- **IEEE 1484.20.3-2022**: Standard for Sharable Competency Definitions (SCD)
- **IEEE P2997**: Standard for Enterprise Learner Records
- **IEEE P2881**: Standard for Learning Metadata

#### Actor

An entity (person, group, or system) who performs an action in an xAPI statement. In xAPI, the Actor is the "who" in the subject-verb-object structure of learning data.

#### ADL Initiative

Advanced Digital Learning Initiative - a U.S. Department of Defense program that develops learning technology standards and reference implementations.

#### Agent

In cmi5 and xAPI, an individual Actor representing a learner or system entity.

#### AICC

Aviation Industry Computer-Based Training Committee (predecessor organization to cmi5 development)

#### API (Application Programming Interface)

A set of rules and protocols that allows different software applications to communicate with each other. In TLA context, refers to standardized interfaces for exchanging learning data.

#### ARM (Activity and Resource Management)

A TLA service that captures, connects, and shares data about learning resources, including the ability to generate and manage metadata about learning activities.

#### Assignable Unit (AU)

In cmi5, the launchable piece of content that includes the concepts of completion, pass/fail, score, and duration. AUs are separately launchable pieces of content that collect learner data and send it to the LMS.

#### Block

In cmi5, a grouping structure that wraps pieces of content that are either grouped together or contain Assignable Units.

#### CaSS (Competency and Skills System)

An open-source system that allows users to define, store, manage, and access Competency Definitions and organize them into Competency Frameworks.

#### cmi5

An xAPI Profile that bridges the SCORM and xAPI divide by defining interoperability rules, including launch, authorization, reporting and course structure, that inform how an LMS and xAPI-enabled learning activities communicate with each other.

#### cmi5 Allowed Statements

xAPI statements that include the session id and potentially additional information included in the launch data but are otherwise custom to an AU, maintaining the inherent flexibility of xAPI.

#### cmi5 Defined Statements

xAPI statements that are highly defined by the specification and are tied to session/registration management concepts. They include a specific cmi5 category Activity for easy detection and access in the LRS statement stream.

#### CMM (Capability Maturity Model)

A framework used by TLA to describe different levels of implementation maturity for learning architecture components.

#### Competency

A skill, knowledge, ability, attitude, habit of practice, behavior, or learning outcome that can be defined, measured, and assessed.

#### Competency Definition

Formal representation of the key characteristics of a competency, independently of its use in any particular context, enabling interoperability among learning systems.

#### Competency Framework

Structured collections of competencies that define the relationship between competencies in the context of a specific domain (e.g., job, duty, occupation).

#### CORS

Cross Origin Resource Sharing - HTTP mechanism for resource loading across domains

#### Course Structure

In cmi5, the organizational framework that wraps content pieces into Blocks and Assignable Units, implemented as an XML file called cmi5.xml.

#### CRUD Operations

Create, Read, Update, and Delete operations that connected systems can perform on metadata through the ARM service.

#### CTDL

Credential Transparency Description Language

#### Data Model

A standardized structure that defines how data elements are organized, related, and stored to enable interoperability between systems.

#### Data Pillar

One of the four foundational data categories in the TLA Data Strategy that must be exposed through common interfaces, asynchronous services, and standard data formats.

#### DTIC

Defense Technical Information Center

#### ECC (Enterprise Course Catalog)

An ADL Initiative program working to mature the Experience Index and the underlying P2881 Learning Activity Metadata standard.

#### Educational Alignment

A key component of learning resource metadata that describes how a learning resource aligns to the competencies it supports.

#### ELR (Enterprise Learner Record)

A data model that preserves data ownership and integrity while tracking a learner's path through different organizations, learning experiences, demonstrated competencies, conferred credentials, and employment history.

#### ELRR (Enterprise Learner Record Repository)

A prototype system designed to modernize how DoD captures, stores, and uses data about individuals' education and training experiences.

#### Experience Index (XI)

A structured database that stores Learning Activity Metadata, intended to be the server-side implementation of the P2881 standard.

#### Framework

See Competency Framework.

#### GDPR (General Data Protection Regulation)

European privacy regulation that TLA Study Group and related standards development must comply with.

#### HTTPS

Secure Hypertext Transfer Protocol

#### IEEE (Institute of Electrical and Electronics Engineers)

An internationally recognized standards-development organization working with ADL Initiative to formally establish TLA data standards.

#### Interoperability

The ability of different systems and technologies to communicate, exchange data, and use the information that has been exchanged.

#### IRI/IRL (Internationalized Resource Identifier/Locator)

According to xAPI, an IRL is an IRI that, when translated into a URI, is a URL. Used for unique identification of learning concepts and entities.

#### JSON (JavaScript Object Notation)

A lightweight data format used for encoding learning data in xAPI and other TLA standards.

#### JSON-LD (JSON for Linked Data)

A JSON-based format for expressing linked data, used in xAPI Profiles and Learning Metadata standards.

#### Kafka Stream

A distributed streaming platform used in TLA Reference Implementation for processing and routing xAPI statements between services.

#### KSAO (Knowledge, Skills, Abilities, and Other behaviors)

The standard categorization of competency elements required for performing different jobs, duties, and tasks.

#### Launch

In cmi5, the process of starting an Assignable Unit from an LMS, providing the AU with necessary information about the LMS and learner.

#### Launch Data

Information provided to Assignable Units during the cmi5 launch process, including LRS authentication credentials and session context.

#### Learner

The end user viewing/using the learning content (Assignable Units).

#### Learner Preferences

In cmi5, settings scoped to the Agent representing the enrolled LMS learner, including language and audio preferences.

#### Learner Profile

A comprehensive record of a learner's activities, competencies, and progress that can be populated from various TLA services.

#### Learning Activity

Any learning experience or content that can generate xAPI statements, ranging from traditional courses to simulations, games, and real-world activities.

#### Learning Activity Metadata

Structured data that describes learning resources, activities, events, and instructional content, stored in an Experience Index.

#### Learning Object

Educational content that is more formally defined than typical teaching materials and intended to be reused by many educators and learners.

#### Learning Record Store (LRS)

A system that exposes RESTful Web Service API for the purpose of tracking and accessing experiential learning data, serving as the server-side implementation of xAPI.

#### LMS (Learning Management System)

A computer system with capabilities to register learners, launch learning presentations, analyze and report learner performance, and track learners' progress.

#### LOM (Learning Object Metadata)

IEEE 1484.12.1 standard that P2881 Learning Metadata builds upon to increase granularity of learning resource definitions.

#### LRMI

Learning Resource Metadata Initiative

#### LRS

See Learning Record Store.

#### LTSC (Learning Technology Standards Committee)

An IEEE Computer Society committee that sponsors working groups developing learning technology standards including TLA components.

#### Master Object Model (MOM)

A TLA-specific xAPI Profile that provides a standardized way to structure xAPI statements for interoperability across TLA components.

#### Metadata

Data that describes other data, enabling the search, evaluation, acquisition, and use of learning content and activities.

#### Metadata Aggregation Services

Services being developed by the ECC program to connect the Experience Index to systems that include information about learning resources.

#### Noisy LRS

An LRS that stores raw learner records (xAPI statements) before they are processed and rolled up to the Transactional LRS.

#### NoSQL

Non-relational database systems (e.g., MongoDB) used in TLA implementations

#### Object

In xAPI, the "what" component of the actor-verb-object statement structure, representing what the learning activity was about.

#### PAR (Project Authorization Request)

A formal document required to initiate IEEE standards development projects.

#### PESC

Postsecondary Electronic Standards Council

#### Profile

In TLA context, either an xAPI Profile defining vocabulary and rules, or a data profile defining different types of competencies used within an organization.

#### Query

A request made to retrieve specific metadata from the Experience Index using GET commands through the ARM API.

#### RDF (Resource Description Framework)

A framework for describing resources on the web, used as the underlying data model for Learning Metadata standards.

#### Registration

An enrollment instance of a learner in a course, with a registration ID that uniquely identifies and persists throughout the course progress.

#### REST/RESTful API

Representational State Transfer - an architectural pattern for web services that TLA interfaces use for communicating learning data via HTTP requests and responses.

#### SCD (Sharable Competency Definitions)

IEEE 1484.20.3 standard that enables a common approach for describing competencies, aligning them in frameworks, and defining assessment criteria.

#### Schema.org

Vocabulary for structured data markup

#### SCORM (Sharable Content Object Reference Model)

A legacy e-learning standard that cmi5 is designed to bridge with xAPI, providing traditional packaging and launch capabilities.

#### Session

In cmi5, a period of learner interaction with an Assignable Unit, bounded by "Initialized" and "Terminated" statements.

#### Statement

See xAPI Statement.

#### TLA (Total Learning Architecture)

A comprehensive framework of standards and services designed to enable interoperable learning ecosystems, particularly within the U.S. Department of Defense.

#### TLA Data Strategy

A common set of goals and objectives across DoD's education and training community built on four data pillars with standardized interfaces and data formats.

#### TLA Reference Implementation

A working implementation of TLA standards designed to enable stakeholders to test, evaluate, or deploy TLA sandbox implementations.

#### TLA Sandbox

A testing environment built around ADL's TLA reference implementation for evaluating tools, products, and services.

#### Transactional LRS

An LRS that receives processed xAPI statements rolled up from the noisy LRS using TLA MOM statements.

#### URI

Uniform Resource Identifier

#### URL

Uniform Resource Locator

#### UUID (Universally Unique Identifier)

A unique identifier used to identify learners and correlate their activities across TLA systems.

#### Verb

In xAPI, the action component of the actor-verb-object statement structure, described by a URI and display string indicating what action occurred.

#### Vocabulary

Controlled terms and definitions used in standards to ensure consistent interpretation and interoperability across systems.

#### Working Group

IEEE committees that develop specific standards, such as the Competency Data Standards Working Group or xAPI Working Group.

#### xAPI (Experience API)

An IEEE approved standard (IEEE 9274.1.1-2023) for learning technology that captures data about learning experiences in a consistent format using a simple actor-verb-object structure.

#### xAPI Profile

A set of rules and vocabulary that define how to apply the xAPI standard for particular use cases, ensuring interoperability for specific domains or applications.

#### xAPI Statement

The basic unit of learning data in xAPI, structured as actor-verb-object (who did what to what), with additional context and metadata.

#### XI

See Experience Index.

#### XML (eXtensible Markup Language)

A markup language used in cmi5 for the manifest file (cmi5.xml) that describes course structure and metadata.

---

*This glossary is based on publicly available IEEE standards documentation and TLA implementation guides as of 2025. For the most current and authoritative definitions, please refer to the official IEEE standards publications.*