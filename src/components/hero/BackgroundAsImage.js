import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import {
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import TranslateIcon from '@material-ui/icons/Translate';
import { useHistory } from "react-router-dom";
import { Layout, Radio } from "antd";
import { useTranslation } from "react-i18next";
//to store chosen language in cookies
import Cookies from "js-cookie";
import sthetoscope from "../../images/demo/sthetoscope.jpg";
import english from "../../images/english.png";
import french from "../../images/french.png";

import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url(${sthetoscope});
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  const [langAnchorEl, setLangAnchorEl] = React.useState(null);
  const history = useHistory();
  const [language, setLanguage] = useState(Cookies.get("locale") || "en");
  const { t, i18n } = useTranslation();
  const primaryButtonUrl = "/#reviews";

  function changeLanguage(e) {
    //target the chosen language onclick
    const code = e.target.value;

    if (i18n.language !== code) {
      i18n.changeLanguage(code);
      Cookies.set("locale", code);
      setLanguage(code);
    }
  }

  const handleOpenLangMenu = (e) => {
    setLangAnchorEl(e.currentTarget);
  };
  const handleCloseLangMenu = (e) => {
    setLangAnchorEl(null);
  };

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/#about">
      {t("header.links.about")}
      </NavLink>
      <NavLink href="/#reviews">
      {t("header.links.reviews")}
      </NavLink>
      <NavLink href="/activities">
      {t("header.links.activities")}
      </NavLink>
      <NavLink href="/#contact">
      {t("header.links.contact")}
      </NavLink>
      <NavLink href="/#pricing">
      {t("header.links.pricing")}
      </NavLink>
    </NavLinks>,
    <NavLink key={2}>
        <div>
                          {/*lang session */}
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleOpenLangMenu}
            onClose={handleCloseLangMenu}
          >
            <span style={{fontSize:"20px", fontWeight:"bold"}}>
            <TranslateIcon/>
            {t("header.language")}
            </span>
          </IconButton>
          <Menu
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorEl={langAnchorEl}
            open={Boolean(langAnchorEl)}
            onClose={handleCloseLangMenu}
          >
          <Radio.Group defaultValue={language} onChange={changeLanguage}>
          <MenuItem><Radio.Button value="en"><img src={english} width="25" height="25" alt="english"/></Radio.Button></MenuItem>
          <MenuItem><Radio.Button value="fr"><img src={french} width="25" height="25" alt="french"/></Radio.Button></MenuItem>
          </Radio.Group>
          </Menu>
          {/*end lang session */}
        </div>
    </NavLink>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>{t("header.notifications")}</Notification>
            <Heading>
              <span>{t("header.title")}</span>
              <br />
              <SlantedBackground>{t("header.name")} !</SlantedBackground>
            </Heading>
            <PrimaryButton as="a" href={primaryButtonUrl}>{t("header.testimonies_button")}</PrimaryButton>
          </LeftColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
              url="https://www.youtube.com/embed/pkaCg50eYMI"
              background="transparent"
              allowfullscreen
              title="Prestige Health Center Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
