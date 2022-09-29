export default function LeaderboardUser(props){
    return (
        <div className='container mx-auto mt-5'>
            <div className='bg-[#313155] rounded-3xl'>
                <div className='grid grid-row-1 grid-cols-2'>
                    <div className='flex gap-4 p-5'>
                        <p className='font-bold text-3xl'>#{props.pos}</p>
                        <img className='w-10 h-10' src={`https://avatars.dicebear.com/api/miniavs/${props.pos}.svg`}/>
                        <p className='font-bold text-3xl'>{props.nickname}</p>
                    </div>
                    <div className='flex justify-end p-5 gap-24 mr-12'>
                        <p className='font-bold text-3xl'>{props.score}</p>
                        <p className='font-bold text-3xl'>{props.time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}