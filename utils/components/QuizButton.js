export default function QuizButton(props){
    const handleAnswer = () => {
        if(props.q.answer == props.i){
            props.givePoint(props.q.points)
            props.nextQuestion()
        } else{
            props.nextQuestion()
        }
    } 

    return (
        <div className='rounded-2xl bg-[#ff8c9d] mt-6 py-2 text-center' onClick={handleAnswer}>
            <button className="w-full font-bold">{props.r}</button>
        </div>
    )
}