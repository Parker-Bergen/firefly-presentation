import { ReactNode } from "react";
import {
  Logo,
  Primary,
  PrimaryText,
  Secondary,
  Separator,
  TitlePageContainer,
} from "./TitlePageStyles";

interface TitlePageProps {
  primary: ReactNode;
  secondary: ReactNode;
  logo: string;
}

const TitlePage = ({ primary, secondary, logo }: TitlePageProps) => {
  return (
    <TitlePageContainer>
      <Primary>
        {logo && <Logo src={logo} alt="Firefly Logo" width={50} height={50} />}
        <PrimaryText>{primary}</PrimaryText>
      </Primary>
      <Separator />
      <Secondary>{secondary}</Secondary>
    </TitlePageContainer>
  );
};

export default TitlePage;
