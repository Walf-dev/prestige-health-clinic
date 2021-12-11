import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/logo.png";
import walf from "../../images/walf.gif";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { useTranslation } from "react-i18next";


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const WalfContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-12`;
const WalfLogo = tw.img`w-16`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;
const WalfText = tw.h6`ml-2 text-xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;

export default () => {
  const { t, i18n } = useTranslation();
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>{t("header.name")}</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="/">{t("header.links.home")}</Link>
            <Link href="/#about">{t("header.links.about")}</Link>
            <Link href="/#reviews">{t("header.links.reviews")}</Link>
            <Link href="/activities">{t("header.links.activities")}</Link>
            <Link href="/#contact">{t("header.links.contact")}</Link>
            <Link href="/#pricing">{t("header.links.pricing")}</Link>
          </LinksContainer>
          {/*<SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>*/}
          <SocialLinksContainer>
          <SocialLink href="tel:+23767166673">
              (+237) 671.666.737
            </SocialLink>
            <SocialLink href="mailto:prestigehealthcenter7@yahoo.com">
            prestigehealthcenter7@yahoo.com
            </SocialLink>
            <SocialLink href="https://youtu.be/pkaCg50eYMI">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <WalfContainer style={{padding:"16px"}}>
          <WalfText style={{paddingRight:"8px"}}>{t("footer.walf")}</WalfText><a href="https://fredolywagni.com" target="_blank" rel="noopener">www.fredolywagni.com</a>
          </WalfContainer>
          <CopyrightText>
            &copy; {t("footer.copy")} {new Date().getFullYear()}, {t("header.name")} {t("footer.right")}.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
