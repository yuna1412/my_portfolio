import "../../styles/components/layout/footer.scss";

export default function Footer() { 
    return (
        <footer className="footer">
            <div className="footer_inner">
                <a href="#" className="footer_iconArea">
                    <img src="/src/assets/images/github.svg" alt="Logo"></img>
                    <span>Github</span>
                </a>
                <p className="footer_text">© 2026 Yuna Tamiya</p>
            </div>
        </footer>
    );
}
