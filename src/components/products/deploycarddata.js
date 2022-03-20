import click from '../../assets/productspage/icons/click.png'
import bot from '../../assets/productspage/icons/bot.png'
import secure from '../../assets/productspage/icons/secure.png'

const data = [
    {
        id: 1,
        img: click,
        title: 'Two-click',
        sub:'deployment',
        para : 'Deploy bots in any local or cloud infrastructure without server authentication. Then simply launch your .neex file, and the automation is ready to go.'
    },
    {
        id: 2,
        img: bot,
        title: 'All kinds',
        sub:'of bots',
        para : 'With Bot Runner, you can empower your team with any number of attended, unattended, or hybrid bots.'
    },
    {
        id: 3,
        img: secure,
        title: 'Secure data',
        sub:'management',
        para : 'Bots don’t collect or store data more than needed to execute their tasks. The credentials granted are stored locally with Windows Credential Manager.'
    }
]

export default data;