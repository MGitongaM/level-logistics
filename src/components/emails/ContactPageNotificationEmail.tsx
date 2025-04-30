import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface ContactPageNotificationEmailProps {
  name?: string;
  phoneNumber?: string;
  emailAddress?: string;
  subject?: string;
  message?: string;
}

//   const baseUrl = process.env.VERCEL_URL
//     ? `https://${process.env.VERCEL_URL}`
//     : '';

export const ContactPageNotificationEmailEmail = ({
  name,
  phoneNumber,
  emailAddress,
  subject,
  message,
}: ContactPageNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>New Contact Inqury</Preview>
        <Container style={container}>
          <Section style={logo}>
            <Img
              width={72}
              // src={`${baseUrl}/static/twitch-logo.png`}
              src={`https://res.cloudinary.com/dh8qlzbzk/image/upload/v1744622213/levels_services_transparent_logo_only_zquhit.png`}
              alt="Level Services Logo"
              style={logoImg}
            />
          </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            {/* <Text style={paragraph}>Hi {username},</Text> */}
            <Text style={paragraph}>Hi John,</Text>
            <Text style={paragraph}>
              There is a new contact inqury from the Level Services Logistics
              Website about the following:
            </Text>
            <Text style={paragraph}>Subject : {subject}</Text>
            <Text style={paragraph}>Message {message}</Text>
            <br />
            <br />
            <Text style={paragraph}>
              Here are their contact details they provided:
            </Text>
            <Text style={paragraph}>Name:{name}</Text>
            <Text style={paragraph}>Phone Number: {phoneNumber}</Text>
            <Text style={paragraph}>Email Address: {emailAddress}</Text>
            <br />
            <br />
            <Text style={paragraph}>
              Thanks,
              <br />
              Level Services Construction
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Row>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              © {new Date().getFullYear()} Level Services Construction, All
              Rights Reserved <br />
            </Text>
          </Row>
        </Section>
      </Body>
    </Html>
  );
};

//   ContactPageNotificationEmailEmail.PreviewProps = {
//     username: 'alanturing',
//     updatedDate: new Date('June 23, 2022 4:06:00 pm UTC'),
//   } as ContactPageNotificationEmailProps;

export default ContactPageNotificationEmailEmail;

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  maxWidth: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
};

const footer = {
  maxWidth: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 20px 10px 20px",
};

const logo = {
  padding: 30,
};

const logoImg = {
  margin: "0 auto",
};

const sectionsBorders = {
  width: "100%",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid rgb(145,71,255)",
  width: "102px",
};

//   const link = {
//     textDecoration: 'underline',
//   };

// export default function ContactPageNotificationEmail() {
//   return (
//     <div>ContactPageNotificationEmail</div>
//   )
// }
