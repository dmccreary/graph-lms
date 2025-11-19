# Glossary of Graph Learning Management System

#### Advanced Distributed Learning

An initiative of US federal agencies to encourage collaboration, facilitate interoperability, and promote best practices for using distributed learning technologies.

See also:

- [ADL Total Learning Architecture Website](https://www.adlnet.gov/projects/tla/)
- [Main ADL Web Site](https://www.adlnet.gov/)
- [ADL GitHub Site](https://github.com/adlnet)
- [Total Learning Architecture Reference Implementation GitHub Repo](https://github.com/adlnet/tla)

#### Analytics

The systematic computational analysis of data to discover patterns and insights.

In the graph LMS, analytics are used to monitor student progress, personalize learning paths, and improve educational outcomes.

**Example:** The LMS dashboard provides analytics on student engagement with different learning concepts.

### Advanced Digital Learning

ADL or the Advanced Digital Learning Initiative is a U.S. Department of Defense program that develops learning technology standards and reference implementations.

#### Assessment

The evaluation of a student's knowledge, skills, and abilities.

In the graph LMS, assessments are personalized and can adapt in real-time to accurately measure learning progress.

#### Assessment Item

A single question or task within an assessment used to measure learner knowledge or skills. Assessment items are the fundamental units in [Question and Test Interoperability](#question-and-test-interoperability-qti) (QTI) assessments.

In the graph LMS, assessment items are tagged with competencies they measure, enabling precise tracking of learner proficiency.

**Example:** A multiple-choice question asking students to identify the correct Python syntax for defining a function is an assessment item.

See also: [Question and Test Interoperability (QTI)](concepts/qti.md)

#### Badge

![](./img/sample-robot-badge.png)

A digital or physical recognition awarded to students upon the completion of a course or achievement of specific learning milestones.

In the graph LMS, badges serve as incentives and markers of accomplishment, representing a student's progress and mastery in particular areas. Badges can be displayed on the student's profile and act as motivators, encouraging further engagement and goal attainment.

In the physical world, many in-person courses provide laptop stickers or iron-on badges for
achieving specific goals.

**Example:** The LMS awards a "Programming Fundamentals" badge to students who complete all modules in an introductory coding course, signifying their understanding of core programming concepts.

* [MicroPython Skill Badge Iron on Patch from Adafruit](https://www.adafruit.com/product/3271)

#### Concept Space

A set of graph nodes and relationships that represents the key concepts
that must be mastered to achieve a learning objective.

In the graph LMS, each course has a set of concepts stored in a graph
database form that describes the concepts for that course.  Concepts
are also stored in a vector store for similarity analysis.

#### Competency-Based Education

An educational model where progress is based on demonstrating competence in specific areas.

In the graph LMS, students advance by proving mastery of competencies rather than time spent on a subject. This is achieved by monitoring progress and generating real-time simulations that can monitor progress.

#### Competency Framework

A structured set of competency definitions that describes the knowledge, skills, abilities, and behaviors required within a specific domain, occupation, or educational context. Competency frameworks use [Reusable Competency Definitions](#reusable-competency-definitions-rcd) as their building blocks.

In the graph LMS, competency frameworks map learning activities to industry standards and job requirements, enabling skills-based learning pathways and credential alignment.

**Example:** An IT competency framework defines proficiency levels for programming languages, system administration, and cybersecurity skills.

See also: [Reusable Competency Definitions (RCD)](concepts/rcd.md)

#### Comprehensive Learner Record

An IMS Global (now 1EdTech) standard for digital learner records that extends beyond traditional transcripts to include competencies, co-curricular activities, and evidence of achievement. Related to but distinct from [Enterprise Learner Records](#enterprise-learner-records-elr).

In the graph LMS, Comprehensive Learner Records provide holistic documentation of academic and experiential learning, supporting competency-based credentials and portable learner profiles.

See also: [Enterprise Learner Records (ELR)](concepts/elr.md)

#### Computational Thinking

A problem-solving process that involves breaking down complex problems into manageable parts that can be solved using computational methods.

In the graph LMS, computational thinking skills are fostered through interactive simulations and coding exercises.

**Example:** Students use computational thinking to design algorithms within the LMS simulations.

#### Caliper Analytics

An IMS Global (now 1EdTech) learning analytics standard that defines a structured approach to collecting, organizing, and transmitting learning data for analytics and reporting purposes.

In the graph LMS, Caliper Analytics complements xAPI by providing standardized event tracking and metrics for learning activities, enabling cross-system analytics and reporting.

See also: [Experience API (xAPI)](concepts/xapi.md)

#### cmi5

An xAPI profile specification that defines how learning management systems launch, communicate with, and track xAPI-enabled content. It is the successor to SCORM, providing modern interoperability for web-based learning content.

In the graph LMS, cmi5 enables LMS-launched learning activities to report detailed xAPI statements while maintaining LMS control over content launch and tracking.

**Example:** An LMS uses cmi5 to launch an interactive training module, which then reports learner interactions back to the LRS via xAPI statements.

See also: [SCORM](#scorm), [Experience API (xAPI)](concepts/xapi.md)

#### Cognitive Load

The total amount of mental effort being used in working memory.

In the graph LMS, content is tailored to manage cognitive load and prevent student overload.

#### Content Management System (CMS)

A software application that enables users to create, edit, manage, and publish digital content without specialized technical knowledge.

In the graph LMS, a CMS manages educational resources, lesson plans, and multimedia content for courses.

#### Content Space

A set of learning resources that can be customized by the graph LMS in
real-time.

Examples of content include web pages, lesson plans, MicroSims, animations, course content, assessments, formulas, equations and quizzes.

#### Counts and Amounts

The focus of legacy learning management systems where the focus was not on predicting learning paths, but storing and totaling courses, registrations and grading.

**Example:** When describing a current LMS a teacher describes it a "good counts and amounts" system implying it does not have the capabilities to recommend learning paths for students.

#### Data-Driven Instruction

An approach where teaching is guided by analysis of student data to meet learning needs.

In the graph LMS, data-driven instruction helps educators adjust content and methods for better outcomes.

#### Decentralized Identifiers

Decentralized Identifiers (DIDs) are a type of globally unique identifier that enables verifiable, self-sovereign digital identity. DIDs are owned and controlled by the individual or organization they represent, rather than being issued by a centralized authority.

In the graph LMS, DIDs enable learners to own and control their educational records and credentials, supporting portable [Enterprise Learner Records](#enterprise-learner-records-elr) and verifiable credentials across institutional boundaries.

**Example:** A learner uses their DID to access their learning record across multiple universities and share verified credentials with potential employers without requiring institutional intermediaries.

See also: [Enterprise Learner Records (ELR)](concepts/elr.md), [Self-Sovereign Identity](#self-sovereign-identity)

#### Diamond Age Primer

An inspiration from Neal Stephenson's novel "The Diamond Age," referring to an interactive, adaptive book that provides personalized education.

In the graph LMS, the concept of the Diamond Age Primer influences the creation of hyper-personalized learning experiences.

**Example:** The LMS acts like a modern Diamond Age Primer by adapting lessons in real-time based on student interactions.

#### Digital Credentials

Electronically-verifiable records of achievement, competency, or participation that can be cryptographically signed and shared across systems. Digital credentials include digital badges, certificates, diplomas, and micro-credentials.

In the graph LMS, digital credentials provide tamper-proof, portable evidence of learning achievements that learners control and can share with employers, educational institutions, and other stakeholders.

**Example:** A learner earns a digital badge for completing a Python programming course, which is cryptographically signed by the issuing institution and can be verified by potential employers.

See also: [Badge](#badge), [Enterprise Learner Records (ELR)](concepts/elr.md), [Verifiable Credentials](#verifiable-credentials)

#### Enterprise Learner Records

Enterprise Learner Records (ELR) is an IEEE P2997 standard for comprehensive, portable learner records that go beyond traditional transcripts to include competencies, assessments, evidence, and lifelong learning achievements. ELR enables interoperability across educational institutions, employers, and credentialing organizations.

In the graph LMS, ELR provides the verified credential layer that summarizes learning experiences, asserts competencies, and supports skills-based hiring and career development.

**Example:** An ELR contains a learner's degrees, professional certifications, competency assertions with evidence, and work experience, all cryptographically signed and learner-controlled.

See also: [Enterprise Learner Records (ELR)](concepts/elr.md), [Comprehensive Learner Record](#comprehensive-learner-record)

#### Experience Index

The Experience Index (XI) is the searchable repository for [Learning Activity Metadata](#learning-activity-metadata-lam) within the [Total Learning Architecture](#total-learning-architecture). It aggregates learning opportunity descriptions from multiple providers, enabling federated discovery and recommendation.

In the graph LMS, the Experience Index allows learners and systems to search across all available learning activities, find content matching specific competencies, and generate personalized learning pathways.

**Example:** A learner searches the Experience Index for "beginner Python programming" activities and receives results from multiple content providers, filtered by their current skill level and learning preferences.

See also: [Learning Activity Metadata (LAM)](concepts/lam.md), [Total Learning Architecture](concepts/tla.md)

#### Directed Graph

A graph where edges have a direction, indicating the relationship flows from one node to another.

In a [learning graph](#learning-graph) is a directed edges shows how a concepts depend on
another concept (a prerequisite concept).

#### Edge

A connection between two nodes in a graph representing the relationship between them.

In a [Learning Graph](#learning-graph), edges depict prerequisites and dependencies between learning concepts.

#### Five Levels of Intelligent Textbooks

A five-level classification system for intelligent textbooks that places static textbooks a level 1, interactive textbooks at level 2, personalized textbooks at level 3, chatbot-assisted textbooks at level 4 and fully autonomous textbooks at level 5.

Note that levels 3 to 5 contain student-specific data and are thus governed by privacy laws in each country.

**Example:** An intelligent textbook with MicroSims, quizzes and in-browser recommendation systems might be at a level 2.9 as long as no student-specific data is persisted on servers.

#### Foundation Concept

A learning concept that is assumed to be known at the start of a course.

Foundation concepts are prerequisites for a course.

Foundation concepts have an out-degree of zero in a learning graph and are
often place on the left side of a [learning graph](#learning-graph).

#### Generative AI

The process of using a [Large Language Model](#large-language-model-llm) to generate
concent (text, image or a sound) from an text prompt.

#### Goal Concept

A concept within a learning graph that has no other concepts that depend on it.

A goal concept has an in-degree of zero (no inbound edges) and are traditionally placed on the right side of a [learning graph](#learning-graph).

#### Graph Database

A type of database that uses graph structures with nodes and edges to represent and store data relationships.

In the graph LMS, a graph database models the connections between courses, concepts, students, and learning resources.

**Example:** The LMS queries the graph database to identify prerequisite concepts for a student's next lesson.

#### Graph Machine Learning

The application of machine learning techniques to graph-structured data to make predictions or discover patterns.

In the graph LMS, graph machine learning predicts student performance and recommends personalized learning paths.

#### GraphRAG

A method that combines graph databases with Retrieval-Augmented Generation to generate personalized content.

In the graph LMS, GraphRAG retrieves relevant concepts from the graph and uses LLMs to generate customized learning materials.

#### Hyper-Personalization

An advanced form of personalization that uses real-time data and AI to deliver highly relevant content to each user.

In the graph LMS, hyper-personalization tailors every aspect of the learning experience to individual student needs.

**Example:** The LMS modifies simulations on-the-fly to match a student's learning style and pace.

#### Intelligent Textbook

An online electronic textbook that adapts to the needs of the student.

Intelligent textbooks can be classified into [five levels](#file-levels-of-intelligent-textbooks)

#### Journey Map

![Beginning Python Journey](./img/beginning-python-journey-map.png)

A visual representation of a student's learning path, highlighting key milestones, interactions, and achievements throughout a course or curriculum.

In the graph LMS, the journey map provides an overview of each student's unique progress, illustrating completed concepts, remaining prerequisites, and upcoming objectives. It serves as both a navigation tool and a motivational guide, helping students visualize their learning trajectory.

**Example:** The LMS journey map shows a student's progression through foundational math concepts, with future topics in algebra and geometry mapped out to encourage goal-setting and clarity on the learning path.

#### Knowledge Management System

A system that organizes, stores, and retrieves knowledge to improve understanding and collaboration.

In the graph LMS, it manages educational content, resources, and learning outcomes across courses.

#### Knowledge Space

A conceptual framework representing all possible knowledge states within a domain.

In the graph LMS, the knowledge space is mapped using nodes and edges to represent concepts and their relationships.

#### KSAOs

Knowledge, skills, abilities, and other behaviors that shareable competency definitions contain.

SCDs are defined by the IEEE 1484.20.3 Standard.

#### LangChain

A framework for developing applications powered by language models.

In the graph LMS, LangChain integrates LLMs to generate real-time, personalized educational content.

#### Large-Language Model (LLM)

An AI model trained on extensive text data to understand and generate human-like language.

In the graph LMS, LLMs create customized explanations, answer questions, and generate simulations.

#### Learning Certification

A formal recognition that a student has achieved a specific level of knowledge or competency in a given subject or skill.

In the graph LMS, learning certifications are awarded upon completion of defined learning objectives, mastery of competencies, or successful assessments. These certifications can be used to track progress and verify skill acquisition.

**Example:** A LMS can grants a learning certification to students who complete all modules in a programming course, demonstrating proficiency in coding basics.

#### Learning Concept

A single atomic concept that is covered within a course of instruction.

Learning concepts have dependencies of other concepts that must be
mastered before a new concept is understood.

A concept that is assumed at the start of a course is called a [Foundation Concept](#foundation-concept) and an end-goal of a course is called a [Goal Concept](#goal-concept)

#### Learning Analytics

The collection and analysis of data about learners to improve education.

In the graph LMS, learning analytics inform decisions on content personalization and instructional strategies.

#### Learning Activity Metadata

Learning Activity Metadata (LAM) is the IEEE P2881 standard that defines comprehensive metadata for describing learning activities, resources, and content. LAM is one of the four foundational pillars of the [Total Learning Architecture](#total-learning-architecture), building upon [Learning Object Metadata](#learning-object-metadata-lom) with enhanced competency alignment and modern technical specifications.

In the graph LMS, LAM enables intelligent discovery and recommendation of learning activities by describing what competencies they teach, prerequisites, difficulty levels, and relationships to other learning resources.

**Example:** A Python programming tutorial's LAM metadata specifies it teaches "Python syntax" competency, requires "basic computer literacy" prerequisite, has "beginner" difficulty, and takes approximately 2.5 hours to complete.

See also: [Learning Activity Metadata (LAM)](concepts/lam.md), [Experience Index](#experience-index), [Learning Object Metadata (LOM)](#learning-object-metadata-lom)

#### Learning Object Metadata

Learning Object Metadata (LOM) is the IEEE 1484.12.1 standard established in 2002 for describing educational resources. LOM defined foundational categories including general information, lifecycle, technical specifications, educational characteristics, rights, relations, annotations, and classifications. It serves as the predecessor to [Learning Activity Metadata](#learning-activity-metadata-lam).

In the graph LMS, LOM provides the historical foundation for modern metadata standards, with many systems still using LOM-based descriptions for learning resources.

See also: [Learning Activity Metadata (LAM)](concepts/lam.md)

#### Learning Record Store

A Learning Record Store (LRS) is a data repository that stores learning experience data in the form of xAPI statements. The LRS is a core component of the [Total Learning Architecture](#total-learning-architecture), providing persistent storage for detailed learner interaction data that can be analyzed, reported, and used as evidence for competency assertions.

In the graph LMS, the LRS accumulates granular learning activity data that feeds into adaptive algorithms, competency tracking, and credential issuance.

**Example:** An LRS stores xAPI statements recording that a learner completed a video lesson, scored 85% on a quiz, and spent 45 minutes on an interactive simulation.

See also: [Learning Record Store (LRS)](concepts/lrs.md), [Experience API (xAPI)](concepts/xapi.md)

#### Learning Tools Interoperability

Learning Tools Interoperability (LTI) is an IMS Global (now 1EdTech) standard that enables seamless integration of external learning tools and content with learning management systems. LTI defines how LMS platforms launch external tools, pass user context, and receive results.

In the graph LMS, LTI allows integration of specialized assessment tools, simulations, content libraries, and other applications while maintaining single sign-on and grade synchronization.

**Example:** An LMS uses LTI to launch a third-party adaptive math tutor, automatically passing student information and receiving performance scores back into the gradebook.

#### Learning Trajectories

The paths students take through educational content as they progress toward learning objectives.

In the graph LMS, learning trajectories are dynamically adjusted based on student performance and mastery.

**Example:** The LMS reroutes a student's learning trajectory to reinforce a concept they struggled with.

#### Learning Graph

A directed graph of learning concepts where each node in the graph represent
a concept covered in a course and the relationships show the dependency
of the concepts (prerequisites).

See also:

* [Learning Graph](https://dmccreary.github.io/learning-graphs/)
* [Foundation Concept](#foundation-concept)

#### Learning Management System (LMS)

A computer system used to manage the educational process.

LMS systems manage course catalogs, course offerings, course content, course concepts, student enrollments, assessments, grading and certification of completions.

This website suggests that using a graph database is ideal for an AI-based LMS
system that does real-time hyper-personalization of content based on the needs
of the students.

#### Learning Objective

A specific skill or knowledge area that students are interested in or expected to acquire to complete a course.

In the graph LMS, learning objectives guide the creation of personalized learning paths and assessments.

#### Lesson Plan

A detailed guide created by educators outlining the instruction for a class.

In the graph LMS, lesson plans are automatically generated and personalized for each student.

**Example:** The LMS provides a lesson plan that focuses on interactive simulations for visual learners.

#### Machine Learning

A subset of AI that enables systems to learn from data and improve over time without explicit programming.

In the graph LMS, machine learning algorithms personalize content and predict student needs.

#### Markdown

A lightweight markup language with plain text formatting syntax, designed to be easy to read and write. Markdown is widely used to format documents, notes, and web content.

In the graph LMS, Markdown is used to structure content for [microsites](#microsite) and other educational materials, particularly with MkDocs, which converts Markdown files into static websites. Many generative AI tools also output content in Markdown, making it simple to integrate AI-generated content directly into the LMS.

**Example:** The LMS leverages generative AI to produce Markdown lesson plans, which are then formatted and published as microsites using MkDocs.
#### Mastery Learning

An approach where students must achieve a high level of understanding
before moving to the next concept.

In the graph LMS, students progress upon demonstrating mastery,
ensuring solid foundational knowledge.  The LMS can encourage
mastery without boredom by generating interesting content.

#### MicroSim

A stand-alone simulation that is used to explain an educational concept.

MicroSims are designed to be simple so that a large-language model can
generate them or modify them in real-time to meet the needs of a student.

* [MicroSim Website](https://dmccreary.github.io/microsims/)

#### Microsite

A standalone, focused website created using MkDocs, designed to deliver specific content on a narrow topic within the graph LMS.

In the graph LMS, microsites are used to provide detailed, easily accessible resources on particular subjects or courses. They feature a built-in, serverless search function that uses a reverse index loaded into the webpage, allowing users to quickly locate information without relying on an external search engine.

**Example:** A "Graph Algorithms 101" microsite helps students explore algorithm fundamentals, with serverless search enabling quick access to topics like "shortest path" and "clustering."
#### Node

An individual element in a graph representing an entity such as a concept, student, or resource.

In a [learning graph](#learning-graph), nodes are used to represent learning concepts within the knowledge graph.

#### p5.js

A JavaScript library for creative coding, enabling interactive graphics and animations.

In the graph LMS, p5.js is used to create dynamic visualizations and educational simulations
called [MicroSims](#microsim).

#### Personal Learning Environment

A system that provides learners with tools to control and manage their own learning.

In the graph LMS, it empowers students to navigate through content that aligns with their interests and goals.

#### Personalization

The process of customization of content to meet the needs of an individual or group.

In this context, we focus on performing personalization in real-time based
on continual feedback from a students progress.

#### Prerequisite

A concept or course that must be understood before progressing to more advanced material.

In the graph LMS, prerequisites are mapped to ensure students have the necessary foundation before moving forward.

#### Proficiency Level

A defined stage of mastery or competence within a skill or competency, typically ranging from novice/beginner to expert/master. Proficiency levels are core components of [Reusable Competency Definitions](#reusable-competency-definitions-rcd) and [competency frameworks](#competency-framework).

In the graph LMS, proficiency levels enable precise tracking of learner progress, appropriate activity recommendations, and evidence-based credential issuance.

**Example:** A programming competency framework defines five proficiency levels: Awareness (Level 1), Basic (Level 2), Proficient (Level 3), Advanced (Level 4), and Expert (Level 5).

See also: [Reusable Competency Definitions (RCD)](concepts/rcd.md), [Competency Framework](#competency-framework)

#### Question and Test Interoperability

Question and Test Interoperability (QTI) is an IMS Global (now 1EdTech) standard for representing assessment content, including questions, tests, response processing, and scoring rules. QTI enables interchange of assessment items and tests across different learning management systems and assessment platforms.

In the graph LMS, QTI provides standardized assessment content that can be tagged with competencies, support adaptive testing, and generate evidence for [Enterprise Learner Records](#enterprise-learner-records-elr).

**Example:** A QTI package contains multiple-choice questions, essay prompts, and interactive simulations that can be imported into any QTI-compliant LMS.

See also: [Question and Test Interoperability (QTI)](concepts/qti.md), [Assessment Item](#assessment-item)

#### Response Processing

The computational rules and algorithms used to evaluate learner responses in assessments and determine scores, feedback, and outcomes. Response processing is a core component of [Question and Test Interoperability](#question-and-test-interoperability-qti) (QTI).

In the graph LMS, response processing enables automated scoring, partial credit, adaptive feedback, and competency-level determination based on assessment performance.

**Example:** A response processing template evaluates a learner's multiple-choice answer, assigns a score, and provides targeted feedback based on which distractor was selected.

See also: [Question and Test Interoperability (QTI)](concepts/qti.md)

#### Reusable Competency Definitions

Reusable Competency Definitions (RCD) is the IEEE 1484.20.1 standard for describing knowledge, skills, abilities, and other behaviors (KSAOs) in a standardized, machine-readable format. RCD is one of the four foundational pillars of the [Total Learning Architecture](#total-learning-architecture), enabling common language for competencies across organizations.

In the graph LMS, RCDs provide the vocabulary for tagging learning activities, assessments, and credentials with the specific competencies they teach, assess, or certify. This enables competency-based learning pathways, skills gap analysis, and alignment between education and workforce requirements.

**Example:** An RCD defines "Python Programming" with specific proficiency levels, prerequisite competencies, and assessment criteria that can be referenced by multiple institutions and employers.

See also: [Reusable Competency Definitions (RCD)](concepts/rcd.md), [Competency Framework](#competency-framework), [Proficiency Level](#proficiency-level)

#### Retrieval Augmented Generation (RAG)

A technique that enhances language model outputs by retrieving relevant information from a database.

In the graph LMS, RAG retrieves specific concepts from the graph to generate accurate, personalized content.

#### Real-Time Personalization

The immediate adaptation of content or services based on user interactions and data.

In the graph LMS, learning materials adjust instantly to student inputs and performance.

**Example:** The LMS changes the difficulty level of questions in real-time based on the student's responses.

#### Recommendation System

An algorithm that suggests items or content to users based on analysis of data.

In the graph LMS, recommendation systems propose the next best concepts or resources for a student to explore.

#### SCORM

Sharable Content Object Reference Model (SCORM) is a set of technical standards for e-learning software products, developed by the Advanced Distributed Learning (ADL) initiative. SCORM defines how online learning content and Learning Management Systems communicate with each other, specifying content packaging, run-time communication, and sequencing.

In the graph LMS, SCORM represents the legacy standard for LMS-content interoperability, now largely superseded by [cmi5](#cmi5) and [xAPI](#xapi), though still widely deployed in existing systems.

**Example:** A SCORM package contains a training course that can be imported into any SCORM-compliant LMS, tracking completion status, time spent, and assessment scores.

See also: [cmi5](#cmi5), [Experience API (xAPI)](concepts/xapi.md)

#### Self-Sovereign Identity

A model for digital identity where individuals or organizations have complete ownership and control over their identity data and credentials, without reliance on centralized authorities. Self-sovereign identity uses [Decentralized Identifiers](#decentralized-identifiers) (DIDs) and blockchain or distributed ledger technology.

In the graph LMS, self-sovereign identity enables learners to own and control their educational records, credentials, and personal learning data, sharing only what they choose with specific institutions or employers.

**Example:** A learner maintains their learning credentials in a personal digital wallet using self-sovereign identity, selectively sharing verified achievements with employers without requiring institutional intermediaries.

See also: [Decentralized Identifiers](#decentralized-identifiers), [Enterprise Learner Records (ELR)](concepts/elr.md), [Verifiable Credentials](#verifiable-credentials)

#### Similarity Analysis

The process of comparing data to identify likeness based on certain criteria or features.

In the graph LMS, similarity analysis finds related concepts or resources to enhance personalized learning.

#### Simulations

Interactive programs that imitate real-world processes for learning purposes.

In the graph LMS, simulations help students grasp complex concepts through experiential learning.

**Example:** A physics simulation allows students to adjust variables and observe the effects in real-time.

#### Student Model

A representation of a student's knowledge, skills, and preferences used to personalize learning.

In the graph LMS, the student model is continuously updated based on interactions and assessments.

#### Total Learning Architecture

The Total Learning Architecture (TLA) is a comprehensive framework developed by the Advanced Distributed Learning (ADL) Initiative since 2016, built on four foundational data pillars: [Experience API (xAPI)](#xapi) for tracking learning experiences, [Learning Activity Metadata](#learning-activity-metadata-lam) (LAM) for describing learning opportunities, [Reusable Competency Definitions](#reusable-competency-definitions-rcd) (RCD) for defining skills and knowledge, and [Enterprise Learner Records](#enterprise-learner-records-elr) (ELR) for comprehensive learner credentials.

In the graph LMS, TLA provides the standards-based architecture for interoperable, data-driven, adaptive learning systems that connect learning activities, competency development, and career advancement across organizational boundaries.

**Example:** A TLA-compliant system uses xAPI to track learner activities in the LRS, matches them to competencies defined in RCDs, discovers appropriate learning activities through LAM metadata in the Experience Index, and issues verifiable credentials via ELR.

See also: [Total Learning Architecture (TLA)](concepts/tla.md), [Experience API (xAPI)](concepts/xapi.md), [Learning Activity Metadata (LAM)](concepts/lam.md), [Reusable Competency Definitions (RCD)](concepts/rcd.md), [Enterprise Learner Records (ELR)](concepts/elr.md)

#### Transcript

A formal academic record documenting a learner's courses, grades, credits, degrees, and other educational achievements issued by an educational institution. Traditional transcripts are static documents (paper or PDF) that provide a snapshot of academic history at a point in time.

In the graph LMS, transcripts are being superseded by dynamic, comprehensive digital records such as [Enterprise Learner Records](#enterprise-learner-records-elr) that include competencies, evidence, and lifelong learning achievements beyond traditional coursework.

**Example:** A university transcript lists all courses taken, grades received, GPA, degree earned, and graduation date, typically provided to employers or other institutions upon request.

See also: [Enterprise Learner Records (ELR)](concepts/elr.md), [Comprehensive Learner Record](#comprehensive-learner-record)

#### Verifiable Credentials

A W3C standard for tamper-proof, cryptographically-verifiable digital credentials that can be independently verified without contacting the issuing authority. Verifiable credentials use digital signatures and can include degrees, certifications, licenses, badges, or any attestation of achievement or qualification.

In the graph LMS, verifiable credentials enable secure, portable, learner-controlled credentials that form the technical foundation for [Enterprise Learner Records](#enterprise-learner-records-elr) and [digital credentials](#digital-credentials).

**Example:** A university issues a verifiable credential for a degree that includes the learner's cryptographic identifier, the credential details, and the university's digital signature, allowing anyone to verify authenticity without contacting the university.

See also: [Enterprise Learner Records (ELR)](concepts/elr.md), [Digital Credentials](#digital-credentials), [Self-Sovereign Identity](#self-sovereign-identity)

#### Vector Store

A database that stores vector representations (embeddings) of data for similarity searches.

In the graph LMS, vector stores hold embeddings of concepts to facilitate similarity analysis and content retrieval.

#### vis.js

An open-source JavaScript library for displaying interactive, animated networks.

In the graph LMS, vis.js visualizes the learning graph and concept relationships.

#### xAPI

The Experience API (xAPI) is an advanced learning technology standard that enables the collection and exchange of learning data from various sources, beyond the traditional LMS environment.

[xAPI Standard in Concepts](concepts/xapi.md)

#### Zone of Proximal Development (ZPD)

The range of tasks or concepts that a learner can accomplish with guidance but not yet independently. This concept, introduced by Lev Vygotsky, highlights the importance of targeted assistance in learning.

In a learning graph, the ZPD is used to guide real-time personalization by identifying concepts that a student is ready to learn with support. A LMS leverages data analytics and AI to dynamically adjust content, ensuring it remains within the student's ZPD.

**Example:** The LMS identifies that a student struggling with graph traversal is within their ZPD for mastering depth-first search and provides an interactive simulation to bridge the gap.