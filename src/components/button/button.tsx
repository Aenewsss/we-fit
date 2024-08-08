import Image from "next/image";
import { StyledButton, StyledSpan, StyledSpanBold } from "./styles";
import { FlexContainer } from "../flex-container";

interface ButtonProps {
    text: string
    onClick: () => void
    count: number
}

const Button = ({ text, onClick, count = 0 }: ButtonProps) => {
    return (

        <StyledButton variant={count > 0 ? 'selected' : 'empty'} onClick={onClick}>
            <FlexContainer>
                <Image src="/icons/shoppingcart.svg" width={16} height={16} alt="Ícone carrinho de compras" />
                <StyledSpan>{count}</StyledSpan>
            </FlexContainer>
            <StyledSpanBold>{text}</StyledSpanBold>
        </StyledButton>
    )
}
export default Button;
