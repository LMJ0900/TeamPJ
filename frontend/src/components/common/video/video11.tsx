import CA from '../video/CA.mp4';

function video11() {
    return (
        <>
            <video autoPlay loop muted>
                <source src={CA} type='video/mp4' />
            </video>
            
        </>
    );
}

export default video11;