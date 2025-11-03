# Assessment Standards

## Question and Test Interoperability

Question and Test Interoperability (QTI) is the most widely adopted standard, maintained by IMS Global Learning Consortium. QTI is an XML-based format that supports:

- Multiple question types (multiple choice, true/false, essay, matching, etc.)
- Rich media content including the inclusion of math formulas in questions
- Adaptive assessments - the correct or incorrect response of one question can route the student to another question
- Metadata and item banking
- Currently at version 2.2 (with 3.0 in development)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 
        https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
    identifier="choice_001"
    time-dependent="false"
    xml:lang="en">
    
    <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="identifier">
        <qti-correct-response>
            <qti-value>A</qti-value>
        </qti-correct-response>
    </qti-response-declaration>
    
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
        <qti-default-value>
            <qti-value>0</qti-value>
        </qti-default-value>
    </qti-outcome-declaration>
    
    <qti-item-body>
        <p>What is the capital of France?</p>
        <qti-choice-interaction response-identifier="RESPONSE" shuffle="false" max-choices="1">
            <qti-simple-choice identifier="A">Paris</qti-simple-choice>
            <qti-simple-choice identifier="B">London</qti-simple-choice>
            <qti-simple-choice identifier="C">Berlin</qti-simple-choice>
            <qti-simple-choice identifier="D">Madrid</qti-simple-choice>
        </qti-choice-interaction>
    </qti-item-body>
    
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
</qti-assessment-item>
```