import logistics from '../assets/icons/logistics.png'
import manufacturing from '../assets/icons/manufacturing.png'
import healthcare from '../assets/icons/healthcare.png'
import finance from '../assets/icons/finance.png'
import logisticsbg from '../assets/logistics-bg.webp'
import manufacturingbg from '../assets/manufacturing-bg.webp'
import healthcarebg from '../assets/healthcare-bg.webp'
import financebg from '../assets/finance-bg.webp'

const data = [
    {   
        id: 1,
        icon: logistics,
        title: 'LOGISTICS',
        para: 'Eliminate costly and time-consuming manual functions thanks to the automation of strategic but monotonous operations performed by humans in the back office. In a business driven by speed, RPA solutions will improve operational efficiency and productivity, resulting in faster delivery.&nbsp;',
        img: logisticsbg,
    },
    {
        id: 2,
        icon: manufacturing,
        title: 'MANIFACTURING',
        para: 'Thanks to RPA, manufacturers can predict the risk of production mistakes even before they occur. Solutions based on Artificial Intelligence and Machine Learning ensure flawless and cost-effective repeatability, which translates into higher quality and lower prices.',
        img: manufacturingbg,
    },
    {
        id: 3,
        icon: healthcare,
        title: 'HEALTHCARE',
        para: 'Healthcare providers can streamline repetitive and time-consuming administrative paperwork to reduce operational costs. This means they can focus their energy and attention on what really matters: delivering high quality care to patients. Robotic Process Automation solutions assist hospital management in patient scheduling, billing and data processing.',
        img: healthcarebg,
    },
    {
        id: 4,
        icon: finance,
        title: 'FINANCES AND BANKING',
        para: 'RPA supports Banking and Financial Services in the reduction of mundane back-office tasks and 24/7 customer care. This helps your business eliminate human error when processing voluminous customer data, enhance customer satisfaction levels and gain a competitive edge.',
        img: financebg,
    },
]

export default data;