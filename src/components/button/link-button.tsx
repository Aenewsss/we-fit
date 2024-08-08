import { PathEnum } from "@/enum/path.enum"
import { StyledLink } from "./styles"

interface Props {
    text: string
    path: PathEnum
    className?: string
}

export default function LinkButton({ text, path ,className}: Props) {
    return <StyledLink className={className} href={path}>{text}</StyledLink>
}