import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css'

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function Statistics({ title, stats }) { 
  return (
  <section className={css.statistics}>
     {title.length > 0 && <h2 className={css.title}>{title}</h2>}
  <ul className={css.list}>{ stats.map(({ id, label, percentage }) =>( 

    <li className={css.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>
  ))}
    </ul>
    </section>
    )
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired,
    })),
    
};

