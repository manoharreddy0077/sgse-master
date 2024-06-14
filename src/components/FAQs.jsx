import SectionHead from './SectionHead';
import { FaQuestion } from 'react-icons/fa';
import { faqs } from '../data';
import FAQ from './FAQ';

const FAQs = () => {
    return (
        <section className="faqs">
            <div className="container faqs__container">
                <SectionHead icon={<FaQuestion />} title={"Commitments"} />
                <div className="faqs__wrapper">
                    {
                        faqs.map(({ id, title, desc }) => {
                            return <FAQ key={id} title={title} desc={desc} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FAQs