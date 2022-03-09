---
id: guardian-flow
title: Guardian Flow
description: Description of the flow of guardian information in DEPA
---

Guardian flow details out how the guardianship is established and how Guardians can manage the consent lifecycle of the Data Principal

**Establishment of Guardianship**

1.  User registers itself as the guardian of another user on the DPs system. This is done by legal means or the user will appoint the guardian for himself. The process is specific to each DP and governed by them.
2.  As a part of the guardian registration, DP will allocate the user-id to the guardian and maintain a relationship mapping with the Data principal.
3.  Guardian using his own cm-id will initiate an account linking process. As a part of the linking process Guardian will be issued a Linking TOKEN and a Guardian TOKEN.
4.  Now the guardian can manage the existing consents and give new consents.

**Management of existing consents by the Guardian**

To Manage the existing consents lifecycle guardian’s CM needs to fetch the list of consents from Data Principals CM. To achieve this guardian’s CM will play the role of a DC as well as a CM.

- Guardian’s CM provider as a DC will raise the request to fetch the existing consents which are to be managed by the Guardian.
- Guardian’s CM provider as CM will collect the Guardian’s consent to fetch the consents. The consent artifact created by the CM here will have the Guardian TOKEN encapsulated for Data Principals CM to verify the relationship. Consent Artifact will also have the CM of Data Principal being mapped as DP to provide the consents.

**Honoring of Consent lifecycle events by the DC**

User cases to honor the consent lifecycle events will fall in two broad categories:-

1.  Guardian’s CM-id registered with DC - In this case the guardian will mention his cm-id and all the consent requests will flow to his consent manager by default. Here DC can easily honor the consent life cycle events generated by the Guardian’s CM.
2.  Data Principals CM-id registered with CM - Here DC will need the proof that the guardian is indeed the guardian of the Data Principal to honor the events. Here the events will be accompanied by the Guardian TOKEN issued by the DP as the proof of being guardian.