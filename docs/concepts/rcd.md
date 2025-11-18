# Reusable Competency Definitions

Reusable Competency Definitions or RCDs are part of the IEEE [Total Learning Architecture](tla.md) and are described in IEEE standard IEEE 1484.20.1.

## What are Reusable Competency Definitions?

RCDs describe what you need to know to do a job. For example, an RCD can describe:

- Knowledge, Skills, Abilities, and Other behaviors (KSAOs) required in the workplace
- A common language for describing competencies across organizations
- Assessment and evaluation criteria for measuring proficiency
- Alignment between education/training and operational performance

## Core Purpose and Benefits

Reusable Competency Definitions provide a standardized, machine-readable format for expressing competencies that can be shared and reused across different educational and training systems. This standardization offers several key benefits:

### Interoperability
RCDs enable different systems and organizations to exchange competency information without ambiguity. A competency defined in one learning platform can be understood and utilized by another system, facilitating learner mobility and credential portability.

### Consistency
By establishing a common vocabulary and structure, RCDs ensure that competencies are described consistently across contexts, reducing confusion and enabling accurate comparison of learning outcomes.

### Efficiency
Organizations can leverage existing competency definitions rather than creating new ones from scratch, saving time and resources while building on established best practices.

### Data-Driven Decision Making
Standardized competency data enables sophisticated analytics and reporting, helping organizations track skill gaps, measure training effectiveness, and make informed decisions about learning investments.

## IEEE 1484.20.1 Standard

The IEEE 1484.20.1 standard, formally titled "Standard for Learning Technology - Data Model for Reusable Competency Definitions," provides the technical specification for creating and managing RCDs.

### Key Components of the Standard

#### Competency Identifier
Each RCD must have a unique, persistent identifier (typically a URI) that enables unambiguous reference and retrieval. This identifier remains constant even as the competency definition evolves.

#### Competency Title
A concise, human-readable name for the competency that clearly indicates what it represents (e.g., "Java Programming," "Statistical Analysis," "Customer Service Communication").

#### Competency Description
A detailed explanation of the competency that specifies what a learner should know or be able to do. Descriptions should be:

- **Specific**: Clearly define the scope and boundaries
- **Measurable**: Include observable behaviors or outcomes
- **Action-oriented**: Use verbs that describe performance
- **Context-aware**: Specify the conditions or situations where the competency applies

#### Competency Type
Classification of the competency into categories such as:

- **Knowledge**: Facts, concepts, principles, and theories
- **Skills**: Practical abilities and techniques
- **Abilities**: Cognitive or physical capacities
- **Attitudes**: Dispositions and values
- **Behaviors**: Observable actions in specific contexts

#### Proficiency Levels
RCDs can define multiple levels of mastery, such as:

- Novice/Awareness
- Basic/Foundational
- Intermediate/Proficient
- Advanced/Expert
- Master/Authority

Each level should have clear criteria and performance indicators.

## Structure and Metadata

A complete RCD includes both required and optional metadata elements that provide context and enable discovery:

### Required Elements
- **Identifier**: Unique URI for the competency
- **Title**: Short descriptive name
- **Description**: Detailed competency statement

### Optional Elements
- **Subject**: Domain or discipline classification
- **Language**: Language code for internationalization
- **Version**: Version identifier for tracking changes
- **Status**: Current lifecycle state (draft, active, deprecated)
- **Creator**: Individual or organization that authored the RCD
- **Date**: Creation or modification timestamps
- **Related Competencies**: Links to prerequisite, related, or advanced competencies

## Relationship to Total Learning Architecture

Within the IEEE Total Learning Architecture (TLA), RCDs serve as the foundational building blocks that connect various system components:

### Integration Points

#### Learning Content
RCDs tag learning resources with the competencies they address, enabling:
- Competency-based content search and discovery
- Automatic learning path generation
- Gap analysis between current and target competencies

#### Assessment Systems
RCDs define what assessments should measure:
- Alignment of test items to specific competencies
- Proficiency level determination
- Evidence collection for competency attainment

#### Learning Record Store (LRS)
xAPI statements reference RCDs to record:
- Competency-based learning activities
- Achievement and progression data
- Skills inventory and portfolio building

#### Credentialing Systems
RCDs specify the competencies represented by:
- Digital badges and micro-credentials
- Certificates and degrees
- Professional certifications

## Competency Frameworks and Taxonomies

RCDs are often organized into structured frameworks that show relationships and hierarchies:

### Framework Types

#### Occupational Frameworks
Define competencies required for specific jobs or career paths:
- Industry-specific skill standards
- Professional role definitions
- Career progression ladders

#### Educational Frameworks
Organize academic competencies by:
- Subject area and grade level
- Degree program requirements
- Learning outcome alignment

