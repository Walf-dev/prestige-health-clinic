import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import TwoColContactUsWithIllustrationFullForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import { useTranslation } from "react-i18next";
import TabGrid from "components/cards/TabCardGrid.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";

export default function AgencyLandingPage () { 
  const { t, i18n } = useTranslation();
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

  return (
  <AnimationRevealPage>
    <Hero />
    <TabGrid
        heading={
          <>
            {t("visit.main.title")} <HighlightedText>{t("visit.main.title1")}.</HighlightedText>
          </>
        }
      />
          <Container>
          </Container>

    <TwoColContactUsWithIllustrationFullForm />
    <Footer />
  </AnimationRevealPage>
)
    };
