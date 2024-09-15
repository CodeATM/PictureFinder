import React from 'react'
import { fetchUser } from '@lib/DataFetching'
import { FaInstagram, FaTwitter, FaLink } from 'react-icons/fa';

const userInfo = async ({username}) => {
  const userDetails = await fetchUser(username)
  const {
    name,
    bio,
    profile_image,
    social,
    followers_count,
    following_count,
    location,
    portfolio_url,
    instagram_username,
    twitter_username
  } = userDetails;
  return (
    <div className="p-4 border border-gray-200 rounded-md shadow-md max-w-[40px] lg:space-y-4 ">
    <div className="flex items-center space-x-4">
      <img
        src={profile_image?.large}
        alt={name}
        className="w-32 h-32 rounded-full"
      />
      <div>
        <h1 className="text-2xl font-semibold">{name}</h1>
        {bio && <p className="mt-2 text-gray-600">{bio}</p>}
      </div>
    </div>
    {location && (
      <div className="mt-4">
        <h2 className="text-lg font-medium">Location</h2>
        <p className="text-gray-700">{location}</p>
      </div>
    )}
    <div className="mt-4">
      <h2 className="text-lg font-medium">Followers</h2>
      <p className="text-gray-700">{followers_count}</p>
    </div>
    <div className="mt-4">
      <h2 className="text-lg font-medium">Following</h2>
      <p className="text-gray-700">{following_count}</p>
    </div>
    {portfolio_url && (
      <div className="mt-4">
        <h2 className="text-lg font-medium">Portfolio</h2>
        <a href={portfolio_url} className="text-blue-600 flex items-center">
          <FaLink className="mr-2" /> {portfolio_url}
        </a>
      </div>
    )}
    {instagram_username && (
      <div className="mt-4">
        <h2 className="text-lg font-medium">Instagram</h2>
        <a href={`https://instagram.com/${instagram_username}`} className="text-blue-600 flex items-center">
          <FaInstagram className="mr-2" /> {instagram_username}
        </a>
      </div>
    )}
    {twitter_username && (
      <div className="mt-4">
        <h2 className="text-lg font-medium">Twitter</h2>
        <a href={`https://twitter.com/${twitter_username}`} className="text-blue-600 flex items-center">
          <FaTwitter className="mr-2" /> {twitter_username}
        </a>
      </div>
    )}
  </div>
  )
}

export default userInfo