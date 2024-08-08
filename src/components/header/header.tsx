'use client'
import Link from "next/link";
import { StyledCartSpan, StyledHeader, StyledItems, StyledLinkHome } from "./styles";
import { PathEnum } from "@/enum/path.enum";
import Image from "next/image";
import { FlexContainer } from "../flex-container";
import { useSelector } from "react-redux";
import { IStore } from "@/redux/types";

export default function Header() {
    const { movies } = useSelector((store: IStore) => store.cart)

    function renderText(){
        return movies.length == 1 ? 'item' : 'itens'
    }
    
    return (
        <StyledHeader>
            <FlexContainer justifyContent="space-between">
                <StyledLinkHome href={PathEnum.home}>WeMovies</StyledLinkHome>

                <Link href={PathEnum.cart}>
                    <FlexContainer gapColumn={16}>
                        <FlexContainer direction="column" alignItems="flex-end">
                            <StyledCartSpan>Meu Carrinho</StyledCartSpan>
                            <StyledItems >{movies.reduce((acc, curr) => acc += curr.quantity, 0)} {renderText()}</StyledItems>
                        </FlexContainer>

                        <Image src="/icons/bag.svg" width={24} height={20} alt="Ícone sacola" />
                    </FlexContainer>
                </Link>
            </FlexContainer>
        </StyledHeader>
    )
}