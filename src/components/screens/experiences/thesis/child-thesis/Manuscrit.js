import Card from 'react-bootstrap/Card';
import thesis from '../../../../content/docs/graff_2020.pdf'

function Manuscrit() {
    return(
        <Card body className='cardBox' >
            <iframe title='pdfThesis' src= {thesis} className='pdfThesis'/>
        </Card>
    )
}

export default Manuscrit;