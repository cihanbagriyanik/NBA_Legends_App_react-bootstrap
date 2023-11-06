

import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PlayerCard({ name, img, statistics }) {

    const [statistic, setStatistic] = useState(true)


    return (
        <Card className=' player-card rounded-2 p-0 ' role='button'
            onClick={() => setStatistic(!statistic)} >
            {(statistic == true)
                ? <Card.Img className=' cardImg' variant="top" src={img} />
                : <ListGroup className='flex-grow-1 ms-5 border-0 justify-content-center'>
                    {statistics.map((item, index) => {
                        return (
                            <li className='h5 text-start mb-4 list-unstyled' key={index}>🏀 {item} </li>
                        )
                    })}
                </ListGroup>
            }

            <Card.Footer className='cardFooter'>

                <Card.Title> {name} </Card.Title>
            </Card.Footer>

        </Card>
    );
}

export default PlayerCard;