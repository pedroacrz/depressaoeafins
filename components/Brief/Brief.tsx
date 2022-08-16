import styles from '../../styles/brief_component.module.scss'

type BriefData = {
    title: string;
    content: string;
    urlProfile: string;
    date: string;
}

export const Brief = (props: BriefData) => {
    return <div className={styles.container}>

        <div className={styles.profile}>
            <div className={styles.imageProfile}></div>
            <p className={styles.nameProfile}>Fulano de tal <small className={styles.date}>11/08/2022 às 15:03</small></p>
        </div>

        <div className={styles.content}>
            <h4 className={styles.title}>Título do depoimento</h4>
            <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className={styles.center}>
                <button className={styles.buttonAllContent}>Ver todo conteúdo</button>
            </div>
        </div>
    </div>
}