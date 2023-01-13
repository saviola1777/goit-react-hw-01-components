import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css'

export function TransactionHistory({ items }) {
  return (
  <table className={css.table}>
  <thead >
    <tr className={css.column}>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

  <tbody>{items.map(({id,type,amount,currency})=>( 
    <tr className={css.column} key={id}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  ))}
    </tbody>
    </table>
  )
}
  
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id:  PropTypes.string.isRequired,
    type:  PropTypes.string.isRequired,
    amount:  PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  } ))
}
  
  
