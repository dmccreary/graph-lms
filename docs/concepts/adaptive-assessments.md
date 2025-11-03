# Introduction to Adaptive Assessments

## What is an Adaptive Assessment?

An **adaptive assessment** is a test that changes based on how students respond. Instead of giving every student the same questions in the same order, adaptive assessments adjust to each learner's needs in real-time.

Think of it like a conversation with a student. If they answer correctly, you might ask a more challenging follow-up question. If they struggle, you might offer a hint or ask a simpler question to build their confidence. Adaptive assessments automate this responsive teaching approach.

## Why Adaptive Assessments Matter

Traditional assessments treat all students the same way. Adaptive assessments recognize that:

- **Students learn at different paces** - Some need more support, others need greater challenges
- **Immediate feedback helps learning** - Students benefit from hints and guidance during the assessment
- **Efficient testing saves time** - Students don't waste time on questions that are too easy or impossibly hard
- **Reduced test anxiety** - Students work at their level rather than feeling overwhelmed

## Types of Adaptive Assessments

### 1. Progressive Hints (Within a Question)

The assessment provides scaffolding within a single question based on student responses.

**Example: Math Problem**

A student attempts to solve: "What is 15% of 80?"

- **First attempt:** Student enters wrong answer
- **System response:** "Remember, 'of' means multiply. Try converting the percentage to a decimal first."
- **Second attempt:** Student tries again with the hint
- **System response:** If still incorrect: "Start by converting 15% to 0.15. What is 0.15 × 80?"

This is called an **adaptive item** - a single question that provides progressive support.

### 2. Branching Paths (Between Questions)

The assessment routes students to different questions based on their performance.

**Example: Reading Comprehension**

- **Question 1:** Basic comprehension question
  - **If correct:** Student proceeds to inference questions
  - **If incorrect:** Student gets vocabulary support questions first

- **Question 2a:** (Advanced path) Asks students to analyze author's purpose
- **Question 2b:** (Support path) Reviews key vocabulary, then returns to comprehension

This is called **test-level branching** - the assessment chooses which questions to ask.

## Benefits for Teachers

### Better Diagnostic Information

Adaptive assessments reveal:

- **Where students struggle** - You see not just wrong answers, but what hints they needed
- **How students think** - The path they took shows their problem-solving approach
- **Prerequisite gaps** - Branching paths identify foundational skills that need review

### Differentiation at Scale

You can serve diverse learners without creating multiple versions:

- Advanced students stay engaged with challenging problems
- Struggling students receive support without feeling singled out
- English Language Learners can access vocabulary help when needed

### Reduced Grading Time

Many adaptive assessments can provide:

- Automatic scoring with detailed feedback
- Partial credit for showing work across attempts
- Reports showing which students need intervention

## Real-World Applications

### Formative Assessment

Use adaptive items during instruction:

- **Check for understanding** with questions that provide immediate hints
- **Build confidence** by guiding students to correct answers
- **Identify misconceptions** by tracking which hints students need

### Summative Assessment

Use branching tests for final evaluations:

- **Efficient testing** - Students only see questions at their level
- **Reduce guessing** - Harder to game the system when questions adapt
- **Fair assessment** - Students demonstrate mastery at their current level

### Practice and Review

Create adaptive practice problems:

- **Homework support** - Built-in tutoring through progressive hints
- **Test preparation** - Students work through problems with scaffolding
- **Self-paced learning** - Students can retry with different hints

## Getting Started

### Start Simple

Begin with a single adaptive item:

1. Choose a problem where students commonly need support
2. Identify 2-3 hints that would help struggling students
3. Create feedback for correct answers to extend learning

### Plan Your Paths

For branching assessments:

1. Identify foundational concepts that students must master first
2. Create parallel questions at different difficulty levels
3. Map decision points: "If correct, then..." and "If incorrect, then..."

### Use Technology Standards

Look for assessment tools that support:

- **QTI (Question and Test Interoperability)** - Industry standard for adaptive assessments
- **Export capabilities** - Ensure you own your assessment content
- **Learning management integration** - Works with your existing tools

## Common Questions

### "Won't students just game the system by answering wrong to get hints?"

This is actually a feature, not a bug! If a student needs hints to learn, they should get them. However:

- You can score by number of attempts (first try = full credit, with hints = partial credit)
- The goal of formative assessment is learning, not just correct answers
- Adaptive systems track all student actions for teacher review

### "How do I ensure all students cover the same material?"

You don't need to! The goal is mastery, not uniformity:

- Define learning objectives, not question sequences
- Students reach the same goals through different paths
- Use summative assessments to verify all students meet standards

### "Is this more work to create?"

Initially, yes. But:

- One adaptive assessment can replace multiple versions
- Reusable components save time in the long run
- Better data reduces time spent diagnosing problems later
- Modern tools make creation easier than building from scratch

## Next Steps

Ready to explore adaptive assessments further? Consider:

