// ########## Import Constants Here ##########
import * as types from "../constants";

const initial = {
  isLoading: false,
  error: null,
  data: [
    {
      logo: "",
      navigation: [
        {
          id: "",
          menuItem: "",
          link: ""
        }
      ],
      heroPromo: [
        {
          id: "",
          promoHeading: "",
          promoDescription: ""
        }
      ]
    },
    {
      sectionHeading: "",
      sectionSubtitle: "",
      sectionData: [
        {
          id: "",
          featureIcon: "",
          featureHeading: "",
          featureDescription: ""
        }
      ]
    },
    {
      sectionHeading: "",
      sectionDescription: "",
      sectionSteps: [
        {
          id: "",
          stepIcon: "",
          stepLabel: "",
          stepMainPara: "",
          stepSubPara: ""
        }
      ]
    },
    {
      sectionHeading: "",
      sectionSubtitle: "",
      sectionImage: ""
    },
    {
      sectionHeading: "",
      sectionSubtitle: "",
      sectionDescription: ""
    },
    {
      sectionHeading: "",
      sectionDescription: "",
      sectionImage: ""
    },
    {
      sectionHeading: "",
      sectionData: [
        {
          id: "",
          testimonialText: "",
          testimonialPersonName: "",
          testimonialIndustry: ""
        }
      ]
    },
    {
      sectionHeading: "",
      sectionSubtitle: "",
      contactFormNamePlaceholder: "",
      contactFormEmailPlaceholder: "",
      contactFormMessagePlaceholder: "",
      conatctFormSubmitButton: ""
    },
    {
      footerLogo: "",
      footerDescription: "",
      footerDisclaimer: "",
      footerFollowHeading: "",
      footerFacebookLink: "",
      footerTwitterLink: "",
      footerIntagramLink: "",
      footerContactHeading: "",
      footerAddress: "",
      footerEmail: ""
    }
  ]
};

export default function(state = initial, action) {
  switch (action.type) {
    case types.LOAD_APP_ATTEMPT:
      return { ...state, isLoading: true };
    case types.LOAD_APP_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.LOAD_APP_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