#### Organizational Frameworks
Custom competency models for specific organizations:
- Corporate competency models
- Training program outcomes
- Performance management criteria

### Competency Relationships

RCDs can be linked to express:

- **Prerequisites**: Foundational competencies required before attempting advanced ones
- **Related Competencies**: Complementary or frequently co-occurring competencies
- **Aggregated Competencies**: Higher-level competencies composed of multiple sub-competencies
- **Alternative Competencies**: Different approaches to achieving similar outcomes

## Creating Effective RCDs

Developing high-quality RCDs requires careful attention to several best practices:

### Use Action Verbs
Begin competency statements with clear, observable action verbs from Bloom's Taxonomy or similar frameworks:

- **Knowledge**: Define, list, recall, recognize
- **Comprehension**: Explain, describe, summarize, interpret
- **Application**: Apply, demonstrate, implement, use
- **Analysis**: Analyze, compare, contrast, differentiate
- **Synthesis**: Create, design, develop, construct
- **Evaluation**: Evaluate, assess, critique, justify

### Be Specific and Measurable
Avoid vague terms like "understand" or "appreciate." Instead, specify observable evidence:

❌ Poor: "Understand database concepts"
✅ Good: "Design normalized relational database schemas for business applications"

### Include Context
Specify conditions, tools, or constraints:

"Develop REST APIs using Python and Flask framework, following OpenAPI 3.0 specification, with proper authentication and error handling"

### Define Proficiency Criteria
For each level, specify:
- Performance expectations
- Quality standards
- Independence requirements
- Complexity of tasks

### Maintain Granularity Balance
RCDs should be:
- **Not too broad**: "Software Development" is too general
- **Not too narrow**: "Use semicolons in JavaScript" is too specific
- **Just right**: "Implement error handling in asynchronous JavaScript applications"

## RCDs in Graph-Based Learning Systems

In graph database architectures, RCDs become nodes with rich relationship capabilities:

### Graph Representation

```json
{
  "id": "urn:uuid:competency-python-data-analysis",
  "type": "Competency",
  "title": "Python Data Analysis",
  "description": "Analyze datasets using Python libraries (pandas, numpy) to extract insights and create visualizations",
  "domain": "Data Science",
  "level": "Intermediate",
  "prerequisites": [
    "urn:uuid:competency-python-basics",
    "urn:uuid:competency-statistics-fundamentals"
  ],
  "enables": [
    "urn:uuid:competency-machine-learning",
    "urn:uuid:competency-data-visualization"
  ],
  "assessedBy": [
    "urn:uuid:assessment-pandas-project",
    "urn:uuid:assessment-data-analysis-quiz"
  ],
  "taughtIn": [
    "urn:uuid:course-data-science-101",
    "urn:uuid:module-python-analytics"
  ]
}
```

### Query Capabilities

Graph databases enable powerful queries:

- **Learning Path Discovery**: Find optimal sequences of competencies from current state to learning goal
- **Gap Analysis**: Identify missing competencies between a learner's profile and a target role
- **Competency Clustering**: Discover commonly co-occurring competencies for bundle recommendations
- **Impact Analysis**: Assess downstream effects of changes to competency definitions

## Integration with xAPI

RCDs work seamlessly with the Experience API (xAPI) to create rich, competency-based learning records:

### xAPI Statement Examples

#### Competency Assertion
```json
{
  "actor": {"mbox": "mailto:learner@example.com"},
  "verb": {
    "id": "http://adlnet.gov/expapi/verbs/mastered",
    "display": {"en-US": "mastered"}
  },
  "object": {
    "id": "urn:uuid:competency-python-data-analysis",
    "definition": {
      "type": "http://adlnet.gov/expapi/activities/competency",
      "name": {"en-US": "Python Data Analysis"}
    }
  },
  "result": {
    "success": true,
    "completion": true,
    "score": {"scaled": 0.85}
  },
  "context": {
    "contextActivities": {
      "category": [{
        "id": "http://id.tincanapi.com/recipe/competency-framework/0_1"
      }]
    }
  }
}
```

#### Competency Progress
```json
{
  "actor": {"mbox": "mailto:learner@example.com"},
  "verb": {
    "id": "http://adlnet.gov/expapi/verbs/progressed",
    "display": {"en-US": "progressed"}
  },
  "object": {
    "id": "urn:uuid:competency-python-data-analysis",
    "definition": {
      "type": "http://adlnet.gov/expapi/activities/competency"
    }
  },
  "result": {
    "extensions": {
      "http://id.tincanapi.com/extension/proficiency-level": "intermediate"
    }
  }
}
```

## Use Cases and Applications

### Corporate Training
Organizations use RCDs to:
- Define job role requirements and hiring criteria
- Create personalized learning paths based on skill gaps
- Track employee skill development over time
- Align training programs with business objectives
- Support succession planning and talent development

