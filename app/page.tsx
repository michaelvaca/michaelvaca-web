import Image from 'next/image';

export default function Home() {
	return (
		<>
			<main className='container mx-auto w-full h-screen flex justify-center text-center items-center'>
				<h1
					className='text-4xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent pointer-events-none font-nunito font-bold uppercase tracking-widest'
					id='mv'
				>
					Michael P. Vaca
				</h1>
			</main>
		</>
	);
}
