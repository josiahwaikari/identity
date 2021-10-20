import { ImageSourcePropType } from "react-native";

export interface OnboardingPage {
  id: number;
  title: string;
  indicator?: boolean;
  description: string;
  image: ImageSourcePropType;
}

export interface OnboardingProps {
  page: OnboardingPage;
  pageNumber: number;
  indicatorPages: OnboardingPage[];
  nextPage: () => void;
  previousPage: () => void;
  goToPage: (pageNumberToGoTo: number) => void;
  letsGetStarted: () => void;
}