### Higher Education
Universities leverage RCDs to:
- Design competency-based degree programs
- Enable prior learning assessment and credit transfer
- Map program outcomes to industry requirements
- Provide detailed skill transcripts to graduates
- Facilitate program review and accreditation

### Professional Certification
Certification bodies use RCDs to:
- Define certification requirements clearly
- Create valid and reliable assessments
- Issue verifiable digital credentials
- Maintain certification through continuing education
- Enable stackable credentials and learning pathways

### Government and Military
Public sector applications include:
- Workforce development programs
- Job training for transitioning service members
- Civil service competency frameworks
- Inter-agency mobility and skill portability

## Tools and Technologies

Several platforms and standards support RCD creation and management:

### Competency Authoring Tools
- **CASE Network**: Collaborative competency framework development
- **Achievement Standards Network (ASN)**: Repository of educational standards
- **Open Badges**: Competency-based digital credentialing
- **IMS Global standards**: CASE, Open Badges, Comprehensive Learner Record

### Graph Database Platforms
- **Neo4j**: Property graph database for competency networks
- **Amazon Neptune**: Managed graph database service
- **ArangoDB**: Multi-model database with graph capabilities
- **TigerGraph**: Enterprise-scale graph analytics

### Learning Platform Integration
- **Competency-Based Education (CBE) systems**: Specialized LMS platforms
- **Learning Record Store (LRS)**: xAPI-compliant data stores
- **Talent Management Systems**: HR platforms with competency tracking
- **Portfolio Systems**: Evidence-based competency demonstration

## Challenges and Considerations

### Governance and Maintenance
- **Version Control**: Managing updates while maintaining backward compatibility
- **Authority**: Determining who can create and modify competencies
- **Deprecation**: Handling obsolete competencies gracefully
- **Quality Assurance**: Ensuring consistency and accuracy across large frameworks

### Adoption Barriers
- **Complexity**: RCD standards can seem overwhelming to practitioners
- **Legacy Systems**: Integrating with existing non-standard approaches
- **Cultural Change**: Shifting from course-based to competency-based thinking
- **Resource Requirements**: Initial investment in framework development

### Technical Challenges
- **Identifier Persistence**: Ensuring URIs remain resolvable over time
- **Semantic Precision**: Avoiding ambiguity in competency descriptions
- **Granularity Decisions**: Finding the right level of detail
- **Localization**: Translating and culturally adapting competencies

## Future Directions

The evolution of RCDs is being shaped by several emerging trends:

### Artificial Intelligence
- **Automated Competency Extraction**: Using NLP to derive competencies from job postings and course descriptions
- **Intelligent Matching**: AI-driven recommendation of learning resources to competency gaps
- **Dynamic Frameworks**: Self-organizing competency structures based on learning data
- **Skill Prediction**: Forecasting future competency requirements based on industry trends

### Blockchain and Decentralization
- **Verifiable Credentials**: Cryptographically secured competency assertions
- **Self-Sovereign Identity**: Learner-controlled competency portfolios
- **Distributed Registries**: Decentralized competency definition and discovery

### Micro-Credentials and Modularity
- **Granular Credentials**: Competency-specific badges and certificates
- **Stackable Pathways**: Modular learning that aggregates to larger credentials
- **Just-in-Time Learning**: Targeted competency development for immediate needs

### Labor Market Integration
- **Skills-Based Hiring**: Direct matching of RCD profiles to job requirements
- **Real-Time Skill Demand**: Labor market analytics informing competency frameworks
- **Career Guidance**: Personalized pathways based on competency trajectories

## Conclusion

Reusable Competency Definitions represent a fundamental shift toward more precise, portable, and actionable descriptions of learning outcomes. By providing a standardized, machine-readable format for competencies, RCDs enable interoperability across learning systems, support personalized learning pathways, and create transparent connections between education and workforce needs.

As part of the Total Learning Architecture, RCDs serve as the semantic foundation that links learning content, assessments, credentials, and career opportunities. Their integration with graph databases and xAPI creates powerful capabilities for competency tracking, gap analysis, and adaptive learning.

While challenges remain in governance, adoption, and technical implementation, the benefits of competency-based approaches are driving continued investment and innovation. As AI, blockchain, and other emerging technologies mature, RCDs will play an increasingly central role in creating flexible, lifelong learning ecosystems that respond to the dynamic needs of learners and employers alike.

## References

- IEEE 1484.20.1-2007: Standard for Learning Technology - Data Model for Reusable Competency Definitions
- [IEEE Total Learning Architecture](tla.md)
- [Experience API (xAPI)](xapi.md)
- [Learning Record Store (LRS)](lrs.md)
- IMS Global Competency and Academic Standards Exchange (CASE)
- HR Open Standards for Competency Data
- O*NET Content Model and Occupational Standards

