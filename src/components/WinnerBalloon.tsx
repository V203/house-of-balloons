import IBalloon from "../IBalloon";
import BalloonImages from "../assets/BalloonImages";

let WinningBalloon = (props: any) => {

  
    return (
        <>
            <div className="winnerBalloon" style={{ display: props.displayBool ? "flex" : "none" }} >
                <h1>
                    Winner is {props.color.toUpperCase()}
                </h1>
                <div>
               { props ?<BalloonImages key={props.color} subsurface={props.subsurface} count={props.count} basecolor={props.basecolor} />:""}
               <img  width={150} height={100} src="./prize.svg"/>

                </div>
            </div>
        </>)
}

export default WinningBalloon;