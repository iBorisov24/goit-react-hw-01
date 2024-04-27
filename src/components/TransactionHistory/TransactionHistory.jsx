import clsx from 'clsx';
import css from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
	return (
		<table className={clsx(css['table'])}>
			<thead>
				<tr>
					<th className={clsx(css['table-item'], css['title'])}>Type</th>
					<th className={clsx(css['table-item'], css['title'])}>Amount</th>
					<th className={clsx(css['table-item'], css['title'])}>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map(item => (
					<tr key={item.id}>
						<td className={clsx(css['table-item'], css['item'])}>
							{item.type}
						</td>
						<td className={clsx(css['table-item'], css['item'])}>
							{item.amount}
						</td>
						<td className={clsx(css['table-item'], css['item'])}>
							{item.currency}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default TransactionHistory;
