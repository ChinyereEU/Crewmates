import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import Card from "../components/Card";

const DesignerGallery = ({props}) => {
    const [designers, setDesigners] = useState([]);

    useEffect(() => {
        const fetchDesigners = async() => {
            const {data} = await supabase
                .from('Designers')
                .select()
                .order('created_at', {ascending: true})
                setDesigners(data);
        }
        setDesigners(props.data);
        fetchDesigners();
    }, [props]);



    // const updateDesigners = async(event) => {
    //     event.preventDefault();

    //     await supabase
    //         .from('Designers')
    //         .update({name:designer.name, style:designer.style, bio_summary:designer.bio_summary})
    //         .eq('id', id);
    //     window.location = "/";
    // }

    // const deleteDesigner = async(event) => {
    //     event.preventDefault();
        
    //     await supabase
    //         .from('Designers')
    //         .delete()
    //         .eq('id', id);
    //     window.location = "http://localhosy:3000/";
    // }


    return (
        <div className="DesignerGallery">
            {/* <h2>Designer Gallery</h2> */}
            {/**information about each designer */}
            {/* <div className="designer-list">
                {designers.map((designer) => (
                    <div key={designer.id} className="designer-card">
                        <h3>{designer.name}</h3>
                        <p><strong>Style:</strong> {designer.style}</p>
                        <p><strong>Bio:</strong> {designer.bio_summary}</p>
                    </div>
                ))}
            </div> */}
            {
                designers && designers.length > 0 ?
                designers.map((designer,index) => 
                    <Card id={designer.id} name={designer.name} style={designer.style} bio_summary={designer.bio_summary} />
                ) : <h2>{'No designers Yet'}</h2>
            }
        </div>
    );
};

export default DesignerGallery;