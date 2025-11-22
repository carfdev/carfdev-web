export interface TermsUi {
  [key: string]: Locale;
}

export interface Locale {
  meta: Meta;
  title: string;
  lastUpdated: Date;
  sections: Sections;
  btn: Btn;
}

export interface Btn {
  text: string;
}

export interface Meta {
  title: string;
  description: string;
}

export interface Sections {
  "1_introduction": The1__Introduction;
  "2_services": The2_Services;
  "3_project_process": The3_ProjectProcess;
  "4_payment": The4_Payment;
  "5_refund": The5_Refund;
  "6_ip": The6_IP;
  "7_client_responsibilities": The7_ClientResponsibilities;
  "8_warranties": The8_Warranties;
  "9_confidentiality": The10__ForceMajeure;
  "10_force_majeure": The10__ForceMajeure;
  "11_termination": The11_Termination;
  "12_indemnification": The10__ForceMajeure;
  "13_dispute": The13_Dispute;
  "14_miscellaneous": The14_Miscellaneous;
  "15_contact": The15_Contact;
}

export interface The10__ForceMajeure {
  title: string;
  description: string;
  items: string[];
  conclusion?: string;
  note?: string;
  paragraphs?: string[];
}

export interface The11_Termination {
  title: string;
  "11_1_either_party": The10__ForceMajeure;
  "11_2_effect": The10__ForceMajeure;
  "11_3_hosting": The1__Introduction;
}

export interface The1__Introduction {
  title: string;
  paragraphs: string[];
}

export interface The13_Dispute {
  title: string;
  "13_1_law": The1__Introduction;
  "13_2_resolution": The13_2_Resolution;
  "13_3_language": The1__Introduction;
}

export interface The13_2_Resolution {
  title: string;
  description: string;
  steps: Step[];
}

export interface Step {
  label: string;
  value: string;
}

export interface The14_Miscellaneous {
  title: string;
  "14_1_entire": The1__Introduction;
  "14_2_amendments": The1__Introduction;
  "14_3_severability": The1__Introduction;
  "14_4_waiver": The1__Introduction;
  "14_5_assignment": The1__Introduction;
  "14_6_contractor": The1__Introduction;
}

export interface The15_Contact {
  title: string;
  subtitle: string;
  owner: Owner;
  acceptance: Acceptance;
}

export interface Acceptance {
  title: string;
  text: string;
}

export interface Owner {
  name: string;
  location: string;
  email: string;
  phone: string;
}

export interface The2_Services {
  title: string;
  intro: string;
  "2_1_development": The2_1__Development;
  "2_2_ongoing": The2_1__Development;
  "2_3_hosting": The2_1__Development;
  conclusion: string;
}

export interface The2_1__Development {
  title: string;
  items: string[];
}

export interface The3_ProjectProcess {
  title: string;
  "3_1_consultation": The10__ForceMajeure;
  "3_2_agreement": The1__Introduction;
  "3_3_communication": The1__Introduction;
  "3_4_revisions": The10__ForceMajeure;
}

export interface The4_Payment {
  title: string;
  "4_1_structure": The4_1__Structure;
  "4_2_ongoing": The1__Introduction;
  "4_3_methods": The10__ForceMajeure;
  "4_4_currency": The1__Introduction;
  "4_5_late": The10__ForceMajeure;
  "4_6_additional": The10__ForceMajeure;
}

export interface The4_1__Structure {
  title: string;
  description: string;
  items: Step[];
}

export interface The5_Refund {
  title: string;
  "5_1_provider_cancel": The1__Introduction;
  "5_2_client_cancel": The4_1__Structure;
  "5_3_abandonment": The1__Introduction;
  "5_4_ongoing": The1__Introduction;
}

export interface The6_IP {
  title: string;
  "6_1_code": The10__ForceMajeure;
  "6_2_opensource": The1__Introduction;
  "6_3_client_materials": The1__Introduction;
  "6_4_portfolio": The10__ForceMajeure;
  "6_5_third_party": The1__Introduction;
}

export interface The7_ClientResponsibilities {
  title: string;
  intro: string;
  "7_1_communication": The2_1__Development;
  "7_2_materials": The2_1__Development;
  "7_3_decisions": The2_1__Development;
  "7_4_testing": The2_1__Development;
  conclusion: string;
}

export interface The8_Warranties {
  title: string;
  "8_1_service": The10__ForceMajeure;
  "8_2_bugs": The8_2_Bugs;
  "8_3_hosting": The10__ForceMajeure;
  "8_4_disclaimer": The10__ForceMajeure;
  "8_5_limitation": The8_5_Limitation;
  "8_6_content": The10__ForceMajeure;
}

export interface The8_2_Bugs {
  title: string;
  description: string;
  covered: string[];
  notCovered: The2_1__Development;
}

export interface The8_5_Limitation {
  title: string;
  paragraphs: string[];
  notLiable: The2_1__Development;
}
