export interface Education {
    institution: string;
    fieldOfStudy: string;
    degree: string;
    endDate: string;
    location: string;
    isStudent: boolean;
  }
  
 export interface EducationState {
    educations: Education[];
    message: string;
    dateErrors: string[];
  }