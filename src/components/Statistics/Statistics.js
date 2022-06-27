import styles from './Statistics.modules.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>

            <ul className={styles.stat__list}>
                {stats.map(({ id, label, percentage }) => (
                    <li className={styles.list__item} key={id}>
                        <span className={styles.label}>{label}</span>
                        <span className={styles.percentage}>{percentage}%</span>
                    </li>
                ))}

            </ul>
        </section>
    );
};

Statistics.PropTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),


}
export default Statistics;