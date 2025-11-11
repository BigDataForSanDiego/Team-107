**General Endpoints**  
*Log in to account*  
**POST** /api/login

| {   "username": "JohnDoe",   "password": "123password123" } | {   "token": "client1234token" } |
| :---- | :---- |

*Log out of account*  
**POST** /api/logout

| AUTH: client1234token  |  |
| :---- | :---- |

**Client Endpoints**  
*Register Client account*  
**POST** /api/clients

| {   "username": "JohnDoe",   "password": "123password123" } | {   "clientId": 1234 } |
| :---- | :---- |

*Delete Client account*  
**DELETE** /api/clients/me

| AUTH: client1234token  |  |
| :---- | :---- |

*Get Client's dashboard*  
**GET** /api/clients/me

| AUTH: client1234token | {   ... } |
| :---- | :---- |

*Get all Client's surveys*  
**GET** /api/surveys

| AUTH: client1234token | {   "surveys": [    surveyId1,    surveyId2   ] } |
| :---- | :---- |

*Get survey*  
**GET** /api/surveys/{surveyId}

| AUTH: client1234token | {   "submitted": false,   "questions": [ "Question1", "Question2", "Question3"	    ] } |
| :---- | :---- |

*Set responses for a survey*  
**POST** /api/surveys/{surveyId}/responses

| AUTH: client1234token {   "responses": [ "Answer1", "Answer2", 1234, "Answer4"    ] } |  |
| :---- | :---- |

*Contact Coordinator*  
**GET** /api/coordinators/{coordinatorId}/contact

| AUTH: client1234token  | {   "contact": "123-456-7890" } |
| :---- | :---- |

**Coordinator Endpoints**  
*Register Coordinator account*  
**POST** /api/coordinators

| {   "username": "JaneDoe"   "password": "456password456" } | {   "coordinatorId": 5678 } |
| :---- | :---- |

*Delete Coordinator account*  
**DELETE** /api/coordinators/me

| AUTH: coordinator5678token  |  |
| :---- | :---- |

*Manually assign extra survey*  
**POST** /api/clients/{clientId}/surveys

| AUTH: coordinator5678token {   "clientId": 1234,   "surveyId": 5 }  |  |
| :---- | :---- |

*View all Clients*  
**GET** /api/clients

| AUTH: coordinator5678token  | {   "clients": [ 	   "clientId1", 	   "clientId2        ] } |
| :---- | :---- |

*View Client profile*  
**GET** /api/clients/{clientId}

| AUTH: coordinator5678token  | {   ... } |
| :---- | :---- |

*View Client survey list*  
**GET** /api/clients/{clientId}/surveys

| AUTH: coordinator5678token | {   "surveys": [    surveyId1,    surveyId2   ] } |
| :---- | :---- |

*View Client survey*  
**GET** /api/clients/{clientId}/surveys/{surveyId}

| AUTH: coordinator5678token | {   "submitted": true,   "questions": [ "Question1", "Question2", "Question3"	    ]   "responses": [ "Answer1", "Answer2", 1234, "Answer4"    ] } |
| :---- | :---- |

*Get Client Contact*  
**GET** /api/clients/{clientId}/contact

| AUTH: coordinator5678token  | {   "contact": "123-456-7890" } |
| :---- | :---- |

*Create Survey*  
**POST** /api/surveys/

| AUTH: coordinator5678token {   "questions": [     "Question1",     "Question2",     "Question3"	    ] }  | {   Survey type (?) } |
| :---- | :---- |

