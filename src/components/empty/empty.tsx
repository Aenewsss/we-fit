import Image from "next/image";
import { Container } from "../container";
import { FlexContainer } from "../flex-container";
import { StyledEmpty, StyledHeading } from "./styles";
import LinkButton from "../button/link-button";
import { PathEnum } from "@/enum/path.enum";

export default function Empty() {
    return (
        <Container>
            <StyledEmpty>
                <FlexContainer direction="column" gapRow={24}>
                    <StyledHeading>Parece que não há nada por aqui :(</StyledHeading>
                    <Image src="/reload-page.png" width={447} height={265} alt="Recarregar página"/>
                    <LinkButton text="Voltar para tela inicial" path={PathEnum.home}/>
                </FlexContainer>
            </StyledEmpty>
        </Container>
    )
}