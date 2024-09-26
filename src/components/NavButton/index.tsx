import { Button } from "./styles";

interface ButtonProps {

    title: string;
    toNavigate: string;

}

export default function NavButton({ title, toNavigate }: ButtonProps) {
    return (
        <Button to={toNavigate}>
            {title}
        </Button>
    );
};
