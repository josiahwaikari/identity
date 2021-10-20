import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Heading, Paragraph, IconButton, Button } from "../../components";
import { OnboardingImage, PageIndicators } from "./components";
import withOnboardingContainer from "./container";
import { OnboardingProps } from "./interfaces";

function Onboarding(props: OnboardingProps) {
  return (
    <OnboardingWrapper>
      <OnboardingContainer>
        <ActionableContainer>
          {props.pageNumber > 1 && (
            <ActionableText onPress={props.previousPage}>Back</ActionableText>
          )}
          {props.pageNumber < 3 && (
            <ActionableText
              style={{ marginLeft: "auto" }}
              onPress={() => props.goToPage(3)}
            >
              Skip
            </ActionableText>
          )}
        </ActionableContainer>
        <OnboardingImage image={props.page.image} />
        <OnboardingInformationContainer>
          <Heading size={4} weight="bold" transform="capitalize">
            {props.page.title}
          </Heading>
          <Paragraph
            type="secondary"
            style={styles.onboardingInformationParagraph}
          >
            {props.page.description}
          </Paragraph>
        </OnboardingInformationContainer>
        <FooterActionables>
          {props.page.indicator ? (
            <IndicatorAndButtonContainer>
              <PageIndicators
                indiactorPages={props.indicatorPages}
                pageNumber={props.pageNumber}
              />
              <IconButton icon="angle-right" onPress={props.nextPage} />
            </IndicatorAndButtonContainer>
          ) : (
            <Button onPress={props.letsGetStarted}>Let's get started</Button>
          )}
        </FooterActionables>
      </OnboardingContainer>
    </OnboardingWrapper>
  );
}

const IndicatorAndButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FooterActionables = styled.View`
  height: 100px;
`;

const OnboardingInformationContainer = styled.View`
  height: 220px;
  margin-bottom: auto;
`;

const ActionableText = styled.Text`
  color: #adb4c9;

  font-size: 16px;
  font-weight: bold;
`;

const ActionableContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

const OnboardingContainer = styled.View`
  margin-top: auto;
  margin-left: 16px;
  margin-right: 16px;
`;

const OnboardingWrapper = styled.SafeAreaView`
  height: 100%;
`;

const styles = StyleSheet.create({
  bottomBarTest: {},
  onboardingImageContainer: {
    marginHorizontal: 16,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  onboardingImage: {},
  onboardingInformationContainer: {
    margin: 16,
  },
  onboardingInformationParagraph: {
    marginTop: 12,
    fontSize: 16,
  },
  bottomBar: {},
});

export default withOnboardingContainer(Onboarding);
