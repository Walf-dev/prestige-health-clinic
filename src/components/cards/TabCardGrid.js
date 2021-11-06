import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import BlocOp from "images/bloc-operatoire.jpg";
import Ophta from "images/ophtamologie.jpg";
import Dental from "images/soin-dentaire.jpg";
import Echo from "images/echographie.jpg";
import Ortho from "images/orthopedie.jpg";
import Imagerie from "images/imagerie.jpg";
import Digital from "images/digital-center.jpg";
import Lits from "images/lits-hospitalisation.jpg";
import Labo from "images/labo.jpg";
import ChaiseRoulante from "images/patiente-sur-chaise-roulante.jpg";
import Consultation from "images/consultation.jpg";
import Ambulances from "images/ambulances.jpg";
import Exterieur from "images/exterieur.jpg";
import FemmeReedu from "images/femme-reedu.jpg";
import HommeReedu from "images/homme-reedu.jpg";
import Pharmacie from "images/pharmacie.jpg";
import Pediatrie from "images/pediatrie.jpg";
import Matelas from "images/matelas.jpg";
import Eau from "images/reserve-eau.jpg";
import Vaccination from "images/vaccination.jpg";
import Staff from "images/staff.jpg";
import Bar from "images/activities/bar.jpg";
import Convivialite from "images/activities/convivialite.jpg";
import Fete from "images/activities/fete_du_travail.jpg";
import Messe from "images/activities/messe_action_grace.jpg";
import Recompenses from "images/activities/recompenses.jpg";
import Stagiaires from "images/activities/stagiaires.jpg";

import { useTranslation } from "react-i18next";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default function TabCardGrid ()  {
  const { t, i18n } = useTranslation();
  const heading = "Checkout the Menu";
  const services = t("visit.tabs.services");
  const facilities = t("visit.tabs.facilities");
  const social = t("visit.tabs.social");
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomFacilities = () => {
  const cards = [
    {
      imageSrc: Staff,
      title: t("visit.tabs.staff.title"),
      content: t("visit.tabs.staff.content"),
      url: "/#contact"
    },
    {
      imageSrc: Ambulances,
      title: t("visit.tabs.ambulances.title"),
      content: t("visit.tabs.ambulances.content"),
      url: "/#contact"
    },
    {
      imageSrc: Digital,
      title: t("visit.tabs.digital.title"),
      content: t("visit.tabs.digital.content"),
      url: "/#contact"
    },
    {
      imageSrc: Lits,
      title: t("visit.tabs.room.title"),
      content: t("visit.tabs.room.content"),
      url: "/#contact"
    },
    {
      imageSrc: ChaiseRoulante,
      title: t("visit.tabs.chair.title"),
      content: t("visit.tabs.chair.content"),
      url: "/#contact"
    },
    {
      imageSrc: Pediatrie,
      title: t("visit.tabs.pediatrie.title"),
      content: t("visit.tabs.pediatrie.content"),
      url: "/#contact"
    },
    {
      imageSrc: Matelas,
      title: t("visit.tabs.matelas.title"),
      content: t("visit.tabs.matelas.content"),
      url: "/#contact"
    },
    {
      imageSrc: Eau,
      title: t("visit.tabs.eau.title"),
      content: t("visit.tabs.eau.content"),
      url: "/#contact"
    },
    {
      imageSrc: Exterieur,
      title: t("visit.tabs.exterieur.title"),
      content: t("visit.tabs.exterieur.content"),
      url: "/#contact"
    },
];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomActivities = () => {
  const cards = [
    {
      imageSrc: Bar,
      title: t("visit.tabs.bar.title"),
      content: t("visit.tabs.bar.content"),
      url: "/#contact"
    },
    {
      imageSrc: Convivialite,
      title: t("visit.tabs.conviv.title"),
      content: t("visit.tabs.conviv.content"),
      url: "/#contact"
    },
    {
      imageSrc: Fete,
      title: t("visit.tabs.fete.title"),
      content: t("visit.tabs.fete.content"),
      url: "/#contact"
    },
    {
      imageSrc: Messe,
      title: t("visit.tabs.messe.title"),
      content: t("visit.tabs.messe.content"),
      url: "/#contact"
    },
    {
      imageSrc: Recompenses,
      title: t("visit.tabs.recomp.title"),
      content: t("visit.tabs.recomp.content"),
      url: "/#contact"
    },
    {
      imageSrc: Stagiaires,
      title: t("visit.tabs.stage.title"),
      content: t("visit.tabs.stage.content"),
      url: "/#contact"
    }
];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};


  const tabs = {
    [services]: [
      {
        imageSrc: BlocOp,
        title: t("visit.tabs.surgery.title"),
        content: t("visit.tabs.surgery.content"),
        url: "/#contact"
      },
      {
        imageSrc: Ortho,
        title: t("visit.tabs.ortho.title"),
        content: t("visit.tabs.ortho.content"),
        url: "/#contact"
      },
      {
        imageSrc: Ophta,
        title: t("visit.tabs.ophta.title"),
        content: t("visit.tabs.ophta.content"),
        url: "/#contact"
      },
      {
        imageSrc: Dental,
        title: t("visit.tabs.dental.title"),
        content: t("visit.tabs.dental.content"),
        url: "/#contact"
      },
      {
        imageSrc: Echo,
        title: t("visit.tabs.echo.title"),
        content: t("visit.tabs.echo.content"),
        url: "/#contact"
      },
      {
        imageSrc: Imagerie,
        title: t("visit.tabs.imagerie.title"),
        content: t("visit.tabs.imagerie.content"),
        url: "/#contact"
      },
      {
        imageSrc: Labo,
        title: t("visit.tabs.labo.title"),
        content: t("visit.tabs.labo.content"),
        url: "/#contact"
      },
      {
        imageSrc: Consultation,
        title: t("visit.tabs.consultation.title"),
        content: t("visit.tabs.consultation.content"),
        url: "/#contact"
      },
      {
        imageSrc: Pharmacie,
        title: t("visit.tabs.pharmacie.title"),
        content: t("visit.tabs.pharmacie.content"),
        url: "/#contact"
      },
      {
        imageSrc: Vaccination,
        title: t("visit.tabs.vaccination.title"),
        content: t("visit.tabs.vaccination.content"),
        url: "/#contact"
      },
      {
        imageSrc: FemmeReedu,
        title: t("visit.tabs.femmeReedu.title"),
        content: t("visit.tabs.femmeReedu.content"),
        url: "/#contact"
      },
      {
        imageSrc: HommeReedu,
        title: t("visit.tabs.hommeReedu.title"),
        content: t("visit.tabs.hommeReedu.content"),
        url: "/#contact"
      },
    ],
    [facilities]: getRandomFacilities(),
    [social]: getRandomActivities(),
  }

  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{t("visit.main.title")} <HighlightedText>{t("visit.main.title1")}.</HighlightedText></Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                                      {/*
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.rating}
                      </CardRating>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer>
                                                                  */}
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>{t("contact.title")}</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

