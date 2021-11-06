import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import { useTranslation } from "react-i18next";
import { useForm } from 'react-hook-form';
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default function TwoColContactUsWithIllustrationFullForm ({
  textOnLeft = true,
})  {
  const { t, i18n } = useTranslation();
  const subheading = t("contact.title");
  const heading = <>{t("contact.subtitle")} <span tw="text-primary-500">{t("contact.subtitle1")}</span><wbr/> {t("contact.subtitle2")}</>;
  const description = t("contact.description");
  const submitButtonText = t("contact.button");


  //form logic 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  //onsubmit success
  const toastifySuccess = () => {
    toast.success(t("contact.success"), {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  //onsubmit 
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };
  const error_color= {color:'red'};
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container  id="contact">
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Input type="email" name="email" placeholder={t("contact.email")} 
                {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
              />
              {errors.email && (
                      <span style={error_color}>{t("contact.email_error")}</span>
                    )}
              <Input type="text" name="name" placeholder={t("contact.fullname")} 
                {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
              />
              {errors.name && <span style={error_color}>{t("contact.fullname_error")}</span>}
              <Input type="text" name="subject" placeholder={t("contact.subject")} 
                {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
              />
              {errors.subject && (
                      <span style={error_color}>{t("contact.subject_error")}</span>
                    )}
              <Textarea name="message" placeholder={t("contact.message")} 
                {...register('message', {
                        required: true
                      })}
              />
              {errors.message && <span style={error_color}>{t("contact.message_error")}</span>}
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
            <ToastContainer/>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
