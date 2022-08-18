import styles from '../styles/Home.module.css'

function CardUser({ user }) {

    return (
        <li className={styles.cardUser}>
            <div className="card text-bg-success mb-3" style={{width: "16rem", height:"170px"}}>
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                    <h5 className="card-title">{user.email}</h5>
                    <p className="card-text">{user.phone}</p>
                </div>
            </div>

        </li>

    );
}

export default CardUser;