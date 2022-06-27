import styles from './Statistics.module.css'
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return (
        <div>
            <section className={styles.statistics}>
                {title && <h2 className={styles.title}>{title}</h2>}

                <ul className={styles.stat__list}>
                    {stats.map(({ id, label, percentage }) => (
                        <li className={styles.item} key={id}>
                            <span className={styles.label}>{label}</span>
                            <span className={styles.percentage}>{percentage}%</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
}

export default Statistics;

