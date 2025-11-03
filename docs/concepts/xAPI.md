# The IEEE xAPI Standard for Student Tracking in LMS Systems 

xAPI (Experience API), also known as Tin Can API, is a learning technology standard that allows for comprehensive tracking of learning experiences across multiple platforms and environments, extending beyond traditional LMS boundaries.

## What is xAPI?

xAPI is an advanced learning technology standard that enables the collection and exchange of learning data from various sources, beyond the traditional LMS environment. It was developed as a significant improvement over the older [SCORM](../glossary.md#scorm) standard.

## How xAPI Works

The xAPI defines learning activities as statements. These contain a subject, object, and verb. When an employee does a defined action in an organization's learning portal that enables the xAPI, which validates the xAPI learning experience.

When learners complete an activity with xAPI enabled, they send a statement to a learning record store (LRS). The LRS receives, stores, and accesses learning records (also called activity statements) across many different platforms (including mobile apps).

## Key Benefits of xAPI

1. **Comprehensive Tracking**: A xAPI enabled LMS not only provides an organization with insight into what goes inside a Learning Management System, but it can also track employee activity and record valuable data regarding an employee's performance.

2. **Beyond Formal Learning**: Formal learning experiences account for only about 10% of the ways students actually learn. The remainder occurs through interactions with mentors and peers (about 20%) and experiential learning (about 70%). xAPI allows businesses to track as much as 100% of learning experiences.

3. **Learning Analytics**: xAPI allows for deeper tracking of learning. This application is able to track the information learners seek whether that be through the elearning content provided by a company or outside information on the internet.

4. **Mobile and Offline Learning**: Unlike SCORM, which requires an LMS, xAPI enables tracking outside traditional eLearning courses, including real-world experiences.

## Relationship with SCORM

xAPI is backward-compatible with SCORM (SCORM-compliant content can be used with an xAPI learning management system), so xAPI is often viewed as the new de facto standard. However, it significantly expands tracking capabilities beyond what SCORM could do.

## Tracking MicroSim Usage with xAPI

MicroSims are small-scale, embedded interactive simulations designed to illustrate concepts interactively within educational content, as defined in your glossary. Since they run in web browsers using p5.js, they can be integrated with xAPI to track student interactions and learning experiences.

### Basic Implementation Approach

To track MicroSim usage with xAPI, you would need to:

1.**Set up an LRS (Learning Record Store)** - This is where all the xAPI statements will be stored and processed.
2. **Integrate xAPI into your MicroSims** - Add JavaScript code to your p5.js simulations that generates and sends xAPI statements based on student interactions.
3. **Define relevant activities and verbs** - Determine what student actions within the simulation are meaningful to track.

### Implementation Steps

### 1. Include the xAPI JavaScript Library

First, you would need to include the xAPI library in your MicroSim HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/xapi-js@latest/dist/xapi.min.js"></script>
```

### 2. Configure xAPI Connection

Set up the connection to your LRS within your MicroSim JavaScript:

```javascript
// Set up xAPI connection to your LRS 
const xapi =newXAPIWrapper({
    endpoint:"https://your-lrs.example.com/data/xAPI/",
    auth:"Basic "+btoa("username:password"),
    actor:{name:"Student Name",
    mbox:"mailto:student@example.com"}});
```

### 3. Track Student Interactions

Add tracking code at key points in your p5.js simulation:

```javascript
function simulationStarted() {
    // Send xAPI statement when student starts the simulation
    const statement = {
        verb: {
            id:"http://adlnet.gov/expapi/verbs/launched",
            display:{"en-US":"launched"}
        },
        object: {
            id:"http://example.com/microsims/physics/pendulum",
            definition: {
                name:{"en-US":"Pendulum MicroSim"},
                type:"http://adlnet.gov/expapi/activities/simulation"
            }
        }
    };  
    xapi.sendStatement(statement);
}

function parameterChanged(paramName, value) {
    // Send xAPI statement when student changes a simulation parameter
    const statement = {
        verb: { 
            id:"http://adlnet.gov/expapi/verbs/interacted",
            display: { "en-US": "interacted" }
        },
        object:{
            id:"http://example.com/microsims/physics/pendulum/parameters/" + paramName,
            definition: {
                name: { "en-US":"Pendulum "+ paramName +" Parameter"},
                type:"http://adlnet.gov/expapi/activities/simulation"
            }
        },
        result: {
            extensions: {"http://example.com/xapi/extensions/parameter-value": value}
        }
    };
    xapi.sendStatement(statement);
}
```

## Types of Student Interactions to Track

With MicroSims, you might want to track:

### 1. Engagement metrics

- When students start/stop simulations
- Total time spent on each simulation
- Number of times a simulation is used

### 2. Interaction details

- Parameter adjustments made (e.g., changing variables in a physics simulation)
- Specific actions taken (e.g., pressing buttons, dragging objects)
-  Completion of specific simulation challenges

### 3.  **Learning outcomes**

- Correct predictions or hypotheses
- Achievement of simulation goals
- Patterns of exploration that indicate understanding

## Data Analysis Possibilities

Once MicroSim interaction data is captured in your LRS, you can:

1.  Identify which simulations are most engaging for students
2.  Analyze common misconceptions based on parameter adjustments
3.  Determine optimal pathways through simulation-based learning
4.  Correlate simulation usage patterns with assessment outcomes
5.  Create personalized learning recommendations based on simulation interaction history

# Integration with Larger Learning Ecosystem

The true power of xAPI tracking for MicroSims emerges when combined with other learning activity data. For example, you could correlate:

- MicroSim exploration patterns with subsequent quiz performance
- Time spent on specific simulations with mastery of related concepts
- Sequences of simulation usage that lead to optimal learning outcomes

This approach allows for a comprehensive view of how interactive simulations contribute to the overall learning experience within your intelligent textbook platform.


## Sample JSON xAPI for Slider

```json
{ 
    "id": "07086244-26b8-4602-8a4a-845154de6ef8", 
    "timestamp": "2025-08-15T15:50:53.909Z", 
    "actor": { 
        "name": "Demo Learner", 
        "mbox": "mailto:learner@example.com", 
        "objectType": "Agent" 
        }, 
    "verb": { 
        "id": "http://adlnet.gov/expapi/verbs/interacted",
         "display": { "en-US": "interacted" } 
         }, 
    "object": { 
        "id": "http://example.com/microsims/circle-size", 
        "definition": {
             "name": { "en-US": "Circle Size MicroSim" }, 
             "description": { "en-US": "Adjusted circle size from 95px to 96px" }, 
             "type": "http://adlnet.gov/expapi/activities/simulation" 
             }, 
        "objectType": "Activity" 
        }, 
    "context": { 
        "platform": "MicroSim Demo", 
        "language": "en-US", 
        "extensions": { "http://example.com/session": "session_1755273047962_x04l0kdi1" } 
        }, 
    "result": { 
        "score": { "raw": 96, "min": 10, "max": 200 }, 
        "extensions": { 
            "http://example.com/previous_value": 95, 
            "http://example.com/new_value": 96, 
            "http://example.com/change": 1 
        } 
    } 
}
```
## References

- [xAPI Enabled LMS: Tracking eLearning Experiences](https://elearningindustry.com/xapi-enabled-lms-tracking-elearning-experiences) - eLearning Industry (2021, May 12)
- [Why Your LMS Needs xAPI Support: A Guide for eLearning Professionals](https://www.lmsportals.com/post/why-your-lms-needs-xapi-support-a-guide-for-elearning-professionals) - LMS Portals (2025, February 5)
- [Track Your Learning Experiences 100% with xAPI Enabled LMS](https://blog.commlabindia.com/elearning-development/xapi-enabled-lms) - CommLab India (2016, July 25)
- [xAPI: How To Use In eLearning And Major Benefits](https://www.edgepointlearning.com/blog/xapi-in-elearning/) - EdgePoint Learning
- [Understanding LMS standards: SCORM, xAPI, AICC and cmi5](https://bonlinelearning.com/understanding-lms-standards-scorm-xapi-aicc-and-cmi5/) - B Online Learning (2025, February 11)
- [Understanding xAPI: Practical Guide to Uses and Benefits](https://www.openlms.net/blog/products/understanding-xapi-practical-guide-to-uses-and-benefits/) - Open LMS
- [What is XAPI And How Should You Use It?](https://knowledgeanywhere.com/articles/what-is-xapi-and-how-should-you-use-it/) - Knowledge Anywhere
- [Do I still need an LMS?](https://xapi.com/do-i-still-need-lms/) - Rustici Software (2018, December 3)
- [xAPI: An All-in-One Resource to Understanding xAPI](https://elmlearning.com/hub/technology-tools/xapi/) - ELM Learning (2024, June 5)