import React from "react";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { supabase } from "../client";
import { useParams } from "react-router-dom";

const AddDesigner = () => {
    const {id} = useParams();
    const [designer, setDesigner] = useState({id: null, name: "", style: "", bio_summary: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setDesigner((prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    
    const addDesigner = async(event) => {
        event.preventDefault();

        await supabase
            .from('Designers')
            .insert({name:designer.name, style:designer.style, bio_summary:designer.bio_summary})
            .select();

            // addDesigner({ ...post, id: Date.now().toString() });
            // navigate("/designer-gallery");


        window.location = "/";
    };

    const deleteDesigner = async(event) => {
        event.preventDefault();
        
        await supabase
            .from('Designers')
            .delete()
            .eq('id', id);
        window.location = "http://localhosy:3000/";
    }


    return (
        <div>
            {/* <h2>Add a Designer</h2> */}
            {/**my form content */}
            <div>
                <form>
                    <label for="name">Name</label> <br />
                    <input type="text" id="name" name="name" onChange={handleChange} /><br />
                    <br />

                    <label for="style">Style</label><br />
                    <input type="text" id="style" name="style" onChange={handleChange} /><br />
                    <br/>

                    <label for="bio_summary">Bio-summary</label><br />
                    <textarea rows="5" cols="50" id="bio_summary" name="bio_summary" onChange={handleChange}></textarea>
                    <br />

                    <input type="submit" value="Submit" onClick={AddDesigner}/>
                </form>
            </div>
        </div>
    );
};

export default AddDesigner;