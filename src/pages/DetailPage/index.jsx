import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEntryById } from "../../hooks/useEntryById"

const DetailPage = () => {
    const { id } = useParams();
    const [entry, setEntry] = useState(null);

    console.log(id);
    const entryData = useEntryById(id);

};

export default DetailPage;
