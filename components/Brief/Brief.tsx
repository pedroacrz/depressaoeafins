import styles from '../../styles/brief_component.module.scss'

type BriefData = {
    title: string;
    content: string;
    urlProfile: string;
    created_at: string;
    name: string
}

export const Brief = (props: BriefData) => {
    return <div className={styles.container}>

        <div className={styles.profile}>
            <div className={styles.imageProfile}></div>
            <p className={styles.nameProfile}>Anônimo <small className={styles.date}>{props.created_at.replace('T', ' às ').replace('.000Z','')}</small></p>
        </div>

        <div className={styles.content}>
            <h4 className={styles.title}>{props.title}</h4>
            <p className={styles.description}>{props.content}</p>
            <div className={styles.center}>
                <button className={styles.buttonAllContent}>Ver todo conteúdo</button>
            </div>
        </div>
    </div>
}