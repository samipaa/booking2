# Note:
## The supplied TheBookingSystemVer2.zip was used
---
Functionality seems OK.

This application not having a consent system should be fine, because the data that's collected is the bare necessary for the booking system. The data is not marketed or shared or used for analytics. It's only used for the functionality of the service, which is making resources and reservations and logging in. I think the legal basis for processing should be also told in the privacy note. If more personal info was used or the data was processed in a non-essential way, then consent would be necessary and the privacy note should be completely rewritten. The terms of service page would also need to be refreshed.

I chose Spotify. Consent is required on Spotify, because of multiple things they do. Among other things, they send emails that are personalized and may contain marketing. GDPR requires consent for direct marketing. Collected data is used for marketing, advertising and analytics. The user experience is also personalized with the collected data. GDPR requires consent for this. They may also give out data to comply with legal obligations. Spotify allows users to choose what they consent to, which is also what GDPR wants. Users can change their consent preferences later. Pseudonymized data is given out to third parties due to contracts.

---
ZAP by [Checkmarx](https://checkmarx.com/).


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 0 |
| Low | 0 |
| Informational | 2 |




## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- |
| Authentication Request Identified | Informational | 1 |
| Information Disclosure - Suspicious Comments | Informational | 3 |




## Alert Detail



### [ Authentication Request Identified ](https://www.zaproxy.org/docs/alerts/10111/)



##### Informational (High)

### Description

The given request has been identified as an authentication request. The 'Other Info' field contains a set of key=value lines which identify any relevant fields. If the request is in a context which has an Authentication Method set to "Auto-Detect" then this rule will change the authentication to match the request identified.

* URL: http://localhost:8000/login
  * Method: `POST`
  * Parameter: `username`
  * Attack: ``
  * Evidence: `password`
  * Other Info: `userParam=username
userValue=foo-bar@example.com
passwordParam=password
referer=http://localhost:8000/login`

Instances: 1

### Solution

This is an informational alert rather than a vulnerability and so there is nothing to fix.

### Reference


* [ https://www.zaproxy.org/docs/desktop/addons/authentication-helper/auth-req-id/ ](https://www.zaproxy.org/docs/desktop/addons/authentication-helper/auth-req-id/)



#### Source ID: 3

### [ Information Disclosure - Suspicious Comments ](https://www.zaproxy.org/docs/alerts/10027/)



##### Informational (Low)

### Description

The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.

* URL: http://localhost:8000/static/account.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `from`
  * Other Info: `The following pattern was used: \bFROM\b and was detected in the element starting with: "        // Fetch account information from the server", see evidence field for the suspicious comment/snippet.`
* URL: http://localhost:8000/static/account.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `later`
  * Other Info: `The following pattern was used: \bLATER\b and was detected in the element starting with: "        //alert("Failed to load account information. Please try again later.");", see evidence field for the suspicious comment/snippet.`
* URL: http://localhost:8000/static/account.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `username`
  * Other Info: `The following pattern was used: \bUSERNAME\b and was detected in the element starting with: "        document.getElementById("username").textContent = accountData.username;", see evidence field for the suspicious comment/snippet.`

Instances: 3

### Solution

Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.

### Reference



#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3


