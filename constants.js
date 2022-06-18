// Form Values
const firstName = 'yourFirstName';
const lastName = 'yourLastName';
const phone = 'yourPhone';
const phoneType = 'mobile';
const email = 'yourEmail';
const country = 'yourCountry';
const links = [
  { link: 'https://www.apple.com', linkType: 'other' },
  {
    link: 'https://www.apple.com',
    linkType: 'linkedin',
  },
];
const resumeFileName = 'pathToResume';
const startDate = '30,June 2022';
const duration = '7_months_or_more';
const internshipType = 'full_time';
const graduationDate = '26,April 2025';
const noticePeriod = 'In 1-2 Weeks';
const gender = 'male';
const veteran = 'I am not a protected veteran';
const race = 'White';
const disability = "No, I don't have a disability";

// Form Field Attributes
const NAME = 'name';
const VALUE = 'value';
const INPUT = 'input';
const SCROLL = 'scroll';
const DATE = 'date';
const SELECT = 'select';
const FILE = 'file';
const CLICK = 'click';
const YES = 'yes';
const NO = 'no';

// other
const addBtnIdentifier = '.tds-icon-trigger';
const submitBtnIdentifier = '[data-action-type="submit"]';
const nextBtnIdentifier = '[data-action-type="next"]';
const dayIdentifier = '.tds-day';
const bottomIdentifier = '[title="Locations"]';
const linkIdentifier = 'a.tds-link';

// inputs
let p1Inputs = [
  {
    type: FILE,
    identifier: `[${NAME}="/resume"]`,
    value: resumeFileName,
  },
  {
    type: INPUT,
    identifier: `[${NAME}="/firstName"]`,
    value: firstName,
  },
  {
    type: INPUT,
    identifier: `[${NAME}="/lastName"]`,
    value: lastName,
  },
  {
    type: INPUT,
    identifier: `[${NAME}="/phone"]`,
    value: phone,
  },
  {
    type: INPUT,
    identifier: `[${NAME}="/phoneType"]`,
    value: phoneType,
  },
  {
    type: INPUT,
    identifier: `[${NAME}="/email"]`,
    value: email,
  },
  {
    type: INPUT,
    identifier: `[${NAME}="/country"]`,
    value: country,
  },
];
const p2Inputs = [
  {
    type: CLICK,
    identifier: `[${NAME}="/jobInternshipThesis"][${VALUE}="${NO}"]`,
  },
  {
    type: DATE,
    identifier: `[${NAME}="/jobAvailabilityToStartInternship"]`,
    value: startDate,
  },
  {
    type: INPUT,
    identifier: `[${NAME}="/jobInternshipDuration"]`,
    value: duration,
  },
  {
    type: INPUT,
    identifier: `[${NAME}="/jobInternshipType"]`,
    value: internshipType,
  },
];
const p3Inputs = [
  {
    type: INPUT,
    identifier: `[${NAME}="/legalNoticePeriod"]`,
    value: noticePeriod,
  },
  {
    type: CLICK,
    identifier: `[${NAME}="/legalConsiderOtherPositions"][${VALUE}="${YES}"]`,
  },
  {
    type: CLICK,
    identifier: `[${NAME}="/legalImmigrationSponsorship"][${VALUE}="${NO}"]`,
  },
  {
    type: CLICK,
    identifier: `[${NAME}="/legalFormerTeslaEmployee"][${VALUE}="${NO}"]`,
  },
  {
    type: CLICK,
    identifier: `[${NAME}="/legalFormerTeslaInternOrContractor"][${VALUE}="${NO}"]`,
  },
  {
    type: CLICK,
    identifier: `[${NAME}="/legalUniversityStudent"][${VALUE}="${YES}"]`,
  },
  {
    type: DATE,
    identifier: `[${NAME}="/legalUniversityAnticipatedGraduationDate"]`,
    value: graduationDate,
  },
  {
    type: CLICK,
    identifier: `[${NAME}="/legalReceiveNotifications"][${VALUE}="${YES}"]`,
  },
  {
    type: CLICK,
    identifier: `[${NAME}="/legalAcknowledgment"]`,
  },
  {
    type: INPUT,
    identifier: `[${NAME}="/legalAcknowledgmentName"]`,
    value: `${firstName} ${lastName}`,
  },
];
const p4Inputs = [
  {
    type: SCROLL,
    identifier: '.style_Disclaimer__toBo-',
  },
  {
    type: INPUT,
    identifier: `[${NAME}="/eeoGender"]`,
    value: gender,
  },
  {
    type: INPUT,
    identifier: `[${NAME}="/eeoVeteranStatus"]`,
    value: veteran,
  },
  {
    type: INPUT,
    identifier: `[${NAME}="/eeoRaceEthnicity"]`,
    value: race,
  },
  {
    type: INPUT,
    identifier: `[${NAME}="/eeoDisabilityStatus"]`,
    value: disability,
  },
  {
    type: INPUT,
    identifier: `[${NAME}="/eeoDisabilityStatusName"]`,
    value: `${firstName} ${lastName}`,
  },
  {
    type: CLICK,
    identifier: `[${NAME}="/eeoAcknowledgment"]`,
  },
];

links.forEach((link, i) => {
  p1Inputs.push({
    type: CLICK,
    identifier: addBtnIdentifier,
  });
});
links.forEach((link, i) => {
  p1Inputs.push({
    type: INPUT,
    identifier: `[${NAME}="/profileLinks/${i}/link"]`,
    value: link.link,
  });
  p1Inputs.push({
    type: INPUT,
    identifier: `[${NAME}="/profileLinks/${i}/type"]`,
    value: link.linkType,
  });
});

const homeURL =
  'https://www.tesla.com/careers/search/?department=3&type=3&region=5&country=US&state=CA'; // engineering internship roles in CA home page

const baseURL = 'https://www.tesla.com/careers/search/job/apply/'; // base url for application page

const inputPages = [p1Inputs, p2Inputs, p3Inputs, p4Inputs];

module.exports = {
  inputPages,
  INPUT,
  SELECT,
  FILE,
  CLICK,
  DATE,
  SCROLL,
  nextBtnIdentifier,
  dayIdentifier,
  submitBtnIdentifier,
  baseURL,
  homeURL,
  bottomIdentifier,
  linkIdentifier,
};
