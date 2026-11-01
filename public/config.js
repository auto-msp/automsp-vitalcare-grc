window.WORKSPACE_CONFIG = {
  "slug": "vitalcare",
  "name": "VitalCare",
  "industry": "Healthcare",
  "framework": "HIPAA / GDPR",
  "accent": "#008b82",
  "accentDark": "#006e68",
  "tagline": "Care starts with trust.",
  "module": "Facility access",
  "moduleKey": "access",
  "moduleIntro": "Review access safeguards at facilities and restricted areas. Use synthetic records only; do not enter patient information.",
  "recordName": "Access review",
  "fields": [
    {
      "key": "name",
      "label": "Facility / restricted area",
      "required": true
    },
    {
      "key": "method",
      "label": "Access method",
      "options": [
        "Shared physical key",
        "Individual keycard",
        "Biometric",
        "Other"
      ]
    },
    {
      "key": "staff",
      "label": "Authorized staff count",
      "type": "number",
      "min": 0,
      "max": 10000
    },
    {
      "key": "logs",
      "label": "Access logs",
      "options": [
        "Not reviewed",
        "Available",
        "Unavailable"
      ]
    },
    {
      "key": "status",
      "label": "Review status",
      "options": [
        "Needs review",
        "Action required",
        "Verified"
      ]
    },
    {
      "key": "owner",
      "label": "Facility owner",
      "required": true
    },
    {
      "key": "review",
      "label": "Review date",
      "type": "date"
    }
  ],
  "records": [
    {
      "id": "FAC-001",
      "name": "Palmira · Server room",
      "method": "Shared physical key",
      "staff": 5,
      "logs": "Unavailable",
      "status": "Action required",
      "owner": "Facilities Manager",
      "review": "2026-01-29",
      "origin": "Repository scenario"
    },
    {
      "id": "FAC-002",
      "name": "Illustrative · Records archive",
      "method": "Individual keycard",
      "staff": 3,
      "logs": "Not reviewed",
      "status": "Needs review",
      "owner": "Privacy Operations",
      "review": "",
      "origin": "Illustrative sample"
    }
  ],
  "risks": [
    {
      "title": "Shared server-room key without entry records",
      "category": "Physical security",
      "likelihood": 4,
      "impact": 5,
      "owner": "Facilities Manager",
      "status": "Open",
      "due": "2026-11-15",
      "description": "The source audit log describes five staff sharing a physical key at the Palmira branch with no keycard or biometric entry logs. Review access controls and retain a remediation record.",
      "origin": "Repository scenario"
    },
    {
      "title": "Legacy system migration safeguards need review",
      "category": "Data protection",
      "likelihood": 3,
      "impact": 4,
      "owner": "Clinical IT",
      "status": "In progress",
      "due": "2026-11-24",
      "description": "Illustrative risk based on the source scenario’s migration challenge. No real patient data has been assessed.",
      "origin": "Illustrative sample"
    },
    {
      "title": "Vendor privacy review outstanding",
      "category": "Third parties",
      "likelihood": 2,
      "impact": 4,
      "owner": "Privacy Operations",
      "status": "Open",
      "due": "2026-12-01",
      "description": "Illustrative review task for a healthcare service provider.",
      "origin": "Illustrative sample"
    }
  ],
  "controls": [
    [
      "VC-01",
      "Restricted-area access review",
      "Physical security",
      "Facilities Manager",
      "Gap"
    ],
    [
      "VC-02",
      "Workforce access approvals",
      "Identity & access",
      "Clinical IT",
      "Not assessed"
    ],
    [
      "VC-03",
      "Migration data handling plan",
      "Data protection",
      "Clinical IT",
      "In review"
    ],
    [
      "VC-04",
      "Incident escalation procedure",
      "Incident response",
      "Security Operations",
      "Not assessed"
    ],
    [
      "VC-05",
      "Service provider privacy review",
      "Third parties",
      "Privacy Operations",
      "Not assessed"
    ],
    [
      "VC-06",
      "Recovery exercise record",
      "Resilience",
      "Operations",
      "Not assessed"
    ]
  ],
  "focusTitle": "Safeguard every restricted space",
  "focusText": "Begin with the Palmira server-room scenario: shared keys, five authorized staff, and missing entry logs. Turn observations into a verified action plan.",
  "focusAction": "Review facility access",
  "frameworkNote": "Control themes are audit planning aids, not legal advice or a HIPAA/GDPR compliance determination."
};
