import styles from "./styles.module.css"

const Image = ({ image }) => {
    console.log('image', image);

    return <div className={styles.wrapper}>
        {typeof image === 'string' ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>

}

export default Image