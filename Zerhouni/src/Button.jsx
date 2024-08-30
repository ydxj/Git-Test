import React, { useState } from 'react';

const Click = () => {
    const [followers, setFollowers] = useState(0);
    const [isFollowing, setIsFollowing] = useState(false);

    const handleClick = () => {
        setFollowers(prevFollowers => prevFollowers + (isFollowing ? -1 : 1));
        setIsFollowing(prevIsFollowing => !prevIsFollowing);
    };

    return (
        <>
            <button className="button" onClick={handleClick}>
                {isFollowing ? "Unfollow" : "Follow me"}
            </button>
            <p className="followers">{followers}</p>
        </>
    );
};

export default Click;
