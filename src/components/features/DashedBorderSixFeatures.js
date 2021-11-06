import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUserMd,
  faProcedures,
  faFlask,
  faBaby,
  faSyringe,
  faWalking,
  faTooth,
  faRadiation,
  faBone,
  faPills,
  faCommentMedical,
  faEye
} from "@fortawesome/free-solid-svg-icons";
const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default function Features ()  {
  const { t, i18n } = useTranslation();
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: <FontAwesomeIcon icon={faUserMd} style={{width:"40px", height:"40px"}}/>,
      title: t("services.consultation"),
      description: t("services.consultation_desc")
    },
    { imageSrc: <FontAwesomeIcon icon={faProcedures} style={{width:"40px", height:"40px"}}/>,
      title: t("services.surgeon"),
      description: t("services.surgeon_desc") 
  },
    { imageSrc: <FontAwesomeIcon icon={faFlask} style={{width:"40px", height:"40px"}}/>, 
      title: t("services.labo"),
      description: t("services.labo_desc") 
   },
    { imageSrc: <FontAwesomeIcon icon={faBaby} style={{width:"40px", height:"40px"}}/>, 
      title: t("services.born"), 
      description: t("services.born_desc") 
    },
    { imageSrc: <FontAwesomeIcon icon={faSyringe} style={{width:"40px", height:"40px"}}/>, 
      title: t("services.vaccination"),
      description: t("services.vaccination_desc") 
     },
    { imageSrc: <FontAwesomeIcon icon={faWalking} style={{width:"40px", height:"40px"}}/>, 
      title: t("services.kine"),
      description: t("services.kine_desc") 
     },
     { imageSrc: <FontAwesomeIcon icon={faTooth} style={{width:"40px", height:"40px"}}/>, 
       title: t("services.dental"),
       description: t("services.dental_desc") 
      },
      { imageSrc: <FontAwesomeIcon icon={faRadiation} style={{width:"40px", height:"40px"}}/>, 
        title: t("services.radio"),
        description: t("services.radio_desc") 
       },
       { imageSrc: <FontAwesomeIcon icon={faEye} style={{width:"40px", height:"40px"}}/>, 
         title: t("services.ophta"),
         description: t("services.ophta_desc") 
        },
        { imageSrc: <FontAwesomeIcon icon={faBone} style={{width:"40px", height:"40px"}}/>, 
          title: t("services.ortho"),
          description: t("services.ortho_desc") 
         },
         { imageSrc: <FontAwesomeIcon icon={faPills} style={{width:"40px", height:"40px"}}/>, 
           title: t("services.pharmacy"),
           description: t("services.pharmacy_desc") 
          },
          { imageSrc: <FontAwesomeIcon icon={faCommentMedical} style={{width:"40px", height:"40px"}}/>, 
            title: t("services.advice"),
            description: t("services.advice_desc") 
           } 
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>{t("services.title")} <span tw="text-primary-500">{t("services.title1")}</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer" style={{color:"rgba(100,21,255,1)"}}>
                {card.imageSrc}
              </span>
              <span className="textContainer">
                <span className="title">{card.title}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
