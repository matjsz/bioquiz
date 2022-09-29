import { doc, setDoc } from 'firebase/firestore'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import QuestionContent from '../utils/components/QuestionContent'
import QuizButton from '../utils/components/QuizButton'
import QuizNumber from '../utils/components/QuizNumber'
import { db } from '../utils/firebase'
import questions from '../utils/questions'

// rosa: bg-[#ff8c9d]
// azul-blue: bg-[#313155]

export default function Home() {
	const [width, changeWidth] = useState(501)
	const [finished, changeFinished] = useState(false)
	const [playerNick, changePlayerNick] = useState("Carregando...")
	const [timer, changeTimer] = useState(0)
	const [question, changeQuestion] = useState(0)
	const [points, changePoints] = useState(0)
	const [rightAnswers, changeRightAnswers] = useState(0)

	const nextQuestion = () => {
		if(question < 98){
			changeQuestion(question+1)
		} else{
			changeFinished(true)

			const playerRef = doc(db, 'players', playerNick)
			setDoc(playerRef, { points: points, time: timer })
		}
	}
	const givePoint = (pointsToAdd) => {
        changePoints(points+pointsToAdd)
		changeRightAnswers(rightAnswers+1)
    }

	const handleReplay = () => {
		changeTimer(0)
		changeQuestion(0)
		changePoints(0)
		changeRightAnswers(0)
		changeFinished(false)
	}

	useEffect(() => {
		try{
			setInterval(() => {
				changeWidth(window.screen.width)
				changePlayerNick(window.localStorage.getItem('player-nick'))
			}, 1000)
		} catch{}

		let timerInterval = setInterval(() => {
			var value = timer+1
			changeTimer(value)
		}, 1000)

		if(question == 98){
			clearInterval(timerInterval)	
		}

		return ()=>{
			clearInterval(timerInterval)
		}
	})

	if(width <= 500){
		if(finished){
			return (<>
				<Head>
					<script src="https://cdn.tailwindcss.com"></script>
					<title>Quiz de Biologia</title>
				</Head>
				<div className='bg-[#313155] w-screen pb-5 pt-5' style={{minHeight: '100vh'}}>
					<div className='bg-[#313155] border-8 rounded-full mx-auto text-center w-56 h-56 bg-[#313155] border-[#ff8c9d]'>
						<p className='mt-8 text-9xl font-bold'>{points}</p>
					</div>
					<div onClick={() => {window.location = '/leaderboard'}} className='bg-[#313155] border-8 rounded-full mx-auto text-center w-52 h-52 bg-[#313155] border-[#ff8c9d] mt-5'>
						<p className='mt-8 font-bold'>
							<span>
								<svg class="mx-auto w-32 h-32" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
							</span>
						</p>
					</div>
					<div className='bg-[#313155] border-8 rounded-full mx-auto text-center w-52 h-52 bg-[#313155] border-[#ff8c9d] mt-5' onClick={handleReplay}>
						<p className='mt-8 font-bold'>
							<span>
								<svg class="mx-auto w-32 h-32" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>
							</span>
						</p>
					</div>
					<div className='text-center mt-10 px-5'>
						<p className='text-lg'>Sua pontuação: {points}</p>
						<p className='text-lg'>Tempo médio para cada questão: {new Date((timer/99) * 1000).toISOString().substr(11, 8)}</p>
						<p className='text-lg'>Respostas corretas: {rightAnswers}</p>
						<p className='text-lg'>Respostas erradas: {99-rightAnswers}</p>
					</div>
				</div>
			</>)
		} else{
			return (
				<>
					<Head>
						<script src="https://cdn.tailwindcss.com"></script>
						<title>Quiz de Biologia</title>
					</Head>
		
					<div className='bg-[#313155] w-screen h-screen'>
						<QuestionContent mobile={true} points={points} givePoint={givePoint} nextQuestion={nextQuestion} q={questions[question]} playerNick={playerNick} timer={timer} />
					</div>
				</>
			)
		}
	} else{
		if(finished){
			return (
				<>
					<Head>
						<script src="https://cdn.tailwindcss.com"></script>
						<title>Quiz de Biologia</title>
					</Head>
		
					<div className='bg-[#ff8c9d] w-screen h-screen overflow-hidden'>
						<div className='rounded-full bg-[#313155] mt-52' style={{width: '100vw', height: '200vh'}}>
							<button onClick={() => {window.location = '/leaderboard'}} className="absolute w-1/6 h-1/3 rounded-full bg-[#313155] border-[#ff8c9d]" style={{borderWidth: '1rem', left: '20%', top: '60%', transform: 'translate(-50%, -50%)'}}>
								<p className='text-center font-bold'>
									<span>
									<svg class="mx-auto w-32 h-32" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
									</span>
								</p>
							</button>
							<div className="absolute w-1/4 h-1/2 rounded-full bg-[#313155] border-[#ff8c9d]" style={{borderWidth: '1rem', left: '50%', top: '40%', transform: 'translate(-50%, -50%)'}}>
								<p className='text-center text-9xl font-bold mt-20'>{points}</p>
							</div>
							<button className="absolute w-1/6 h-1/3 rounded-full bg-[#313155] border-[#ff8c9d]" style={{borderWidth: '1rem', left: '80%', top: '60%', transform: 'translate(-50%, -50%)'}} onClick={handleReplay}>
								<p className='text-center font-bold'>
									<span>
									<svg class="mx-auto w-32 h-32" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>
									</span>
								</p>
							</button>

							<div className='absolute text-center' style={{bottom: '5%', left: '50%', transform: 'translate(-50%, -50%)'}}>
								<p className='text-lg'>Sua pontuação: {points}</p>
								<p className='text-lg'>Tempo médio para cada questão: {new Date((timer/99) * 1000).toISOString().substr(11, 8)}</p>
								<p className='text-lg'>Respostas corretas: {rightAnswers}</p>
								<p className='text-lg'>Respostas erradas: {99-rightAnswers}</p>
							</div>
						</div>
					</div>
				</>
			)
		} else{
			return (
				<>
					<Head>
						<script src="https://cdn.tailwindcss.com"></script>
						<title>Quiz de Biologia</title>
					</Head>
		
					<div className='bg-[#313155] w-screen h-screen'>
						<QuestionContent mobile={false} points={points} givePoint={givePoint} nextQuestion={nextQuestion} q={questions[question]} playerNick={playerNick} timer={timer} />
					</div>
				</>
			)
		}
	}
}
 