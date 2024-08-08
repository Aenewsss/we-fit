import { IStore } from "@/redux/types"
import { useSelector } from "react-redux"
import { FlexContainer } from "../flex-container"
import LinkButton from "../button/link-button"
import { PathEnum } from "@/enum/path.enum"
import Image from "next/image"
import { changeMovieQuantity, decreaseMovieQuantity, increaseMovieQuantity, removeMovieFromCart } from "@/redux/cart/slice"
import { useAppDispatch } from "@/redux/hooks"
import { FormatCurrencyText } from "@/utils/format-currency-text"
import { StyledDivider, StyledInput, StyledMoviePrice, StyledMovieTitle, StyledSection, StyledTableHead, StyledTotalPriceText, StyledTotalPriceValue } from "./styles"
import { useScreenWidth } from "@/hooks/get-screen-width.hook"

export default function CartList() {
    const dispatch = useAppDispatch()

    const { movies } = useSelector((store: IStore) => store.cart)

    const screenWidth = useScreenWidth();
    const isSmallScreen = screenWidth < 600;

    return isSmallScreen ?
        <StyledSection>
            <FlexContainer gapRow={24} direction="column" className="rounded-md bg-white p-6">

                {
                    movies.map((movie, index) =>
                        <FlexContainer key={movie.id} className="w-full" gapColumn={16} justifyContent="space-between">
                            <Image width={64} height={82} src={movie.image} alt={`Filme ${movie.title}`} />

                            <FlexContainer direction="column" gapRow={16}>
                                <FlexContainer gapRow={16} justifyContent="space-between" className="w-full">
                                    <StyledMovieTitle>{movie.title}</StyledMovieTitle>
                                    <FlexContainer gapColumn={16}>
                                        <StyledMoviePrice>R$ {FormatCurrencyText(movie.price)}</StyledMoviePrice>
                                        <Image onClick={_ => dispatch(removeMovieFromCart(movie))} className="cursor-pointer" width={18} height={18} src="/icons/trash.svg" alt="excluir filme" />
                                    </FlexContainer>
                                </FlexContainer>
                                <FlexContainer gapRow={16} justifyContent="space-between" className="w-full">
                                    <FlexContainer justifyContent="flex-start" gapColumn={4}>
                                        <Image onClick={_ => dispatch(decreaseMovieQuantity(movie))} className="cursor-pointer" width={18} height={18} src="/icons/minus.svg" alt="Adicionar filme" />
                                        <StyledInput min={0} onChange={e => dispatch(changeMovieQuantity({ ...movie, quantity: Number(e.target.value) }))} type="number" value={movie.quantity} />
                                        <Image onClick={_ => dispatch(increaseMovieQuantity(movie))} className="cursor-pointer" width={18} height={18} src="/icons/plus.svg" alt="remover filme" />
                                    </FlexContainer>
                                    <FlexContainer direction="column" gapColumn={4}>
                                        <StyledTableHead>SUBTOTAL</StyledTableHead>
                                        <StyledMoviePrice>R$ {FormatCurrencyText(movie.quantity * movie.price)}</StyledMoviePrice>
                                    </FlexContainer>
                                </FlexContainer>
                            </FlexContainer>

                        </FlexContainer>
                    )
                }

                <StyledDivider></StyledDivider>

                <FlexContainer className="w-full" justifyContent="space-between">
                    <StyledTotalPriceText>TOTAL</StyledTotalPriceText>
                    <StyledTotalPriceValue>R$ {FormatCurrencyText(movies.reduce((acc, curr) => acc += curr.price * curr.quantity, 0))}</StyledTotalPriceValue>
                </FlexContainer>

                <LinkButton className="w-full" path={PathEnum.purchase_success} text="FINALIZAR PEDIDO" />
            </FlexContainer>
        </StyledSection>
        :
        <StyledSection>
            <FlexContainer gapRow={24} direction="column" className="rounded-md bg-white p-6">
                <table className="w-full">
                    <thead>
                        <tr>
                            <StyledTableHead>PRODUTO</StyledTableHead>
                            <StyledTableHead>QTD</StyledTableHead>
                            <StyledTableHead>SUBTOTAL</StyledTableHead>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map((movie, index) =>
                                <tr key={index}>
                                    <td className="pt-6" align="left">
                                        <FlexContainer justifyContent="flex-start" gapColumn={16}>
                                            <Image width={91} height={114} src={movie.image} alt={`Filme ${movie.title}`} />

                                            <FlexContainer direction="column" gapRow={8}>
                                                <StyledMovieTitle>{movie.title}</StyledMovieTitle>
                                                <StyledMoviePrice>R$ {FormatCurrencyText(movie.price)}</StyledMoviePrice>
                                            </FlexContainer>
                                        </FlexContainer>
                                    </td>
                                    <td className="" align="left">
                                        <FlexContainer justifyContent="flex-start" gapColumn={12}>
                                            <Image onClick={_ => dispatch(decreaseMovieQuantity(movie))} className="cursor-pointer" width={18} height={18} src="/icons/minus.svg" alt="Adicionar filme" />
                                            <StyledInput min={0} onChange={e => dispatch(changeMovieQuantity({ ...movie, quantity: Number(e.target.value) }))} type="number" value={movie.quantity} />
                                            <Image onClick={_ => dispatch(increaseMovieQuantity(movie))} className="cursor-pointer" width={18} height={18} src="/icons/plus.svg" alt="remover filme" />
                                        </FlexContainer>
                                    </td>
                                    <td className="" align="left">
                                        <StyledMoviePrice>R$ {FormatCurrencyText(movie.quantity * movie.price)}</StyledMoviePrice>
                                    </td>
                                    <td align="right">
                                        <Image onClick={_ => dispatch(removeMovieFromCart(movie))} className="cursor-pointer" width={18} height={18} src="/icons/trash.svg" alt="excluir filme" />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

                <StyledDivider></StyledDivider>

                <FlexContainer className="w-full" justifyContent="space-between">
                    <LinkButton path={PathEnum.purchase_success} text="FINALIZAR PEDIDO" />

                    <FlexContainer gapColumn={16}>
                        <StyledTotalPriceText>TOTAL</StyledTotalPriceText>
                        <StyledTotalPriceValue>R$ {FormatCurrencyText(movies.reduce((acc, curr) => acc += curr.price * curr.quantity, 0))}</StyledTotalPriceValue>
                    </FlexContainer>
                </FlexContainer>

            </FlexContainer>
        </StyledSection>

}