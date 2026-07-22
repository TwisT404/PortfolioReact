import "./../styles/hamburger.css"
export default function Hamburger({ onClick, open }: { onClick: () => void; open: boolean }) {
    return (
        <div
            className={`hamburger ${open ? "open" : ""}`}
            onClick={onClick}
            role="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}