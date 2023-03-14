import { useEffect } from "react";

const CitiesList = ({ cities }) => {
    console.log('вход', cities);
    useEffect(() => {
        console.log('get');
        // axios
        //     .get('https://netology-trainbooking.netoservices.ru/routes/cities?name={departure}')
        //     .then(res => console.log(res.data))
        fetch( `https://netology-trainbooking.netoservices.ru/routes/cities?name=${cities}` )
        .then( response => response.json())
        .then( data => console.log( data ));
    }, [cities])
    return(
        <div></div>
    )
};

export default CitiesList;
