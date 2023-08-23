import Link from 'next/link';

const currentYear = new Date().getFullYear();

export default function Footer() {
	return (
		<>
			<footer>
				<div className='flex justify-center text-xs text-slate-500'>
					{`Copyright ${currentYear} Michael Vaca`}
				</div>
			</footer>
		</>
	);
}
