
export default function Hello() {

    return (
        <div>
            <p>hello {sessionStorage.getItem(`fname`)} {sessionStorage.getItem(`lname`)} </p>
            <p>כל השדות הם שדות חובה!!!</p>
            <p>   בתעודת זהות יש להזין 8 תווים!!!</p>
        </div>
    )
}