- **Try an example** - Experience an adaptive assessment as a learner
- **Review QTI standards** - Learn how adaptive content is structured
- **Start small** - Convert one existing assessment to include hints
- **Collaborate** - Share adaptive items with colleagues

Remember: The best adaptive assessment is one that helps your students learn. Start with that goal, and let the technology support your teaching expertise.

---

**Resources**

- [QTI Overview](../index.md) - Technical standards for adaptive assessments
- [Creating Adaptive Items Tutorial](adaptive-items-tutorial.md) - Step-by-step guide
- [Branching Logic Examples](branching-examples.md) - Real assessment paths
- [Assessment Design Principles](design-principles.md) - Best practices for adaptive testing

## How QTI Manages Adaptive Responses

QTI handles adaptive responses in two main ways: **adaptive items** (within a single question) and **test-level branching** (routing between different questions). Here's how each works:

## 1. Adaptive Items (Within-Item Branching)

Adaptive items allow an item to be scored adaptively over a sequence of attempts, enabling the candidate to alter their answer following feedback or to be posed additional questions based on their current answer.

**How it works:**
- The `adaptive` attribute is set to `true` on the `qti-assessment-item` element
- For adaptive items, outcome variables retain their values across multiple attempts and are only updated by subsequent response processing, whereas for non-adaptive items each attempt is independent
- Feedback blocks (`qti-feedback-block`) control what content is shown based on outcome variable values
- The `qti-end-attempt-interaction` allows candidates to submit attempts and see feedback

**Example structure:**
```xml
<qti-assessment-item adaptive="true" ...>
    <qti-outcome-declaration identifier="FEEDBACK" .../>
    <qti-outcome-declaration identifier="SCORE" .../>
    
    <qti-item-body>
        <p>Initial question...</p>
        <qti-choice-interaction .../>
        
        <!-- Feedback shown conditionally -->
        <qti-feedback-block identifier="HINT1" 
            outcome-identifier="FEEDBACK" 
            show-hide="show">
            <p>Here's a hint...</p>
            <!-- Can contain additional interactions! -->
            <qti-choice-interaction .../>
        </qti-feedback-block>
    </qti-item-body>
    
    <qti-response-processing>
        <!-- Sets FEEDBACK variable based on response -->
    </qti-response-processing>
</qti-assessment-item>
```

## 2. Test-Level Branching (Between-Item Routing)

QTI supports limited adaptivity through the use of pre-conditions and branching, allowing items in the predetermined sequence to be conditionally skipped or branched over during delivery based on context and prior responses.

**Branch Rules (`qti-branch-rule`):**
- Defined at the section or test level
- The branchRule element contains a rule evaluated to determine which item or section should be presented next based on conditions
- Can jump to specific items based on outcome variables from previous items

**Pre-Conditions (`qti-pre-condition`):**
- The preCondition element sets the conditions that need to be met for an assessmentItem or assessmentSection to be displayed
- In nonlinear mode, pre-conditions are ignored

**Example test structure with branching:**
```xml
<qti-assessment-test>
    <qti-test-part navigation-mode="linear">
        <qti-assessment-section>
            <qti-assessment-item-ref identifier="Q1" href="question1.xml"/>
            
            <!-- Branch rule after Q1 -->
            <qti-branch-rule target="Q3">
                <qti-base-value base-type="boolean">true</qti-base-value>
                <qti-variable identifier="Q1.SCORE"/>
                <qti-base-value base-type="float">1.0</qti-base-value>
                <qti-match/>
            </qti-branch-rule>
            
            <qti-assessment-item-ref identifier="Q2" href="question2.xml">
                <!-- Pre-condition: only show if Q1 score < 1.0 -->
                <qti-pre-condition>
                    <qti-lt>
                        <qti-variable identifier="Q1.SCORE"/>
                        <qti-base-value base-type="float">1.0</qti-base-value>
                    </qti-lt>
                </qti-pre-condition>
            </qti-assessment-item-ref>
            
            <qti-assessment-item-ref identifier="Q3" href="question3.xml"/>
        </qti-assessment-section>
    </qti-test-part>
</qti-assessment-test>
```

## 3. Modern Adaptive Testing (QTI 3.0+)

QTI 3.0 introduces the qti-adaptive-selection element which delegates item selection and ordering to external CAT (Computer Adaptive Testing) engines during delivery, rather than using static selection with preconditions and branch rules.

## Key Differences

| Feature | Adaptive Items | Test Branching |
|---------|---------------|----------------|
| Scope | Within one item | Between items |
| Storage | Outcome variables in item | Test-level outcome processing |
| Use case | Progressive hints, multi-step problems | Remediation paths, difficulty adjustment |
| Linearity | Multiple attempts on same item | Different items in sequence |

The correct/incorrect responses themselves are stored in **response variables**, while the branching logic uses **outcome variables** (like SCORE or custom feedback identifiers) to determine the next step.