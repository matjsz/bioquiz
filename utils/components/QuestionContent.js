import QuizNumber from "./QuizNumber"
import QuizButton from "./QuizButton"
import { useState } from "react"

export default function QuestionContent(props){
    if(props.mobile){
        return <div className='container mx-auto px-10 pt-10'>
                    <div className='flex'>
                        <QuizNumber n={props.q.questionNumber} />
                        <p className='font-bold text-gray-400 mx-auto'>{new Date(props.timer * 1000).toISOString().substr(11, 8)}</p>
                    </div>
                    <p className='font-bold text-white pt-5 mb-5'>
                        {props.q.question}
                    </p>
                    
                    {props.q.answers.map((answer) => {
                        return <QuizButton givePoint={props.givePoint} nextQuestion={props.nextQuestion} r={answer} i={props.q.answers.indexOf(answer)} q={props.q} answer={props.q.answer} />
                    })}
                </div>
    } else{
        return <div className='container mx-auto px-20 pt-10'>
                    <div className='flex'>
                        <QuizNumber n={props.q.questionNumber} />
                        <p className='font-bold text-gray-400 mx-auto'>{new Date(props.timer * 1000).toISOString().substr(11, 8)}</p>
                        <p className='absolute' style={{right: '10%', top: '7%', transform: 'translate(-50%, -50%)'}}>Jogando como: <strong>{props.playerNick}</strong></p>
                    </div>
                    <p className='font-bold text-white pt-5 mb-5'>
                        {props.q.question}
                    </p>
                    
                    {
                        props.q.answers.map((answer) => {
                            return <QuizButton givePoint={props.givePoint} nextQuestion={props.nextQuestion} r={answer} i={props.q.answers.indexOf(answer)} q={props.q} answer={props.q.answer} />
                        })
                    }
                </div>
    }
}