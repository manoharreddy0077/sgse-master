import { useState } from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';


const FAQ = ({ title, desc }) => {
    const [isAnswerShowing, setISAnswerShowing] = useState(false);
    return (
        <article className="faq" onClick={() => setISAnswerShowing(prev => !prev)}>
            <div>
                <h4>{title}</h4>
                <button className='faq__icon'>
                    {
                        isAnswerShowing ? <BsFillArrowUpCircleFill /> : <BsFillArrowDownCircleFill />
                    }
                </button>
            </div>
            {isAnswerShowing && <p>{desc}</p>}
        </article>
    )
}

export default FAQ