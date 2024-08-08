import Image from "next/image";
import { Container } from "../container";
import { FlexContainer } from "../flex-container";
import { StyledEmpty } from "./styles";
import LinkButton from "../button/link-button";
import { PathEnum } from "@/enum/path.enum";
import { StyledHeading } from "../empty/styles";

export default function PurchaseSuccess() {
    return (
        <Container>
            <StyledEmpty>
                <FlexContainer direction="column" gapRow={24}>
                    <StyledHeading>Compra realizada com sucesso!</StyledHeading>
                    <Image src="/purchase_success.png" width={294} height={307} alt="Recarregar página"/>
                    <LinkButton text="VOLTAR" path={PathEnum.home}/>
                </FlexContainer>
            </StyledEmpty>
        </Container>
    )
}