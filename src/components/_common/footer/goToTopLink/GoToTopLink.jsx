import styles from './goToTopLink.module.css'

export default function GoToTopLink() {

    const handleClick = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div id={styles.go_to_top_link}>
            <a href="#" onClick={handleClick}>
                <img src='/icons/arrow_upward.svg' alt="" />
                <img src='/media/png/logo_centerTie_White.png' alt="" />
            </a>
        </div>
    )
}