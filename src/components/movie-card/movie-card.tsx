import { IMovie } from "@/interfaces/movie.interface";
import { FlexContainer } from "../flex-container";
import Image from "next/image";
import Button from "../button/button";
import { StyledCard, StyledPrice, StyledTitle } from "./styles";
import { useAppDispatch } from "@/redux/hooks";
import { addMovieToCart } from "@/redux/cart/slice";
import { useSelector } from "react-redux";
import { IStore } from "@/redux/types";
import { FormatCurrencyText } from "@/utils/format-currency-text";

interface Props {
    movie: IMovie
}

export default function MovieCard({ movie }: Props) {

    const dispatch = useAppDispatch()

    const { movies } = useSelector((store: IStore) => store.cart)

    return (
        <StyledCard>
            <FlexContainer direction="column" gapRow={8}>
                <FlexContainer className="font-bold" direction="column" gapRow={8}>
                    <Image src={movie.image} width={147} height={188} alt={`Filme ${movie.title}`} />
                    <StyledTitle>{movie.title}</StyledTitle>
                    <StyledPrice>R$ {FormatCurrencyText(movie.price)}</StyledPrice>
                </FlexContainer>

                <Button count={movies.find(el => el.id == movie.id)?.quantity!} text="ADICIONAR AO CARRINHO" onClick={() => dispatch(addMovieToCart(movie))} />
            </FlexContainer>
        </StyledCard>
    )
}