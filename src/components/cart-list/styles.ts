import styled from "styled-components";

export const StyledTableHead = styled.th`
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-align: left;
    color: #999999;
`

export const StyledSection = styled.section`
    padding: 24px;
    gap: 24px;
    border-radius: 4px;
`

export const StyledMovieTitle = styled.span`
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-align: left;
    color: #2F2E41;
`

export const StyledMoviePrice = styled(StyledMovieTitle)`
    font-size: 16px;
    line-height: 21.79px;
`

export const StyledInput = styled.input`
    border: 1px solid #D9D9D9;
    width: 72px;
    height: 26px;
    text-align:center;
    padding: 0 16px;
    border-radius: 4px;
    display:flex;
`

export const StyledDivider = styled.div`
    background: #999999;
    height:1px;
    width:100%;
`

export const StyledTotalPriceText = styled.span`
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-align: center;
    color: #999999;
`

export const StyledTotalPriceValue = styled.span`
    font-size: 24px;
    font-weight: 700;
    line-height: 32.68px;
    text-align: center;
    color: #2F2E41;
`