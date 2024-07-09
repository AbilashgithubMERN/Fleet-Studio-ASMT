import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import DiffView from "./DiffView";
import axios from "axios";

const CommitPage = () =>{
    const { owner, repository, commitSHA} = useParams();
    const [commitData, setCommitData] = useState(null);

    useEffect(() => {
        const fetchCommitData = async () => {
            const response = await axios.get('http://localhost:5000/api/repos/${owner}/${repository}/commits/${commitSHA}');
            setCommitData(response.data)
        }
        fetchCommitData();

    },[owner, repository, commitSHA]);

    return (
        <div className="">
            {commitData && (
                <div>
                    <h1>Commit {commitSHA}</h1>
                    <p>Author: {commitData.author.name}</p>
                    <p>Date: {commitData.commit.committer.date}</p>
                    <DiffView diffData={commitData.files}/>
                </div>
            )}
        </div>
    );
}

export default CommitPage;