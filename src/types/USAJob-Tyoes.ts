export type JobTypes = {
  MatchedObjectId: string;
  MatchedObjectDescriptor: {
    PositionID: string;
    PositionTitle: string;
    PositionURI: string;
    ApplyURI: [];
    PositionLocationDisplay: string;
    PositionLocation: [
      {
        LocationName: string;
        CountryCode: string;
        CountrySubDivisionCode: string;
        CityName: string;
        Longitude: number;
        Latitude: number;
      }
    ];
    OrganizationName: string;
    DepartmentName: string;
    SubAgency: string;
    JobCategory: [
      {
        Name: string;
        Code: string;
      }
    ];
    JobGrade: [
      {
        Code: string;
      }
    ];
    PositionSchedule: [
      {
        Name: string;
        Code: string;
      }
    ];
    PositionOfferingType: [
      {
        Name: string;
        Code: string;
      }
    ];
    QualificationSummary: string;
    PositionRemuneration: [
      {
        MinimumRange: string;
        MaximumRange: string;
        RateIntervalCode: string;
        Description: string;
      }
    ];
    PositionStartDate: string;
    PositionEndDate: string;
    PublicationStartDate: string;
    ApplicationCloseDate: string;
    PositionFormattedDescription: [
      {
        Label: string;
        LabelDescription: string;
      }
    ];
    UserArea: {
      Details: {
        JobSummary: string;
        WhoMayApply: {
          Name: string;
          Code: string;
        };
        LowGrade: string;
        HighGrade: string;
        PromotionPotential: string;
        SubAgencyName: string;
        OrganizationCodes: string;
        Relocation: string;
        HiringPath: [];
        TotalOpenings: string;
        AgencyMarketingStatement: string;
        TravelCode: string;
        ApplyOnlineUrl: string;
        DetailStatusUrl: string;
        MajorDuties: [];
        Education: string;
        Evaluations: string;
        HowToApply: string;
        RequiredDocuments: string;
        Benefits: string;
        BenefitsDisplayDefaultText: true;
        OtherInformation: string;
        KeyRequirements: [];
        WithinArea: string;
        CommuteDistance: string;
        ServiceType: string;
        AnnouncementClosingType: string;
        AgencyContactEmail: string;
        SecurityClearance: string;
        DrugTestRequired: string;
        PositionSensitivitiy: string;
        AdjudicationType: [];
        TeleworkEligible: boolean;
        RemoteIndicator: boolean;
      };
      IsRadialSearch: boolean;
    };
  };
  RelevanceRank: number;
};

export type USASearchTypes = {
  SearchResult: {
    SearchResultCount: number;
    SearchResultCountAll: number;
    SearchResultItems: JobTypes[];
  };
};

export type FormValues = {
  title: string;
  location: string;
};
