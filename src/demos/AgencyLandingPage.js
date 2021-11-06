import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import ThreePlans1 from "components/pricing/ThreePlans1.js";
import ThreePlans from "components/pricing/ThreePlans.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import TwoColContactUsWithIllustrationFullForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import testim1 from "images/testim1.jpg";
import testim2 from "images/testim2.jpg";
import testim3 from "images/testim3.jpg";
import testim4 from "images/testim4.jpg";

import { useTranslation } from "react-i18next";

export default function AgencyLandingPage () { 
  const { t, i18n } = useTranslation();
  return (
  <AnimationRevealPage>
    <Hero />
    <MainFeature/>
    <Features />
    <MainFeature2 />
    <Testimonial
      subheading={t("testimonies.title")}
      heading={
        <>
          {t("testimonies.heading1")} <span tw="text-primary-500">{t("testimonies.heading2")}</span>
        </>
      }
      description={t("testimonies.description")}
      testimonials={[
        {
          imageSrc:
            testim4,
          profileImageSrc:
          testim4,
          quote:
          t("testimonies.test3.body"),
          customerName: t("testimonies.test3.name"),
          customerTitle: t("testimonies.test3.department")
        },
        {
          imageSrc:
            testim2,
          profileImageSrc:
          testim2,
          quote:
          t("testimonies.test1.body"),
          customerName: t("testimonies.test1.name"),
          customerTitle: t("testimonies.test1.department")
        },
        {
          imageSrc:
            testim3,
          profileImageSrc:
          testim3,
          quote:
          t("testimonies.test2.body"),
          customerName: t("testimonies.test2.name"),
          customerTitle: t("testimonies.test2.department")
        },
        {
          imageSrc:
            testim1,
          profileImageSrc:
          testim1,
          quote:
          t("testimonies.test.body"),
          customerName: t("testimonies.test.name"),
          customerTitle: t("testimonies.test.department")
        },
      ]}
      textOnLeft={true}
    />
    <ThreePlans/>
    <ThreePlans1/>
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
         {t("faq.title")} <span tw="text-primary-500">{t("faq.title1")}</span>
        </>
      }
    />
    <TwoColContactUsWithIllustrationFullForm />
    <Footer />
  </AnimationRevealPage>
)
    };
