import { useLocalSearchParams } from "expo-router";

const Food = () => {

    const {id} = useLocalSearchParams()


    return <h1>Food: {id}</h1>

}

export default Food;