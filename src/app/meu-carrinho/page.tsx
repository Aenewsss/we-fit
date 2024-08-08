'use client'
import CartList from "@/components/cart-list/cart-list";
import { Container } from "@/components/container";
import Empty from "@/components/empty/empty";
import { IStore } from "@/redux/types";
import { useSelector } from "react-redux";

export default function Page() {
    const { movies } = useSelector((store: IStore) => store.cart)

    if(!movies.length) return <Empty />
    
    return (
        <Container>
            <CartList />
        </Container>
    )
}