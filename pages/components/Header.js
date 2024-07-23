import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
        <header className=" row mb-4" >
            <div className="col-1">
            <span class="material-symbols-outlined mt-4"> home </span>
            </div>
            <div className="col-11 mt-4">
                <strong> BidNest </strong> - Find houses to bid and buy
            </div>
        </header>
        </div>
    )
}

export default Header;