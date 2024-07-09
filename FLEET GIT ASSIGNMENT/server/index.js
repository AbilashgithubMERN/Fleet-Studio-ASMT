const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const Student = require('./Models/Student');
const axios = require("axios");

app.get('/api/repos/:owner/:repo/commits/:sha',async(req, res) => {
    const {owner, repo, sha} = req.params;
    try{
        const commitResponse = await axios.get('https://api/github.com/repos/${owner}/${repo}/commits/${sha}');
        res.json(commitResponse.data);
    }
    catch (err){
        res.status(500).json({error:'Error fetching commit data'});
    }
});

app.listen(PORT, () => console.log('Server is running on $(PORT}'));