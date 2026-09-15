import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import data from "../data/recipes.json"
import "../style/acceuil.css"

function Recipe() {
    let { id } = useParams();
    const navigate = useNavigate();

    const recipe = data.recipes.find((recipe)=> recipe.id === parseInt(id!));

    return (
        <>
                <div key={recipe?.id}>
                    <h2>{recipe?.name}</h2><img id="solo_image" src={recipe?.image} alt={recipe?.name} />
                    <p>{recipe?.ingredients}</p>
                    <p>{recipe?.instructions}</p>
                </div>
        </>
    )

}

export default Recipe;