import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'


// rosa: bg-[#ff8c9d]
// azul-blue: bg-[#313155]

export default function Home() {
	const [width, changeWidth] = useState(501)
	const [firstLetter, changeFirstLetter] = useState('')
	const [secondLetter, changeSecondLetter] = useState('')
	const [thirdLetter, changeThirdLetter] = useState('')
	const [invalidNick, changeInvalidNick] = useState(false)

	useEffect(() => {
		try{
			setInterval(() => {
				changeWidth(window.screen.width)
			}, 1000)
		} catch{}
	})

	const handleFirstLetter = (e) => {
		changeFirstLetter(e.target.value.toUpperCase()[0])
	}
	const handleSecondLetter = (e) => {
		changeSecondLetter(e.target.value.toUpperCase()[0])
	}
	const handleThirdLetter = (e) => {
		changeThirdLetter(e.target.value.toUpperCase()[0])
	}
	const handlePlay = () => {
		if(firstLetter.trim().length > 0 && secondLetter.trim().length > 0 && thirdLetter.trim().length > 0){
			const playerNick = firstLetter+secondLetter+thirdLetter
			window.localStorage.setItem('player-nick', playerNick)
			window.location = '/quiz'
		} else{
			changeInvalidNick(true)
			changeFirstLetter('')
			changeSecondLetter('')
			changeThirdLetter('')
		}
	}

	if(width <= 500){
		return (
			<div className='bg-[#313155] h-screen'>
				<Head>
					<link href="https://cdn.jsdelivr.net/npm/daisyui@2.31.0/dist/full.css" rel="stylesheet" type="text/css" />
					<script src="https://cdn.tailwindcss.com"></script>
					<title>Quiz de Biologia</title>
				</Head>

				<div className='grid grid-col-1 grid-rows-2 bg-[#ff8c9d]'>
					<div className='bg-[#ff8c9d] mx-auto'>
						<div className='flex ml-8'>
							<p style={{fontSize: '10rem'}} className='text-[#313155] font-bold'>3</p>
							<p style={{fontSize: '10rem'}} className='text-[#313155] font-bold'>C</p>
						</div>
						<div className='flex flex-wrap'>
							<div className='mx-auto mb-6 text-center'>
								<p className='text-6xl uppercase font-light'>Quiz de</p>
								<p className='text-6xl uppercase font-bold'>Biologia</p>
							</div>
						</div>
					</div>
					<div className='bg-[#313155] pb-36'>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff8c9d" fill-opacity="1" d="M0,288L34.3,261.3C68.6,235,137,181,206,149.3C274.3,117,343,107,411,133.3C480,160,549,224,617,213.3C685.7,203,754,117,823,85.3C891.4,53,960,75,1029,112C1097.1,149,1166,203,1234,234.7C1302.9,267,1371,277,1406,282.7L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
						<div className='flex flex-wrap'>
							<div className='mx-auto'>
								<div className='flex my-auto mx-auto mt-12 gap-4'>
									<label htmlFor="modal-nick" className="cursor-pointer modal-button rounded-full bg-[#ff8c9d] text-3xl uppercase font-bold px-6 py-2">Jogar</label>
									<input type="checkbox" id="modal-nick" className="modal-toggle" />
									<div className="modal">
										<div className="modal-box bg-[#313155]">
											<h3 className="font-bold text-center text-lg">Escolha um nickname para jogar</h3>
											
											<div className='flex'>
												<input value={firstLetter} onChange={handleFirstLetter} type='text' className='bg-[#313155] w-1/3 text-6xl text-center m-5 border-y-4 border-[#ff8c9d] focus:outline-none'></input>
												<input value={secondLetter} onChange={handleSecondLetter} type='text' className='bg-[#313155] w-1/3 text-6xl text-center m-5 border-y-4 border-[#ff8c9d] focus:outline-none'></input>
												<input value={thirdLetter} onChange={handleThirdLetter} type='text' className='bg-[#313155] w-1/3 text-6xl text-center m-5 border-y-4 border-[#ff8c9d] focus:outline-none'></input>
											</div>
											
											<div onClick={handlePlay} className='py-5 text-center'>
												<a href="/quiz" class="cursor-pointer modal-button rounded-full bg-[#ff8c9d] text-3xl uppercase font-bold px-6 py-2">Jogar</a>
											</div>
											
										</div>
									</div>
									<button class="rounded-full bg-[#ff8c9d] text-3xl uppercase font-bold px-6 py-2">Rank</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	} else{
		return (
			<>
				<Head>
					<link href="https://cdn.jsdelivr.net/npm/daisyui@2.31.0/dist/full.css" rel="stylesheet" type="text/css" />
					<script src="https://cdn.tailwindcss.com"></script>
					<title>Quiz de Biologia</title>
				</Head>

				<div className='flex flex-nowrap'>
					<div className='bg-[#ff8c9d] relative w-2/5 h-screen'>
						<p style={{fontSize: '20rem', marginTop: '15vh'}} className='text-[#313155] font-bold absolute right-0'>3</p>
					</div>
					<div className='bg-[#313155] grid grid-rows-2 grid-col-1 h-screen w-screen'>
						<div className='flex flex-wrap sm:mt-0' style={{marginTop: '15vh'}}>
							<p style={{fontSize: '20rem'}} className='text-[#ff8c9d] font-bold'>C</p>
							<div className='mt-36 lg:ml-8 mr-10'>
								<p className='text-6xl uppercase font-light'>Quiz de</p>
								<p className='text-6xl uppercase font-bold'>Biologia</p>
								<div className='flex my-auto mx-auto mt-12 gap-4'>
									<label htmlFor="modal-nick" class="cursor-pointer modal-button rounded-full bg-[#ff8c9d] text-3xl uppercase font-bold px-6 py-2">Jogar</label>
									<input type="checkbox" id="modal-nick" className="modal-toggle" />
									<div className="modal">
										<div className="modal-box bg-[#313155]">
											<h3 className="font-bold text-center text-lg">Escolha um nickname para jogar</h3>
											
											<div className='flex gap-5'>
												<input value={firstLetter} onChange={handleFirstLetter} type='text' className='bg-[#313155] w-1/3 text-9xl text-center m-5 border-y-4 border-[#ff8c9d] focus:outline-none'></input>
												<input value={secondLetter} onChange={handleSecondLetter} type='text' className='bg-[#313155] w-1/3 text-9xl text-center m-5 border-y-4 border-[#ff8c9d] focus:outline-none'></input>
												<input value={thirdLetter} onChange={handleThirdLetter} type='text' className='bg-[#313155] w-1/3 text-9xl text-center m-5 border-y-4 border-[#ff8c9d] focus:outline-none'></input>
											</div>
											
											<div onClick={handlePlay} className='py-5 text-center'>
												<a class="cursor-pointer modal-button rounded-full bg-[#ff8c9d] text-3xl uppercase font-bold px-6 py-2">Jogar</a>
											</div>
											{invalidNick ? <p className='text-red-400 text-center'>Nickname inválido!</p> : <></>}
										</div>
									</div>
									<button class="rounded-full bg-[#ff8c9d] text-3xl uppercase font-bold px-6 py-2" onClick={() => {window.location="/leaderboard"}}>Rank</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
