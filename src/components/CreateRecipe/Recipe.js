import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import '../CreateRecipe/Recipe.css'


function Recipe() {
    const history = useHistory();

    //declaring useState and initially initialize the empty string
    //created to store the recipe inputs 

    const[recipe, setRecipe] = useState({
        recipe_name: "",
        chef_name:"",
        prep_time:"",
        cuisine_type:"",
        ingredients:""
    });

    //declaring the global variable, name value
    //refers key and value for the form 
    var name, value;
    //declaring a function that will target the recipe input
    //whatever change on the form will be handle by this function
    const handleInputs = (e) => {
     
        name = e.target.name;
        value= e.target.value;
        setRecipe({...recipe,[name]:value});
    }
    //declaring a function that will post the user input
    const PostData = async(e) =>{
        e.preventDefault();
        const {recipe_name, chef_name, prep_time, cuisine_type, ingredients}=recipe;
        //it is a root for to post recipe
       const res =  await fetch("/api/user/personalrecipe", {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
            recipe_name, chef_name, prep_time, cuisine_type, ingredients
        })
       });
       const data = await res.json();
  
       
  
       if(res.status=== 422 || !data){
           window.alert("Invalid Creation ");
           console.log("Invalid Creation");
       }else{
        window.alert("Recipe Creation Successful");
        console.log("Recipe Creation Successful");
        history.push("/api/user/personalrecipe")
       }
    }
    
    return (
        <div className="recipe-box">
            <div className="title">Create Recipe</div>
            <form method="POST">
                <div className="recipe-details">
                    <div className='input-box'>
                        <span className= "details">RECIPE NAME</span>
                        <input 
                        type="text" 
                        placeholder="Enter recipe name"
                        name="recipe_name"
                        value={recipe.recipe_name}
                        onChange ={handleInputs}></input>
                    </div>

                    <div className='input-box'>
                        <span className= "details">CHEF NAME</span>
                        <input 
                        type="text" 
                        placeholder="Enter chef name" 
                        name="chef_name" 
                        value ={recipe.chef_name} 
                        onChange ={handleInputs}></input>
                    </div>


                    <div className='input-box'>
                        <span className= "details">PREPRATION TIME</span>
                        <input 
                        type="text" 
                        placeholder="Enter prepration time"
                        name="prep_time"
                        value ={recipe.prep_time}
                        onChange ={handleInputs}></input>
                    </div>


                    <div className='input-box'>
                        <span className= "details">CUISINE TYPE</span>
                        <input 
                        type="text" 
                        placeholder="Enter cuisine type"
                        name="cuisine_type"
                        value ={recipe.cuisine_type}
                        onChange ={handleInputs}
                        ></input>
                    </div>

                    <div className='input-box'>
                        <span className= "details">INGREDIENTS</span>
                        <textarea name ="ingredients" onChange ={handleInputs} value={recipe.ingredients}> </textarea>
                    </div>
                    <div className="button">
                        <input 
                        type="submit" 
                        value="Create"
                        onClick ={PostData}></input>
                    </div>
                </div>
            </form>
        
      </div>
    )
}

export default Recipe
