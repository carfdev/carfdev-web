export interface PolicyUi {
  [key: string]: Locale;
}

export interface Locale {
  meta: Meta;
  title: string;
  lastUpdated: Date;
  sections: Sections;
  btn: Btn;
}

export interface Meta {
  title: string;
  description: string;
}

export interface Sections {
  "1_introduction": The10__Transfers;
  "2_data_controller": The2_DataController;
  "3_information_i_collect": The3_InformationICollect;
  "4_how_i_use": The4_HowIUse;
  "5_legal_basis": The5__LegalBasis;
  "6_storage_security": The6_StorageSecurity;
  "7_third_parties": The7_ThirdParties;
  "8_cookies": The10__Transfers;
  "9_rights": The9_Rights;
  "10_transfers": The10__Transfers;
  "11_children": The10__Transfers;
  "12_changes": The10__Transfers;
  "13_contact": The13_Contact;
}

export interface Btn {
  text: string;
  href?: string;
}

export interface The10__Transfers {
  title: string;
  paragraphs: string[];
}

export interface The13_Contact {
  title: string;
  subtitle: string;
  owner: Owner;
  authority: Authority;
}

export interface Authority {
  name: string;
  description: string;
  website: string;
  email: string;
}

export interface Owner {
  name: string;
  location: string;
  email: string;
  phone: string;
}

export interface The2_DataController {
  title: string;
  subtitle: string;
  info: Owner;
}

export interface The3_InformationICollect {
  title: string;
  "3_1_provided": The3_1_Provided;
  "3_2_analytics": The3_2__Analytics;
  "3_3_technical": The3_2__Analytics;
}

export interface The3_1_Provided {
  title: string;
  description: string;
  items: Item[];
}

export interface Item {
  label: string;
  value: string;
}

export interface The3_2__Analytics {
  title: string;
  description: string;
  items: string[];
  note?: string;
}

export interface The4_HowIUse {
  title: string;
  subtitle: string;
  "4_1_contact": The4_1__Contact;
  "4_2_analytics": The4_1__Contact;
  "4_3_security": The4_1__Contact;
}

export interface The4_1__Contact {
  title: string;
  items: string[];
}

export interface The5__LegalBasis {
  title: string;
  subtitle: string;
  items: Item[];
}

export interface The6_StorageSecurity {
  title: string;
  "6_1_storage": The10__Transfers;
  "6_2_security": The3_2__Analytics;
  "6_3_retention": The5__LegalBasis;
}

export interface The7_ThirdParties {
  title: string;
  subtitle: string;
  resend: Cloudflare;
  cloudflare: Cloudflare;
  umami: Cloudflare;
  oracle: Cloudflare;
}

export interface Cloudflare {
  title: string;
  description: string;
}

export interface The9_Rights {
  title: string;
  subtitle: string;
  rights: Item[];
  contact: Item;
}
