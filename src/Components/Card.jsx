import React from 'react'

const Card = (props) => {
    const { img,  descript } = props.data;

    return (
        <div>
            <div class="card">
            <img src={img} />
            <div class="descriptions">
                <p>
                    {descript}
                </p>
                <button>
                    <i class="fab fa-youtube"></i>
                    Play trailer on YouTube
                </button>
            </div>
        </div>

            
        </div>
    )
}

export default Card
