import React, { useState, useEffect } from "react";
import axios from "axios";

export const Twitter = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to load the Twitter widget script
  const loadTwitterScript = () => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);
  };

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get("http://192.168.1.109:5000/get_tweets");
        console.log("API Response:", response.data);

        const fetchedTweets = response.data.tweets || [];
        setTweets(fetchedTweets);
        setLoading(false);
        loadTwitterScript();
      } catch (err) {
        console.error("Error fetching tweets:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);

  if (loading) return <p>Loading tweets...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div > 
      <h1>Latest Tweets</h1>
      <div className="tweets-container ">
 
        {tweets.length === 0 && <p>No tweets available.</p>}
       
        {tweets.map((tweet, index) => (
          <div key={index} className="tweet-item bg-white p-4 m-2 rounded-lg shadow-md">
            <div dangerouslySetInnerHTML={{ __html: tweet.html }} />
          </div>
        ))}
      </div>
    </div>
  );
};
