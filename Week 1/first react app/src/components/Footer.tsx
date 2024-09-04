type FooterProps = {
    title: string;
};

function Footer(props:FooterProps) {
    return (
        <>
        <p>{props.title}</p>
        </>
    );
}
    export default Footer;
