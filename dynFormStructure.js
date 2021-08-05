// https://www.aaron-powell.com/posts/2020-12-10-dynamic-forms-with-react-hooks/

export const dynFormStructure = [
  {
    "section": 1,
    "sectionname": "Personal Details",
    "fields": [{
      "caption": "Gender",
      "name": "gender",
      "control": "radiobutton",
      "mandatorytype": 1,
      "datatypevalidation": "",
      "section": 1,
      "sectionname": "Personal Details",
      "value": [
        {
          "code": "M",
          "value": "Male"
        },
        {
          "code": "F",
          "value": "Female"
        },
        {
          "code": "O",
          "value": "Other"
        }
      ],
      "order": 5,
      "validation": {
        required: "Gender input is required."
      }
    },
    {
      "caption": "Name",
      "name": "name",
      "control": "textbox",
      "mandatorytype": 1,
      "datatypevalidation": "",
      "section": 1,
      "sectionname": "Personal Details",
      "value": "",
      "order": 1,
      "validation": {
        required: "Textbox input is required.",
        pattern: {
          value: /^[A-Za-z]+$/i,
          message: "texboxs input is text only."
        }
      }
    },
    {
      "caption": "Mobile No",
      "control": "textbox",
      "name": "mobile",
      "mandatorytype": 1,
      "datatypevalidation": "",
      "section": 1,
      "sectionname": "Personal Details",
      "value": "",
      "order": 2,
      "validation": {
        required: "Phone input is required.",
        pattern: {
          value: /\d+/,
          message: "This input is number only."
        },
        minLength: {
          value: 11,
          message: "This input must exceed 10 characters"
        }
      }
    },
    ]
  },
  {
    "section": 2,
    "sectionname": "Employment Details",
    "fields": [ {
    "caption": "State",
    "control": "dropdown",
    "name": "state",
    "mandatorytype": 1,
    "datatypevalidation": "",
    "section": 1,
    "sectionname": "Personal Details",
    "value": [
      {
        "code": "KN",
        "value": "Karnataka"
      },
      {
        "code": "TN",
        "value": "Tamil Nadu"
      },
      {
        "code": "AP",
        "value": "Andhra Pradesh"
      }
    ],
    "order": 3,
  },
  {
    "caption": "City",
    "control": "dropdown",
    "name": "city",
    "mandatorytype": 1,
    "datatypevalidation": "",
    "section": 1,
    "sectionname": "Personal Details",
    "value": [
      {
        "code": "BNG",
        "value": "Bangalore"
      },
      {
        "code": "MYS",
        "value": "Mysore"
      },
      {
        "code": "HBL",
        "value": "Hubli"
      }
    ],
    "order": 4,
    "validation": {
      required: "Radio city input is required."
    }
  },

  {
    "caption": "Income",
    "control": "checkbox",
    "name": "income",
    "mandatorytype": 1,
    "datatypevalidation": "",
    "section": 1,
    "sectionname": "Personal Details",
    "value": [
      {
        "code": "S",
        "value": "Salary"
      },
      {
        "code": "B",
        "value": "Business"
      },
      {
        "code": "O",
        "value": "Other"
      }
    ],
    "order": 6,
    "validation": {
      required: "Checkbox income is required."
    }
  }]
},
]