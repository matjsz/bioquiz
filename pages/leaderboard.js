import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import LeaderboardUser from '../utils/components/LeaderboardUser'
import LeaderboardUserMobile from '../utils/components/LeaderboardUserMobile'
import { db } from '../utils/firebase'

// rosa: bg-[#ff8c9d]
// azul-blue: bg-[#313155]

export default function Leaderboard() {
	const [width, changeWidth] = useState(501)
	const [players, changePlayers] = useState([])
	const [getPlayers, changeGetPlayers] = useState(true)

	if(getPlayers){
		const playersRef = collection(db, "players")
		const q = query(playersRef, orderBy("points", "desc"), orderBy("time", "asc"))

		getDocs(q)
			.then((snap) => {
				var arr = []
				snap.forEach((doc) => {
					const data = {
						nickname: doc.id,
						score: doc.data().points,
						time: doc.data().time
					}

					arr.push(data)
				})
				changeGetPlayers(false)
				changePlayers(arr)
			})
	}

	useEffect(() => {
		try{
			setInterval(() => {
				changeWidth(window.screen.width)
			}, 1000)
		} catch(e){}
	})

	if(width <= 500){
		return (
			<div className='bg-[#313155] h-screen'>
				<Head>
					<script src="https://cdn.tailwindcss.com"></script>
					<title>Quiz de Biologia | Leaderboard</title>
				</Head>

				<div className='bg-[#ff8c9d] w-screen' style={{minHeight: '100vh'}}>
					<a href="/" className='absolute' style={{left: '10%', top: '4%', transform: 'translate(-50%, -50%)'}}><svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg></a>
					<p className='absolute text-5xl font-bold uppercase' style={{right: '45%', top: '4%', transform: 'translate(50%, -50%)'}}>Ranking</p>

					<div className='pt-16'>
						{
							players.map((player) => {
								return <LeaderboardUserMobile pos={players.indexOf(player)+1} nickname={player.nickname} score={player.score} time={new Date(player.time * 1000).toISOString().substr(11, 8)} />
							})
						}
					</div>
				</div>
			</div>
		)
	} else{
		return (
			<>
				<Head>
					<script src="https://cdn.tailwindcss.com"></script>
				<title>Quiz de Biologia | Leaderboard</title>
				</Head>

				<div className='bg-[#ff8c9d] w-screen' style={{minHeight: '100vh'}}>
					<a href="/" className='absolute' style={{left: '10%', top: '9%', transform: 'translate(-50%, -50%)'}}><svg class="w-24 h-24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg></a>
					<p className='text-8xl text-center font-bold uppercase'>Ranking</p>

					<div className='mt-10'>
						{
							players.map((player) => {
								return <LeaderboardUser pos={players.indexOf(player)+1} nickname={player.nickname} score={player.score} time={new Date(player.time * 1000).toISOString().substr(11, 8)} />
							})
						}
					</div>
				</div>
			</>
		)
	}
}
