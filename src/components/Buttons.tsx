type ButtonsProps = {
    text?: string;
}

export function Buttons(props: ButtonsProps) {
    return(
        <button>{props.text || 'Default'}</button>
    )
}